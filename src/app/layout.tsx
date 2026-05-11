import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Shield Fencing | Brisbane Fencing & Retaining Wall Specialists',
    template: '%s | Shield Fencing Brisbane',
  },
  description:
    'Brisbane\'s trusted fencing specialists. Colorbond, timber, and retaining wall solutions across Greater Brisbane. QBCC Licensed.',
  keywords: [
    'fencing Brisbane',
    'Colorbond fencing Brisbane',
    'timber fencing Brisbane',
    'retaining walls Brisbane',
    'fence contractor Brisbane',
    'QBCC licensed fencer',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://shieldfencing.com.au',
    siteName: 'Shield Fencing',
    title: 'Shield Fencing | Brisbane Fencing & Retaining Wall Specialists',
    description:
      'Brisbane\'s trusted fencing specialists. Colorbond, timber, and retaining wall solutions across Greater Brisbane. QBCC Licensed.',
    images: [
      {
        url: 'https://shieldfencing.com.au/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shield Fencing - Brisbane Fencing & Retaining Wall Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shield Fencing | Brisbane Fencing & Retaining Wall Specialists',
    description:
      'Brisbane\'s trusted fencing specialists. Colorbond, timber, and retaining wall solutions across Greater Brisbane.',
  },
  icons: {
    icon: [
      { url: '/logos/svg/brandmark-pink.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/logos/svg/brandmark-pink.svg',
    apple: '/logos/svg/brandmark-pink.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://shieldfencing.com.au',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://shieldfencing.com.au/#business',
              name: 'Shield Fencing',
              url: 'https://shieldfencing.com.au',
              telephone: '+61411496474',
              email: 'accounts@shieldfencing.com.au',
              description: 'Brisbane fencing and retaining wall specialists. Colorbond, timber fencing, and retaining walls across Greater Brisbane. QBCC Licensed.',
              areaServed: {
                '@type': 'City',
                name: 'Brisbane',
                '@id': 'https://en.wikipedia.org/wiki/Brisbane',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Brisbane',
                addressRegion: 'QLD',
                addressCountry: 'AU',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -27.4698,
                longitude: 153.0251,
              },
              priceRange: '$$',
              image: 'https://shieldfencing.com.au/og-image.jpg',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                bestRating: '5',
                reviewCount: '30',
                ratingCount: '30',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Fencing Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Colorbond Steel Fencing', url: 'https://shieldfencing.com.au/colorbond' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Timber Fencing', url: 'https://shieldfencing.com.au/timber' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retaining Walls', url: 'https://shieldfencing.com.au/retaining-walls' } },
                ],
              },
            }),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
