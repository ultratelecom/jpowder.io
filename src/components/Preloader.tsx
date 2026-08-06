'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&@#%'

/**
 * Scene 0: a cipher preloader. The word "PORTFOLIO" scrambles while a
 * percentage counter ticks up; at 100 the counter flares accent and twin
 * ink curtains part to reveal the hero. Emits the 'jp:loaded' window event
 * so the hero can begin its entrance at exactly the right moment.
 */
export default function Preloader() {
  const [done, setDone] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const wordRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = rootRef.current
    const word = wordRef.current
    const count = countRef.current
    if (!root || !word || !count) return

    // Respect visitors who prefer calm: skip the ceremony entirely.
    if (reduced) {
      ;(window as unknown as { __jpLoaded?: boolean }).__jpLoaded = true
      setDone(true)
      window.dispatchEvent(new Event('jp:loaded'))
      return
    }

    document.documentElement.style.overflow = 'hidden'

    const letters = Array.from(word.querySelectorAll<HTMLElement>('[data-letter]'))
    const intervals: ReturnType<typeof setInterval>[] = []
    letters.forEach((el, i) => {
      const final = el.dataset.letter || ''
      const id = setInterval(() => {
        el.textContent = CHARS[Math.floor(Math.random() * CHARS.length)]
      }, 40)
      intervals.push(id)
      // Each letter settles left-to-right as the counter passes its threshold.
      setTimeout(() => {
        clearInterval(id)
        el.textContent = final
      }, 500 + i * 90)
    })

    const progress = { value: 0 }
    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = ''
        ;(window as unknown as { __jpLoaded?: boolean }).__jpLoaded = true
        window.dispatchEvent(new Event('jp:loaded'))
        setDone(true)
      },
    })

    tl.to(progress, {
      value: 100,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        count.textContent = String(Math.round(progress.value)).padStart(3, '0')
      },
    })
      .to(count, { color: '#FF4D00', duration: 0.15 }, '-=0.05')
      .to(word, { yPercent: -110, opacity: 0, duration: 0.5, ease: 'power3.in' }, '+=0.15')
      .to(count.parentElement, { opacity: 0, duration: 0.3 }, '<')
      .to(root.querySelectorAll('[data-curtain]'), {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut',
        stagger: 0.08,
      })

    return () => {
      intervals.forEach(clearInterval)
      tl.kill()
      document.documentElement.style.overflow = ''
    }
  }, [])

  if (done) return null

  return (
    <div ref={rootRef} aria-hidden className="fixed inset-0 z-[100]">
      <div data-curtain className="absolute inset-0 bg-ink" />
      <div data-curtain className="absolute inset-0 bg-ink/95" style={{ clipPath: 'inset(0 0 0 50%)' }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          ref={wordRef}
          className="font-heading text-[clamp(1.4rem,4vw,2.6rem)] font-bold uppercase tracking-[0.45em] text-paper"
        >
          {'PORTFOLIO'.split('').map((ch, i) => (
            <span key={i} data-letter={ch} className="inline-block w-[1.4ch] text-center">
              {ch}
            </span>
          ))}
        </div>
        <div className="mt-8 font-body text-sm tabular-nums tracking-[0.3em] text-paper/50">
          <span ref={countRef}>000</span>
          <span className="text-paper/30"> / 100</span>
        </div>
      </div>
    </div>
  )
}
