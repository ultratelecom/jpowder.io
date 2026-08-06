'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrambleText from '@/components/ScrambleText'

const ROLES = ['E-Governance Strategist', 'AI Full-Stack Architect', 'Cybersecurity Advisor']

/**
 * Scene 1: the hero. The name scrambles in over two colossal Syne lines while
 * the sketch portrait draws itself into the frame. The entrance only begins
 * once the preloader fires 'jp:loaded', so the reveal is never hidden behind
 * the curtain.
 */
export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onLoaded = () => setLoaded(true)
    // If the preloader already finished (e.g. reduced-motion), start immediately.
    if (typeof window !== 'undefined' && (window as unknown as { __jpLoaded?: boolean }).__jpLoaded) {
      setLoaded(true)
    }
    window.addEventListener('jp:loaded', onLoaded)
    return () => window.removeEventListener('jp:loaded', onLoaded)
  }, [])

  // Scroll-linked hand-off: as the hero scrolls away, its giant name recedes
  // and the navbar brand fades in — the name "moves" from hero to nav.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const navName = document.getElementById('nav-name')
    const heroName = rootRef.current?.querySelector('#hero-name')
    if (reduced || !navName || !heroName || !rootRef.current) {
      if (navName) navName.style.opacity = '1'
      return
    }
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.to(navName, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top top', end: '25% top', scrub: true },
      })
      gsap.to(heroName, {
        opacity: 0,
        yPercent: -18,
        ease: 'none',
        scrollTrigger: { trigger: rootRef.current, start: 'top top', end: '35% top', scrub: true },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [loaded])

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } },
  }
  const rise = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const } },
  }

  return (
    <section id="hero" ref={rootRef} className="relative flex min-h-screen items-center overflow-hidden">
      {/* Sketch portrait — draws itself, then drifts forever */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46vw] select-none md:block">
        {loaded && (
          <div className="sketch-reveal absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-portrait.png"
              alt=""
              className="ken-burns h-full w-full object-cover object-center opacity-[0.32] mix-blend-multiply [mask-image:linear-gradient(to_left,black_55%,transparent_98%)]"
            />
          </div>
        )}
      </div>

      {/* Mobile-only parallax sketch — layered depth behind the content */}
      <div className="pointer-events-none absolute inset-0 select-none md:hidden">
        {loaded && (
          <img
            src="/hero-portrait.png"
            alt=""
            data-parallax="0.28"
            className="absolute -right-[12%] top-[6%] h-[74%] object-cover object-center opacity-[0.18] mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_60%,transparent_98%)]"
          />
        )}
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={loaded ? 'show' : 'hidden'}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-24 sm:px-10 lg:px-16"
      >
        <motion.p
          variants={rise}
          className="mb-6 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.3em] text-muted"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          Portfolio — Vol. 01
        </motion.p>

        <h1 id="hero-name" className="font-heading font-extrabold uppercase leading-[0.92] tracking-tight">
          <span className="block text-[clamp(3.6rem,17vw,8.5rem)]">
            {loaded && <ScrambleText text="Joshua" delay={100} />}
          </span>
          <span className="block text-[clamp(3.6rem,17vw,8.5rem)]">
            {loaded && <ScrambleText text="Powder" delay={650} />}
          </span>
        </h1>

        <motion.div variants={rise} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
          {ROLES.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              <span className="font-body text-[clamp(0.7rem,1.4vw,0.9rem)] font-semibold uppercase tracking-[0.22em] text-ink/80">
                {role}
              </span>
              {i < ROLES.length - 1 && <span className="h-1 w-1 rounded-full bg-accent" />}
            </span>
          ))}
        </motion.div>

        <motion.p variants={rise} className="mt-8 max-w-xl text-[clamp(1rem,1.6vw,1.2rem)] leading-relaxed text-ink/75">
          I design <span className="font-semibold text-ink">secure AI-driven systems</span> that help{' '}
          <span className="font-semibold text-ink">governments and businesses</span> modernize operations,
          improve decision-making, and deliver services more efficiently.
        </motion.p>

        <motion.div variants={rise} className="mt-12 flex items-center gap-6">
          <a
            href="#contact"
            data-cursor="hover"
            className="group relative inline-flex items-center gap-3 overflow-hidden border-2 border-ink px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.25em] transition-colors duration-300 hover:text-paper"
          >
            <span className="absolute inset-0 -z-0 translate-y-full bg-ink transition-transform duration-300 ease-out group-hover:translate-y-0" />
            <span className="relative z-10">Contact</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#manifesto"
            data-cursor="hover"
            className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-ink/60 underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-ink"
          >
            Read the manifesto
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-6 z-10 flex flex-col items-center gap-3 sm:left-10 lg:left-16"
      >
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.35em] text-muted [writing-mode:vertical-lr]">
          Scroll
        </span>
        <span className="scroll-line" />
      </motion.div>

      {/* Frame corner marks — architectural drafting detail */}
      <div aria-hidden className="pointer-events-none absolute inset-4 z-10 hidden md:block">
        <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-ink/25" />
        <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-ink/25" />
        <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-ink/25" />
        <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-ink/25" />
      </div>
    </section>
  )
}
