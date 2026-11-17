import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import Reveal from './motion/Reveal'
import { RAWNN_DEMO_URL, RAWNN_STARTING_PRICE } from '../lib/constants'

/** Lightweight closing CTA for Rawnn long-tail landing pages — links to the
 * full product page (which has the lead-capture demo form) and the live
 * demo store, instead of duplicating the form on every page. */
export default function RawnnCTA() {
  return (
    <section className="section-padding bg-modax-navy text-white">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            See Modax Rawnn in action
          </h2>
          <p className="text-lg text-modax-muted mb-8 leading-relaxed">
            Explore the live demo store, then book a free walkthrough of the admin and owner panels. {RAWNN_STARTING_PRICE}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="/products/rawnn#demo" className="btn-primary px-7 py-3.5">
              Book a Free Demo
            </Link>
            <a href={RAWNN_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-dark px-7 py-3.5">
              Explore the Live Demo Store
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-modax-muted">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-modax-aqua" />
              One-time fee, no commission
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-modax-aqua" />
              Source code handed over
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
