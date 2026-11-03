const HUBSPOT_CONTACTS_UPSERT_URL = 'https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert'

async function upsertHubspotContact(email, properties) {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN
  if (!token || !email) return

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
  }
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
  business_type, monthly_revenue, launch_timeline,
  utm_source, utm_campaign, utm_content,
}) {
  const { firstname, lastname } = splitName(full_name)

  const properties = { inquiry_type: 'rawnn', lifecyclestage: 'lead' }
  if (firstname) properties.firstname = firstname
  if (lastname) properties.lastname = lastname
  if (phone) properties.phone = phone
  if (business_name) properties.company = business_name
  if (business_type) properties.ecommerce_business_type = business_type
  if (monthly_revenue) properties.ecommerce_monthly_revenue = monthly_revenue
  if (launch_timeline) properties.ecommerce_launch_timeline = launch_timeline
  if (utm_source) properties.utm_source = utm_source
  if (utm_campaign) properties.utm_campaign = utm_campaign
  if (utm_content) properties.utm_content = utm_content

  await upsertHubspotContact(email, properties)
}
