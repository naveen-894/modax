import { CheckCircle2 } from 'lucide-react'
import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'

export default function WhyModax() {
  const reasons = [
    {
      title: "Explainable, not black-box",
      description: "Every AI output comes with a reason, not just a number — you can see why."
    },
    {
      title: "Humans stay in control",
      description: "AI assists the decision. Your team makes the call, every time."
    },
    {
      title: "Your data stays yours",
      description: "Your documents and data are never used to train AI models."
    },
    {
      title: "Shipped, not just demoed",
      description: "Real products in use today — not a prototype that stalls after the pitch."
    }
  ]

  return (
    <section className="section-padding bg-ink-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div className="container-max relative">
        <div className="grid lg:grid-cols-3 gap-16">
          <Reveal direction="right" className="lg:col-span-1">
            <div className="eyebrow mb-4 text-primary-300">Why Modax</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
              A technology partner, not just a vendor
            </h2>
            <p className="text-ink-300 leading-relaxed">
              We're committed to your long-term success through AI that holds up
              after launch, not just at the demo.
            </p>
          </Reveal>

          <RevealGroup className="lg:col-span-2 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {reasons.map((reason, index) => (
              <RevealItem key={index} className="flex gap-4">
                <span className="flex-shrink-0 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500/20 text-primary-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-ink-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
