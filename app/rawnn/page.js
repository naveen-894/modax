import Navigation from '../../components/Navigation'
import RawnnHero from '../../components/RawnnHero'
import RawnnFeatures from '../../components/RawnnFeatures'
import RawnnBenefits from '../../components/RawnnBenefits'
import RawnnDemo from '../../components/RawnnDemo'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Rawnn - Complete E-commerce Platform for Fashion Brands | Modax',
  description: 'Launch your fashion brand\'s online store with Rawnn, our complete e-commerce platform. Built for D2C fashion brands with inventory management, payment processing, and analytics. Setup in 1 week.',
  keywords: ['rawnn', 'e-commerce platform', 'fashion e-commerce', 'd2c platform', 'online store', 'fashion store platform', 'e-commerce software'],
  openGraph: {
    title: 'Rawnn - Complete E-commerce Platform for Fashion Brands',
    description: 'Launch your fashion brand\'s online store in 1 week with Rawnn, our complete e-commerce platform built for D2C fashion brands.',
    url: 'https://modax.com/rawnn',
    type: 'website',
  },
  alternates: {
    canonical: 'https://modax.com/products/rawnn',
  },
}

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
