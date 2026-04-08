'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectType = 'retaining-wall' | 'colorbond' | 'timber'

interface FormData {
  // Step 1
  projectTypes: ProjectType[]
  // Step 2a – fencing
  fencingLength: string
  // Step 2b – retaining wall
  wallLength: string
  // Step 3
  propertyRelation: string
  // Step 4
  sharedBoundary: string
  // Step 5
  timeline: string
  // Step 6
  priority: string
  // Step 7
  details: string
  // Step 8 – photos
  photos: File[]
  // Step 9 – contact
  name: string
  email: string
  phone: string
  suburb: string
}

const INITIAL: FormData = {
  projectTypes: [],
  fencingLength: '',
  wallLength: '',
  propertyRelation: '',
  sharedBoundary: '',
  timeline: '',
  priority: '',
  details: '',
  photos: [],
  name: '',
  email: '',
  phone: '',
  suburb: '',
}

// ─── Step helpers ─────────────────────────────────────────────────────────────

function getSteps(data: FormData) {
  const hasFencing = data.projectTypes.some((t) => t !== 'retaining-wall')
  const hasWall = data.projectTypes.includes('retaining-wall')

  const steps: string[] = ['project-type']
  if (hasFencing) steps.push('fencing-length')
  if (hasWall) steps.push('wall-length')
  steps.push('property-relation', 'shared-boundary', 'timeline', 'priority', 'details', 'photos', 'contact')
  return steps
}

