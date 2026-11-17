import Link from 'next/link'
import { CheckCircle2, PlugZap } from 'lucide-react'
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
  title: 'WooCommerce Alternative India: No Plugin Stitching | Modax',
  description: 'Rawnn is a WooCommerce alternative for India with Razorpay and Shiprocket built in from day one — no stitching together plugins for payments, shipping and inventory.',
  keywords: ['woocommerce alternative india'],
  alternates: {
    canonical: `${SITE_URL}/rawnn-vs-woocommerce`,
  },
  openGraph: {
    title: 'WooCommerce Alternative India: No Plugin Stitching | Modax',
    description: 'Rawnn is a WooCommerce alternative for India with Razorpay and Shiprocket built in from day one.',
    url: '/rawnn-vs-woocommerce',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const rows = [
  { label: 'Payments', woo: 'Separate payment gateway plugin + setup', rawnn: 'Razorpay integrated out of the box' },
  { label: 'Shipping', woo: 'Separate shipping/courier plugin', rawnn: 'Shiprocket integrated (Growth & Premium)' },
  { label: 'Inventory & variants', woo: 'Depends on theme/plugin combination', rawnn: 'Variant-level inventory built in' },
  { label: 'Hosting & updates', woo: 'You manage WordPress core, plugin and theme updates', rawnn: 'A single platform, no plugin conflicts to manage' },
  { label: 'Ownership', woo: 'Self-hosted, but stitched from many plugins', rawnn: 'Self-hosted, source code handed over, one codebase' },
]

const faqs = [
  {
    question: 'Why look for a WooCommerce alternative in India?',
    answer: 'WooCommerce is self-hosted and flexible, but payments, shipping, inventory and reviews usually mean stitching together several plugins — each with its own updates, conflicts and support. Rawnn ships with Razorpay and Shiprocket integrated as one platform.',
  },
  {
    question: 'Is Rawnn also self-hosted like WooCommerce?',
    answer: 'Yes — Rawnn runs on your own servers and the full source code is handed over on final payment, the same self-hosted ownership model, without the plugin stitching.',
  },
]

export default function RawnnVsWoocommercePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Rawnn vs WooCommerce' }]} />
      <main>
        <PageHero
          eyebrow="Comparison"
          title="A "
          accent="WooCommerce alternative"
          description="WooCommerce needs a plugin for payments, another for shipping, another for inventory. Rawnn ships with Razorpay and Shiprocket integrated from day one — one platform, not a stack of plugins to maintain."
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/products/rawnn" className="btn-primary">
              See Modax Rawnn
            </Link>
          </div>
        </PageHero>

        <section className="section-padding bg-white">
          <div className="container-max">
            <ImagePlaceholder filename="rawnn-vs-woocommerce-comparison.webp" ratio="aspect-[16/9]" className="mb-14 max-w-4xl mx-auto" />
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full border-separate border-spacing-0 bg-white rounded-xl overflow-hidden shadow-sm ring-1 ring-modax-border-lt min-w-[640px]">
                <thead>
                  <tr>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-modax-body bg-white border-b border-modax-border-lt"></th>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-modax-body bg-white border-b border-modax-border-lt">WooCommerce</th>
                    <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-modax-blue-deep bg-modax-blue-tint border-b border-modax-border-lt">Rawnn</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" className="p-4 text-left text-sm font-semibold text-modax-body border-b border-modax-border-lt">{row.label}</th>
                      <td className="p-4 text-sm text-modax-body border-b border-modax-border-lt">{row.woo}</td>
                      <td className="p-4 text-sm font-semibold text-modax-ink bg-modax-blue-tint-2 border-b border-modax-border-lt">{row.rawnn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="max-w-3xl mx-auto mt-14 bg-modax-blue-tint-2 rounded-xl p-8 flex items-start gap-4">
              <PlugZap className="w-8 h-8 text-modax-blue-deep flex-shrink-0" />
              <p className="text-modax-body leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-green-600 inline -mt-0.5 mr-1" />
                No plugin stitching: Razorpay and Shiprocket come integrated, so there's nothing extra to install, license or keep updated separately.
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
