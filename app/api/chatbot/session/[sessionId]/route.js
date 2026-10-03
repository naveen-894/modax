import { backendHeaders, backendUrl, UNAVAILABLE_RESPONSE_BODY } from '../../../../../lib/chatbotBackend'

export const dynamic = 'force-dynamic'

export async function DELETE(req, { params }) {
  try {
    const res = await fetch(backendUrl(`/api/chatbot/session/${encodeURIComponent(params.sessionId)}`), {
      method: 'DELETE',
      headers: backendHeaders(),
    })
    const data = await res.json().catch(() => ({}))
    return Response.json(data, { status: res.status })
  } catch (error) {
    return Response.json(UNAVAILABLE_RESPONSE_BODY, { status: 503 })
  }
}
