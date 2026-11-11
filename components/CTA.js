import { CheckCircle2 } from 'lucide-react'
import Reveal from './motion/Reveal'
import { CALENDLY_URL } from '../lib/constants'

export default function CTA() {
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
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-3.5">
                Book a 15-min call
              </a>
              <a href={`mailto:${process.env.CONTACT_EMAIL}`} className="btn-outline-dark px-6 py-3.5">
                Email us
              </a>
            </div>
          </div>

          <div className="relative flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-modax-line text-sm text-modax-muted">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-modax-aqua" />
              Free, no-obligation call
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-modax-aqua" />
              Response within 24 hours
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
