import { Zap, DollarSign, FileText, LifeBuoy, Heart, Lock, CheckCircle2 } from 'lucide-react'

export default function RawnnBenefits() {
  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-primary-600" />,
      title: "Rapid Setup & Deployment",
      description: "Get your fashion store live in just 1 week with our streamlined setup process. Pre-built templates and automated configuration save you weeks of development time."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary-600" />,
      title: "Complete Control & Ownership",
      description: "Own your data and maintain complete control over your business. No vendor lock-in or hidden fees. Customize every aspect of your store to match your brand perfectly."
    },
    {
      icon: <FileText className="w-12 h-12 text-primary-600" />,
      title: "Built-in Business Intelligence",
      description: "Make informed decisions with comprehensive analytics and reporting. Track sales trends, customer behavior, and inventory performance with detailed insights and dashboards."
    },
    {
      icon: <LifeBuoy className="w-12 h-12 text-primary-600" />,
      title: "Dedicated Fashion Support",
      description: "Get direct support from our fashion industry experts. Regular updates, training sessions, and priority support ensure your business runs smoothly 24/7."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary-600" />,
      title: "Fashion-Specific Services",
      description: "Designed from the ground up for fashion brands with features like size variants, style guides, lookbooks, and fashion-specific workflows that other platforms lack."
    },
    {
      icon: <Lock className="w-12 h-12 text-primary-600" />,
      title: "Enterprise-Grade Security",
      description: "Bank-level security with SSL encryption, PCI compliance, regular security audits, and advanced fraud detection to protect your business and customers."
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
            Join hundreds of fashion brands that have transformed their online presence with Rawnn's comprehensive e-commerce solution.
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

        {/* Key Capabilities */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
              Complete E-commerce Operations
            </h3>
            <p className="text-lg text-ink-500">
              Everything you need to run a successful online store
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-bold text-ink-900 mb-4">Customer Experience</h4>
              <ul className="space-y-2 text-sm text-ink-500">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Complete order placement flow
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Secure payment processing
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Order tracking & notifications
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Returns & exchange requests
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Order cancellation options
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Product ratings & reviews
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Product Q&A system
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-lg font-bold text-ink-900 mb-4">Admin Operations</h4>
              <ul className="space-y-2 text-sm text-ink-500">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Complete product management
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Order processing & management
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Return & exchange handling
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Payment reconciliation
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Customer service tools
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Review & content moderation
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  Q&A management system
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
