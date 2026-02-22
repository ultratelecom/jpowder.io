'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative z-10 px-6 sm:px-10 lg:px-16 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted mb-4">Credentials</h2>
          <div className="h-px bg-rule" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="space-y-12"
        >
          <motion.div variants={fadeUp}>
            <p className="font-heading font-bold text-2xl sm:text-3xl text-ink">
              MSc. Cybersecurity &amp; Information Assurance
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="font-heading font-bold text-lg text-ink mb-3">CompTIA Certifications</h3>
              <p className="text-sm leading-relaxed text-muted">
                Project+, PenTest+, CySA+, Security+, Network+, A+
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-ink mb-3">Professional Development</h3>
              <ul className="space-y-1.5 text-sm text-muted">
                <li>Marketing Analytics &mdash; University of Virginia</li>
                <li>Cybersecurity Tools &amp; Cyber Attacks &mdash; IBM</li>
                <li>Strategic Management &mdash; Copenhagen Business School</li>
                <li>Strategy Formulation &mdash; Copenhagen Business School</li>
                <li>Strategy Implementation &mdash; Copenhagen Business School</li>
                <li>Windows Server Management &amp; Security &mdash; University of Colorado</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
