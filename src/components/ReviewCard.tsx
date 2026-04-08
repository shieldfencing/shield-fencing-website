interface ReviewCardProps {
  name: string
  suburb?: string
  date?: string
  rating?: number
  text: string
  service?: string
}

export default function ReviewCard({
  name,
  suburb,
  date,
  rating = 5,
  text,
  service,
}: ReviewCardProps) {
  return (
    <div className="card flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center font-bold text-brand-pink text-sm">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-sm text-brand-dark">{name}</p>
            {suburb && <p className="text-xs text-gray-500">{suburb}</p>}
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
        {service && (
          <span className="text-xs bg-brand-light text-brand-dark px-3 py-1 rounded-full font-medium">
            {service}
          </span>
        )}
        {date && <span className="text-xs text-gray-400 ml-auto">{date}</span>}
      </div>
    </div>
  )
}
