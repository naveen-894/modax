import { UserPlus, Package, CreditCard, Zap } from 'lucide-react'

export default function RawnnProductHowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Sign Up with Your Phone",
      description: "Enter your number and verify with a 4-digit OTP. No passwords, no lengthy onboarding forms.",
      icon: <UserPlus className="w-8 h-8 text-primary-600" />
    },
    {
      step: "02",
      title: "Snap a Photo, Let AI List It",
      description: "Pick a category and upload a product photo. AI drafts the title, description, specs and sizes for you to review and adjust.",
      icon: <Package className="w-8 h-8 text-primary-600" />
    },
    {
      step: "03",
      title: "Get Approved & Go Live",
      description: "Your listing moves through the approval pipeline, then publishes to shoppers browsing nearby in the customer app.",
      icon: <CreditCard className="w-8 h-8 text-primary-600" />
    },
    {
      step: "04",
      title: "Sell, Chat & Get Paid",
      description: "Manage orders and returns, chat with customers about specific products, and track payouts through Razorpay — all from one dashboard.",
      icon: <Zap className="w-8 h-8 text-primary-600" />
    }
  ]

  return (
    <section className="section-padding bg-ink-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            How Rawnn Works
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            From phone sign-up to your first sale, in 4 steps — with AI doing the heavy lifting on listings.
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
            Ready to Start Selling Online?
          </h3>
          <p className="text-ink-500 mb-8 max-w-2xl mx-auto">
            Sign up with your phone number and have your first AI-drafted listing ready in minutes.
          </p>
          <a href="#demo" className="btn-primary text-lg px-8 py-4">
            Start Your Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}
