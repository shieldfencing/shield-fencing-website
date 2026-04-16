'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const navLinks = [
  { label: 'Retaining Walls', href: '/retaining-walls' },
  { label: 'Colorbond® Steel', href: '/colorbond' },
  { label: 'Timber', href: '/timber' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-brand-dark/90 backdrop-blur-md'
            : pathname === '/'
            ? 'bg-transparent'
            : 'bg-brand-dark'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" aria-label="Shield Fencing Home" className="relative z-10">
              <Logo variant="white" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? 'text-brand-pink'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link href="/get-a-quote" className="btn-primary text-sm py-3 px-6">
                Enquire Now
              </Link>
            </div>

            {/* Mobile: CTA + hamburger */}
            <div className="lg:hidden flex items-center gap-3 relative z-10">
              {!menuOpen && (
                <Link
                  href="/get-a-quote"
                  className="text-xs font-semibold text-white bg-brand-pink rounded-full px-4 py-2"
                >
                  Enquire Now
                </Link>
              )}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              >
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${
                    menuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-200 ${
                    menuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${
                    menuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-400 ${
          menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Dark panel — slides down from top */}
        <div
          className={`absolute inset-0 bg-[#0e0011] flex flex-col transition-all duration-350 ease-in-out ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          {/* Spacer for header height */}
          <div className="h-16 shrink-0" />

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-6 pt-8 pb-4">
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  className={`transition-all duration-300 ${
                    menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                  style={{ transitionDelay: menuOpen ? `${60 + i * 40}ms` : '0ms' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-4 border-b border-white/10 text-xl font-semibold tracking-tight transition-colors ${
                      pathname === link.href ? 'text-brand-pink' : 'text-white hover:text-brand-pink'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom actions */}
          <div
            className={`px-6 pb-10 pt-4 space-y-3 transition-all duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: menuOpen ? '380ms' : '0ms' }}
          >
            <Link
              href="/get-a-quote"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center py-4 rounded-full bg-brand-pink text-white font-semibold text-sm tracking-wide"
            >
              Enquire Now
            </Link>
            <Link
              href="/reviews"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center py-4 rounded-full border border-white/20 text-white font-semibold text-sm tracking-wide hover:border-white/40 transition-colors"
            >
              Read Reviews
            </Link>

            {/* Credentials strip */}
            <p className="text-center text-white/20 text-xs pt-2 leading-relaxed">
              QBCC Licensed · $10M Insured · Greater Brisbane
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
