'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Mobile-only ambient signature: two soft orange orbs that drift around the
 * screen edges, casting a slow "tech glow" against the frame. Touch devices
 * don't get the custom cursor, so this is the mobile counterpart — it gives
 * the small screen its own kinetic accent. Heavy blur keeps it atmospheric,
 * never a hard shape. Disabled entirely under prefers-reduced-motion.
 */
export default function MobileGlow() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const touch = window.matchMedia('(pointer: coarse)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const small = window.matchMedia('(max-width: 767px)').matches
    setEnabled((touch || small) && !reduced)
  }, [])

  if (!enabled) return null

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[6] overflow-hidden md:hidden">
      {/* Orbiting glow — travels the perimeter */}
      <motion.div
        className="absolute h-[55vw] w-[55vw] rounded-full bg-accent opacity-[0.16] blur-[70px]"
        animate={{
          x: ['-18%', '78%', '70%', '-16%', '-18%'],
          y: ['-12%', '18%', '78%', '72%', '-12%'],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        style={{ left: 0, top: 0 }}
      />
      {/* Counter-glow drifting the opposite way for depth */}
      <motion.div
        className="absolute h-[44vw] w-[44vw] rounded-full bg-accent opacity-[0.11] blur-[60px]"
        animate={{
          x: ['85%', '0%', '12%', '88%', '85%'],
          y: ['82%', '70%', '8%', '4%', '82%'],
        }}
        transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
        style={{ left: 0, top: 0 }}
      />
      {/* Soft vignette so the glow reads as hugging the frame */}
      <div className="absolute inset-0 [box-shadow:inset_0_0_90px_rgba(255,77,0,0.07)]" />
    </div>
  )
}
