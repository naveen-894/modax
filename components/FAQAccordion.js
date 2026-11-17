'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import JsonLd from './JsonLd'

/** Accordion of Q&A pairs + matching FAQPage JSON-LD.
 * `items` is [{ question, answer }]. `answer` is rendered as plain text —
 * keep it to a sentence or two per item. */
export default function FAQAccordion({ items, title = 'Frequently asked questions', id }) {
  const [openIndex, setOpenIndex] = useState(0)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section id={id} className="section-padding bg-white">
      <JsonLd data={faqSchema} />
      <div className="container-max max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-modax-ink mb-10 text-center">{title}</h2>
        <div className="space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className="card-surface overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-semibold text-modax-ink">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-modax-blue-deep flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-modax-body leading-relaxed">{item.answer}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
