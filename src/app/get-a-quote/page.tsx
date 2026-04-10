import type { Metadata } from 'next'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Get a Free Quote | Shield Fencing Brisbane',
  description:
    'Get a free, no-obligation fencing or retaining wall quote from Shield Fencing. Serving Greater Brisbane. Quick response guaranteed.',
  alternates: { canonical: 'https://shieldfencing.com.au/get-a-quote' },
  robots: { index: false },
}

export default function GetAQuotePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="section-dark-hero pt-32 pb-16">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-pink text-sm font-semibold uppercase tracking-widest mb-4">
            Free Quote
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Tell us about<br />your project.
          </h1>
          <p className="text-white/40 text-sm mt-4">
            Takes 2 minutes · No obligation · Fast response
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 sm:px-6 py-16">
        <QuoteForm />
      </div>
    </div>
  )
}
