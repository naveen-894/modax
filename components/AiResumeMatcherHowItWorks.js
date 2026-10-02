export default function AiResumeMatcherHowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Add Resume & Job Description",
      description: "Paste the text directly, or upload a PDF, Word, or plain text file. Drag-and-drop is supported too.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      step: "02",
      title: "AI Reads & Parses Both",
      description: "The model extracts skills, experience, education and requirements from each document in parallel.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Compares Skills & Scores the Match",
      description: "Required skills are checked against the candidate's background, producing a 0-100% score with reasoning.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v6m3-6v6m3-6v6M9 1v4m3-4v4m3-4v4M5 9h14M5 15h14M4 9a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V9z" />
        </svg>
      )
    },
    {
      step: "04",
      title: "Review & Ask Follow-ups",
      description: "See the skills breakdown, read the explanation, and chat about specifics. Every match is saved for later.",
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    }
  ]

  return (
    <section className="section-padding bg-ink-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            How Resume Matcher Works
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            From upload to a clear, explainable match score in about 15 seconds.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary-200" style={{width: 'calc(100% - 4rem)'}}></div>
                )}

                <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-primary-50 rounded-lg flex items-center justify-center mr-4">
                      {step.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary-600">{step.step}</div>
                  </div>

                  <h3 className="text-xl font-bold text-ink-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-ink-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:hidden">
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
              <div className="w-8 h-0.5 bg-primary-300"></div>
              <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
              <div className="w-8 h-0.5 bg-primary-300"></div>
              <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
              <div className="w-8 h-0.5 bg-primary-300"></div>
              <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-ink-900 mb-4">
            Ready to Screen Smarter?
          </h3>
          <p className="text-ink-500 mb-8 max-w-2xl mx-auto">
            Try a full match for free — no account needed to get your first result.
          </p>
          <a href="#demo" className="btn-primary text-lg px-8 py-4">
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  )
}
