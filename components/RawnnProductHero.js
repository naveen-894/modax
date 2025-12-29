export default function RawnnProductHero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white min-h-screen flex items-center pt-16 px-3 sm:px-4 lg:px-6">
      <div className="container-max">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Meet <span className="text-primary-600">Rawnn</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-primary-600 font-medium mb-6">
            D2C E-commerce Platform for Fashion Brands
          </p>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            The complete direct-to-consumer platform designed specifically for fashion brands.
            Launch your online store, manage inventory, process orders, and grow your business with ease.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#demo" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Start Free Trial
            </a>
            <a href="#features" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              Explore Features
            </a>
          </div>

          {/* Product Badge */}
          <div className="inline-flex items-center bg-primary-100 text-primary-800 px-6 py-3 rounded-full text-lg font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Built & Owned by Modax
          </div>
        </div>
      </div>
    </section>
  )
}
