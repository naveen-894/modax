'use client'

import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const DIRECTIONS = {
  up: { y: 20, x: 0 },
  left: { y: 0, x: 20 },
  none: { y: 0, x: 0 },
}

export function RevealItem({ children, className, direction = 'up' }) {
  const offset = DIRECTIONS[direction] || DIRECTIONS.up
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x: offset.x, y: offset.y },
        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function RevealGroup({ children, className, once = true, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={container}
    >
      {children}
    </motion.div>
  )
}
