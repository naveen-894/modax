import { ShoppingBag, Package, RefreshCw, CreditCard, Star, HelpCircle, BarChart3, Settings, CheckCircle2 } from 'lucide-react'

export default function RawnnProductFeatures() {
  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8 text-primary-600" />,
      title: "AI-Powered Product Listings",
      description: "Upload a photo of your product and AI drafts the title, description, specs and sizes for you to review — no copywriting required.",
      details: ["AI-generated title & description", "Auto-suggested specs & sizes", "Category-aware defaults", "Manual entry also supported", "Draft to published in minutes"]
    },
    {
      icon: <Package className="w-8 h-8 text-primary-600" />,
      title: "Flexible Inventory, Delivery & Pickup",
      description: "Per-size stock variants with delivery and in-store pickup controlled individually on every product, backed by an 8-stage approval pipeline.",
      details: ["Per-size stock variants", "Delivery & in-store pickup toggles", "Real-time stock tracking", "Shipping dimensions per product", "New → Under Review → Approved → Published pipeline"]
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary-600" />,
      title: "Returns & Exchanges",
      description: "Returns and exchanges are configurable per product, with requests submitted by customers and managed by retailers once online selling is enabled.",
      details: ["Enabled per product", "Customer-initiated requests", "Retailer-side approval", "Tied to order history"]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary-600" />,
      title: "Razorpay Payments & Settlements",
      description: "Integrated Razorpay checkout for customers, paired with a settlement dashboard so retailers can track payouts without leaving the platform.",
      details: ["Razorpay checkout for customers", "Retailer settlement dashboard", "Coupon & discount support", "Order status tracking"]
    },
    {
      icon: <Star className="w-8 h-8 text-primary-600" />,
      title: "Ratings & Reviews",
      description: "Customer review system with star ratings and a moderation pipeline, so every review is checked before it affects a product's public rating.",
      details: ["Star ratings per product", "Moderated review pipeline", "Review counts on product cards", "Builds buyer trust"]
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-primary-600" />,
      title: "In-App Customer Chat",
      description: "Direct messaging between customers and retailers, with the option to tag a specific product, so questions never leave the platform.",
      details: ["Customer ↔ retailer messaging", "Tag specific products in chat", "One chat session per customer-retailer pair", "Keeps enquiries on-platform"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary-600" />,
      title: "Location-Based Discovery",
      description: "The customer app is location-aware, surfacing nearby retailers and products first so shoppers can find you without needing your store name.",
      details: ["Google Maps-powered location search", "Nearby retailers surfaced first", "Address autofill at checkout", "Dedicated store page per retailer"]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary-600" />,
      title: "Phone & OTP Login",
      description: "Passwordless sign-in for both retailers and shoppers — enter your number, verify with a 4-digit OTP, and you're in.",
      details: ["10-digit phone + 4-digit OTP", "No passwords to manage", "JWT-based sessions", "Used across the retailer & customer apps"]
    }
  ]

  return (
    <section id="features" className="section-padding bg-ink-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Everything You Need to Sell Online
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            Rawnn pairs an AI-assisted retailer dashboard with a location-aware shopping app,
            so fashion brands can list products in minutes and get discovered by nearby customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
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
      </div>
    </section>
  )
}
