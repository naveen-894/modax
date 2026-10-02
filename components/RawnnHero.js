import Link from 'next/link'

export default function RawnnHero() {
  return (
    <section className="relative overflow-hidden bg-ink-50 px-3 sm:px-4 lg:px-6 pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
              Built &amp; owned by Modax
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-ink-900 mb-5 leading-[1.1] tracking-tight">
              Meet <span className="text-primary-700">Rawnn</span>
            </h1>
            <p className="text-lg text-ink-500 mb-8 max-w-xl leading-relaxed">
              The complete fashion e-commerce ecosystem — order management, inventory,
              returns, and payments, in one platform designed specifically for modern
              fashion brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#demo" className="btn-primary px-7 py-3.5">
                Request a demo
              </a>
              <a href="#features" className="btn-secondary px-7 py-3.5">
                Explore features
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-md text-sm font-medium">Fashion focused</span>
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-md text-sm font-medium">Scalable</span>
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-md text-sm font-medium">Mobile first</span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="rounded-xl bg-white shadow-xl ring-1 ring-ink-900/5 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-ink-100 border-b border-ink-200">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                <span className="ml-3 flex-1 bg-white rounded px-3 py-1 text-xs text-ink-400 font-mono truncate">
                  shop.rawnn.com/dashboard
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="h-3 w-28 rounded bg-ink-900" />
                  <div className="h-7 w-20 rounded-md bg-primary-600" />
                </div>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="rounded-lg bg-ink-50 p-3">
                    <div className="text-lg font-bold text-ink-900">1,284</div>
                    <div className="text-xs text-ink-500">Orders</div>
                  </div>
                  <div className="rounded-lg bg-ink-50 p-3">
                    <div className="text-lg font-bold text-ink-900">98.4%</div>
                    <div className="text-xs text-ink-500">Fulfilled</div>
                  </div>
                  <div className="rounded-lg bg-ink-50 p-3">
                    <div className="text-lg font-bold text-ink-900">4.9★</div>
                    <div className="text-xs text-ink-500">Rating</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-primary-100 to-primary-50" />
                  <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-ink-100 to-ink-50" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 card-surface shadow-lg px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-ink-700">Secure payments active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
