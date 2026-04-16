'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

/* ------------------------------------------------------------------ */
/*  Projection — real lat/lng → SVG.                                   */
/*  889 y-units ≈ cos(27.4°) × 1000 x-units → true shape.              */
/* ------------------------------------------------------------------ */

const VIEW_W = 800
const VIEW_H = 720

const x = (lng: number) => (lng - 152.6) * 1000
const y = (lat: number) => (-27.0 - lat) * 889

/* ------------------------------------------------------------------ */
/*  Coastline & river — drawn so every suburb sits on land             */
/* ------------------------------------------------------------------ */

const WATER_PATH = `
  M 800 0
  L 400 0
  C 405 30 412 60 420 90
  C 435 115 452 130 465 148
  C 478 160 490 165 505 172
  C 520 178 540 188 545 200
  C 552 215 545 228 530 236
  C 510 243 490 246 478 252
  C 478 268 485 285 492 298
  C 504 315 515 332 525 345
  C 540 350 552 345 562 348
  C 572 360 580 375 585 390
  C 605 400 640 412 660 420
  C 672 425 685 432 692 450
  C 700 455 710 465 712 480
  C 720 492 725 510 725 528
  C 730 545 725 562 715 575
  C 700 595 682 615 672 632
  C 650 650 630 668 615 685
  C 603 700 595 712 592 720
  L 800 720
  Z
`

const RIVER_PATH = `
  M 0 548
  C 55 548 115 552 170 555
  C 220 558 245 545 262 528
  C 278 518 292 532 302 548
  C 335 553 365 545 390 520
  C 405 505 412 488 415 470
  C 418 452 408 440 402 428
  C 398 415 396 402 405 396
  C 418 390 428 398 428 412
  C 428 425 422 432 418 425
  C 416 414 424 402 435 395
  C 445 388 454 388 456 398
  C 457 411 452 422 445 420
  C 442 414 448 402 460 395
  C 475 385 492 377 512 368
  C 536 356 552 346 560 340
`

/* ------------------------------------------------------------------ */
/*  Regions + suburbs (real lat/lng)                                   */
/*  famous — context anchor, dim. cbd — special pink styling.          */
/* ------------------------------------------------------------------ */

type Dir = 'R' | 'L' | 'T' | 'B'

interface Suburb {
  name: string
  lat: number
  lng: number
  dir?: Dir
  famous?: boolean
  cbd?: boolean
}

interface Region {
  name: string
  suburbs: Suburb[]
  labelLat: number
  labelLng: number
}

