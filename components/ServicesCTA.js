import Link from 'next/link'
import Reveal from './motion/Reveal'
import { CALENDLY_URL } from '../lib/constants'

export default function ServicesCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <Reveal className="relative overflow-hidden rounded-2xl bg-modax-navy px-8 py-14 sm:px-14 sm:py-16">
          <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-modax-blue/10 rounded-full blur-3xl animate-blob-pulse" aria-hidden="true" />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Have a task your team does manually, or a website or app to build?
              </h2>
              <p className="text-lg text-modax-muted max-w-xl leading-relaxed">
                Tell us what&apos;s slow, or what you need built. We&apos;ll scope it and
                show you how we&apos;d approach it — no obligation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
                Book a 15-min call
              </a>
              <Link href="/contact" className="btn-outline-dark text-center">
                Email us
              </Link>
            </div>
          </div>

          <div className="relative flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-modax-line text-sm text-modax-muted">
            <span>Fixed scope, no surprises</span>
            <span className="h-1 w-1 rounded-full bg-modax-muted-2 hidden sm:block" />
            <span>Explainable, not black-box</span>
            <span className="h-1 w-1 rounded-full bg-modax-muted-2 hidden sm:block" />
            <span>Humans stay in control</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
