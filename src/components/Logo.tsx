interface LogoProps {
  variant?: 'white' | 'dark'
  className?: string
}

export default function Logo({ variant = 'white', className = '' }: LogoProps) {
  const color = variant === 'white' ? '#ffffff' : '#130314'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Shield brandmark */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 841.86 848.22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="shield-clip-a">
            <path d="M820.93,132.9c-1.4,295.09-161.77,552.58-400,691.22C182.7,685.48,22.33,427.99,20.93,132.9c145.76-.66,282.37-40.16,400-108.78,117.63,68.62,254.24,108.12,400,108.78Z" />
          </clipPath>
          <clipPath id="shield-clip-b">
            <polygon points="421.77 825.96 820.92 609.97 822.62 25.78 22.62 25.78 22.62 609.97 421.77 825.96" />
          </clipPath>
        </defs>
        <g clipPath="url(#shield-clip-a)">
          <g clipPath="url(#shield-clip-b)">
            <polygon fill={color} points="293.75 2487.08 123.54 2487.08 123.54 -145.19 208.65 -383.04 293.75 -145.19 293.75 2487.08" />
            <polygon fill={color} points="722.26 2487.08 552.05 2487.08 552.05 14.15 637.16 -209.31 722.26 14.15 722.26 2487.08" />
            <polygon fill={color} points="508.02 2487.08 337.81 2487.08 337.81 -193.36 422.91 -435.57 508.02 -193.36 508.02 2487.08" />
            <rect fill={color} x="21.43" y="268.54" width="803.21" height="78.31" />
            <rect fill={color} x="21.43" y="544.8" width="799.81" height="78.31" />
          </g>
        </g>
        <path
          stroke={color}
          strokeWidth="41.67"
          strokeMiterlimit="10"
          fill="none"
          d="M820.93,132.9c-1.4,295.09-161.77,552.58-400,691.22C182.7,685.48,22.33,427.99,20.93,132.9c145.76-.66,282.37-40.16,400-108.78,117.63,68.62,254.24,108.12,400,108.78Z"
        />
      </svg>
      {/* Wordmark */}
      <span
        className="font-bold text-xl tracking-widest uppercase"
        style={{ color, letterSpacing: '0.12em' }}
      >
        Shield Fencing
      </span>
    </div>
  )
}
