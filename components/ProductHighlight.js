export default function ProductHighlight() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Rawnn
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship product: A complete D2C e-commerce platform built specifically for fashion brands.
              Launch your online store in days, not months.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Fashion E-commerce Made Simple
                </h3>
                <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                  Rawnn provides everything fashion brands need to sell directly to customers.
                  From inventory management to payment processing, we've built a complete solution
                  that understands fashion retail.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/products/rawnn" className="bg-white text-primary-600 hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg text-center transition-colors duration-200">
                    Learn About Rawnn
                  </a>
                  <a href="/products/rawnn#demo" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-6 py-3 rounded-lg text-center transition-colors duration-200">
                    Request Demo
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Key Features</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Complete order management</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Advanced inventory tracking</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Secure payment processing</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Returns & exchanges handling</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Mobile-optimized storefront</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Rawnn is a product built and owned by Modax. We maintain complete control over development, security, and roadmap.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
