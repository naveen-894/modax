'use client'

import { useState } from 'react'
import { Globe, LayoutDashboard, CreditCard, Truck, Camera, Boxes, RefreshCw, Star, BarChart3, CheckCircle2, ChevronDown } from 'lucide-react'
import ZoomableImage from './ZoomableImage'

const mainFeatures = [
  {
    icon: <Globe className="w-8 h-8 text-modax-blue-deep" />,
    title: 'Customer storefront',
    badge: 'All plans',
    description: 'A fast, beautiful store your customers shop on, from phone or desktop — built on your own domain, with your own branding.',
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-modax-blue-deep" />,
    title: 'One Admin Panel',
    badge: 'All plans',
    description: 'A store admin panel plus a separate owner control panel, not bolt-on apps.',
  },
  {
    icon: <Camera className="w-8 h-8 text-modax-blue-deep" />,
    title: 'AI product listing',
    badge: 'Growth & Premium',
    description: 'Upload a photo and AI fills in the product title, description, specs and sizes/variants for you to review.',
  },
  {
    icon: <Truck className="w-8 h-8 text-modax-blue-deep" />,
    title: 'Shiprocket-integrated shipping',
    badge: 'Basic: manual · Growth & Premium: automatic',
    description: 'Manual tracking entry on Basic; Growth and Premium add Shiprocket-automated courier booking, labels, tracking and RTO handling.',
  },
]

const alsoIncluded = [
  { icon: <CreditCard className="w-6 h-6 text-modax-blue-deep" />, title: 'Payments ready', tag: null },
  { icon: <Boxes className="w-6 h-6 text-modax-blue-deep" />, title: 'Variant-level inventory', tag: null },
  { icon: <RefreshCw className="w-6 h-6 text-modax-blue-deep" />, title: 'Easy returns', tag: null },
  { icon: <Star className="w-6 h-6 text-modax-blue-deep" />, title: 'Customer trust built in', tag: null },
  { icon: <BarChart3 className="w-6 h-6 text-modax-blue-deep" />, title: 'Reporting & analytics', tag: 'Growth+' },
]

const featureGroups = [
  {
    heading: 'Storefront & catalog',
    cards: [
      { title: 'Customer storefront', details: ['Home page, categories & featured/trending products', 'Search with autocomplete, filters & sorting', 'Product gallery, variants, price & stock display', 'Guest cart, address book, quick checkout', 'Wishlist, ratings & reviews with photos'] },
      { title: 'AI product listing', details: ['AI-drafted title & description', 'Auto-suggested specs & sizes/variants', 'Manual entry also supported on every plan', 'Draft to published in minutes'] },
      { title: 'Variant-level inventory', details: ['Per-variant stock tracking', 'Low-stock & out-of-stock tabs', 'Edit stock directly', 'Add missing sizes/variants on the fly'] },
    ],
  },
  {
    heading: 'Operations & fulfillment',
    cards: [
      { title: 'One Admin Panel', details: ['Store profile, catalog taxonomy & product management', 'Products publish immediately — no approval step', 'Per-variant inventory with low-stock alerts', 'Owner vs Staff roles (Growth & Premium)', 'Custom roles & unlimited staff logins (Premium)'] },
      { title: 'Shiprocket-integrated shipping', details: ['Manual courier name & tracking entry (Basic)', 'Automatic courier booking & pickup (Growth & Premium)', 'Live tracking & downloadable labels (Growth & Premium)', 'RTO handling (Growth & Premium)'] },
      { title: 'Easy returns', details: ['Customer-initiated cancel/return/exchange requests', 'Store-side approve & action from the Admin Panel', 'Refund status tracking', 'Tied to full order history'] },
    ],
  },
  {
    heading: 'Payments, trust & reporting',
    cards: [
      { title: 'Payments ready', details: ['UPI, cards & net banking via Razorpay', 'Cash on Delivery (COD) option', 'Refund status tracking', 'Coupon & discount codes (Growth & Premium)'] },
      { title: 'Customer trust built in', details: ['Ratings & reviews with photos', 'Photo & video reviews with moderation (Growth & Premium)', 'Pincode delivery check', 'OTP sign-up and login'] },
      { title: 'Reporting & analytics', details: ['Sales analytics: revenue, top sellers, low-stock alerts (Growth & Premium)', 'Bulk product upload via Excel/CSV (Growth & Premium)', 'Advanced analytics, repeat-rate & exportable reports (Premium)', 'Audit log of staff actions (Premium)'] },
    ],
  },
]

