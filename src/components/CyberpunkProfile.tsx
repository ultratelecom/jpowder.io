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
        className="max-w-3xl"
      >
        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
            JOSHUA POWDER
          </h1>
          
          <div className="space-y-4">
            <div className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed bg-slate-900/60 px-6 py-4 rounded-lg backdrop-blur-sm border border-slate-700/50 shadow-lg">
              CYBERSECURITY ANALYST, SENIOR MARKETING CONSULTANT,<br />
              ADVANCE SYSTEMS DEVELOPER & AI ADVOCATE
            </div>
            
            <div className="text-base md:text-lg text-blue-300 font-medium bg-slate-900/60 px-6 py-3 rounded-lg backdrop-blur-sm border border-blue-500/30 shadow-lg">
              10+ Years Experience in Data Center Services
            </div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 font-sans bg-slate-900/70 px-6 py-3 rounded-lg backdrop-blur-sm border border-cyan-400/40 shadow-lg">
            Professional Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-cyan-400">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                className="bg-slate-900/80 border border-slate-600/60 p-4 rounded-lg backdrop-blur-sm hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:bg-slate-800/90"
              >
                <div className="text-slate-200 text-sm font-medium flex items-center">
                  <span className="text-green-400 mr-3 text-lg">✓</span>
                  {cert}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subtle accent effect */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  )
} 