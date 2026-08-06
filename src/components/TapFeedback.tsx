'use client'

import { useEffect } from 'react'

/**
 * Global tap feedback: on touch devices, pressing any link, button, or
 * [role="button"] gives it a quick physical "press" (scale-down with a springy
 * release). Implemented as a delegated touch handler adding a .tap-press class
 * so it never fights Tailwind's own transition utilities.
 */
export default function TapFeedback() {
  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!coarse || reduced) return

    const findTarget = (el: EventTarget | null): HTMLElement | null =>
      el instanceof HTMLElement ? el.closest('a, button, [role="button"], .tap-target') : null

    const onStart = (e: TouchEvent) => {
      const t = findTarget(e.target)
      if (t) t.classList.add('tap-press')
    }
    const onEnd = (e: TouchEvent) => {
      const t = findTarget(e.target)
      if (t) {
        // Brief delay so the press reads before releasing.
        setTimeout(() => t.classList.remove('tap-press'), 90)
      }
      // Safety: clear any stragglers.
      document.querySelectorAll('.tap-press').forEach((el) => el.classList.remove('tap-press'))
    }

    document.addEventListener('touchstart', onStart, { passive: true })
    document.addEventListener('touchend', onEnd, { passive: true })
    document.addEventListener('touchcancel', onEnd, { passive: true })
    return () => {
      document.removeEventListener('touchstart', onStart)
      document.removeEventListener('touchend', onEnd)
      document.removeEventListener('touchcancel', onEnd)
    }
  }, [])

  return null
}
