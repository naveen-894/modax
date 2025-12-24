export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pricing That Grows With Your Business
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Custom pricing designed specifically for fashion and retail brands based on your requirements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Setup Price */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  One-Time Setup
                </h3>
                <div className="mb-4">
                  <span className="text-3xl lg:text-4xl font-bold text-primary-600">
                    ₹60,000 - ₹1,00,000
                  </span>
                  <span className="text-gray-600 ml-2">one-time</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Complete store setup including branding, product upload, payment integration, and training.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Custom store design
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Product catalog setup
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Payment gateway integration
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Staff training included
                  </li>
                </ul>
              </div>

              {/* Monthly AMC */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Monthly Maintenance
                </h3>
                <div className="mb-4">
                  <span className="text-3xl lg:text-4xl font-bold text-primary-600">
                    ₹4,000
                  </span>
                  <span className="text-gray-600 ml-2">per month onwards</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Ongoing support, updates, and maintenance to keep your store running smoothly. Enhancements and additional features are charged extra.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    24/7 technical support
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Platform updates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Security monitoring
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Basic maintenance included
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-6">
                Pricing varies based on your specific requirements, product catalog size, and customization needs. Additional enhancements and custom features are charged extra.
              </p>
              <a href="#contact" className="btn-primary text-lg px-8 py-4">
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
