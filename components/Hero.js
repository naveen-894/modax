import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-white min-h-screen flex items-center px-3 sm:px-4 lg:px-6">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Custom Software Development<span className="text-primary-600"> Company</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Leading software development company specializing in custom web applications,
            mobile apps, e-commerce solutions, and digital transformation. Build scalable software
            that drives business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/services" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              View Services
            </Link>
            <Link href="/products/rawnn" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              View Product
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
