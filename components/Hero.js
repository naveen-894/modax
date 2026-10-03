'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Counter from './motion/Counter'

const easeOut = [0.21, 0.47, 0.32, 0.98]

const leftContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const leftItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white px-3 sm:px-4 lg:px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="absolute -top-40 right-0 w-[520px] h-[520px] bg-primary-100 rounded-full blur-3xl opacity-50 animate-blob-pulse" aria-hidden="true" />

      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <motion.div variants={leftContainer} initial="hidden" animate="show">
            <motion.div variants={leftItem} className="eyebrow mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
              AI tools, built for real work
            </motion.div>

            <motion.h1 variants={leftItem} className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-ink-900 mb-6 leading-[1.1] tracking-tight">
              We build AI tools that
              <span className="relative inline-block ml-2">
                <span className="relative z-10">do the manual work</span>
                <span className="absolute left-0 right-0 bottom-1 h-3 bg-primary-200/70 -z-0" />
              </span>
              {' '}for your team.
            </motion.h1>

            <motion.p variants={leftItem} className="text-lg text-ink-500 mb-8 max-w-xl leading-relaxed">
              Modax designs and builds custom AI tools for HR teams and growing businesses:
              screening resumes, reading documents, answering questions and automating
              repetitive workflows.
            </motion.p>

            <motion.div variants={leftItem} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://ai-resume-matcher-fed.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-3.5">
                Try Screenr, our AI resume matcher
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://calendly.com/vnaveen894/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary px-7 py-3.5">
                Book a 15-min call
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — AI result mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-transparent rounded-2xl blur-2xl opacity-60" aria-hidden="true" />
            <div className="relative rounded-xl bg-ink-950 shadow-2xl ring-1 ring-ink-900/10 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-ink-900 border-b border-white/5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 text-xs text-ink-400 font-mono">screenr</span>
              </div>
              <div className="p-6 pb-7">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-xs text-ink-400 uppercase tracking-wide mb-1">Candidate</div>
                    <div className="text-sm font-semibold text-white">Priya Sharma — Backend Engineer</div>
                  </div>
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-500/15 text-green-400 font-bold text-lg">
                    <Counter to={82} suffix="%" duration={1.4} />
                  </div>
                </div>

                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden mb-4">
                  <motion.div
                    className="h-full rounded-full bg-green-500"
                    initial={{ width: '0%' }}
                    animate={{ width: '82%' }}
                    transition={{ duration: 1.2, delay: 0.6, ease: easeOut }}
                  />
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.5 }}
                  className="flex items-center gap-2 text-green-400 text-sm font-medium mb-4"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Strong match · 6 of 8 required skills covered
                </motion.p>

                <div className="text-xs text-ink-400 leading-relaxed border-t border-white/5 pt-4">
                  Covers backend architecture, API design, and cloud infra. Missing
                  direct experience with Kafka and GraphQL — both listed as nice-to-have.
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: easeOut }}
              className="absolute -bottom-8 -left-8 card-surface shadow-lg px-5 py-4 flex items-center gap-3 animate-float"
            >
              <div className="h-9 w-9 rounded-md bg-primary-50 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary-700" />
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-900">Explained, not guessed</div>
                <div className="text-xs text-ink-500">Every score comes with a reason</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
