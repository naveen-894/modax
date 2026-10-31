'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Globe, Smartphone, ShoppingCart, ChevronDown } from 'lucide-react'
import { CALENDLY_URL } from '../lib/constants'

const easeOut = [0.21, 0.47, 0.32, 0.98]

const leftContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const leftItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

const capabilities = [
  { icon: ShoppingCart, label: 'Ecommerce platforms' },
  { icon: Sparkles, label: 'AI tools' },
  { icon: Globe, label: 'Websites' },
  { icon: Smartphone, label: 'Apps' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink-950 px-3 sm:px-4 lg:px-6 flex items-center min-h-[calc(100vh-4rem)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-primary-950/90 to-primary-800/80" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-dark [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="absolute -top-40 right-0 w-[520px] h-[520px] bg-primary-500 rounded-full blur-3xl opacity-30 animate-blob-pulse" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] bg-primary-400 rounded-full blur-3xl opacity-20 animate-blob-pulse" aria-hidden="true" />

      <div className="container-max relative w-full py-10 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={leftContainer} initial="hidden" animate="show" className="max-w-2xl">
            <motion.div variants={leftItem} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary-300 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
              Ecommerce platforms, websites & AI tools, built for real work
            </motion.div>

            <motion.h1 variants={leftItem} className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white mb-6 leading-[1.1] tracking-tight">
              We build{' '}
              <span className="relative inline-block">
                <span className="relative z-10">software that ships</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-primary-400/40 -z-0" />
              </span>
              {' '}for your business.
            </motion.h1>

            <motion.p variants={leftItem} className="text-lg text-ink-200 mb-8 max-w-xl leading-relaxed">
              Modax is a tech studio that designs and builds AI tools, websites and apps
              for growing businesses: automating repetitive workflows, reading documents,
              answering questions, and shipping the product you actually need.
            </motion.p>

            <motion.div variants={leftItem} className="flex flex-col sm:flex-row gap-4 mb-9">
              <Link href="/products/rawnn" className="btn-primary px-7 py-3.5">
                See the ecommerce platform
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary px-7 py-3.5">
                Book a 15-min call
              </a>
            </motion.div>

            <motion.div variants={leftItem} className="flex flex-wrap gap-2.5">
              {capabilities.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 backdrop-blur-sm text-primary-100 px-3 py-1.5 rounded-full text-sm font-medium"
                >
                  <Icon className="w-3.5 h-3.5 text-primary-300" />
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual: a glimpse of what we ship */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
            className="relative hidden lg:block"
          >
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-xl shadow-2xl p-2">
              <div className="flex items-center gap-1.5 px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <div className="bg-ink-900/60 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500/20 text-primary-300 flex-shrink-0">
                      <ShoppingCart className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Rawnn</p>
                      <p className="text-xs text-ink-300">Own your ecommerce platform</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-400/10 px-2 py-1 rounded-full flex-shrink-0">Live</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500/20 text-primary-300 flex-shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">Screenr</p>
                      <p className="text-xs text-ink-300">Resume ↔ JD matching</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-400/10 px-2 py-1 rounded-full flex-shrink-0">Live</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500/20 text-primary-300 flex-shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Your product</p>
                    <p className="text-xs text-ink-300">Scoped, built, shipped</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 card-surface shadow-xl px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-soft-pulse" />
                <span className="text-xs font-semibold text-ink-700">Deployed to production</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 card-surface shadow-xl px-4 py-3">
              <span className="text-xs font-semibold text-ink-700">Built by one team, start to finish</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 text-ink-300/80 animate-float">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  )
}
