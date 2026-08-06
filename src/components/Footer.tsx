'use client'

import { motion } from 'framer-motion'

/**
 * Scene 8: the footer. A slow marquee carries the disciplines across the
 * width, then a bottom bar with the copyright and a back-to-top control.
 */
export default function Footer() {
  const year = new Date().getFullYear()
  const marqueeItems = [
    'E-Governance',
    'AI Systems',
    'Cybersecurity',
    'Full-Stack Development',
    'Telecom Infrastructure',
  ]
  const strip = [...marqueeItems, ...marqueeItems, ...marqueeItems]

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 border-t border-ink/15">
      {/* Marquee */}
      <div className="overflow-hidden border-b border-ink/10 py-8" aria-hidden>
        <div className="animate-marquee flex w-max items-center">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center">
              {strip.map((item, i) => (
                <span key={`${half}-${i}`} className="flex items-center">
                  <span className="whitespace-nowrap px-6 font-heading text-[clamp(1.4rem,3.4vw,2.6rem)] font-bold uppercase tracking-tight text-ink/30">
                    {item}
                  </span>
                  <span className="text-accent">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center sm:px-10 lg:px-16">
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em]">Joshua Powder</p>
          <p className="mt-1 font-body text-xs text-muted">© {year} — Building systems that outlast trends.</p>
        </div>

        <motion.button
          type="button"
          onClick={backToTop}
          data-cursor="hover"
          whileHover={{ y: -3 }}
          className="group flex items-center gap-3 border border-ink/20 px-5 py-3 font-body text-xs font-semibold uppercase tracking-[0.25em] transition-colors hover:border-accent hover:text-accent"
        >
          Back to top
          <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
        </motion.button>
      </div>
    </footer>
  )
}
