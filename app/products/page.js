import Navigation from '../../components/Navigation'
import ProductsHero from '../../components/ProductsHero'
import ProductsShowcase from '../../components/ProductsShowcase'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import { SITE_URL } from '../../lib/constants'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rawnn Ecommerce & Screenr AI Resume Matcher | Modax",
  description: "Software Modax builds and runs: Rawnn, a pay-once ecommerce platform with no commission, and Screenr, an AI resume to job description matcher.",
  keywords: ['modax products', 'rawnn', 'ecommerce platform', 'screenr', 'ai resume screening tool', 'resume job description match score'],
  alternates: {
    canonical: `${SITE_URL}/products`,
  },
  openGraph: {
    title: "Rawnn Ecommerce & Screenr AI Resume Matcher | Modax",
    description: "Software Modax builds and runs: Rawnn, a pay-once ecommerce platform with no commission, and Screenr, an AI resume to job description matcher.",
    url: '/products',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Products' }]} />
      <main>
        <ProductsHero />
        <ProductsShowcase />
      </main>
      <Footer />
    </div>
  )
}
