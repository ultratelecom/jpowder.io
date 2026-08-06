'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Custom cursor: a small accent dot that tracks instantly, and a trailing
 * ring that lerps behind it. Hovering [data-cursor] targets morphs the ring
 * and optionally shows a label (data-cursor-text). Rendered only on fine-pointer
 * devices with motion enabled; the native cursor stays as fallback otherwise.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState('')
  const [variant, setVariant] = useState<'default' | 'hover' | 'view'>('default')

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    setEnabled(true)

    const pos = { x: -100, y: -100 }
    const ring = { x: -100, y: -100 }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX
      pos.y = e.clientY
      const target = (e.target as HTMLElement).closest?.('[data-cursor]') as HTMLElement | null
      if (target) {
        const kind = target.dataset.cursor
        setVariant(kind === 'view' ? 'view' : 'hover')
        setLabel(target.dataset.cursorText || '')
      } else {
        setVariant('default')
        setLabel('')
      }
    }

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.16
      ring.y += (pos.y - ring.y) * 0.16
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[95] h-1.5 w-1.5 rounded-full bg-accent"
      />
      <div
        ref={ringRef}
        aria-hidden
        className={[
          'pointer-events-none fixed left-0 top-0 z-[94] flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color,opacity] duration-300',
          variant === 'view'
            ? 'h-20 w-20 border-accent bg-accent text-paper'
            : variant === 'hover'
              ? 'h-12 w-12 border-accent/70 bg-accent/10'
              : 'h-8 w-8 border-ink/30 bg-transparent',
        ].join(' ')}
      >
        <span
          ref={labelRef}
          className={[
            'select-none font-heading text-[10px] font-bold uppercase tracking-[0.18em] transition-opacity duration-200',
            variant === 'view' && label ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        >
          {label}
        </span>
      </div>
    </>
  )
}
