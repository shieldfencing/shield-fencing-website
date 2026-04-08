import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import ReviewCard from '@/components/ReviewCard'
import { reviews } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Reviews & Testimonials | Shield Fencing Brisbane',
  description:
    'Read what Brisbane homeowners say about Shield Fencing. 5-star reviews for Colorbond, timber fencing, and retaining walls across Greater Brisbane.',
  alternates: { canonical: 'https://shieldfencing.com.au/reviews' },
}

export default function ReviewsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-brand-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-pink font-semibold text-sm uppercase tracking-wider mb-4">
              Reviews & Testimonials
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Don&apos;t take our<br />
              <span className="text-brand-pink">word for it.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Real reviews from real Brisbane homeowners. See what our clients say
              about working with Shield Fencing.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* STATS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto text-center">
            <div>
              <p className="text-4xl font-bold text-brand-dark">5.0</p>
              <div className="flex justify-center my-2">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500">Average rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-dark">100%</p>
              <p className="text-sm text-gray-500 mt-2">5-star reviews</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-dark">BNE</p>
              <p className="text-sm text-gray-500 mt-2">Greater Brisbane</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>

          {/* Leave a review CTA */}
          <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 text-center max-w-xl mx-auto">
            <p className="text-2xl mb-2">⭐</p>
            <h3 className="text-xl font-bold mb-2">Had work done with us?</h3>
            <p className="text-gray-500 text-sm mb-6">
              We&apos;d love to hear about your experience. Your feedback helps other Brisbane
              homeowners make the right choice.
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
      <section className="py-20 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to join our happy clients?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Get a free quote today. We look after our customers from start to finish.
          </p>
          <Link href="/get-a-quote" className="btn-primary text-base px-10 py-5">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
