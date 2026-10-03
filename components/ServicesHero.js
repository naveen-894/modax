import PageHero from './PageHero'

export default function ServicesHero() {
  return (
    <PageHero
      eyebrow="AI Solutions"
      title="AI tools, built"
      accent=" for real work"
      description="We design and build custom AI tools that save your team hours of manual work — document processing, scoring and matching, assistants, and automation, built around your actual workflow."
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a href="https://calendly.com/vnaveen894/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Book a 15-min call
        </a>
        <a href="#services-list" className="btn-secondary">
          View services
        </a>
      </div>
    </PageHero>
  )
}
