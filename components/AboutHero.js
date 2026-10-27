import PageHero from './PageHero'
import HeroVisualPanel from './HeroVisualPanel'

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="About Modax"
      title="A founder-led"
      accent=" tech studio"
      description="Modax is a founder-led tech studio in Bengaluru. We build AI tools, websites and apps for growing businesses — and we own products that prove it."
      visual={<HeroVisualPanel />}
    />
  )
}
