import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "15-min call",
      description: "Tell us what your team does manually today. We'll tell you honestly if AI can help.",
    },
    {
      number: "02",
      title: "Fixed-scope proposal",
      description: "A clear scope and price for exactly what we'll build — no open-ended retainers.",
    },
    {
      number: "03",
      title: "Working AI tool in 2–3 weeks",
      description: "We build and ship something you can actually use, not a slide deck.",
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
        <Reveal className="text-center mb-14">
          <div className="eyebrow mb-4 justify-center">How we work</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">
            From first call to working tool
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <RevealItem key={step.number} className="bg-ink-50 rounded-xl p-6 h-full card-hover">
              <div className="w-10 h-10 bg-ink-900 rounded-lg flex items-center justify-center mb-5">
                <span className="text-white font-bold text-sm">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-ink-900 mb-2">
                {step.title}
              </h3>
              <p className="text-ink-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
