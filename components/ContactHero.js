import { Mail, Phone, MessageCircle, CheckCircle2 } from 'lucide-react'
import PageHero from './PageHero'
import HeroVisualPanel from './HeroVisualPanel'

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
      description="Have a task your team does manually every day, or need a website or app built? Tell us about it — we're here to help."
      visual={<HeroVisualPanel />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        {options.map((option, index) => (
          <a
            key={index}
            href={option.href}
            target={option.href.startsWith('http') ? '_blank' : undefined}
            rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="card-surface p-5 hover:border-modax-blue hover:shadow-sm transition-all group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-modax-blue-tint text-modax-blue-deep mb-4 group-hover:bg-modax-blue-tint-2 transition-colors">
              {option.icon}
            </div>
            <h3 className="text-base font-semibold text-modax-ink mb-1">{option.title}</h3>
            <p className="text-sm text-modax-body mb-3">{option.description}</p>
            <span className="text-sm font-medium text-modax-blue">{option.action}</span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-8 text-sm text-modax-body">
        <CheckCircle2 className="w-4 h-4 text-green-600" />
        <span>We respond within 24 hours</span>
      </div>
    </PageHero>
  )
}
