import { CheckCircle2 } from 'lucide-react'
import PageHero from './PageHero'
import HeroVisualPanel from './HeroVisualPanel'
import { SCREENR_URL, SCREENR_PRICING_NOTE } from '../lib/constants'

export default function AiResumeMatcherHero() {
  return (
    <PageHero
      eyebrow="AI-powered resume & job description matching"
      title="Meet "
      accent="Screenr"
      description="Find the right fit, faster. Give it a job description and a resume — in about 15 seconds it reads both, compares them, and returns a clear match score with a plain-English explanation of why."
      stats={[
        { value: '~15s', label: 'Per match' },
        { value: '0-100%', label: 'Explainable score' },
      ]}
      visual={<HeroVisualPanel />}
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a href={SCREENR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Try it free
        </a>
        <a href="#features" className="btn-secondary">
          Explore features
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-8">
        <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-800 px-4 py-2.5 rounded-md text-sm font-medium">
          <CheckCircle2 className="w-4 h-4" />
          Built &amp; owned by Modax
        </div>
        <span className="text-sm text-ink-500">{SCREENR_PRICING_NOTE} after your free match</span>
      </div>
    </PageHero>
  )
}
