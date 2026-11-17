import Link from 'next/link'
import { Store, Gem, Sparkles } from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import PageHero from '../../components/PageHero'
import Breadcrumbs from '../../components/Breadcrumbs'
import FAQAccordion from '../../components/FAQAccordion'
import RawnnCTA from '../../components/RawnnCTA'
import ImagePlaceholder from '../../components/ImagePlaceholder'
import { SITE_URL } from '../../lib/constants'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Ecommerce Websites for Retail, Jewellery & Cosmetics Brands | Modax',
  description: 'Rawnn powers ecommerce websites for retail stores, jewellery ecommerce website development and cosmetics brand ecommerce websites — variant tracking, reviews with photos, and a one-time fee.',
  keywords: ['ecommerce website for retail store', 'jewellery ecommerce website development', 'cosmetics brand ecommerce website'],
  alternates: {
    canonical: `${SITE_URL}/ecommerce-for-retail-and-brands`,
  },
  openGraph: {
    title: 'Ecommerce Websites for Retail, Jewellery & Cosmetics Brands | Modax',
    description: 'Rawnn powers ecommerce websites for retail stores, jewellery brands and cosmetics brands.',
    url: '/ecommerce-for-retail-and-brands',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const industries = [
  {
    icon: <Store className="w-10 h-10 text-modax-blue-deep" />,
    title: 'Retail stores',
    description: "Moving an existing retail store online means an ecommerce website that matches what's actually in stock, so you don't oversell. Rawnn's variant-level inventory and low-stock alerts keep the online store and physical stock in sync.",
  },
  {
    icon: <Gem className="w-10 h-10 text-modax-blue-deep" />,
    title: 'Jewellery brands',
    description: 'Jewellery ecommerce website development needs detailed product pages — materials, weight, size options — plus the trust signals (reviews with photos, secure checkout) that higher-value purchases need. Rawnn ships with both.',
  },
  {
    icon: <Sparkles className="w-10 h-10 text-modax-blue-deep" />,
    title: 'Cosmetics brands',
    description: 'A cosmetics brand ecommerce website lives or dies on repeat purchases and reviews. Built-in ratings with photos, wishlists and OTP login make it easy for customers to reorder.',
  },
]

const faqs = [
  {
    question: 'Can Rawnn handle a retail store with both online and in-person stock?',
    answer: 'Yes — variant-level inventory tracking with low-stock alerts helps keep your ecommerce website in sync with what you actually have on hand.',
  },
  {
    question: 'Does Rawnn support detailed product specs for jewellery or cosmetics?',
    answer: 'Yes — product pages support detailed specs, variants and multiple images, and AI-assisted listing (Growth & Premium) can draft descriptions from a product photo.',
  },
]

export default function EcommerceForRetailAndBrandsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Ecommerce for Retail & Brands' }]} />
      <main>
        <PageHero
          eyebrow="For retail stores & specialty brands"
          title="Ecommerce websites for "
          accent="retail, jewellery & cosmetics"
          description="Rawnn adapts to the detail each category needs — from stock-accurate retail listings to the specs and trust signals that jewellery and cosmetics brands depend on."
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/products/rawnn" className="btn-primary">
              See Modax Rawnn
            </Link>
          </div>
        </PageHero>

        <section className="section-padding bg-white">
          <div className="container-max">
            <ImagePlaceholder filename="ecommerce-for-retail-and-brands-hero.webp" ratio="aspect-[16/9]" className="mb-14 max-w-4xl mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {industries.map((ind) => (
                <div key={ind.title} className="bg-modax-blue-tint-2 rounded-xl p-6">
                  <div className="mb-4">{ind.icon}</div>
                  <h3 className="font-bold text-modax-ink mb-3">{ind.title}</h3>
                  <p className="text-sm text-modax-body leading-relaxed">{ind.description}</p>
                </div>
              ))}
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
