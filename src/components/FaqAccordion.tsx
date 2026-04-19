'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: React.ReactNode
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-200">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <div key={faq.q} className="py-6">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left group"
            >
              <h3 className="font-bold text-brand-dark group-hover:text-brand-pink transition-colors">
                {faq.q}
              </h3>
              <svg
                className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? 'max-h-96 mt-3' : 'max-h-0'
              }`}
            >
              <div className="text-gray-500 text-sm leading-relaxed">{faq.a}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
