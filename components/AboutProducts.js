import Link from 'next/link'

export default function AboutProducts() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond custom development, we build and own products that solve real business challenges.
            These products represent our commitment to innovation and long-term value creation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Rawnn Product Highlight */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 md:p-12">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Rawnn - Our Flagship Product
                </h3>
                <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                  A complete D2C e-commerce platform specifically designed for fashion brands,
                  built from the ground up by our team at Modax.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Why We Built Rawnn</h4>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="font-semibold text-gray-900">Fashion Industry Expertise</h5>
                        <p className="text-gray-600">We recognized that existing e-commerce platforms weren't built for fashion brands' unique needs.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="font-semibold text-gray-900">End-to-End Solution</h5>
                        <p className="text-gray-600">We wanted to create a complete platform that handles everything from inventory to customer service.</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h5 className="font-semibold text-gray-900">Ownership & Control</h5>
                        <p className="text-gray-600">By building our own product, we maintain complete control over features, security, and roadmap.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/products/rawnn" className="btn-primary text-center">
                      Learn About Rawnn
                    </Link>
                    <Link href="/products/rawnn#demo" className="btn-secondary text-center">
                      Request Demo
                    </Link>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-8">
                  <div className="text-center mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Rawnn by the Numbers</h4>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                    <p className="text-sm text-primary-800 text-center">
                      <strong>Rawnn is built and owned by Modax.</strong> We have complete control over its development,
                      security, and feature roadmap to ensure it always serves our users' best interests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Products Teaser */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Products Coming Soon</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're constantly working on new products that solve business challenges.
              Follow our journey as we build tools that make businesses more efficient and successful.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
