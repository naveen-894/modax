import { CheckCircle2 } from 'lucide-react'

export default function RawnnProductPricing() {
  const plans = [
    {
      name: 'Basic',
      price: '₹99,000',
      tagline: 'Single SKU store, does it all with one login',
      features: [
        'Full storefront: catalog, search & filters, cart, checkout',
        'Razorpay (UPI/cards/netbanking) + Cash on Delivery',
        'OTP login, order tracking, reviews, wishlist',
        'One admin login — no roles, does everything',
        'Manual product publish, per-variant inventory',
        'Manual order & shipping updates, support inbox',
      ],
      footer: ['3–4 weeks delivery', '3 months free support', '2 revision rounds'],
      cta: 'btn-secondary',
      highlight: false,
    },
    {
      name: 'Growth',
      price: '₹1,89,000',
      tagline: 'Growing brand automating ops & adding staff roles',
      features: [
        'Everything in Basic, plus:',
        'Owner / Staff roles in one Admin Panel',
        'AI-assisted product listing from a photo',
        'Coupons, review moderation, sales analytics',
        'Bulk product upload via Excel/CSV',
        'Shiprocket auto-shipping & WhatsApp/SMS order updates',
      ],
      footer: ['5–7 weeks delivery', '6 months free support', '3 revision rounds'],
      cta: 'btn-primary',
      highlight: true,
    },
    {
      name: 'Premium',
      price: '₹2,99,000',
      tagline: 'Established brand, full ops control & reporting',
      features: [
        'Everything in Growth, plus:',
        'Fully custom UI/theme for your brand',
        'Live chat support widget',
        'Custom staff roles & unlimited staff logins',
        'Advanced analytics, exportable reports, audit log',
        'Store-wide config, priority support, large-catalog tuning',
      ],
      footer: ['8–10 weeks delivery', '12 months free support', '5 revision rounds · 1st-year AMC included'],
      cta: 'btn-secondary',
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Choose your plan
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            A one-time project fee, tiered by features — not by how many products you sell. Pick the plan that matches where your brand is today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 h-full flex flex-col ${
                plan.highlight
                  ? 'bg-primary-50 ring-2 ring-primary-600 shadow-lg md:-translate-y-2'
                  : 'bg-white ring-1 ring-ink-100 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
                  Most popular
                </span>
              )}

              <h3 className="text-xl font-bold text-ink-900 mb-1">{plan.name}</h3>
              <p className="text-sm text-ink-500 mb-5 min-h-[2.5rem]">{plan.tagline}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-ink-900">{plan.price}</span>
                <span className="text-sm text-ink-500 ml-2">one-time</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, index) => {
                  const isLeadIn = feature.endsWith(':')
                  return (
                    <li
                      key={index}
                      className={`flex items-start text-sm ${isLeadIn ? 'text-ink-700 font-semibold' : 'text-ink-500'}`}
                    >
                      {!isLeadIn && <CheckCircle2 className="w-4 h-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />}
                      {feature}
                    </li>
                  )
                })}
              </ul>

              <a href="#demo" className={`${plan.cta} w-full text-center mb-6`}>
                Get started with {plan.name}
              </a>

              <div className="border-t border-ink-100 pt-5 space-y-1.5">
                {plan.footer.map((line, index) => (
                  <p key={index} className="text-xs text-ink-500">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-ink-500 text-center max-w-2xl mx-auto mt-12">
          Source code handed over on final payment, every plan. Hosting, domain/SSL, and payment/SMS/courier charges are billed at actuals — not included in the package price above.
        </p>
      </div>
    </section>
  )
}
