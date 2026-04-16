import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
