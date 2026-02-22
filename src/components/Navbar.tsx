'use client'

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = useCallback((href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-paper border-b border-rule' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-14 md:h-16">
          <button
            id="nav-name"
            onClick={() => handleClick('#hero')}
            className="text-xs font-heading font-bold uppercase tracking-[0.15em] text-ink"
            style={{ opacity: 0 }}
          >
            Joshua Powder
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-xs uppercase tracking-[0.2em] font-medium text-muted hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-7 h-7 flex flex-col items-center justify-center gap-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-4 h-px bg-ink transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[2.5px]' : ''}`} />
            <span className={`block w-4 h-px bg-ink transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[2.5px]' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-paper border-b border-rule overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left text-xs uppercase tracking-[0.2em] font-medium text-muted hover:text-ink transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
