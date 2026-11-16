const HUBSPOT_CONTACTS_UPSERT_URL = 'https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert'
const HUBSPOT_CONTACTS_CREATE_URL = 'https://api.hubapi.com/crm/v3/objects/contacts'

async function upsertHubspotContact(email, properties) {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN
  if (!token) return false

  // No email to dedupe on (upsert requires a unique idProperty) — create the
  // contact directly so leads submitted with only a phone number aren't dropped.
  if (!email) {
    const res = await fetch(HUBSPOT_CONTACTS_CREATE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ properties }),
    })

    if (!res.ok) {
      const errText = await res.text().catch(() => '')
      console.error('HubSpot lead push failed:', res.status, errText)
      return false
    }

    return true
  }

  const res = await fetch(HUBSPOT_CONTACTS_UPSERT_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      inputs: [{ idProperty: 'email', id: email, properties: { email, ...properties } }],
    }),
  })

  if (!res.ok) {
    const errText = await res.text().catch(() => '')
    console.error('HubSpot lead push failed:', res.status, errText)
    return false
  }

  return true
}

function splitName(name) {
  const [firstname, ...rest] = (name || '').trim().split(/\s+/).filter(Boolean)
  return { firstname, lastname: rest.join(' ') }
}

export async function pushHubspotLead({ name, email, phone, company, message, inquiryType }) {
  const { firstname, lastname } = splitName(name)

  const properties = {}
  if (firstname) properties.firstname = firstname
  if (lastname) properties.lastname = lastname
  if (phone) properties.phone = phone
  if (company) properties.company = company
  if (message) properties.message = message
  if (inquiryType) properties.inquiry_type = inquiryType

  await upsertHubspotContact(email, properties)
}

export async function pushHubspotEcommerceLead({
  full_name, business_name, phone, email,
  business_type, sales_channel, monthly_revenue, launch_timeline,
  utm_source, utm_campaign, utm_content, lead_score,
}) {
  const { firstname, lastname } = splitName(full_name)

  const coreProperties = { inquiry_type: 'rawnn', lifecyclestage: 'lead' }
  if (firstname) coreProperties.firstname = firstname
  if (lastname) coreProperties.lastname = lastname
  if (phone) coreProperties.phone = phone
  if (business_name) coreProperties.company = business_name
  if (utm_source) coreProperties.utm_source = utm_source
  if (utm_campaign) coreProperties.utm_campaign = utm_campaign
  if (utm_content) coreProperties.utm_content = utm_content

  // ecommerce_lead_score has no matching property in HubSpot, which made
  // every push fail validation and fall back to the lossy message below —
  // kept only in that fallback text, never sent as a structured property.
  const properties = { ...coreProperties }
  if (business_type) properties.ecommerce_business_type = business_type
  if (sales_channel) properties.ecommerce_sales_channel = sales_channel
  if (monthly_revenue) properties.ecommerce_monthly_revenue = monthly_revenue
  if (launch_timeline) properties.ecommerce_launch_timeline = launch_timeline

  const ok = await upsertHubspotContact(email, properties)
  if (ok) return

  // HubSpot rejects the whole batch upsert if any dropdown value or custom
  // property is unknown/misconfigured. Retry with only well-known core
  // fields, folding the form answers into "message" so the lead is never
  // lost even if the custom ecommerce_* properties are broken.
  const fallbackProperties = {
    ...coreProperties,
    message:
      `[Rawnn demo form] Lead score: ${lead_score || ''} | Business type: ${business_type || ''} | ` +
      `Monthly revenue: ${monthly_revenue || ''} | Launch: ${launch_timeline || ''} | Sells today: ${sales_channel || ''}`,
  }
  await upsertHubspotContact(email, fallbackProperties)
}
