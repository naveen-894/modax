import { UserPlus, Package, CreditCard, Zap } from 'lucide-react'
import { RAWNN_STARTING_PRICE } from '../lib/constants'

export default function RawnnProductHowItWorks() {
  const steps = [
    {
      step: "01",
      title: "We set up your store",
      description: "Book a demo and we build your dedicated storefront, admin panel and owner control panel — set up for your brand, on your own domain and servers, live in 2–6 weeks.",
      icon: <UserPlus className="w-8 h-8 text-primary-600" />
    },
    {
      step: "02",
      title: "Snap a photo, let AI list it",
      description: "Pick a category and upload a product photo. AI drafts the title, description, specs and sizes/variants for you to review and adjust.",
      icon: <Package className="w-8 h-8 text-primary-600" />
    },
    {
      step: "03",
      title: "Get approved & go live",
      description: "Your listing moves through the owner approval pipeline, then publishes straight to your own customer-facing store.",
      icon: <CreditCard className="w-8 h-8 text-primary-600" />
    },
    {
      step: "04",
      title: "Sell & get paid",
      description: "Manage orders, shipping and returns, and track payments through Razorpay — all from one dashboard.",
      icon: <Zap className="w-8 h-8 text-primary-600" />
    }
  ]

  return (
    <section className="section-padding bg-ink-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            How Rawnn works
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            From store setup to your first sale, in 4 steps — you pay once, and the platform is yours to keep.
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
                    <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mr-4">
                      {step.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary-600">{step.step}</div>
                  </div>

                  <h3 className="text-xl font-bold text-ink-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-ink-500 leading-relaxed">
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
          <h3 className="text-2xl font-bold text-ink-900 mb-4">
            Ready to start selling online?
          </h3>
          <p className="text-ink-500 mb-8 max-w-2xl mx-auto">
            Book a demo and we&apos;ll set up your own store, ready for your first AI-drafted listing in minutes. {RAWNN_STARTING_PRICE}.
          </p>
          <a href="#demo" className="btn-primary text-lg px-8 py-4">
            Book a Free Demo
          </a>
        </div>
      </div>
    </section>
  )
}
