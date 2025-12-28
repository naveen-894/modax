export default function Products() {
  const products = [
    {
      name: "Rawnn",
      tagline: "Complete E-commerce Order Management System",
      description: "A focused e-commerce platform that handles the complete customer journey from order placement to delivery, including returns, exchanges, cancellations, ratings, reviews, and product Q&A. Built with both customer and admin interfaces for seamless operations.",
      features: [
        "Complete customer order flow",
        "Order management & tracking",
        "Returns & exchange processing",
        "Payment processing & reconciliation",
        "Ratings & reviews system",
        "Product Q&A functionality",
        "Admin product management",
        "Content moderation tools"
      ],
      image: "/images/rawnn-preview.png", // Placeholder for product image
      link: "/rawnn" // Link to detailed product page
    }
  ]

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Featured Product
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Rawnn - our flagship fashion e-commerce platform built for modern brands.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Product Info */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xl text-primary-600 font-medium mb-4">
                      {product.tagline}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <svg className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/rawnn" className="btn-primary text-center">
                      Learn More
                    </a>
                    <a href="/rawnn#demo" className="btn-secondary text-center">
                      Get Demo
                    </a>
                  </div>
                </div>

                {/* Product Visual */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11h8l.64 5.12a2 2 0 01-1.96 2.38H9.32a2 2 0 01-1.96-2.38L8 11z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Rawnn Platform</h4>
                      <p className="text-gray-600">Fashion E-commerce Solution</p>
                    </div>
                  </div>

                  {/* Floating elements for visual appeal */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary-400 rounded-full opacity-10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
