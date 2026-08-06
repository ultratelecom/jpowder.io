'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const SECTIONS = ['hero', 'manifesto', 'about', 'expertise', 'work', 'credentials', 'contact']

/**
 * A quiet fixed readout in the corner: which scene you're in (01–07) plus a
 * hairline accent bar tracking total scroll depth.
 */
export default function ScrollProgress() {
  const [current, setCurrent] = useState(0)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2
      let idx = 0
      SECTIONS.forEach((id, i) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= mid) idx = i
      })
      setCurrent(idx)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[70] hidden items-center gap-3 font-body text-[11px] font-semibold tabular-nums tracking-[0.25em] text-muted md:flex">
        <span className="text-accent">{String(current + 1).padStart(2, '0')}</span>
        <span className="h-px w-6 bg-ink/20" />
        <span>{String(SECTIONS.length).padStart(2, '0')}</span>
      </div>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-accent"
      />
    </>
  )
}
