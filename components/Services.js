import Link from 'next/link'

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your unique business requirements and drive growth.",
    },
    {
      number: "02",
      title: "Web Applications",
      description: "Modern, responsive web applications with exceptional user experiences and robust functionality.",
    },
    {
      number: "03",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver outstanding performance and user engagement.",
    },
    {
      number: "04",
      title: "Business Automation",
      description: "Streamline operations and boost efficiency with intelligent automation and workflow solutions.",
    },
    {
      number: "05",
      title: "AI Integration & Development",
      description: "LLM-powered features — document parsing, explainable scoring, conversational assistants — built into real products.",
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-3 gap-12 mb-14">
          <div className="lg:col-span-2">
            <div className="eyebrow mb-4">What we do</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">
              Engineering services that cover the full product lifecycle
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-ink-500 leading-relaxed mb-4">
              From the first line of code to the systems that keep running at scale,
              we build software your business can rely on.
            </p>
            <Link href="/services" className="text-primary-700 font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-ink-100">
          {services.map((service, index) => (
            <div
              key={index}
              className={`py-10 px-2 sm:px-8 border-b border-ink-100 ${index % 2 === 0 ? 'sm:border-r' : ''}`}
            >
              <div className="text-sm font-mono text-primary-600 mb-4">{service.number}</div>
              <h3 className="text-xl font-bold text-ink-900 mb-3">
                {service.title}
              </h3>
              <p className="text-ink-500 leading-relaxed max-w-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
