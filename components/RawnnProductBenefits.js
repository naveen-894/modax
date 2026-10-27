import { DollarSign, Lock, Zap, Truck, CreditCard, Heart } from 'lucide-react'
import { RAWNN_HOSTING_COST } from '../lib/constants'

export default function RawnnProductBenefits() {
  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12 text-primary-600" />,
      title: "Own it, don't rent it",
      description: "Monthly platforms and marketplaces keep charging you as you grow. Rawnn is a one-time project fee — no subscription, no commission on your sales, ever. You still pay your own hosting/running costs directly to your hosting provider."
    },
    {
      icon: <Lock className="w-12 h-12 text-primary-600" />,
      title: "Your own servers, your data",
      description: "Your store runs on your own servers, in your business name, on your own domain. Your customer database lives on your own servers, not a shared marketplace platform."
    },
    {
      icon: <Zap className="w-12 h-12 text-primary-600" />,
      title: "Built & set up for your brand",
      description: "We set up a dedicated store for your brand — not a shared template — and have it live in 2–6 weeks, so you skip months of development time."
    },
    {
      icon: <Truck className="w-12 h-12 text-primary-600" />,
      title: "Shipping handled for you",
      description: "Courier booking, pickup, tracking and shipping labels run automatically through Shiprocket — no manual logistics work."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-primary-600" />,
      title: "Payments built in",
      description: "Razorpay checkout for customers — UPI, cards, net banking and Cash on Delivery — handled end to end."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary-600" />,
      title: "Customer trust built in",
      description: "Ratings and reviews with photos, product Q&A, pincode delivery checks and OTP login come standard, so shoppers trust your store before they buy."
    }
  ]

  const compareRows = [
    { label: "Cost", rawnn: "One-time project fee", monthly: "Monthly fees + paid apps", marketplace: "Commission on every order" },
    { label: "Commission on sales", rawnn: "None", monthly: "Transaction fees on some plans", marketplace: "Typically 20–30%" },
    { label: "Running costs", rawnn: `Your own hosting only (${RAWNN_HOSTING_COST})`, monthly: "Included in monthly fee", marketplace: "Included in commission" },
    { label: "Where it runs", rawnn: "Your own servers, in your business name", monthly: "Their servers", marketplace: "Their platform" },
    { label: "Customer data", rawnn: "Lives on your own servers", monthly: "Stored on their platform", marketplace: "Owned by the marketplace" },
    { label: "Your brand", rawnn: "Fully custom, your domain", monthly: "Theme-based", marketplace: "Listed alongside competitors" },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Why owners choose Rawnn
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            Be one of our first launch partners: a dedicated store built for your brand, with hands-on setup from the founder.
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

        {/* Own it, don't rent it comparison */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
              Own it, don&apos;t rent it
            </h3>
            <p className="text-lg text-ink-500 max-w-2xl mx-auto">
              With Rawnn, you pay once and the platform is yours.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-separate border-spacing-0 bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-ink-100 min-w-[640px]">
              <thead>
                <tr>
                  <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-ink-500 bg-ink-50 border-b border-ink-100"></th>
                  <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-primary-800 bg-primary-100 border-b border-ink-100">Rawnn</th>
                  <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-ink-500 bg-ink-50 border-b border-ink-100">Monthly subscription platforms</th>
                  <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-ink-500 bg-ink-50 border-b border-ink-100">Marketplaces</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, index) => (
                  <tr key={index}>
                    <th scope="row" className="p-4 text-left text-sm font-semibold text-ink-700 border-b border-ink-100">{row.label}</th>
                    <td className="p-4 text-sm font-bold text-ink-900 bg-primary-50 border-b border-ink-100">{row.rawnn}</td>
                    <td className="p-4 text-sm text-ink-500 border-b border-ink-100">{row.monthly}</td>
                    <td className="p-4 text-sm text-ink-500 border-b border-ink-100">{row.marketplace}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Platform Highlights */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
              Built as one connected platform
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">3 panels</div>
              <div className="text-ink-700 mb-4">Customer site, store admin, owner control</div>
              <p className="text-sm text-ink-500">One platform for your customer-facing store, daily operations, and full owner oversight.</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">Auto</div>
              <div className="text-ink-700 mb-4">Payments, shipping & returns</div>
              <p className="text-sm text-ink-500">Razorpay and Shiprocket are integrated end to end, so the operational heavy-lifting is handled for you.</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">₹0</div>
              <div className="text-ink-700 mb-4">Commission on every sale</div>
              <p className="text-sm text-ink-500">One-time project fee, then it&apos;s yours — no recurring platform fees or commission, ever.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
