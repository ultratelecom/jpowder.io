'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
}

function AnimatedUnderline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <span
      ref={ref}
      className={`animated-underline ${inView ? 'is-visible' : ''}`}
    >
      {children}
    </span>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-ink mb-4">About</h2>
          <div className="h-px bg-rule" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
          <motion.div
            className="md:col-span-3 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.p variants={fadeUp} className="text-base sm:text-lg leading-relaxed text-ink">
              I am Joshua, an <AnimatedUnderline>e-governance strategist</AnimatedUnderline> and{' '}
              <AnimatedUnderline>systems architect</AnimatedUnderline> focused on building
              AI-driven tools that improve how <AnimatedUnderline>governments and businesses</AnimatedUnderline> operate.
              I specialize in turning complex, high-friction processes into efficient, secure, and scalable
              digital systems that actually get used.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base sm:text-lg leading-relaxed text-ink">
              With over a decade of experience across data center services, cybersecurity, and{' '}
              <AnimatedUnderline>full-stack development</AnimatedUnderline>, I work at the intersection of policy,
              technology, and execution. My strength is bridging institutional needs with modern digital
              architecture&mdash;designing platforms that enhance transparency, accelerate
              workflows, and raise operational standards.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base sm:text-lg leading-relaxed text-ink">
              My work is driven by one principle: technology should not just exist&mdash;it should
              measurably improve decision-making, service delivery, and organizational performance.
              Through applied AI and pragmatic systems design, I help teams{' '}
              <AnimatedUnderline>move faster, govern smarter</AnimatedUnderline>, and build
              infrastructure that lasts.
            </motion.p>
          </motion.div>

          <motion.div
            className="md:col-span-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          >
            {[
              { label: 'Education', value: 'MSc. Cybersecurity & Information Assurance' },
              { label: 'Focus', value: 'e-Governance, AI Systems, Digital Architecture' },
              { label: 'Experience', value: '10+ years across infrastructure, security & development' },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp}>
                <p className="text-xs uppercase tracking-[0.15em] text-ink/60 mb-1">{item.label}</p>
                <p className="text-sm font-medium text-ink">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
