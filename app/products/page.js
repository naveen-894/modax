import Navigation from '../../components/Navigation'
import ProductsHero from '../../components/ProductsHero'
import ProductsShowcase from '../../components/ProductsShowcase'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Software Products | Rawnn E-commerce Platform | Modax',
  description: 'Discover our ready-to-use software products including Rawnn, our complete e-commerce platform for fashion brands. Launch your online store in 1 week.',
  keywords: ['software products', 'e-commerce platform', 'rawnn', 'fashion e-commerce', 'online store platform', 'd2c platform'],
  openGraph: {
    title: 'Software Products & Platforms | Modax',
    description: 'Ready-to-use software products including Rawnn e-commerce platform for fashion brands. Launch your online store quickly.',
    url: 'https://modax.com/products',
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
