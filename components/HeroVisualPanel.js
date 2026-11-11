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
    <div className="rounded-2xl bg-white shadow-xl ring-1 ring-modax-ink/5 p-2">
      <div className="flex items-center gap-1.5 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-modax-border-lt" />
        <span className="h-2.5 w-2.5 rounded-full bg-modax-border-lt" />
        <span className="h-2.5 w-2.5 rounded-full bg-modax-border-lt" />
      </div>
      <div className="bg-modax-blue-tint-2 rounded-xl p-5 space-y-3">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3 bg-white border border-modax-border-lt rounded-lg px-4 py-3.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-modax-blue-tint text-modax-blue-deep flex-shrink-0">
              <Icon className="w-4 h-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-modax-ink">{label}</p>
              <p className="text-xs text-modax-body">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
