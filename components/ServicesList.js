import Link from 'next/link'
import { Globe, Smartphone, ShoppingBag, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'

export default function ServicesList() {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      title: "Website development",
      description: "We design, build and deploy fast, modern websites — marketing sites, landing pages and web apps that are easy to maintain and built to convert.",
      useCases: ["Startups: a launch-ready marketing site and landing pages", "Established brands: a redesign that loads fast and converts better", "Products: a web app front-end for an existing backend or API"],
      youGet: ["A responsive, SEO-ready site built on modern tooling", "Clean handoff with docs, or we host and maintain it for you", "Analytics and tracking set up from day one"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary-600" />,
      title: "App development",
      description: "We build web and mobile apps end to end — from an internal tool your team needs tomorrow to a customer-facing product you can scale.",
      useCases: ["Internal tools: a dashboard or ops tool your team logs into daily", "Startups: an MVP you can put in front of users fast", "Existing products: a new feature or platform built on your current stack"],
      youGet: ["A working app, not just a prototype or mockup", "Your choice of stack, with code you own outright", "Ongoing support as you add features and scale"]
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-primary-600" />,
      title: "Ecommerce platform (Rawnn)",
      description: "A fully owned ecommerce platform for established businesses — customer website, store admin panel and owner control panel, on your own servers. One-time cost, no commission.",
      useCases: ["D2C brands: a premium branded store, not a marketplace listing", "Retailers: move from Instagram/WhatsApp selling to a real storefront", "Established businesses: replace recurring platform fees with a one-time build"],
      youGet: ["A store built and set up for your brand, live in 2–6 weeks", "Payments and shipping handled via Razorpay & Shiprocket", "Full source code licence, running on your own servers"],
      link: "/products/rawnn"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary-600" />,
      title: "AI services",
      description: "We add AI where it actually saves your team time — reading documents, scoring and matching, answering questions, and automating the repetitive steps around a process.",
      useCases: ["HR: parse resumes and score candidates against a job description", "Support: an assistant that answers questions from your own docs and data", "Ops/finance: automate approvals, reports and repetitive data entry"],
      youGet: ["Explainable output you can trust, not a black box", "Built around your own data and criteria", "Added to your existing product, or run as a standalone tool"]
    },
  ]

  return (
    <section id="services-list" className="section-padding bg-ink-50">
      <div className="container-max">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            What we build
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            Websites, apps and AI services — each one scoped to your business,
            not sold off a shelf.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <RevealItem key={index} className="bg-white rounded-xl p-8 shadow-sm card-hover">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-6">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-ink-500 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-ink-100 pt-6 mb-6">
                <h4 className="text-sm font-semibold text-ink-900 mb-3 uppercase tracking-wide">Example use cases</h4>
                <ul className="space-y-2">
                  {service.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start text-sm text-ink-500">
                      <CheckCircle2 className="w-4 h-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-ink-100 pt-6">
                <h4 className="text-sm font-semibold text-ink-900 mb-3 uppercase tracking-wide">What you get</h4>
                <ul className="space-y-2">
                  {service.youGet.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-ink-500">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {service.link && (
                <div className="border-t border-ink-100 mt-6 pt-6">
                  <Link href={service.link} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700">
                    View details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
