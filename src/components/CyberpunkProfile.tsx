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
        className="flex-1 flex flex-col justify-center w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto lg:mx-0"
      >
        {/* Name and Title - Better desktop spacing with more top margin */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center lg:text-left py-4 sm:py-6 md:py-8 lg:pt-24 lg:pb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 bg-gradient-to-r from-green-400 via-green-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg font-mono tracking-wide sm:tracking-wider md:tracking-widest">
            <span className="inline-block animate-pulse">[</span>
            JOSHUA POWDER
            <span className="inline-block animate-pulse">]</span>
          </h1>
          
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-200 font-medium leading-relaxed bg-slate-900/90 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-lg backdrop-blur-sm border border-slate-700/50 shadow-lg">
              Cybersecurity Analyst, Senior Marketing Consultant, Advance Systems Developer & AI Advocate
            </div>
            
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-green-300 font-medium bg-slate-900/90 px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-lg backdrop-blur-sm border border-green-500/40 shadow-lg font-mono">
              <span className="text-cyan-400">&gt;</span> 10+ Years Experience in Data Center Services
            </div>
          </div>
        </motion.div>

        {/* Credentials - Restored bubble format with better spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex-1 flex flex-col mb-8 lg:mb-12"
        >
          {/* Credentials container with bubble-like background */}
          <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-600/60 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl shadow-black/50">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-cyan-400 font-mono text-center lg:text-left mb-4 sm:mb-6 lg:mb-8">
              <span className="text-green-400">[</span> CREDENTIALS <span className="text-green-400">]</span>
            </h2>
            
            {/* Responsive credential grid - Better centered layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.03 }}
                  className="relative"
                >
                  <div className="bg-slate-800/90 border border-slate-600/60 px-3 sm:px-4 lg:px-5 py-3 sm:py-4 lg:py-5 rounded-xl backdrop-blur-sm hover:border-green-400/80 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:bg-slate-700/90 cursor-pointer hover:scale-105 min-h-[3rem] sm:min-h-[3.5rem] lg:min-h-[4rem] flex items-center justify-center">
                    <div className="text-slate-200 text-xs sm:text-sm lg:text-base font-medium flex items-center justify-center text-center w-full">
                      <span className="text-green-400 mr-2 sm:mr-3 text-sm sm:text-base lg:text-lg flex-shrink-0">✓</span>
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