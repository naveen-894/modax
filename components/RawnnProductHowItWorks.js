import { UserPlus, Package, CreditCard, Zap } from 'lucide-react'

export default function RawnnProductHowItWorks() {
  const steps = [
    {
      step: "01",
      title: "We set up your store",
      description: "Book a demo and we build your dedicated storefront, admin panel and owner control panel — set up for your brand, on your own domain and servers, live in 2–6 weeks.",
      icon: <UserPlus className="w-8 h-8 text-modax-blue-deep" />
    },
    {
      step: "02",
      title: "Snap a photo, let AI list it",
      description: "Pick a category and upload a product photo, and AI drafts the title, description, specs and sizes/variants for you to review.",
      icon: <Package className="w-8 h-8 text-modax-blue-deep" />
    },
    {
      step: "03",
      title: "Publish & go live",
      description: "Review the draft listing and publish it straight to your own customer-facing store — no approval step in between.",
      icon: <CreditCard className="w-8 h-8 text-modax-blue-deep" />
    },
    {
      step: "04",
      title: "Sell & get paid",
      description: "Manage orders, shipping and returns, and track payments through Razorpay — all from one dashboard.",
      icon: <Zap className="w-8 h-8 text-modax-blue-deep" />
    }
  ]

  return (
    <section className="section-padding py-10 sm:py-14 lg:py-16 bg-modax-blue-tint-2">
      <div className="container-max">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modax-ink mb-4">
            How Rawnn works
          </h2>
          <p className="text-lg sm:text-xl text-modax-body max-w-3xl mx-auto">
            From store setup to your first sale, in 4 steps — you pay once, and the platform is yours to keep.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-modax-border-lt" style={{width: 'calc(100% - 4rem)'}}></div>
                )}

                <div className="bg-white rounded-xl p-3 sm:p-6 shadow-sm h-full">
                  <div className="flex items-center mb-2 sm:mb-4">
                    <div className="w-10 h-10 sm:w-16 sm:h-16 bg-modax-blue-tint rounded-lg flex items-center justify-center mr-2 sm:mr-4">
                      {step.icon}
                    </div>
                    <div className="text-lg sm:text-2xl font-bold text-modax-blue-deep">{step.step}</div>
                  </div>

                  <h3 className="text-sm sm:text-xl font-bold text-modax-ink mb-1.5 sm:mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-base text-modax-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
