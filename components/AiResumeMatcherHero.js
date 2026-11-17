import { CheckCircle2 } from 'lucide-react'
import PageHero from './PageHero'
import HeroVisualPanel from './HeroVisualPanel'
import { SCREENR_URL, SCREENR_PRICING_NOTE } from '../lib/constants'

export default function AiResumeMatcherHero() {
  return (
    <PageHero
      eyebrow="AI resume screening tool"
      title="Screen resumes against any job description "
      accent="in 15 seconds"
      description="Screenr is an AI resume screening tool that gives you a resume job description match score — a 0-100% score with a plain-English explanation — in about 15 seconds. Free during beta, no signup needed for your first match."
      stats={[
        { value: '~15s', label: 'Per match' },
        { value: '0-100%', label: 'Match score' },
      ]}
      visual={<HeroVisualPanel />}
    >
      <div className="inline-flex items-center gap-2 bg-modax-gold-tint text-modax-navy px-4 py-2.5 rounded-md text-sm font-semibold mb-6">
        <CheckCircle2 className="w-4 h-4" />
        Free during beta — no signup for your first match
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href={SCREENR_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Try it free
        </a>
        <a href="#features" className="btn-secondary">
          Explore features
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-8">
        <div className="inline-flex items-center gap-2 bg-modax-blue-tint text-modax-blue-deep px-4 py-2.5 rounded-md text-sm font-medium">
          <CheckCircle2 className="w-4 h-4" />
          Built &amp; owned by Modax
        </div>
        <span className="text-sm text-modax-body">{SCREENR_PRICING_NOTE} after your free match</span>
      </div>
    </PageHero>
  )
}
