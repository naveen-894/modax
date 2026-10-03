import { FileText, BarChart3, ShieldCheck, Zap, MessageCircle, UploadCloud, Clock, Sparkles, CheckCircle2 } from 'lucide-react'

export default function AiResumeMatcherFeatures() {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-primary-600" />,
      title: "Smart Resume & JD Parsing",
      description: "An AI model reads both documents the way a person would, pulling out the facts that matter instead of doing a keyword search.",
      details: ["Name, email & phone", "Skills & certifications", "Work history & education", "Job title & responsibilities", "Required experience & education"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary-600" />,
      title: "0–100% Match Score",
      description: "A simple score with a Strong / Partial / Weak rating, a written explanation of why, and a short list of key takeaways.",
      details: ["Plain-English reasoning", "Strong / Partial / Weak rating", "Key takeaways list", "Consistent across candidates"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-600" />,
      title: "Skills Gap Analysis",
      description: "A visual breakdown of which required skills the candidate has and which are missing, so coverage is clear at a glance.",
      details: ["e.g. 6 of 8 skills covered", "Recognizes skills phrased differently", "Highlights missing requirements", "Side-by-side comparison"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: "Live Streaming Analysis",
      description: "Watch each step happen in real time — reading the resume, reading the job description, comparing skills, scoring the match — so it never feels like a black box.",
      details: ["Step-by-step progress", "Real-time streaming (SSE)", "Transparent reasoning", "No waiting in the dark"]
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary-600" />,
      title: "Follow-up Chat",
      description: "Ask questions about a specific match — \"How much management experience do they have?\" — and get a conversational, grounded answer.",
      details: ["Context-aware Q&A", "Word-by-word streaming replies", "Scoped to the resume & role", "Refuses unrelated questions"]
    },
    {
      icon: <UploadCloud className="w-8 h-8 text-primary-600" />,
      title: "Flexible Uploads",
      description: "Paste text directly or upload a file — PDF, Word, or plain text. Drag-and-drop is supported too.",
      details: ["PDF, DOCX & TXT support", "Paste-as-text option", "Drag-and-drop", "Works for resume & JD"]
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-600" />,
      title: "Match History",
      description: "Every match you run is saved. Revisit any past comparison, along with the full conversation, whenever you need it.",
      details: ["Full match archive", "Saved chat history", "One-click revisit", "Organized by candidate"]
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary-600" />,
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
            Screenr replaces manual side-by-side reading with a fast, consistent,
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
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
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
