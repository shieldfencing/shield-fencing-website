import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Shield Fencing Brisbane',
  description:
    'Meet the team behind Shield Fencing. QBCC licensed, civil engineering backed, and committed to protecting what matters most across Greater Brisbane.',
  alternates: { canonical: 'https://shieldfencing.com.au/about' },
}

const values = [
  {
    num: '01',
    title: 'Integrity',
    desc: 'We do what we say we\'ll do. No hidden costs, no shortcuts, no excuses. If something\'s not right, we fix it.',
  },
  {
    num: '02',
    title: 'Communication',
    desc: 'Clear updates from quote to final inspection. You\'ll always know what\'s happening and when we\'re arriving.',
  },
  {
    num: '03',
    title: 'Reliability',
    desc: 'We show up on time and we finish on schedule. Your time is valuable and we treat it that way.',
  },
  {
    num: '04',
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
      <section className="section-dark-hero pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-6">
            About Us
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight max-w-4xl">
            Built on doing<br />
            <span className="text-brand-pink">the job right.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mt-8 max-w-xl">
            We&apos;re a Brisbane-based fencing and retaining wall company with a simple philosophy: turn up when we say, communicate clearly, and do work we&apos;d be proud to put our name on.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-title mb-8">
                Redefining what you expect<br />
                <span className="text-brand-pink">from a fencing company.</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
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
              <div className="mt-10 flex gap-4">
                <Link href="/get-a-quote" className="btn-primary">
                  Get a Free Quote
                </Link>
                <Link href="/reviews" className="btn-outline">
                  See Reviews
                </Link>
              </div>
            </div>

            {/* Credentials */}
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-6">Our credentials</h3>
              <div className="divide-y divide-gray-100">
                {credentials.map((c) => (
                  <div key={c.label} className="flex justify-between items-center py-4">
                    <span className="text-sm text-gray-500">{c.label}</span>
                    <span className="text-sm font-semibold text-brand-dark">{c.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-brand-pink/5 border border-brand-pink/10 rounded-xl p-5">
                <p className="text-sm text-brand-dark font-semibold mb-1">
                  Civil engineering backed
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
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
      <section className="py-24 section-dark-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-white mb-16">Our values.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {values.map((v) => (
              <div key={v.title} className="bg-brand-dark p-8">
                <span className="text-brand-pink text-xs font-mono tracking-widest mb-6 block">{v.num}</span>
                <h3 className="font-bold text-white text-lg mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="section-title">
              Let&apos;s work<br />
              <span className="text-brand-pink">together.</span>
            </h2>
            <div>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Get a free, no-obligation quote. We&apos;ll be in touch quickly — usually same day.
              </p>
              <Link href="/get-a-quote" className="btn-primary text-base">
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
