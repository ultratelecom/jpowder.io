'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
}

export default function PhilosophySection() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-3xl"
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-8"
          >
            Technology should improve how institutions perform.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg leading-relaxed text-muted mb-10"
          >
            I believe digital systems should do more than exist. They should improve decisions, reduce friction, 
            strengthen accountability, and help organizations deliver better outcomes. My work combines infrastructure, 
            cybersecurity, AI, and governance to build systems that are practical, secure, and built to last.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="#contact"
              className="inline-block px-8 py-4 border-2 border-ink text-ink font-heading font-bold text-sm uppercase tracking-[0.15em] hover:bg-ink hover:text-paper transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Let&apos;s Build Better Systems
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
