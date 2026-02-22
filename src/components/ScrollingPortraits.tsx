'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const portraits = [
  { src: '/hero-portrait.png', section: '#hero', objectPosition: 'top center' },
  { src: '/about-portrait.png', section: '#about', objectPosition: 'center center' },
]

export default function ScrollingPortraits() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((imgEl, i) => {
        if (!imgEl) return

        const img = imgEl.querySelector('img')

        gsap.set(imgEl, { opacity: i === 0 ? 1 : 0 })

        // Slow, perpetual scale-up on whichever image is visible
        if (img) {
          gsap.set(img, { scale: 1 })
        }

        ScrollTrigger.create({
          trigger: portraits[i].section,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => {
            gsap.to(imgEl, { opacity: 1, duration: 0.8, ease: 'power2.inOut' })
            if (img) {
              gsap.fromTo(img,
                { scale: 1 },
                { scale: 1.04, duration: 25, ease: 'none' }
              )
            }
            imageRefs.current.forEach((other, j) => {
              if (j !== i && other) {
                gsap.to(other, { opacity: 0, duration: 0.8, ease: 'power2.inOut' })
              }
            })
          },
          onEnterBack: () => {
            gsap.to(imgEl, { opacity: 1, duration: 0.8, ease: 'power2.inOut' })
            if (img) {
              gsap.fromTo(img,
                { scale: 1 },
                { scale: 1.04, duration: 25, ease: 'none' }
              )
            }
            imageRefs.current.forEach((other, j) => {
              if (j !== i && other) {
                gsap.to(other, { opacity: 0, duration: 0.8, ease: 'power2.inOut' })
              }
            })
          },
        })
      })

      // Start the hero image growth immediately on load
      const heroImg = imageRefs.current[0]?.querySelector('img')
      if (heroImg) {
        gsap.fromTo(heroImg,
          { scale: 1 },
          { scale: 1.04, duration: 25, ease: 'none' }
        )
      }

      ScrollTrigger.create({
        trigger: '#about',
        start: 'bottom 30%',
        onEnter: () => {
          gsap.to(containerRef.current, { opacity: 0, duration: 0.6, ease: 'power2.out' })
        },
        onLeaveBack: () => {
          gsap.to(containerRef.current, { opacity: 1, duration: 0.6, ease: 'power2.out' })
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed top-0 right-0 w-[55%] h-screen hidden md:block pointer-events-none select-none z-0 overflow-hidden"
    >
      {portraits.map((p, i) => (
        <div
          key={p.src}
          ref={(el) => { imageRefs.current[i] = el }}
          className="absolute inset-0 overflow-hidden"
          style={{ opacity: 0 }}
        >
          <Image
            src={p.src}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            style={{ mixBlendMode: 'multiply', objectPosition: p.objectPosition }}
            sizes="55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/60 to-transparent" />
        </div>
      ))}
    </div>
  )
}
