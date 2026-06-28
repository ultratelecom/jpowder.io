'use client'

import { motion } from 'framer-motion'

const expertiseCards = [
  {
    title: 'E-Governance & Digital Transformation',
    description: 'Designing platforms that improve public sector workflows, transparency, service delivery, and institutional performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'AI Systems & Full-Stack Development',
    description: 'Building applied AI tools, employee portals, workflow systems, dashboards, and operational platforms.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 21h8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 8l-2 1.5L7 11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 8l2 1.5L17 11" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 7l-2 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity & Risk',
    description: 'Bringing security, privacy, governance, and resilience into the architecture from the start.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 2L3 7v5c0 5.25 3.83 10.15 9 11.25C17.17 22.15 21 17.25 21 12V7l-9-5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Telecommunications & Infrastructure',
    description: 'Applying over a decade of experience in connectivity, data centers, networks, routing, and infrastructure planning.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="2" width="20" height="8" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="14" width="20" height="8" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6h.01" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 18h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
}

export default function SkillsSection() {
  return (
    <section id="expertise" className="px-6 sm:px-10 lg:px-16 py-24 md:py-32 bg-paper">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted mb-4">Expertise</h2>
          <div className="h-px bg-rule" />
        </div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {expertiseCards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="border border-rule p-6 lg:p-8 hover:border-ink/30 transition-colors duration-300"
            >
              <div className="text-ink/70 mb-4">{card.icon}</div>
              <h3 className="font-heading font-bold text-lg lg:text-xl text-ink mb-3">{card.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
