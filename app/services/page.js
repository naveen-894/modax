import Navigation from '../../components/Navigation'
import ServicesHero from '../../components/ServicesHero'
import ServicesList from '../../components/ServicesList'
import ServicesProcess from '../../components/ServicesProcess'
import ServicesCTA from '../../components/ServicesCTA'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'Software Development Services | Custom Web & Mobile Apps | Modax',
  description: 'Expert software development services including custom web applications, mobile app development, e-commerce solutions, and business automation. Transform your business with scalable digital solutions.',
  keywords: ['software development services', 'custom software development', 'web application development', 'mobile app development', 'e-commerce development', 'business automation', 'digital solutions'],
  openGraph: {
    title: 'Software Development Services | Custom Solutions | Modax',
    description: 'Expert software development services for web, mobile, and e-commerce applications. Transform your business with our custom development expertise.',
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
