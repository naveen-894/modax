import PageHero from './PageHero'
import HeroVisualPanel from './HeroVisualPanel'
import { CALENDLY_URL } from '../lib/constants'

export default function ServicesHero() {
  return (
    <PageHero
      eyebrow="Services"
      title="AI, websites & apps,"
      accent=" built for real work"
      description="We design and build AI tools, websites and apps for growing businesses — document processing, scoring and matching, assistants, automation, and the web or app product you need shipped."
      visual={<HeroVisualPanel />}
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Book a 15-min call
        </a>
        <a href="#services-list" className="btn-secondary">
          View services
        </a>
      </div>
    </PageHero>
  )
}
