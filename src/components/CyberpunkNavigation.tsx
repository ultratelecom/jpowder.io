'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const navigationItems = [
  { name: 'AI TOOLS', href: '/ai-tools', description: 'Advanced AI Solutions' },
  { name: 'PORTFOLIO', href: '/portfolio', description: 'Security Projects' },
  { name: 'CONTACT', href: '/contact', description: 'Get In Touch' },
  { name: 'BLOG', href: '/blog', description: 'Cyber Insights' }
]

export default function CyberpunkNavigation() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="fixed bottom-8 right-8 z-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="space-y-4"
      >
        {/* Navigation Items */}
        <div className="flex flex-wrap gap-3 justify-end mb-4">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative"
            >
              <motion.a
                href={item.href}
                className="block px-4 py-2 bg-slate-900/90 border border-slate-600/60 backdrop-blur-sm hover:border-cyan-400/80 transition-all duration-300 relative overflow-hidden rounded-lg shadow-lg text-center min-w-[100px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.name ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-slate-200 font-medium text-sm">
                    {item.name}
                  </div>
                  {hoveredItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-cyan-400 text-xs mt-1"
                    >
                      {item.description}
                    </motion.div>
                  )}
                </div>

                {/* Glowing effect */}
                {hoveredItem === item.name && (
                  <motion.div
                    className="absolute inset-0 border border-cyan-400/60 shadow-lg shadow-cyan-400/20 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-slate-900/90 border border-slate-600/60 backdrop-blur-sm rounded-lg p-4 shadow-lg"
        >
          <div className="flex items-center space-x-3">
            <motion.div
              className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div>
              <span className="text-green-400 text-sm font-medium">ONLINE</span>
              <div className="text-slate-300 text-xs">
                SYSTEM STATUS: SECURE
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 