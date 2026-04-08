import type { Metadata } from 'next'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Get a Free Quote | Shield Fencing Brisbane',
  description:
    'Get a free, no-obligation fencing or retaining wall quote from Shield Fencing. Serving Greater Brisbane. Quick response guaranteed.',
  alternates: { canonical: 'https://shieldfencing.com.au/get-a-quote' },
  robots: { index: false },  // Don't index this form page
}

export default function GetAQuotePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="bg-brand-dark pt-20 pb-10">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <p className="text-brand-pink text-sm font-semibold uppercase tracking-wider mb-3">
            Free Quote
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Tell us about your project
          </h1>
          <p className="text-white/50 text-sm mt-2">
            Takes 2 minutes · No obligation · Fast response
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-12">
        <QuoteForm />
      </div>
    </div>
  )
}
