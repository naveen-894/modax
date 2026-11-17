import Link from 'next/link'
import { FileText, Inbox, MessageSquare, Workflow, CheckCircle2, ArrowRight } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import PageHero from '../../../components/PageHero'
import Breadcrumbs from '../../../components/Breadcrumbs'
import FAQAccordion from '../../../components/FAQAccordion'
import ServicesCTA from '../../../components/ServicesCTA'
import { SITE_URL, CALENDLY_URL } from '../../../lib/constants'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'AI Automation & Custom AI Development Bengaluru | Modax',
  description: 'Automate data entry, document reading, approvals and support with custom AI tools built on your own data. Explainable AI, humans in control. Free 15-min call.',
  keywords: ['ai development company bangalore', 'ai automation agency bangalore', 'ai workflow automation for small business', 'ai chatbot trained on company documents', 'business process automation india', 'automate data entry with ai', 'ai document processing', 'ai chatbot development bangalore', 'llm integration services'],
  alternates: {
    canonical: `${SITE_URL}/services/ai-automation`,
  },
  openGraph: {
    title: 'AI Automation & Custom AI Development Bengaluru | Modax',
    description: 'Automate data entry, document reading, approvals and support with custom AI tools built on your own data.',
    url: '/services/ai-automation',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const useCases = [
  {
    icon: <FileText className="w-8 h-8 text-modax-blue-deep" />,
    title: 'AI document processing',
    description: 'Extract structured data from invoices, contracts and forms — ai document processing that replaces manual re-typing with a reviewable draft.',
  },
  {
    icon: <Inbox className="w-8 h-8 text-modax-blue-deep" />,
    title: 'Automate data entry with AI',
    description: 'Feed in emails, PDFs or spreadsheets and get clean, structured records out — automate data entry with AI instead of copy-pasting between systems.',
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-modax-blue-deep" />,
    title: 'AI chatbot trained on your documents',
    description: 'An AI chatbot trained on company documents that answers support or internal questions from your actual policies and docs — not a generic script.',
  },
  {
    icon: <Workflow className="w-8 h-8 text-modax-blue-deep" />,
    title: 'Business process automation',
    description: 'Business process automation for India-based teams: approvals, reports and repetitive ops steps, automated with a human still signing off.',
  },
]

const faqs = [
  {
    question: 'What does an AI development company in Bangalore actually build?',
    answer: 'As an AI automation agency, we build explainable tools around your own data — document extraction, scoring/matching, chatbots trained on your documents, and workflow automation — not generic off-the-shelf AI.',
  },
  {
    question: 'Is AI workflow automation realistic for a small business?',
    answer: "Yes — ai workflow automation for small business usually starts with one repetitive task (data entry, a support inbox, approvals) rather than a company-wide overhaul, so the first win is fast and low-risk.",
  },
  {
    question: 'Do you offer LLM integration services for an existing product?',
    answer: 'Yes — we offer LLM integration services to add AI features (search, summarization, chat, scoring) into software you already have, not just standalone tools.',
  },
]

export default function AiAutomationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'AI Automation' }]} />
      <main>
        <PageHero
          eyebrow="AI automation, Bengaluru"
          title="AI automation for teams "
          accent="drowning in manual work"
          description="Modax is an AI development company in Bangalore building explainable automation around your own data — document processing, data entry, chatbots trained on your documents, and business process automation. Humans stay in control."
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a free 15-min call
            </a>
            <Link href="/services" className="btn-secondary">
              See all services
            </Link>
          </div>
        </PageHero>

        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-modax-ink mb-4">Where AI automation actually saves time</h2>
              <p className="text-lg text-modax-body">As an AI automation agency, we scope this around one real bottleneck first — not a platform rollout.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {useCases.map((uc) => (
                <div key={uc.title} className="bg-modax-blue-tint-2 rounded-xl p-6">
                  <div className="mb-4">{uc.icon}</div>
                  <h3 className="font-bold text-modax-ink mb-2">{uc.title}</h3>
                  <p className="text-sm text-modax-body leading-relaxed">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-modax-blue-tint-2">
          <div className="container-max">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-modax-ink mb-4">Already shipped, not just promised</h2>
              <p className="text-lg text-modax-body">Two of our own products run on exactly this kind of AI automation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-modax-ink mb-2">Screenr</h3>
                <p className="text-sm text-modax-body mb-4">An explainable AI resume-to-job-description matcher — score, skills gap and reasoning in about 15 seconds.</p>
                <Link href="/products/ai-resume-matcher" className="inline-flex items-center gap-1.5 text-sm font-semibold text-modax-blue-deep hover:underline">
                  See Screenr <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-modax-ink mb-2">Rawnn's AI product listing</h3>
                <p className="text-sm text-modax-body mb-4">Upload a product photo and AI drafts the title, description and variants — automation inside a real ecommerce platform.</p>
                <Link href="/products/rawnn" className="inline-flex items-center gap-1.5 text-sm font-semibold text-modax-blue-deep hover:underline">
                  See Modax Rawnn <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-max max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-modax-ink mb-10 text-center">How we approach an AI project</h2>
            <ul className="space-y-4">
              {['Map the manual steps you want gone, and the data involved', 'Build an explainable AI chatbot development or automation prototype on real samples', 'Pilot it with a human review step before any automation runs unsupervised', 'Hand over a fixed-price software development scope — no open-ended retainer'].map((step) => (
                <li key={step} className="flex items-start gap-3 bg-modax-blue-tint-2 rounded-lg p-4">
                  <CheckCircle2 className="w-5 h-5 text-modax-blue-deep flex-shrink-0 mt-0.5" />
                  <span className="text-modax-body">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FAQAccordion items={faqs} />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