export default function RawnnProductFeatures() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="features" className="section-padding py-10 sm:py-14 lg:py-16 bg-white">
      <div className="container-max">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modax-ink mb-4">
            Everything your store needs, built in
          </h2>
          <p className="text-lg sm:text-xl text-modax-body max-w-3xl mx-auto">
            Rawnn is built for established businesses running their own store — not a marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          {mainFeatures.map((feature) => (
            <div key={feature.title} className="bg-modax-blue-tint-2 rounded-xl p-5 sm:p-8 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-modax-blue-tint rounded-lg flex items-center justify-center mr-4 sm:mr-6">
                  {feature.icon}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-modax-ink">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-white text-modax-accent-dark">
                    {feature.badge}
                  </span>
                </div>
              </div>
              <p className="text-modax-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Also included — compact strip */}
        <div className="mt-8">
          <p className="text-center text-sm font-semibold text-modax-body uppercase tracking-wide mb-4">Also included</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {alsoIncluded.map((item, index) => (
              <div
                key={item.title}
                className={`bg-modax-blue-tint-2 rounded-lg p-4 shadow-sm flex items-center gap-3 ${
                  index === alsoIncluded.length - 1 ? 'col-span-2 sm:col-span-1' : ''
                }`}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-modax-blue-tint rounded-md flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-modax-ink leading-snug">{item.title}</p>
                  {item.tag && (
                    <span className="inline-block mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-modax-accent-dark bg-white px-1.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See all features — collapsed by default */}
        <div className="mt-8 max-w-4xl mx-auto">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="w-full flex items-center justify-between gap-4 bg-modax-blue-tint-2 rounded-xl px-6 py-4 shadow-sm min-h-[44px]"
          >
            <span className="font-semibold text-modax-ink">See all features</span>
            <ChevronDown className={`w-5 h-5 text-modax-blue-deep flex-shrink-0 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} aria-hidden="true" />
          </button>

          {/* Always rendered in the DOM (so search engines can index it) —
             only the CSS height/opacity is toggled, content never unmounts. */}
          <div className={`overflow-hidden transition-all duration-300 ${showAll ? 'max-h-[3000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="bg-modax-blue-tint-2 rounded-xl shadow-sm p-6 sm:p-8 space-y-8">
              {featureGroups.map((group) => (
                <div key={group.heading}>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-modax-blue-deep mb-4">{group.heading}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {group.cards.map((card) => (
                      <div key={card.title}>
                        <p className="text-sm font-semibold text-modax-ink mb-2">{card.title}</p>
                        <ul className="space-y-1.5">
                          {card.details.map((detail) => (
                            <li key={detail} className="flex items-start text-sm text-modax-body">
                              <CheckCircle2 className="w-4 h-4 text-modax-blue-deep mr-2 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admin panel screenshots */}
        <div className="mt-6 sm:mt-8">
          <p className="text-center text-sm font-semibold text-modax-body uppercase tracking-wide mb-4 sm:mb-6">A peek at the Admin Panel</p>
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <div className="rounded-xl bg-modax-blue-tint-2 shadow-sm ring-1 ring-modax-border-lt overflow-hidden">
              <div className="hidden sm:flex items-center gap-2 px-4 py-3 bg-modax-border-lt border-b border-modax-border-lt">
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
              </div>
              <div className="aspect-[16/9] relative bg-white">
                <ZoomableImage
                  src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/c0228362-c722-4794-9173-788ba8e2b5a4.png"
                  alt="Admin Panel — product catalogue"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
              <p className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold text-modax-body border-t border-modax-border-lt">Products — publish, price and discount in bulk</p>
            </div>
            <div className="rounded-xl bg-modax-blue-tint-2 shadow-sm ring-1 ring-modax-border-lt overflow-hidden">
              <div className="hidden sm:flex items-center gap-2 px-4 py-3 bg-modax-border-lt border-b border-modax-border-lt">
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
              </div>
              <div className="aspect-[16/9] relative bg-white">
                <ZoomableImage
                  src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/410ad794-fa2c-4330-91f3-1a541b0c5f27.png"
                  alt="Admin Panel — variant-level inventory"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <p className="px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-semibold text-modax-body border-t border-modax-border-lt">Inventory — stock tracked down to the size/variant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
