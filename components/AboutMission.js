import { CheckCircle2, User, Lock, Zap } from 'lucide-react'
import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'

export default function AboutMission() {
  const values = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary-600" />,
      title: "Explainable, not black-box",
      description: "Every AI output comes with a reason, not just a number — you can see why."
    },
    {
      icon: <User className="w-8 h-8 text-primary-600" />,
      title: "Humans stay in control",
      description: "AI assists the decision. Your team makes the call, every time."
    },
    {
      icon: <Lock className="w-8 h-8 text-primary-600" />,
      title: "Your data stays yours",
      description: "Your documents and data are never used to train AI models."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: "Shipped, not just demoed",
      description: "Real products in use today — not a prototype that stalls after the pitch."
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <RevealItem direction="right" className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-ink-900 mb-4">Why we focus on AI that removes manual work</h3>
              <p className="text-ink-700 leading-relaxed">
                Most "AI features" are demos. We've seen HR teams drowning in resumes,
                ops teams retyping the same data between systems, and support teams
                answering the same questions over and over. That's the work we target —
                not because it's flashy, but because it's where AI saves the most real hours.
              </p>
            </RevealItem>

            <RevealItem direction="left" className="bg-gradient-to-br from-ink-50 to-ink-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-ink-900 mb-4">What that means in practice</h3>
              <p className="text-ink-700 leading-relaxed">
                We build custom AI tools for clients, and we build and run our own
                AI products — Screenr and Rawnn — so we're using the same
                tools we sell. A fixed scope, a short build time, and a tool that's
                still running after the first demo.
              </p>
            </RevealItem>
          </RevealGroup>

          <Reveal className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">How we build</h3>
            <p className="text-lg text-ink-500">The principles that guide every tool we ship</p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <RevealItem key={index} className="text-center p-6 rounded-xl card-hover bg-ink-50">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-lg mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-ink-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-ink-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
