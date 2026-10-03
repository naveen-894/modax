'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Check, Copy } from 'lucide-react'

const markdownComponents = {
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-700 underline hover:text-primary-800"
    >
      {children}
    </a>
  ),
  p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>,
  ul: ({ children }) => <ul className="mb-2 last:mb-0 list-disc pl-5 space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="mb-2 last:mb-0 list-decimal pl-5 space-y-1">{children}</ol>,
  strong: ({ children }) => <strong className="font-semibold text-ink-900">{children}</strong>,
  code: ({ children }) => (
    <code className="bg-ink-100 text-ink-900 rounded px-1 py-0.5 text-[0.85em] font-mono">{children}</code>
  ),
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard API unavailable — fail silently, not worth surfacing an error for this
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy response"
      className="inline-flex items-center gap-1 text-xs text-ink-400 hover:text-ink-700 transition-colors mt-1.5"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'
  const isEmpty = !isUser && !message.content && message.streaming

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm ${
          isUser
            ? 'bg-ink-900 text-white rounded-br-sm'
            : 'bg-ink-50 text-ink-900 rounded-bl-sm border border-ink-100'
        }`}
      >
        {isEmpty ? (
          <span className="inline-flex items-center gap-1 py-0.5" aria-label="Assistant is typing">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-400 animate-soft-pulse" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink-400 animate-soft-pulse [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink-400 animate-soft-pulse [animation-delay:300ms]" />
          </span>
        ) : isUser ? (
          <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {message.content}
          </ReactMarkdown>
        )}

        {!isUser && message.sources?.length > 0 && (
          <div className="mt-2 pt-2 border-t border-ink-200/70 flex flex-wrap gap-x-3 gap-y-1">
            {message.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-700 hover:text-primary-800 hover:underline"
              >
                {source.title}
              </a>
            ))}
          </div>
        )}

        {!isUser && message.content && !message.streaming && <CopyButton text={message.content} />}
      </div>
    </div>
  )
}
