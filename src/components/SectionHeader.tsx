'use client'

import { motion } from 'framer-motion'

type SectionHeaderProps = {
  index: string
  label: string
}

/**
 * Shared scene header: an index numeral, a scramble-ready label, and a hairline
 * rule that draws itself across the gutter as the section enters view.
 */
export default function SectionHeader({ index, label }: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="mb-14 md:mb-20"
    >
      <div className="flex items-center gap-4">
        <motion.span
          variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
          className="font-body text-xs font-semibold tabular-nums tracking-[0.25em] text-accent"
        >
          {index}
        </motion.span>
        <motion.span
          variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.08 } } }}
          className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-muted"
        >
          {label}
        </motion.span>
        <motion.span
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.9, ease: [0.77, 0, 0.18, 1] } } }}
          className="h-px flex-1 origin-left bg-ink/20"
        />
      </div>
    </motion.div>
  )
}
