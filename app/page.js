import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Services from '../components/Services'
import ProductHighlight from '../components/ProductHighlight'
import WhyModax from '../components/WhyModax'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <ProductHighlight />
        <WhyModax />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
