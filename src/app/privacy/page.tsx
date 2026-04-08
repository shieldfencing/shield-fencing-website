import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Shield Fencing',
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-dark mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: April 2026</p>

        <div className="prose-blog space-y-8">
          <section>
            <h2>Who we are</h2>
            <p>
              Shield Fencing Pty Ltd (ABN 12 683 251 489) operates shieldfencing.com.au. This policy
              explains how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2>What information we collect</h2>
            <p>When you submit an enquiry through our website, we collect:</p>
            <ul>
              <li>Name, phone number, and email address</li>
              <li>Suburb or postcode</li>
              <li>Project details you provide (type, size, timeline)</li>
              <li>Any photos you choose to upload</li>
            </ul>
          </section>

          <section>
            <h2>How we use your information</h2>
            <p>We use your information only to:</p>
            <ul>
              <li>Respond to your enquiry and provide a quote</li>
              <li>Arrange site visits or follow up on your project</li>
              <li>Communicate with you about work we&apos;ve completed</li>
            </ul>
            <p>
              We do not sell, share, or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2>How to contact us</h2>
            <p>
              If you have any questions about this policy or want to request access to or deletion
              of your data, please contact us via the{' '}
              <Link href="/get-a-quote">enquiry form</Link> or email us directly.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
