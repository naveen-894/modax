import Link from 'next/link'

export default function ProductsShowcase() {
  const products = [
    {
      id: "rawnn",
      name: "Rawnn",
      tagline: "D2C E-commerce Platform for Fashion Brands",
      description: "A complete e-commerce solution designed specifically for fashion brands. Built by Modax to help fashion businesses sell directly to customers with professional online stores, inventory management, and seamless payment processing.",
      image: "/images/rawnn-preview.png",
      features: [
        "Complete order management system",
        "Advanced inventory tracking",
        "Secure payment processing",
        "Returns & exchange handling",
        "Customer relationship tools",
        "Real-time analytics dashboard",
        "Mobile-optimized storefront",
        "Multi-channel selling capabilities"
      ],
      benefits: [
        "Increase direct-to-consumer sales by 300%",
        "Reduce operational costs by 50%",
        "Launch professional online stores in 1 week",
        "Maintain complete control over branding and customer data",
        "Scale operations without technical complexity"
      ],
      pricing: {
        model: "SaaS Subscription",
        starting: "Custom pricing based on business needs"
      },
      cta: {
        primary: "Request Demo",
        secondary: "View Product Details",
        primaryLink: "/products/rawnn#demo",
        secondaryLink: "/products/rawnn"
      }
    }
  ]

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Purpose-built software products that solve real business challenges. Each product is developed,
            owned, and maintained by Modax to ensure reliability and continuous improvement.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Product Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {product.name}
                    </h3>
                    <p className="text-xl text-primary-100 mb-6">
                      {product.tagline}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                        SaaS Platform
                      </span>
                      <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Fashion Focused
                      </span>
                      <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Built by Modax
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-sm mx-auto">
                      <div className="text-4xl font-bold mb-2">{product.pricing.starting}</div>
                      <div className="text-primary-100">{product.pricing.model}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Description & Benefits */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">What is {product.name}?</h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {product.description}
                    </p>

                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Core Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center bg-gray-50 rounded-lg p-3">
                          <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Link href={product.cta.primaryLink} className="btn-primary text-center flex-1">
                        {product.cta.primary}
                      </Link>
                      <Link href={product.cta.secondaryLink} className="btn-secondary text-center flex-1">
                        {product.cta.secondary}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="bg-gray-50 px-8 md:px-12 py-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  <span className="font-medium">{product.name}</span> is a product built and owned by Modax.
                  We maintain full control over development, security, and feature roadmap.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
