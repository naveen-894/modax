import { PenTool, PackageCheck, Users } from 'lucide-react'

export default function RawnnServiceApproach() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modax-ink mb-4">
            A custom setup, not a shared template
          </h2>
          <p className="text-lg sm:text-xl text-modax-body">
            Rawnn is custom ecommerce website development for your brand — the same core platform,
            configured, themed and launched specifically for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-modax-blue-tint rounded-lg mb-5">
              <PenTool className="w-8 h-8 text-modax-blue-deep" />
            </div>
            <h3 className="text-lg font-bold text-modax-ink mb-2">Custom-built for your brand</h3>
            <p className="text-modax-body text-sm leading-relaxed">
              Your catalogue, your theme, your domain — a custom ecommerce website development project in India, not a one-size-fits-all install.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-modax-blue-tint rounded-lg mb-5">
              <PackageCheck className="w-8 h-8 text-modax-blue-deep" />
            </div>
            <h3 className="text-lg font-bold text-modax-ink mb-2">Turnkey, start to finish</h3>
            <p className="text-modax-body text-sm leading-relaxed">
              As a turnkey ecommerce solution for India, we handle design, build, payments, shipping and launch — you focus on the products.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-modax-blue-tint rounded-lg mb-5">
              <Users className="w-8 h-8 text-modax-blue-deep" />
            </div>
            <h3 className="text-lg font-bold text-modax-ink mb-2">Live fast, built for either side of the business</h3>
            <p className="text-modax-body text-sm leading-relaxed">
              A readymade ecommerce website in India, set up for your brand in 3–10 weeks — equally suited as a D2C brand store or a b2c ecommerce website for a retail business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
