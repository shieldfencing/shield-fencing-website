import Image from 'next/image'

interface LogoProps {
  variant?: 'white' | 'dark'
  className?: string
}

export default function Logo({ variant = 'white', className = '' }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src={`/logos/svg/horizontal-logo-white.svg`}
        alt="Shield Fencing"
        width={180}
        height={61}
        priority
        style={variant === 'dark' ? { filter: 'invert(1) brightness(0)' } : undefined}
      />
    </div>
  )
}
