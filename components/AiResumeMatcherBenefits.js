import { Zap, CheckCircle2, Users, MessageCircle, Lock, BarChart3 } from 'lucide-react'

export default function AiResumeMatcherBenefits() {
  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-primary-600" />,
      title: "Screen in Seconds, Not Hours",
      description: "No more manually reading a resume and a job description side by side. Get a clear, scored answer in about 15 seconds."
    },
    {
      icon: <CheckCircle2 className="w-12 h-12 text-primary-600" />,
      title: "Consistent, Explainable Scoring",
      description: "Every candidate is measured the same way, with a plain-English explanation behind the score — never a black box."
    },
    {
      icon: <Users className="w-12 h-12 text-primary-600" />,
      title: "Built for Recruiters & Candidates",
      description: "Hiring managers screen applicants faster. Job seekers check their own resume against a posting before they apply."
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-primary-600" />,
      title: "Ask Follow-up Questions",
      description: "Go beyond the score with a conversational assistant that already knows the resume and the role in context."
    },
    {
      icon: <Lock className="w-12 h-12 text-primary-600" />,
      title: "Real Understanding, Not Keywords",
      description: "An AI model actually reads both documents, recognizing relevant experience and skills even when they're phrased differently."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary-600" />,
      title: "Full History, Always On Hand",
      description: "Every match and every conversation is saved, so past comparisons are a click away whenever you need to revisit them."
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Why Teams Choose Screenr
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
