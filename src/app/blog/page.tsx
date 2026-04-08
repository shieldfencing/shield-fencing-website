import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog | Fencing Tips & Guides for Brisbane Homeowners | Shield Fencing',
  description:
    'Expert fencing guides, pricing information, and tips for Brisbane homeowners. Colorbond, timber, retaining walls, and more from Shield Fencing.',
  alternates: { canonical: 'https://shieldfencing.com.au/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* HERO */}
      <section className="bg-brand-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-pink font-semibold text-sm uppercase tracking-wider mb-4">
              Blog
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Everything you need<br />
              <span className="text-brand-pink">to know about fencing</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Honest advice, pricing guides, and tips from Brisbane&apos;s fencing specialists.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* POSTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">Articles coming soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group card flex flex-col gap-4 hover:border-brand-pink/30 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Placeholder image area */}
                  <div className="aspect-[16/9] bg-brand-dark rounded-xl overflow-hidden flex items-center justify-center">
                    <span className="text-white/20 text-xs uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="bg-brand-light text-brand-dark px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                    <span className="ml-auto">{post.date}</span>
                  </div>

                  <h2 className="text-lg font-bold text-brand-dark group-hover:text-brand-pink transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <span className="mt-auto text-brand-pink text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to get a quote?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            We service all of Greater Brisbane. Free, no-obligation quotes.
          </p>
          <Link href="/get-a-quote" className="btn-primary text-base px-10 py-5">
            Get a Free Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
