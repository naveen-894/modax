import PageHero from './PageHero'
import HeroVisualPanel from './HeroVisualPanel'

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="About Modax"
      title="A founder-led tech studio "
      accent="in Bengaluru"
      description="Modax is a founder-led Bengaluru tech studio. We build AI tools, websites, apps and ecommerce platforms for growing businesses — and we own products that prove it."
      visual={<HeroVisualPanel />}
    />
  )
}
