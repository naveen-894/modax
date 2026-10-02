import Link from 'next/link'

export default function ProductHighlight() {
  const features = [
    "Complete order management",
    "Advanced inventory tracking",
    "Secure payment processing",
    "Returns & exchanges handling",
    "Mobile-optimized storefront",
  ]

  return (
    <section className="section-padding bg-ink-50">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="eyebrow mb-4">Our product</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-5 tracking-tight">
                Meet Rawnn, our D2C commerce platform
              </h2>
              <p className="text-lg text-ink-500 mb-8 leading-relaxed">
                Rawnn is a complete e-commerce platform purpose-built for fashion brands —
                from inventory to checkout. It's a product we built, own, and run ourselves.
              </p>

              <ul className="space-y-3 mb-9">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-ink-700">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products/rawnn" className="btn-primary">
                  Learn about Rawnn
                </Link>
                <Link href="/products/rawnn#demo" className="btn-secondary">
                  Request a demo
                </Link>
              </div>
            </div>

            {/* Browser-chrome mockup */}
            <div className="relative">
              <div className="rounded-xl bg-white shadow-xl ring-1 ring-ink-900/5 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-ink-100 border-b border-ink-200">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                  <span className="ml-3 flex-1 bg-white rounded px-3 py-1 text-xs text-ink-400 font-mono truncate">
                    shop.rawnn.com
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-3 w-24 rounded bg-ink-900" />
                    <div className="flex gap-2">
                      <div className="h-6 w-6 rounded-full bg-ink-100" />
                      <div className="h-6 w-6 rounded-full bg-ink-100" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-primary-100 to-primary-50" />
                    <div className="space-y-3">
                      <div className="aspect-square rounded-lg bg-ink-50" />
                      <div className="h-3 w-full rounded bg-ink-100" />
                      <div className="h-3 w-2/3 rounded bg-ink-100" />
                      <div className="h-8 w-full rounded-md bg-ink-900 mt-2" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-lg bg-ink-50" />
                    <div className="h-20 rounded-lg bg-ink-50" />
                    <div className="h-20 rounded-lg bg-ink-50" />
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 card-surface shadow-lg px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-xs font-semibold text-ink-700">Live store · 99.9% uptime</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-ink-400 text-center mt-12">
            Rawnn is built and owned by Modax — we maintain complete control over development, security, and roadmap.
          </p>
        </div>
      </div>
    </section>
  )
}
