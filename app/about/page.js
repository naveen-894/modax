import Navigation from '../../components/Navigation'
import AboutHero from '../../components/AboutHero'
import AboutFounder from '../../components/AboutFounder'
import AboutMission from '../../components/AboutMission'
import AboutProducts from '../../components/AboutProducts'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'About Modax | A Founder-Led AI Studio',
  description: 'Modax is a founder-led AI studio in Bangalore building custom AI tools that save businesses hours of manual work.',
  keywords: ['about modax', 'AI studio', 'founder-led AI company', 'custom AI tools', 'Bangalore AI company'],
  openGraph: {
    title: 'About Modax | A Founder-Led AI Studio',
    description: 'Modax is a founder-led AI studio in Bangalore building custom AI tools that save businesses hours of manual work.',
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
      </main>
      <Footer />
    </div>
  )
}
