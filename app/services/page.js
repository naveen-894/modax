import Navigation from '../../components/Navigation'
import ServicesHero from '../../components/ServicesHero'
import ServicesList from '../../components/ServicesList'
import ServicesProcess from '../../components/ServicesProcess'
import ServicesCTA from '../../components/ServicesCTA'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import { SITE_URL } from '../../lib/constants'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Services: AI Automation, Website & App Development | Modax',
  description: 'Modax builds AI automation, custom websites, web apps and ecommerce stores for growing businesses in Bengaluru and across India.',
  keywords: ['custom ai solutions for business india', 'fixed price software development', 'AI automation', 'website development', 'app development', 'software development company'],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: 'Services: AI Automation, Website & App Development | Modax',
    description: 'Modax builds AI automation, custom websites, web apps and ecommerce stores for growing businesses in Bengaluru and across India.',
    url: '/services',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Services' }]} />
      <main>
        <ServicesHero />
        <ServicesList />
        <ServicesProcess />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
