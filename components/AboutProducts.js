import Link from 'next/link'
import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'
import { SCREENR_URL } from '../lib/constants'

export default function AboutProducts() {
  return (
    <section className="section-padding bg-ink-50">
      <div className="container-max">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Our products
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            Beyond custom tools for clients, we build and run our own products —
            proof that what we build actually gets used.
          </p>
        </Reveal>

        <RevealGroup className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
          <RevealItem className="bg-white rounded-xl p-8 shadow-sm card-hover">
            <h3 className="text-xl font-bold text-ink-900 mb-3">Screenr</h3>
            <p className="text-ink-500 mb-6 leading-relaxed">
              Our lead product. Explainable 0–100% resume-to-job match scores for
              recruiters and hiring managers.
            </p>
            <a href={SCREENR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              Try it free
            </a>
          </RevealItem>

          <RevealItem className="bg-white rounded-xl p-8 shadow-sm card-hover">
            <h3 className="text-xl font-bold text-ink-900 mb-3">Rawnn</h3>
            <p className="text-ink-500 mb-6 leading-relaxed">
              A complete e-commerce platform you own outright — pay once, run it on
              your own servers, with AI-drafted listings, payments, shipping and
              returns all handled automatically.
            </p>
            <Link href="/products/rawnn" className="btn-secondary inline-block">
              Learn more
            </Link>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
