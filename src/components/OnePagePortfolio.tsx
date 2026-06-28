'use client'

import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

const NAME_WORDS = ['Joshua', 'Powder']
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&@#%'

const roles = ['E-Governance Strategist', 'AI Full-Stack Architect', 'Cybersecurity Advisor']

const stats = [
  {
    number: '10+ Years',
    label: 'Telecom, cybersecurity, infrastructure, and development',
  },
  {
    number: '300+ Companies',
    label: 'Advised on connectivity, networks, and technology arrangements',
  },
  {
    number: 'AI + Governance',
    label: 'Building secure systems for public sector transformation',
  },
]

export default function OnePagePortfolio() {
  const nameRef = useRef<HTMLHeadingElement>(null)
  const aboutPanelRef = useRef<HTMLDivElement>(null)
  const [showContent, setShowContent] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  useEffect(() => {
    if (!nameRef.current) return

    const charEls = nameRef.current.querySelectorAll<HTMLSpanElement>('[data-char]')
    const tl = gsap.timeline({ delay: 0.2 })

    charEls.forEach((el) => {
      el.textContent = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
    })

    gsap.set(charEls, { opacity: 0 })

    charEls.forEach((el, i) => {
      const correct = el.dataset.char || ''
      const charDelay = i * 0.04

      tl.to(el, { opacity: 1, duration: 0.01 }, charDelay)

      const scrambleCount = 5
      const frameGap = 0.05
      for (let f = 0; f < scrambleCount; f++) {
        tl.call(
          () => {
            el.textContent = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          },
          [],
          charDelay + 0.01 + f * frameGap
        )
      }

      const settleTime = charDelay + 0.01 + scrambleCount * frameGap
      tl.call(() => { el.textContent = correct }, [], settleTime)
    })

    tl.call(() => setShowContent(true), [], '+=0.3')
  }, [])

  useEffect(() => {
    if (!aboutPanelRef.current) return

    if (showAbout) {
      gsap.set(aboutPanelRef.current, { display: 'block' })
      gsap.to(aboutPanelRef.current, {
        x: 0,
        duration: 0.6,
        ease: 'power3.out',
      })
    } else {
      gsap.to(aboutPanelRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power3.in',
        onComplete: () => {
          if (aboutPanelRef.current) {
            gsap.set(aboutPanelRef.current, { display: 'none' })
          }
        },
      })
    }
  }, [showAbout])

  return (
    <>
      <div className="h-screen w-screen overflow-hidden bg-paper px-6 sm:px-10 lg:px-16 flex items-center justify-center relative">
        {/* Sketch Background */}
        <div 
          className="absolute inset-0 opacity-[0.20] pointer-events-none"
          style={{
            backgroundImage: 'url(/hero-portrait.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            mixBlendMode: 'multiply',
          }}
        />

        <div className="max-w-[1400px] w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* Left: Name + Roles */}
          <div>
            <h1
              ref={nameRef}
              className="font-heading font-black text-ink mb-6"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.2rem)', lineHeight: 0.95 }}
            >
              {NAME_WORDS.map((word, wi) => (
                <span key={wi} className="block">
                  {word.split('').map((char, ci) => (
                    <span
                      key={ci}
                      data-char={char}
                      className="inline-block"
                      style={{ opacity: 0 }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <div
              className={`space-y-2 font-heading font-semibold uppercase tracking-wide text-ink transition-opacity duration-700 ${
                showContent ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ fontSize: 'clamp(0.99rem, 2.2vw, 1.43rem)' }}
            >
              {roles.map((role, i) => (
                <div key={i}>{role}</div>
              ))}
            </div>

            <p
              className={`mt-8 leading-relaxed text-muted max-w-md transition-opacity duration-700 delay-200 ${
                showContent ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ fontSize: 'clamp(1.045rem, 2.2vw, 1.21rem)' }}
            >
              I design secure AI-driven systems that help governments and businesses modernize operations, 
              improve decision-making, and deliver services more efficiently.
            </p>

            <div
              className={`mt-8 flex flex-wrap items-center gap-4 transition-opacity duration-700 delay-300 ${
                showContent ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <a
                href="mailto:hello@jpowder.io"
                className="px-7 py-3.5 border-2 border-ink text-ink font-heading font-bold uppercase tracking-[0.15em] hover:bg-ink hover:text-paper transition-colors duration-300"
                style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}
              >
                Contact
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Quick Info Grid + About Me Button */}
          <div
            className={`space-y-6 transition-opacity duration-700 delay-400 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="border border-rule p-5">
                <p className="uppercase tracking-[0.15em] text-muted mb-2" style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}>Experience</p>
                <p className="font-heading font-bold text-ink" style={{ fontSize: 'clamp(1.43rem, 3vw, 2.64rem)' }}>10+ Years</p>
                <p className="text-muted mt-1" style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}>Infrastructure, Security & Development</p>
              </div>

              <div className="border border-rule p-5">
                <p className="uppercase tracking-[0.15em] text-muted mb-2" style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}>Advisory</p>
                <p className="font-heading font-bold text-ink" style={{ fontSize: 'clamp(1.43rem, 3vw, 2.64rem)' }}>300+ Clients</p>
                <p className="text-muted mt-1" style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}>Connectivity & Tech Solutions</p>
              </div>

              <div className="border border-rule p-5">
                <p className="uppercase tracking-[0.15em] text-muted mb-2" style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}>Education</p>
                <p className="font-heading font-bold text-ink" style={{ fontSize: 'clamp(0.935rem, 2vw, 1.155rem)' }}>MSc. Cybersecurity</p>
                <p className="text-muted mt-1" style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}>Information Assurance</p>
              </div>

              <div className="border border-rule p-5">
                <p className="uppercase tracking-[0.15em] text-muted mb-2" style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}>Certifications</p>
                <p className="font-heading font-bold text-ink" style={{ fontSize: 'clamp(0.935rem, 2vw, 1.155rem)' }}>CompTIA Stack</p>
                <p className="text-muted mt-1" style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}>A+, Net+, Sec+, CySA+, PenTest+, Proj+</p>
              </div>

              <div className="col-span-2 border border-rule p-5">
                <p className="uppercase tracking-[0.15em] text-muted mb-3" style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}>Focus Areas</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-ink" style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}>
                  <div>• E-Governance Platforms</div>
                  <div>• AI Systems Architecture</div>
                  <div>• Cybersecurity & Risk</div>
                  <div>• Telecom Infrastructure</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowAbout(true)}
              className="w-full px-7 py-4 bg-ink text-paper font-heading font-bold uppercase tracking-[0.15em] hover:bg-ink/90 transition-colors duration-300"
              style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}
            >
              About Me
            </button>
          </div>
        </div>
      </div>

      {/* About Me Slide Panel */}
      <div
        ref={aboutPanelRef}
        className="fixed inset-0 bg-paper z-50 overflow-y-auto"
        style={{ display: 'none', transform: 'translateX(100%)' }}
      >
        <div className="min-h-screen px-6 sm:px-10 lg:px-16 py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto">
            <button
              onClick={() => setShowAbout(false)}
              className="mb-8 flex items-center gap-2 text-muted hover:text-ink transition-colors"
              style={{ fontSize: 'clamp(0.715rem, 1.5vw, 0.88rem)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>

            <h2 className="font-heading font-bold text-ink mb-8" style={{ fontSize: 'clamp(1.76rem, 4vw, 2.64rem)' }}>
              From networks to governance systems.
            </h2>

            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-2 space-y-6">
                <p className="leading-relaxed text-ink" style={{ fontSize: 'clamp(1.045rem, 2.2vw, 1.21rem)' }}>
                  My journey into technology started with networks. While still in high school, I built and operated 
                  a VPN service for gamers who needed reliable access to online platforms outside their region. 
                  That early experience shaped how I think about technology: as a practical tool for solving access, 
                  infrastructure, and operational problems.
                </p>
                <p className="leading-relaxed text-ink" style={{ fontSize: 'clamp(1.045rem, 2.2vw, 1.21rem)' }}>
                  Over the last decade, I've worked across telecommunications, data center services, cybersecurity, 
                  and full-stack development. I have advised more than 300 companies on connectivity, infrastructure 
                  planning, data transfer, and cost-efficient technology arrangements.
                </p>
                <p className="leading-relaxed text-ink" style={{ fontSize: 'clamp(1.045rem, 2.2vw, 1.21rem)' }}>
                  Today, my work focuses on e-governance: helping public sector institutions and businesses modernize 
                  complex processes through secure, scalable, AI-driven systems that people actually use.
                </p>
              </div>

              <div className="space-y-8">
                {stats.map((stat) => (
                  <div key={stat.number} className="border-l-2 border-ink/20 pl-4">
                    <p className="font-heading font-bold text-ink mb-1" style={{ fontSize: 'clamp(1.21rem, 2.5vw, 1.43rem)' }}>{stat.number}</p>
                    <p className="leading-relaxed text-muted" style={{ fontSize: 'clamp(0.825rem, 1.7vw, 0.99rem)' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
