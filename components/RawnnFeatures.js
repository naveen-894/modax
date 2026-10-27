import { Globe, LayoutDashboard, ShieldCheck, CreditCard, Truck, Camera, Boxes, RefreshCw, Star, CheckCircle2 } from 'lucide-react'
import ZoomableImage from './ZoomableImage'

export default function RawnnFeatures() {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      title: "Customer website",
      description: "A fast, beautiful store your customers shop on, from phone or desktop — built on your own domain, with your own branding.",
      details: ["Home page with banners & collections", "Search, filters and sorting", "Product pages with photos, size charts & reviews", "Wishlist, cart and quick checkout", "Order tracking, returns and OTP login"]
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 text-primary-600" />,
      title: "Store admin panel",
      description: "Run daily operations from one dashboard — products, stock, orders and returns, without needing a developer.",
      details: ["3-step product wizard", "Publish, hold or discontinue products in bulk", "Orders by stage with bulk updates", "Shipping labels and tracking", "Support queries for you and your staff"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-600" />,
      title: "Owner control panel",
      description: "Full oversight of the business — categories, product approval, shipping and refunds, all in one place.",
      details: ["Create & organise categories", "Approve or reject products before they go live", "Track every order and shipment", "View and action all refunds", "Owner-only secure login"]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary-600" />,
      title: "Payments ready",
      description: "Razorpay comes integrated from day one, so payments work out of the box.",
      details: ["UPI, cards & net banking", "Cash on Delivery", "Order confirmation & receipts", "Payment reconciliation", "Coupon & discount support"]
    },
    {
      icon: <Truck className="w-8 h-8 text-primary-600" />,
      title: "Shipping on autopilot",
      description: "Automatic courier booking, pickup and tracking via Shiprocket — no manual logistics work.",
      details: ["Automatic courier booking & pickup", "Live tracking updates", "Downloadable shipping labels", "Full shipment activity history"]
    },
    {
      icon: <Camera className="w-8 h-8 text-primary-600" />,
      title: "AI product listing",
      description: "Upload a photo and AI fills in the product title, description, specs and sizes/variants for you to review.",
      details: ["AI-drafted title & description", "Auto-suggested specs & sizes/variants", "Manual entry also supported", "Draft to published in minutes"]
    },
    {
      icon: <Boxes className="w-8 h-8 text-primary-600" />,
      title: "Variant-level inventory",
      description: "Stock tracked for every size, colour, weight or pack, with low-stock and out-of-stock alerts so you never oversell.",
      details: ["Per-variant stock tracking", "Low-stock & out-of-stock tabs", "Edit stock directly", "Add missing sizes/variants on the fly"]
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary-600" />,
      title: "Easy returns",
      description: "Customers can cancel or return orders themselves; you manage every request from one place.",
      details: ["Customer-initiated returns", "Approval workflow for retailers", "Refund status tracking", "Tied to full order history"]
    },
    {
      icon: <Star className="w-8 h-8 text-primary-600" />,
      title: "Customer trust built in",
      description: "Ratings, reviews and Q&A come standard, so shoppers trust your store before they buy.",
      details: ["Ratings & reviews with photos", "Product Q&A", "Pincode delivery check", "OTP sign-up and login"]
    }
  ]

  return (
    <section id="features" className="section-padding bg-ink-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Everything your store needs, built in
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            Rawnn is built for established businesses running their own store — not a marketplace. The operational heavy-lifting comes ready-made.
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
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-6">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-ink-500 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-ink-100 pt-6">
                <h4 className="text-sm font-semibold text-ink-900 mb-3 uppercase tracking-wide">Key capabilities:</h4>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-ink-500">
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
          <p className="text-center text-sm font-semibold text-ink-500 uppercase tracking-wide mb-6">A peek at the Store Admin Panel</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-white shadow-sm ring-1 ring-ink-100 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-ink-100 border-b border-ink-200">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
              </div>
              <ZoomableImage
                src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/c0228362-c722-4794-9173-788ba8e2b5a4.png"
                alt="Store Admin Panel — product catalogue"
                className="w-full h-auto"
              />
              <p className="px-4 py-3 text-sm font-semibold text-ink-700 border-t border-ink-100">Products — publish, price and discount in bulk</p>
            </div>
            <div className="rounded-xl bg-white shadow-sm ring-1 ring-ink-100 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-ink-100 border-b border-ink-200">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
              </div>
              <ZoomableImage
                src="https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/410ad794-fa2c-4330-91f3-1a541b0c5f27.png"
                alt="Store admin panel — variant-level inventory"
                className="w-full h-auto"
              />
              <p className="px-4 py-3 text-sm font-semibold text-ink-700 border-t border-ink-100">Inventory — stock tracked down to the size/variant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
