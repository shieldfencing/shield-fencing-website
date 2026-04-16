import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPost, getAllPosts } from '@/lib/posts'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://shieldfencing.com.au/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  const allPosts = getAllPosts()
  const others = allPosts.filter((p) => p.slug !== slug)
  const sameCategory = others.filter((p) => p.category === post.category)
  const different = others.filter((p) => p.category !== post.category)
  const related = [...sameCategory, ...different].slice(0, 2)

  return (
    <>
      {/* HERO */}
      <section className="section-dark-hero pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/blog" className="text-white/40 hover:text-white text-sm transition-colors">
              ← Blog
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-brand-pink text-xs font-semibold uppercase tracking-widest">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/30 text-sm">
            <span>{post.author}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Inline CTA */}
          <div className="mt-16 bg-brand-dark rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to get started?
            </h3>
            <p className="text-white/50 mb-8">
              Fast response. We service all of Greater Brisbane.
            </p>
            <Link href="/get-a-quote" className="btn-primary">
              Enquire Now →
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <section className="py-16 section-white-panel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">More articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-white hover:bg-brand-cream transition-colors p-8"
                >
                  <span className="text-xs text-brand-pink font-semibold uppercase tracking-widest">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-3 group-hover:text-brand-pink transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">{p.excerpt}</p>
                  <span className="text-brand-dark text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
