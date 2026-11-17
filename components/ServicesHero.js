import PageHero from './PageHero'
import HeroVisualPanel from './HeroVisualPanel'
import { CALENDLY_URL } from '../lib/constants'

export default function ServicesHero() {
  return (
    <PageHero
      eyebrow="Services"
      title="Software, AI & websites "
      accent="for growing businesses"
      description="We design and build Rawnn (our ecommerce platform), custom AI solutions and websites for growing businesses in India — each one a fixed-price software development project, not an open-ended retainer."
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
