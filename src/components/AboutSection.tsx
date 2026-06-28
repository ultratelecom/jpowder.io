'use client'

import { useRef } from 'react'
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

const stats = [
  {
    number: '10+ Years',
    label: 'Telecom, cybersecurity, infrastructure, and development',
  },
  {
    number: '300+ Companies',
    label: 'Advised on connectivity, networks, and technology arrangements',
  },
  {
    number: 'AI + Governance',
    label: 'Building secure systems for public sector transformation',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative z-10 px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-ink mb-4">About</h2>
          <div className="h-px bg-rule" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h3
            variants={fadeUp}
            className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-ink mb-8"
          >
            From networks to governance systems.
          </motion.h3>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <motion.div
              className="lg:col-span-2 space-y-6"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.p variants={fadeUp} className="text-base sm:text-lg leading-relaxed text-ink">
                My journey into technology started with networks. While still in high school, I built and operated 
                a <AnimatedUnderline>VPN service for gamers</AnimatedUnderline> who needed reliable access to online 
                platforms outside their region. That early experience shaped how I think about technology: as a 
                practical tool for solving access, infrastructure, and operational problems.
              </motion.p>
              <motion.p variants={fadeUp} className="text-base sm:text-lg leading-relaxed text-ink">
                Over the last decade, I've worked across <AnimatedUnderline>telecommunications, data center services, 
                cybersecurity, and full-stack development</AnimatedUnderline>. I have advised more than 300 companies 
                on connectivity, infrastructure planning, data transfer, and cost-efficient technology arrangements.
              </motion.p>
              <motion.p variants={fadeUp} className="text-base sm:text-lg leading-relaxed text-ink">
                Today, my work focuses on <AnimatedUnderline>e-governance</AnimatedUnderline>: helping public sector 
                institutions and businesses modernize complex processes through secure, scalable, AI-driven systems 
                that people actually use.
              </motion.p>
            </motion.div>

            <motion.div
              className="space-y-8"
              variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.number}
                  variants={fadeUp}
                  className="border-l-2 border-ink/20 pl-4"
                >
                  <p className="font-heading font-bold text-xl text-ink mb-1">{stat.number}</p>
                  <p className="text-sm leading-relaxed text-muted">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
