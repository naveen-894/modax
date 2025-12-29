import Navigation from '../../components/Navigation'
import ProductsHero from '../../components/ProductsHero'
import ProductsShowcase from '../../components/ProductsShowcase'
import Footer from '../../components/Footer'

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
