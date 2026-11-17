import PageHero from './PageHero'
import HeroVisualPanel from './HeroVisualPanel'

export default function ProductsHero() {
  return (
    <PageHero
      eyebrow="Products"
      title="Products we've "
      accent="built and run"
      description="We don't just build tools for others — we create and run our own products: Rawnn, our pay-once ecommerce platform, and Screenr, our AI resume-to-job-description matcher."
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
