import { UploadCloud, FileText, BarChart3, MessageCircle } from 'lucide-react'

export default function AiResumeMatcherHowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Add Resume & Job Description",
      description: "Paste the text directly, or upload a PDF, Word, or plain text file. Drag-and-drop is supported too.",
      icon: <UploadCloud className="w-8 h-8 text-primary-600" />
    },
    {
      step: "02",
      title: "AI Reads & Parses Both",
      description: "The model extracts skills, experience, education and requirements from each document in parallel.",
      icon: <FileText className="w-8 h-8 text-primary-600" />
    },
    {
      step: "03",
      title: "Compares Skills & Scores the Match",
      description: "Required skills are checked against the candidate's background, producing a 0-100% score with reasoning.",
      icon: <BarChart3 className="w-8 h-8 text-primary-600" />
    },
    {
      step: "04",
      title: "Review & Ask Follow-ups",
      description: "See the skills breakdown, read the explanation, and chat about specifics. Every match is saved for later.",
      icon: <MessageCircle className="w-8 h-8 text-primary-600" />
    }
  ]

  return (
    <section className="section-padding bg-ink-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            How Screenr Works
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
          <a href="https://ai-resume-matcher-fed.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
            Try it free
          </a>
          <p className="text-sm text-ink-500 mt-4">
            Want a guided walkthrough for your team? <a href="#demo" className="text-primary-700 font-medium hover:underline">Request a demo</a> instead.
          </p>
        </div>
      </div>
    </section>
  )
}
