'use client'

import { motion } from 'framer-motion'

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
  return (
    <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-6 md:px-8 lg:pl-12">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 flex flex-col justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:mx-0"
      >
        {/* Name and Title - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center py-4 sm:py-6 md:py-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-green-400 via-green-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg font-mono tracking-wide sm:tracking-wider md:tracking-widest">
            <span className="inline-block animate-pulse">[</span>
            JOSHUA POWDER
            <span className="inline-block animate-pulse">]</span>
          </h1>
          
          <div className="space-y-2 sm:space-y-3">
            <div className="text-xs sm:text-sm md:text-base text-slate-200 font-medium leading-relaxed bg-slate-900/90 px-3 sm:px-4 py-2 sm:py-3 rounded-lg backdrop-blur-sm border border-slate-700/50 shadow-lg">
              Cybersecurity Analyst, Senior Marketing Consultant, Advance Systems Developer & AI Advocate
            </div>
            
            <div className="text-xs sm:text-sm md:text-base text-green-300 font-medium bg-slate-900/90 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm border border-green-500/40 shadow-lg font-mono">
              <span className="text-cyan-400">&gt;</span> 10+ Years Experience in Data Center Services
            </div>
          </div>
        </motion.div>

        {/* Credentials - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex-1 flex flex-col"
        >
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-cyan-400 font-mono bg-slate-900/95 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm border border-cyan-400/40 shadow-lg text-center mb-3 sm:mb-4">
            <span className="text-green-400">[</span> CREDENTIALS <span className="text-green-400">]</span>
          </h2>
          
          {/* Mobile: Compact credential list with safe bottom spacing */}
          <div className="flex-1 overflow-y-auto pb-32 lg:pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.03 }}
                  className="relative"
                >
                  <div className="bg-slate-900/95 border border-slate-600/60 px-3 sm:px-4 py-2 sm:py-3 rounded-lg backdrop-blur-sm hover:border-green-400/80 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:bg-slate-800/90 cursor-pointer">
                    <div className="text-slate-200 text-xs sm:text-sm font-medium flex items-start">
                      <span className="text-green-400 mr-2 sm:mr-3 text-sm sm:text-base flex-shrink-0 mt-0.5">✓</span>
                      <span className="leading-tight">{cert}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 