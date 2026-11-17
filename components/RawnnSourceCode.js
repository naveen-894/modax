import { Code2, Server, Infinity as InfinityIcon } from 'lucide-react'

export default function RawnnSourceCode() {
  const points = [
    {
      icon: <Code2 className="w-10 h-10 text-modax-blue-deep" />,
      title: 'Full source code, handed over',
      description: "Rawnn is an ecommerce website with source code included — not a locked SaaS account. The complete codebase for your storefront, admin panel and owner panel is handed over on final payment, on every plan.",
    },
    {
      icon: <Server className="w-10 h-10 text-modax-blue-deep" />,
      title: 'Self-hosted, on your own servers',
      description: "As a self-hosted ecommerce platform for the Indian market, Rawnn runs on servers you choose and control — not a shared multi-tenant platform. You can move hosts any time; the code is yours.",
    },
    {
      icon: <InfinityIcon className="w-10 h-10 text-modax-blue-deep" />,
      title: 'A lifetime ecommerce website',
      description: 'Pay the one-time project fee once and keep the platform for life — no recurring licence, no renewal, no vendor shutting off your store.',
    },
  ]

  return (
    <section className="section-padding bg-modax-blue-tint-2">
      <div className="container-max">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modax-ink mb-4">
            Full source code. Self-hosted. Yours for life.
          </h2>
          <p className="text-lg sm:text-xl text-modax-body">
            Most ecommerce platforms keep the code and rent you access. Rawnn hands it over.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point) => (
            <div key={point.title} className="bg-white rounded-xl p-8 shadow-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-modax-blue-tint rounded-lg mb-6">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-modax-ink mb-3">{point.title}</h3>
              <p className="text-modax-body leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
