import PageHero from './PageHero'

export default function ContactHero() {
  const options = [
    {
      title: "Email us",
      description: "Get detailed responses to your questions",
      action: "modaxecommerce@gmail.com",
      href: "mailto:modaxecommerce@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Call us",
      description: "Speak directly with our team",
      action: "+91 91645 79092",
      href: "tel:+919164579092",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: "WhatsApp",
      description: "Quick responses on WhatsApp",
      action: "Message us",
      href: "https://wa.me/919164579092",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ]

  return (
    <PageHero
      eyebrow="Contact"
      title="Let's build something"
      accent=" together"
      description="Ready to transform your business with custom software or explore our products? We're here to help you succeed — get in touch and let's start the conversation."
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
        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>We respond within 24 hours</span>
      </div>
    </PageHero>
  )
}
