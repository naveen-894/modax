import Navigation from '../../../components/Navigation'
import RawnnProductHero from '../../../components/RawnnProductHero'
import RawnnProductFeatures from '../../../components/RawnnProductFeatures'
import RawnnProductBenefits from '../../../components/RawnnProductBenefits'
import RawnnProductHowItWorks from '../../../components/RawnnProductHowItWorks'
import RawnnProductDemo from '../../../components/RawnnProductDemo'
import Footer from '../../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'Rawnn - Complete E-commerce Platform for Fashion Brands | Modax',
  description: 'Launch your fashion brand\'s online store with Rawnn, our complete e-commerce platform. Built for D2C fashion brands with inventory management, payment processing, and analytics. Setup in 1 week.',
  keywords: ['rawnn', 'e-commerce platform', 'fashion e-commerce', 'd2c platform', 'online store', 'fashion store platform', 'e-commerce software'],
  openGraph: {
    title: 'Rawnn - Complete E-commerce Platform for Fashion Brands',
    description: 'Launch your fashion brand\'s online store in 1 week with Rawnn, our complete e-commerce platform built for D2C fashion brands.',
    url: '/products/rawnn',
    type: 'website',
  },
}

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
