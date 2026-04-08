const badges = [
  { icon: '🏆', label: 'QBCC Licensed', sub: 'Lic. No. 15574983' },
  { icon: '⭐', label: '5-Star Rated', sub: 'Google Reviews' },
  { icon: '🛡️', label: '$10M Insured', sub: 'Fully covered' },
  { icon: '🏗️', label: 'Civil Eng. Backed', sub: 'Engineers Australia NER' },
  { icon: '📋', label: 'Free Quotes', sub: 'Fast response' },
]

interface TrustBarProps {
  dark?: boolean
}

export default function TrustBar({ dark = false }: TrustBarProps) {
  return (
    <div className={`${dark ? 'bg-brand-dark border-white/10' : 'bg-brand-light border-gray-200'} border-y`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <span className="text-xl">{badge.icon}</span>
              <div>
                <p className={`text-xs font-semibold ${dark ? 'text-white' : 'text-brand-dark'}`}>
                  {badge.label}
                </p>
                <p className={`text-xs ${dark ? 'text-white/50' : 'text-gray-500'}`}>
                  {badge.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
