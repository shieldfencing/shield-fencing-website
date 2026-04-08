import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Timber Fencing Brisbane | Hardwood & Treated Pine | Shield Fencing',
  description:
    'Timber fencing specialists across Greater Brisbane. Hardwood and treated pine options for privacy, character, and natural beauty. QBCC Licensed. Free quotes.',
  alternates: { canonical: 'https://shieldfencing.com.au/timber' },
}

export default function TimberPage() {
  return (
    <ServicePageLayout
      heroTagline="Timber Fencing"
      title="Natural beauty. Lasting character."
      subtitle="Hardwood and treated pine timber fencing for Brisbane homes. When you want privacy, warmth, and a fence that ages beautifully — timber is the answer."
      intro="There's something a Colorbond® fence just can't replicate — the warmth and character of real timber. Whether it's a classic paling fence, a privacy screen, or a feature garden fence, timber brings a natural look that suits Queensland homes and gardens perfectly. We work with treated pine for budget-conscious jobs and hardwood for premium longevity. Every post is sunk properly, every rail is level, and every paling is fixed straight."
      features={[
        {
          title: 'Hardwood & Treated Pine',
          desc: 'We work with both species depending on your budget and requirements. Hardwood for maximum longevity; treated pine as a cost-effective alternative.',
        },
        {
          title: 'Classic Queensland Style',
          desc: 'Timber fencing suits the character of most Brisbane homes — especially older Queenslanders and those with established gardens.',
        },
        {
          title: 'Private & Secure',
          desc: 'Full-height paling fences offer excellent privacy and a solid boundary. Ideal for families with kids or pets.',
        },
        {
          title: 'Customisable',
          desc: 'Picket styles, paling gaps, heights, and finishes can all be adjusted to suit your home\'s style and your preferences.',
        },
        {
          title: 'Properly Set Posts',
          desc: 'Posts concreted deep into the ground for structural integrity. No leaning, no movement — built to stay straight for years.',
        },
        {
          title: 'QBCC Licensed',
          desc: 'All work compliant with Queensland building codes. Lic. No. 15574983. Fully insured to $10 million.',
        },
      ]}
      variants={[
        {
          name: 'Treated Pine',
          desc: 'H4-treated softwood that resists rot, termites, and moisture. A cost-effective option that still looks great and lasts well.',
          best: 'Budget-conscious projects, garden fences, low-height fencing',
        },
        {
          name: 'Hardwood Timber',
          desc: 'Dense native hardwood — significantly stronger and more durable than pine. Stands up to Brisbane weather for decades.',
          best: 'Long-term investment, taller fences, premium properties',
        },
        {
          name: 'Merbau / Feature Timber',
          desc: 'Rich reddish-brown tropical hardwood often used for contemporary screen fencing, deck balustrades, and architectural privacy screens.',
          best: 'Front fences, feature screening, pool surrounds',
        },
      ]}
      faqs={[
        {
          q: 'How long does timber fencing last in Brisbane?',
          a: 'Treated pine fencing typically lasts 10–15 years with good maintenance. Hardwood timber fencing can last 20–30 years or more. Regular oiling or painting extends the life significantly.',
        },
        {
          q: 'Does timber fencing need maintenance?',
          a: 'Yes. Timber should be painted, stained, or oiled every few years to protect it from UV and moisture. It\'s more maintenance than Colorbond® but many homeowners prefer the look and feel.',
        },
        {
          q: 'Is timber fencing cheaper than Colorbond®?',
          a: 'Treated pine is generally comparable or slightly cheaper than Colorbond® per metre. Hardwood is more expensive. However, over 20 years, Colorbond® often works out cheaper due to lower maintenance costs.',
        },
        {
          q: 'Can you match the height and style of my existing timber fence?',
          a: 'In most cases yes. We\'ll match paling style, height, and material as closely as possible when replacing or extending an existing fence.',
        },
        {
          q: 'Can timber fencing be painted or stained?',
          a: 'Absolutely. Treated pine takes paint and stain very well. Hardwood is often left natural or with a clear/tinted oil. We can advise on the best finish for your situation.',
        },
      ]}
      relatedPosts={[
        { title: 'Colorbond vs Timber Fencing: Which is Better for Brisbane?', slug: 'colorbond-vs-timber-fencing-brisbane' },
        { title: 'How Much Does a New Fence Cost in Brisbane?', slug: 'how-much-does-a-fence-cost-brisbane' },
      ]}
    />
  )
}
