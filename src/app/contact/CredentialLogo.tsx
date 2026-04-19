'use client'

import Image from 'next/image'

export default function CredentialLogo({ src, alt, size = 64 }: { src: string; alt: string; size?: number }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="object-contain"
    />
  )
}
