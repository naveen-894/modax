import { Zap, DollarSign, FileText, Heart, LifeBuoy, BarChart3 } from 'lucide-react'

export default function RawnnProductBenefits() {
  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-primary-600" />,
      title: "Launch Without a Developer",
      description: "Upload a product photo and AI drafts the title, description, specs and sizes. Review, publish, and your store is live."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary-600" />,
      title: "Get Discovered Locally",
      description: "The customer app is location-aware, so nearby shoppers find your products and store without you needing to run ads."
    },
    {
      icon: <FileText className="w-12 h-12 text-primary-600" />,
      title: "Quality-Controlled Catalog",
      description: "Every listing moves through an approval pipeline before going live, keeping the catalog consistent across every retailer."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary-600" />,
      title: "Payments & Payouts Built In",
      description: "Razorpay checkout for customers plus a settlement dashboard so you can track payouts without switching tools."
    },
    {
      icon: <LifeBuoy className="w-12 h-12 text-primary-600" />,
      title: "Keep Conversations On-Platform",
      description: "Built-in chat lets customers message you directly and tag the exact product they're asking about — no phone numbers to exchange."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary-600" />,
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
