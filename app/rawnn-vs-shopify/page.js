import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
  title: 'Shopify vs Custom Ecommerce Website: Rawnn Comparison | Modax',
  description: 'Shopify vs a custom ecommerce website: compare monthly fees, transaction fees, ownership and source code. See what moving from Shopify to your own website with Rawnn involves.',
  keywords: ['shopify vs custom ecommerce website', 'move from shopify to own website'],
  alternates: {
    canonical: `${SITE_URL}/rawnn-vs-shopify`,
  },
  openGraph: {
    title: 'Shopify vs Custom Ecommerce Website: Rawnn Comparison | Modax',
    description: 'Shopify vs a custom ecommerce website: compare monthly fees, transaction fees, ownership and source code.',
    url: '/rawnn-vs-shopify',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const rows = [
  { label: 'Pricing model', shopify: 'Monthly subscription + transaction fees', rawnn: 'One-time project fee, no commission' },
  { label: 'Source code', shopify: 'Not provided', rawnn: 'Full source code handed over' },
  { label: 'Hosting', shopify: "Shopify's servers", rawnn: 'Your own servers, your choice of host' },
  { label: 'Customisation', shopify: 'Theme + Liquid, limited by app ecosystem', rawnn: 'Custom-built storefront for your brand' },
  { label: 'Payments & shipping', shopify: 'Shopify Payments + shipping apps', rawnn: 'Razorpay + Shiprocket built in' },
]

const migrationSteps = [
  { step: '1', title: 'Export your catalogue & orders', description: 'We pull your product catalogue, customer list and order history out of Shopify.' },
  { step: '2', title: 'Rebuild on Rawnn', description: 'Your storefront, admin panel and owner panel are set up and themed for your brand.' },
  { step: '3', title: 'Reconnect payments & shipping', description: 'Razorpay and Shiprocket are configured so checkout and fulfilment work from day one.' },
  { step: '4', title: 'Go live on your domain', description: 'DNS is pointed to your new store; the old Shopify store is retired once you confirm everything matches.' },
]

const faqs = [
  {
    question: 'Is a custom ecommerce website better than Shopify?',
    answer: "It depends on your stage. Shopify is fast to start with. A custom ecommerce website like Rawnn pays off once you're an established brand paying recurring fees and want to own the platform outright, with no commission and the source code in hand.",
  },
  {
    question: 'How hard is it to move from Shopify to my own website?',
    answer: "We handle the migration: exporting your product catalogue and order history from Shopify, then rebuilding your storefront, payments and shipping on Rawnn before pointing your domain to the new store.",
  },
  {
    question: 'Will I lose my Shopify SEO rankings if I switch?',
    answer: 'We set up matching URL structures and redirects where possible to preserve SEO equity during the move — this is scoped as part of the migration plan.',
  },
]

export default function RawnnVsShopifyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Rawnn vs Shopify' }]} />
      <main>
        <PageHero
          eyebrow="Comparison"
          title="Shopify vs a "
          accent="custom ecommerce website"
          description="Shopify gets a store online fast. A custom ecommerce website like Rawnn gets you full ownership — no monthly fee, no commission, and the source code handed over. Here's how they compare, and what moving from Shopify to your own website looks like."
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/products/rawnn" className="btn-primary">
              See Modax Rawnn
            </Link>
            <Link href="/shopify-alternative-india" className="btn-secondary">
              Shopify alternative in India
            </Link>
          </div>
        </PageHero>

        <section className="section-padding bg-white">
          <div className="container-max">
            <ImagePlaceholder filename="rawnn-vs-shopify-comparison.webp" ratio="aspect-[16/9]" className="mb-14 max-w-4xl mx-auto" />
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
                  {rows.map((row) => (
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
          <div className="container-max">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-modax-ink mb-4">
                Moving from Shopify to your own website
              </h2>
              <p className="text-lg text-modax-body">
                A straightforward migration path, so you don&apos;t lose catalogue data or order history.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {migrationSteps.map((s) => (
                <div key={s.step} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-2xl font-bold text-modax-blue-deep mb-3">{s.step}</div>
                  <h3 className="font-bold text-modax-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-modax-body">{s.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/products/rawnn" className="inline-flex items-center gap-1.5 text-modax-blue-deep font-semibold hover:underline">
                See how the Modax ecommerce platform is built
                <ArrowRight className="w-4 h-4" />
              </Link>
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
