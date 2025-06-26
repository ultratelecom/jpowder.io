'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const certifications = [
  'CompTIA Project+',
  'CompTIA PenTest+',
  'CompTIA CySA+',
  'CompTIA Security+',
  'CompTIA Network+',
  'CompTIA A+',
  'Marketing Analytics - University of Virginia',
  'Cybersecurity Tools & Cyber Attacks - IBM',
  'Strategic Management - Copenhagen Business School',
  'Strategy Formulation - Copenhagen Business School',
  'Strategy Implementation - Copenhagen Business School',
  'Windows Server Management and Security - University of Colorado'
]

export default function CyberpunkProfile() {
  const [showCredentials, setShowCredentials] = useState(false)
  const [isGlitching, setIsGlitching] = useState(false)

  // Glitch effect every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-6 md:px-8 lg:pl-12">
      {/* Credentials Toggle Button - Fixed to left edge */}
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={() => setShowCredentials(!showCredentials)}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-slate-900/95 border border-cyan-400/60 text-cyan-400 px-2 py-6 lg:py-8 rounded-r-lg backdrop-blur-sm hover:border-green-400/80 hover:text-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30 font-mono text-xs lg:text-sm font-bold"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span className="transform rotate-180">CREDENTIALS</span>
      </motion.button>

      {/* Credentials Sliding Panel */}
      <AnimatePresence>
        {showCredentials && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCredentials(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            
            {/* Sliding Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="fixed left-0 top-0 h-full w-full sm:w-96 lg:w-[28rem] bg-slate-900/98 backdrop-blur-md border-r border-slate-600/60 z-50 overflow-y-auto"
            >
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Close button */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-400 font-mono">
                    <span className="text-green-400">[</span> CREDENTIALS <span className="text-green-400">]</span>
                  </h2>
                  <button
                    onClick={() => setShowCredentials(false)}
                    className="text-slate-400 hover:text-red-400 transition-colors text-xl lg:text-2xl"
                  >
                    ✕
                  </button>
                </div>

                {/* Credentials Grid */}
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-slate-800/90 border border-slate-600/60 px-4 py-3 rounded-lg backdrop-blur-sm hover:border-green-400/80 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:bg-slate-700/90 cursor-pointer"
                    >
                      <div className="text-slate-200 text-sm lg:text-base font-medium flex items-center">
                        <span className="text-green-400 mr-3 text-base lg:text-lg flex-shrink-0">✓</span>
                        <span className="leading-tight">{cert}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 flex flex-col justify-start pt-8 sm:pt-12 md:pt-16 lg:pt-20 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto lg:mx-0"
      >
        {/* Name and Title - With glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center lg:text-left py-4 sm:py-6 md:py-8 lg:pt-24 lg:pb-16"
        >
          <div className="relative">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 bg-gradient-to-r from-green-400 via-green-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg font-mono tracking-wide sm:tracking-wider md:tracking-widest transition-all duration-200 ${isGlitching ? 'animate-pulse transform skew-x-1 text-red-400' : ''}`}>
              <span className="inline-block animate-pulse">[</span>
              <span className={isGlitching ? 'blur-sm' : ''}>JOSHUA POWDER</span>
              <span className="inline-block animate-pulse">]</span>
            </h1>
            
            {/* Glitch overlay effect */}
            {isGlitching && (
              <div className="absolute inset-0 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold font-mono tracking-wide sm:tracking-wider md:tracking-widest opacity-70">
                <div className="text-cyan-400 transform translate-x-1 -translate-y-0.5">
                  <span>[</span>J0SHU4 P0WD3R<span>]</span>
                </div>
                <div className="text-red-400 transform -translate-x-1 translate-y-0.5 absolute inset-0">
                  <span>[</span>J∅SHU∆ P∅WD∃R<span>]</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 font-medium leading-relaxed bg-slate-900/90 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-lg backdrop-blur-sm border border-slate-700/50 shadow-lg">
              Cybersecurity Analyst, Senior Marketing Consultant, Advance Systems Developer & AI Advocate
            </div>
            
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-green-300 font-medium bg-slate-900/90 px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-lg backdrop-blur-sm border border-green-500/40 shadow-lg font-mono">
              <span className="text-cyan-400">&gt;</span> 10+ Years Experience in Data Center Services
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 