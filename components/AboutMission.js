import { CheckCircle2, User, Lock, Zap } from 'lucide-react'
import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'

export default function AboutMission() {
  const values = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-modax-blue-deep" />,
      title: "Explainable, not black-box",
      description: "Every AI output comes with a reason, not just a number — you can see why."
    },
    {
      icon: <User className="w-8 h-8 text-modax-blue-deep" />,
      title: "Humans stay in control",
      description: "AI assists the decision. Your team makes the call, every time."
    },
    {
      icon: <Lock className="w-8 h-8 text-modax-blue-deep" />,
      title: "Your data stays yours",
      description: "Your documents and data are never used to train AI models."
    },
    {
      icon: <Zap className="w-8 h-8 text-modax-blue-deep" />,
      title: "Shipped, not just demoed",
      description: "Real products in use today — not a prototype that stalls after the pitch."
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <RevealItem direction="right" className="bg-modax-blue-tint rounded-xl p-8">
              <h3 className="text-2xl font-bold text-modax-ink mb-4">Why we build AI, websites and apps</h3>
              <p className="text-modax-body leading-relaxed">
                Most &ldquo;AI features&rdquo; are demos, and most websites take months to ship.
                At the Modax tech studio, we&apos;ve seen ops teams retyping the same data
                between systems, support teams answering the same questions over and over, and
                businesses stuck waiting on a site or app they need now. That&apos;s the work we
                target — not because it&apos;s flashy, but because it&apos;s where we save the most real hours.
              </p>
            </RevealItem>

            <RevealItem direction="left" className="bg-modax-blue-tint-2 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-modax-ink mb-4">What that means in practice</h3>
              <p className="text-modax-body leading-relaxed">
                We build custom AI tools, websites and apps for clients, and we build
                and run our own products — Screenr and Rawnn — so we&apos;re using the
                same tools we sell. A fixed scope, a short build time, and a product
                that&apos;s still running after the first demo.
              </p>
            </RevealItem>
          </RevealGroup>

          <Reveal className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-modax-ink mb-4">How we build</h3>
            <p className="text-lg text-modax-body">The principles that guide every tool we ship</p>
          </Reveal>

          <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <RevealItem key={index} className="text-center p-6 rounded-xl card-hover bg-modax-blue-tint-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-modax-blue-tint rounded-lg mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-modax-ink mb-3">
                  {value.title}
                </h4>
                <p className="text-modax-body text-sm leading-relaxed">
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
