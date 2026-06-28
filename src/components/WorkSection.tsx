'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Government Digitization Platforms',
    description: 'AI-enabled systems designed to reduce manual processing, improve visibility, and support better decision-making.',
  },
  {
    title: 'Employee & Internal Operations Portals',
    description: 'Secure portals for onboarding, workflow tracking, institutional communication, and operational access.',
  },
  {
    title: 'Performance & Project Tracking Systems',
    description: 'Dashboards and tools that turn plans, projects, and indicators into measurable execution data.',
  },
  {
    title: 'Telecommunications Advisory',
    description: 'Connectivity and infrastructure planning for organizations needing reliable, cost-efficient network solutions.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
}

export default function WorkSection() {
  return (
    <section id="work" className="px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted mb-4">Work</h2>
          <div className="h-px bg-rule" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="space-y-8 lg:space-y-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              className="border-l-2 border-ink/20 pl-6 lg:pl-8"
            >
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs font-mono text-muted/50">0{index + 1}</span>
                <h3 className="font-heading font-bold text-xl lg:text-2xl text-ink">{project.title}</h3>
              </div>
              <p className="text-base leading-relaxed text-muted max-w-2xl">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
