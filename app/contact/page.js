import Navigation from '../../components/Navigation'
import ContactHero from '../../components/ContactHero'
import ContactForm from '../../components/ContactForm'
import ContactInfo from '../../components/ContactInfo'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Contact Modax | Get Your Custom Software Quote Today',
  description: 'Ready to start your software development project? Contact Modax for a free consultation. Get expert advice on custom software, web apps, and digital solutions.',
  keywords: ['contact modax', 'software development quote', 'custom software consultation', 'software project inquiry', 'get quote'],
  openGraph: {
    title: 'Contact Modax | Start Your Software Project',
    description: 'Get in touch with our expert software development team for a free consultation and project quote.',
    url: 'https://modax.com/contact',
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
