'use client'

import { useEffect } from 'react'

/**
 * Mobile scroll parallax: elements tagged [data-parallax] drift at a reduced
 * rate relative to their parent section's scroll position, creating layered
 * depth on touch devices (which have no cursor to provide that depth cue).
 * Coarse-pointer + motion-allowed only. The scan for layers re-runs on every
 * scroll frame, so layers that mount later (the hero sketch waits for the
 * preloader) are picked up automatically.
 */
export default function MobileParallax() {
  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!coarse || reduced) return

    let raf = 0
    let ticking = false

    const update = () => {
      ticking = false
      const vh = window.innerHeight
      const layers = document.querySelectorAll<HTMLElement>('[data-parallax]')
      layers.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '0.25')
        const anchor = (el.closest('section') as HTMLElement) || el.parentElement || el
        const rect = anchor.getBoundingClientRect()
        if (rect.bottom < -vh * 0.5 || rect.top > vh * 1.5) return
        const progress = rect.top + rect.height / 2 - vh / 2
        el.style.transform = `translate3d(0, ${(-progress * speed).toFixed(1)}px, 0)`
      })
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        raf = requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
      document
        .querySelectorAll<HTMLElement>('[data-parallax]')
        .forEach((el) => (el.style.transform = ''))
    }
  }, [])

  return null
}
