import type { Metadata } from 'next'
import ServicePageLayout from '@/components/ServicePageLayout'
import { reviews } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Timber Fencing Brisbane | Hardwood & Treated Pine | Shield Fencing',
  description:
    'Timber fencing specialists across Greater Brisbane. Hardwood and treated pine options for privacy, character, and natural beauty. QBCC Licensed.',
  alternates: { canonical: 'https://shieldfencing.com.au/timber' },
}

export default function TimberPage() {
  return (
    <ServicePageLayout
      heroTagline="Timber Fencing"
      title={<>Natural beauty. <span className="text-brand-pink">Lasting character.</span></>}
      subtitle="Built to suit Queensland homes, our timber fencing solutions offer timeless appeal, durable construction and flexible styles to match any property."
      intro="There is something a Colorbond® fence just cannot replicate: the warmth and character of real timber. Whether it is a standard butted fence, a lapped and capped privacy fence, or a good neighbour design for a shared boundary, timber brings a natural look that suits Queensland homes and gardens perfectly. We work with treated pine for budget-conscious jobs and hardwood for premium longevity. Every post is sunk properly, every rail is level, and every paling is fixed straight."
      featuresTitle={<>Why choose<br /><span className="text-brand-pink">timber fencing?</span></>}
      features={[
        {
          title: 'Natural Warmth & Character',
          desc: 'Timber brings a warmth and texture that steel cannot replicate. It suits Queenslanders, modern homes, and established gardens alike.',
        },
        {
          title: 'Multiple Styles Available',
          desc: 'Standard butted, lapped and capped, or good neighbour — we build all popular styles to suit your property and preferences.',
        },
        {
          title: 'Hardwood and Treated Pine',
          desc: 'We work with both species depending on your budget and requirements. Hardwood for maximum longevity; treated pine as a cost-effective alternative.',
        },
        {
          title: 'Full Privacy & Security',
          desc: 'Full-height paling fences offer excellent privacy and a solid boundary. Ideal for families with kids or pets.',
        },
        {
          title: 'Properly Set Posts',
          desc: 'Posts concreted deep into the ground for structural integrity. No leaning, no movement, built to stay straight for years.',
        },
        {
          title: 'Customisable to Your Property',
          desc: 'Timber can be stained, painted, or oiled to match your home. Heights, styles, and finishes can be tailored to your needs.',
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
          q: 'How much does timber fencing cost?',
          a: 'Pricing depends on fence length, height, timber selection, ground conditions, and access. We provide tailored pricing once your project has been assessed.',
        },
        {
          q: 'What timber do you use?',
          a: 'We typically use hardwood posts with treated pine rails and palings for a consistent, durable result. Full hardwood builds are available where required.',
        },
        {
          q: 'What is the difference between standard butted and lapped and capped?',
          a: 'Standard butted uses vertical palings fixed side by side with a small gap. Lapped and capped overlaps each paling and adds a capping rail across the top for a more solid, polished finish with full privacy.',
        },
        {
          q: 'What is a good neighbour fence?',
          a: 'A good neighbour fence is a double-sided design that looks the same from both sides. It is a popular choice for shared boundaries where both neighbours want a neat and balanced result.',
        },
        {
          q: 'Is timber perfectly straight and uniform?',
          a: 'No. Timber is a natural material, so some variation, minor bends, and movement are expected. This is normal and does not affect the structural performance of the fence.',
        },
        {
          q: 'Will the timber be wet when installed?',
          a: 'Timber can contain natural moisture at installation. As it settles, minor shrinkage, gaps, or movement may occur. This is normal behaviour for treated timber.',
        },
        {
          q: 'Can everything be done in hardwood?',
          a: 'Hardwood can be used where required, but our standard system uses hardwood posts with treated pine rails and palings — designed to balance strength, consistency, and long-term performance.',
        },
        {
          q: 'Does timber fencing require maintenance?',
          a: 'Yes. Timber fencing benefits from painting, staining, or oiling to protect against weathering. Regular upkeep extends the life and appearance of the fence.',
        },
        {
          q: 'How long does timber fencing last?',
          a: 'With proper installation and maintenance, hardwood posts can last 25+ years. Treated pine palings typically last 15 to 20 years depending on exposure and upkeep.',
        },
        {
          q: 'Can you match an existing timber fence?',
          a: 'We can match general style and height, but exact colour and grain matches may vary due to natural timber variation and weathering over time.',
        },
        {
          q: 'How is the fence set out on a slope — stepped or raked?',
          a: 'Fence layout depends on the slope and site conditions. Stepped fencing follows the ground in level sections with gaps underneath, while raked fencing follows the slope angle. We confirm the approach during quoting.',
        },
        {
          q: 'Do you do repairs or small timber jobs?',
          a: 'No. We focus on full fence installations. We do not take on repairs, partial sections, or isolated panel replacements.',
        },
      ]}
      reviewItems={[reviews[21], reviews[13], reviews[15], reviews[26]]}
      ctaTitle={<>Ready for a<br /><span className="text-brand-pink">timber fence?</span></>}
      ctaText="Whether you want the warmth of natural timber, full privacy, or a fence that matches your Queensland home, we will help you choose the right style and deliver a quality result."
      relatedPosts={[
        { title: 'Colorbond vs Timber Fencing: Which is Better for Brisbane?', slug: 'colorbond-vs-timber-fencing-brisbane' },
        { title: 'How Much Does a New Fence Cost in Brisbane?', slug: 'how-much-does-a-fence-cost-brisbane' },
      ]}
    />
  )
}
