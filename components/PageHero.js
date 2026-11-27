'use client'

import { m } from 'framer-motion'

const easeOut = [0.21, 0.47, 0.32, 0.98]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } },
}

export default function PageHero({ eyebrow, title, accent, description, stats, image, imageAlt, visual, children, compact }) {
  const content = (
    <>
      {image && (
        <m.div variants={item} className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-modax-ink/5 mb-12 h-56 sm:h-72 lg:h-96">
          <img src={image} alt={imageAlt || ''} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-modax-navy/60 via-modax-navy/10 to-transparent" aria-hidden="true" />
        </m.div>
      )}
      <div className="max-w-3xl">
        {eyebrow && (
          <m.div variants={item} className="eyebrow mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-modax-blue-deep" />
            {eyebrow}
          </m.div>
        )}
        <m.h1 variants={item} initial={false} className="text-4xl sm:text-5xl font-bold text-modax-ink mb-5 leading-[1.1] tracking-tight">
          {title}
          {accent && <span className="text-modax-blue">{accent}</span>}
        </m.h1>
        {description && (
          <m.p variants={item} initial={false} className="text-lg text-modax-body leading-relaxed max-w-2xl">
            {description}
          </m.p>
        )}
      </div>

      {stats && stats.length > 0 && (
        <m.div variants={item} className="flex flex-wrap gap-x-10 gap-y-4 mt-10 pt-8 border-t border-modax-border-lt">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-2xl font-bold text-modax-ink">{stat.value}</div>
              <div className="text-sm text-modax-body">{stat.label}</div>
            </div>
          ))}
        </m.div>
      )}

      <m.div variants={item}>{children}</m.div>
    </>
  )

  return (
    <section className={`relative bg-modax-blue-tint-2 px-3 sm:px-4 lg:px-6 overflow-hidden ${compact ? 'pt-8 pb-10 sm:pt-20 sm:pb-16 lg:pt-32 lg:pb-20' : 'pt-28 pb-16 lg:pt-32 lg:pb-20'}`}>
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <m.div className="container-max relative" variants={container} initial="hidden" animate="show">
        {visual ? (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>{content}</div>
            <m.div variants={item} className="hidden lg:block">
              {visual}
            </m.div>
          </div>
        ) : (
          content
        )}
      </m.div>
    </section>
  )
}
