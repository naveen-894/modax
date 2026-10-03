import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'

export default function Services() {
  const services = [
    {
      number: "01",
      title: "AI Document Understanding",
      description: "Extract structured data from resumes, invoices, contracts and forms — no more manual data entry.",
    },
    {
      number: "02",
      title: "AI Scoring & Matching",
      description: "Explainable scores that compare candidates, leads or documents against your criteria.",
    },
    {
      number: "03",
      title: "AI Assistants",
      description: "Chat assistants that answer questions from your own data and documents.",
    },
    {
      number: "04",
      title: "Workflow Automation with AI",
      description: "Automate follow-ups, reports, data entry and approvals that currently eat up your team's day.",
    },
    {
      number: "05",
      title: "AI Features in Your Product",
      description: "Add LLM-powered features to existing software — search, summarization, drafting, and more.",
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-3 gap-12 mb-14">
          <Reveal className="lg:col-span-2">
            <div className="eyebrow mb-4">What we build</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">
              Five ways we remove manual work with AI
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-end">
            <p className="text-ink-500 leading-relaxed mb-4">
              Every tool we build is scoped around one goal: save your team hours
              on work that shouldn't need a human to do by hand.
            </p>
            <Link href="/services" className="text-primary-700 font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 border-t border-ink-100">
          {services.map((service, index) => (
            <RevealItem
              key={index}
              className={`py-10 px-2 sm:px-8 border-b border-ink-100 transition-colors duration-300 hover:bg-ink-50/60 ${index % 2 === 0 ? 'sm:border-r' : ''}`}
            >
              <div className="text-sm font-mono text-primary-600 mb-4">{service.number}</div>
              <h3 className="text-xl font-bold text-ink-900 mb-3">
                {service.title}
              </h3>
              <p className="text-ink-500 leading-relaxed max-w-md">
                {service.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
