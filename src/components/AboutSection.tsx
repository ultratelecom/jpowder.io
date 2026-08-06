'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import ScrambleText from '@/components/ScrambleText'

const STATS = [
  { value: 10, suffix: '+', label: 'Years across telecom, cybersecurity, infrastructure & development' },
  { value: 300, suffix: '+', label: 'Companies advised on connectivity, networks & technology arrangements' },
]

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDisplay(value)
      return
    }
    let raf = 0
    const start = performance.now()
    const duration = 1600
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

const EASE = [0.25, 0.4, 0.25, 1] as const

/**
 * Scene 3: About. On the left, the sketch portrait develops into the real
 * photograph ("the man behind the sketch") as it enters view. On the right,
 * the journey story and the proof points that count themselves up.
 */
export default function AboutSection() {
  // Touch devices have no hover, so tap toggles the photo reveal.
  const [developed, setDeveloped] = useState(false)
  return (
    <section id="about" className="relative z-10 px-6 py-32 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeader index="02" label="About" />

        <div className="grid items-start gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
          {/* Portrait: sketch develops into the real photograph */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative"
            data-parallax="0.12"
          >
            <div
              className="group relative aspect-[4/5] overflow-hidden border border-ink/15 bg-paper"
              data-cursor="view"
              data-cursor-text="Joshua"
              onClick={() => setDeveloped((v) => !v)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setDeveloped((v) => !v)
                }
              }}
              aria-pressed={developed}
              aria-label="Reveal photograph of Joshua Powder"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about-portrait.png"
                alt="Sketch portrait of Joshua Powder"
                className={`absolute inset-0 h-full w-full object-cover object-center mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0 ${developed ? 'opacity-0' : ''}`}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/JOSH_PIC.jpg"
                alt="Joshua Powder"
                className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-100 group-hover:opacity-100 ${developed ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
              />
              <span className="absolute bottom-3 left-3 bg-ink px-2 py-1 font-body text-[10px] font-semibold uppercase tracking-[0.25em] text-paper">
                The man behind the sketch
              </span>
            </div>
            <p className="mt-3 font-body text-[11px] uppercase tracking-[0.25em] text-muted">
              Fig. 01 — sketch → photograph. <span className="hidden md:inline">Hover</span><span className="md:hidden">Tap</span> to develop.
            </p>
          </motion.div>

          {/* Story */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: EASE }}
              className="font-heading text-[clamp(1.6rem,3.4vw,2.6rem)] font-bold leading-tight"
            >
              <ScrambleText text="From networks to governance systems." trigger="scroll" />
            </motion.h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="mt-8 space-y-6 text-[1.05rem] leading-relaxed text-ink/80"
            >
              {[
                <>My journey into technology started with networks. While still in high school, I built and operated a <span className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4">VPN service for gamers</span> who needed reliable access to online platforms outside their region. That early experience shaped how I think about technology: as a practical tool for solving access, infrastructure, and operational problems.</>,
                <>Over the last decade, I&apos;ve worked across telecommunications, data center services, cybersecurity, and full-stack development. I have advised more than 300 companies on connectivity, infrastructure planning, data transfer, and cost-efficient technology arrangements.</>,
                <>Today, my work focuses on <span className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4">e-governance</span>: helping public sector institutions and businesses modernize complex processes through secure, scalable, AI-driven systems that people actually use.</>,
              ].map((para, i) => (
                <motion.p
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>

            {/* Proof points */}
            <div className="mt-12 grid gap-8 border-t border-ink/15 pt-10 sm:grid-cols-2">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold leading-none">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {['E-Governance Platforms', 'AI Systems Architecture', 'Cybersecurity & Risk', 'Telecom Infrastructure'].map((tag) => (
                <span
                  key={tag}
                  className="border border-ink/20 px-3 py-1.5 font-body text-[11px] font-medium uppercase tracking-[0.15em] text-ink/70 transition-colors hover:border-accent hover:text-accent"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
