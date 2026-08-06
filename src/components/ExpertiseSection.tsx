'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'

const CARDS = [
  {
    title: 'E-Governance & Digital Transformation',
    description:
      'Designing platforms that improve public sector workflows, transparency, service delivery, and institutional performance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="9 22 9 12 15 12 15 22" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'AI Systems & Full-Stack Development',
    description:
      'Building applied AI tools, employee portals, workflow systems, dashboards, and operational platforms.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 8l-2 1.5L7 11M17 8l2 1.5L17 11M13 7l-2 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity & Risk',
    description:
      'Bringing security, privacy, governance, and resilience into the architecture from the start.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <path d="M12 2L3 7v5c0 5.25 3.83 10.15 9 11.25C17.17 22.15 21 17.25 21 12V7l-9-5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Telecommunications & Infrastructure',
    description:
      'Applying over a decade of experience in connectivity, data centers, networks, routing, and infrastructure planning.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-10">
        <rect x="2" y="2" width="20" height="8" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="14" width="20" height="8" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6h.01M6 18h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function Card({ card, index }: { card: (typeof CARDS)[number]; index: number }) {
  return (
    <div className="group relative flex h-[62vh] min-h-[420px] w-[80vw] shrink-0 flex-col justify-between border border-ink/15 bg-paper p-8 transition-colors duration-300 hover:border-accent sm:w-[26rem] md:p-10">
      <div className="flex items-start justify-between">
        <span className="text-ink/70 transition-colors duration-300 group-hover:text-accent">{card.icon}</span>
        <span className="font-heading text-[clamp(3rem,6vw,5rem)] font-extrabold leading-none text-ink/10 transition-colors duration-300 group-hover:text-accent/30">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div>
        <h3 className="font-heading text-2xl font-bold leading-snug md:text-[1.7rem]">{card.title}</h3>
        <p className="mt-4 leading-relaxed text-muted">{card.description}</p>
      </div>
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
    </div>
  )
}

/**
 * Scene 4: Expertise. On desktop the section pins and the four disciplines
 * glide sideways as the visitor scrolls — a horizontal gallery. On small or
 * reduced-motion screens it degrades to a native horizontal snap-scroll.
 */
export default function ExpertiseSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [desktop, setDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)')
    const update = () => setDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-62%'])

  return (
    <section id="expertise" ref={targetRef} className={`relative ${desktop ? 'h-[300vh]' : 'py-24'}`}>
      <div className={desktop ? 'sticky top-0 flex h-screen flex-col justify-center overflow-hidden' : ''}>
        <div className="px-6 pt-6 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-[1400px]">
            <SectionHeader index="03" label="Expertise" />
          </div>
        </div>

        {desktop ? (
          <motion.div style={{ x }} className="flex gap-6 pl-6 sm:pl-10 lg:pl-16">
            {CARDS.map((card, i) => (
              <Card key={card.title} card={card} index={i} />
            ))}
            <div className="flex w-[40vw] shrink-0 items-center">
              <p className="max-w-[16rem] font-heading text-2xl font-bold leading-snug text-ink/40">
                Four disciplines. One systems mind.
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 sm:px-10">
            {CARDS.map((card, i) => (
              <div key={card.title} className="snap-start">
                <Card card={card} index={i} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
