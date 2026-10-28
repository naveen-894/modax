import PageHero from './PageHero'
import HeroVisualPanel from './HeroVisualPanel'
import { CALENDLY_URL } from '../lib/constants'

export default function ServicesHero() {
  return (
    <PageHero
      eyebrow="Services"
      title="Software development"
      accent=" for businesses"
      description="We design and build websites and apps for growing businesses — from marketing sites and web apps to mobile apps and the product features you need shipped."
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