const REGIONS: Region[] = [
  {
    name: 'North Brisbane',
    labelLat: -27.20,
    labelLng: 152.91,
    suburbs: [
      { name: 'Caboolture', lat: -27.085, lng: 152.950, dir: 'L' },
      { name: 'North Lakes', lat: -27.225, lng: 153.020 },
      { name: 'Kallangur', lat: -27.253, lng: 152.984, dir: 'L' },
      { name: 'Strathpine', lat: -27.298, lng: 152.988, dir: 'L' },
      { name: 'Chermside', lat: -27.385, lng: 153.031 },
      { name: 'Sandgate', lat: -27.321, lng: 153.065, famous: true },
      { name: 'Aspley', lat: -27.365, lng: 153.014, dir: 'L', famous: true },
    ],
  },
  {
    name: 'Moreton Bay',
    labelLat: -27.07,
    labelLng: 153.04,
    suburbs: [
      { name: 'Morayfield', lat: -27.108, lng: 152.950, dir: 'L' },
      { name: 'Burpengary', lat: -27.150, lng: 152.962, dir: 'L' },
      { name: 'Deception Bay', lat: -27.198, lng: 153.027, dir: 'L' },
      { name: 'Redcliffe', lat: -27.232, lng: 153.095, dir: 'L' },
      { name: 'Griffin', lat: -27.258, lng: 153.005, dir: 'L' },
      { name: 'Scarborough', lat: -27.202, lng: 153.098, famous: true },
      { name: 'Beachmere', lat: -27.150, lng: 153.030, dir: 'L', famous: true },
    ],
  },
  {
    name: 'Brisbane CBD',
    labelLat: -27.468,
    labelLng: 153.025,
    suburbs: [
      { name: 'Brisbane CBD', lat: -27.468, lng: 153.025, cbd: true },
      { name: 'Spring Hill', lat: -27.461, lng: 153.025, dir: 'T', famous: true },
      { name: 'Fortitude Valley', lat: -27.457, lng: 153.036, dir: 'R', famous: true },
      { name: 'New Farm', lat: -27.467, lng: 153.048, dir: 'R', famous: true },
      { name: 'Kangaroo Point', lat: -27.480, lng: 153.036, dir: 'R', famous: true },
      { name: 'South Bank', lat: -27.478, lng: 153.020, dir: 'L', famous: true },
    ],
  },
  {
    name: 'Inner West',
    labelLat: -27.455,
    labelLng: 152.88,
    suburbs: [
      { name: 'Toowong', lat: -27.485, lng: 152.989, dir: 'T' },
      { name: 'Indooroopilly', lat: -27.503, lng: 152.973, dir: 'L' },
      { name: 'St Lucia', lat: -27.498, lng: 153.015, dir: 'B' },
      { name: 'Kenmore', lat: -27.510, lng: 152.940, dir: 'L' },
      { name: 'Chapel Hill', lat: -27.515, lng: 152.952, dir: 'B' },
      { name: 'Paddington', lat: -27.459, lng: 152.998, dir: 'T', famous: true },
      { name: 'Ashgrove', lat: -27.444, lng: 152.989, dir: 'L', famous: true },
    ],
  },
  {
    name: 'South East',
    labelLat: -27.505,
    labelLng: 153.15,
    suburbs: [
      { name: 'Carindale', lat: -27.503, lng: 153.102, dir: 'T' },
      { name: 'Mt Gravatt', lat: -27.540, lng: 153.075, dir: 'L' },
      { name: 'Mansfield', lat: -27.540, lng: 153.120 },
      { name: 'Rochedale', lat: -27.582, lng: 153.124, dir: 'R' },
      { name: 'Eight Mile Plains', lat: -27.588, lng: 153.088, dir: 'B' },
      { name: 'Bulimba', lat: -27.449, lng: 153.063, dir: 'R', famous: true },
      { name: 'Camp Hill', lat: -27.491, lng: 153.079, dir: 'T', famous: true },
    ],
  },
  {
    name: 'Redlands',
    labelLat: -27.50,
    labelLng: 153.22,
    suburbs: [
      { name: 'Capalaba', lat: -27.527, lng: 153.196, dir: 'T' },
      { name: 'Cleveland', lat: -27.527, lng: 153.250, dir: 'L' },
      { name: 'Thornlands', lat: -27.553, lng: 153.246, dir: 'L' },
      { name: 'Victoria Point', lat: -27.586, lng: 153.290, dir: 'L' },
      { name: 'Redland Bay', lat: -27.615, lng: 153.280, dir: 'L' },
      { name: 'Wellington Point', lat: -27.477, lng: 153.220, dir: 'T', famous: true },
      { name: 'Ormiston', lat: -27.509, lng: 153.245, dir: 'L', famous: true },
    ],
  },
  {
    name: 'South Brisbane',
    labelLat: -27.57,
    labelLng: 152.94,
    suburbs: [
      { name: 'Moorooka', lat: -27.535, lng: 153.028, dir: 'T' },
      { name: 'Rocklea', lat: -27.548, lng: 153.006, dir: 'L' },
      { name: 'Salisbury', lat: -27.565, lng: 153.040 },
      { name: 'Sunnybank', lat: -27.580, lng: 153.061 },
      { name: 'Acacia Ridge', lat: -27.590, lng: 153.022, dir: 'L' },
      { name: 'West End', lat: -27.481, lng: 153.005, dir: 'L', famous: true },
      { name: 'Greenslopes', lat: -27.509, lng: 153.050, dir: 'R', famous: true },
    ],
  },
  {
    name: 'Ipswich',
    labelLat: -27.55,
    labelLng: 152.81,
    suburbs: [
      { name: 'Brassall', lat: -27.598, lng: 152.748, dir: 'L' },
      { name: 'Ipswich CBD', lat: -27.617, lng: 152.762, dir: 'L' },
      { name: 'Redbank', lat: -27.607, lng: 152.877 },
      { name: 'Goodna', lat: -27.622, lng: 152.898, dir: 'B' },
      { name: 'Springfield', lat: -27.671, lng: 152.917, dir: 'B' },
      { name: 'Booval', lat: -27.608, lng: 152.796, dir: 'T', famous: true },
      { name: 'Bundamba', lat: -27.603, lng: 152.808, dir: 'T', famous: true },
    ],
  },
  {
    name: 'Logan',
    labelLat: -27.675,
    labelLng: 153.075,
    suburbs: [
      { name: 'Springwood', lat: -27.611, lng: 153.136, dir: 'T' },
      { name: 'Logan Central', lat: -27.642, lng: 153.108, dir: 'L' },
      { name: 'Shailer Park', lat: -27.676, lng: 153.188 },
      { name: 'Loganholme', lat: -27.698, lng: 153.193, dir: 'R' },
      { name: 'Beenleigh', lat: -27.720, lng: 153.205, dir: 'L' },
      { name: 'Woodridge', lat: -27.622, lng: 153.111, dir: 'L', famous: true },
      { name: 'Daisy Hill', lat: -27.641, lng: 153.165, dir: 'T', famous: true },
    ],
  },
]

