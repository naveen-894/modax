export default function RawnnProductHowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Sign Up & Setup",
      description: "Create your account and customize your store design. Choose from professional templates or upload your own branding.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      step: "02",
      title: "Add Your Products",
      description: "Upload your products with photos, descriptions, pricing, and inventory. Use our bulk import tools for faster setup.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Configure Payments",
      description: "Connect your payment gateways and shipping providers. Set up tax rules and discount codes for your store.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      step: "04",
      title: "Launch & Sell",
      description: "Go live with your professional online store. Start selling directly to customers and manage everything from your dashboard.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How Rawnn Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get your fashion brand online in just 4 simple steps. No technical expertise required.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200" style={{width: 'calc(100% - 4rem)'}}></div>
                )}

                <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                      {step.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary-600">{step.step}</div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline visual for mobile */}
        <div className="mt-12 lg:hidden">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
              <div className="w-8 h-0.5 bg-primary-300"></div>
              <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
              <div className="w-8 h-0.5 bg-primary-300"></div>
              <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
              <div className="w-8 h-0.5 bg-primary-300"></div>
              <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Selling Online?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of fashion brands that have already launched their direct-to-consumer stores with Rawnn.
          </p>
          <a href="#demo" className="btn-primary text-lg px-8 py-4">
            Start Your Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
