export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Share Your Brand Details",
      description: "Tell us about your fashion brand, products, and business requirements. We'll understand your unique needs and vision."
    },
    {
      number: "02",
      title: "We Set Up Your Store",
      description: "Our team configures your custom online store with your branding, products, payment integration, and all necessary features."
    },
    {
      number: "03",
      title: "Start Selling in 7-10 Days",
      description: "Launch your professional e-commerce store and start accepting orders directly from customers through your own website."
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get your professional online store up and running in just one week with our streamlined process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step number */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white text-xl font-bold rounded-full mb-6">
                {step.number}
              </div>

              {/* Connecting line (hidden on mobile, visible on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 transform translate-x-8"></div>
              )}

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline on mobile */}
        <div className="md:hidden mt-12">
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              <div className="flex items-center justify-between">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <div className="flex-1 h-0.5 bg-primary-200 mx-2"></div>
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <div className="flex-1 h-0.5 bg-primary-200 mx-2"></div>
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
