import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ProductHighlight from '../components/ProductHighlight'
import EcommerceShowcase from '../components/EcommerceShowcase'
import HowWeWork from '../components/HowWeWork'
import WhyModax from '../components/WhyModax'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import JsonLd from '../components/JsonLd'
import { SITE_URL } from '../lib/constants'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  name: 'Modax',
  description: 'Founder-led tech studio in Bengaluru that builds AI tools, websites, apps and Rawnn, an ecommerce platform you own — document understanding, AI assistants, workflow automation, and web and app development.',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  sameAs: [
    'https://www.instagram.com/teammodax/',
    'https://www.linkedin.com/company/teammodax',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: process.env.CONTACT_PHONE,
    contactType: 'customer service',
    email: process.env.CONTACT_EMAIL,
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressCountry: 'IN',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Ecommerce Platforms',
    'Document Understanding',
    'LLM Integration',
    'Workflow Automation',
    'Website Development',
    'App Development',
  ],
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <JsonLd data={organizationSchema} />
      <Navigation />
      <main>
        <Hero />
        <EcommerceShowcase />
        <ProductHighlight />
        <HowWeWork />
        <WhyModax />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
