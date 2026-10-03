import Navigation from '../../components/Navigation'
import ContactHero from '../../components/ContactHero'
import ContactForm from '../../components/ContactForm'
import ContactInfo from '../../components/ContactInfo'
import Footer from '../../components/Footer'

export const metadata = {
  metadataBase: new URL('https://modax.in'),
  title: 'Contact Modax | Book a Call About Custom AI Tools',
  description: 'Have a task your team does manually every day? Contact Modax to see if a custom AI tool can take it off your plate.',
  keywords: ['contact modax', 'AI tools inquiry', 'custom AI consultation', 'AI for HR inquiry'],
  openGraph: {
    title: 'Contact Modax | Book a Call About Custom AI Tools',
    description: 'Get in touch to see if a custom AI tool can save your team hours of manual work.',
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
