import Navigation from '../../components/Navigation'
import ServicesHero from '../../components/ServicesHero'
import ServicesList from '../../components/ServicesList'
import ServicesProcess from '../../components/ServicesProcess'
import ServicesCTA from '../../components/ServicesCTA'
import Footer from '../../components/Footer'

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
