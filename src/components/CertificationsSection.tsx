'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
}

const credentials = {
  education: [
    "Master's in Cybersecurity and Information Assurance",
    "Bachelor's in Cybersecurity and Information Assurance",
  ],
  certifications: [
    'CompTIA A+',
    'Network+',
    'Security+',
    'CySA+',
    'PenTest+',
    'Project+',
  ],
  courses: [
    'Marketing Analytics',
    'Strategic Management',
    'Cybersecurity Tools & Attacks',
    'Strategy Formulation and Implementation',
  ],
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative z-10 px-6 sm:px-10 lg:px-16 py-24 md:py-32 bg-paper">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <h2 className="text-xs uppercase tracking-[0.2em] font-medium text-muted mb-4">Credentials</h2>
          <div className="h-px bg-rule" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          <motion.div variants={fadeUp}>
            <h3 className="font-heading font-bold text-lg text-ink mb-4">Education</h3>
            <ul className="space-y-2">
              {credentials.education.map((item) => (
                <li key={item} className="text-sm text-muted leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="font-heading font-bold text-lg text-ink mb-4">Certifications</h3>
            <ul className="space-y-2">
              {credentials.certifications.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="font-heading font-bold text-lg text-ink mb-4">Additional Study</h3>
            <ul className="space-y-2">
              {credentials.courses.map((item) => (
                <li key={item} className="text-sm text-muted leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
