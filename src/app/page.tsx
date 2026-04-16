import type { Metadata } from 'next'
import Link from 'next/link'
import ReviewCard from '@/components/ReviewCard'
import BrisbaneServiceMap from '@/components/BrisbaneServiceMap'
import { reviews } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Shield Fencing | Brisbane Fencing & Retaining Wall Specialists',
  description:
    'Colorbond, timber fencing and retaining wall specialists across Greater Brisbane. QBCC Licensed. Protecting what matters most.',
  alternates: { canonical: 'https://shieldfencing.com.au' },
}

const credentials = [
  '4.9 \u2605 Google Rating',
  'QBCC License No 15574983',
  'Backed by a Chartered Civil Engineer',
  '$10 million Public Liability Insurance',
  'ABN 12 683 251 489',
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section-dark-hero min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-brand-pink text-sm font-medium mb-10">
            <span className="w-2 h-2 bg-brand-pink rounded-full animate-pulse" />
            Serving Greater Brisbane
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[108px] font-bold text-white leading-[0.95] tracking-tight max-w-5xl">
            Shaping QLD<br />
            Boundaries,<br />
            <span className="text-brand-pink">One Fence</span><br />
            at a Time.
          </h1>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/get-a-quote" className="btn-primary text-base w-fit">
              Enquire Now
            </Link>
            <Link href="/reviews" className="btn-secondary text-base w-fit">
              Read Reviews
            </Link>
          </div>
        </div>

        {/* Scrolling credential strip */}
        <div className="mt-16 border-t border-white/10 pt-8 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[...credentials, ...credentials].map((c, i) => (
              <span key={i} className="text-white/30 text-sm flex items-center gap-3 shrink-0">
                <span className="w-1 h-1 rounded-full bg-brand-pink inline-block" />
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
            <h2 className="section-title">
              What we build.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed lg:text-right">
              Quality fencing and retaining wall solutions for residential properties across Greater Brisbane.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {[
              {
                title: 'Retaining Walls',
                desc: 'Timber and concrete retaining walls up to 1m. Built with care for lasting structural integrity.',
                href: '/retaining-walls',
                num: '01',
              },
              {
                title: 'Colorbond® Steel',
                desc: 'Durable, low-maintenance steel fencing in 22 COLORBOND® colours. The most popular choice for Brisbane homes.',
                href: '/colorbond',
                num: '02',
              },
              {
                title: 'Timber Fencing',
                desc: 'Classic hardwood and treated pine fencing. Natural beauty with the privacy your property deserves.',
                href: '/timber',
                num: '03',
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-brand-cream p-10 flex flex-col gap-8 hover:bg-white transition-colors duration-300"
              >
                <span className="text-brand-pink text-xs font-mono tracking-widest">{s.num}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <span className="text-brand-dark text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
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

      {/* FEATURED QUOTE */}
      <section className="py-24 lg:py-32 section-dark-panel">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-pink text-sm font-semibold uppercase tracking-widest mb-12">
            What our clients say
          </p>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            &ldquo;Professional, reliable and outstanding service... this willingness to go above and beyond really highlights their commitment to customer satisfaction.&rdquo;
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Karin, Riverhills</p>
              <p className="text-white/40 text-xs">Retaining Wall & Colorbond Fencing</p>
            </div>
          </div>
          <div className="mt-16">
            <Link href="/reviews" className="text-white/50 text-sm hover:text-white transition-colors underline underline-offset-4">
              Read all reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* WHY SHIELD */}
      <section className="py-24 lg:py-32 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-title">
                Built on trust.<br />
                <span className="text-brand-pink">Delivered with care.</span>
              </h2>
              <p className="mt-6 text-gray-500 leading-relaxed max-w-md">
                We envision a future where everyone enjoys high-quality fencing that protects what matters most. Too many people settle for fences that don&apos;t last, and contractors who don&apos;t show up. We build fences the right way, with quality and care. Every job. Every time.
              </p>
              <Link href="/about" className="btn-primary mt-10 inline-flex">
                About Shield Fencing
              </Link>
            </div>
            <div className="space-y-0 divide-y divide-gray-200">
              {[
                { title: 'Reliable and On Time', desc: 'We show up when we say we will. Clear communication from quote to completion, no surprises.' },
                { title: 'Backed by a Chartered Civil Engineer', desc: 'CPEng-qualified leadership bringing a disciplined, detail-focused approach to every project.' },
                { title: 'Fully Licensed and Insured', desc: 'QBCC License No 15574983 with $10M public liability. You are completely protected.' },
                { title: 'Great Value', desc: 'Competitive pricing with no corners cut. Quality workmanship at a fair price, every time.' },
              ].map((item) => (
                <div key={item.title} className="py-6 flex gap-6">
                  <svg className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {[
              { value: '4.9 \u2605', label: 'Google Rating' },
              { value: 'QBCC', label: 'License No 15574983' },
              { value: '1000m+', label: 'Fencing Installed' },
              { value: '$10M', label: 'Public Liability Insurance' },
              { value: 'CPEng', label: 'Chartered Civil Engineer' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl font-bold text-brand-dark">{s.value}</p>
                <p className="text-sm text-gray-400 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 lg:py-32 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <h2 className="section-title">
              Happy clients.
            </h2>
            <Link href="/reviews" className="btn-outline shrink-0 w-fit">
              All Reviews
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[reviews[3], reviews[4], reviews[7], reviews[13]].map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 section-dark-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-title text-white">
                We come<br />
                <span className="text-brand-pink">to you.</span>
              </h2>
              <p className="mt-6 text-white/50 leading-relaxed">
                Based in Brisbane, servicing all of Greater Brisbane - north, south, east, west, and everything in between.*
              </p>
            </div>
            <BrisbaneServiceMap />
          </div>
          <p className="mt-8 text-white/25 text-xs leading-relaxed">
            * A call-out fee may apply for locations outside our core service area. We&apos;ll let you know upfront if this applies to your job.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="section-title">
              Ready to get<br />
              <span className="text-brand-pink">started?</span>
            </h2>
            <div>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Whether you are replacing an old fence or starting from scratch, we will guide you through every step and deliver a result you will be proud of.
              </p>
              <Link href="/get-a-quote" className="btn-primary text-base">
                Enquire Now &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
