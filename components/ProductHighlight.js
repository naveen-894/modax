import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'
import { SCREENR_URL } from '../lib/constants'

export default function ProductHighlight() {
  return (
    <section className="section-padding bg-ink-50">
      <div className="container-max">
        <Reveal className="text-center mb-14">
          <div className="eyebrow mb-4 justify-center">Our products</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">
            Products we&apos;ve built and run
          </h2>
        </Reveal>

        <RevealGroup className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Screenr */}
          <RevealItem className="card-surface card-hover p-8 flex flex-col">
            <div className="eyebrow mb-4">Lead product</div>
            <h3 className="text-2xl font-bold text-ink-900 mb-3">Screenr</h3>
            <p className="text-ink-500 mb-6 leading-relaxed flex-1">
              Upload a resume and a job description, get a 0–100% match score with
              plain-English reasoning in seconds — plus a skills gap analysis and a
              follow-up chat to dig into any match.
            </p>
            <ul className="space-y-2.5 mb-8 text-sm text-ink-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                Explainable 0–100% match score
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                Skills gap analysis
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                Follow-up chat about any match
              </li>
            </ul>
            <a href={SCREENR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
              Try it free
            </a>
          </RevealItem>

          {/* Rawnn */}
          <RevealItem className="card-surface card-hover p-8 flex flex-col">
            <div className="eyebrow mb-4">Own your ecommerce platform</div>
            <h3 className="text-2xl font-bold text-ink-900 mb-3">Rawnn</h3>
            <p className="text-ink-500 mb-6 leading-relaxed flex-1">
              A complete e-commerce platform for established businesses, on your
              own servers. Pay once and keep it — no monthly fees or commission
              from Modax, just your own hosting costs — while payments, shipping
              and returns run automatically.
            </p>
            <ul className="space-y-2.5 mb-8 text-sm text-ink-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                One-time cost, no commission on your sales
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                AI-drafted product titles, descriptions & sizes/variants
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
                Payments & shipping handled automatically
              </li>
            </ul>
            <Link href="/products/rawnn" className="btn-secondary text-center">
              Learn more
            </Link>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
