import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'
import Reveal from './motion/Reveal'
import { RAWNN_DEMO_URL } from '../lib/constants'

const compareRows = [
  { label: 'Cost', rawnn: 'One-time project fee', monthly: 'Monthly fees + paid apps', marketplace: 'Commission on every order' },
  { label: 'Commission on sales', rawnn: 'None', monthly: 'Transaction fees on some plans', marketplace: 'Typically 20–30%' },
  { label: 'Running costs', rawnn: 'Your own hosting only', monthly: 'Included in monthly fee', marketplace: 'Included in commission' },
  { label: 'Where it runs', rawnn: 'Your own servers, in your business name', monthly: 'Their servers', marketplace: 'Their platform' },
  { label: 'Customer data', rawnn: 'Lives on your own servers', monthly: 'Stored on their platform', marketplace: 'Owned by the marketplace' },
  { label: 'Your brand', rawnn: 'Fully custom, your domain', monthly: 'Theme-based', marketplace: 'Listed alongside competitors' },
]

export default function EcommerceShowcase() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <Reveal className="text-center mb-12 max-w-2xl mx-auto">
          <div className="eyebrow mb-4 justify-center">Our ecommerce platform</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-modax-ink tracking-tight mb-5">
            Own your ecommerce platform.{' '}
            <span className="text-modax-blue">Pay once, keep it forever.</span>
          </h2>
          <p className="text-lg text-modax-body leading-relaxed">
            Rawnn is Modax&apos;s complete ecommerce platform — a customer website, store admin
            panel and owner control panel, on your own servers. No monthly fees or commission from
            Modax — you pay only your own hosting costs directly to your hosting provider.
          </p>
        </Reveal>

        <Reveal className="max-w-4xl mx-auto mb-10">
          {/* Table — sm and up */}
          <div className="hidden sm:block overflow-hidden rounded-xl ring-1 ring-modax-border-lt shadow-sm">
            <table className="w-full border-separate border-spacing-0 bg-white">
              <thead>
                <tr>
                  <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-modax-body bg-white border-b border-modax-border-lt"></th>
                  <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-modax-blue-deep bg-modax-blue-tint border-b border-modax-border-lt">Rawnn</th>
                  <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-modax-body bg-white border-b border-modax-border-lt">Monthly subscription platforms</th>
                  <th className="p-4 text-left text-xs font-bold uppercase tracking-wide text-modax-body bg-white border-b border-modax-border-lt">Marketplaces</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, index) => (
                  <tr key={row.label}>
                    <th scope="row" className={`p-4 text-left text-sm font-semibold text-modax-body ${index < compareRows.length - 1 ? 'border-b border-modax-border-lt' : ''}`}>{row.label}</th>
                    <td className={`p-4 text-sm font-semibold text-modax-ink bg-modax-blue-tint-2 ${index < compareRows.length - 1 ? 'border-b border-modax-border-lt' : ''}`}>{row.rawnn}</td>
                    <td className={`p-4 text-sm text-modax-body ${index < compareRows.length - 1 ? 'border-b border-modax-border-lt' : ''}`}>{row.monthly}</td>
                    <td className={`p-4 text-sm text-modax-body ${index < compareRows.length - 1 ? 'border-b border-modax-border-lt' : ''}`}>{row.marketplace}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards — below sm, no horizontal scroll */}
          <div className="sm:hidden grid gap-4">
            {[
              { name: 'Rawnn', key: 'rawnn', highlight: true },
              { name: 'Monthly subscription platforms', key: 'monthly', highlight: false },
              { name: 'Marketplaces', key: 'marketplace', highlight: false },
            ].map((col) => (
              <div
                key={col.key}
                className={`rounded-xl p-5 ${col.highlight ? 'bg-modax-blue-tint-2 ring-2 ring-modax-blue' : 'bg-white ring-1 ring-modax-border-lt'}`}
              >
                <h3 className={`text-base font-bold mb-3 ${col.highlight ? 'text-modax-blue-deep' : 'text-modax-ink'}`}>{col.name}</h3>
                <dl className="space-y-2.5">
                  {compareRows.map((row) => (
                    <div key={row.label} className="flex justify-between gap-3 text-sm">
                      <dt className="text-modax-body flex-shrink-0">{row.label}</dt>
                      <dd className={`text-right font-semibold ${col.highlight ? 'text-modax-ink' : 'text-modax-body'}`}>{row[col.key]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="flex flex-col items-center gap-5">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products/rawnn" className="btn-primary px-7 py-3.5">
              See the Modax ecommerce platform
            </Link>
            <a href={RAWNN_DEMO_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary px-7 py-3.5">
              Explore the Live Demo Store
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-modax-body">
            <ShieldCheck className="w-4 h-4 text-modax-blue-deep" />
            One-time cost · Your own servers · Live in 2–6 weeks
          </div>
        </Reveal>
      </div>
    </section>
  )
}
