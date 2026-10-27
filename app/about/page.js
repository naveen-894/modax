import Navigation from '../../components/Navigation'
import AboutHero from '../../components/AboutHero'
import AboutFounder from '../../components/AboutFounder'
import AboutMission from '../../components/AboutMission'
import AboutProducts from '../../components/AboutProducts'
import CTA from '../../components/CTA'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'About Modax | A Founder-Led Tech Studio',
  description: 'Modax is a founder-led tech studio in Bengaluru building AI tools, websites and apps for growing businesses.',
  keywords: ['about modax', 'tech studio', 'founder-led software company', 'custom AI tools', 'website development', 'app development', 'Bengaluru tech company'],
  openGraph: {
    title: 'About Modax | A Founder-Led Tech Studio',
    description: 'Modax is a founder-led tech studio in Bengaluru building AI tools, websites and apps for growing businesses.',
    url: '/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
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
