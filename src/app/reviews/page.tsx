import type { Metadata } from 'next'
import Link from 'next/link'
import { reviews, type Review } from '@/lib/reviews'
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1'

function distributeReviews(all: Review[]): [Review[], Review[], Review[]] {
  const hipages = all.filter((r) => r.source !== 'Google Reviews')
  const google = all.filter((r) => r.source === 'Google Reviews')

  // Seeded shuffle so order is stable per build but randomised
  function seededShuffle<T>(arr: T[], seed: number): T[] {
    const a = [...arr]
    let s = seed
    for (let i = a.length - 1; i > 0; i--) {
      s = (s * 16807 + 0) % 2147483647
      const j = s % (i + 1)
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  const shuffledGoogle = seededShuffle(google, 42)
  const shuffledHipages = seededShuffle(hipages, 7)

  const cols: [Review[], Review[], Review[]] = [[], [], []]

  // Distribute hipages evenly across columns
  shuffledHipages.forEach((r, i) => cols[i % 3].push(r))

  // Fill remaining slots with Google reviews
  const perCol = Math.ceil(all.length / 3)
  let gi = 0
  for (let c = 0; c < 3; c++) {
    while (cols[c].length < perCol && gi < shuffledGoogle.length) {
      cols[c].push(shuffledGoogle[gi++])
    }
  }

  // Shuffle within each column so hipages aren't always at the top
  return [
    seededShuffle(cols[0], 13),
    seededShuffle(cols[1], 29),
    seededShuffle(cols[2], 53),
  ]
}

const [col1, col2, col3] = distributeReviews(reviews)

export const metadata: Metadata = {
  title: 'Reviews & Testimonials | Shield Fencing Brisbane',
  description:
    'Read what Brisbane homeowners say about Shield Fencing. 4.9-star Google rating. Colorbond, timber fencing, and retaining walls across Greater Brisbane.',
  alternates: { canonical: 'https://shieldfencing.com.au/reviews' },
}

export default function ReviewsPage() {
  return (
    <>
      {/* HERO */}
      <section className="section-dark-hero pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-6">
            Reviews & Testimonials
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight max-w-4xl">
            Don&apos;t take our<br />
            <span className="text-brand-pink">word for it.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mt-6 max-w-xl">
            Real reviews from real Brisbane homeowners. See what our clients say about working with Shield Fencing.
          </p>
        </div>
      </section>

      {/* STATS PANEL */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            {[
              { value: '4.9 \u2605', label: 'Google Rating' },
              { value: '5.0 \u2605', label: 'hipages' },
              { value: '1000m+', label: 'Fencing Installed' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <p className="text-5xl font-bold text-brand-dark">{s.value}</p>
                <p className="text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL REVIEWS */}
      <section className="py-24 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-6 max-h-[740px] overflow-hidden">
            <TestimonialsColumn reviews={col1} duration={56} />
            <TestimonialsColumn reviews={col2} className="hidden md:block" duration={68} />
            <TestimonialsColumn reviews={col3} className="hidden lg:block" duration={44} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="section-title">
              See what the<br />
              <span className="text-brand-pink">fuss is about.</span>
            </h2>
            <div>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Every review above came from a real project, a real client, and a real result. If you want the same experience, we would love to hear from you.
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
