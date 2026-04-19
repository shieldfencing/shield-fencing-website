import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog | Fencing Tips & Guides for Brisbane Homeowners | Shield Fencing',
  description:
    'Expert fencing guides and tips for Brisbane homeowners. Colorbond, timber, retaining walls, and more from Shield Fencing.',
  alternates: { canonical: 'https://shieldfencing.com.au/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* HERO */}
      <section className="section-dark-hero pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-6">
            Blog
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight max-w-4xl">
            Everything you need<br />
            <span className="text-brand-pink">to know.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mt-8 max-w-xl">
            Honest advice, helpful guides, and tips from Brisbane&apos;s fencing specialists.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-24 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">Articles coming soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-brand-cream hover:bg-white transition-colors duration-300 p-10 flex flex-col gap-6"
                >
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="text-brand-pink font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    <span className="ml-auto">{post.date}</span>
                  </div>

                  <h2 className="text-xl font-bold text-brand-dark group-hover:text-brand-pink transition-colors leading-snug flex-1">
                    {post.title}
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
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
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="section-title">
              Ready to get<br />
              <span className="text-brand-pink">a quote?</span>
            </h2>
            <div>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                We service all of Greater Brisbane.
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
