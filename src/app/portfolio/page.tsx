import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio | Fencing & Retaining Wall Projects | Shield Fencing Brisbane',
  description:
    'Browse Shield Fencing\'s portfolio of completed fencing and retaining wall projects across Greater Brisbane. Colorbond, timber, and concrete retaining walls.',
  alternates: { canonical: 'https://shieldfencing.com.au/portfolio' },
}

const projects = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  category: ['Colorbond®', 'Timber', 'Retaining Walls', 'Colorbond®', 'Timber', 'Retaining Walls'][i % 6],
  suburb: ['Rochedale', 'Doolandella', 'Chermside', 'Springwood', 'Sunnybank', 'Logan', 'Ipswich', 'Carindale', 'North Lakes', 'Kallangur', 'Toowong', 'Redland Bay'][i],
}))

export default function PortfolioPage() {
  return (
    <>
      {/* HERO */}
      <section className="section-dark-hero pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-6">
            Our Work
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight max-w-4xl">
            Every job we&apos;re<br />
            <span className="text-brand-pink">proud to show you.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed mt-8">
            Browse completed fencing and retaining wall projects across Greater Brisbane. Real jobs, real results, nothing staged.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-24 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Photo notice */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 mb-16 text-center max-w-xl mx-auto">
            <svg className="w-10 h-10 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="font-semibold text-brand-dark">Professional photos coming soon</p>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              We&apos;re getting a photographer out to document our best work. Check back soon!
            </p>
          </div>

          {/* Placeholder grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <div
                key={p.id}
                className="aspect-[4/3] bg-brand-dark rounded-2xl overflow-hidden relative"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <span className="text-xs text-brand-pink font-semibold uppercase tracking-widest">
                    {p.category}
                  </span>
                  <p className="text-white text-sm font-medium mt-1">{p.suburb}</p>
                </div>
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
              Like what<br />
              <span className="text-brand-pink">you see?</span>
            </h2>
            <div>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Enquire about your project. We service all of Greater Brisbane.
              </p>
              <Link href="/get-a-quote" className="btn-primary text-base">
                Enquire Now →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
