import Navigation from '../../components/Navigation'
import ServicesHero from '../../components/ServicesHero'
import ServicesList from '../../components/ServicesList'
import ServicesProcess from '../../components/ServicesProcess'
import ServicesCTA from '../../components/ServicesCTA'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'AI Solutions | Custom AI Tools for Business | Modax',
  description: 'Custom AI tools that save teams hours of manual work: document understanding, scoring & matching, AI assistants, workflow automation, and AI features for your product.',
  keywords: ['AI solutions', 'AI tools', 'AI for HR', 'AI resume screening', 'AI automation', 'custom AI development', 'LLM integration'],
  openGraph: {
    title: 'AI Solutions | Custom AI Tools for Business | Modax',
    description: 'Custom AI tools that save teams hours of manual work, built around your actual workflow.',
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
