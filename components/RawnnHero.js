export default function RawnnHero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white min-h-screen flex items-center pt-16">
      <div className="container-max">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Meet <span className="text-primary-600">Rawnn</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            The complete fashion e-commerce ecosystem designed specifically for modern fashion brands.
            Transform your online presence with our powerful, scalable platform built by Modax.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">End-to-End</div>
              <div className="text-gray-600">Order Management</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">Seamless</div>
              <div className="text-gray-600">Returns & Exchanges</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-3xl font-bold text-primary-600 mb-2">Secure</div>
              <div className="text-gray-600">Payment Processing</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#demo" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Request Demo
            </a>
            <a href="#features" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
              Explore Services
            </a>
          </div>

          {/* Product Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete E-commerce Solution</h3>
                  <p className="text-gray-600 mb-6">
                    From inventory management to customer engagement, Rawnn provides everything fashion brands need to succeed online.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Fashion Focused</span>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Scalable</span>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">Mobile First</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-6 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-primary-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11h8l.64 5.12a2 2 0 01-1.96 2.38H9.32a2 2 0 01-1.96-2.38L8 11z" />
                    </svg>
                    <p className="text-primary-700 font-medium">Rawnn Platform Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
