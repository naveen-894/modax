import Link from 'next/link'
import { Gauge, Search, Rocket, Code } from 'lucide-react'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'
import PageHero from '../../../components/PageHero'
import Breadcrumbs from '../../../components/Breadcrumbs'
import FAQAccordion from '../../../components/FAQAccordion'
import ServicesCTA from '../../../components/ServicesCTA'
import Image from 'next/image'
import HeroImage from '../../../components/HeroImage'
import { SITE_URL, CALENDLY_URL, S3_LANDING_URL } from '../../../lib/constants'

const portfolioProjects = [
  { filename: 'website-development-portfolio-1.webp', name: 'Malenadu Amruth Chaha', alt: 'Screenshot of the Malenadu Amruth Chaha homepage, a website built by Modax' },
  { filename: 'website-development-portfolio-2.webp', name: 'Markyvichara', alt: 'Screenshot of the Markyvichara homepage, a website built by Modax' },
  { filename: 'website-development-portfolio-3.webp', name: 'Kaapi & Crumb', alt: 'Screenshot of the Kaapi & Crumb homepage, a website built by Modax' },
  { filename: 'website-development-portfolio-4.webp', name: 'Netgaint', alt: 'Screenshot of the Netgaint homepage, a website built by Modax' },
]

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Website Development Company in Bengaluru | Modax',
  description: 'Fast, SEO-ready websites, landing pages and web apps for startups and brands. Built on modern tooling, analytics from day one, code you own. Get a fixed quote.',
  keywords: ['website development company bangalore', 'website design bengaluru', 'website development cost bangalore', 'custom website development india', 'seo friendly website development', 'startup website development'],
  alternates: {
    canonical: `${SITE_URL}/services/website-development`,
  },
  openGraph: {
    title: 'Website Development Company in Bengaluru | Modax',
    description: 'Fast, SEO-ready websites, landing pages and web apps for startups and brands. Code you own.',
    url: '/services/website-development',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const costFactors = [
  { title: 'Number of pages & content', description: 'A 5-page marketing site costs less than a multi-section site with blog, case studies and landing pages.' },
  { title: 'Custom design vs template', description: 'Custom website development in India — designed for your brand — takes more time than a templated build, and costs accordingly.' },
  { title: 'Integrations', description: 'Forms, analytics, CRM/HubSpot, booking tools and chat widgets each add scope.' },
  { title: 'SEO & content needs', description: 'SEO friendly website development — proper metadata, schema, sitemaps and copywriting — is more than just a visual build.' },
]

const faqs = [
  {
    question: 'What does website development cost in Bangalore?',
    answer: "It depends on scope — pages, custom design vs template, integrations and SEO needs. Book a free call and we'll give you a fixed quote after understanding what you need.",
  },
  {
    question: 'Do you do startup website development on a tight timeline?',
    answer: 'Yes — startup website development is often our fastest turnaround: a launch-ready marketing site and landing pages, typically live in 2-4 weeks.',
  },
  {
    question: 'Is the website you build SEO friendly?',
    answer: 'Yes — seo friendly website development is standard on every project: unique titles/meta, schema markup, a sitemap, and analytics set up from day one.',
  },
]

export default function WebsiteDevelopmentPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Services', href: '/services' }, { name: 'Website Development' }]} />
      <main>
        <PageHero
          eyebrow="Website design & development, Bengaluru"
          title="Website development in Bengaluru, "
          accent="built to rank and convert"
          description="A website development company in Bengaluru for startups and established brands — fast, SEO-ready sites and landing pages, built on modern tooling, with analytics from day one and code you own outright."
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Get a fixed quote
            </a>
            <Link href="/services" className="btn-secondary">
              See all services
            </Link>
          </div>
        </PageHero>

        <section className="section-padding bg-white">
          <div className="container-max">
            <HeroImage
              src={`${S3_LANDING_URL}/services-website-development-hero.webp`}
              alt="Website development team designing a fast, SEO-ready website"
              className="mb-14 max-w-4xl mx-auto"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <div className="text-center p-6">
                <Gauge className="w-9 h-9 text-modax-blue-deep mx-auto mb-4" />
                <h3 className="font-bold text-modax-ink mb-2">Fast by default</h3>
                <p className="text-sm text-modax-body">Modern tooling, optimised images and lean code — no bloated page-builder output.</p>
              </div>
              <div className="text-center p-6">
                <Search className="w-9 h-9 text-modax-blue-deep mx-auto mb-4" />
                <h3 className="font-bold text-modax-ink mb-2">SEO friendly website development</h3>
                <p className="text-sm text-modax-body">Unique titles, meta descriptions, schema and a sitemap — built in, not bolted on later.</p>
              </div>
              <div className="text-center p-6">
                <Code className="w-9 h-9 text-modax-blue-deep mx-auto mb-4" />
                <h3 className="font-bold text-modax-ink mb-2">Code you own</h3>
                <p className="text-sm text-modax-body">Clean handoff with docs, or we host and maintain it — your choice.</p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-modax-ink mb-8 text-center">What affects website development cost in Bangalore</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {costFactors.map((f) => (
                  <div key={f.title} className="bg-modax-blue-tint-2 rounded-lg p-5">
                    <h3 className="font-semibold text-modax-ink mb-2 text-sm">{f.title}</h3>
                    <p className="text-sm text-modax-body">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-modax-ink mb-8 text-center flex items-center justify-center gap-2">
                <Rocket className="w-6 h-6 text-modax-blue-deep" /> Recent work
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {portfolioProjects.map((project) => (
                  <div key={project.filename} className="rounded-lg overflow-hidden ring-1 ring-modax-border-lt">
                    <Image
                      src={`${S3_LANDING_URL}/${project.filename}`}
                      alt={project.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto aspect-[4/3] object-cover"
                      loading="lazy"
                    />
                    <p className="text-xs font-semibold text-modax-body text-center py-2 bg-white">{project.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FAQAccordion items={faqs} />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
