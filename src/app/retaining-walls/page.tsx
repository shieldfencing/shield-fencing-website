import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Retaining Walls Brisbane | Timber & Concrete | Shield Fencing',
  description:
    'Retaining wall specialists across Greater Brisbane. Treated pine, hardwood, and concrete walls up to 1m. Civil engineering backed. QBCC Licensed. Free quotes.',
  alternates: { canonical: 'https://shieldfencing.com.au/retaining-walls' },
}

export default function RetainingWallsPage() {
  return (
    <ServicePageLayout
      heroTagline="Retaining Walls"
      title="Solid walls. Built to hold."
      subtitle="Timber and concrete retaining walls up to 1m across Greater Brisbane. Civil engineering backed, QBCC licensed, and built to last — because what's behind the wall matters as much as what's in front."
      intro="Brisbane's hilly terrain means retaining walls are a necessity for thousands of properties. Whether you're managing a level change between yards, preventing erosion, creating a usable outdoor space, or building a fence-on-wall, Shield Fencing builds retaining walls that are structurally sound and look the part. We're backed by civil engineering expertise through Engineers Australia NER — which means every wall is designed with the loads and soil conditions in mind, not just eyeballed."
      features={[
        {
          title: 'Civil Engineering Backed',
          desc: 'Listed on the National Engineering Register (Engineers Australia). Every wall designed with structural integrity — not just aesthetics.',
        },
        {
          title: 'Up to 1m Height',
          desc: 'We specialise in walls up to 1m (approximately 5 sleepers). The most common height needed in residential Brisbane properties.',
        },
        {
          title: 'Drainage Included',
          desc: 'Proper drainage behind the wall is critical. We install ag pipe and backfill correctly to prevent pressure buildup and premature failure.',
        },
        {
          title: 'Multiple Material Options',
          desc: 'Treated pine sleepers, hardwood timber, or concrete — each with different aesthetics, lifespans, and price points. We\'ll help you choose.',
        },
        {
          title: 'Fence on Wall Ready',
          desc: 'Need a fence on top? We design and build combined retaining wall and fencing solutions so everything integrates cleanly.',
        },
        {
          title: 'QBCC Licensed',
          desc: 'All retaining wall work compliant with Queensland building codes. Lic. No. 15574983. Fully insured to $10 million.',
        },
      ]}
      variants={[
        {
          name: 'Treated Pine Sleepers',
          desc: 'H4 or H5 treated pine sleepers stacked horizontally. A cost-effective option that suits most residential applications up to 1m.',
          best: 'Garden edges, modest level changes, budget-friendly projects',
        },
        {
          name: 'Hardwood Timber',
          desc: 'Dense hardwood sleepers provide greater strength and longevity than pine. Better suited to taller walls and areas with heavy soil pressure.',
          best: 'Taller walls, higher pressure loads, premium finish',
        },
        {
          name: 'Concrete Sleepers',
          desc: 'The strongest and most durable option. Concrete sleepers won\'t rot or deteriorate, require minimal maintenance, and can carry a fence on top.',
          best: 'Maximum longevity, fence-on-wall, low maintenance',
        },
      ]}
      faqs={[
        {
          q: 'Do I need council approval for a retaining wall in Brisbane?',
          a: 'In Brisbane, retaining walls under 1m typically don\'t require council approval. However, walls in specific overlays (flood, landslide, heritage) may have different requirements. We can advise based on your property address.',
        },
        {
          q: 'How much does a retaining wall cost in Brisbane?',
          a: 'Costs vary significantly based on length, height, material, and site conditions. Treated pine walls start from around $250–$400/m. Concrete sleeper walls are higher. Contact us for a free, accurate quote.',
        },
        {
          q: 'Can you build a fence on top of the retaining wall?',
          a: 'Yes — this is one of our most common requests. We design retaining walls with the fence in mind, installing posts correctly so the fence is stable and the wall isn\'t compromised.',
        },
        {
          q: 'How long does a retaining wall last?',
          a: 'Treated pine sleeper walls typically last 15–20 years. Hardwood walls can last 25–30 years. Concrete sleeper walls can last 50+ years with virtually no maintenance.',
        },
        {
          q: 'What is the 1m height limit about?',
          a: 'At Shield Fencing we specialise in walls up to 1m (approximately 5 sleepers) high. Walls above this threshold require an engineer\'s design and typically council approval — we\'ll let you know upfront if your project falls into this category.',
        },
      ]}
      relatedPosts={[
        { title: 'How Much Does a Retaining Wall Cost in Brisbane?', slug: 'how-much-does-a-retaining-wall-cost-brisbane' },
        { title: 'Timber vs Concrete Retaining Walls: Which Should You Choose?', slug: 'timber-vs-concrete-retaining-walls-brisbane' },
      ]}
    />
  )
}
