'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const certifications = [
  { short: 'CompTIA Project+', full: 'CompTIA Project+' },
  { short: 'CompTIA PenTest+', full: 'CompTIA PenTest+' },
  { short: 'CompTIA CySA+', full: 'CompTIA CySA+' },
  { short: 'CompTIA Security+', full: 'CompTIA Security+' },
  { short: 'CompTIA Network+', full: 'CompTIA Network+' },
  { short: 'CompTIA A+', full: 'CompTIA A+' },
  { short: 'Marketing Analytics', full: 'Marketing Analytics - University of Virginia' },
  { short: 'Cybersecurity Tools & Cyber Attacks', full: 'Introduction to Cybersecurity Tools & Cyber Attacks - IBM' },
  { short: 'Strategic Management', full: 'Strategic Management - Copenhagen Business School' },
  { short: 'Strategy Formulation', full: 'Strategy Formulation - Copenhagen Business School' },
  { short: 'Strategy Implementation', full: 'Strategy Implementation - Copenhagen Business School' },
  { short: 'Windows Server Management and Security', full: 'Windows Server Management and Security - University of Colorado' }
]

export default function CyberpunkProfile() {
  const [hoveredCert, setHoveredCert] = useState<number | null>(null)

  return (
    <div className="relative z-10 h-screen flex items-center justify-start pl-8 md:pl-12">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-lg"
      >
        {/* Name - Centered to credential boxes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8 text-center"
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

        {/* Bubble-style Certifications - Expanded */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-lg md:text-xl font-bold text-cyan-400 font-mono bg-slate-900/90 px-4 py-2 rounded-lg backdrop-blur-sm border border-cyan-400/40 shadow-lg text-center">
            <span className="text-green-400">[</span> CREDENTIALS <span className="text-green-400">]</span>
          </h2>
          
          {/* Bubble Layout Container - Using more vertical space */}
          <div className="flex flex-wrap gap-3 h-80 content-start overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-cyan-400 pb-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                onMouseEnter={() => setHoveredCert(index)}
                onMouseLeave={() => setHoveredCert(null)}
                className="relative"
              >
                <div className="bg-slate-900/90 border border-slate-600/60 px-4 py-3 rounded-full backdrop-blur-sm hover:border-green-400/80 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 hover:bg-slate-800/90 cursor-pointer">
                  <div className="text-slate-200 text-sm font-medium flex items-center whitespace-nowrap">
                    <span className="text-green-400 mr-3 text-base">✓</span>
                    {cert.short}
                  </div>
                </div>
                
                {/* Hover Tooltip */}
                {hoveredCert === index && cert.short !== cert.full && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: -5, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
                  >
                    <div className="bg-slate-800/95 border border-green-400/60 px-3 py-2 rounded-lg backdrop-blur-sm shadow-xl shadow-green-400/20 max-w-xs">
                      <div className="text-green-300 text-sm font-medium text-center whitespace-nowrap">
                        {cert.full}
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-400/60"></div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 