export default function AiResumeMatcherBenefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Screen in Seconds, Not Hours",
      description: "No more manually reading a resume and a job description side by side. Get a clear, scored answer in about 15 seconds."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Consistent, Explainable Scoring",
      description: "Every candidate is measured the same way, with a plain-English explanation behind the score — never a black box."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8zm6 4v-2a4 4 0 00-3-3.87m-9.4 0A4 4 0 006 16v2" />
        </svg>
      ),
      title: "Built for Recruiters & Candidates",
      description: "Hiring managers screen applicants faster. Job seekers check their own resume against a posting before they apply."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Ask Follow-up Questions",
      description: "Go beyond the score with a conversational assistant that already knows the resume and the role in context."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Real Understanding, Not Keywords",
      description: "An AI model actually reads both documents, recognizing relevant experience and skills even when they're phrased differently."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Full History, Always On Hand",
      description: "Every match and every conversation is saved, so past comparisons are a click away whenever you need to revisit them."
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Why Teams Choose Resume Matcher
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            Replace manual resume screening with a fast, consistent, explainable comparison —
            so hiring decisions start with real signal, not a skim of two documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-ink-100 hover:border-primary-200">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-50 rounded-lg mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-ink-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-ink-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
              Find the Right Fit, Faster
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">~15s</div>
              <div className="text-ink-700 mb-4">Average time per match</div>
              <p className="text-sm text-ink-500">"No more skimming two documents side by side to guess if someone's a fit."</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">0-100%</div>
              <div className="text-ink-700 mb-4">Clear, explainable score</div>
              <p className="text-sm text-ink-500">"A rating and a plain-English reason, not just a number."</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">1 free</div>
              <div className="text-ink-700 mb-4">Match before signup</div>
              <p className="text-sm text-ink-500">"Try a full match and a round of follow-up questions, no account needed."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
