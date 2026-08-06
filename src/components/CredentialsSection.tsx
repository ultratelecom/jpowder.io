'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'

const EASE = [0.25, 0.4, 0.25, 1] as const

// Journey start → 2028 expected completion, as a fill fraction for the bar.
const JOURNEY_START_YEAR = 2022
const DOCTORATE_DONE_YEAR = 2028

function doctorateProgress(now: Date): number {
  const start = new Date(JOURNEY_START_YEAR, 0, 1).getTime()
  const end = new Date(DOCTORATE_DONE_YEAR, 11, 31).getTime()
  const t = (now.getTime() - start) / (end - start)
  return Math.min(Math.max(t, 0.08), 0.97) // clamp: always show a spark, never "done"
}

const DEGREES = [
  {
    level: 'MSc',
    title: "Master's in Cybersecurity and Information Assurance",
    status: 'Completed',
  },
  {
    level: 'BSc',
    title: "Bachelor's in Cybersecurity and Information Assurance",
    status: 'Completed',
  },
]

const CERTIFICATIONS = [
  { short: 'A+', full: 'CompTIA A+' },
  { short: 'Net+', full: 'Network+' },
  { short: 'Sec+', full: 'Security+' },
  { short: 'CySA+', full: 'CySA+' },
  { short: 'PenTest+', full: 'PenTest+' },
  { short: 'Proj+', full: 'Project+' },
]

const ADDITIONAL_STUDY = [
  'Marketing Analytics',
  'Strategic Management',
  'Cybersecurity Tools & Attacks',
  'Strategy Formulation and Implementation',
]

/** Animated fill bar for the in-progress doctorate. */
function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const target = doctorateProgress(new Date()) * 100
    if (reduced) {
      setWidth(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const duration = 1600
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      setWidth((1 - Math.pow(1 - t, 3)) * target)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView])

  return (
    <div ref={ref} className="mt-6">
      <div className="flex items-center justify-between font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-paper/60">
        <span>In progress</span>
        <span className="text-accent">Expected 2028</span>
      </div>
      <div className="mt-2 h-[3px] w-full overflow-hidden bg-paper/15">
        <div className="h-full bg-accent transition-[width] duration-100" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

/**
 * Scene 6: the wall of proof. The in-flight doctorate leads as a feature card,
 * completed degrees sit beside it, the six CompTIA certs form a badge wall,
 * and continued study closes it out.
 */
export default function CredentialsSection() {
  return (
    <section id="credentials" className="relative z-10 bg-ink/[0.02] px-6 py-32 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeader index="05" label="Credentials" />

        {/* Education — doctorate feature card + completed degrees */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Doctorate — the lead */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE }}
            data-cursor="view"
            data-cursor-text="2028"
            className="group relative overflow-hidden border border-ink bg-ink p-8 text-paper lg:col-span-1"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-6 -right-3 select-none font-heading text-[9rem] font-extrabold leading-none text-paper/[0.06] transition-opacity duration-500 group-hover:text-accent/10"
            >
              PhD
            </span>
            <div className="relative">
              <span className="inline-flex items-center gap-2 border border-accent/60 px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                Pursuing
              </span>
              <p className="mt-6 font-body text-xs font-semibold uppercase tracking-[0.3em] text-paper/60">
                Doctorate
              </p>
              <h3 className="mt-2 font-heading text-2xl font-bold leading-tight md:text-[1.7rem]">
                Artificial Intelligence
              </h3>
              <ProgressBar />
            </div>
          </motion.div>

          {/* Completed degrees */}
          {DEGREES.map((degree, i) => (
            <motion.div
              key={degree.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.08 }}
              className="group relative flex flex-col justify-between border border-ink/15 bg-paper p-8 transition-colors duration-300 hover:border-accent"
            >
              <div className="flex items-start justify-between">
                <span className="font-heading text-4xl font-extrabold text-ink/12 transition-colors duration-300 group-hover:text-accent/40">
                  {degree.level}
                </span>
                <span className="border border-ink/20 px-2.5 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/60">
                  {degree.status}
                </span>
              </div>
              <h3 className="mt-10 font-heading text-xl font-bold leading-snug md:text-[1.35rem]">
                {degree.title}
              </h3>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Certifications — badge wall */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-8 flex items-center gap-3 font-heading text-lg font-bold"
          >
            <span className="h-px w-6 bg-accent" />
            Certifications
            <span className="font-body text-xs font-medium normal-case tracking-normal text-muted">
              — the full CompTIA stack
            </span>
          </motion.h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          >
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.short}
                variants={{ hidden: { opacity: 0, y: 24, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: EASE } } }}
                data-cursor="hover"
                className="group relative flex aspect-square flex-col items-center justify-center border border-ink/15 bg-paper p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_30px_rgba(255,77,0,0.12)]"
              >
                <span className="font-heading text-2xl font-extrabold leading-none text-ink transition-colors duration-300 group-hover:text-accent md:text-[1.7rem]">
                  {cert.short}
                </span>
                <span className="mt-2 font-body text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                  {cert.full}
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-center scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional study */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 flex items-center gap-3 font-heading text-lg font-bold"
          >
            <span className="h-px w-6 bg-accent" />
            Additional Study
          </motion.h3>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid gap-x-12 sm:grid-cols-2"
          >
            {ADDITIONAL_STUDY.map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } } }}
                className="group flex items-baseline gap-3 border-b border-ink/10 py-4 text-[1rem] leading-relaxed text-ink/75 transition-colors hover:text-ink"
              >
                <span className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
