import { backendHeaders, backendUrl, UNAVAILABLE_RESPONSE_BODY } from '../../../../lib/chatbotBackend'

export const dynamic = 'force-dynamic'

export async function POST(req) {
  let body
  try {
    body = await req.json()
  } catch {
    return Response.json({ detail: 'Invalid request body' }, { status: 400 })
  }

  try {
    const res = await fetch(backendUrl('/api/chatbot/lead'), {
      method: 'POST',
      headers: backendHeaders(),
      body: JSON.stringify(body),
    })
    const data = await res.json().catch(() => ({}))
    return Response.json(data, { status: res.status })
  } catch (error) {
    return Response.json(UNAVAILABLE_RESPONSE_BODY, { status: 503 })
  }
}
