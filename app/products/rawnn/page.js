import Navigation from '../../../components/Navigation'
import RawnnProductHero from '../../../components/RawnnProductHero'
import RawnnProductFeatures from '../../../components/RawnnProductFeatures'
import RawnnProductBenefits from '../../../components/RawnnProductBenefits'
import RawnnProductHowItWorks from '../../../components/RawnnProductHowItWorks'
import RawnnProductDemo from '../../../components/RawnnProductDemo'
import Footer from '../../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.modax.in'),
  title: 'Rawnn — Own Your Ecommerce Platform, Pay Once | Book a Free Demo',
  description: 'Rawnn is a complete, fully owned ecommerce platform for your brand — a customer website, store admin panel and owner control panel, on your own servers. One-time cost, no monthly fees, no commission. Book a free demo.',
  keywords: ['rawnn', 'e-commerce platform', 'premium online store', 'd2c platform', 'online store', 'store admin panel', 'e-commerce software', 'own your ecommerce platform'],
  alternates: {
    canonical: 'https://www.modax.in/products/rawnn',
  },
  openGraph: {
    title: 'Rawnn — Own Your Ecommerce Platform, Pay Once | Book a Free Demo',
    description: 'Rawnn is a complete, fully owned ecommerce platform for your brand — a customer website, store admin panel and owner control panel, on your own servers. One-time cost, no monthly fees, no commission.',
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
