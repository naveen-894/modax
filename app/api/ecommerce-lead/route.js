import { pushHubspotEcommerceLead } from "../../../lib/hubspot";
import { isDisposableEmail, scoreLead } from "../../../lib/leadQuality";

export async function POST(req) {
  try {
    const body = await req.json();

    if (isDisposableEmail(body.email)) {
      return Response.json({ ok: false, error: "disposable_email" }, { status: 422 });
    }

    const lead_score = scoreLead({
      monthly_revenue: body.monthly_revenue,
      launch_timeline: body.launch_timeline,
    });

    await pushHubspotEcommerceLead({ ...body, lead_score });
    return Response.json({ ok: true, lead_score }, { status: 200 });
  } catch (error) {
    console.error('Ecommerce lead push error:', error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
