import Link from 'next/link'
import { Shirt, Sparkles, Store } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import PageHero from '../../components/PageHero'
import Breadcrumbs from '../../components/Breadcrumbs'
import FAQAccordion from '../../components/FAQAccordion'
import RawnnCTA from '../../components/RawnnCTA'
import { SITE_URL, RAWNN_DEMO_URL } from '../../lib/constants'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Clothing Brand Ecommerce Website Development | Modax',
  description: 'A clothing brand ecommerce website built on Rawnn — size/colour variants, lookbook-style storefront, Razorpay and Shiprocket built in. Also suited to saree and boutique online stores.',
  keywords: ['clothing brand ecommerce website', 'saree ecommerce website development', 'boutique online store website'],
  alternates: {
    canonical: `${SITE_URL}/ecommerce-for-fashion`,
  },
  openGraph: {
    title: 'Clothing Brand Ecommerce Website Development | Modax',
    description: 'A clothing brand ecommerce website built on Rawnn — size/colour variants, Razorpay and Shiprocket built in.',
    url: '/ecommerce-for-fashion',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const faqs = [
  {
    question: 'Can a clothing brand ecommerce website handle size and colour variants?',
    answer: 'Yes — Rawnn tracks inventory at the variant level, so every size and colour combination has its own stock count, with low-stock alerts.',
  },
  {
    question: 'Is Rawnn suited to a saree or boutique online store, not just mass-market fashion?',
    answer: 'Yes — the same platform works for a saree ecommerce website or boutique online store: a custom-themed storefront, product photography-led listings, and ratings/reviews with photos to build trust before purchase.',
  },
]

export default function EcommerceForFashionPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Ecommerce for Fashion' }]} />
      <main>
        <PageHero
          eyebrow="For fashion & apparel brands"
          title="Clothing brand ecommerce "
          accent="website development"
          description="Rawnn is built for fashion: variant-level stock for every size and colour, a storefront themed for your brand, and reviews with photos that help shoppers trust a fit before they buy. Just as suited to a saree ecommerce brand or a boutique online store as a clothing label."
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href={RAWNN_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Explore the Live Demo Store
            </a>
            <Link href="/products/rawnn" className="btn-secondary">
              See Modax Rawnn
            </Link>
          </div>
        </PageHero>

        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-modax-ink mb-4">
                See it live on our demo store
              </h2>
              <p className="text-lg text-modax-body">
                demo.modax.in is a working demo store built on Rawnn — not a client site — so you can click through the real storefront, cart and checkout.
              </p>
            </div>

            <div className="rounded-xl bg-white shadow-xl ring-1 ring-modax-ink/5 overflow-hidden max-w-3xl mx-auto mb-16">
              <div className="flex items-center gap-2 px-4 py-3 bg-modax-border-lt border-b border-modax-border-lt">
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="h-2.5 w-2.5 rounded-full bg-modax-muted-2" />
                <span className="ml-3 flex-1 bg-white rounded px-3 py-1 text-xs text-modax-body font-mono truncate">
                  demo.modax.in
                </span>
              </div>
              <div className="aspect-[16/9] w-full bg-modax-blue-tint flex items-center justify-center">
                {/* TODO: replace with /images/ecommerce-for-fashion-demo-store.webp — screenshot of demo.modax.in storefront, 1440px wide */}
                <span className="text-xs font-medium text-modax-blue-deep text-center px-4">
                  Image placeholder — /images/ecommerce-for-fashion-demo-store.webp
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <Shirt className="w-10 h-10 text-modax-blue-deep mx-auto mb-4" />
                <h3 className="font-bold text-modax-ink mb-2">Size & colour variants</h3>
                <p className="text-sm text-modax-body">Stock tracked down to each size/colour combination, with low-stock alerts.</p>
              </div>
              <div className="text-center p-6">
                <Sparkles className="w-10 h-10 text-modax-blue-deep mx-auto mb-4" />
                <h3 className="font-bold text-modax-ink mb-2">AI-assisted listing</h3>
                <p className="text-sm text-modax-body">Upload a product photo and AI drafts the title, description and variants.</p>
              </div>
              <div className="text-center p-6">
                <Store className="w-10 h-10 text-modax-blue-deep mx-auto mb-4" />
                <h3 className="font-bold text-modax-ink mb-2">A themed storefront</h3>
                <p className="text-sm text-modax-body">Your own look and feel — not a shared template — whether you're a saree label or a boutique store.</p>
              </div>
            </div>
          </div>
        </section>

        <FAQAccordion items={faqs} />
        <RawnnCTA />
      </main>
      <Footer />
    </div>
  )
}
