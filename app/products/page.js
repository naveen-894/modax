import Navigation from '../../components/Navigation'
import ProductsHero from '../../components/ProductsHero'
import ProductsShowcase from '../../components/ProductsShowcase'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'AI Products | Screenr & Rawnn | Modax',
  description: 'AI products built by Modax: Screenr, our AI resume & job description matching tool, and Rawnn, an AI-assisted commerce platform for fashion brands.',
  keywords: ['AI products', 'screenr', 'resume matcher', 'ai resume screening', 'rawnn', 'ai for hr', 'fashion e-commerce', 'd2c platform'],
  openGraph: {
    title: 'AI Products | Screenr & Rawnn | Modax',
    description: 'AI products built by Modax, including Screenr, our AI resume screening tool, and Rawnn, an AI-assisted commerce platform.',
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
