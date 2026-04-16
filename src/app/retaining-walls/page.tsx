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
      title={<>Solid walls.<br /><span className="text-brand-pink">Built to hold.</span></>}
      subtitle="Timber and concrete retaining walls up to 1m across Greater Brisbane. QBCC licensed and built to last, because what is behind the wall matters as much as what is in front."
      intro="Brisbane's hilly terrain means retaining walls are a necessity for thousands of properties. Whether you are managing a level change between yards, preventing erosion, creating a usable outdoor space, or building a fence-on-wall, Shield Fencing builds retaining walls that are structurally sound and look the part. We are backed by a Chartered Civil Engineer (CPEng), bringing a disciplined, detail-focused approach to every project."
      features={[
        {
          title: 'Chartered Civil Engineer (CPEng)',
          desc: 'Our leadership is CPEng-qualified, bringing a disciplined, detail-focused approach to every retaining wall project.',
        },
        {
          title: 'Up to 1m Height',
          desc: 'We specialise in retaining walls up to 1m in height (approximately 5 sleepers). Walls above this height require engineering design and are not within our scope.',
        },
        {
          title: 'Drainage Included',
          desc: 'Proper drainage behind the wall is critical. We install ag pipe and backfill correctly to prevent pressure buildup and premature failure.',
        },
        {
          title: 'Multiple Material Options',
          desc: 'Treated pine sleepers, hardwood timber, or concrete, each with different aesthetics, lifespans, and price points. We will help you choose.',
        },
        {
          title: 'Fence on Wall Ready',
          desc: 'Need a fence on top? We design and build combined retaining wall and fencing solutions so everything integrates cleanly.',
        },
        {
          title: 'QBCC Licensed',
          desc: 'All retaining wall work compliant with Queensland building codes. License No 15574983. Fully insured to $10 million.',
        },
      ]}
      variants={[
        {
          name: 'Concrete Sleepers',
          desc: 'The strongest and most durable option. Concrete sleepers will not rot or deteriorate, require minimal maintenance, and can carry a fence on top.',
          best: 'Maximum longevity, fence-on-wall, low maintenance',
        },
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
      ]}
      faqs={[
        {
          q: 'Do I need council approval for a retaining wall in Brisbane?',
          a: 'Retaining walls under 1m in height typically do not require approval. Requirements can vary depending on overlays such as flood, landslide, or heritage. We can advise based on your property.',
        },
        {
          q: 'What is the 1m height limit about?',
          a: 'We specialise in retaining walls up to 1m in height (approximately 5 sleepers). Walls above this height require engineering design and are not within our scope.',
        },
        {
          q: 'How much does a retaining wall cost?',
          a: 'Pricing depends on wall length, height, material, ground conditions, and access. We provide tailored pricing once your project has been assessed.',
        },
        {
          q: 'What types of retaining walls do you build?',
          a: 'We construct concrete sleeper walls, treated pine sleeper walls, and hardwood timber walls. Concrete sleepers are often preferred for their durability and low maintenance.',
        },
        {
          q: 'Do you do repairs or partial retaining wall work?',
          a: 'No. We focus on full retaining wall installations. We do not take on repairs or isolated sections.',
        },
        {
          q: 'Can you reuse existing posts or materials?',
          a: 'No. We install new materials to ensure structural integrity, consistency, and long-term performance.',
        },
        {
          q: 'Can you install a fence on top of an existing retaining wall?',
          a: 'We assess each project as a whole. In most cases, the retaining wall and fence need to be designed and installed together to ensure stability and long-term performance.',
        },
        {
          q: 'Can you move the retaining wall to gain more land?',
          a: 'Retaining wall placement must align with property boundaries and site constraints. We build along the agreed boundary and cannot reposition structures beyond this.',
        },
        {
          q: 'Can I keep trees or roots in place?',
          a: 'Retaining wall construction requires excavation along the wall line. Roots and obstructions may need to be removed to allow proper installation. We can assist with minor roots and small stumps where required.',
        },
        {
          q: 'What should I expect during installation?',
          a: 'Retaining wall construction involves excavation and ground works. Site conditions such as soil type, rocks, roots, or buried services can impact the installation process. Final scope may vary depending on conditions encountered during works.',
        },
        {
          q: 'Do you need access to the site?',
          a: 'Yes. Clear access is required for machinery, materials, and installation. Limited access may affect feasibility or require adjustments.',
        },
        {
          q: 'Who is responsible for underground services?',
          a: 'Clients should identify known underground services prior to works. We take a proactive approach on site, however unknown services can impact the installation process.',
        },
        {
          q: 'Will the wall be perfectly level all the way through?',
          a: 'Retaining walls are set out based on site conditions and design requirements. In many cases, stepped sections are required rather than a continuous level wall.',
        },
        {
          q: 'Do you handle drainage as part of the retaining wall?',
          a: 'We recommend appropriate drainage to support the performance and longevity of the wall. Requirements vary depending on the site and project.',
        },
        {
          q: 'How long does a retaining wall last?',
          a: 'Lifespan depends on materials and site conditions. Concrete sleeper walls can last 50+ years, hardwood timber walls 25 to 30 years, and treated pine walls 15 to 20 years. Proper installation and drainage play a key role in long-term performance.',
        },
      ]}
      relatedPosts={[
        { title: 'How Much Does a Retaining Wall Cost in Brisbane?', slug: 'how-much-does-a-retaining-wall-cost-brisbane' },
        { title: 'Timber vs Concrete Retaining Walls: Which Should You Choose?', slug: 'timber-vs-concrete-retaining-walls-brisbane' },
      ]}
    />
  )
}
