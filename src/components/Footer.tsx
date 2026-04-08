import Link from 'next/link'
import Logo from './Logo'

const services = [
  { label: 'Colorbond Fencing', href: '/colorbond' },
  { label: 'Timber Fencing', href: '/timber' },
  { label: 'Retaining Walls', href: '/retaining-walls' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'Get a Quote', href: '/get-a-quote' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="white" />
            <p className="mt-4 text-white/60 text-sm leading-relaxed max-w-sm">
              Brisbane&apos;s trusted fencing specialists. Protecting what matters
              most — your property, your family, your peace of mind.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-white/60">
              <span>📞 <a href="tel:0412345678" className="hover:text-white transition-colors">Call us for a free quote</a></span>
              <span>📍 Servicing Greater Brisbane, QLD</span>
              <span>🏆 QBCC Licensed · ABN 12 683 251 489</span>
              <span>🛡️ Insured up to $10 million</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Shield Fencing Pty Ltd. All rights reserved.</p>
          <p>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
