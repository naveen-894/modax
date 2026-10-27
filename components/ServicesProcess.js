import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'

export default function ServicesProcess() {
  const steps = [
    {
      number: "01",
      title: "15-min call",
      description: "Tell us what you need built, or what your team does manually today. We'll tell you honestly how we'd approach it.",
    },
    {
      number: "02",
      title: "Fixed-scope proposal",
      description: "A clear scope and price for exactly what we'll build — no open-ended retainers.",
    },
    {
      number: "03",
      title: "Working product in weeks",
      description: "Most projects ship in 2–6 weeks, depending on scope. You'll get a firm date in the proposal.",
    },
    {
      number: "04",
      title: "Ongoing support and improvements",
      description: "We stay on to fix, tune and extend the tool as your needs change.",
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            How we work
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            A straightforward process, from the first call to a working tool.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step) => (
            <RevealItem key={step.number} className="bg-ink-50 rounded-xl p-6 h-full border-2 border-transparent hover:border-primary-200 card-hover">
              <div className="w-12 h-12 bg-ink-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-ink-900 mb-3">
                {step.title}
              </h3>
              <p className="text-ink-500 leading-relaxed">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
