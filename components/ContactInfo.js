import Link from 'next/link'
import { Settings, Globe, ShoppingBag, FileText, CheckCircle2 } from 'lucide-react'
import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'
import { SCREENR_URL } from '../lib/constants'

export default function ContactInfo() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Get started today
          </h2>
          <p className="text-lg text-ink-500 max-w-2xl mx-auto">
            Pick where you&apos;d like to start.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <RevealItem className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center card-hover">
            <div className="w-16 h-16 bg-ink-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-ink-900 mb-4">Custom AI tools</h3>
            <p className="text-ink-700 mb-6">
              Need a specific AI tool for your team? We build custom AI tools that fit your exact workflow.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">Document understanding & scoring</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">Workflow automation</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">AI assistants & integrations</span>
              </div>
            </div>
            <Link href="/services" className="btn-primary inline-block">
              View AI solutions
            </Link>
          </RevealItem>

          <RevealItem className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center card-hover">
            <div className="w-16 h-16 bg-ink-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-ink-900 mb-4">Websites & apps</h3>
            <p className="text-ink-700 mb-6">
              Need a marketing site, web app, or mobile app built? We design, build and deploy it end to end.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">Marketing sites & landing pages</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">Web & mobile apps</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">Code you own outright</span>
              </div>
            </div>
            <Link href="/services" className="btn-primary inline-block">
              View services
            </Link>
          </RevealItem>

          <RevealItem className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center card-hover">
            <div className="w-16 h-16 bg-ink-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-ink-900 mb-4">Rawnn</h3>
            <p className="text-ink-700 mb-6">
              Own your ecommerce platform — a customer website, store admin panel and owner control panel, on your own servers.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">One-time cost, no commission</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">Your own servers & domain</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">Built by Modax</span>
              </div>
            </div>
            <Link href="/products/rawnn#demo" className="btn-primary inline-block">
              Own your ecommerce platform
            </Link>
          </RevealItem>

          <RevealItem className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center card-hover">
            <div className="w-16 h-16 bg-ink-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-ink-900 mb-4">Screenr</h3>
            <p className="text-ink-700 mb-6">
              Try our AI resume-to-job matching tool free — no setup required to see your first match.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">Explainable match score</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">Skills gap analysis</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">Built & Owned by Modax</span>
              </div>
            </div>
            <a href={SCREENR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              Try it free
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
