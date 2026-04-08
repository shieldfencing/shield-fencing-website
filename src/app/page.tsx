import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import ReviewCard from '@/components/ReviewCard'
import SuburbsOrbital from '@/components/SuburbsOrbital'
import { reviews } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Shield Fencing | Brisbane Fencing & Retaining Wall Specialists',
  description:
    'Colorbond, timber fencing and retaining wall specialists across Greater Brisbane. QBCC Licensed. Free quotes. Protecting what matters most.',
  alternates: { canonical: 'https://shieldfencing.com.au' },
}

const services = [
  {
    title: 'Colorbond® Steel',
    desc: 'Durable, low-maintenance steel fencing in 22 COLORBOND® colours. The most popular choice for Brisbane homes.',
    href: '/colorbond',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7l9-4 9 4M3 7v10l9 4 9-4V7M3 7l9 4 9-4" />
      </svg>
    ),
  },
  {
    title: 'Timber Fencing',
    desc: 'Classic hardwood and treated pine fencing. Natural beauty with the privacy and character your property deserves.',
    href: '/timber',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v18M12 3v18M19 3v18M3 8h18M3 16h18" />
      </svg>
    ),
  },
  {
    title: 'Retaining Walls',
    desc: 'Timber and concrete retaining walls up to 1m. Civil engineering backed for lasting structural integrity.',
    href: '/retaining-walls',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
]

const stats = [
  { value: '5.0★', label: 'Google Rating' },
  { value: '$10M', label: 'Public Liability Cover' },
  { value: 'QBCC', label: 'Licensed & Compliant' },
  { value: 'NER', label: 'Engineers Australia' },
]

const whyUs = [
  {
    title: 'Reliable & On Time',
    desc: 'We show up when we say we will. Clear communication from quote to completion — no surprises.',
  },
  {
    title: 'Engineered for Longevity',
    desc: 'Civil engineering backing through Engineers Australia NER. Every job built to outlast the rest.',
  },
  {
    title: 'Fully Licensed & Insured',
    desc: 'QBCC Licensed (15574983) with $10M public liability insurance. You\'re completely protected.',
  },
  {
    title: 'Great Value',
    desc: 'Competitive pricing with no corners cut. We deliver quality workmanship at a fair price, every time.',
  },
]


export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen bg-brand-dark flex items-center overflow-hidden">
        {/* Vertical fence slat pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-[2px] bg-white"
              style={{ left: `${5 + i * 5}%` }}
            />
          ))}
          <div className="absolute left-0 right-0 h-[2px] bg-white" style={{ top: '38%' }} />
          <div className="absolute left-0 right-0 h-[2px] bg-white" style={{ top: '62%' }} />
        </div>

        {/* Pink glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: headline */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-pink/20 text-brand-pink text-sm font-medium px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse" />
                Serving Greater Brisbane
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
                Protecting<br />
                <span className="text-brand-pink">What Matters</span><br />
                Most
              </h1>
              <p className="mt-6 text-lg text-white/60 max-w-md leading-relaxed">
                Brisbane&apos;s trusted fencing specialists. Colorbond, timber, and
                retaining wall solutions — built to last, delivered on time.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/get-a-quote" className="btn-primary text-base">
                  Get a Free Quote
                </Link>
                <Link href="/reviews" className="btn-secondary text-base">
                  Read Reviews
                </Link>
              </div>
            </div>

            {/* Right: stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
                >
                  <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-sm text-white/50">{s.label}</p>
                </div>
              ))}
              <div className="col-span-2 bg-brand-pink/10 border border-brand-pink/20 rounded-2xl p-6">
                <p className="text-brand-pink font-semibold text-sm uppercase tracking-wider mb-2">
                  Our promise
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  We turn up when we say, communicate clearly, and finish the job properly.
                  No surprises on price. No mess left behind.
                </p>
              </div>
            </div>
          </div>

          {/* Credential strip */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-6 text-white/40 text-sm">
            {['QBCC Licensed · Lic. 15574983', '$10M Public Liability', 'Engineers Australia NER', 'ABN 12 683 251 489'].map((c) => (
              <span key={c} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-brand-pink rounded-full" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <TrustBar />

      {/* SERVICES */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              Quality fencing and retaining wall solutions for residential and
              commercial properties across Greater Brisbane.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group card flex flex-col gap-5 hover:border-brand-pink/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-pink/10 text-brand-pink flex items-center justify-center group-hover:bg-brand-pink group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <span className="mt-auto text-brand-pink text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SHIELD FENCING */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-title text-white">
                Built on trust.<br />
                <span className="text-brand-pink">Delivered with care.</span>
              </h2>
              <p className="mt-5 text-white/60 leading-relaxed">
                We started Shield Fencing with one goal: to be the kind of fencing
                company we&apos;d want to hire ourselves. That means turning up on time,
                communicating clearly, and doing the job right — every time.
              </p>
              <Link href="/about" className="btn-primary mt-10 inline-flex">
                About Shield Fencing
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="w-7 h-7 rounded-full bg-brand-pink/20 flex items-center justify-center mb-4">
                    <svg className="w-3.5 h-3.5 text-brand-pink" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white mb-2 text-sm">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="section-title">What our clients say</h2>
              <p className="section-subtitle">
                Trusted by homeowners and developers across Brisbane.
              </p>
            </div>
            <Link href="/reviews" className="btn-outline shrink-0">
              All Reviews
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[reviews[3], reviews[4], reviews[7], reviews[13]].map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Servicing all of <span className="text-brand-pink">Greater Brisbane</span>
            </h2>
            <p className="text-white/50 text-sm">
              Click any region to see the suburbs we cover
            </p>
          </div>
          <SuburbsOrbital />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 lg:py-28 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Get a free, no-obligation quote in minutes. We&apos;ll get back to you fast.
          </p>
          <Link href="/get-a-quote" className="btn-primary text-base px-10 py-5">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
