import Navigation from '../../components/Navigation'
import ServicesHero from '../../components/ServicesHero'
import ServicesList from '../../components/ServicesList'
import ServicesProcess from '../../components/ServicesProcess'
import ServicesCTA from '../../components/ServicesCTA'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'Services | AI, Website & App Development | Modax',
  description: 'Modax builds AI tools, websites and apps for growing businesses: document understanding, scoring & matching, AI assistants, workflow automation, website development and app development.',
  keywords: ['AI solutions', 'AI tools', 'website development', 'app development', 'software development company', 'AI automation', 'custom AI development', 'LLM integration'],
  openGraph: {
    title: 'Services | AI, Website & App Development | Modax',
    description: 'Modax builds AI tools, websites and apps for growing businesses, built around your actual needs.',
    url: '/services',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
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
