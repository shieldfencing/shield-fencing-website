import Link from 'next/link'
import ReviewCard from './ReviewCard'
import { reviews } from '@/lib/reviews'

interface Feature {
  title: string
  desc: string
}

interface ServiceVariant {
  name: string
  desc: string
  best: string
}

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  heroTagline: string
  intro: string
  features: Feature[]
  variants?: ServiceVariant[]
  faqs: { q: string; a: string }[]
  relatedPosts?: { title: string; slug: string }[]
}

export default function ServicePageLayout({
  title,
  subtitle,
  heroTagline,
  intro,
  features,
  variants,
  faqs,
  relatedPosts,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* HERO */}
      <section className="section-dark-hero pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-6">
            {heroTagline}
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight max-w-4xl">
            {title}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mt-8 max-w-xl">{subtitle}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/get-a-quote" className="btn-primary w-fit">
              Get a Free Quote
            </Link>
            <Link href="/reviews" className="btn-secondary w-fit">
              Read Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO — open, breathes on cream */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gray-600 text-xl leading-relaxed">{intro}</p>
          </div>
        </div>
      </section>

      {/* FEATURES — white panel */}
      <section className="py-24 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
            <h2 className="section-title">
              Why choose Shield Fencing<br />
              <span className="text-brand-pink">for this job?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {features.map((f, i) => (
              <div key={f.title} className="bg-white p-8">
                <span className="text-brand-pink text-xs font-mono tracking-widest mb-4 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold text-brand-dark mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VARIANTS — cream panel, alternates from white */}
      {variants && variants.length > 0 && (
        <section className="py-24 section-cream-panel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
              <h2 className="section-title">Available options.</h2>
              <p className="text-gray-500 lg:text-right">
                We&apos;ll help you choose the right product for your project and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-300">
              {variants.map((v, i) => (
                <div key={v.name} className="bg-brand-cream p-10 flex flex-col gap-6">
                  <span className="text-brand-pink text-xs font-mono tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{v.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-300">
                    <span className="text-xs font-semibold text-brand-pink uppercase tracking-wider">
                      Best for
                    </span>
                    <p className="text-sm text-gray-600 mt-1">{v.best}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REVIEWS — dark panel */}
      <section className="py-24 section-dark-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <h2 className="section-title text-white">What clients say.</h2>
            <Link href="/reviews" className="text-white/50 hover:text-white text-sm transition-colors underline underline-offset-4 shrink-0">
              All reviews →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.slice(0, 4).map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — white panel */}
      <section className="py-24 section-white-panel">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-16">Common questions.</h2>
          <div className="space-y-0 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-8">
                <h3 className="font-bold text-brand-dark mb-3">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED BLOG — open */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-6">Related articles</h2>
            <div className="flex flex-wrap gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="border border-gray-200 hover:border-brand-pink/40 rounded-xl px-5 py-4 text-sm font-medium text-brand-dark hover:text-brand-pink transition-all"
                >
                  {p.title} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA — open */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="section-title">
              Ready to get<br />
              <span className="text-brand-pink">a quote?</span>
            </h2>
            <div>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Free, no-obligation. We&apos;ll get back to you fast — usually same day.
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
