import Navigation from '../../../components/Navigation'
import RawnnProductHero from '../../../components/RawnnProductHero'
import RawnnProductFeatures from '../../../components/RawnnProductFeatures'
import RawnnOwnership from '../../../components/RawnnOwnership'
import RawnnProductHowItWorks from '../../../components/RawnnProductHowItWorks'
import RawnnProductPricing from '../../../components/RawnnProductPricing'
import RawnnProductDemo from '../../../components/RawnnProductDemo'
import Footer from '../../../components/Footer'
import Breadcrumbs from '../../../components/Breadcrumbs'
import FAQAccordion from '../../../components/FAQAccordion'
import JsonLd from '../../../components/JsonLd'
import { SITE_URL } from '../../../lib/constants'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Rawnn: Ecommerce Platform, Pay Once, No Commission | Modax',
  description: 'A complete ecommerce platform on your own domain: storefront, admin and owner panels, Razorpay and Shiprocket built in. One-time fee from ₹99,000.',
  keywords: ['rawnn', 'rawnn ecommerce platform', 'ecommerce platform one time payment', 'ecommerce website one time cost', 'ecommerce platform without monthly fee', 'no commission ecommerce platform', 'zero commission ecommerce website india', 'own your ecommerce platform', 'ecommerce website with source code', 'self hosted ecommerce platform india', 'custom ecommerce website development india'],
  alternates: {
    canonical: `${SITE_URL}/products/rawnn`,
  },
  openGraph: {
    title: 'Rawnn: Ecommerce Platform, Pay Once, No Commission | Modax',
    description: 'A complete ecommerce platform on your own domain: storefront, admin and owner panels, Razorpay and Shiprocket built in. One-time fee from ₹99,000.',
    url: '/products/rawnn',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Rawnn',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Rawnn is a complete ecommerce platform — a customer website, store admin panel and owner control panel, on your own servers. One-time fee, no monthly cost, no commission, with full source code handed over.',
  brand: {
    '@type': 'Brand',
    name: 'Modax',
  },
  url: `${SITE_URL}/products/rawnn`,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '99000',
    highPrice: '299000',
    offerCount: '3',
    offers: [
      {
        '@type': 'Offer',
        name: 'Rawnn Basic',
        description: 'Single SKU store, does it all with one login.',
        price: '99000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/products/rawnn#pricing`,
      },
      {
        '@type': 'Offer',
        name: 'Rawnn Growth',
        description: 'Growing brand automating ops & adding staff roles.',
        price: '189000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/products/rawnn#pricing`,
      },
      {
        '@type': 'Offer',
        name: 'Rawnn Premium',
        description: 'Established brand, full ops control & reporting.',
        price: '299000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: `${SITE_URL}/products/rawnn#pricing`,
      },
    ],
  },
}

const faqs = [
  {
    question: 'Is there a monthly subscription?',
    answer: "No. Rawnn is an ecommerce platform with a one-time payment — you pay the project fee once and own the platform, with no monthly fee or subscription afterwards. You're billed at actual cost only for things like hosting, your domain, and third-party services such as Razorpay or Shiprocket.",
  },
  {
    question: 'Do I get the source code?',
    answer: "Yes. Rawnn is an ecommerce website with source code included — the full codebase for your storefront, admin panel and owner panel is handed over on final payment, on every plan, so you can self-host it anywhere.",
  },
  {
    question: 'Is there any commission on sales?',
    answer: "No. Rawnn is a no-commission ecommerce platform — Modax takes zero commission on your sales, unlike marketplaces that typically charge 20-30% per order.",
  },
  {
    question: 'Does it support Cash on Delivery (COD)?',
    answer: 'Yes, Cash on Delivery is available on every plan alongside Razorpay for UPI, cards and net banking.',
  },
  {
    question: 'Does it integrate Razorpay and Shiprocket?',
    answer: 'Yes. Razorpay integration handles payments on every plan, and Growth and Premium are Shiprocket-integrated for automatic courier booking, labels, tracking and RTO handling.',
  },
  {
    question: 'Does Rawnn have an admin panel?',
    answer: 'Yes — every plan ships with a store admin panel for day-to-day operations plus a separate owner control panel for oversight and reporting.',
  },
  {
    question: 'Can AI list my products for me?',
    answer: 'On Growth and Premium, yes — upload a product photo and AI drafts the title, description and variants for you to review and publish.',
  },
  {
    question: 'What does Rawnn cost to run after launch?',
    answer: "You pay only your own hosting costs directly to your hosting provider, plus actual charges for things like your domain and third-party services such as Razorpay or Shiprocket. There's no monthly fee or subscription from Modax.",
  },
  {
    question: 'Who manages the servers once it is live?',
    answer: "Rawnn is a self-hosted ecommerce platform for the Indian market — it runs on servers you choose and control, not a shared multi-tenant platform. You can move hosts any time since the full source code is yours.",
  },
  {
    question: 'How long does setup take, and what happens after launch?',
    answer: 'Delivery is 3–10 weeks depending on plan. Setup is hands-on and founder-led, with a dedicated store built and themed for your brand — not a one-size-fits-all install. The source code is handed over on final payment, and ongoing free support continues for the period listed on your plan.',
  },
  {
    question: 'Is Rawnn built for D2C brands or retail businesses?',
    answer: "Both. Rawnn is a readymade ecommerce website in India, set up for your brand in 3–10 weeks — equally suited as a D2C brand store or a b2c ecommerce website for a retail business. It's custom ecommerce website development in India, not a shared template: we handle design, build, payments, shipping and launch end to end, as a turnkey ecommerce solution for India.",
  },
]

export default function RawnnProductPage() {
  return (
    <div className="min-h-screen">
      <JsonLd data={softwareApplicationSchema} />
      <Navigation />
      <Breadcrumbs items={[{ name: 'Products', href: '/products' }, { name: 'Rawnn' }]} />
      <main>
        <RawnnProductHero />
        <RawnnProductFeatures />
        <RawnnOwnership />
        <RawnnProductHowItWorks />
        <RawnnProductPricing />
        <RawnnProductDemo />
        <FAQAccordion items={faqs} compact />
      </main>
      <Footer />
    </div>
  )
}
