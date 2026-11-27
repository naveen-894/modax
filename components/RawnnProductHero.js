import Image from 'next/image'
import PageHero from './PageHero'
import { RAWNN_DEMO_URL } from '../lib/constants'

export default function RawnnProductHero() {
  return (
    <PageHero
      compact
      eyebrow="For established businesses, not marketplaces"
      title="Own your ecommerce platform. "
      accent="Pay once, keep it forever."
      description="A complete ecommerce platform (storefront, admin panel and owner control panel) on your own servers. Pay once. No monthly fees, no commission."
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-10">
        <a href="#demo" className="btn-primary">
          Book a Free Demo
        </a>
        <a href={RAWNN_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          Explore the Live Demo Store
        </a>
      </div>

      <div className="flex flex-wrap gap-x-10 gap-y-4 mt-8 pt-6 border-t border-modax-border-lt">
        <div>
          <div className="inline-block text-2xl font-bold text-modax-navy bg-modax-gold-tint px-3 py-1 rounded-md">₹0</div>
          <div className="text-sm text-modax-body mt-1.5">Commission on sales</div>
        </div>
        <div>
          <div className="inline-block text-2xl font-bold text-modax-navy bg-modax-gold-tint px-3 py-1 rounded-md">2–6 wks</div>
          <div className="text-sm text-modax-body mt-1.5">Time to launch</div>
        </div>
      </div>

      <div className="rounded-xl bg-white shadow-xl ring-1 ring-modax-ink/5 overflow-hidden w-full mt-8">
        <div className="flex items-center gap-2 px-4 py-3 bg-modax-border-lt border-b border-modax-border-lt">
          <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
          <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
          <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
          <span className="ml-3 flex-1 bg-white rounded px-3 py-1 text-xs text-modax-body font-mono truncate">
            yourbrand.com
          </span>
        </div>
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] lg:aspect-[21/7]">
          <Image
            src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/181d325a-0d63-4bc3-9a01-1e0dfb2ab3b6.png"
            alt="Example storefront built on Rawnn"
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </PageHero>
  )
}
