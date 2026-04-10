'use client'

import Image from 'next/image'

export default function CredentialLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={64}
      height={64}
      className="object-contain"
    />
  )
}
