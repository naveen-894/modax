import { Sparkles, Globe, Smartphone } from 'lucide-react'

const items = [
  { icon: Sparkles, label: 'AI tools', sub: 'Document understanding, assistants, automation' },
  { icon: Globe, label: 'Websites', sub: 'Fast, modern sites that convert' },
  { icon: Smartphone, label: 'Apps', sub: 'Web & mobile, built end to end' },
]

/** Lightweight decorative panel reused across page hero right-rails (Services,
 * Products, Screenr, About, Contact) so they aren't left visually empty on
 * wide screens — mirrors the home hero's product panel style. */
export default function HeroVisualPanel() {
  return (
    <div className="rounded-2xl bg-white shadow-xl ring-1 ring-ink-900/5 p-2">
      <div className="flex items-center gap-1.5 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
      </div>
      <div className="bg-ink-50 rounded-xl p-5 space-y-3">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3 bg-white border border-ink-100 rounded-lg px-4 py-3.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-50 text-primary-600 flex-shrink-0">
              <Icon className="w-4 h-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink-900">{label}</p>
              <p className="text-xs text-ink-500">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
