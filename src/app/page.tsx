import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import ReviewCard from '@/components/ReviewCard'
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

const suburbs = [
  'Brisbane City', 'Chermside', 'Carindale', 'Rochedale', 'Springwood',
  'Logan', 'Ipswich', 'Redland Bay', 'Moreton Bay', 'North Lakes',
  'Kallangur', 'Caboolture', 'Toowong', 'Indooroopilly', 'Sunnybank',
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen bg-brand-dark flex items-center">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              white 60px,
              white 62px
            )`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-pink/20 text-brand-pink text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse" />
              Serving Greater Brisbane
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Protecting<br />
              <span className="text-brand-pink">What Matters</span><br />
              Most
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
              Brisbane&apos;s trusted fencing specialists. Colorbond, timber, and
              retaining wall solutions built to last — delivered on time with clear
              communication every step of the way.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/get-a-quote" className="btn-primary text-base">
                Get a Free Quote
              </Link>
              <Link href="/portfolio" className="btn-secondary text-base">
                View Our Work
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 text-white/50 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-pink" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                QBCC Licensed
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-pink" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                $10M Insured
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-pink" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Civil Engineering Backed
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-pink" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                5-Star Reviews
              </span>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-white/20" />
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
      <section className="py-20 lg:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title">
                Built on trust.<br />
                <span className="text-brand-pink">Delivered with care.</span>
              </h2>
              <p className="mt-5 text-gray-500 leading-relaxed">
                We started Shield Fencing with one goal: to be the kind of fencing
                company we&apos;d want to hire ourselves. That means turning up on time,
                communicating clearly, and doing the job right — every time.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyUs.map((item) => (
                  <div key={item.title}>
                    <div className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-brand-pink" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-brand-dark mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-outline mt-10 inline-flex">
                About Shield Fencing
              </Link>
            </div>
            {/* Placeholder for hero image */}
            <div className="relative rounded-2xl overflow-hidden bg-brand-dark aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-white/20 p-8">
                <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm">Job photos coming soon</p>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                <p className="text-white text-sm font-semibold">500+ jobs completed</p>
                <p className="text-white/60 text-xs">across Greater Brisbane</p>
              </div>
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
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* SUBURBS */}
      <section className="py-16 bg-brand-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-brand-dark mb-8">
            Servicing Greater Brisbane
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {suburbs.map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-brand-pink hover:text-brand-pink transition-colors"
              >
                {s}
              </span>
            ))}
            <span className="px-4 py-2 bg-brand-pink/10 border border-brand-pink/30 rounded-full text-sm text-brand-pink font-medium">
              + more
            </span>
          </div>
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
