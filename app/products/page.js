import Navigation from '../../components/Navigation'
import ProductsHero from '../../components/ProductsHero'
import ProductsShowcase from '../../components/ProductsShowcase'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'Software Products | Rawnn & Resume Matcher | Modax',
  description: 'Discover our ready-to-use software products: Rawnn, our complete e-commerce platform for fashion brands, and Resume Matcher, our AI resume & job description matching tool.',
  keywords: ['software products', 'e-commerce platform', 'rawnn', 'resume matcher', 'ai resume screening', 'fashion e-commerce', 'online store platform', 'd2c platform'],
  openGraph: {
    title: 'Software Products & Platforms | Modax',
    description: 'Ready-to-use software products including Rawnn e-commerce platform for fashion brands and Resume Matcher, our AI resume screening tool.',
    url: '/products',
    type: 'website',
  },
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProductsHero />
        <ProductsShowcase />
      </main>
      <Footer />
    </div>
  )
}
