'use client'

import { LazyMotion } from 'framer-motion'

// domMax covers every framer-motion feature used across the app, including
// Navigation's layoutId-based tab underline (layout animations aren't in the
// smaller domAnimation bundle). Loading it as a dynamic import keeps the
// animation engine out of the initial JS bundle/parse — it's fetched and
// executed in its own chunk instead of synchronously on every page load.
const loadFeatures = () => import('framer-motion').then((mod) => mod.domMax)

export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  )
}
