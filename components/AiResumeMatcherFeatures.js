export default function AiResumeMatcherFeatures() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Smart Resume & JD Parsing",
      description: "An AI model reads both documents the way a person would, pulling out the facts that matter instead of doing a keyword search.",
      details: ["Name, email & phone", "Skills & certifications", "Work history & education", "Job title & responsibilities", "Required experience & education"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v6m3-6v6m3-6v6M9 1v4m3-4v4m3-4v4M5 9h14M5 15h14M4 9a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V9z" />
        </svg>
      ),
      title: "0–100% Match Score",
      description: "A simple score with a Strong / Partial / Weak rating, a written explanation of why, and a short list of key takeaways.",
      details: ["Plain-English reasoning", "Strong / Partial / Weak rating", "Key takeaways list", "Consistent across candidates"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Skills Gap Analysis",
      description: "A visual breakdown of which required skills the candidate has and which are missing, so coverage is clear at a glance.",
      details: ["e.g. 6 of 8 skills covered", "Recognizes skills phrased differently", "Highlights missing requirements", "Side-by-side comparison"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Live Streaming Analysis",
      description: "Watch each step happen in real time — reading the resume, reading the job description, comparing skills, scoring the match — so it never feels like a black box.",
      details: ["Step-by-step progress", "Real-time streaming (SSE)", "Transparent reasoning", "No waiting in the dark"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Follow-up Chat",
      description: "Ask questions about a specific match — \"How much management experience do they have?\" — and get a conversational, grounded answer.",
      details: ["Context-aware Q&A", "Word-by-word streaming replies", "Scoped to the resume & role", "Refuses unrelated questions"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "Flexible Uploads",
      description: "Paste text directly or upload a file — PDF, Word, or plain text. Drag-and-drop is supported too.",
      details: ["PDF, DOCX & TXT support", "Paste-as-text option", "Drag-and-drop", "Works for resume & JD"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Match History",
      description: "Every match you run is saved. Revisit any past comparison, along with the full conversation, whenever you need it.",
      details: ["Full match archive", "Saved chat history", "One-click revisit", "Organized by candidate"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Try Before You Sign Up",
      description: "No account needed to get started. First-time visitors get one full match and one round of follow-up questions, free.",
      details: ["No signup required", "1 free match + chat", "Unlimited after sign-in", "Full history once logged in"]
    }
  ]

  return (
    <section id="features" className="section-padding bg-ink-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Screening That Actually Reads the Resume
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            Resume Matcher replaces manual side-by-side reading with a fast, consistent,
            and explainable comparison between a candidate and a role.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-6">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-ink-500 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-ink-100 pt-6">
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-ink-500">
                      <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
