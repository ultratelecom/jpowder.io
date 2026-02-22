'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NAME_WORDS = ['Joshua', 'Powder']
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&@#%'

const roles = [
  {
    text: 'Cybersecurity Analyst',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
        <path d="M12 2L3 7v5c0 5.25 3.83 10.15 9 11.25C17.17 22.15 21 17.25 21 12V7l-9-5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    text: 'AI Full Stack Developer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M7 20h10" />
        <path d="M12 17v3" />
        <path d="M8 10l-2 1.5L8 13" />
        <path d="M16 10l2 1.5L16 13" />
        <path d="M13 8l-2 7" />
      </svg>
    ),
  },
  {
    text: 'AI Contextual Engineer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
        <path d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 5.5V16H8v-1.5C6.5 13.5 5 11.5 5 9a7 7 0 017-7z" />
        <path d="M9 21h6" />
        <path d="M10 18h4" />
        <path d="M9 9.5c0-.8.6-1.5 1.3-1.5.5 0 .9.3 1.1.7.2-.4.6-.7 1.1-.7.7 0 1.3.7 1.3 1.5 0 1.5-2.4 2.5-2.4 2.5S9 11 9 9.5z" />
        <circle cx="8" cy="7" r="0.5" fill="currentColor" />
        <circle cx="16" cy="7" r="0.5" fill="currentColor" />
        <path d="M7 11c-1.5.5-2.5 1.5-2.5 1.5" />
        <path d="M17 11c1.5.5 2.5 1.5 2.5 1.5" />
      </svg>
    ),
  },
]

export default function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null)
  const rolesRef = useRef<HTMLDivElement>(null)
  const blurbRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!nameRef.current) return

    const charEls = nameRef.current.querySelectorAll<HTMLSpanElement>('[data-char]')
    const tl = gsap.timeline({ delay: 0.2 })

    charEls.forEach((el) => {
      el.textContent = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
    })

    gsap.set(charEls, { opacity: 0 })

    let lastCharEnd = 0

    charEls.forEach((el, i) => {
      const correct = el.dataset.char || ''
      const charDelay = i * 0.04

      tl.to(el, { opacity: 1, duration: 0.01 }, charDelay)

      const scrambleCount = 5
      const frameGap = 0.05
      for (let f = 0; f < scrambleCount; f++) {
        tl.call(
          () => {
            el.textContent =
              SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          },
          [],
          charDelay + 0.01 + f * frameGap
        )
      }

      const settleTime = charDelay + 0.01 + scrambleCount * frameGap
      tl.call(() => { el.textContent = correct }, [], settleTime)
      lastCharEnd = Math.max(lastCharEnd, settleTime)
    })

    // Roles clip-path wipe + badge pop-in
    if (rolesRef.current) {
      const roleEls = rolesRef.current.querySelectorAll<HTMLElement>('[data-role]')
      const badgeEls = rolesRef.current.querySelectorAll<HTMLElement>('[data-badge]')

      gsap.set(roleEls, { clipPath: 'inset(0 100% 0 0)' })
      gsap.set(badgeEls, { scale: 0, opacity: 0 })

      roleEls.forEach((role, i) => {
        const roleStart = lastCharEnd + 0.1 + i * 0.25
        tl.to(role, {
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.7,
          ease: 'power3.inOut',
        }, roleStart)

        if (badgeEls[i]) {
          tl.to(badgeEls[i], {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: 'back.out(2)',
          }, roleStart + 0.4)
        }
      })
    }

    // Blurb fade + underline reveal
    if (blurbRef.current) {
      gsap.set(blurbRef.current, { opacity: 0, y: 16 })
      tl.to(
        blurbRef.current,
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
        '-=0.3'
      )

      const underlines = blurbRef.current.querySelectorAll('.animated-underline')
      tl.call(() => {
        underlines.forEach((el) => el.classList.add('is-visible'))
      }, [], '+=0.2')
    }

    // Scroll morph: hero name → navbar name
    let morphTl: gsap.core.Timeline | undefined
    const navName = document.getElementById('nav-name')

    if (navName && nameRef.current) {
      gsap.set(navName, { opacity: 0 })

      morphTl = gsap.timeline({
        scrollTrigger: {
          trigger: nameRef.current,
          start: 'top 15%',
          end: 'top -5%',
          scrub: 0.3,
        },
      })

      morphTl.to(
        nameRef.current,
        { opacity: 0, scale: 0.92, y: -20, ease: 'none' },
        0
      )
      morphTl.to(navName, { opacity: 1, ease: 'none' }, 0)
    }

    return () => {
      tl.kill()
      morphTl?.scrollTrigger?.kill()
      morphTl?.kill()
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-6 sm:px-10 lg:px-16 pb-16 pt-32"
    >
      <div className="relative z-10 max-w-[1200px] w-full">
        <h1
          ref={nameRef}
          className="font-heading font-black uppercase tracking-tight text-ink leading-none"
          style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            transformOrigin: 'top left',
          }}
        >
          {NAME_WORDS.map((word, wi) => (
            <span key={wi} className="inline-block whitespace-nowrap">
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
              {wi < NAME_WORDS.length - 1 && (
                <span className="inline-block" style={{ width: '0.3em' }} />
              )}
            </span>
          ))}
        </h1>

        <div
          ref={rolesRef}
          className="mt-10 sm:mt-14 flex flex-col gap-3 font-heading font-semibold uppercase tracking-wide text-ink"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
        >
          {roles.map((role, i) => (
            <div key={i} className="flex items-center gap-3">
              <span data-role className="block">
                {role.text}
              </span>
              <span
                data-badge
                className="text-ink/70 flex-shrink-0"
                style={{ opacity: 0, transform: 'scale(0)' }}
              >
                {role.icon}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-auto pt-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 max-w-[1200px] w-full">
        <p
          ref={blurbRef}
          className="max-w-md text-base leading-relaxed text-ink"
          style={{ opacity: 0 }}
        >
          An <span className="animated-underline">e-governance strategist</span> and{' '}
          <span className="animated-underline">systems architect</span> focused on building
          AI-driven tools that improve how{' '}
          <span className="animated-underline">governments and businesses</span> operate.
        </p>

        <p className="text-xs text-muted/50 tracking-wider uppercase hidden sm:block">
          Scroll to explore
        </p>
      </div>
    </section>
  )
}
