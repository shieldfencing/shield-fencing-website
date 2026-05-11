'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { upload } from '@vercel/blob/client'
import { searchSuburbs, type Suburb } from '@/lib/qld-suburbs'

type ProjectType = 'retaining-wall' | 'colorbond' | 'timber'

interface FormData {
  projectTypes: ProjectType[]
  fencingLength: string
  wallLength: string
  propertyRelation: string
  sharedBoundary: string
  projectStage: string
  timeline: string
  priority: string
  referral: string
  details: string
  photos: File[]
  priceAlignment: string
  name: string
  email: string
  phone: string
  suburb: string
  suburbValid: boolean
}

const INITIAL: FormData = {
  projectTypes: [],
  fencingLength: '',
  wallLength: '',
  propertyRelation: '',
  sharedBoundary: '',
  projectStage: '',
  timeline: '',
  priority: '',
  referral: '',
  details: '',
  photos: [],
  priceAlignment: '',
  name: '',
  email: '',
  phone: '',
  suburb: '',
  suburbValid: false,
}


function getPriceRange(data: FormData): { low: string; high: string } | null {
  const fencingOnly = data.projectTypes.length > 0 && data.projectTypes.every((t) => t !== 'retaining-wall')
  if (!fencingOnly) return null
  if (data.fencingLength === 'Under 15 m') return { low: '$2,500', high: '$4,500' }
  if (data.fencingLength === '15-30 m') return { low: '$4,500', high: '$9,750' }
  return null
}

function getSteps(data: FormData) {
  const hasFencing = data.projectTypes.some((t) => t !== 'retaining-wall')
  const hasWall = data.projectTypes.includes('retaining-wall')
  const steps: string[] = ['project-type']
  if (hasFencing) steps.push('fencing-length')
  if (hasWall) steps.push('wall-length')
  steps.push('property-relation', 'shared-boundary', 'project-stage')
  if (data.projectStage === 'Ready to move forward') steps.push('timeline')
  steps.push('priority', 'details', 'photos')
  if (getPriceRange(data)) steps.push('price-check')
  steps.push('contact', 'referral')
  return steps
}

// ── Validation helpers ─────────────────────────────────────────────────────

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 10)
  if (digits.length <= 4) return digits
  if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`
  return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`
}

function validatePhone(raw: string): string | null {
  const cleaned = raw.replace(/[\s\-().+]/g, '')
  // International +61 prefix
  if (/^\+61/.test(raw.replace(/\s/g, ''))) {
    if (/^\+61[2-9]\d{8}$/.test(cleaned.replace(/^\+/, '61').replace(/^61/, '+61').replace(/\s/g, '').replace(/[\-().]/g, ''))) return null
    const intl = raw.replace(/\s/g, '').replace(/[\-().]/g, '')
    if (/^\+61[2-9]\d{8}$/.test(intl)) return null
  }
  if (!/^\d{10}$/.test(cleaned)) return 'Please enter a valid Australian phone number (e.g. 0412 345 678)'
  if (!/^0[2-9]/.test(cleaned)) return 'Please enter a valid Australian phone number (e.g. 0412 345 678)'
  return null
}

function validateEmail(email: string): string | null {
  if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email.trim())) {
    return 'Please enter a valid email address (e.g. you@example.com)'
  }
  return null
}

// ── Suburb autocomplete ────────────────────────────────────────────────────

