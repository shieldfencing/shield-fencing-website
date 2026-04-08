import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'

export const metadata: Metadata = {
  title: 'Colorbond® Steel Fencing Brisbane | Shield Fencing',
  description:
    'Expert Colorbond® steel fencing installation across Greater Brisbane. Durable, low-maintenance, available in 22 colours. QBCC Licensed. Free quotes.',
  alternates: { canonical: 'https://shieldfencing.com.au/colorbond' },
}

export default function ColorbondPage() {
  return (
    <ServicePageLayout
      heroTagline="Colorbond® Steel Fencing"
      title="Australia's most popular fence. Done properly."
      subtitle="Durable, low-maintenance Colorbond® steel fencing installed by QBCC-licensed specialists across Greater Brisbane. Available in 22 Colorbond® colours to match your home."
      intro="Colorbond® steel fencing is the go-to choice for Brisbane homeowners — and for good reason. It's tough, it looks great, it doesn't rot or warp, and it handles Queensland's harsh climate without a second thought. At Shield Fencing, we install Colorbond® fences that are straight, plumb, and built to last. From the quote to the final panel, we communicate clearly and clean up properly when we're done."
      features={[
        {
          title: '22 Colour Options',
          desc: 'Choose from the full COLORBOND® palette to complement your home\'s style — from classic Monument to warm Paperbark.',
        },
        {
          title: 'Low Maintenance',
          desc: 'Unlike timber, Colorbond® doesn\'t rot, warp, or need painting. A rinse with a hose is all it takes to keep it looking sharp.',
        },
        {
          title: 'Built for Queensland',
          desc: 'Steel construction handles heat, humidity, and heavy rain without buckling. Designed and tested for Australian conditions.',
        },
        {
          title: 'Straight & Plumb',
          desc: 'Every panel installed level and aligned. We take pride in the finish — the kind of job you\'d be happy for your neighbours to see.',
        },
        {
          title: 'Fast Installation',
          desc: 'Most standard residential jobs completed in 1–2 days. Minimal disruption to your property and daily routine.',
        },
        {
          title: 'QBCC Licensed',
          desc: 'All work compliant with Queensland building codes. Lic. No. 15574983. Fully insured to $10 million.',
        },
      ]}
      variants={[
        {
          name: 'Standard Colorbond®',
          desc: '0.42 BMT steel sheet in classic flat profile. The most popular and cost-effective option for residential boundary fencing.',
          best: 'Boundary fencing, back yards, side fences',
        },
        {
          name: 'Colorbond® Ultra',
          desc: 'Enhanced corrosion resistance for properties near the ocean or exposed to harsh coastal conditions.',
          best: 'Coastal properties and high-corrosion environments',
        },
        {
          name: 'Slat / Louvre Style',
          desc: 'Angled slat Colorbond® panels for airflow, privacy, and a contemporary architectural look.',
          best: 'Front fences, feature walls, modern homes',
        },
      ]}
      faqs={[
        {
          q: 'How much does Colorbond® fencing cost in Brisbane?',
          a: 'Pricing depends on the length, height, terrain, and style. Most residential jobs range from $80–$130 per metre supply and install. Get a free quote for an accurate price for your specific project.',
        },
        {
          q: 'How long does Colorbond® fencing last?',
          a: 'Colorbond® steel fencing is engineered to last 20–30+ years with minimal maintenance. The factory-applied paint is UV-resistant and won\'t flake or peel under normal conditions.',
        },
        {
          q: 'Do I need council approval for a Colorbond® fence?',
          a: 'In most Brisbane cases, standard boundary fencing under 2m doesn\'t require council approval. However rules vary by council and location — we can advise based on your address.',
        },
        {
          q: 'Can you replace just part of an existing fence?',
          a: 'Yes. We can replace sections of damaged or old fencing without replacing the whole run. We\'ll match colours and styles as closely as possible.',
        },
        {
          q: 'Do you handle dividing fences with neighbours?',
          a: 'Yes. We\'re experienced with shared boundary fences and can advise on the Neighbourhood Disputes (Dividing Fences and Trees) Act process in Queensland.',
        },
      ]}
      relatedPosts={[
        { title: 'Colorbond vs Timber Fencing: Which is Better for Brisbane?', slug: 'colorbond-vs-timber-fencing-brisbane' },
        { title: 'How Much Does a New Fence Cost in Brisbane?', slug: 'how-much-does-a-fence-cost-brisbane' },
      ]}
    />
  )
}
