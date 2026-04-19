import type { Metadata } from 'next'
import Link from 'next/link'
import { reviews } from '@/lib/reviews'
import { getAllPosts } from '@/lib/posts'
import ReviewCard from '@/components/ReviewCard'

export const metadata: Metadata = {
  title: 'Thank You | Shield Fencing',
  robots: { index: false },
}

const steps = [
  { num: '01', title: 'Enquiry review', desc: 'Every enquiry is reviewed carefully to ensure it aligns with the type of work we take on.' },
  { num: '02', title: 'Site visit', desc: 'If we move forward, we will arrange a time to walk the job with you. This allows us to measure accurately and understand the full scope of work.' },
  { num: '03', title: 'Written quote', desc: 'After the site visit, we prepare a detailed written quote. Clear, itemised, and based on what is actually required, not assumptions.' },
]

const featuredReviews = [reviews[0], reviews[1], reviews[4]]

export default function ThankYouPage() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="section-dark-hero pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-brand-pink/20 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest">Enquiry received</p>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight max-w-4xl">
            Thanks for<br />
            <span className="text-brand-pink">getting in touch.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mt-8 max-w-xl">
            We have received your enquiry and will be in touch shortly.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-24 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-16">What happens next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {steps.map((s) => (
              <div key={s.num} className="bg-brand-cream p-10">
                <span className="text-brand-pink text-xs font-mono tracking-widest mb-6 block">{s.num}</span>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 section-dark-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-white mb-4">
            What our clients<br />
            <span className="text-brand-pink">are saying.</span>
          </h2>
          <p className="text-white/40 text-sm mb-12 max-w-lg">
            Real reviews from real Brisbane homeowners.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredReviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/reviews" className="btn-outline border-white/20 text-white hover:bg-white/10">
              All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST BLOG POSTS */}
      {posts.length > 0 && (
        <section className="py-24 section-white-panel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title mb-4">
              While you wait,<br />
              <span className="text-brand-pink">have a read.</span>
            </h2>
            <p className="text-gray-400 text-sm mb-12 max-w-lg">
              Honest advice, pricing guides, and tips from Brisbane&apos;s fencing specialists.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-brand-cream hover:bg-white transition-colors duration-300 p-10 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="text-brand-pink font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-pink transition-colors leading-snug flex-1">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="text-brand-dark text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/blog" className="btn-outline">
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* PRIVACY */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-xs text-gray-400 leading-relaxed bg-white rounded-2xl p-8 border border-gray-100">
            <p className="font-semibold text-brand-dark mb-2 text-sm">Your privacy</p>
            By submitting this enquiry, you consent to Shield Fencing contacting you by phone, SMS, or email to respond to your request, provide quotes, arrange site visits, and follow up regarding your enquiry. Your information will be handled in accordance with our{' '}
            <Link href="/privacy" className="text-brand-pink hover:underline">Privacy Policy</Link>.
          </div>
        </div>
      </section>
    </>
  )
}
