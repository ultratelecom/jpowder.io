'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&@#%'

type ScrambleTextProps = {
  text: string
  /** Milliseconds before the scramble begins (used to stagger multi-line headings). */
  delay?: number
  /** Extra classes on the wrapping span. */
  className?: string
  /** When false, the text renders settled with no animation. */
  animate?: boolean
  /**
   * 'mount'  — scramble as soon as it renders (hero, driven by preloader gate).
   * 'scroll' — hold the cipher until the element scrolls into view.
   */
  trigger?: 'mount' | 'scroll'
}

/**
 * The site's signature reveal: each character cycles random cipher glyphs
 * before settling into the real letter, left to right. Used for the hero name
 * and every section heading so the whole site speaks one animation language.
 */
export default function ScrambleText({
  text,
  delay = 0,
  className,
  animate = true,
  trigger = 'mount',
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  const started = trigger === 'mount' ? true : inView

  useEffect(() => {
    if (!animate || !started || !ref.current) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const spans = Array.from(ref.current.querySelectorAll<HTMLElement>('[data-ch]'))

    // Reduced motion: settle instantly, no cipher.
    if (reduced) {
      spans.forEach((el) => {
        el.textContent = el.dataset.ch === ' ' ? ' ' : el.dataset.ch || ''
      })
      return
    }

    const timers: ReturnType<typeof setTimeout>[] = []
    const intervals: ReturnType<typeof setInterval>[] = []

    spans.forEach((el, i) => {
      const final = el.dataset.ch || ''
      if (final === ' ') return
      const start = setTimeout(() => {
        const id = setInterval(() => {
          el.textContent = CHARS[Math.floor(Math.random() * CHARS.length)]
        }, 45)
        intervals.push(id)
        const settle = setTimeout(() => {
          clearInterval(id)
          el.textContent = final
        }, 220)
        timers.push(settle)
      }, delay + i * 55)
      timers.push(start)
    })

    return () => {
      timers.forEach(clearTimeout)
      intervals.forEach(clearInterval)
    }
  }, [text, delay, animate, started])

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={i} data-ch={ch} aria-hidden className="inline-block">
          {animate ? (ch === ' ' ? ' ' : started ? ' ' : ch) : ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  )
}
