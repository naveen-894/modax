import Navigation from '../../components/Navigation'
import ContactHero from '../../components/ContactHero'
import ContactForm from '../../components/ContactForm'
import ContactInfo from '../../components/ContactInfo'
import Footer from '../../components/Footer'

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