function SuburbAutocomplete({
  value,
  onChange,
  onSelect,
  error,
  onBlur,
}: {
  value: string
  onChange: (val: string) => void
  onSelect: (suburb: Suburb) => void
  error?: string
  onBlur: () => void
}) {
  const [suggestions, setSuggestions] = useState<Suburb[]>([])
  const [open, setOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        onBlur()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onBlur])

  function handleInput(val: string) {
    onChange(val)
    const results = searchSuburbs(val)
    setSuggestions(results)
    setOpen(results.length > 0)
    setHighlighted(-1)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlighted((h) => Math.min(h + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlighted((h) => Math.max(h - 1, 0))
    } else if (e.key === 'Enter' && highlighted >= 0) {
      e.preventDefault()
      pick(suggestions[highlighted])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  function pick(s: Suburb) {
    onSelect(s)
    setOpen(false)
    setSuggestions([])
  }

  return (
    <div ref={containerRef} className="relative">
      <input
        type="text"
        autoComplete="off"
        className={`w-full rounded-xl border-2 px-4 py-3 text-sm focus:outline-none transition-colors ${
          error ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-brand-pink'
        }`}
        placeholder="e.g. Algester, QLD"
        value={value}
        onChange={(e) => handleInput(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          // Delay so click on suggestion fires first
          setTimeout(() => {
            setOpen(false)
            onBlur()
          }, 150)
        }}
      />
      {open && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-h-56 overflow-y-auto">
          {suggestions.map((s, i) => (
            <li
              key={s.display}
              onMouseDown={() => pick(s)}
              className={`px-4 py-3 text-sm cursor-pointer flex justify-between items-center ${
                i === highlighted ? 'bg-brand-pink/10 text-brand-dark' : 'hover:bg-gray-50 text-brand-dark'
              }`}
            >
              <span className="font-medium">{s.name}</span>
              <span className="text-gray-400 font-mono text-xs">{s.postcode}</span>
            </li>
          ))}
        </ul>
      )}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  )
}

// Steps that auto-advance on single selection
const AUTO_ADVANCE_STEPS = new Set([
  'fencing-length', 'wall-length', 'property-relation',
  'shared-boundary', 'project-stage', 'timeline', 'priority', 'referral', 'price-check',
])

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100)
  return (
    <div className="mb-10">
      <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-pink rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-2 text-right">
        Step {current} of {total}
      </p>
    </div>
  )
}

