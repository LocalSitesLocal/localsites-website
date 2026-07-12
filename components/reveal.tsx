'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion()
  const delayInSeconds = delay > 10 ? delay / 1000 : delay

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.72, ease: [0.23, 1, 0.32, 1], delay: delayInSeconds }}
    >
      {children}
    </motion.div>
  )
}