function labelPos(s: Suburb) {
  const px = x(s.lng)
  const py = y(s.lat)
  switch (s.dir) {
    case 'L':
      return { x: px - 6, y: py + 3, anchor: 'end' as const }
    case 'T':
      return { x: px, y: py - 8, anchor: 'middle' as const }
    case 'B':
      return { x: px, y: py + 14, anchor: 'middle' as const }
    default:
      return { x: px + 6, y: py + 3, anchor: 'start' as const }
  }
}

/* ------------------------------------------------------------------ */
/*  ViewBox helpers                                                    */
/* ------------------------------------------------------------------ */

interface VB {
  x: number
  y: number
  w: number
  h: number
}

const FULL: VB = { x: 0, y: 0, w: VIEW_W, h: VIEW_H }

function regionVB(r: Region): VB {
  const xs = r.suburbs.map((s) => x(s.lng))
  const ys = r.suburbs.map((s) => y(s.lat))
  const pad = r.name === 'Brisbane CBD' ? 60 : 90
  const minSize = r.name === 'Brisbane CBD' ? 180 : 260
  let w = Math.max(Math.max(...xs) - Math.min(...xs) + pad * 2, minSize)
  let h = Math.max(Math.max(...ys) - Math.min(...ys) + pad * 2, minSize)
  const ratio = VIEW_W / VIEW_H
  if (w / h > ratio) h = w / ratio
  else w = h * ratio
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2
  const cy = (Math.min(...ys) + Math.max(...ys)) / 2
  return { x: cx - w / 2, y: cy - h / 2, w, h }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function BrisbaneServiceMap() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [vb, setVb] = useState<VB>(FULL)
  const cur = useRef<VB>(FULL)
  const raf = useRef(0)

  const animateTo = useCallback((target: VB) => {
    const start = { ...cur.current }
    const t0 = performance.now()
    const dur = 650

    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur)
      const e = 1 - Math.pow(1 - p, 3)
      const next: VB = {
        x: start.x + (target.x - start.x) * e,
        y: start.y + (target.y - start.y) * e,
        w: start.w + (target.w - start.w) * e,
        h: start.h + (target.h - start.h) * e,
      }
      cur.current = next
      setVb(next)
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }

    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(tick)
  }, [])

  const zoomIn = useCallback(
    (name: string) => {
      const r = REGIONS.find((r) => r.name === name)
      if (!r) return
      setActiveId(name)
      animateTo(regionVB(r))
    },
    [animateTo],
  )

  const zoomOut = useCallback(() => {
    setActiveId(null)
    animateTo(FULL)
  }, [animateTo])

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Escape') zoomOut()
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [zoomOut])

  const vbStr = `${vb.x.toFixed(1)} ${vb.y.toFixed(1)} ${vb.w.toFixed(1)} ${vb.h.toFixed(1)}`

  return (
    <div>
      {/* Region header — slides in when zoomed */}
      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: activeId ? 52 : 0, opacity: activeId ? 1 : 0 }}
      >
        <div className="flex items-center justify-between pb-4">
          <p className="text-white text-xl font-bold tracking-tight">{activeId}</p>
          <button
            onClick={zoomOut}
            className="text-white/40 hover:text-white text-xs font-medium transition-colors"
          >
            ← Back
          </button>
        </div>
      </div>

      <svg
        viewBox={vbStr}
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => { if (activeId) zoomOut() }}
        style={{
          WebkitMaskImage:
            'radial-gradient(ellipse 78% 82% at 50% 50%, black 55%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 78% 82% at 50% 50%, black 55%, transparent 100%)',
          cursor: activeId ? 'zoom-out' : 'default',
        }}
      >
        {/* Land */}
        <rect x={0} y={0} width={VIEW_W} height={VIEW_H} fill="rgba(244, 239, 232, 0.028)" />

        {/* Moreton Bay */}
        <path d={WATER_PATH} fill="rgba(82, 134, 180, 0.22)" />

        {/* Brisbane River */}
        <path
          d={RIVER_PATH}
          stroke="rgba(130, 175, 215, 0.75)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Region labels — skip Brisbane CBD (pink dot is its marker) */}
        {REGIONS.filter((r) => r.name !== 'Brisbane CBD').map((r) => (
          <text
            key={`lbl-${r.name}`}
            x={x(r.labelLng)}
            y={y(r.labelLat)}
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="800"
            letterSpacing="-0.2"
            className="cursor-pointer select-none"
            style={{
              opacity: activeId ? 0 : 1,
              transition: `opacity 0.3s ${activeId ? '0s' : '0.35s'}`,
            }}
            onClick={(e) => {
              if (activeId) return
              e.stopPropagation()
              zoomIn(r.name)
            }}
          >
            {r.name}
          </text>
        ))}

        {/* Suburbs */}
        {REGIONS.map((r) => {
          const isActive = activeId === r.name
          const isInactive = activeId !== null && !isActive

          return (
            <g key={r.name}>
              {r.suburbs.map((s) => {
                const px = x(s.lng)
                const py = y(s.lat)
                const lp = labelPos(s)
                const famous = !!s.famous
                const cbd = !!s.cbd
                return (
                  <g
                    key={s.name}
                    className="cursor-pointer"
                    style={{
                      opacity: isInactive ? 0.12 : 1,
                      transition: 'opacity 0.5s',
                    }}
                    onClick={(e) => {
                      if (activeId) return
                      e.stopPropagation()
                      zoomIn(r.name)
                    }}
                  >
                    {cbd && (
                      <circle cx={px} cy={py} r={12} fill="#db0695" fillOpacity={0.18} />
                    )}
                    <circle
                      cx={px}
                      cy={py}
                      r={cbd ? 5 : famous ? 1.8 : 2.5}
                      fill={cbd ? '#db0695' : famous ? 'rgba(255,255,255,0.45)' : 'white'}
                    />
                    {isActive && !cbd && (
                      <text
                        x={lp.x}
                        y={lp.y}
                        textAnchor={lp.anchor}
                        fill={famous ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.8)'}
                        fontSize={10}
                        fontWeight="500"
                        fontStyle={famous ? 'italic' : 'normal'}
                      >
                        {s.name}
                      </text>
                    )}
                  </g>
                )
              })}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
