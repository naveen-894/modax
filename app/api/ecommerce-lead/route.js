import { pushHubspotEcommerceLead } from "../../../lib/hubspot";

export async function POST(req) {
  try {
    const body = await req.json();
    await pushHubspotEcommerceLead(body);
    return Response.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Ecommerce lead push error:', error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
