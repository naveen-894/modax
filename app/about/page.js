import Navigation from '../../components/Navigation'
import AboutHero from '../../components/AboutHero'
import AboutMission from '../../components/AboutMission'
import AboutProducts from '../../components/AboutProducts'
import AboutTeam from '../../components/AboutTeam'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'About Modax | Leading Software Development Company',
  description: 'Learn about Modax, a leading software development company specializing in custom applications, digital transformation, and innovative software solutions for businesses.',
  keywords: ['about modax', 'software development company', 'custom software company', 'digital transformation', 'software innovation'],
  openGraph: {
    title: 'About Modax | Software Development Company',
    description: 'Leading software development company specializing in custom applications and digital transformation solutions.',
    url: 'https://modax.com/about',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AboutHero />
        <AboutMission />
        <AboutProducts />
        <AboutTeam />
      </main>
      <Footer />
    </div>
  )
}