function OptionButton({
  label, selected, onClick, multi, sub,
}: {
  label: string
  selected: boolean
  onClick: () => void
  multi?: boolean
  sub?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-150 flex items-center gap-3 ${
        selected
          ? 'border-brand-pink bg-brand-pink/5 text-brand-dark'
          : 'border-gray-200 bg-white hover:border-gray-300 text-brand-dark'
      }`}
    >
      <span className={`w-5 h-5 rounded-${multi ? 'md' : 'full'} border-2 flex-shrink-0 flex items-center justify-center transition-all ${
        selected ? 'border-brand-pink bg-brand-pink' : 'border-gray-300'
      }`}>
        {selected && (
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </span>
      <span>
        <span className="font-medium text-sm">{label}</span>
        {sub && <span className="block text-xs text-gray-400 mt-0.5">{sub}</span>}
      </span>
    </button>
  )
}

export default function QuoteForm() {
  const router = useRouter()
  const [data, setData] = useState<FormData>(INITIAL)
  const [stepIndex, setStepIndex] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [fileError, setFileError] = useState('')
  const [contactTouched, setContactTouched] = useState<Record<string, boolean>>({})
  const fileRef = useRef<HTMLInputElement>(null)

  const steps = getSteps(data)
  const currentStep = steps[stepIndex]
  const totalSteps = steps.length

  function advanceTo(nextIndex: number) {
    if (nextIndex < totalSteps) {
      setTimeout(() => setStepIndex(nextIndex), 180)
    }
  }

  function selectAndAdvance(updater: (d: FormData) => FormData) {
    setData(updater)
    if (AUTO_ADVANCE_STEPS.has(currentStep)) {
      advanceTo(stepIndex + 1)
    }
  }

  function toggleProject(type: ProjectType) {
    setData((d) => ({
      ...d,
      projectTypes: d.projectTypes.includes(type)
        ? d.projectTypes.filter((t) => t !== type)
        : [...d.projectTypes, type],
    }))
  }

  function canAdvance() {
    switch (currentStep) {
      case 'project-type': return data.projectTypes.length > 0
      case 'fencing-length': return !!data.fencingLength
      case 'wall-length': return !!data.wallLength
      case 'property-relation': return !!data.propertyRelation
      case 'shared-boundary': return !!data.sharedBoundary
      case 'project-stage': return !!data.projectStage
      case 'timeline': return !!data.timeline
      case 'priority': return !!data.priority
      case 'referral': return !!data.referral
      case 'details': return true
      case 'photos': return true
      case 'price-check': return !!data.priceAlignment
      case 'contact':
        return (
          !!data.name.trim() &&
          !validatePhone(data.phone) &&
          !validateEmail(data.email) &&
          data.suburbValid
        )
      default: return false
    }
  }

  function next() {
    if (!canAdvance()) return
    if (stepIndex < totalSteps - 1) setStepIndex((i) => i + 1)
  }

  function back() {
    if (stepIndex > 0) setStepIndex((i) => i - 1)
  }

  async function submit() {
    setSubmitting(true)
    setError('')
    try {
      const uploadedFiles: { url: string; filename: string }[] = []
      for (const file of data.photos) {
        const blob = await upload(file.name, file, {
          access: 'public',
          handleUploadUrl: '/api/upload',
        })
        uploadedFiles.push({ url: blob.url, filename: file.name })
      }

      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectTypes: data.projectTypes,
          fencingLength: data.fencingLength,
          wallLength: data.wallLength,
          propertyRelation: data.propertyRelation,
          sharedBoundary: data.sharedBoundary,
          projectStage: data.projectStage,
          timeline: data.timeline,
          priority: data.priority,
          referral: data.referral,
          priceAlignment: data.priceAlignment,
          details: data.details,
          name: data.name,
          email: data.email,
          phone: data.phone,
          suburb: data.suburb,
          files: uploadedFiles,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      router.push('/thank-you')
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
      setSubmitting(false)
    }
  }

  function renderStep() {
    switch (currentStep) {
      case 'project-type':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">What type of project are you planning?</h2>
            <p className="text-gray-400 text-sm mb-6">Select all that apply.</p>
            <div className="space-y-3">
              <OptionButton label="Retaining wall" sub="Up to 1m height (approx. 5 sleepers)" selected={data.projectTypes.includes('retaining-wall')} onClick={() => toggleProject('retaining-wall')} multi />
              <OptionButton label="Colorbond fence" selected={data.projectTypes.includes('colorbond')} onClick={() => toggleProject('colorbond')} multi />
              <OptionButton label="Timber fence" selected={data.projectTypes.includes('timber')} onClick={() => toggleProject('timber')} multi />
            </div>
          </div>
        )

      case 'fencing-length':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Approximate total fencing length</h2>
            <p className="text-gray-400 text-sm mb-6">Include all sections combined (side, rear, front etc.)</p>
            <div className="space-y-3">
              {['Under 15 m', '15-30 m', '30-60 m', '60-100 m', 'Over 100 m'].map((opt) => (
                <OptionButton key={opt} label={opt} selected={data.fencingLength === opt}
                  onClick={() => selectAndAdvance((d) => ({ ...d, fencingLength: opt }))} />
              ))}
            </div>
          </div>
        )

      case 'wall-length':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Approximate total retaining wall length</h2>
            <p className="text-gray-400 text-sm mb-6">Include all sections combined.</p>
            <div className="space-y-3">
              {['Under 5 m', '5-10 m', '10-20 m', '20-30 m', 'Over 30 m'].map((opt) => (
                <OptionButton key={opt} label={opt} selected={data.wallLength === opt}
                  onClick={() => selectAndAdvance((d) => ({ ...d, wallLength: opt }))} />
              ))}
            </div>
          </div>
        )

      case 'property-relation':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Who are you in relation to the property?</h2>
            <div className="space-y-3 mt-6">
              {[
                'I own and live at the property',
                'I own the property (investment)',
                'I manage the property',
                'I am the builder',
                'I am renting',
              ].map((opt) => (
                <OptionButton key={opt} label={opt} selected={data.propertyRelation === opt}
                  onClick={() => selectAndAdvance((d) => ({ ...d, propertyRelation: opt }))} />
              ))}
            </div>
          </div>
        )

      case 'shared-boundary':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">If this involves a shared boundary, where are things at with your neighbour?</h2>
            <div className="space-y-3 mt-6">
              {[
                { label: 'Already discussed and agreed', value: 'agreed' },
                { label: 'Planning to speak with them soon', value: 'planning' },
                { label: "Have not spoken yet", value: 'not-spoken' },
                { label: 'Not applicable; this is not a shared boundary', value: 'na' },
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} selected={data.sharedBoundary === opt.value}
                  onClick={() => selectAndAdvance((d) => ({ ...d, sharedBoundary: opt.value }))} />
              ))}
            </div>
          </div>
        )

      case 'project-stage':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">What stage is your project at?</h2>
            <div className="space-y-3 mt-6">
              {[
                { label: 'Ready to move forward', sub: 'Prepared to organise a site visit and proceed if everything aligns' },
                { label: 'Planning ahead', sub: 'Still exploring options, pricing, approvals, or timing' },
              ].map((opt) => (
                <OptionButton key={opt.label} label={opt.label} sub={opt.sub} selected={data.projectStage === opt.label}
                  onClick={() => selectAndAdvance((d) => ({ ...d, projectStage: opt.label, timeline: opt.label !== 'Ready to move forward' ? '' : d.timeline }))} />
              ))}
            </div>
          </div>
        )

      case 'timeline':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">When would you ideally like the project to start?</h2>
            <div className="space-y-3 mt-6">
              {[
                { label: 'Urgent / safety issue', sub: 'Fence / wall has become a safety risk and needs to be addressed promptly' },
                { label: 'Within 2\u20134 weeks' },
                { label: 'Within 1\u20132 months' },
                { label: 'Flexible' },
              ].map((opt) => (
                <OptionButton key={opt.label} label={opt.label} sub={'sub' in opt ? opt.sub : undefined} selected={data.timeline === opt.label}
                  onClick={() => selectAndAdvance((d) => ({ ...d, timeline: opt.label }))} />
              ))}
            </div>
          </div>
        )

      case 'priority':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">What matters most to you when choosing a contractor?</h2>
            <p className="text-gray-400 text-sm mb-6">Quality is a given. What else matters most?</p>
            <div className="space-y-3">
              {[
                { label: 'Reliability and clear communication', sub: 'I want to know exactly what is happening and when' },
                { label: 'Confidence in the final result', sub: 'I want the job done right with no issues' },
                { label: 'Best overall value', sub: 'I want great work at a fair price' },
                { label: 'Understanding typical costs', sub: 'I want to better understand pricing for projects like this' },
              ].map((opt) => (
                <OptionButton key={opt.label} label={opt.label} sub={opt.sub} selected={data.priority === opt.label}
                  onClick={() => selectAndAdvance((d) => ({ ...d, priority: opt.label }))} />
              ))}
            </div>
          </div>
        )

      case 'referral':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">How did you hear about us?</h2>
            <div className="space-y-3 mt-6">
              {[
                'Google search',
                'Social media',
                'Word of mouth / referral',
                'hipages',
                'Drove past a job site',
                'Other',
              ].map((opt) => (
                <OptionButton key={opt} label={opt} selected={data.referral === opt}
                  onClick={() => selectAndAdvance((d) => ({ ...d, referral: opt }))} />
              ))}
            </div>
          </div>
        )

      case 'details':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Anything else we should know?</h2>
            <p className="text-gray-400 text-sm mb-6">Optional. Any extra detail helps us prepare for your project.</p>
            <textarea
              className="w-full h-36 rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-pink transition-colors resize-none"
              placeholder="e.g. Old fence needs removing, access is through a side gate, dog needs to be secured during work..."
              value={data.details}
              onChange={(e) => setData((d) => ({ ...d, details: e.target.value }))}
            />
          </div>
        )

      case 'photos':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Got any photos?</h2>
            <p className="text-gray-400 text-sm mb-6">Optional. Photos, plans, or documents help us give you a more accurate quote. Up to 5 files, 15MB each.</p>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="w-full border-2 border-dashed border-gray-300 hover:border-brand-pink rounded-xl py-10 flex flex-col items-center gap-3 text-gray-400 hover:text-brand-pink transition-all"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium">Click to upload files</span>
              <span className="text-xs">JPG, PNG, HEIC, PDF, DOCX — max 5 files, 15MB each</span>
            </button>
            <input ref={fileRef} type="file" accept="image/*,.pdf,.docx" multiple className="hidden"
              onChange={(e) => {
                setFileError('')
                const newFiles = Array.from(e.target.files ?? [])
                const allowedExts = ['jpg', 'jpeg', 'png', 'webp', 'pdf', 'docx', 'heic', 'heif']
                const allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif', 'application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
                const maxSize = 15 * 1024 * 1024

                const rejected: string[] = []
                const tooLarge: string[] = []
                const accepted: File[] = []

                for (const file of newFiles) {
                  const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
                  if (!allowedExts.includes(ext) && !allowedMimes.includes(file.type)) {
                    rejected.push(file.name)
                  } else if (file.size > maxSize) {
                    tooLarge.push(file.name)
                  } else {
                    accepted.push(file)
                  }
                }

                const errors: string[] = []
                if (rejected.length > 0) errors.push(`${rejected.join(', ')} — only JPG, PNG, HEIC, PDF, and DOCX files are allowed`)
                if (tooLarge.length > 0) errors.push(`${tooLarge.join(', ')} — exceeds the 15MB limit`)

                if (errors.length > 0) {
                  setFileError(errors.join('. '))
                }

                if (accepted.length > 0) {
                  setData((d) => {
                    const combined = [...d.photos, ...accepted].slice(0, 5)
                    return { ...d, photos: combined }
                  })
                }

                if (fileRef.current) fileRef.current.value = ''
              }}
            />
            {fileError && (
              <div className="mt-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">{fileError}</div>
            )}
            {data.photos.length > 0 && (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {data.photos.map((f, i) => (
                  <div key={i} className="relative group bg-brand-cream rounded-lg overflow-hidden">
                    {f.type.startsWith('image/') ? (
                      <div className="w-full h-20 bg-gray-100">
                        <img
                          src={URL.createObjectURL(f)}
                          alt={f.name}
                          className="w-full h-20 object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-20 flex flex-col items-center justify-center bg-gray-50">
                        <svg className="w-6 h-6 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="px-2 py-1.5">
                      <p className="text-xs text-brand-dark truncate">{f.name}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setData((d) => ({ ...d, photos: d.photos.filter((_, idx) => idx !== i) }))}
                      className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )

      case 'price-check': {
        const range = getPriceRange(data)!
        return (
          <div>
            <p className="text-brand-pink text-xs font-semibold uppercase tracking-widest mb-4">Estimated investment</p>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Based on our experience, projects similar to yours typically fall between{' '}
              <span className="text-brand-pink">{range.low} and {range.high}</span>
            </h2>
            <p className="text-sm font-medium text-brand-dark mb-4 mt-8">
              Does this general investment range align with what you had in mind?
            </p>
            <div className="space-y-3">
              {[
                'Yes, this aligns with my expectations',
                'I may still be interested but would like to understand options',
                'This is higher than I was expecting',
              ].map((opt) => (
                <OptionButton key={opt} label={opt} selected={data.priceAlignment === opt}
                  onClick={() => selectAndAdvance((d) => ({ ...d, priceAlignment: opt }))} />
              ))}
            </div>
          </div>
        )
      }

      case 'contact': {
        const phoneErr = contactTouched.phone ? validatePhone(data.phone) : undefined
        const emailErr = contactTouched.email ? validateEmail(data.email) : undefined
        const nameErr = contactTouched.name && !data.name.trim() ? 'Please enter your name' : undefined
        const suburbErr = contactTouched.suburb && !data.suburbValid
          ? (data.suburb.trim() ? 'Please select a suburb from the suggestions' : 'Please enter your suburb')
          : undefined

        function touch(field: string) {
          setContactTouched((t) => ({ ...t, [field]: true }))
        }

        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Your contact details</h2>
            <p className="text-gray-400 text-sm mb-8">So we can get back to you with the right information.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">First name</label>
                <input
                  type="text"
                  autoComplete="name"
                  className={`w-full rounded-xl border-2 px-4 py-3 text-sm focus:outline-none transition-colors ${
                    nameErr ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-brand-pink'
                  }`}
                  placeholder="Your name"
                  value={data.name}
                  onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                  onBlur={() => touch('name')}
                />
                {nameErr && <p className="mt-1.5 text-xs text-red-500">{nameErr}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">Phone</label>
                <input
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  className={`w-full rounded-xl border-2 px-4 py-3 text-sm focus:outline-none transition-colors ${
                    phoneErr ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-brand-pink'
                  }`}
                  placeholder="04XX XXX XXX"
                  value={data.phone}
                  onChange={(e) => setData((d) => ({ ...d, phone: formatPhone(e.target.value) }))}
                  onBlur={() => touch('phone')}
                />
                {phoneErr && <p className="mt-1.5 text-xs text-red-500">{phoneErr}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">Email</label>
                <input
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  className={`w-full rounded-xl border-2 px-4 py-3 text-sm focus:outline-none transition-colors ${
                    emailErr ? 'border-red-400 focus:border-red-400' : 'border-gray-200 focus:border-brand-pink'
                  }`}
                  placeholder="you@example.com"
                  value={data.email}
                  onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                  onBlur={() => touch('email')}
                />
                {emailErr && <p className="mt-1.5 text-xs text-red-500">{emailErr}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">Suburb</label>
                <SuburbAutocomplete
                  value={data.suburb}
                  onChange={(val) => setData((d) => ({ ...d, suburb: val, suburbValid: false }))}
                  onSelect={(s) => setData((d) => ({ ...d, suburb: s.display, suburbValid: true }))}
                  error={suburbErr}
                  onBlur={() => touch('suburb')}
                />
              </div>
            </div>

            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">{error}</div>
            )}
          </div>
        )
      }

      default:
        return null
    }
  }

  const isLast = stepIndex === totalSteps - 1

  return (
    <div className="max-w-lg mx-auto">
      <ProgressBar current={stepIndex + 1} total={totalSteps} />
      <div className="min-h-[340px]">
        {renderStep()}
      </div>
      <div className="mt-8 flex gap-3 flex-col sm:flex-row">
        {stepIndex > 0 && (
          <button type="button" onClick={back}
            className="flex-1 py-4 rounded-full border-2 border-gray-200 text-brand-dark text-sm font-semibold hover:border-gray-300 transition-colors">
            Previous
          </button>
        )}
        {isLast ? (
          <button
            type="button"
            disabled={submitting}
            onClick={() => {
              setContactTouched({ name: true, phone: true, email: true, suburb: true })
              if (canAdvance()) submit()
            }}
            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Sending...' : 'Submit'}
          </button>
        ) : (
          // Only show Next button on non-auto-advance steps or multi-select step
          (!AUTO_ADVANCE_STEPS.has(currentStep) || currentStep === 'project-type') && (
            <button type="button" disabled={!canAdvance()} onClick={next}
              className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
              Next
            </button>
          )
        )}
      </div>
      <p className="mt-8 text-xs text-gray-400 leading-relaxed">
        By submitting this enquiry, you consent to Shield Fencing contacting you by phone, SMS, or email to respond to your request, provide quotes, arrange site visits, and follow up regarding your enquiry. Your information will only be used for communication relating to your enquiry and will not be sold or shared with third parties. You may request to stop communications at any time.
      </p>
    </div>
  )
}
