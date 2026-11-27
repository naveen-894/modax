'use client'

import { useState } from 'react'
import { CheckCircle2, ChevronDown } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '₹99,000',
    tagline: 'An ecommerce website under ₹1 lakh — single SKU store, does it all with one login',
    features: [
      'Full storefront: catalog, search & filters, cart, checkout',
      'Razorpay (UPI/cards/netbanking) + Cash on Delivery',
      'OTP login, order tracking, reviews, wishlist',
      'One admin login — no roles, does everything',
      'Manual product publish, per-variant inventory',
    ],
    allFeatures: [
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
      'Shiprocket auto-shipping (automated courier booking & tracking)',
    ],
    allFeatures: [
      'Everything in Basic, plus:',
      'Owner / Staff roles in one Admin Panel',
      'AI-assisted product listing from a photo',
      'Coupons, review moderation, sales analytics',
      'Bulk product upload via Excel/CSV',
      'Shiprocket auto-shipping (automated courier booking & tracking)',
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
    ],
    allFeatures: [
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

export default function RawnnProductPricing() {
  const [showCompare, setShowCompare] = useState(false)

  return (
    <section id="pricing" className="section-padding py-10 sm:py-14 lg:py-16 bg-white">
      <div className="container-max">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modax-ink mb-4">
            Choose your plan
          </h2>
          <p className="text-lg sm:text-xl text-modax-body max-w-3xl mx-auto">
            A one-time project fee, tiered by features — not by how many products you sell. Pick the plan that matches where your brand is today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-5 sm:p-8 h-full flex flex-col ${
                plan.highlight
                  ? 'bg-modax-blue-tint-2 ring-2 ring-modax-blue shadow-lg md:-translate-y-2'
                  : 'bg-white ring-1 ring-modax-border-lt shadow-sm'
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-modax-accent-dark text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
                  Most popular
                </span>
              )}

              <h3 className="text-xl font-bold text-modax-ink mb-1">{plan.name}</h3>
              <p className="text-sm text-modax-body mb-3 sm:mb-5 md:min-h-[2.5rem]">{plan.tagline}</p>

              <div className="mb-6">
                <span className="inline-block text-3xl font-bold text-modax-navy bg-modax-gold-tint px-3 py-1 rounded-md">{plan.price}</span>
                <span className="text-sm text-modax-body ml-2">one-time</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, index) => {
                  const isLeadIn = feature.endsWith(':')
                  return (
                    <li
                      key={index}
                      className={`flex items-start text-sm ${isLeadIn ? 'text-modax-body font-semibold' : 'text-modax-body'}`}
                    >
                      {!isLeadIn && <CheckCircle2 className="w-4 h-4 text-modax-blue-deep mr-3 mt-0.5 flex-shrink-0" />}
                      {feature}
                    </li>
                  )
                })}
              </ul>

              <a href="#demo" className={`${plan.cta} w-full text-center`}>
                Get started with {plan.name}
              </a>
            </div>
          ))}
        </div>

        <p className="text-sm text-modax-body text-center max-w-2xl mx-auto mt-10">
          Source code handed over on final payment, every plan. Hosting, domain/SSL, and payment/SMS/courier charges are billed at actuals — not included in the package price above.
        </p>

        {/* Compare all features — collapsed by default */}
        <div className="mt-8 max-w-4xl mx-auto">
          <button
            type="button"
            onClick={() => setShowCompare((prev) => !prev)}
            aria-expanded={showCompare}
            className="w-full flex items-center justify-between gap-4 bg-modax-blue-tint-2 rounded-xl px-6 py-4 shadow-sm min-h-[44px]"
          >
            <span className="font-semibold text-modax-ink">Compare all features</span>
            <ChevronDown className={`w-5 h-5 text-modax-blue-deep flex-shrink-0 transition-transform duration-200 ${showCompare ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>

          {/* Always rendered in the DOM (so search engines can index it) —
             only the CSS height/opacity is toggled, content never unmounts. */}
          <div className={`overflow-hidden transition-all duration-300 ${showCompare ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-modax-border-lt p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {plans.map((plan) => (
                  <div key={plan.name}>
                    <h4 className="text-sm font-bold text-modax-ink mb-3">{plan.name}</h4>
                    <ul className="space-y-2 mb-5">
                      {plan.allFeatures.map((feature, index) => {
                        const isLeadIn = feature.endsWith(':')
                        return (
                          <li
                            key={index}
                            className={`flex items-start text-sm ${isLeadIn ? 'text-modax-body font-semibold' : 'text-modax-body'}`}
                          >
                            {!isLeadIn && <CheckCircle2 className="w-4 h-4 text-modax-blue-deep mr-2 mt-0.5 flex-shrink-0" />}
                            {feature}
                          </li>
                        )
                      })}
                    </ul>
                    <div className="border-t border-modax-border-lt pt-4 space-y-1.5">
                      {plan.footer.map((line, index) => (
                        <p key={index} className="text-xs text-modax-body">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
