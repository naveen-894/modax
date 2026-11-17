import Link from 'next/link'
import { CheckCircle2, XCircle } from 'lucide-react'
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
  title: 'Shopify Alternative India: One-Time Fee, No Monthly Cost | Modax',
  description: 'Rawnn is a Shopify alternative in India without a monthly fee — a one-time payment ecommerce platform with Razorpay and Shiprocket built in, and the source code handed over.',
  keywords: ['shopify alternative india', 'shopify alternative without monthly fee', 'cheaper than shopify india'],
  alternates: {
    canonical: `${SITE_URL}/shopify-alternative-india`,
  },
  openGraph: {
    title: 'Shopify Alternative India: One-Time Fee, No Monthly Cost | Modax',
    description: 'Rawnn is a Shopify alternative in India without a monthly fee — a one-time payment ecommerce platform with Razorpay and Shiprocket built in.',
    url: '/shopify-alternative-india',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const costRows = [
  { label: 'Platform fee (3 years)', shopify: 'TODO: verify current Shopify plan price × 36 months', rawnn: '₹0 after the one-time project fee' },
  { label: 'Transaction fees', shopify: 'TODO: verify Shopify payment gateway / transaction fee %', rawnn: 'None — no commission on sales' },
  { label: 'Paid apps (typical store)', shopify: 'TODO: verify average app subscription spend', rawnn: 'Core features (reviews, COD, AI listing) built in' },
  { label: 'Source code ownership', shopify: 'Not included — store lives on Shopify', rawnn: 'Full source code handed over on final payment' },
  { label: 'One-time project fee', shopify: '—', rawnn: 'From ₹99,000' },
]

const faqs = [
  {
    question: 'Is Rawnn really a Shopify alternative without a monthly fee?',
    answer: 'Yes. Rawnn is a one-time-payment ecommerce platform — you pay the project fee once, and there is no recurring Shopify-style monthly subscription from Modax afterwards. You still pay actual costs like hosting and your domain directly to those providers.',
  },
  {
    question: 'Is Rawnn cheaper than Shopify in India over time?',
    answer: "For most established stores, yes — Shopify's monthly plan, transaction fees and paid apps add up over 2-3 years, while Rawnn is a single one-time fee with no commission on sales afterwards.",
  },
  {
    question: 'Can I move my existing Shopify store to Rawnn?',
    answer: "Yes — see our dedicated guide on moving from Shopify to your own website for what that migration involves.",
  },
]

export default function ShopifyAlternativeIndiaPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Shopify Alternative India' }]} />
      <main>
        <PageHero
          eyebrow="Shopify alternative, India"
          title="A Shopify alternative in India, "
          accent="without the monthly fee."
          description="Rawnn is a one-time-payment ecommerce platform built by Modax — Razorpay and Shiprocket integrated, source code included, and no recurring subscription. Compare the real 3-year cost below."
          stats={[
            { value: '₹0/mo', label: 'Platform fee after launch' },
            { value: '0%', label: 'Commission on sales' },
          ]}
          image={null}
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/products/rawnn" className="btn-primary">
              See Modax Rawnn
            </Link>
            <Link href="/rawnn-vs-shopify" className="btn-secondary">
              Shopify vs custom ecommerce website
            </Link>
          </div>
        </PageHero>

        <section className="section-padding bg-white">
          <div className="container-max">
            <ImagePlaceholder
              filename="shopify-alternative-india-hero.webp"
              ratio="aspect-[16/9]"
              className="mb-14 max-w-4xl mx-auto"
            />

            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-modax-ink mb-4">
                3-year cost: Shopify vs Rawnn
              </h2>
              <p className="text-lg text-modax-body">
                Illustrative only — confirm current Shopify pricing for your plan before relying on these figures.
              </p>
            </div>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full border-separate border-spacing-0 bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-modax-border-lt min-w-[640px]">
                <thead>
                  <tr>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-modax-body bg-white border-b border-modax-border-lt"></th>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-modax-body bg-white border-b border-modax-border-lt">Shopify</th>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-modax-blue-deep bg-modax-blue-tint border-b border-modax-border-lt">Rawnn</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((row, index) => (
                    <tr key={row.label}>
                      <th scope="row" className="p-4 text-left text-sm font-semibold text-modax-body border-b border-modax-border-lt">{row.label}</th>
                      <td className="p-4 text-sm text-modax-body border-b border-modax-border-lt">{row.shopify}</td>
                      <td className="p-4 text-sm font-semibold text-modax-ink bg-modax-blue-tint-2 border-b border-modax-border-lt">{row.rawnn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-padding bg-modax-blue-tint-2">
          <div className="container-max max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-modax-ink mb-10 text-center">
              Why brands look for a Shopify alternative
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <XCircle className="w-6 h-6 text-red-500 mb-3" />
                <h3 className="font-bold text-modax-ink mb-2">Shopify</h3>
                <p className="text-sm text-modax-body">Recurring monthly plan, transaction fees on many gateways, and paid apps for features Rawnn ships with by default.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm ring-2 ring-modax-blue">
                <CheckCircle2 className="w-6 h-6 text-green-600 mb-3" />
                <h3 className="font-bold text-modax-ink mb-2">Rawnn</h3>
                <p className="text-sm text-modax-body">One-time project fee, no commission, Razorpay + Shiprocket built in, and the source code is yours — see the <Link href="/products/rawnn" className="text-modax-blue-deep font-semibold hover:underline">Modax ecommerce platform</Link> page for full details.</p>
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
