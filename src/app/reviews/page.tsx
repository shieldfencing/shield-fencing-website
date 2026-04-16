import type { Metadata } from 'next'
import Link from 'next/link'
import { reviews } from '@/lib/reviews'
import { TestimonialsColumn } from '@/components/ui/testimonials-columns-1'

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
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
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
          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn reviews={reviews.slice(0, 8)} duration={28} />
            <TestimonialsColumn reviews={reviews.slice(8, 16)} className="hidden md:block" duration={34} />
            <TestimonialsColumn reviews={reviews.slice(16)} className="hidden lg:block" duration={22} />
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
