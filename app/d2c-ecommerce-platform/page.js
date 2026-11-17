import Link from 'next/link'
import { Users, Database, Palette } from 'lucide-react'
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
  title: 'D2C Ecommerce Platform India | Own Your Brand & Data | Modax',
  description: 'Rawnn is a D2C ecommerce platform for India built for brand ownership — your domain, your customer data, no marketplace listing. An ecommerce website for your D2C brand, one-time fee.',
  keywords: ['d2c ecommerce platform india', 'ecommerce website for d2c brand'],
  alternates: {
    canonical: `${SITE_URL}/d2c-ecommerce-platform`,
  },
  openGraph: {
    title: 'D2C Ecommerce Platform India | Own Your Brand & Data | Modax',
    description: 'Rawnn is a D2C ecommerce platform for India built for brand ownership — your domain, your customer data.',
    url: '/d2c-ecommerce-platform',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const faqs = [
  {
    question: 'What makes Rawnn a D2C ecommerce platform rather than a marketplace tool?',
    answer: "A D2C ecommerce platform puts your brand front and centre — your domain, your theme, your checkout — instead of listing you alongside competitors. Rawnn is built specifically for that: a dedicated storefront, not a marketplace storefront.",
  },
  {
    question: 'Who owns the customer data on an ecommerce website for a D2C brand?',
    answer: 'You do. Customer accounts, order history and behaviour data live on your own servers, not a shared marketplace platform — so you can run your own retention, email and WhatsApp marketing directly.',
  },
]

export default function D2cEcommercePlatformPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'D2C Ecommerce Platform' }]} />
      <main>
        <PageHero
          eyebrow="For D2C brands"
          title="A D2C ecommerce platform "
          accent="built for brand ownership"
          description="Marketplaces own the customer relationship. Rawnn is an ecommerce website for your D2C brand that keeps your domain, your design and your customer data in your hands — with a one-time fee instead of commission on every order."
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/products/rawnn" className="btn-primary">
              See Modax Rawnn
            </Link>
          </div>
        </PageHero>

        <section className="section-padding bg-white">
          <div className="container-max">
            <ImagePlaceholder filename="d2c-ecommerce-platform-hero.webp" ratio="aspect-[16/9]" className="mb-14 max-w-4xl mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <Palette className="w-10 h-10 text-modax-blue-deep mx-auto mb-4" />
                <h3 className="font-bold text-modax-ink mb-2">Your brand, not a listing</h3>
                <p className="text-sm text-modax-body">Fully custom theme on your own domain — shoppers see your brand, not a marketplace shelf.</p>
              </div>
              <div className="text-center p-6">
                <Database className="w-10 h-10 text-modax-blue-deep mx-auto mb-4" />
                <h3 className="font-bold text-modax-ink mb-2">Your customer data</h3>
                <p className="text-sm text-modax-body">Order history and customer accounts live on your own servers — the foundation for repeat-purchase marketing.</p>
              </div>
              <div className="text-center p-6">
                <Users className="w-10 h-10 text-modax-blue-deep mx-auto mb-4" />
                <h3 className="font-bold text-modax-ink mb-2">Direct relationship</h3>
                <p className="text-sm text-modax-body">No marketplace in between — checkout, support and reviews all happen on your own store.</p>
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
