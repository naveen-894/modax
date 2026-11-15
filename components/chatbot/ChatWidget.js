'use client'

import { useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Bot, X } from 'lucide-react'
import ChatWindow from './ChatWindow'

const easeOut = [0.21, 0.47, 0.32, 0.98]

/** Floating AI assistant widget, mounted once in the root layout so it's
 * available on every page without blocking the initial page render. */
export default function ChatWidget({ contactEmail, contactWhatsapp }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: easeOut }}
          >
            <ChatWindow
              onClose={() => setIsOpen(false)}
              onMinimize={() => setIsOpen(false)}
              contactEmail={contactEmail}
              contactWhatsapp={contactWhatsapp}
            />
          </m.div>
        )}
      </AnimatePresence>

      <m.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={isOpen}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-modax-navy text-modax-aqua shadow-xl shadow-modax-navy/20 hover:bg-modax-navy-2 transition-colors focus:outline-none focus:ring-2 focus:ring-modax-aqua focus:ring-offset-2"
      >
        {!isOpen && (
          <m.span
            className="absolute inset-0 rounded-full bg-modax-aqua"
            initial={{ opacity: 0.35, scale: 1 }}
            animate={{ opacity: 0, scale: 1.6 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <m.span
              key="close"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </m.span>
          ) : (
            <m.span
              key="open"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{
                opacity: 1,
                rotate: [0, -8, 8, -8, 0],
              }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{
                opacity: { duration: 0.15 },
                rotate: { duration: 0.6, delay: 1, repeat: Infinity, repeatDelay: 3 },
              }}
            >
              <Bot className="w-6 h-6" />
            </m.span>
          )}
        </AnimatePresence>
      </m.button>
    </div>
  )
}
