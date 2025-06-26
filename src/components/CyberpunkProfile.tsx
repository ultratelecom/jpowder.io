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
    <div className="relative z-10 h-screen flex items-center justify-start pl-8 md:pl-12">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-lg"
      >
        {/* Name - Centered to credential boxes with more top padding */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 text-center pt-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-green-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg font-mono tracking-widest text-shadow-lg">
            <span className="inline-block animate-pulse">[</span>
            JOSHUA POWDER
            <span className="inline-block animate-pulse">]</span>
          </h1>
          
          <div className="space-y-3">
            <div className="text-sm md:text-base text-slate-200 font-medium leading-relaxed bg-slate-900/80 px-4 py-3 rounded-lg backdrop-blur-sm border border-slate-700/50 shadow-lg">
              Cybersecurity Analyst, Senior Marketing Consultant, Advance Systems Developer & AI Advocate
            </div>
            
            <div className="text-sm md:text-base text-green-300 font-medium bg-slate-900/80 px-4 py-2 rounded-lg backdrop-blur-sm border border-green-500/40 shadow-lg font-mono">
              <span className="text-cyan-400">&gt;</span> 10+ Years Experience in Data Center Services
            </div>
          </div>
        </motion.div>

        {/* Bubble-style Certifications - Natural Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-lg md:text-xl font-bold text-cyan-400 font-mono bg-slate-900/90 px-4 py-2 rounded-lg backdrop-blur-sm border border-cyan-400/40 shadow-lg text-center">
            <span className="text-green-400">[</span> CREDENTIALS <span className="text-green-400">]</span>
          </h2>
          
          {/* Natural Bubble Layout - No Container Restrictions */}
          <div className="flex flex-wrap gap-3 pb-20">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                className="relative"
              >
                <div className="bg-slate-900/90 border border-slate-600/60 px-4 py-3 rounded-full backdrop-blur-sm hover:border-green-400/80 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:bg-slate-800/90 cursor-pointer">
                  <div className="text-slate-200 text-sm font-medium flex items-center whitespace-nowrap">
                    <span className="text-green-400 mr-3 text-base">✓</span>
                    {cert}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 