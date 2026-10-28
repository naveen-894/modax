import Navigation from '../../components/Navigation'
import RawnnHero from '../../components/RawnnHero'
import RawnnFeatures from '../../components/RawnnFeatures'
import RawnnBenefits from '../../components/RawnnBenefits'
import RawnnDemo from '../../components/RawnnDemo'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.modax.in'),
  title: 'Rawnn — Own Your Ecommerce Platform, Pay Once | Book a Free Demo',
  description: 'Rawnn is a complete, fully owned ecommerce platform for your brand — a customer website, store admin panel and owner control panel, on your own servers. One-time cost, no monthly fees, no commission. Book a free demo.',
  keywords: ['rawnn', 'e-commerce platform', 'premium online store', 'd2c platform', 'online store', 'store admin panel', 'e-commerce software', 'own your ecommerce platform'],
  openGraph: {
    title: 'Rawnn — Own Your Ecommerce Platform, Pay Once | Book a Free Demo',
    description: 'Rawnn is a complete, fully owned ecommerce platform for your brand — a customer website, store admin panel and owner control panel, on your own servers. One-time cost, no monthly fees, no commission.',
    url: '/rawnn',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.modax.in/products/rawnn',
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
