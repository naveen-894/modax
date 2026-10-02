import PageHero from './PageHero'

export default function AiResumeMatcherHero() {
  return (
    <PageHero
      eyebrow="AI-powered resume & job description matching"
      title="Meet "
      accent="Resume Matcher"
      description="Find the right fit, faster. Give it a job description and a resume — in about 15 seconds it reads both, compares them, and returns a clear match score with a plain-English explanation of why."
      stats={[
        { value: '~15s', label: 'Per match' },
        { value: '0-100%', label: 'Explainable score' },
      ]}
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <a href="#demo" className="btn-primary">
          Request a demo
        </a>
        <a href="#features" className="btn-secondary">
          Explore features
        </a>
      </div>

      <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-800 px-4 py-2.5 rounded-md text-sm font-medium mt-8">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Built &amp; owned by Modax
      </div>
    </PageHero>
  )
}
