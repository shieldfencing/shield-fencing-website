'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const TRUNCATE_AT = 160

function SourceLogo({ source }: { source: string }) {
  if (source === 'Google Reviews') {
    return <Image src="/logos/svg/google-icon-logo-svgrepo-com.svg" alt="Google" width={20} height={20} className="shrink-0" />
  }
  return <Image src="/logos/credentials/hipages.png" alt="hipages" width={40} height={40} className="shrink-0" />
}

interface ReviewCardProps {
  name: string
  suburb?: string
  date?: string
  rating?: number
  text: string
  service?: string
  source?: string
}

export default function ReviewCard({
  name,
  suburb,
  date,
  rating = 5,
  text,
  service,
  source,
}: ReviewCardProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const isLong = text.length > TRUNCATE_AT
  const truncated = text.slice(0, TRUNCATE_AT).trimEnd() + '…'

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  return (
    <>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col">
        <div className="flex gap-0.5 mb-4 shrink-0">
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="flex-1">
          <p className="text-gray-600 text-sm leading-relaxed">
            {isLong ? truncated : text}
          </p>
          {isLong && (
            <button
              onClick={() => setModalOpen(true)}
              className="mt-2 text-xs font-semibold text-brand-pink hover:underline underline-offset-2 focus:outline-none"
            >
              Read more
            </button>
          )}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100 shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm text-brand-dark">{name}{suburb ? ` from ${suburb}` : ''}</p>
              <p className="text-xs text-gray-400 mt-0.5">{service}</p>
            </div>
            {source && <SourceLogo source={source} />}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          <div
            className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl max-h-[85vh] overflow-y-auto overscroll-contain touch-pan-y"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: rating }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">{text}</p>
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-brand-dark">{name}{suburb ? ` from ${suburb}` : ''}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{service}</p>
                </div>
                {source && <SourceLogo source={source} />}
              </div>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-gray-500 transition-colors"
              aria-label="Close"
            >
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
