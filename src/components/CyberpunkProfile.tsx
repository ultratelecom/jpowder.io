'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const certifications = [
  'CompTIA Project+',
  'CompTIA PenTest+',
  'CompTIA CySA+',
  'CompTIA Security+',
  'CompTIA Network+',
  'CompTIA A+',
  'Marketing Analytics - University of Virginia',
  'Introduction to Cybersecurity Tools & Cyber Attacks - IBM',
  'Strategic Management - Copenhagen Business School',
  'Strategy Formulation - Copenhagen Business School',
  'Strategy Implementation - Copenhagen Business School',
  'Windows Server Management and Security - University of Colorado'
]

export default function CyberpunkProfile() {
  return (
    <div className="relative z-10 h-screen flex items-center justify-start pl-8 md:pl-16">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-2xl"
      >
        {/* Profile Picture with Cyberpunk Frame */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="relative mb-8"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 relative">
            {/* Cyberpunk frame effect */}
            <div className="absolute inset-0 border-2 border-cyan-400 shadow-[0_0_20px_#00ffff] animate-pulse"></div>
            <div className="absolute -inset-2 border border-purple-500 opacity-50"></div>
            <div className="absolute -inset-4 border border-green-400 opacity-25"></div>
            
            <Image
              src="/JOSH_PIC.jpg"
              alt="Josh Rapowda"
              fill
              className="object-cover filter contrast-110 brightness-110"
              priority
            />
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
            JOSH RAPOWDA
          </h1>
          <div className="text-xl md:text-2xl text-cyan-300 mb-2 font-mono">
            &gt; CYBERSECURITY ANALYST
          </div>
          <div className="text-lg text-green-400 mb-8 font-mono">
            [10+ YEARS EXPERIENCE IN DATA CENTER SERVICES]
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 font-mono">
            &gt; CREDENTIALS_
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-cyan-400">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-cyan-400/30 p-3 rounded backdrop-blur-sm hover:border-cyan-400/60 hover:shadow-[0_0_10px_#00ffff] transition-all duration-300"
              >
                <div className="text-green-400 text-sm font-mono">
                  ✓ {cert}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Glitch effect overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              opacity: [0, 1, 0],
              x: [0, 2, -2, 0],
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-blue-500/10 mix-blend-screen"
          />
        </div>
      </motion.div>
    </div>
  )
} 