import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import PageHero from './PageHero'
import { RAWNN_STARTING_PRICE, RAWNN_DEMO_URL } from '../lib/constants'

export default function RawnnProductHero() {
  return (
    <PageHero
      eyebrow="For established businesses, not marketplaces"
      title="Own your ecommerce platform. "
      accent="Pay once, keep it forever."
      description="Rawnn is Modax's complete e-commerce platform — a customer website, store admin panel and owner control panel, all in one. Your brand, your servers, your customer data. No monthly fees, no commission. Payments, shipping and returns are handled automatically."
      stats={[
        { value: '₹0', label: 'Commission on sales' },
        { value: '2–6 wks', label: 'Time to launch' },
      ]}
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a href="#demo" className="btn-primary">
          Book a Free Demo
        </a>
        <a href={RAWNN_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          Explore the Live Demo Store
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-8 mb-3">
        <div className="inline-flex items-center gap-2 bg-modax-blue-tint text-modax-blue-deep px-4 py-2.5 rounded-md text-sm font-medium">
          <CheckCircle2 className="w-4 h-4" />
          Built by Modax
        </div>
        <span className="text-sm text-modax-body">{RAWNN_STARTING_PRICE} · Your own servers · Live in 2–6 weeks</span>
      </div>
      <p className="text-sm text-modax-body mb-10">
        No monthly fees from Modax — you pay only your own hosting costs directly to your hosting provider.
      </p>

      <div className="rounded-xl bg-white shadow-xl ring-1 ring-modax-ink/5 overflow-hidden max-w-2xl lg:max-w-none">
        <div className="flex items-center gap-2 px-4 py-3 bg-modax-border-lt border-b border-modax-border-lt">
          <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
          <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
          <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
          <span className="ml-3 flex-1 bg-white rounded px-3 py-1 text-xs text-modax-body font-mono truncate">
            yourbrand.com
          </span>
        </div>
        <Image
          src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/181d325a-0d63-4bc3-9a01-1e0dfb2ab3b6.png"
          alt="Example storefront built on Rawnn"
          width={3580}
          height={2044}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </PageHero>
  )
}
