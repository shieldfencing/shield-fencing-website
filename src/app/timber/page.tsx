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
      title={<>Natural beauty. <span className="text-brand-pink">Lasting character.</span></>}
      subtitle="Built to suit Queensland homes, our timber fencing solutions offer timeless appeal, durable construction and flexible styles to match any property."
      intro="There is something a Colorbond® fence just cannot replicate: the warmth and character of real timber. Whether it is a standard butted fence, a lapped and capped privacy fence, or a good neighbour design for a shared boundary, timber brings a natural look that suits Queensland homes and gardens perfectly. We work with treated pine for budget-conscious jobs and hardwood for premium longevity. Every post is sunk properly, every rail is level, and every paling is fixed straight."
      features={[
        {
          title: 'Standard Butted, Lapped and Capped, Good Neighbour',
          desc: 'We build all popular timber fence styles to suit your property and your preferences.',
        },
        {
          title: 'Hardwood and Treated Pine',
          desc: 'We work with both species depending on your budget and requirements. Hardwood for maximum longevity; treated pine as a cost-effective alternative.',
        },
        {
          title: 'Classic Queensland Style',
          desc: 'Timber fencing suits the character of most Brisbane homes, especially older Queenslanders and those with established gardens.',
        },
        {
          title: 'Private and Secure',
          desc: 'Full-height paling fences offer excellent privacy and a solid boundary. Ideal for families with kids or pets.',
        },
        {
          title: 'Properly Set Posts',
          desc: 'Posts concreted deep into the ground for structural integrity. No leaning, no movement, built to stay straight for years.',
        },
        {
          title: 'QBCC Licensed',
          desc: 'All work compliant with Queensland building codes. License No 15574983. Fully insured to $10 million.',
        },
      ]}
      variants={[
        {
          name: 'Standard Butted',
          desc: 'Clean and classic, this style uses vertical palings with a slight gap between each. It is commonly used for back fences and boundary lines.',
          best: 'Simple and timeless, ideal for private yards',
        },
        {
          name: 'Lapped and Capped',
          desc: 'For a more solid and polished finish, this style overlaps each paling and adds a smooth capping piece across the top. It offers full privacy with a neat, finished look.',
          best: 'Full privacy, strong and long lasting, side and front fences',
        },
        {
          name: 'Good Neighbour',
          desc: 'This double sided design looks the same from both sides. It is a great choice for shared boundaries where both neighbours want a clean and balanced result.',
          best: 'Shared boundaries, neat on both sides',
        },
      ]}
      faqs={[
        {
          q: 'Do you offer free quotes for timber fencing?',
          a: 'Yes. We provide free quotes for suitable projects based on scope and availability. All enquiries are reviewed before a quote or site visit is arranged.',
        },
        {
          q: 'How much does timber fencing cost?',
          a: 'Pricing depends on fence length, height, timber selection, ground conditions, and access. We provide tailored pricing once your project has been assessed.',
        },
        {
          q: 'Do you do repairs or small timber jobs?',
          a: 'No. We focus on full fence installations. We do not take on repairs, partial sections, or isolated panel replacements.',
        },
        {
          q: 'Can I supply my own timber or materials?',
          a: 'No. We supply all materials to ensure quality, consistency, and durability.',
        },
        {
          q: 'What timber do you use?',
          a: 'We typically use hardwood posts with treated pine rails and palings for a consistent, durable result.',
        },
        {
          q: 'Is timber perfectly straight and uniform?',
          a: 'No. Timber is a natural material, so some variation, minor bends, and movement are expected.',
        },
        {
          q: 'Can everything be done in hardwood?',
          a: 'Hardwood can be used where required, but our standard system is designed to balance strength, consistency, and long-term performance.',
        },
        {
          q: 'Will the timber be wet when installed?',
          a: 'Timber can contain natural moisture at installation. As it settles, minor shrinkage, gaps, or movement may occur.',
        },
        {
          q: 'Do you need access to the site?',
          a: 'Yes. Clear access along the fence line is required. Access limitations may affect feasibility or require adjustments.',
        },
        {
          q: 'Will installation affect my lawn or garden?',
          a: 'Some disturbance along the fence line is expected due to post hole digging. We take care during works and aim to leave the site tidy.',
        },
        {
          q: 'How is the fence set out (stepped or raked)?',
          a: 'Fence layout depends on site conditions and agreed scope. This is confirmed during quoting.',
        },
        {
          q: 'Can you match an existing timber fence?',
          a: 'We can match general style and height, but exact matches may vary due to natural timber variation and weathering.',
        },
        {
          q: 'Do you deal directly with neighbours?',
          a: 'The project is managed with the client listed on the enquiry or quote. For shared boundaries, coordination with neighbours is handled by the client.',
        },
        {
          q: 'Does timber fencing require maintenance?',
          a: 'Yes. Timber fencing benefits from painting, staining, or oiling and ongoing upkeep over time.',
        },
        {
          q: 'How long does timber fencing last?',
          a: 'Lifespan depends on materials, exposure, and maintenance. With proper care, timber fencing can provide long-term performance.',
        },
      ]}
      relatedPosts={[
        { title: 'Colorbond vs Timber Fencing: Which is Better for Brisbane?', slug: 'colorbond-vs-timber-fencing-brisbane' },
        { title: 'How Much Does a New Fence Cost in Brisbane?', slug: 'how-much-does-a-fence-cost-brisbane' },
      ]}
    />
  )
}
