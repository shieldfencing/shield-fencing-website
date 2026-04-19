import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ReviewCard from '@/components/ReviewCard'
import FaqAccordion from '@/components/FaqAccordion'
import { reviews } from '@/lib/reviews'

export const metadata: Metadata = {
  title: 'Colorbond® Steel Fencing Brisbane | Shield Fencing',
  description:
    'Expert Colorbond® steel fencing installation across Greater Brisbane. Durable, low-maintenance, available in 22 colours. QBCC Licensed.',
  alternates: { canonical: 'https://shieldfencing.com.au/colorbond' },
}

const features = [
  { num: '01', title: '22 Colour Options', desc: 'Choose from the full COLORBOND® palette to complement your home\'s style, from classic Monument to warm Paperbark.' },
  { num: '02', title: 'Low Maintenance', desc: 'Unlike timber, Colorbond® does not rot, warp, or need painting. A rinse with a hose is all it takes to keep it looking sharp.' },
  { num: '03', title: 'Built for Queensland', desc: 'Steel construction handles heat, humidity, and heavy rain without buckling. Designed and tested for Australian conditions.' },
  { num: '04', title: 'Straight and Plumb', desc: 'Every panel installed level and aligned. We take pride in the finish, the kind of job you would be happy for your neighbours to see.' },
  { num: '05', title: 'Fast Installation', desc: 'Efficient installation with minimal disruption to your property and daily routine.' },
  { num: '06', title: 'Quality Supply Chain', desc: 'We source our Colorbond® steel and fencing components from trusted Australian suppliers to ensure consistent quality and genuine materials on every job.' },
]

const profiles = [
  {
    name: 'Sawtooth',
    image: '/images/profiles/SAWTOOTHOXWORKS.jpg',
    desc: 'A bold profile with distinct vertical ribs, offering a strong and structured look. Often chosen for its depth and visual texture.',
    bullets: ['Strong and defined appearance', 'Popular for modern builds', 'Adds visual interest up close'],
  },
  {
    name: 'Trimline',
    image: '/images/profiles/TRIMLINEOXWORKS.jpg',
    desc: 'A more subtle profile with finer ribs and a softer look. Trimline sits neatly in both classic and contemporary settings.',
    bullets: ['Balanced and understated', 'Works well with any facade', 'Clean finish on both sides'],
  },
  {
    name: 'Ezyline',
    image: '/images/profiles/Ezylineoxworks.png',
    desc: 'A smooth panel option with minimal ribs, for those wanting a flat, sleek appearance. Often paired with feature elements or landscaping.',
    bullets: ['Minimalist and modern', 'Smooth lines with low visual noise', 'Preferred for premium or custom homes'],
  },
]

const colours = [
  { name: 'Monument®', hex: '#323233' },
  { name: 'Bluegum®', hex: '#969799' },
  { name: 'Jasper®', hex: '#6C6153' },
  { name: 'Night Sky®', hex: '#000000' },
  { name: 'Ironstone®', hex: '#3E434C' },
  { name: 'Surfmist®', hex: '#E4E2D5' },
]

const faqs = [
  { q: 'How much does Colorbond® fencing cost?', a: 'Pricing varies depending on fence length and height, ground conditions and access, and site-specific requirements. We provide tailored pricing once your project has been properly assessed.' },
  { q: 'Do you reuse existing panels or materials?', a: 'No. We install new materials to ensure consistency, durability, and finish quality across the entire fence. Reusing existing panels often leads to mismatched appearance and reduced lifespan.' },
  { q: 'Do you handle full fence replacements?', a: 'Yes. We regularly remove and replace existing fences as part of a complete installation. This ensures a clean, consistent result across the full boundary.' },
  { q: 'How soon can you start?', a: 'Start times vary depending on current workload, materials, and project requirements. Availability is confirmed after your project has been reviewed.' },
  { q: 'Do you deal directly with neighbours?', a: 'The project is managed directly with the client. If the fence is shared, coordination with neighbours is handled by the client prior to proceeding.' },
  { q: 'Do you need access to the site?', a: 'Yes. Clear access along the fence line is required for installation. Access limitations may affect feasibility or require adjustments to the scope.' },
  { q: 'Will installation affect my lawn or garden?', a: 'Fence installation involves digging post holes, so some disturbance along the fence line is expected. We take care during works and aim to leave the site tidy on completion.' },
  { q: 'What should I expect in the final finish?', a: 'We aim for a clean, consistent installation across the full fence line. As with all construction work, minor handling marks can occur during installation, however these are addressed as part of our quality process.' },
  { q: 'Do all Colorbond® fences look the same?', a: 'No. Results can vary depending on materials, installation methods, and workmanship. We use consistent supply and installation practices to ensure a uniform finish across the project.' },
  { q: 'Do I need council approval?', a: 'In most cases, standard boundary fencing does not require approval. Requirements can vary depending on location and height. We can advise based on your property.' },
  { q: 'Where do you source your materials?', a: 'We source our Colorbond® steel and fencing components from trusted Australian suppliers. This ensures genuine BlueScope steel, consistent quality, and reliable availability for every project.' },
]

