import type { Metadata } from 'next'
import Link from 'next/link'
import { reviews } from '@/lib/reviews'
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1'

export const metadata: Metadata = {
  title: 'Reviews & Testimonials | Shield Fencing Brisbane',
  description:
    'Read what Brisbane homeowners say about Shield Fencing. 4.9-star Google rating across 25 reviews — Colorbond, timber fencing, and retaining walls across Greater Brisbane.',
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
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Don&apos;t take our<br />
            <span className="text-brand-pink">word for it.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mt-6 max-w-xl">
            Real reviews from real Brisbane homeowners. See what our clients say about working with Shield Fencing.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
            {[
              { value: '4.9', label: 'Average rating' },
              { value: '25', label: 'Reviews' },
              { value: '100+', label: 'Jobs completed' },
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
          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn reviews={reviews.slice(0, 8)} duration={28} />
            <TestimonialsColumn reviews={reviews.slice(8, 16)} className="hidden md:block" duration={34} />
            <TestimonialsColumn reviews={reviews.slice(16)} className="hidden lg:block" duration={22} />
          </div>

          {/* Leave a review */}
          <div className="mt-20 bg-brand-dark rounded-2xl p-10 text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">Had work done with us?</h3>
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              We&apos;d love to hear about your experience. Your feedback helps other Brisbane homeowners make the right choice.
            </p>
            <a
              href="https://g.page/r/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="section-title">
              Ready to join our<br />
              <span className="text-brand-pink">happy clients?</span>
            </h2>
            <div>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Get a free quote today. We look after our customers from start to finish.
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
