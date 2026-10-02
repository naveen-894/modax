import Link from 'next/link'
import PageHero from './PageHero'

export default function ServicesHero() {
  return (
    <PageHero
      eyebrow="Services"
      title="Custom software"
      accent=" development"
      description="We build scalable software solutions that drive business growth. From web and mobile apps to AI-powered features, we deliver reliable, high-performance software tailored to your needs."
      stats={[
        { value: '20+', label: 'Projects delivered' },
        { value: '99.9%', label: 'Uptime guarantee' },
        { value: '24/7', label: 'Support' },
      ]}
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link href="/contact" className="btn-primary">
          Start your project
        </Link>
        <a href="#services-list" className="btn-secondary">
          View services
        </a>
      </div>
    </PageHero>
  )
}
