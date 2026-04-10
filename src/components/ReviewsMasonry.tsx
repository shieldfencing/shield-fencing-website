'use client'

import { useState } from 'react'
import { reviews } from '@/lib/reviews'

const PREVIEW_LENGTH = 120

// Wide cards for longer reviews, narrow for short ones
function getSize(text: string): string {
  if (text.length > 250) return 'col-span-2'
  return 'col-span-1'
}

const bgVariants = [
  'bg-white',
  'bg-white',
  'bg-brand-dark text-white',
  'bg-white',
  'bg-white',
  'bg-brand-pink text-white',
  'bg-white',
  'bg-white',
  'bg-brand-dark text-white',
  'bg-white',
  'bg-white',
  'bg-white',
  'bg-brand-pink text-white',
  'bg-white',
  'bg-white',
  'bg-white',
  'bg-brand-dark text-white',
  'bg-white',
  'bg-white',
  'bg-white',
  'bg-white',
  'bg-brand-pink text-white',
  'bg-white',
  'bg-white',
]

function ReviewTile({ review, size, bg, index }: {
  review: typeof reviews[0]
  size: string
  bg: string
  index: number
}) {
  const [open, setOpen] = useState(false)
  const isDark = bg.includes('brand-dark') || bg.includes('brand-pink')
  const needsTruncation = review.text.length > PREVIEW_LENGTH

  return (
    <>
      <div className={`${size} ${bg} rounded-2xl p-6 flex flex-col gap-4`}>
        {/* Stars */}
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className={`w-3.5 h-3.5 fill-current ${isDark ? 'text-yellow-300' : 'text-yellow-400'}`} viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Text */}
        <p className={`text-sm leading-relaxed flex-1 ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
          {needsTruncation
            ? <>{review.text.slice(0, PREVIEW_LENGTH).trimEnd()}&hellip;</>
            : review.text
          }
        </p>

        {needsTruncation && (
          <button
            onClick={() => setOpen(true)}
            className={`text-xs font-semibold hover:underline underline-offset-2 text-left w-fit ${isDark ? 'text-white/60 hover:text-white' : 'text-brand-pink'}`}
          >
            Read more
          </button>
        )}

        {/* Author */}
        <div className={`pt-3 border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
          <p className={`font-semibold text-xs ${isDark ? 'text-white' : 'text-brand-dark'}`}>{review.name}</p>
          <p className={`text-xs mt-0.5 ${isDark ? 'text-white/40' : 'text-gray-400'}`}>{review.service ?? review.date}</p>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{review.text}</p>
            <div className="pt-4 border-t border-gray-100">
              <p className="font-semibold text-sm text-brand-dark">{review.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{review.service ?? review.date}</p>
            </div>
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default function ReviewsMasonry() {
  return (
    <div className="relative">
      {/* Blur fade top */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-brand-cream to-transparent z-10" />
      {/* Blur fade bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-cream to-transparent z-10" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 items-start">
        {reviews.map((review, i) => (
          <ReviewTile
            key={review.name}
            review={review}
            size={getSize(review.text)}
            bg={bgVariants[i] ?? 'bg-white'}
            index={i}
          />
        ))}
      </div>
    </div>
  )
}
