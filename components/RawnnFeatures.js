import { Globe, LayoutDashboard, CreditCard, Truck, Camera, Boxes, RefreshCw, Star, BarChart3, CheckCircle2 } from 'lucide-react'
import ZoomableImage from './ZoomableImage'

export default function RawnnFeatures() {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-modax-blue-deep" />,
      title: "Customer storefront",
      badge: "All plans",
      description: "A fast, beautiful store your customers shop on, from phone or desktop — built on your own domain, with your own branding.",
      details: ["Home page, categories & featured/trending products", "Search with autocomplete, filters & sorting", "Product gallery, variants, price & stock display", "Guest cart, address book, quick checkout", "Wishlist, ratings & reviews with photos"]
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 text-modax-blue-deep" />,
      title: "One Admin Panel",
      badge: "All plans",
      description: "Every plan ships with a single Admin Panel for running the business — no separate retailer and owner apps to juggle.",
      details: ["Store profile, catalog taxonomy & product management", "Products publish immediately — no approval step", "Per-variant inventory with low-stock alerts", "Owner vs Staff roles (Growth & Premium)", "Custom roles & unlimited staff logins (Premium)"]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-modax-blue-deep" />,
      title: "Payments ready",
      badge: "All plans",
      description: "Razorpay comes integrated from day one, so payments work out of the box.",
      details: ["UPI, cards & net banking", "Cash on Delivery", "Refund status tracking", "Coupon & discount codes (Growth & Premium)"]
    },
    {
      icon: <Truck className="w-8 h-8 text-modax-blue-deep" />,
      title: "Shipping, your way",
      badge: "Basic: manual · Growth & Premium: automatic",
      description: "Basic keeps shipping simple with manual tracking entry. Growth and Premium automate booking, labels and tracking end-to-end via Shiprocket.",
      details: ["Manual courier name & tracking entry (Basic)", "Automatic courier booking & pickup (Growth & Premium)", "Live tracking & downloadable labels (Growth & Premium)", "RTO handling (Growth & Premium)"]
    },
    {
      icon: <Camera className="w-8 h-8 text-modax-blue-deep" />,
      title: "AI product listing",
      badge: "Growth & Premium",
      description: "Upload a photo and AI fills in the product title, description, specs and sizes/variants for you to review.",
      details: ["AI-drafted title & description", "Auto-suggested specs & sizes/variants", "Manual entry also supported on every plan", "Draft to published in minutes"]
    },
    {
      icon: <Boxes className="w-8 h-8 text-modax-blue-deep" />,
      title: "Variant-level inventory",
      badge: "All plans",
      description: "Stock tracked for every size, colour, weight or pack, with low-stock and out-of-stock alerts so you never oversell.",
      details: ["Per-variant stock tracking", "Low-stock & out-of-stock tabs", "Edit stock directly", "Add missing sizes/variants on the fly"]
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-modax-blue-deep" />,
      title: "Easy returns",
      badge: "All plans",
      description: "Customers can cancel, return or exchange orders themselves; your team actions every request from the Admin Panel.",
      details: ["Customer-initiated cancel/return/exchange requests", "Store-side approve & action from the Admin Panel", "Refund status tracking", "Tied to full order history"]
    },
    {
      icon: <Star className="w-8 h-8 text-modax-blue-deep" />,
      title: "Customer trust built in",
      badge: "All plans",
      description: "Ratings, reviews and Q&A come standard, so shoppers trust your store before they buy.",
      details: ["Ratings & reviews with photos", "Photo & video reviews with moderation (Growth & Premium)", "Pincode delivery check", "OTP sign-up and login"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-modax-blue-deep" />,
      title: "Reporting & analytics",
      badge: "Growth & Premium",
      description: "See how the business is actually doing, not just the day-to-day order queue.",
      details: ["Sales analytics: revenue, top sellers, low-stock alerts (Growth & Premium)", "Bulk product upload via Excel/CSV (Growth & Premium)", "Advanced analytics, repeat-rate & exportable reports (Premium)", "Audit log of staff actions (Premium)"]
    }
  ]

  return (
    <section id="features" className="section-padding bg-modax-blue-tint-2">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modax-ink mb-4">
            Everything your store needs, built in
          </h2>
          <p className="text-lg sm:text-xl text-modax-body max-w-3xl mx-auto">
            Rawnn is built for established businesses running their own store — not a marketplace. The operational heavy-lifting comes ready-made, with automation and reporting unlocked as you move up a plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 ${
                index === features.length - 1 && features.length % 2 !== 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-modax-blue-tint rounded-lg flex items-center justify-center mr-6">
                  {feature.icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-modax-ink">
                      {feature.title}
                    </h3>
                    <span className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                      feature.badge === 'All plans' ? 'bg-modax-blue-tint text-modax-blue-deep' : 'bg-modax-gold-tint text-modax-navy'
                    }`}>
                      {feature.badge}
                    </span>
                  </div>
                  <p className="text-modax-body mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-modax-border-lt pt-6">
                <h4 className="text-sm font-semibold text-modax-ink mb-3 uppercase tracking-wide">Key capabilities:</h4>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-modax-body">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Admin panel screenshots */}
        <div className="mt-16">
          <p className="text-center text-sm font-semibold text-modax-body uppercase tracking-wide mb-6">A peek at the Admin Panel</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white shadow-sm ring-1 ring-modax-border-lt overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-modax-border-lt border-b border-modax-border-lt">
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
              </div>
              <ZoomableImage
                src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/c0228362-c722-4794-9173-788ba8e2b5a4.png"
                alt="Admin Panel — product catalogue"
                className="w-full h-auto"
              />
              <p className="px-4 py-3 text-sm font-semibold text-modax-body border-t border-modax-border-lt">Products — publish, price and discount in bulk</p>
            </div>
            <div className="rounded-xl bg-white shadow-sm ring-1 ring-modax-border-lt overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-modax-border-lt border-b border-modax-border-lt">
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
              </div>
              <ZoomableImage
                src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/410ad794-fa2c-4330-91f3-1a541b0c5f27.png"
                alt="Admin Panel — variant-level inventory"
                className="w-full h-auto"
              />
              <p className="px-4 py-3 text-sm font-semibold text-modax-body border-t border-modax-border-lt">Inventory — stock tracked down to the size/variant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