// ─── Progress bar ─────────────────────────────────────────────────────────────

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100)
  return (
    <div className="mb-8">
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
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

// ─── Option button ────────────────────────────────────────────────────────────

function OptionButton({
  label,
  selected,
  onClick,
  multi,
  sub,
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
      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3 ${
        selected
          ? 'border-brand-pink bg-brand-pink/5 text-brand-dark'
          : 'border-gray-200 bg-white hover:border-gray-300 text-brand-dark'
      }`}
    >
      <span
        className={`w-5 h-5 rounded-${multi ? 'md' : 'full'} border-2 flex-shrink-0 flex items-center justify-center transition-all ${
          selected ? 'border-brand-pink bg-brand-pink' : 'border-gray-300'
        }`}
      >
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

// ─── Main Form ────────────────────────────────────────────────────────────────

export default function QuoteForm() {
  const router = useRouter()
  const [data, setData] = useState<FormData>(INITIAL)
  const [stepIndex, setStepIndex] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const steps = getSteps(data)
  const currentStep = steps[stepIndex]
  const totalSteps = steps.length

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
      case 'timeline': return !!data.timeline
      case 'priority': return !!data.priority
      case 'details': return true  // optional
      case 'photos': return true   // optional
      case 'contact':
        return !!data.name.trim() && !!data.phone.trim() && !!data.email.trim()
      default: return false
    }
  }

  function next() {
    if (!canAdvance()) return
    if (stepIndex < totalSteps - 1) {
      setStepIndex((i) => i + 1)
    }
  }

  function back() {
    if (stepIndex > 0) setStepIndex((i) => i - 1)
  }

  async function submit() {
    setSubmitting(true)
    setError('')
    try {
      const body = {
        projectTypes: data.projectTypes,
        fencingLength: data.fencingLength,
        wallLength: data.wallLength,
        propertyRelation: data.propertyRelation,
        sharedBoundary: data.sharedBoundary,
        timeline: data.timeline,
        priority: data.priority,
        details: data.details,
        name: data.name,
        email: data.email,
        phone: data.phone,
        suburb: data.suburb,
      }

      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!res.ok) throw new Error('Submission failed')
      router.push('/thank-you')
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
      setSubmitting(false)
    }
  }

  // ─── Step renders ──────────────────────────────────────────────────────────

  function renderStep() {
    switch (currentStep) {
      case 'project-type':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              What type of project are you planning?
            </h2>
            <p className="text-gray-400 text-sm mb-6">Select all that apply.</p>
            <div className="space-y-3">
              <OptionButton
                label="Retaining wall"
                sub="Up to 1m height (approx. 5 sleepers)"
                selected={data.projectTypes.includes('retaining-wall')}
                onClick={() => toggleProject('retaining-wall')}
                multi
              />
              <OptionButton
                label="Colorbond® fence"
                selected={data.projectTypes.includes('colorbond')}
                onClick={() => toggleProject('colorbond')}
                multi
              />
              <OptionButton
                label="Timber fence"
                selected={data.projectTypes.includes('timber')}
                onClick={() => toggleProject('timber')}
                multi
              />
            </div>
          </div>
        )

      case 'fencing-length':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Approximate total fencing length
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Include all sections combined (side, rear, front etc.)
            </p>
            <div className="space-y-3">
              {['Under 15 m', '15–30 m', '30–60 m', '60–100 m', 'Over 100 m'].map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={data.fencingLength === opt}
                  onClick={() => setData((d) => ({ ...d, fencingLength: opt }))}
                />
              ))}
            </div>
          </div>
        )

      case 'wall-length':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Approximate total retaining wall length
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Include all sections combined.
            </p>
            <div className="space-y-3">
              {['Under 5 m', '5–10 m', '10–20 m', '20–30 m', 'Over 30 m'].map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={data.wallLength === opt}
                  onClick={() => setData((d) => ({ ...d, wallLength: opt }))}
                />
              ))}
            </div>
          </div>
        )

      case 'property-relation':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Who are you in relation to the property?
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              This helps us plan the next steps appropriately.
            </p>
            <div className="space-y-3">
              {[
                'I own and live at the property',
                'I own the property (investment)',
                'I manage the property',
                "I'm a builder / developer",
                "I'm renting",
              ].map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={data.propertyRelation === opt}
                  onClick={() => setData((d) => ({ ...d, propertyRelation: opt }))}
                />
              ))}
            </div>
          </div>
        )

      case 'shared-boundary':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Is any part of this project along a shared boundary with a neighbour?
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              This helps us understand access and coordination required.
            </p>
            <div className="space-y-3">
              {[
                { label: 'No — fully within my property', value: 'no' },
                { label: 'Yes — shared boundary', value: 'yes' },
                { label: 'Not sure', value: 'unsure' },
              ].map((opt) => (
                <OptionButton
                  key={opt.value}
                  label={opt.label}
                  selected={data.sharedBoundary === opt.value}
                  onClick={() => setData((d) => ({ ...d, sharedBoundary: opt.value }))}
                />
              ))}
            </div>
          </div>
        )

      case 'timeline':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              When are you hoping to start?
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              We&apos;ll use this to check availability and prioritise your quote.
            </p>
            <div className="space-y-3">
              {['ASAP', '2–4 weeks', '4–8 weeks', '2–3 months', 'No specific timeframe'].map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={data.timeline === opt}
                  onClick={() => setData((d) => ({ ...d, timeline: opt }))}
                />
              ))}
            </div>
          </div>
        )

      case 'priority':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              What matters most to you when choosing a contractor?
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              This helps us tailor how we follow up with you.
            </p>
            <div className="space-y-3">
              {[
                {
                  label: 'Reliability and clear communication',
                  sub: 'I want to know exactly what\'s happening and when',
                },
                {
                  label: 'Confidence in quality',
                  sub: 'I want the job done right with no issues',
                },
                {
                  label: 'Best overall value',
                  sub: 'I want quality work at a fair price',
                },
                {
                  label: 'Understanding typical costs',
                  sub: 'I\'m still in the research phase',
                },
              ].map((opt) => (
                <OptionButton
                  key={opt.label}
                  label={opt.label}
                  sub={opt.sub}
                  selected={data.priority === opt.label}
                  onClick={() => setData((d) => ({ ...d, priority: opt.label }))}
                />
              ))}
            </div>
          </div>
        )

      case 'details':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Anything else we should know?
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Optional — mention access issues, colour preferences, existing fencing, or any other details.
            </p>
            <textarea
              className="w-full h-36 rounded-xl border-2 border-gray-200 px-4 py-3 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-pink transition-colors resize-none"
              placeholder="e.g. Need to remove old timber fence, prefer Colorbond® Monument colour, narrow side gate access..."
              value={data.details}
              onChange={(e) => setData((d) => ({ ...d, details: e.target.value }))}
            />
          </div>
        )

      case 'photos':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Got any site photos? (optional)
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Photos help us understand the site and give you a more accurate quote. Up to 5 images.
            </p>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="w-full border-2 border-dashed border-gray-300 hover:border-brand-pink rounded-xl py-10 flex flex-col items-center gap-3 text-gray-400 hover:text-brand-pink transition-all"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium">Click to upload photos</span>
              <span className="text-xs">JPG, PNG or HEIC — max 5 photos, 10MB each</span>
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => {
                const files = Array.from(e.target.files ?? []).slice(0, 5)
                setData((d) => ({ ...d, photos: files }))
              }}
            />
            {data.photos.length > 0 && (
              <div className="mt-4 space-y-2">
                {data.photos.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 bg-brand-light rounded-lg px-4 py-2 text-sm text-brand-dark">
                    <svg className="w-4 h-4 text-brand-pink flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                    </svg>
                    <span className="truncate">{f.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )

      case 'contact':
        return (
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">
              Last step — your contact details
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              We&apos;ll be in touch quickly with your quote.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">
                  Full name <span className="text-brand-pink">*</span>
                </label>
                <input
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-pink transition-colors"
                  placeholder="Your name"
                  value={data.name}
                  onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">
                  Phone number <span className="text-brand-pink">*</span>
                </label>
                <input
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-pink transition-colors"
                  placeholder="0400 000 000"
                  value={data.phone}
                  onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">
                  Email address <span className="text-brand-pink">*</span>
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-pink transition-colors"
                  placeholder="you@example.com"
                  value={data.email}
                  onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-dark mb-1.5">
                  Suburb / Postcode
                </label>
                <input
                  type="text"
                  autoComplete="address-level2"
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-pink transition-colors"
                  placeholder="e.g. Rochedale, 4123"
                  value={data.suburb}
                  onChange={(e) => setData((d) => ({ ...d, suburb: e.target.value }))}
                />
              </div>
            </div>

            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <p className="mt-6 text-xs text-gray-400 leading-relaxed">
              By submitting, you consent to Shield Fencing contacting you by phone, SMS, or email
              to respond to your enquiry. Your information will only be used to respond to your
              request and will not be sold or shared with third parties.
            </p>
          </div>
        )

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

      <div className="mt-8 flex gap-3">
        {stepIndex > 0 && (
          <button
            type="button"
            onClick={back}
            className="flex-1 py-4 rounded-full border-2 border-gray-200 text-brand-dark text-sm font-semibold hover:border-gray-300 transition-colors"
          >
            Previous
          </button>
        )}

        {isLast ? (
          <button
            type="button"
            disabled={!canAdvance() || submitting}
            onClick={submit}
            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Sending...' : 'Submit Enquiry →'}
          </button>
        ) : (
          <button
            type="button"
            disabled={!canAdvance()}
            onClick={next}
            className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}
