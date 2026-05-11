'use client'

import Script from 'next/script'

/**
 * Google Analytics (GA4) + Google Ads conversion tracking.
 *
 * Reads tag IDs from environment variables:
 *   NEXT_PUBLIC_GA_MEASUREMENT_ID  — e.g. G-XXXXXXXXXX  (GA4)
 *   NEXT_PUBLIC_GOOGLE_ADS_ID      — e.g. AW-XXXXXXXXXX (Google Ads)
 *   NEXT_PUBLIC_ADS_CONVERSION_LABEL — e.g. AbC123  (conversion action label for form submit)
 *
 * If no IDs are set, nothing renders (safe to deploy without them).
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

  // If neither tag is set, render nothing
  if (!gaId && !adsId) return null

  // Use whichever tag ID is available as the primary gtag config
  const primaryId = gaId || adsId

  return (
    <>
      {/* Global site tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${gaId ? `gtag('config', '${gaId}');` : ''}
          ${adsId ? `gtag('config', '${adsId}');` : ''}
        `}
      </Script>
    </>
  )
}
