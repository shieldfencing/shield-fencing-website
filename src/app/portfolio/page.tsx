import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'Portfolio | Fencing & Retaining Wall Projects | Shield Fencing Brisbane',
  description:
    'Browse Shield Fencing\'s portfolio of completed fencing and retaining wall projects across Greater Brisbane. Colorbond, timber, and concrete retaining walls.',
  alternates: { canonical: 'https://shieldfencing.com.au/portfolio' },
}

const categories = ['All', 'Colorbond®', 'Timber', 'Retaining Walls']

// Placeholder project grid — replace with real photos when available
const projects = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  category: ['Colorbond®', 'Timber', 'Retaining Walls', 'Colorbond®', 'Timber', 'Retaining Walls'][i % 6],
  suburb: ['Rochedale', 'Doolandella', 'Chermside', 'Springwood', 'Sunnybank', 'Logan', 'Ipswich', 'Carindale', 'North Lakes', 'Kallangur', 'Toowong', 'Redland Bay'][i],
}))

export default function PortfolioPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-wider mb-4">
            Our Work
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Every job we&apos;re<br />proud to show you.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Browse completed fencing and retaining wall projects across Greater Brisbane.
            Real jobs, real results — nothing staged.
          </p>
        </div>
      </section>

      <TrustBar />

      {/* PORTFOLIO GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  cat === 'All'
                    ? 'bg-brand-pink text-white'
                    : 'bg-brand-light text-brand-dark hover:bg-brand-pink/10 hover:text-brand-pink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo notice */}
          <div className="bg-brand-light border border-gray-200 rounded-2xl p-8 mb-12 text-center">
            <svg className="w-10 h-10 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-500 font-medium">Professional job photos coming soon</p>
            <p className="text-gray-400 text-sm mt-1">
              We&apos;re getting a photographer out to document our best work. Check back soon!
            </p>
          </div>

          {/* Placeholder grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.id}
                className="aspect-[4/3] bg-brand-dark rounded-2xl overflow-hidden relative group"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="text-xs text-brand-pink font-semibold uppercase tracking-wider">
                    {p.category}
                  </span>
                  <p className="text-white text-sm font-medium">{p.suburb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Like what you see?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Get a free quote for your project. We service all of Greater Brisbane.
          </p>
          <Link href="/get-a-quote" className="btn-primary text-base px-10 py-5">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
