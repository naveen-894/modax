import { backendHeaders, backendUrl, UNAVAILABLE_RESPONSE_BODY } from '../../../../lib/chatbotBackend'

export const dynamic = 'force-dynamic'

export async function POST(req) {
  let body
  try {
    body = await req.json()
  } catch {
    return Response.json({ detail: 'Invalid request body' }, { status: 400 })
  }

  let backendRes
  try {
    backendRes = await fetch(backendUrl('/api/chatbot/message'), {
      method: 'POST',
      headers: backendHeaders(),
      body: JSON.stringify(body),
    })
  } catch (error) {
    return Response.json(UNAVAILABLE_RESPONSE_BODY, { status: 503 })
  }

  if (!backendRes.ok || !backendRes.body) {
    const data = await backendRes.json().catch(() => ({ detail: 'Chat request failed' }))
    return Response.json(data, { status: backendRes.status })
  }

  // Stream the backend's SSE response straight through to the browser —
  // the widget reads this with its own fetch + ReadableStream reader.
  return new Response(backendRes.body, {
    status: 200,
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  })
}
