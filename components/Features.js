export default function Features() {
  const services = [
    {
      title: "E-commerce Development",
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M8 11h8l.64 5.12a2 2 0 01-1.96 2.38H9.32a2 2 0 01-1.96-2.38L8 11z" />
        </svg>
      ),
      features: [
        "Custom online stores & marketplaces",
        "Payment gateway integration",
        "Inventory & order management",
        "Mobile commerce solutions",
        "Multi-vendor platforms",
        "Analytics & reporting dashboards"
      ]
    },
    {
      title: "Web Application Development",
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Custom web applications",
        "SaaS platform development",
        "API development & integration",
        "Progressive Web Apps (PWAs)",
        "Admin & CMS solutions",
        "Real-time applications"
      ]
    },
    {
      title: "Mobile App Development",
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "iOS & Android applications",
        "Cross-platform development",
        "React Native & Flutter apps",
        "App store optimization",
        "Push notifications & analytics",
        "Offline functionality"
      ]
    },
    {
      title: "Business Software Solutions",
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "ERP & CRM systems",
        "Workflow automation",
        "Data analytics platforms",
        "Cloud-based solutions",
        "Legacy system modernization",
        "Custom business tools"
      ]
    },
    {
      title: "AI Services",
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: [
        "AI-powered chatbots & assistants",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision solutions",
        "AI-driven automation",
        "Intelligent data processing"
      ]
    }
  ]

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            From e-commerce platforms to AI-powered solutions, we build cutting-edge software that drives business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, serviceIndex) => (
            <div key={serviceIndex} className={`bg-white rounded-xl p-8 shadow-sm ${serviceIndex === 4 ? 'lg:col-start-2' : ''}`}>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}
