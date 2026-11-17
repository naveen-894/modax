import Link from 'next/link'
import { LayoutDashboard, Rocket, Wrench, CheckCircle2 } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import PageHero from '../../../components/PageHero'
import Breadcrumbs from '../../../components/Breadcrumbs'
import FAQAccordion from '../../../components/FAQAccordion'
import ServicesCTA from '../../../components/ServicesCTA'
import { SITE_URL, CALENDLY_URL } from '../../../lib/constants'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Web App & MVP Development for Startups, Bengaluru | Modax',
  description: 'Internal dashboards, ops tools and startup MVPs built end to end, a working app, not a prototype. Your stack, your code, ongoing support. Bengaluru, India.',
  keywords: ['mvp development for startups india', 'custom software development bangalore', 'web app development bangalore', 'internal dashboard development'],
  alternates: {
    canonical: `${SITE_URL}/services/app-development`,
  },
  openGraph: {
    title: 'Web App & MVP Development for Startups, Bengaluru | Modax',
    description: 'Internal dashboards, ops tools and startup MVPs built end to end — a working app, not a prototype.',
    url: '/services/app-development',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const useCases = [
  {
    icon: <Rocket className="w-8 h-8 text-modax-blue-deep" />,
    title: 'MVP development for startups',
    description: 'MVP development for startups in India, scoped to the smallest thing that proves your idea works in front of real users — not a 6-month build.',
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-modax-blue-deep" />,
    title: 'Internal dashboard development',
    description: "Internal dashboard development for the tool your ops, sales or support team logs into daily — built around your actual workflow, not a generic admin template.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-modax-blue-deep" />,
    title: 'Custom software development',
    description: 'Custom software development in Bangalore for an existing product: a new feature, an internal tool, or a platform rebuild on your current stack.',
  },
]

const faqs = [
  {
    question: 'How fast can web app development in Bangalore actually ship?',
    answer: 'Most MVPs and internal tools are live in 2-6 weeks, depending on scope — you get a firm date in the fixed-scope proposal before work starts.',
  },
  {
    question: 'Do you build mobile apps too?',
    answer: 'No — Modax focuses on web apps (dashboards, internal tools, startup MVPs and customer-facing web products), not native Play Store or App Store apps.',
  },
  {
    question: 'Who owns the code after an MVP development for startups project?',
    answer: 'You do, outright — your choice of stack, with the full codebase handed over, so you can keep iterating with any team afterwards.',
  },
]

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'App Development' }]} />
      <main>
        <PageHero
          eyebrow="Web app & MVP development, Bengaluru"
          title="Web apps and MVPs, "
          accent="shipped in weeks"
          description="Custom software development in Bangalore for internal dashboards, ops tools and startup MVPs — built end to end as a working app, not a prototype. Fixed scope, 2-6 week timelines, your stack and your code."
          stats={[
            { value: '2–6 wks', label: 'Typical timeline' },
            { value: 'Fixed scope', label: 'No open-ended retainer' },
          ]}
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
              <h2 className="text-3xl sm:text-4xl font-bold text-modax-ink mb-4">What we build</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-modax-ink mb-8 text-center">Why a working app, not a prototype</h2>
            <ul className="space-y-4">
              {['A working app in front of real users, not a clickable mockup', 'Your choice of stack — you own the full codebase outright', 'A fixed-scope proposal with a firm delivery date before we start', 'Ongoing support as you add features and scale'].map((point) => (
                <li key={point} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-modax-body">{point}</span>
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
