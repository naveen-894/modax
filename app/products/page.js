import Navigation from '../../components/Navigation'
import ProductsHero from '../../components/ProductsHero'
import ProductsShowcase from '../../components/ProductsShowcase'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'Products | Screenr & Rawnn | Modax',
  description: 'Products built by Modax: Screenr, our AI resume & job description matching tool, and Rawnn, our complete e-commerce platform for your own premium online store.',
  keywords: ['modax products', 'screenr', 'resume matcher', 'ai resume screening', 'rawnn', 'ecommerce platform', 'd2c platform'],
  openGraph: {
    title: 'Products | Screenr & Rawnn | Modax',
    description: 'Products built by Modax, including Screenr, our AI resume screening tool, and Rawnn, our complete e-commerce platform.',
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
