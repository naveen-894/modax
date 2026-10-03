import Link from 'next/link'
import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'

export default function AboutProducts() {
  return (
    <section className="section-padding bg-ink-50">
      <div className="container-max">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Our AI products
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            Beyond custom tools for clients, we build and own AI products ourselves —
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
            <a href="https://ai-resume-matcher-fed.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              Try it free
            </a>
          </RevealItem>

          <RevealItem className="bg-white rounded-xl p-8 shadow-sm card-hover">
            <h3 className="text-xl font-bold text-ink-900 mb-3">Rawnn</h3>
            <p className="text-ink-500 mb-6 leading-relaxed">
              An AI-assisted commerce platform for fashion brands, with AI-drafted
              product listings and location-aware discovery.
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
