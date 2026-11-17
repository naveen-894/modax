import Link from 'next/link'
import { MapPin, MessageCircle, CheckCircle2 } from 'lucide-react'
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
  title: 'Ecommerce Website Development Company in Bangalore | Modax',
  description: 'Modax is an ecommerce website development company in Bengaluru building Rawnn, a one-time-fee ecommerce platform with Razorpay and Shiprocket built in. Serving Bangalore and all of India.',
  keywords: ['ecommerce website development company bangalore', 'ecommerce website development bengaluru', 'ecommerce website cost bangalore'],
  alternates: {
    canonical: `${SITE_URL}/ecommerce-website-development-bangalore`,
  },
  openGraph: {
    title: 'Ecommerce Website Development Company in Bangalore | Modax',
    description: 'Modax is an ecommerce website development company in Bengaluru building Rawnn, a one-time-fee ecommerce platform.',
    url: '/ecommerce-website-development-bangalore',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const faqs = [
  {
    question: 'Do you only build ecommerce websites for Bangalore-based businesses?',
    answer: "No — Modax is based in Bengaluru and works with service-area clients across India. Being local in Bangalore just means we're easy to reach for a call or an in-person walkthrough if you're nearby.",
  },
  {
    question: 'How much does an ecommerce website cost in Bangalore?',
    answer: 'Rawnn plans start from ₹99,000 as a one-time fee — see our full cost guide for what each tier includes and what gets billed at actual cost.',
  },
  {
    question: 'How long does ecommerce website development take?',
    answer: 'Most stores are live in 2-6 weeks depending on the plan and how ready your catalogue and brand assets are.',
  },
]

export default function EcommerceWebsiteDevelopmentBangalorePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Ecommerce Website Development Bangalore' }]} />
      <main>
        <PageHero
          eyebrow="Bengaluru · Bangalore · India"
          title="Ecommerce website development "
          accent="company in Bangalore"
          description="Modax is an ecommerce website development company based in Bengaluru, building Rawnn — a one-time-fee platform with Razorpay and Shiprocket integrated. We work with brands across Bangalore and the rest of India."
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/products/rawnn" className="btn-primary">
              See Modax Rawnn
            </Link>
            <Link href="/ecommerce-website-cost-india" className="btn-secondary">
              Ecommerce website cost in India
            </Link>
          </div>
        </PageHero>

        <section className="section-padding bg-white">
          <div className="container-max">
            <ImagePlaceholder filename="ecommerce-website-development-bangalore-hero.webp" ratio="aspect-[16/9]" className="mb-14 max-w-4xl mx-auto" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              <div className="text-center p-6">
                <MapPin className="w-8 h-8 text-modax-blue-deep mx-auto mb-4" />
                <h3 className="font-bold text-modax-ink mb-2">Based in Bengaluru</h3>
                <p className="text-sm text-modax-body">A service-area business serving Bangalore and clients across India — no office visits needed to get started.</p>
              </div>
              <div className="text-center p-6">
                <MessageCircle className="w-8 h-8 text-modax-blue-deep mx-auto mb-4" />
                <h3 className="font-bold text-modax-ink mb-2">Talk to us directly</h3>
                <p className="text-sm text-modax-body">
                  WhatsApp{' '}
                  <a href={`https://wa.me/${process.env.CONTACT_WHATSAPP}`} className="text-modax-blue-deep font-semibold hover:underline">
                    {process.env.CONTACT_PHONE_DISPLAY}
                  </a>{' '}
                  or email{' '}
                  <a href={`mailto:${process.env.CONTACT_EMAIL}`} className="text-modax-blue-deep font-semibold hover:underline">
                    {process.env.CONTACT_EMAIL}
                  </a>.
                </p>
              </div>
              <div className="text-center p-6">
                <CheckCircle2 className="w-8 h-8 text-modax-blue-deep mx-auto mb-4" />
                <h3 className="font-bold text-modax-ink mb-2">Find us on Google</h3>
                {/* TODO: add the Modax Google Business Profile URL once claimed/verified */}
                <p className="text-sm text-modax-body">Google Business Profile link — TODO: add once set up.</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-modax-ink mb-4">
                An ecommerce website development company for Bengaluru, built to serve all of India
              </h2>
              <p className="text-modax-body leading-relaxed">
                Whether you call it Bangalore or Bengaluru, the Rawnn ecommerce platform is the same: a storefront,
                admin panel and owner panel on your own domain, with Razorpay and Shiprocket built in and the source
                code handed over — no commission, ever.
              </p>
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
