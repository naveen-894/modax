// Shared helpers for the Next.js API routes that proxy the AI chatbot widget
// to the FastAPI backend (see app/api/chatbot/*). Keeping the backend URL and
// shared secret here, read only from server-side env vars, means neither is
// ever sent to the browser — the widget only ever talks to same-origin
// /api/chatbot/* routes.
const BACKEND_URL = (process.env.CHATBOT_BACKEND_URL || 'http://localhost:8000').replace(/\/$/, '')
const INTERNAL_API_KEY = process.env.CHATBOT_INTERNAL_API_KEY || ''

export function backendUrl(path) {
  return `${BACKEND_URL}${path}`
}

export function backendHeaders(extra = {}) {
  const headers = { 'Content-Type': 'application/json', ...extra }
  if (INTERNAL_API_KEY) headers['X-Chatbot-Key'] = INTERNAL_API_KEY
  return headers
}

export const UNAVAILABLE_RESPONSE_BODY = {
  error: 'The chat assistant is temporarily unavailable. Please try again shortly, or reach us directly via the contact page.',
}
