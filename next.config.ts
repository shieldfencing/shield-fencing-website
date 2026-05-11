import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },

  // 301 redirects: old site URLs → new site URLs
  // Prevents 404s from Google Ads, backlinks, and bookmarks after the website rebuild
  async redirects() {
    return [
      // Retaining walls — old URL patterns
      { source: '/services/retaining-walls', destination: '/retaining-walls', permanent: true },
      { source: '/services/retaining-walls/:path*', destination: '/retaining-walls', permanent: true },
      { source: '/retaining-wall', destination: '/retaining-walls', permanent: true },
      { source: '/retaining-wall-brisbane', destination: '/retaining-walls', permanent: true },
      { source: '/retaining-walls-brisbane', destination: '/retaining-walls', permanent: true },

      // Colorbond fencing — old URL patterns
      { source: '/services/colorbond-fencing', destination: '/colorbond', permanent: true },
      { source: '/services/colorbond', destination: '/colorbond', permanent: true },
      { source: '/colorbond-fencing', destination: '/colorbond', permanent: true },
      { source: '/colorbond-fencing-brisbane', destination: '/colorbond', permanent: true },
      { source: '/colorbond-steel-fencing', destination: '/colorbond', permanent: true },

      // Timber fencing — old URL patterns
      { source: '/services/timber-fencing', destination: '/timber', permanent: true },
      { source: '/services/timber', destination: '/timber', permanent: true },
      { source: '/timber-fencing', destination: '/timber', permanent: true },
      { source: '/timber-fencing-brisbane', destination: '/timber', permanent: true },

      // Services index page
      { source: '/services', destination: '/', permanent: true },

      // Contact / Quote — old URL patterns
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/get-a-quote', destination: '/enquire-now', permanent: true },
      { source: '/quote', destination: '/enquire-now', permanent: true },
      { source: '/free-quote', destination: '/enquire-now', permanent: true },
      { source: '/request-a-quote', destination: '/enquire-now', permanent: true },
      { source: '/enquire', destination: '/enquire-now', permanent: true },
      { source: '/enquiry', destination: '/enquire-now', permanent: true },

      // About — old URL patterns
      { source: '/about-us', destination: '/about', permanent: true },

      // Reviews — old URL patterns
      { source: '/testimonials', destination: '/reviews', permanent: true },
    ]
  },
}

export default nextConfig
