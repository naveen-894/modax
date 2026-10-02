import PageHero from './PageHero'

export default function ProductsHero() {
  return (
    <PageHero
      eyebrow="Products"
      title="Products built"
      accent=" by Modax"
      description="We don't just build software for others — we create and own products that solve real business problems. Discover our flagship products designed for modern businesses."
      stats={[
        { value: '1+', label: 'Products launched' },
        { value: '99.9%', label: 'Platform uptime' },
      ]}
    >
      <div className="mt-10">
        <a href="#products" className="btn-primary">
          Explore products
        </a>
      </div>
    </PageHero>
  )
}
