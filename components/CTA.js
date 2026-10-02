import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="relative overflow-hidden rounded-2xl bg-ink-900 px-8 py-14 sm:px-14 sm:py-16">
          <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary-600/30 rounded-full blur-3xl" aria-hidden="true" />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Have a project in mind?
              </h2>
              <p className="text-lg text-ink-300 max-w-xl leading-relaxed">
                Tell us what you're building. We'll scope it, give you a realistic timeline,
                and show you how we'd approach it — no obligation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link href="/contact" className="bg-white text-ink-900 hover:bg-ink-100 font-semibold px-6 py-3.5 rounded-md text-center transition-colors">
                Book a free consultation
              </Link>
              <Link href="/contact" className="border border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3.5 rounded-md text-center transition-colors">
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="relative flex flex-wrap items-center gap-x-8 gap-y-3 mt-10 pt-8 border-t border-white/10 text-sm text-ink-400">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No setup fees for the demo
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Response within 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
