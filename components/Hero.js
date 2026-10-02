import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white px-3 sm:px-4 lg:px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="absolute -top-40 right-0 w-[520px] h-[520px] bg-primary-100 rounded-full blur-3xl opacity-50" aria-hidden="true" />

      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <div className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
              Custom software, built to last
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-ink-900 mb-6 leading-[1.1] tracking-tight">
              We engineer software that
              <span className="relative inline-block ml-2">
                <span className="relative z-10">runs the business.</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-primary-200/70 -z-0" />
              </span>
            </h1>

            <p className="text-lg text-ink-500 mb-8 max-w-xl leading-relaxed">
              Modax is a software development studio that designs, builds, and ships
              web platforms, mobile apps, and e-commerce systems for teams that need
              production-grade engineering — not a template.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="btn-primary px-7 py-3.5">
                Start a project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/products/rawnn" className="btn-secondary px-7 py-3.5">
                See our product, Rawnn
              </Link>
            </div>

            <div className="flex items-center gap-8 border-t border-ink-100 pt-6">
              <div>
                <div className="text-2xl font-bold text-ink-900">20+</div>
                <div className="text-sm text-ink-500">Projects shipped</div>
              </div>
              <div className="h-8 w-px bg-ink-100" />
              <div>
                <div className="text-2xl font-bold text-ink-900">99.9%</div>
                <div className="text-sm text-ink-500">Uptime delivered</div>
              </div>
              <div className="h-8 w-px bg-ink-100" />
              <div>
                <div className="text-2xl font-bold text-ink-900">2019</div>
                <div className="text-sm text-ink-500">Founded</div>
              </div>
            </div>
          </div>

          {/* Right column — code mockup */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-transparent rounded-2xl blur-2xl opacity-60" aria-hidden="true" />
            <div className="relative rounded-xl bg-ink-950 shadow-2xl ring-1 ring-ink-900/10 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-ink-900 border-b border-white/5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 text-xs text-ink-400 font-mono">deploy.ts</span>
              </div>
              <div className="p-6 pb-14 font-mono text-[13px] leading-relaxed text-ink-300">
                <p><span className="text-primary-400">const</span> <span className="text-blue-300">platform</span> <span className="text-ink-300">=</span> <span className="text-primary-400">await</span> <span className="text-yellow-200">modax</span><span className="text-ink-300">.</span><span className="text-green-300">build</span><span className="text-ink-300">({'{'}</span></p>
                <p className="pl-4"><span className="text-ink-400">client</span><span className="text-ink-300">:</span> <span className="text-orange-300">&apos;your-business&apos;</span><span className="text-ink-300">,</span></p>
                <p className="pl-4"><span className="text-ink-400">stack</span><span className="text-ink-300">:</span> <span className="text-ink-300">[</span><span className="text-orange-300">&apos;web&apos;</span><span className="text-ink-300">,</span> <span className="text-orange-300">&apos;mobile&apos;</span><span className="text-ink-300">,</span> <span className="text-orange-300">&apos;commerce&apos;</span><span className="text-ink-300">],</span></p>
                <p className="pl-4"><span className="text-ink-400">scale</span><span className="text-ink-300">:</span> <span className="text-orange-300">&apos;production&apos;</span></p>
                <p className="text-ink-300">{'})'}</p>
                <p className="mt-4 text-ink-500">// build complete</p>
                <p className="flex items-center gap-2 text-green-400">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  shipped in 6 weeks
                </p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 card-surface shadow-lg px-5 py-4 flex items-center gap-3">
              <div className="h-9 w-9 rounded-md bg-primary-50 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-900">QA passed</div>
                <div className="text-xs text-ink-500">Automated test suite</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
