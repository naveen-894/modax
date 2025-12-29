import Navigation from '../../components/Navigation'
import AboutHero from '../../components/AboutHero'
import AboutMission from '../../components/AboutMission'
import AboutProducts from '../../components/AboutProducts'
import AboutTeam from '../../components/AboutTeam'
import Footer from '../../components/Footer'

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
