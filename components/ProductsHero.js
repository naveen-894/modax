import PageHero from './PageHero'
import HeroVisualPanel from './HeroVisualPanel'

export default function ProductsHero() {
  return (
    <PageHero
      eyebrow="Products"
      title="Products"
      accent=" built by Modax"
      description="We don't just build tools for others — we create and run our own products, from AI to a fully owned ecommerce platform. See what we've shipped."
      visual={<HeroVisualPanel />}
    >
      <div className="mt-10">
        <a href="#products" className="btn-primary">
          Explore products
        </a>
      </div>
    </PageHero>
  )
}
