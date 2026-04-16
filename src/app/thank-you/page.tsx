import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You | Shield Fencing',
  robots: { index: false },
}

const steps = [
  { num: '01', title: 'Enquiry review', desc: 'Every enquiry is reviewed carefully to ensure it aligns with the type of work we take on.' },
  { num: '02', title: 'Site visit', desc: 'If we move forward, we will arrange a time to walk the job with you. This allows us to measure accurately and understand the full scope of work.' },
  { num: '03', title: 'Written quote', desc: 'After the site visit, we prepare a detailed written quote. Clear, itemised, and based on what is actually required, not assumptions.' },
]

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
            We have received your enquiry and will review the details shortly. If your project is a good fit, you will hear from us within the same day to arrange the next step.
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

      {/* HOW WE WORK */}
      <section className="py-24 section-dark-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-white mb-8">
            How we work.
          </h2>
          <p className="text-white/50 leading-relaxed max-w-2xl mb-6">
            We focus on projects where we can deliver a high-quality outcome from start to finish.
            This approach allows us to stay responsive, maintain standards, and avoid overcommitting.
          </p>
          <p className="text-white/50 leading-relaxed max-w-2xl">
            Morning site visit times (Monday to Thursday) are limited and allocated on a first in, best dressed basis.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-8">
            Why homeowners<br />
            <span className="text-brand-pink">choose us.</span>
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl">
            Professional, reliable, and consistent delivery across fencing and retaining wall projects.
            Clear communication, structured process, and workmanship that holds up over time.
          </p>
          <div className="mt-10">
            <Link href="/reviews" className="btn-outline">
              Read Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* EXPLORE + PRIVACY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">
                While you wait,<br />
                <span className="text-brand-pink">explore our work.</span>
              </h2>
              <p className="text-gray-500 mt-6 mb-10 leading-relaxed">
                Read our fencing guides or learn more about Shield Fencing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-outline">About Us</Link>
                <Link href="/blog" className="btn-primary">Read Blog</Link>
              </div>
            </div>
            <div className="text-xs text-gray-400 leading-relaxed bg-white rounded-2xl p-8 border border-gray-100">
              <p className="font-semibold text-brand-dark mb-2 text-sm">Your privacy</p>
              By submitting this enquiry, you consent to Shield Fencing contacting you by phone, SMS, or email to respond to your request, provide quotes, arrange site visits, and follow up regarding your enquiry. Your information will be handled in accordance with our{' '}
              <Link href="/privacy" className="text-brand-pink hover:underline">Privacy Policy</Link>.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
