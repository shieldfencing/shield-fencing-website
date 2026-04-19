import type { Metadata } from 'next'

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
              Shield Fencing Pty Ltd (ABN 12 683 251 489) operates{' '}
              <a href="https://www.shieldfencing.com.au" className="text-brand-pink hover:underline">
                shieldfencing.com.au
              </a>.
              This policy outlines how we collect, use, and protect your personal information in accordance with Australian privacy laws.
            </p>
          </section>

          <section>
            <h2>What information we collect</h2>
            <p>When you submit an enquiry through our website, we may collect:</p>
            <ul>
              <li>Name, phone number, and email address</li>
              <li>Suburb and postcode</li>
              <li>Project details you provide, including type, size, and timeline</li>
              <li>Any photos you choose to upload</li>
            </ul>
            <p>
              We may also collect basic website usage data through cookies and tracking to understand how visitors use our site.
            </p>
          </section>

          <section>
            <h2>How we use your information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Respond to your enquiry and provide a quote</li>
              <li>Prepare quotes and invoices</li>
              <li>Arrange site visits and follow up on your project</li>
              <li>Communicate with you regarding project progress</li>
              <li>Improve our website and services</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </section>

          <section>
            <h2>Sharing your information</h2>
            <p>We may share your information where necessary to deliver our services, including:</p>
            <ul>
              <li>With team members involved in your project</li>
              <li>With service providers that support our website, forms, and communications</li>
            </ul>
            <p>These parties are only provided with the information required to perform their role.</p>
          </section>

          <section>
            <h2>Cookies and tracking</h2>
            <p>Our website uses cookies and similar technologies to:</p>
            <ul>
              <li>Analyse website traffic and usage</li>
              <li>Measure the effectiveness of advertising</li>
            </ul>
            <p>You can manage cookies through your browser settings.</p>
          </section>

          <section>
            <h2>Data storage and security</h2>
            <p>
              We take reasonable steps to protect your personal information from misuse, loss, and unauthorised access.
            </p>
            <p>
              Information may be stored through secure third-party platforms used to manage enquiries and communications.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at any time.
            </p>
            <p>
              To do so, please contact us using the details below.
            </p>
          </section>

          <section>
            <h2>Contact us</h2>
            <p>
              If you have any questions about this policy or your personal information, please contact us.
            </p>
            <p>
              Email:{' '}
              <a href="mailto:accounts@shieldfencing.com.au" className="text-brand-pink hover:underline">
                accounts@shieldfencing.com.au
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
