import { Mail, Phone, MessageCircle, CheckCircle2 } from 'lucide-react'
import PageHero from './PageHero'

export default function ContactHero() {
  const options = [
    {
      title: "Email us",
      description: "Get detailed responses to your questions",
      action: process.env.CONTACT_EMAIL,
      href: `mailto:${process.env.CONTACT_EMAIL}`,
      icon: <Mail className="w-5 h-5" />,
    },
    {
      title: "Call us",
      description: "Speak directly with our team",
      action: process.env.CONTACT_PHONE_DISPLAY,
      href: `tel:${process.env.CONTACT_PHONE}`,
      icon: <Phone className="w-5 h-5" />,
    },
    {
      title: "WhatsApp",
      description: "Quick responses on WhatsApp",
      action: "Message us",
      href: `https://wa.me/${process.env.CONTACT_WHATSAPP}`,
      icon: <MessageCircle className="w-5 h-5" />,
    },
  ]

  return (
    <PageHero
      eyebrow="Contact"
      title="Let's build something"
      accent=" together"
      description="Have a task your team does manually every day? Tell us about it — we're here to help you see if AI can take it off your plate."
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        {options.map((option, index) => (
          <a
            key={index}
            href={option.href}
            target={option.href.startsWith('http') ? '_blank' : undefined}
            rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="card-surface p-5 hover:border-primary-300 hover:shadow-sm transition-all group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary-50 text-primary-700 mb-4 group-hover:bg-primary-100 transition-colors">
              {option.icon}
            </div>
            <h3 className="text-base font-semibold text-ink-900 mb-1">{option.title}</h3>
            <p className="text-sm text-ink-500 mb-3">{option.description}</p>
            <span className="text-sm font-medium text-primary-700">{option.action}</span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-8 text-sm text-ink-600">
        <CheckCircle2 className="w-4 h-4 text-green-600" />
        <span>We respond within 24 hours</span>
      </div>
    </PageHero>
  )
}
