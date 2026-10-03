import Link from 'next/link'
import Reveal from './motion/Reveal'

export default function ServicesCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <Reveal className="relative overflow-hidden rounded-2xl bg-ink-900 px-8 py-14 sm:px-14 sm:py-16">
          <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary-600/30 rounded-full blur-3xl animate-blob-pulse" aria-hidden="true" />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Have a task your team does manually every day?
              </h2>
              <p className="text-lg text-ink-300 max-w-xl leading-relaxed">
                Let's see if AI can do it. Tell us what's slow, we'll scope it and
                show you how we'd approach it — no obligation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a href="https://calendly.com/vnaveen894/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-ink-900 hover:bg-ink-100 font-semibold px-6 py-3.5 rounded-md text-center transition-colors">
                Book a 15-min call
              </a>
              <Link href="/contact" className="border border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3.5 rounded-md text-center transition-colors">
                Email us
              </Link>
            </div>
          </div>

          <div className="relative flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-white/10 text-sm text-ink-400">
            <span>Fixed scope, no surprises</span>
            <span className="h-1 w-1 rounded-full bg-ink-600 hidden sm:block" />
            <span>Explainable, not black-box</span>
            <span className="h-1 w-1 rounded-full bg-ink-600 hidden sm:block" />
            <span>Humans stay in control</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
