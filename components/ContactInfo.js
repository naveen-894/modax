import Link from 'next/link'
import { Settings, ShoppingBag, CheckCircle2 } from 'lucide-react'
import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'

export default function ContactInfo() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <Reveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-lg text-ink-500 max-w-2xl mx-auto">
            Ready to transform your business? Choose the path that best fits your needs.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <RevealItem className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center card-hover">
            <div className="w-16 h-16 bg-ink-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-ink-900 mb-4">Custom AI Tools</h3>
            <p className="text-ink-700 mb-6">
              Need a specific AI tool for your team? We build custom AI tools that fit your exact workflow.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">Document Understanding & Scoring</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">Workflow Automation</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm">AI Assistants & Integrations</span>
              </div>
            </div>
            <Link href="/services" className="btn-primary inline-block">
              View AI Solutions
            </Link>
          </RevealItem>

          <RevealItem className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center card-hover">
            <div className="w-16 h-16 bg-ink-900 rounded-lg flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-8 h-8 text-white" />
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
            <a href="https://ai-resume-matcher-fed.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
              Try it free
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}
