import type { Metadata } from 'next'
import Link from 'next/link'
import CredentialLogo from './CredentialLogo'

export const metadata: Metadata = {
  title: 'Contact | Shield Fencing',
  description: 'Shield Fencing contact information, credentials, and licensing details.',
  robots: { index: false },
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="section-dark-hero pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-pink font-semibold text-xs uppercase tracking-widest mb-5">Contact</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl">
            Get in touch<br />
            <span className="text-brand-pink">with us.</span>
          </h1>
          <p className="text-white/40 text-base mt-6 max-w-md leading-relaxed">
            For most enquiries, the online form is the fastest way to get a clear response.
          </p>
          <div className="mt-8">
            <Link href="/get-a-quote" className="btn-primary">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="py-20 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left - details */}
            <div>
              <h2 className="section-title mb-10">Prefer to speak directly?</h2>
              <dl className="space-y-8">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Phone</dt>
                  <dd className="text-brand-dark font-medium">
                    <a href="tel:0411496474" className="hover:text-brand-pink transition-colors">0411 496 474</a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Email</dt>
                  <dd className="text-brand-dark font-medium">accounts@shieldfencing.com.au</dd>
                  <dd className="text-gray-400 text-xs mt-1">Accounts and administrative matters only.</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Service Area</dt>
                  <dd className="text-brand-dark font-medium">Greater Brisbane, QLD</dd>
                </div>
              </dl>
            </div>

            {/* Right - credentials */}
            <div>
              <h2 className="section-title mb-10">Credentials.</h2>
              <div className="space-y-4">

                {/* QBCC */}
                <div className="flex items-center gap-6 p-6 bg-brand-cream rounded-2xl">
                  <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <CredentialLogo src="/logos/svg/qbcc-logo.jpg" alt="QBCC Licensed" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">QBCC Licensed</p>
                    <p className="text-gray-500 text-sm mt-0.5">License No 15 574 983</p>
                    <p className="text-gray-400 text-xs mt-1">Structural Landscaping (Trade) &middot; Carpentry</p>
                  </div>
                </div>

                {/* Engineers Australia */}
                <div className="flex items-center gap-6 p-6 bg-brand-cream rounded-2xl">
                  <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <CredentialLogo src="/logos/credentials/Engineers_Australia_Logo.svg.png" alt="Engineers Australia" size={48} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">Engineers Australia</p>
                    <p className="text-gray-500 text-sm mt-0.5">Backed by a Chartered Civil Engineer</p>
                  </div>
                </div>

                {/* ABN */}
                <div className="flex items-center gap-6 p-6 bg-brand-cream rounded-2xl">
                  <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-white rounded-xl border border-gray-100 overflow-hidden">
                    <CredentialLogo src="/logos/svg/new-australian-government-stacked-black.png" alt="Australian Government" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">ABN</p>
                    <p className="text-gray-500 text-sm mt-0.5">12 683 251 489</p>
                  </div>
                </div>

                {/* Insurance */}
                <div className="flex items-center gap-6 p-6 bg-brand-cream rounded-2xl">
                  <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-white rounded-xl border border-gray-100">
                    <svg className="w-8 h-8 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-brand-dark">$10M Public Liability Insurance</p>
                    <p className="text-gray-500 text-sm mt-0.5">Full coverage on every job, every site</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-dark-panel px-10 py-16 text-center">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Fastest way to reach us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Submit an enquiry online.
            </h2>
            <p className="text-white/40 max-w-md mx-auto text-sm leading-relaxed mb-8">
              Tell us about your project and we will get back to you with the next steps.
            </p>
            <Link href="/get-a-quote" className="btn-primary">
              Enquire Now &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