export default function ColorbondPage() {
  return (
    <>
      {/* HERO */}
      <section className="section-dark-hero pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-pink font-semibold text-sm uppercase tracking-widest mb-6">
            Colorbond® Steel Fencing
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight max-w-4xl">
            Australia&apos;s most popular fence.<br />
            <span className="text-brand-pink">Done properly.</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed mt-8 max-w-xl">
            Durable, low-maintenance Colorbond® steel fencing installed by QBCC-licensed specialists across Greater Brisbane. Available in 22 Colorbond® colours to match your home.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/get-a-quote" className="btn-primary w-fit">Enquire Now</Link>
            <Link href="/reviews" className="btn-secondary w-fit">Read Reviews</Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl">
            Colorbond® steel fencing is the go-to choice for Brisbane homeowners, and for good reason. It is tough, it looks great, it does not rot or warp, and it handles Queensland&apos;s harsh climate without a second thought. At Shield Fencing, we install Colorbond® fences that are straight, plumb, and built to last.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-16">
            Why choose<br />
            <span className="text-brand-pink">Colorbond® steel fencing?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {features.map((f) => (
              <div key={f.title} className="bg-brand-cream p-8">
                <span className="text-brand-pink text-xs font-mono tracking-widest mb-4 block">{f.num}</span>
                <h3 className="font-bold text-brand-dark mb-3">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILES */}
      <section className="py-24 section-cream-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
            <h2 className="section-title">Our most popular<br /><span className="text-brand-pink">Colorbond® profiles.</span></h2>
            <p className="text-gray-500 lg:text-right">Choosing a profile can feel like a small detail, but it makes a big difference to the final look.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
            {profiles.map((p, i) => (
              <div key={p.name} className="bg-brand-cream p-10 flex flex-col gap-6">
                <span className="text-brand-pink text-xs font-mono tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden bg-white">
                  <Image
                    src={p.image}
                    alt={`${p.name} Colorbond profile`}
                    fill
                    className="object-contain scale-150"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{p.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-brand-pink shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLOURS */}
      <section className="py-24 section-dark-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="section-title text-white mb-6">Our most requested<br /><span className="text-brand-pink">colours.</span></h2>
              <p className="text-white/50 leading-relaxed mb-10">
                With so many colour options available, it helps to start with a shortlist. These are the colours our Brisbane customers choose most often.
              </p>
              <a
                href="https://www.colorbond.com/colours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-pink text-sm font-semibold hover:underline underline-offset-4"
              >
                View the full Colorbond® Colour Guide &rarr;
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {colours.map((c) => (
                <div key={c.name} className="group">
                  <div
                    className="w-full aspect-square rounded-xl mb-3 border border-white/10"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="text-white text-sm font-medium">{c.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 section-white-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-14">What clients say.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[reviews[4], reviews[7], reviews[6], reviews[29]].map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/reviews" className="btn-outline">All Reviews</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 section-cream-panel">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-16">Common questions.</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Related articles</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { title: 'Colorbond vs Timber Fencing: Which is Better for Brisbane?', slug: 'colorbond-vs-timber-fencing-brisbane' },
              { title: 'How Much Does a New Fence Cost in Brisbane?', slug: 'how-much-does-a-fence-cost-brisbane' },
            ].map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="border border-gray-200 hover:border-brand-pink/40 rounded-xl px-5 py-4 text-sm font-medium text-brand-dark hover:text-brand-pink transition-all">
                {p.title} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 className="section-title">Thinking About a<br /><span className="text-brand-pink">Colorbond® Fence?</span></h2>
            <div>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">We will keep things simple, help you choose what works best for your space, and deliver a clean, lasting result with care and consistency.</p>
              <Link href="/get-a-quote" className="btn-primary text-base">Enquire Now &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
