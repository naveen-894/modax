import Navigation from '../../components/Navigation'
import ContactHero from '../../components/ContactHero'
import ContactForm from '../../components/ContactForm'
import ContactInfo from '../../components/ContactInfo'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.modax.in'),
  title: 'Contact Modax | Book a Call About AI, Web & App Development',
  description: 'Have a task your team does manually every day, or need a website or app built? Contact Modax to see how we can help.',
  keywords: ['contact modax', 'AI tools inquiry', 'website development inquiry', 'app development inquiry', 'custom AI consultation'],
  alternates: {
    canonical: 'https://www.modax.in/contact',
  },
  openGraph: {
    title: 'Contact Modax | Book a Call About AI, Web & App Development',
    description: 'Get in touch to see how an AI tool, website or app can save your team hours of manual work.',
    url: '/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
