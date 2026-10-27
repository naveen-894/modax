import Link from 'next/link'
import { Sparkles, Globe, Smartphone } from 'lucide-react'
import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'

export default function Capabilities() {
  const pillars = [
    {
      icon: <Sparkles className="w-7 h-7 text-primary-600" />,
      title: "AI tools",
      description: "Document understanding, scoring & matching, assistants and workflow automation, built around your data.",
    },
    {
      icon: <Globe className="w-7 h-7 text-primary-600" />,
      title: "Websites",
      description: "Fast, modern marketing sites and web apps — designed, built and deployed by one team.",
    },
    {
      icon: <Smartphone className="w-7 h-7 text-primary-600" />,
      title: "Apps",
      description: "Web and mobile apps for your business, from internal tools to customer-facing products.",
    },
  ]

  return (
    <section className="section-padding bg-ink-50">
      <div className="container-max">
        <Reveal className="text-center mb-14">
          <div className="eyebrow mb-4 justify-center">What we build</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight mb-5">
            One team, three ways to ship
          </h2>
          <p className="text-lg text-ink-500 max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s AI taking manual work off your team&apos;s plate, or a website
            or app your business needs built, we scope it, build it, and keep it running.
          </p>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <RevealItem key={index} className="card-surface card-hover p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-lg mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-3">{pillar.title}</h3>
              <p className="text-ink-500 leading-relaxed">{pillar.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-primary">
            See all services
          </Link>
        </div>
      </div>
    </section>
  )
}
