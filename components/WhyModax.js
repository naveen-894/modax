export default function WhyModax() {
  const reasons = [
    {
      title: "Quality first approach",
      description: "Every project undergoes rigorous testing and quality assurance before it ships."
    },
    {
      title: "Senior engineering team",
      description: "Our team combines deep technical expertise with business acumen — we understand code and commerce."
    },
    {
      title: "Innovation driven",
      description: "We track emerging technology and apply it where it actually moves the business forward."
    },
    {
      title: "Fast, predictable delivery",
      description: "Structured timelines and an experienced team mean your project lands on schedule."
    },
    {
      title: "Ongoing support",
      description: "Our relationship doesn't end at launch — we provide continuous support and optimization."
    },
    {
      title: "Transparent communication",
      description: "Regular updates and detailed reporting, with no hidden surprises along the way."
    }
  ]

  return (
    <section className="section-padding bg-ink-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div className="container-max relative">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <div className="eyebrow mb-4 text-primary-300">Why Modax</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
              A technology partner, not just a vendor
            </h2>
            <p className="text-ink-300 leading-relaxed mb-10">
              We're committed to your long-term success through engineering that
              holds up after launch, not just at the demo.
            </p>

            <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-ink-400 mt-1">Projects delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-ink-400 mt-1">Uptime guarantee</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-4">
                <span className="flex-shrink-0 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500/20 text-primary-300">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-ink-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
