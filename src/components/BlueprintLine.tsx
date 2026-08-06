'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * The connective tissue of the sketchbook: a hand-laid circuit path that
 * draws itself down the left gutter as the visitor scrolls between scenes,
 * with node "pads" that flare as the line reaches them. Pure schematic ink.
 */
export default function BlueprintLine() {
  const pathRef = useRef<SVGPathElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const path = pathRef.current
    const root = rootRef.current
    if (!path || !root) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = reduced ? '0' : `${length}`

    if (reduced) {
      root.querySelectorAll('[data-node]').forEach((n) => n.setAttribute('opacity', '1'))
      return
    }

    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.4,
        },
      })
      root.querySelectorAll('[data-node]').forEach((node) => {
        gsap.fromTo(
          node,
          { opacity: 0.15 },
          {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: node as SVGElement,
              start: 'top 80%',
              end: 'top 55%',
              scrub: true,
            },
          }
        )
      })
    }, root)
    return () => ctx.revert()
  }, [])

  // A stepped, right-angled schematic trace running the page height.
  const d = [
    'M 40 0',
    'V 420', 'H 88', 'V 700',
    'V 1180', 'H 24', 'V 1560',
    'V 2050', 'H 96', 'V 2500',
    'V 2950', 'H 40', 'V 3400',
    'V 3900', 'H 80', 'V 4400',
    'V 5000', 'H 32', 'V 5600',
    'V 6200', 'H 88', 'V 6900',
    'V 10000',
  ].join(' ')

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] hidden h-full w-28 lg:block"
    >
      <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 120 10000" fill="none">
        {/* The trace itself */}
        <path
          ref={pathRef}
          d={d}
          stroke="#0a0a0a"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        {/* Node pads that flare as the line passes */}
        {[
          { x: 40, y: 420 }, { x: 88, y: 700 }, { x: 24, y: 1560 }, { x: 96, y: 2500 },
          { x: 40, y: 3400 }, { x: 80, y: 4400 }, { x: 32, y: 5600 }, { x: 88, y: 6900 },
        ].map((n, i) => (
          <g key={i} data-node opacity="0.15">
            <circle cx={n.x} cy={n.y} r="5" fill="#fafafa" stroke="#FF4D00" strokeWidth="1.5" />
            <circle cx={n.x} cy={n.y} r="1.8" fill="#FF4D00" />
          </g>
        ))}
      </svg>
    </div>
  )
}
