import { DollarSign, Server, Code2 } from 'lucide-react'

const points = [
  {
    icon: <DollarSign className="w-8 h-8 text-modax-accent-light" />,
    title: 'Pay once — no subscription or commission',
    description: 'A one-time project fee, then it’s yours — no recurring platform fees or commission on your sales, ever.',
  },
  {
    icon: <Server className="w-8 h-8 text-modax-accent-light" />,
    title: 'Runs on your own servers, with your domain and customer data',
    description: 'Your store runs on your own servers, in your business name, on your own domain — your customer database isn’t on a shared marketplace platform.',
  },
  {
    icon: <Code2 className="w-8 h-8 text-modax-accent-light" />,
    title: 'Full source code handed over, custom-built for your brand',
    description: 'The complete codebase for your storefront, admin panel and owner panel is handed over on final payment — configured, themed and launched specifically for you, not a shared template.',
  },
]

const compareRows = [
  { label: 'Cost', rawnn: 'One-time project fee', monthly: 'Monthly fees + paid apps', marketplace: 'Commission on every order' },
  { label: 'Commission on sales', rawnn: 'None', monthly: 'Transaction fees on some plans', marketplace: 'Typically 20–30%' },
  { label: 'Running costs', rawnn: 'Your own hosting only', monthly: 'Included in monthly fee', marketplace: 'Included in commission' },
  { label: 'Where it runs', rawnn: 'Your own servers, in your business name', monthly: 'Their servers', marketplace: 'Their platform' },
  { label: 'Customer data', rawnn: 'Lives on your own servers', monthly: 'Stored on their platform', marketplace: 'Owned by the marketplace' },
  { label: 'Your brand', rawnn: 'Fully custom, your domain', monthly: 'Theme-based', marketplace: 'Listed alongside competitors' },
]

export default function RawnnOwnership() {
  return (
    <section id="compare" className="section-padding py-10 sm:py-14 lg:py-16 bg-modax-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div className="container-max relative">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Yours to own, not rent
          </h2>
          <p className="text-lg sm:text-xl text-modax-muted">
            With Rawnn, you pay once and the platform is yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-10">
          {points.map((point) => (
            <div key={point.title} className="text-center p-3 sm:p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-modax-accent-light/15 rounded-lg mb-3 sm:mb-5">
                {point.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">{point.title}</h3>
              <p className="text-modax-muted text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Table — md and up, no horizontal scroll below 768px */}
          <div className="hidden md:block overflow-hidden rounded-xl ring-1 ring-modax-line shadow-sm">
            <table className="w-full border-separate border-spacing-0 bg-modax-navy-2">
              <thead>
                <tr>
                  <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-modax-muted bg-modax-navy-2 border-b border-modax-line"></th>
                  <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-modax-accent-light bg-modax-accent-light/15 border-b border-modax-line">Rawnn</th>
                  <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-modax-muted bg-modax-navy-2 border-b border-modax-line">Monthly subscription platforms</th>
                  <th className="p-3 text-left text-xs font-bold uppercase tracking-wide text-modax-muted bg-modax-navy-2 border-b border-modax-line">Marketplaces</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, index) => (
                  <tr key={row.label}>
                    <th scope="row" className={`p-3 text-left text-sm font-semibold text-modax-muted ${index < compareRows.length - 1 ? 'border-b border-modax-line' : ''}`}>{row.label}</th>
                    <td className={`p-3 text-sm font-semibold text-white bg-modax-accent-light/10 ${index < compareRows.length - 1 ? 'border-b border-modax-line' : ''}`}>{row.rawnn}</td>
                    <td className={`p-3 text-sm text-modax-muted ${index < compareRows.length - 1 ? 'border-b border-modax-line' : ''}`}>{row.monthly}</td>
                    <td className={`p-3 text-sm text-modax-muted ${index < compareRows.length - 1 ? 'border-b border-modax-line' : ''}`}>{row.marketplace}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Stacked rows — below md, no horizontal scroll */}
          <div className="md:hidden space-y-2">
            {compareRows.map((row) => (
              <div key={row.label} className="rounded-xl p-3 bg-modax-navy-2 ring-1 ring-modax-line">
                <dt className="text-xs font-bold uppercase tracking-wide text-modax-muted mb-1">{row.label}</dt>
                <dd className="text-sm font-semibold text-white mb-1">{row.rawnn}</dd>
                <dd className="text-xs text-modax-muted">Monthly platforms: {row.monthly}</dd>
                <dd className="text-xs text-modax-muted">Marketplaces: {row.marketplace}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
