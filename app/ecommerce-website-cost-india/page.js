import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
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
  title: 'Ecommerce Website Development Cost in India (2026 Guide) | Modax',
  description: 'How much does an ecommerce website cost in India? An honest breakdown of Rawnn’s Basic, Growth and Premium pricing, plus what gets billed at actual cost — hosting, domain and AI credentials.',
  keywords: ['ecommerce website development cost india', 'ecommerce website price in india', 'how much does an ecommerce website cost in india'],
  alternates: {
    canonical: `${SITE_URL}/ecommerce-website-cost-india`,
  },
  openGraph: {
    title: 'Ecommerce Website Development Cost in India (2026 Guide) | Modax',
    description: 'An honest breakdown of what an ecommerce website costs in India — one-time platform fee vs ongoing actual costs.',
    url: '/ecommerce-website-cost-india',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const tiers = [
  { name: 'Basic', price: '₹99,000', includes: 'Full storefront, Razorpay + COD, one admin login, manual shipping updates', timeline: '3-4 weeks' },
  { name: 'Growth', price: '₹1,89,000', includes: 'Everything in Basic + staff roles, AI product listing, Shiprocket auto-shipping, analytics', timeline: '5-7 weeks' },
  { name: 'Premium', price: '₹2,99,000', includes: 'Everything in Growth + custom theme, live chat, advanced analytics, 1st-year AMC', timeline: '8-10 weeks' },
]

const actualCosts = [
  { label: 'Hosting', note: 'Billed by your hosting provider, not Modax — varies with traffic and server size.' },
  { label: 'Domain name', note: 'Billed by your domain registrar, typically an annual renewal.' },
  { label: 'AI credentials / API usage', note: 'For AI product listing (Growth & Premium), model usage is billed at the provider’s actual rate.' },
  { label: 'Payment gateway & SMS/courier charges', note: 'Razorpay, SMS OTP and Shiprocket courier charges are pass-through costs at actuals, not part of the project fee.' },
]

const faqs = [
  {
    question: 'How much does an ecommerce website cost in India?',
    answer: 'With Rawnn, ecommerce website development cost in India starts from ₹99,000 as a one-time fee for the Basic plan, rising to ₹2,99,000 for Premium. There is no monthly subscription or commission on sales on top of that.',
  },
  {
    question: 'What is the ecommerce website price in India for an established brand?',
    answer: 'Most established brands land on the Growth plan at ₹1,89,000 — it adds staff roles, AI-assisted product listing and automated Shiprocket shipping on top of the Basic feature set.',
  },
  {
    question: 'What costs are not included in the project fee?',
    answer: 'Hosting, your domain name, AI credential/API usage for AI listing, and pass-through charges like payment gateway fees, SMS OTP and courier charges are billed at actual cost, not included in the one-time project fee.',
  },
  {
    question: 'Is there a cheaper ecommerce website option under ₹1 lakh?',
    answer: 'Yes — the Basic plan at ₹99,000 is under ₹1 lakh and covers a complete single-SKU store with Razorpay, COD, and one admin login.',
  },
]

export default function EcommerceWebsiteCostIndiaPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Ecommerce Website Cost in India' }]} />
      <main>
        <PageHero
          eyebrow="Pricing guide"
          title="Ecommerce website development "
          accent="cost in India"
          description="How much does an ecommerce website cost in India? Here's an honest breakdown of Rawnn's one-time project fee by tier, and exactly what gets billed separately at actual cost."
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/products/rawnn" className="btn-primary">
              See Modax Rawnn pricing
            </Link>
          </div>
        </PageHero>

        <section className="section-padding bg-white">
          <div className="container-max">
            <ImagePlaceholder filename="ecommerce-website-cost-india-hero.webp" ratio="aspect-[16/9]" className="mb-14 max-w-4xl mx-auto" />

            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-modax-ink mb-4">
                Three pricing tiers, one-time fee
              </h2>
              <p className="text-lg text-modax-body">
                The ecommerce website price in India below is for the platform build — not a recurring charge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {tiers.map((tier) => (
                <div key={tier.name} className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-modax-border-lt">
                  <h3 className="text-lg font-bold text-modax-ink mb-1">{tier.name}</h3>
                  <div className="text-2xl font-bold text-modax-navy bg-modax-gold-tint inline-block px-3 py-1 rounded-md mb-4">{tier.price}</div>
                  <p className="text-sm text-modax-body mb-3">{tier.includes}</p>
                  <p className="text-xs text-modax-muted-2 font-semibold uppercase tracking-wide">{tier.timeline} delivery</p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-modax-ink mb-6 text-center">What's billed at actual cost, separately</h3>
              <div className="space-y-4">
                {actualCosts.map((cost) => (
                  <div key={cost.label} className="flex items-start gap-3 bg-modax-blue-tint-2 rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 text-modax-blue-deep flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-modax-ink text-sm">{cost.label}</p>
                      <p className="text-sm text-modax-body">{cost.note}</p>
                    </div>
                  </div>
                ))}
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
