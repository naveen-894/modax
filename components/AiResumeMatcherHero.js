import { CheckCircle2 } from 'lucide-react'
import PageHero from './PageHero'

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
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a href="https://ai-resume-matcher-fed.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
          Try it free
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
