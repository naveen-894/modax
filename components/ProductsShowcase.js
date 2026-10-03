import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import Reveal from './motion/Reveal'

export default function ProductsShowcase() {
  const products = [
    {
      id: "ai-resume-matcher",
      name: "Screenr",
      tagline: "AI Resume & Job Description Matching",
      description: "An AI tool that instantly tells you how well a candidate's resume fits a job. Upload a resume and a job description and in about 15 seconds get a clear 0-100% match score with a plain-English explanation — built for recruiters and hiring managers, and just as useful for job seekers checking their own resume before they apply.",
      features: [
        "AI resume & JD parsing",
        "Explainable 0-100% match score",
        "Skills gap analysis",
        "Live streaming analysis",
        "Follow-up chat about any match",
        "PDF, Word & text uploads",
        "Saved match history",
        "Free first match, no signup"
      ],
      benefits: [
        "Screen candidates in seconds, not hours",
        "Consistent, explainable scoring for every candidate",
        "Works for recruiters, hiring managers, and job seekers alike",
        "Real AI understanding, not a keyword search",
        "Ask follow-up questions about any match"
      ],
      badges: ["Lead Product", "AI Powered", "Hiring & Recruitment"],
      cta: {
        primary: "Try it free",
        secondary: "View Product Details",
        primaryLink: "https://ai-resume-matcher-fed.vercel.app/",
        secondaryLink: "/products/ai-resume-matcher"
      }
    },
    {
      id: "rawnn",
      name: "Rawnn",
      tagline: "AI-Assisted Commerce Platform for Fashion Brands",
      description: "A two-sided commerce platform for fashion brands: an AI-assisted retailer dashboard that drafts product titles, descriptions and sizes, paired with a location-aware customer app that surfaces nearby stores to shoppers.",
      features: [
        "AI-drafted product titles, descriptions & sizes",
        "Per-size inventory with delivery & pickup toggles",
        "Razorpay payments & settlement dashboard",
        "Returns & exchange handling",
        "In-app customer-retailer chat",
        "Ratings & moderated reviews",
        "Location-based discovery",
        "Phone & OTP login"
      ],
      benefits: [
        "List a product in minutes with AI-drafted titles, descriptions & sizes",
        "Get discovered by nearby shoppers through the location-aware customer app",
        "Every listing passes an 8-stage approval pipeline before going live",
        "Payments and payouts handled through Razorpay, end to end",
        "Passwordless phone + OTP login across both apps"
      ],
      badges: ["AI-Assisted Commerce", "Fashion Focused", "Built by Modax"],
      cta: {
        primary: "Learn more",
        secondary: "Request a demo",
        primaryLink: "/products/rawnn",
        secondaryLink: "/products/rawnn#demo"
      }
    }
  ]

  return (
    <section id="products" className="section-padding bg-ink-50">
      <div className="container-max">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            AI products built by Modax
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            Purpose-built AI products that solve real business problems. Each product is developed,
            owned, and maintained by Modax to ensure reliability and continuous improvement.
          </p>
        </Reveal>

        <div className="max-w-6xl mx-auto space-y-16">
          {products.map((product, index) => (
            <Reveal key={index} delay={index * 0.1} className="bg-white rounded-2xl shadow-xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
              {/* Product Header */}
              <div className="bg-ink-900 text-white p-8 md:p-12 relative overflow-hidden">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {product.name}
                  </h3>
                  <p className="text-xl text-primary-100 mb-6">
                    {product.tagline}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {product.badges.map((badge, badgeIndex) => (
                      <span key={badgeIndex} className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Description & Benefits */}
                  <div>
                    <h4 className="text-2xl font-bold text-ink-900 mb-4">What is {product.name}?</h4>
                    <p className="text-ink-500 text-lg leading-relaxed mb-8">
                      {product.description}
                    </p>

                    <h4 className="text-xl font-bold text-ink-900 mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-ink-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-bold text-ink-900 mb-4">Core Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center bg-ink-50 rounded-lg p-3">
                          <CheckCircle2 className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                          <span className="text-ink-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <a
                        href={product.cta.primaryLink}
                        target={product.cta.primaryLink.startsWith('http') ? '_blank' : undefined}
                        rel={product.cta.primaryLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="btn-primary text-center flex-1"
                      >
                        {product.cta.primary}
                      </a>
                      <Link href={product.cta.secondaryLink} className="btn-secondary text-center flex-1">
                        {product.cta.secondary}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="bg-ink-50 px-8 md:px-12 py-6 border-t border-ink-200">
                <p className="text-sm text-ink-500 text-center">
                  <span className="font-medium">{product.name}</span> is a product built and owned by Modax.
                  We maintain full control over development, security, and feature roadmap.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
