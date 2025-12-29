import Navigation from '../../../components/Navigation'
import RawnnProductHero from '../../../components/RawnnProductHero'
import RawnnProductFeatures from '../../../components/RawnnProductFeatures'
import RawnnProductBenefits from '../../../components/RawnnProductBenefits'
import RawnnProductHowItWorks from '../../../components/RawnnProductHowItWorks'
import RawnnProductDemo from '../../../components/RawnnProductDemo'
import Footer from '../../../components/Footer'

export default function RawnnProductPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <RawnnProductHero />
        <RawnnProductFeatures />
        <RawnnProductBenefits />
        <RawnnProductHowItWorks />
        <RawnnProductDemo />
      </main>
      <Footer />
    </div>
  )
}
