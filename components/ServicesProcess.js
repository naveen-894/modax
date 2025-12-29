export default function ServicesProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, challenges, and requirements through detailed consultations and analysis.",
      duration: "1-2 weeks"
    },
    {
      number: "02",
      title: "Design & Architecture",
      description: "Our team creates detailed technical specifications, user experience designs, and scalable system architecture.",
      duration: "2-4 weeks"
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Agile development process with regular testing, code reviews, and iterative improvements to ensure quality.",
      duration: "4-12 weeks"
    },
    {
      number: "04",
      title: "Deployment & Launch",
      description: "Secure deployment, performance optimization, and comprehensive testing before going live with monitoring and support.",
      duration: "1-2 weeks"
    },
    {
      number: "05",
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to ensure your software continues to perform optimally.",
      duration: "Ongoing"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Development Process
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven, collaborative approach that ensures your project is delivered on time,
            within budget, and exceeds your expectations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Progress Line Background - Only visible on large screens */}
          <div className="hidden lg:flex relative">
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-primary-200"></div>
            <div className="absolute top-8 left-0 right-0 h-4 bg-white"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-gray-50 rounded-xl p-6 h-full border-2 border-transparent hover:border-primary-200 transition-colors">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>
                    <div className="text-sm text-primary-600 font-semibold uppercase tracking-wide">
                      {step.duration}
                    </div>
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

        {/* Process Benefits */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Process?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h4>
              <p className="text-gray-600 text-sm">Rigorous testing and code reviews at every stage</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">On-Time Delivery</h4>
              <p className="text-gray-600 text-sm">Structured timelines with regular progress updates</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-gray-600 text-sm">Senior developers with years of industry experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Full Support</h4>
              <p className="text-gray-600 text-sm">Dedicated project management and ongoing assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
