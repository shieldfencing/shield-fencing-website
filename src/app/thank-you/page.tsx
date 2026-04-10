import type { Metadata } from 'next'
import Link from 'next/link'
import ReviewCard from '@/components/ReviewCard'
import { reviews } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Thank You | Shield Fencing',
  robots: { index: false },
}

const steps = [
  { num: '01', title: 'We review your enquiry', desc: 'We go through every enquiry carefully. If your project is a good fit for what we do, we\'ll reach out to arrange the next step.' },
  { num: '02', title: 'Site visit', desc: 'If we move forward, we\'ll arrange a time to come out and walk the job with you. This lets us measure up properly and understand exactly what\'s involved.' },
  { num: '03', title: 'Written quote', desc: 'After the site visit, we prepare a detailed written quote — clear, itemised, and no surprises. Only then can we give you an accurate price.' },
]

const featured = [reviews[0], reviews[3], reviews[7], reviews[12]]

export default function ThankYouPage() {
  return (
    <>
      {/* HERO */}
      <section className="section-dark-hero pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-brand-pink/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest">Enquiry received</p>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight max-w-4xl">
            Thanks for<br />
            <span className="text-brand-pink">getting in touch.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mt-8 max-w-xl">
            We&apos;ll review your details. If your project is a good fit, we&apos;ll be in touch to arrange a site visit.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-24 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-16">What happens next.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {steps.map((s) => (
              <div key={s.num} className="bg-brand-cream p-10">
                <span className="text-brand-pink text-xs font-mono tracking-widest mb-6 block">{s.num}</span>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 section-dark-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <h2 className="section-title text-white">
              Why homeowners<br />
              <span className="text-brand-pink">choose us.</span>
            </h2>
            <Link href="/reviews" className="text-white/40 hover:text-white text-sm transition-colors underline underline-offset-4 shrink-0">
              All 25 reviews →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY NOTE + CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                While you wait,<br />
                <span className="text-brand-pink">explore our work.</span>
              </h2>
              <p className="text-gray-500 mt-6 mb-10 leading-relaxed">
                Read our fencing guides or learn more about Shield Fencing while you wait.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/blog" className="btn-primary">Read Blog</Link>
                <Link href="/about" className="btn-outline">About Us</Link>
              </div>
            </div>
            <div className="text-xs text-gray-400 leading-relaxed bg-white rounded-2xl p-8 border border-gray-100">
              <p className="font-semibold text-brand-dark mb-2 text-sm">Your privacy</p>
              By submitting this enquiry, you consent to Shield Fencing contacting you by phone, SMS, or email to respond to your request, provide quotes, arrange site visits, and follow up regarding your enquiry. Your information will only be used for communication relating to your enquiry and will not be sold or shared with third parties. You may request to stop communications at any time.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
