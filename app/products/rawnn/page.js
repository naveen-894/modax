import Navigation from '../../../components/Navigation'
import RawnnProductHero from '../../../components/RawnnProductHero'
import RawnnProductFeatures from '../../../components/RawnnProductFeatures'
import RawnnProductBenefits from '../../../components/RawnnProductBenefits'
import RawnnProductHowItWorks from '../../../components/RawnnProductHowItWorks'
import RawnnProductPricing from '../../../components/RawnnProductPricing'
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
    images: ['/images/og-image.jpg'],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Rawnn",
  "description": "Rawnn is a complete, fully owned ecommerce platform — a customer website, store admin panel and owner control panel, on your own servers. One-time cost, no monthly fees, no commission.",
  "brand": {
    "@type": "Brand",
    "name": "Modax",
  },
  "url": "https://www.modax.in/products/rawnn",
  "offers": [
    {
      "@type": "Offer",
      "name": "Rawnn Basic",
      "description": "Single SKU store, does it all with one login.",
      "price": "99000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.modax.in/products/rawnn#pricing",
    },
    {
      "@type": "Offer",
      "name": "Rawnn Growth",
      "description": "Growing brand automating ops & adding staff roles.",
      "price": "189000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.modax.in/products/rawnn#pricing",
    },
    {
      "@type": "Offer",
      "name": "Rawnn Premium",
      "description": "Established brand, full ops control & reporting.",
      "price": "299000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": "https://www.modax.in/products/rawnn#pricing",
    },
  ],
}

export default function RawnnProductPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <main>
        <RawnnProductHero />
        <RawnnProductFeatures />
        <RawnnProductBenefits />
        <RawnnProductHowItWorks />
        <RawnnProductPricing />
        <RawnnProductDemo />
      </main>
      <Footer />
    </div>
  )
}
