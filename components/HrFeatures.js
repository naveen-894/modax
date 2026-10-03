import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'

export default function HrFeatures() {
  const items = [
    {
      title: "Bulk resume screening & ranking",
      description: "Upload a batch of resumes against a job description and get every candidate scored and ranked, with reasoning for each.",
    },
    {
      title: "Candidate tracking across roles and sites",
      description: "Keep a single view of who applied where, at what stage, so nothing falls through the cracks.",
    },
    {
      title: "Automated candidate follow-ups",
      description: "Status updates, interview reminders, and rejection notices sent automatically, in your voice.",
    },
    {
      title: "Client-ready shortlist reports",
      description: "Turn your top candidates into a clean, explainable report you can hand straight to a hiring manager or client.",
    },
    {
      title: "JD writing and standardization",
      description: "Draft and clean up job descriptions in your company's format, consistently, in minutes.",
    },
    {
      title: "HR policy Q&A assistant",
      description: "A chat assistant that answers employee questions straight from your HR policy documents.",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <Reveal className="text-center mb-16">
          <div className="eyebrow mb-4 justify-center">What we can build for you</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">
            Tools built around how hiring actually works
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <RevealItem key={index} className="card-surface card-hover p-6">
              <h3 className="text-lg font-bold text-ink-900 mb-2">
                {item.title}
              </h3>
              <p className="text-ink-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="text-center text-ink-500 mt-12">
            Custom AI tools built to fit your workflow, fixed scope, no surprises.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
