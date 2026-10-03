import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import Reveal from './motion/Reveal'

export default function BuiltForHR() {
  const items = [
    "Bulk resume screening",
    "Candidate tracking",
    "Automated follow-ups",
    "Shortlist reports",
    "JD writing",
  ]

  return (
    <section className="section-padding bg-ink-50">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <div className="eyebrow mb-4">Built for HR teams</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-5 tracking-tight">
              HR and recruitment are where we started
            </h2>
            <p className="text-lg text-ink-500 mb-8 leading-relaxed">
              Screening resumes, tracking candidates, chasing follow-ups — hiring runs
              on repetitive work. We build AI tools that take that work off your plate
              so your team can focus on talking to people, not paperwork.
            </p>
            <Link href="/hr" className="btn-primary">
              See AI tools for HR teams
            </Link>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="card-surface card-hover p-8">
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-ink-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
