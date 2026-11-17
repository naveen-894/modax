import Navigation from '../../components/Navigation'
import ContactHero from '../../components/ContactHero'
import ContactForm from '../../components/ContactForm'
import ContactInfo from '../../components/ContactInfo'
import Footer from '../../components/Footer'
import Breadcrumbs from '../../components/Breadcrumbs'
import { SITE_URL } from '../../lib/constants'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Contact Modax | Book a Free 15-Min Call, Bengaluru',
  description: "Tell us what your team does manually or what you want built. Free, no-obligation 15-minute call. We reply within 24 hours. WhatsApp +91 91645 79092.",
  keywords: ['contact modax', 'AI tools inquiry', 'website development inquiry', 'ecommerce platform inquiry', 'custom AI consultation'],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Modax | Book a Free 15-Min Call, Bengaluru',
    description: 'Tell us what your team does manually or what you want built. Free, no-obligation 15-minute call.',
    url: '/contact',
    type: 'website',
    images: ['/images/og-image.jpg'],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Breadcrumbs items={[{ name: 'Contact' }]} />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
