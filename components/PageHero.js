'use client'

import { motion } from 'framer-motion'

const easeOut = [0.21, 0.47, 0.32, 0.98]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
}

export default function PageHero({ eyebrow, title, accent, description, stats, children }) {
  return (
    <section className="relative bg-ink-50 pt-28 pb-16 lg:pt-32 lg:pb-20 px-3 sm:px-4 lg:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <motion.div className="container-max relative" variants={container} initial="hidden" animate="show">
        <div className="max-w-3xl">
          {eyebrow && (
            <motion.div variants={item} className="eyebrow mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
              {eyebrow}
            </motion.div>
          )}
          <motion.h1 variants={item} className="text-4xl sm:text-5xl font-bold text-ink-900 mb-5 leading-[1.1] tracking-tight">
            {title}
            {accent && <span className="text-primary-700">{accent}</span>}
          </motion.h1>
          {description && (
            <motion.p variants={item} className="text-lg text-ink-500 leading-relaxed max-w-2xl">
              {description}
            </motion.p>
          )}
        </div>

        {stats && stats.length > 0 && (
          <motion.div variants={item} className="flex flex-wrap gap-x-10 gap-y-4 mt-10 pt-8 border-t border-ink-200">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-ink-900">{stat.value}</div>
                <div className="text-sm text-ink-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        )}

        <motion.div variants={item}>{children}</motion.div>
      </motion.div>
    </section>
  )
}
