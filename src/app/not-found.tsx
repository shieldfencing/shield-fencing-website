import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <section className="section-dark-hero pt-32 pb-24 min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-6">
            404
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight max-w-4xl">
            Page not<br />
            <span className="text-brand-pink">found.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mt-8 max-w-xl">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/" className="btn-primary w-fit">
              Back to Home
            </Link>
            <Link href="/enquire-now" className="btn-secondary w-fit">
              Enquire Now
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap gap-4">
            {[
              { label: 'Colorbond Fencing', href: '/colorbond' },
              { label: 'Timber Fencing', href: '/timber' },
              { label: 'Retaining Walls', href: '/retaining-walls' },
              { label: 'Reviews', href: '/reviews' },
              { label: 'Blog', href: '/blog' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/30 hover:text-white text-sm transition-colors underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
