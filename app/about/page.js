import Navigation from '../../components/Navigation'
import AboutHero from '../../components/AboutHero'
import AboutFounder from '../../components/AboutFounder'
import AboutMission from '../../components/AboutMission'
import AboutProducts from '../../components/AboutProducts'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import JsonLd from '../../components/JsonLd'
import { SITE_URL } from '../../lib/constants'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'About Modax | Founder-Led Tech Studio in Bengaluru',
  description: 'Modax is a founder-led Bengaluru tech studio, started by Naveen V, building AI tools, websites, apps and ecommerce platforms that ship in weeks.',
  keywords: ['about modax', 'modax tech studio', 'founder-led software company', 'custom AI tools', 'website development', 'Bengaluru tech company'],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'About Modax | Founder-Led Tech Studio in Bengaluru',
    description: 'Modax is a founder-led Bengaluru tech studio, started by Naveen V, building AI tools, websites, apps and ecommerce platforms.',
    url: '/about',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Naveen V',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Modax',
    url: SITE_URL,
  },
  url: `${SITE_URL}/about`,
  sameAs: [
    'https://www.linkedin.com/in/naveen-v-89011421b/',
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={personSchema} />
      <Navigation />
      <Breadcrumbs items={[{ name: 'About' }]} />
      <main>
        <AboutHero />
        <AboutFounder />
        <AboutMission />
        <AboutProducts />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
