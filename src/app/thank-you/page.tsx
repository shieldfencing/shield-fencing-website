import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | Shield Fencing',
  robots: { index: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="w-20 h-20 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Enquiry received!
        </h1>
        <p className="text-white/60 text-lg leading-relaxed mb-10">
          Thanks for reaching out. We&apos;ll review your details and get back to you
          quickly — usually within a few hours during business hours.
        </p>

        {/* What happens next */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 text-left space-y-4">
          <h2 className="text-white font-semibold text-sm uppercase tracking-wider">
            What happens next
          </h2>
          {[
            { step: '1', text: 'We review your enquiry details' },
            { step: '2', text: 'We call or text to confirm site details' },
            { step: '3', text: 'We arrange a site visit or send a quote based on what you\'ve shared' },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-pink/20 text-brand-pink text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                {item.step}
              </span>
              <p className="text-white/60 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/blog" className="btn-secondary">
            Read Our Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
