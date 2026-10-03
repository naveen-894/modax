'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUp, Loader2, Minus, Sparkles, Trash2, X } from 'lucide-react'
import ChatMessage from './ChatMessage'
import SuggestedPrompts from './SuggestedPrompts'
import LeadForm from './LeadForm'
import useChatSession from './useChatSession'

export default function ChatWindow({ onClose, onMinimize }) {
  const {
    messages,
    suggestedPrompts,
    isLoading,
    isInitializing,
    error,
    sendMessage,
    resetConversation,
    submitLead,
  } = useChatSession()

  const [input, setInput] = useState('')
  const [showLeadForm, setShowLeadForm] = useState(false)
  const scrollRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    const node = scrollRef.current
    if (node && typeof node.scrollTo === 'function') {
      node.scrollTo({ top: node.scrollHeight, behavior: 'smooth' })
    }
  }, [messages])

  // Auto-grow the textarea to fit what's typed, up to max-h-24 (96px) in the
  // className below — collapses back to one line once input is cleared.
  useEffect(() => {
    const node = textareaRef.current
    if (!node) return
    node.style.height = 'auto'
    node.style.height = `${node.scrollHeight}px`
  }, [input])

  const handleSend = (text) => {
    const value = (text ?? input).trim()
    if (!value) return
    sendMessage(value)
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleClear = () => {
    setShowLeadForm(false)
    resetConversation()
  }

  return (
    <div
      role="dialog"
      aria-label="Modax AI assistant"
      className="flex flex-col w-[min(92vw,380px)] h-[min(75vh,600px)] bg-white rounded-2xl shadow-2xl ring-1 ring-ink-900/10 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 px-4 py-3.5 bg-ink-900 text-white flex-shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-ink-950 font-bold text-sm flex-shrink-0">
            M
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate">Modax Assistant</p>
            <p className="text-xs text-ink-400">Usually replies in seconds</p>
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear conversation"
            title="Clear conversation"
            className="p-1.5 rounded-md text-ink-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onMinimize}
            aria-label="Minimize chat"
            title="Minimize"
            className="p-1.5 rounded-md text-ink-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            title="Close"
            className="p-1.5 rounded-md text-ink-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-white">
        {isInitializing ? (
          <div className="flex items-center justify-center h-full text-ink-400 text-sm gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Starting chat...
          </div>
        ) : (
          <>
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            {showLeadForm && (
              <LeadForm
                onSubmit={submitLead}
                onCancel={() => setShowLeadForm(false)}
              />
            )}
          </>
        )}
      </div>

      {error && (
        <div className="px-4 py-2 text-xs text-red-700 bg-red-50 border-t border-red-100 flex-shrink-0">
          {error}
        </div>
      )}

      {!isInitializing && messages.length <= 1 && (
        <SuggestedPrompts prompts={suggestedPrompts} onSelect={handleSend} disabled={isLoading} />
      )}

      {/* Footer */}
      <div className="border-t border-ink-100 px-3 py-3 flex-shrink-0 bg-white">
        {!showLeadForm && (
          <button
            type="button"
            onClick={() => setShowLeadForm(true)}
            className="w-full mb-2 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-primary-700 hover:text-primary-800 bg-primary-50 hover:bg-primary-100 rounded-md py-1.5 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Share project details with our team
          </button>
        )}
        <div className="flex items-end gap-2">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isInitializing || isLoading}
            rows={1}
            placeholder="Ask a question..."
            aria-label="Message"
            className="flex-1 resize-none overflow-y-auto max-h-24 px-3 py-2.5 text-sm leading-5 border border-ink-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-ink-50"
          />
          <button
            type="button"
            onClick={() => handleSend()}
            disabled={isInitializing || isLoading || !input.trim()}
            aria-label="Send message"
            className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-ink-900 text-white hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowUp className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}
