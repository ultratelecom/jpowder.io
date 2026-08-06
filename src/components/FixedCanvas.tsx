'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * The site's living background: a hairline architectural grid, film grain,
 * and a safety-orange glow that blooms into view as the visitor scrolls away
 * from the hero. Sits behind everything (z-0); page content renders above it.
 */
export default function FixedCanvas() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !glowRef.current) return

    gsap.registerPlugin(ScrollTrigger)
    const tween = gsap.fromTo(
      glowRef.current,
      { opacity: 0.35 },
      {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div ref={glowRef} className="bg-glow absolute inset-0" />
      <div className="grain absolute inset-0 opacity-[0.05]" />
    </div>
  )
}
