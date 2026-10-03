import { FileText, ShieldCheck, MessageCircle, Settings, Zap, CheckCircle2 } from 'lucide-react'
import Reveal from './motion/Reveal'
import RevealGroup, { RevealItem } from './motion/RevealGroup'

export default function ServicesList() {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-primary-600" />,
      title: "AI Document Understanding",
      description: "We train AI to read your documents and pull out exactly the fields you need — no more retyping data from one system into another.",
      useCases: ["HR: parse resumes into structured candidate profiles", "Finance: extract line items from invoices and receipts", "Legal/ops: pull key terms and dates out of contracts and forms"],
      youGet: ["Structured data output (JSON, spreadsheet or your database)", "Handles PDFs, scans, Word docs and images", "Built around your exact fields, not a generic template"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary-600" />,
      title: "AI Scoring & Matching",
      description: "We build explainable scoring that compares something against your criteria and tells you why — not a black-box number.",
      useCases: ["HR: score how well a resume matches a job description", "Sales: rank inbound leads against your ideal customer profile", "Ops: compare vendor quotes or documents against a checklist"],
      youGet: ["A 0–100% score with plain-English reasoning", "Criteria you control and can adjust", "A tool your team will actually trust, because it shows its work"]
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-primary-600" />,
      title: "AI Assistants",
      description: "Chat assistants trained on your own documents and data, so your team or customers get answers without digging through files.",
      useCases: ["HR: an assistant that answers policy questions from your HR docs", "Support: an assistant that answers customer FAQs from your help docs", "Internal: an assistant for company knowledge, onboarding, and SOPs"],
      youGet: ["An assistant that only answers from your approved sources", "Deployed where your team already works", "Clear answers with the source it pulled from"]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary-600" />,
      title: "Workflow Automation with AI",
      description: "We automate the repetitive steps around a process — the follow-ups, the reports, the data entry, the approvals — so your team only steps in where judgment is needed.",
      useCases: ["HR: automatic candidate status updates and interview reminders", "Sales/ops: automatic weekly reports pulled from your systems", "Finance: automated data entry and approval routing"],
      youGet: ["A defined workflow that runs on a schedule or trigger", "Humans kept in the loop at the decision points that matter", "Fewer dropped follow-ups and missed deadlines"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-600" />,
      title: "AI Features in Your Product",
      description: "You already have a product. We add the LLM-powered feature your users are asking for — search, summarization, drafting, or something custom.",
      useCases: ["SaaS: add AI-powered search or summarization to your app", "Internal tools: add AI drafting or classification to existing dashboards", "Any product: add a chat layer on top of your existing data"],
      youGet: ["A feature integrated into your existing codebase", "Your choice of LLM provider, your data stays in your infrastructure", "Ongoing tuning as usage grows"]
    },
  ]

  return (
    <section id="services-list" className="section-padding bg-ink-50">
      <div className="container-max">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            What we build
          </h2>
          <p className="text-lg sm:text-xl text-ink-500 max-w-3xl mx-auto">
            Five ways we remove manual work with AI. Each tool is scoped to your
            workflow, not sold off a shelf.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <RevealItem key={index} className="bg-white rounded-xl p-8 shadow-sm card-hover">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-6">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-ink-500 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-ink-100 pt-6 mb-6">
                <h4 className="text-sm font-semibold text-ink-900 mb-3 uppercase tracking-wide">Example use cases</h4>
                <ul className="space-y-2">
                  {service.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start text-sm text-ink-500">
                      <CheckCircle2 className="w-4 h-4 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-ink-100 pt-6">
                <h4 className="text-sm font-semibold text-ink-900 mb-3 uppercase tracking-wide">What you get</h4>
                <ul className="space-y-2">
                  {service.youGet.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-ink-500">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
