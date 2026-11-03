import { Resend } from "resend";
import EmailTemplate from "../../../components/EmailTemplate";
import { pushHubspotLead } from "../../../lib/hubspot";

export async function POST(req) {
  try {
    const body = await req.json();
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.CONTACT_FORM_RECIPIENT],
      subject: 'Enquiry From Website',
      react: EmailTemplate(body),
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    try {
      await pushHubspotLead(body);
    } catch (hubspotError) {
      console.error('HubSpot lead push error:', hubspotError);
    }

    return Response.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
