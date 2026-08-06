'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import ScrambleText from '@/components/ScrambleText'

const PROJECTS = [
  {
    title: 'Government Digitization Platforms',
    description:
      'AI-enabled systems designed to reduce manual processing, improve visibility, and support better decision-making.',
  },
  {
    title: 'Employee & Internal Operations Portals',
    description:
      'Secure portals for onboarding, workflow tracking, institutional communication, and operational access.',
  },
  {
    title: 'Performance & Project Tracking Systems',
    description:
      'Dashboards and tools that turn plans, projects, and indicators into measurable execution data.',
  },
  {
    title: 'Telecommunications Advisory',
    description:
      'Connectivity and infrastructure planning for organizations needing reliable, cost-efficient network solutions.',
  },
]

const EASE = [0.25, 0.4, 0.25, 1] as const

/**
 * Scene 5: the work index. Each row rests as quiet editorial ink-on-paper;
 * hovering floods the row black, flips the text to paper, and swells the
 * index numeral into a colossal orange watermark while an arrow sweeps in.
 */
export default function WorkSection() {
  return (
    <section id="work" className="relative z-10 px-6 py-32 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeader index="04" label="Selected Work" />

        <div>
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
              data-cursor="view"
              data-cursor-text="View"
              className="group relative cursor-pointer overflow-hidden border-t border-ink/15 last:border-b"
            >
              {/* Ink flood */}
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:scale-y-100" />

              {/* Giant orange watermark numeral */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 select-none font-heading text-[clamp(6rem,16vw,13rem)] font-extrabold leading-none text-accent opacity-0 transition-all duration-500 group-hover:opacity-100 md:text-[clamp(8rem,18vw,15rem)]"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="relative grid grid-cols-[auto_1fr] items-baseline gap-6 px-2 py-9 transition-colors duration-300 md:grid-cols-[7rem_1fr_auto] md:gap-10 md:py-12">
                <span className="font-heading text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-none text-ink/15 transition-colors duration-300 group-hover:text-paper/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-[clamp(1.3rem,2.6vw,2.1rem)] font-bold leading-tight text-ink transition-colors duration-300 group-hover:text-paper">
                    <ScrambleText text={project.title} trigger="scroll" />
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted transition-colors duration-300 group-hover:text-paper/70">
                    {project.description}
                  </p>
                </div>
                <span className="hidden translate-x-0 self-center text-2xl text-ink/25 transition-all duration-500 group-hover:translate-x-2 group-hover:text-accent md:block">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
