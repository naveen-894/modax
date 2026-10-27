import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import Reveal from './motion/Reveal'
import { RAWNN_STARTING_PRICE, SCREENR_URL } from '../lib/constants'

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
      // TODO: no Screenr product screenshot exists in the codebase yet — add one
      // (e.g. the match-score result screen) and set `screenshot` below, matching
      // the Rawnn card's admin panel screenshot.
      screenshot: null,
      cta: {
        primary: "Try it free",
        secondary: "View details",
        primaryLink: SCREENR_URL,
        secondaryLink: "/products/ai-resume-matcher"
      },
      footerNote: "Screenr is a product built and owned by Modax. We maintain full control over development, security, and feature roadmap."
    },
    {
      id: "rawnn",
      name: "Rawnn",
      tagline: "Own Your Ecommerce Platform, Pay Once",
      description: "A complete, fully owned e-commerce platform for established businesses: a customer website, store admin panel and owner control panel, all in one — on your own servers, with no monthly fees and no commission on your sales.",
      features: [
        "One-time cost — no subscription, no commission",
        "Your own servers, your own domain, your data",
        "AI-drafted product titles, descriptions & sizes/variants",
        "Variant-level inventory (size, colour, weight, pack) with low-stock alerts",
        "Razorpay payments (UPI, cards, net banking, COD)",
        "Shipping on autopilot via Shiprocket",
        "Returns & exchange handling",
        "Ratings, reviews & product Q&A"
      ],
      benefits: [
        "Pay once and keep the platform — no recurring fees or commission from Modax, ever",
        "Launch your own branded store, not a listing on a marketplace",
        "List a product in minutes with AI-drafted titles, descriptions & sizes/variants",
        "Payments and shipping handled end to end through Razorpay & Shiprocket",
        "Live in 2–6 weeks, built and set up for your brand"
      ],
      badges: ["Own It, Don't Rent It", "AI-Assisted Listings", "Built by Modax"],
      screenshot: {
        src: "https://modax-s3.s3.ap-south-1.amazonaws.com/DEV/landing/c0228362-c722-4794-9173-788ba8e2b5a4.png",
        alt: "Rawnn store admin panel — product catalogue",
      },
      cta: {
        primary: "Request a demo",
        secondary: "View details",
        primaryLink: "/products/rawnn#demo",
        secondaryLink: "/products/rawnn"
      },
      footerNote: `Rawnn is built by Modax. You get a full source code licence for your business, running on your own servers; Modax provides updates and support under a separate plan. ${RAWNN_STARTING_PRICE}.`
    }
  ]

  return (
    <section id="products" className="section-padding bg-ink-50">
      <div className="container-max">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Products built by Modax
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            Purpose-built products that solve real business problems — from AI tools to a fully owned ecommerce platform.
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
                {product.screenshot && (
                  <div className="mb-10 rounded-xl bg-ink-50 ring-1 ring-ink-100 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-ink-100 border-b border-ink-200">
                      <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-ink-300" />
                    </div>
                    <img
                      src={product.screenshot.src}
                      alt={product.screenshot.alt}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Description & Benefits */}
                  <div>
                    <h4 className="text-2xl font-bold text-ink-900 mb-4">What is {product.name}?</h4>
                    <p className="text-ink-500 text-lg leading-relaxed mb-8">
                      {product.description}
                    </p>

                    <h4 className="text-xl font-bold text-ink-900 mb-4">Key benefits</h4>
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
                    <h4 className="text-xl font-bold text-ink-900 mb-4">Core features</h4>
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
                  {product.footerNote}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
