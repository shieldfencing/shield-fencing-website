'use client'

import { useEffect } from 'react'

/**
 * Fires a Google Ads conversion event on mount.
 * Place this on the /thank-you page to track form submissions.
 *
 * Requires NEXT_PUBLIC_GOOGLE_ADS_ID and NEXT_PUBLIC_ADS_CONVERSION_LABEL
 * to be set in .env.local.
 */
export default function ConversionEvent() {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
  const conversionLabel = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL

  useEffect(() => {
    if (!adsId || !conversionLabel) return
    if (typeof window === 'undefined') return
    if (typeof (window as any).gtag !== 'function') return

    ;(window as any).gtag('event', 'conversion', {
      send_to: `${adsId}/${conversionLabel}`,
    })
  }, [adsId, conversionLabel])

  return null
}
