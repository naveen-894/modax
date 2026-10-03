import PageHero from './PageHero'

export default function HrHero() {
  return (
    <PageHero
      eyebrow="For HR & recruitment teams"
      title="AI tools that save HR teams"
      accent=" hours every week"
      description="Built for recruitment agencies and in-house HR teams, designed around how you already work."
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a href="https://ai-resume-matcher-fed.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Try it free, no sign-up
        </a>
        <a href="https://calendly.com/vnaveen894/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
          Book a 15-min call
        </a>
      </div>
    </PageHero>
  )
}
