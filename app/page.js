import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ProductHighlight from '../components/ProductHighlight'
import EcommerceShowcase from '../components/EcommerceShowcase'
import HowWeWork from '../components/HowWeWork'
import WhyModax from '../components/WhyModax'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProductHighlight />
        <EcommerceShowcase />
        <HowWeWork />
        <WhyModax />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
