import Navigation from '../../components/Navigation'
import RawnnHero from '../../components/RawnnHero'
import RawnnFeatures from '../../components/RawnnFeatures'
import RawnnBenefits from '../../components/RawnnBenefits'
import RawnnDemo from '../../components/RawnnDemo'
import Footer from '../../components/Footer'

export default function RawnnPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <RawnnHero />
        <RawnnFeatures />
        <RawnnBenefits />
        <RawnnDemo />
      </main>
      <Footer />
    </div>
  )
}
