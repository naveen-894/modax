export default function RawnnProductBenefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Launch Without a Developer",
      description: "Upload a product photo and AI drafts the title, description, specs and sizes. Review, publish, and your store is live."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Get Discovered Locally",
      description: "The customer app is location-aware, so nearby shoppers find your products and store without you needing to run ads."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Quality-Controlled Catalog",
      description: "Every listing moves through an approval pipeline before going live, keeping the catalog consistent across every retailer."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Payments & Payouts Built In",
      description: "Razorpay checkout for customers plus a settlement dashboard so you can track payouts without switching tools."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Keep Conversations On-Platform",
      description: "Built-in chat lets customers message you directly and tag the exact product they're asking about — no phone numbers to exchange."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Mobile-First, Passwordless",
      description: "Phone + OTP login across both the retailer and shopper apps means no passwords to reset and no friction signing in on the go."
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Why Fashion Brands Choose Rawnn
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            An AI-assisted retailer dashboard paired with a location-aware shopping app —
            built to get fashion brands online without a developer or a marketing budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-ink-100 hover:border-primary-200">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-50 rounded-lg mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-ink-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-ink-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Platform Highlights */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
              Built as One Connected Platform
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">AI</div>
              <div className="text-ink-700 mb-4">Drafts your product listing</div>
              <p className="text-sm text-ink-500">One photo in, a title, description, specs and sizes out — ready to review and publish.</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">2 apps</div>
              <div className="text-ink-700 mb-4">Retailer dashboard + customer app</div>
              <p className="text-sm text-ink-500">One platform for sellers to manage listings and orders, and for shoppers to discover and buy.</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">8-stage</div>
              <div className="text-ink-700 mb-4">Product approval pipeline</div>
              <p className="text-sm text-ink-500">Every listing is reviewed before it's published, keeping the catalog consistent and trustworthy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
