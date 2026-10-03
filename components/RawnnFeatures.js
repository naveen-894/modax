import { User, Package, RefreshCw, CreditCard, Settings, Star, HelpCircle, CheckCircle2 } from 'lucide-react'

export default function RawnnFeatures() {
  const features = [
    {
      icon: <User className="w-8 h-8 text-primary-600" />,
      title: "Complete Customer Flow",
      description: "End-to-end customer experience from browsing to post-purchase. Seamless order placement, payment processing, and ongoing support.",
      details: ["Product browsing & selection", "Secure checkout process", "Order tracking & notifications", "Customer account management", "24/7 customer support"]
    },
    {
      icon: <Package className="w-8 h-8 text-primary-600" />,
      title: "Order Management System",
      description: "Complete order lifecycle management from placement to delivery. Handle orders, cancellations, and delivery tracking efficiently.",
      details: ["Order placement & processing", "Order status tracking", "Cancellation handling", "Delivery management", "Order history & records"]
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary-600" />,
      title: "Returns & Exchanges",
      description: "Streamlined returns and exchange process for customers. Easy request submission, approval workflow, and processing management.",
      details: ["Return request system", "Exchange processing", "Refund management", "Return policy enforcement", "Quality inspection workflow"]
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary-600" />,
      title: "Payment Processing",
      description: "Secure and reliable payment processing with multiple gateway support. Handle transactions, refunds, and payment reconciliation.",
      details: ["Multiple payment gateways", "Secure transaction processing", "Refund & cancellation handling", "Payment reconciliation", "Transaction records"]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary-600" />,
      title: "Admin Dashboard",
      description: "Powerful admin interface for managing products, orders, and customer service. Streamlined tools for efficient business operations.",
      details: ["Product management system", "Order processing dashboard", "Return & exchange handling", "Customer service tools", "Business analytics overview"]
    },
    {
      icon: <Package className="w-8 h-8 text-primary-600" />,
      title: "Product Management",
      description: "Comprehensive product catalog management with inventory tracking, categorization, and product information management.",
      details: ["Product catalog management", "Inventory tracking system", "Product categorization", "Pricing management", "Product image handling"]
    },
    {
      icon: <Star className="w-8 h-8 text-primary-600" />,
      title: "Ratings & Reviews System",
      description: "Comprehensive review system allowing customers to rate products and leave detailed reviews. Admin can moderate and respond to reviews.",
      details: ["Star rating system", "Detailed review comments", "Review moderation tools", "Admin response capability", "Review analytics & insights"]
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-primary-600" />,
      title: "Product Q&A System",
      description: "Interactive Q&A system where customers can ask questions about products and get answers from the seller. Full admin control over questions and answers.",
      details: ["Question submission system", "Admin answer management", "Question moderation", "Searchable Q&A archive", "Customer notification system"]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary-600" />,
      title: "Content Moderation Dashboard",
      description: "Complete admin control over user-generated content including reviews, questions, and ratings. Powerful moderation tools to maintain quality and brand standards.",
      details: ["Review approval system", "Question moderation", "Content filtering", "Spam detection", "Bulk moderation actions"]
    }
  ]

  return (
    <section id="features" className="section-padding bg-ink-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Powerful Services Built for Fashion
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            Every feature in Rawnn is designed specifically for fashion brands, understanding the unique challenges and requirements of the fashion industry.
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
                <h4 className="text-sm font-semibold text-ink-900 mb-3 uppercase tracking-wide">Key Capabilities:</h4>
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
