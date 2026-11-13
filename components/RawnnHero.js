import Link from 'next/link'

export default function RawnnHero() {
  return (
    <section className="relative overflow-hidden bg-modax-blue-tint-2 px-3 sm:px-4 lg:px-6 pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-modax-blue-deep" />
              For established businesses, not marketplaces
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-modax-ink mb-5 leading-[1.1] tracking-tight">
              Your own <span className="text-modax-blue">premium online store</span> — all in one platform
            </h1>
            <p className="text-lg text-modax-body mb-8 max-w-xl leading-relaxed">
              Rawnn is Modax&apos;s complete e-commerce platform: a customer website, a store
              admin panel and an owner control panel, built for your brand. Payments, shipping
              and returns are handled automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#demo" className="btn-primary px-7 py-3.5">
                Book a Free Demo
              </a>
              <a href="#features" className="btn-secondary px-7 py-3.5">
                Explore features
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-modax-blue-tint text-modax-blue-deep px-3 py-1 rounded-md text-sm font-medium">Payments built in</span>
              <span className="bg-modax-blue-tint text-modax-blue-deep px-3 py-1 rounded-md text-sm font-medium">Shipping automated</span>
              <span className="bg-modax-blue-tint text-modax-blue-deep px-3 py-1 rounded-md text-sm font-medium">Mobile first</span>
            </div>
          </div>

          {/* Visual: real screenshots of a store built on Rawnn */}
          <div className="relative hidden lg:block">
            <div className="rounded-xl bg-white shadow-xl ring-1 ring-modax-ink/5 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-modax-border-lt border-b border-modax-border-lt">
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="ml-3 flex-1 bg-white rounded px-3 py-1 text-xs text-modax-body font-mono truncate">
                  yourbrand.com
                </span>
              </div>
              <img
                src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/181d325a-0d63-4bc3-9a01-1e0dfb2ab3b6.png"
                alt="Example storefront built on Rawnn — desktop view"
                className="w-full h-auto object-cover object-top"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 rounded-2xl bg-modax-navy shadow-xl p-1.5 ring-1 ring-black/10">
              <img
                src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/8dfe31b2-58e9-4e98-bb1d-c5ba2fedd9ae.png"
                alt="Example storefront built on Rawnn — mobile view"
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 card-surface shadow-lg px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-modax-body">Secure payments active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
