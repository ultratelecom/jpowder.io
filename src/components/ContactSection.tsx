'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'

const CYCLE_WORDS = ['together.', 'better.', 'faster.', 'secure.', 'to last.']

function CyclingWord() {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState(CYCLE_WORDS[0])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % CYCLE_WORDS.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const target = CYCLE_WORDS[index]
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDisplay(target)
      return
    }
    // Scramble from current to target.
    let frame = 0
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ&@#%'
    const id = setInterval(() => {
      frame++
      const settled = target
        .split('')
        .map((ch, i) => (i < frame ? ch : chars[Math.floor(Math.random() * chars.length)]))
        .join('')
      setDisplay(settled)
      if (frame >= target.length) {
        clearInterval(id)
        setDisplay(target)
      }
    }, 45)
    return () => clearInterval(id)
  }, [index])

  return (
    <span className="text-accent" aria-live="polite">
      {display}
    </span>
  )
}

/**
 * Scene 7: contact. The headline "Let's work together" enters with a kinetic
 * skew that settles as you scroll, and the email CTA is a magnet that pulls
 * toward the cursor before flooding with ink on hover.
 */
export default function ContactSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const magnetRef = useRef<HTMLAnchorElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'start 0.35'],
    layoutEffect: false,
  })
  const skewX = useTransform(scrollYProgress, [0, 1], [-8, 0])
  const y = useTransform(scrollYProgress, [0, 1], [80, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  const onMagnetMove = (e: React.MouseEvent) => {
    const el = magnetRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${relX * 0.18}px, ${relY * 0.22}px)`
  }
  const onMagnetLeave = () => {
    const el = magnetRef.current
    if (!el) return
    el.style.transition = 'transform 0.4s cubic-bezier(0.25,0.4,0.25,1)'
    el.style.transform = 'translate(0,0)'
    setTimeout(() => {
      if (el) el.style.transition = ''
    }, 400)
  }

  return (
    <section id="contact" ref={targetRef} className="relative z-10 overflow-hidden px-6 py-40 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeader index="06" label="Contact" />

        <motion.h2
          style={{ skewX, y, opacity }}
          className="max-w-6xl font-heading text-[clamp(2.9rem,12vw,7.5rem)] font-extrabold leading-[0.98] tracking-tight"
        >
          Let&apos;s build <CyclingWord />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70"
        >
          Building something that matters? I design secure, AI-driven systems for governments and businesses.
          Tell me where you&apos;re headed — let&apos;s work together.
        </motion.p>

        <div className="mt-14 flex flex-col items-start gap-10">
          <a
            ref={magnetRef}
            href="mailto:me@jpowder.io"
            onMouseMove={onMagnetMove}
            onMouseLeave={onMagnetLeave}
            data-cursor="hover"
            className="group relative inline-flex items-center gap-4 overflow-hidden border-2 border-ink px-10 py-6 font-heading text-lg font-bold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-paper md:px-14 md:py-7 md:text-xl"
          >
            <span className="absolute inset-0 translate-y-full bg-ink transition-transform duration-300 ease-out group-hover:translate-y-0" />
            <span className="relative z-10">me@jpowder.io</span>
            <span className="relative z-10 text-accent transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>

          <div className="flex items-center gap-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group font-body text-xs font-semibold uppercase tracking-[0.25em] text-muted transition-colors hover:text-ink"
            >
              LinkedIn
              <span className="mt-1 block h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="group font-body text-xs font-semibold uppercase tracking-[0.25em] text-muted transition-colors hover:text-ink"
            >
              GitHub
              <span className="mt-1 block h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
