import Link from 'next/link'
import TrustBar from './TrustBar'
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
      <section className="bg-brand-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-pink font-semibold text-sm uppercase tracking-wider mb-4">
              {heroTagline}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-a-quote" className="btn-primary">
                Get a Free Quote
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gray-600 text-lg leading-relaxed">{intro}</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-12">
            Why choose Shield Fencing<br />
            <span className="text-brand-pink">for this job?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card">
                <div className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center mb-4">
                  <svg className="w-4 h-4 text-brand-pink" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VARIANTS */}
      {variants && variants.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title mb-4">Available options</h2>
            <p className="text-gray-500 mb-12">
              We&apos;ll help you choose the right product for your project and budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {variants.map((v) => (
                <div key={v.name} className="card border-2 hover:border-brand-pink/40 transition-colors">
                  <h3 className="text-xl font-bold mb-3">{v.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{v.desc}</p>
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <span className="text-xs font-semibold text-brand-pink uppercase tracking-wider">
                      Best for:
                    </span>
                    <p className="text-sm text-gray-600 mt-1">{v.best}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REVIEWS */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-12">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.slice(0, 4).map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-12">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-brand-dark mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED BLOG */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-16 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Related articles</h2>
            <div className="flex flex-wrap gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-white border border-gray-200 hover:border-brand-pink/40 rounded-xl px-5 py-4 text-sm font-medium text-brand-dark hover:text-brand-pink transition-all"
                >
                  {p.title} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to get a quote?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Free, no-obligation. We&apos;ll get back to you fast.
          </p>
          <Link href="/get-a-quote" className="btn-primary text-base px-10 py-5">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
