'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Cybersecurity',
    skills: 'Penetration Testing, Threat Analysis, Incident Response, Network Security, Vulnerability Assessment, SIEM',
  },
  {
    title: 'Development',
    skills: 'Full Stack, AI Integration, Systems Architecture, API Design, Next.js / React, TypeScript',
  },
  {
    title: 'Cloud & Infrastructure',
    skills: 'Data Center Services, Windows Server, Network Admin, Cloud Migration, System Monitoring, DevOps',
  },
  {
    title: 'Strategy & Leadership',
    skills: 'Project Management, Marketing Analytics, Business Strategy, Team Leadership, Digital Architecture, Consulting',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted mb-4">Expertise</h2>
          <div className="h-px bg-rule" />
        </div>

        <motion.div
          className="grid sm:grid-cols-2 gap-10 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={fadeUp}>
              <h3 className="font-heading font-bold text-lg text-ink mb-2">{cat.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{cat.skills}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
