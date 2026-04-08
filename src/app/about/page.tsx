import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'About Us | Shield Fencing Brisbane',
  description:
    'Meet the team behind Shield Fencing. QBCC licensed, civil engineering backed, and committed to protecting what matters most across Greater Brisbane.',
  alternates: { canonical: 'https://shieldfencing.com.au/about' },
}

const values = [
  {
    icon: '🛡️',
    title: 'Integrity',
    desc: 'We do what we say we\'ll do. No hidden costs, no shortcuts, no excuses. If something\'s not right, we fix it.',
  },
  {
    icon: '📞',
    title: 'Communication',
    desc: 'Clear updates from quote to final inspection. You\'ll always know what\'s happening and when we\'re arriving.',
  },
  {
    icon: '⚙️',
    title: 'Reliability',
    desc: 'We show up on time and we finish on schedule. Your time is valuable and we treat it that way.',
  },
  {
    icon: '⭐',
    title: 'Quality',
    desc: 'Every post plumb, every rail level, every clean-up thorough. We\'re proud of our work and it shows.',
  },
]

const credentials = [
  { label: 'QBCC Licensed', value: 'Lic. No. 15574983' },
  { label: 'ABN', value: '12 683 251 489' },
  { label: 'Insurance', value: '$10M Public Liability' },
  { label: 'Engineering', value: 'Engineers Australia NER' },
  { label: 'Service Area', value: 'Greater Brisbane, QLD' },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-pink font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Built on doing<br />
              <span className="text-brand-pink">the job right.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              We&apos;re a Brisbane-based fencing and retaining wall company with a
              simple philosophy: turn up when we say, communicate clearly, and do work
              we&apos;d be proud to put our name on.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-title mb-6">
                Redefining what you expect from<br />
                <span className="text-brand-pink">a fencing company</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Shield Fencing was built with one goal in mind: to be the fencing company
                  Brisbane actually deserves. We saw too many homeowners getting let down
                  by tradespeople who didn&apos;t show up, didn&apos;t communicate, or left the job
                  looking sloppy.
                </p>
                <p>
                  So we built something different. A company where the quote is honest,
                  the crew shows up on time, the work is done properly, and the site is
                  cleaned up at the end of every day. Where you get a call back. Where the
                  finish is something you&apos;d be proud to show your neighbours.
                </p>
                <p>
                  We cover all of Greater Brisbane — from the northern suburbs to Logan,
                  from Ipswich to Redland Bay. Colorbond®, timber, retaining walls — if
                  it defines a boundary, we build it.
                </p>
                <p className="font-semibold text-brand-dark">
                  Protecting what matters most. That&apos;s our promise.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link href="/get-a-quote" className="btn-primary">
                  Get a Free Quote
                </Link>
                <Link href="/reviews" className="btn-outline">
                  See Reviews
                </Link>
              </div>
            </div>

            {/* Credentials card */}
            <div className="bg-brand-light rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Our credentials</h3>
              <div className="space-y-4">
                {credentials.map((c) => (
                  <div key={c.label} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <span className="text-sm text-gray-500">{c.label}</span>
                    <span className="text-sm font-semibold text-brand-dark">{c.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-brand-pink/10 rounded-xl p-4">
                <p className="text-sm text-brand-dark font-medium">
                  Civil engineering backed
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Listed on the National Engineering Register (Engineers Australia NER) —
                  giving you confidence that every retaining wall and structural job is
                  properly designed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-white text-center mb-14">Our values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-white text-lg mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Let&apos;s work together
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Get a free, no-obligation quote. We&apos;ll be in touch quickly.
          </p>
          <Link href="/get-a-quote" className="btn-primary text-base px-10 py-5">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
