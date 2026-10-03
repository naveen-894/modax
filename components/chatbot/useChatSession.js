'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const SESSION_KEY = 'modax_chatbot_session'

function loadStoredSession() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.sessionStorage.getItem(SESSION_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveStoredSession(data) {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(data))
  } catch {
    // sessionStorage unavailable (private browsing, quota) — chat still works, just without persistence
  }
}

function clearStoredSession() {
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.removeItem(SESSION_KEY)
  } catch {
    // ignore
  }
}

function errorMessageFrom(data, fallback) {
  if (typeof data?.detail === 'string') return data.detail
  if (Array.isArray(data?.detail) && data.detail[0]?.msg) return data.detail[0].msg
  return fallback
}

/** Manages the chatbot's session id, message history, and streaming replies.
 * Session + message history live in sessionStorage (tab-scoped, cleared on
 * tab close) — no visitor account is required to use the chatbot. */
export default function useChatSession() {
  const [sessionId, setSessionId] = useState(null)
  const [messages, setMessages] = useState([])
  const [suggestedPrompts, setSuggestedPrompts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isInitializing, setIsInitializing] = useState(true)
  const [error, setError] = useState(null)
  const abortRef = useRef(null)

  const createSession = useCallback(async () => {
    const res = await fetch('/api/chatbot/session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page_url: typeof window !== 'undefined' ? window.location.href : undefined,
      }),
    })
    if (!res.ok) throw new Error('Failed to start chat session')
    const data = await res.json()
    const greetingMessage = { role: 'assistant', content: data.greeting, sources: [] }
    setSessionId(data.session_id)
    setMessages([greetingMessage])
    setSuggestedPrompts(data.suggested_prompts || [])
    saveStoredSession({
      sessionId: data.session_id,
      messages: [greetingMessage],
      suggestedPrompts: data.suggested_prompts || [],
    })
    return data.session_id
  }, [])

  useEffect(() => {
    const stored = loadStoredSession()
    if (stored?.sessionId) {
      setSessionId(stored.sessionId)
      setMessages(stored.messages || [])
      setSuggestedPrompts(stored.suggestedPrompts || [])
      setIsInitializing(false)
      return
    }
    createSession()
      .catch(() => setError('Unable to start the chat assistant right now. Please try again shortly.'))
      .finally(() => setIsInitializing(false))
  }, [createSession])

  useEffect(() => {
    if (sessionId) saveStoredSession({ sessionId, messages, suggestedPrompts })
  }, [sessionId, messages, suggestedPrompts])

  const sendMessage = useCallback(
    async (text) => {
      const trimmed = text.trim()
      if (!sessionId || !trimmed || isLoading) return
      setError(null)
      setIsLoading(true)
      setMessages((prev) => [
        ...prev,
        { role: 'user', content: trimmed },
        { role: 'assistant', content: '', sources: [], streaming: true },
      ])

      const controller = new AbortController()
      abortRef.current = controller

      try {
        const res = await fetch('/api/chatbot/message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ session_id: sessionId, message: trimmed }),
          signal: controller.signal,
        })
        if (!res.ok || !res.body) {
          const data = await res.json().catch(() => ({}))
          throw new Error(errorMessageFrom(data, 'Something went wrong. Please try again.'))
        }

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ''

        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buffer += decoder.decode(value, { stream: true })
          const parts = buffer.split('\n\n')
          buffer = parts.pop() ?? ''

          for (const part of parts) {
            const line = part.trim()
            if (!line.startsWith('data:')) continue
            const jsonStr = line.slice(5).trim()
            if (!jsonStr) continue

            let event
            try {
              event = JSON.parse(jsonStr)
            } catch {
              continue
            }

            if (event.type === 'sources') {
              setMessages((prev) => {
                const next = [...prev]
                next[next.length - 1] = { ...next[next.length - 1], sources: event.sources }
                return next
              })
            } else if (event.type === 'token') {
              setMessages((prev) => {
                const next = [...prev]
                const last = next[next.length - 1]
                next[next.length - 1] = { ...last, content: last.content + event.content }
                return next
              })
            } else if (event.type === 'error') {
              setError(event.error)
            }
          }
        }
      } catch (err) {
        if (err?.name !== 'AbortError') {
          setError(err?.message || 'Something went wrong. Please try again.')
        }
      } finally {
        setMessages((prev) => {
          const next = [...prev]
          const last = next[next.length - 1]
          if (last) next[next.length - 1] = { ...last, streaming: false }
          return next
        })
        setIsLoading(false)
        abortRef.current = null
      }
    },
    [sessionId, isLoading]
  )

  const resetConversation = useCallback(async () => {
    if (abortRef.current) abortRef.current.abort()
    if (sessionId) {
      fetch(`/api/chatbot/session/${sessionId}`, { method: 'DELETE' }).catch(() => {
        // best-effort — a fresh session is created regardless
      })
    }
    clearStoredSession()
    setError(null)
    setIsInitializing(true)
    try {
      await createSession()
    } finally {
      setIsInitializing(false)
    }
  }, [sessionId, createSession])

  const submitLead = useCallback(
    async (payload) => {
      if (!sessionId) throw new Error('No active chat session')
      const res = await fetch('/api/chatbot/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, ...payload }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(errorMessageFrom(data, 'Failed to submit your details. Please try again.'))
      }
      return data
    },
    [sessionId]
  )

  return {
    sessionId,
    messages,
    suggestedPrompts,
    isLoading,
    isInitializing,
    error,
    sendMessage,
    resetConversation,
    submitLead,
  }
}
