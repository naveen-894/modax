export default function PageHero({ eyebrow, title, accent, description, stats, children }) {
  return (
    <section className="relative bg-ink-50 pt-28 pb-16 lg:pt-32 lg:pb-20 px-3 sm:px-4 lg:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="container-max relative">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
              {eyebrow}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-ink-900 mb-5 leading-[1.1] tracking-tight">
            {title}
            {accent && <span className="text-primary-700">{accent}</span>}
          </h1>
          {description && (
            <p className="text-lg text-ink-500 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-10 pt-8 border-t border-ink-200">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-ink-900">{stat.value}</div>
                <div className="text-sm text-ink-500">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}
