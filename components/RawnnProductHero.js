import { CheckCircle2 } from 'lucide-react'
import PageHero from './PageHero'

export default function RawnnProductHero() {
  return (
    <PageHero
      eyebrow="AI-assisted D2C platform for fashion brands"
      title="Meet "
      accent="Rawnn"
      description="A two-sided platform for fashion brands: an AI-assisted retailer dashboard that drafts your product listings, paired with a location-aware customer app that gets you discovered by shoppers nearby."
      stats={[
        { value: 'AI', label: 'Drafted listings' },
        { value: '2', label: 'Connected apps' },
      ]}
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a href="#demo" className="btn-primary">
          Start free trial
        </a>
        <a href="#features" className="btn-secondary">
          Explore features
        </a>
      </div>

      <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-800 px-4 py-2.5 rounded-md text-sm font-medium mt-8">
        <CheckCircle2 className="w-4 h-4" />
        Built &amp; owned by Modax
      </div>
    </PageHero>
  )
}
