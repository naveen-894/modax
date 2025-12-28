import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Features from '../components/Features'
import Products from '../components/Products'
import Pricing from '../components/Pricing'
import WhyChoose from '../components/WhyChoose'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <Products />
        {/* <Pricing /> */}
        <WhyChoose />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
