import PageHero from './PageHero'

export default function ProductsHero() {
  return (
    <PageHero
      eyebrow="Products"
      title="AI products"
      accent=" built by Modax"
      description="We don't just build AI tools for others — we create and own AI products that solve real business problems. See what we've shipped."
    >
      <div className="mt-10">
        <a href="#products" className="btn-primary">
          Explore products
        </a>
      </div>
    </PageHero>
  )
}
