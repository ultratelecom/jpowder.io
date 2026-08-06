'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

const STATEMENT = 'Technology should improve how institutions perform.'

function Word({
  children,
  progress,
  range,
}: {
  children: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const color = useTransform(progress, range, ['rgba(10,10,10,0.14)', '#FF4D00'])
  return (
    <motion.span style={{ color }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  )
}

/**
 * Scene 2: the manifesto. The belief statement ignites word-by-word in orange,
 * driven directly by scroll position — the signature "word scrub" that turns
 * a static sentence into the emotional hinge of the page.
 */
export default function ManifestoSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.85', 'start 0.25'],
    layoutEffect: false,
  })

  const words = STATEMENT.split(' ')

  return (
    <section id="manifesto" ref={targetRef} className="relative z-10 flex min-h-[90vh] items-center px-6 py-32 sm:px-10 lg:px-16" style={{ position: 'relative' }}>
      <div className="mx-auto w-full max-w-[1200px]">
        <p className="mb-10 font-body text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          The belief
        </p>

        <h2 className="max-w-5xl font-heading text-[clamp(2.4rem,8.5vw,5rem)] font-extrabold leading-[1.04] tracking-tight">
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
          className="mt-12 max-w-2xl text-lg leading-relaxed text-ink/70"
        >
          I believe digital systems should do more than exist. They should improve decisions, reduce friction,
          strengthen accountability, and help organizations deliver better outcomes. My work combines infrastructure,
          cybersecurity, AI, and governance to build systems that are practical, secure, and built to last.
        </motion.p>
      </div>
    </section>
  )
}
