import Link from 'next/link'
import { Camera, MessageCircle, ArrowRight } from 'lucide-react'
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
  title: 'From Instagram Seller to Your Own Website | Modax',
  description: "Selling through DMs and WhatsApp? Move from Instagram seller to your own website with Rawnn — a real storefront, cart, checkout and order tracking, without losing the audience you've already built.",
  keywords: ['instagram seller to own website', 'whatsapp business to ecommerce website'],
  alternates: {
    canonical: `${SITE_URL}/instagram-to-website`,
  },
  openGraph: {
    title: 'From Instagram Seller to Your Own Website | Modax',
    description: 'Move from Instagram/WhatsApp selling to your own ecommerce website with Rawnn.',
    url: '/instagram-to-website',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const steps = [
  { title: 'Keep selling on Instagram', description: 'Your Instagram shop and DMs still work — think of your own website as an upgrade, not a replacement.' },
  { title: 'Move orders to a real checkout', description: 'Instead of "DM to order", customers browse, add to cart and pay directly — UPI, cards or Cash on Delivery.' },
  { title: 'Stop losing orders in chat', description: 'No more scrolling through WhatsApp for order status — customers track their own order, and you manage it from one admin panel.' },
]

const faqs = [
  {
    question: 'Do I need to stop selling on Instagram once I have my own website?',
    answer: "No — most sellers keep Instagram for discovery and DMs, and use their own website for the actual browsing, cart and checkout experience, which is far less manual than taking orders over chat.",
  },
  {
    question: 'Can customers still pay the way they do over WhatsApp Business?',
    answer: 'Yes — moving from WhatsApp Business to an ecommerce website keeps UPI and Cash on Delivery as payment options, alongside cards and net banking through Razorpay.',
  },
]

export default function InstagramToWebsitePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Instagram Seller to Own Website' }]} />
      <main>
        <PageHero
          eyebrow="For Instagram & WhatsApp sellers"
          title="From Instagram seller "
          accent="to your own website"
          description="If you're taking orders through DMs and WhatsApp, Rawnn gives you a real storefront, cart and checkout — so customers can order and track themselves, and you stop managing a business in your chat inbox."
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/products/rawnn" className="btn-primary">
              See Modax Rawnn
            </Link>
          </div>
        </PageHero>

        <section className="section-padding bg-white">
          <div className="container-max">
            <ImagePlaceholder filename="instagram-to-website-hero.webp" ratio="aspect-[16/9]" className="mb-14 max-w-4xl mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {steps.map((s, i) => (
                <div key={s.title} className="bg-modax-blue-tint-2 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {i === 0 ? <Camera className="w-7 h-7 text-modax-blue-deep" /> : i === 1 ? <ArrowRight className="w-7 h-7 text-modax-blue-deep" /> : <MessageCircle className="w-7 h-7 text-modax-blue-deep" />}
                    <h3 className="font-bold text-modax-ink">{s.title}</h3>
                  </div>
                  <p className="text-sm text-modax-body">{s.description}</p>
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
