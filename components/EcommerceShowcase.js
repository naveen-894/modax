import Link from 'next/link'
import { ShieldCheck, ArrowRight } from 'lucide-react'
import Reveal from './motion/Reveal'
import { RAWNN_DEMO_URL } from '../lib/constants'

export default function EcommerceShowcase() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <Reveal className="text-center mb-10 max-w-2xl mx-auto">
          <div className="eyebrow mb-4 justify-center">Our ecommerce platform</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-modax-ink tracking-tight mb-5">
            Own your ecommerce platform.{' '}
            <span className="text-modax-blue">Pay once, keep it forever.</span>
          </h2>
          <p className="text-lg text-modax-body leading-relaxed">
            Rawnn is Modax&apos;s complete ecommerce platform — a customer website, store admin
            panel and owner control panel, on your own servers.
          </p>
        </Reveal>

        <Reveal className="flex flex-col items-center gap-5">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products/rawnn" className="btn-primary px-7 py-3.5">
              See the Modax ecommerce platform
            </Link>
            <a href={RAWNN_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary px-7 py-3.5">
              Explore the Live Demo Store
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-modax-body">
            <ShieldCheck className="w-4 h-4 text-modax-blue-deep" />
            One-time cost · Your own servers · Live in 2–6 weeks
          </div>
          <Link href="/products/rawnn#compare" className="inline-flex items-center gap-1.5 text-sm font-semibold text-modax-blue-deep hover:text-modax-blue transition-colors mt-1">
            See how Rawnn compares
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
