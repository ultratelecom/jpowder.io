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
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="space-y-4"
      >
        {navigationItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
            className="relative group"
          >
            <div className="relative">
              {/* Main nav button */}
              <motion.a
                href={item.href}
                className="block px-6 py-4 bg-gradient-to-r from-gray-900/90 to-gray-800/90 border border-cyan-400/50 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20"
                  initial={{ x: '-100%' }}
                  animate={{ x: hoveredItem === item.name ? '0%' : '-100%' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-cyan-400 font-mono font-bold text-lg">
                    &gt; {item.name}
                  </div>
                  <div className="text-green-400 text-sm opacity-80">
                    {item.description}
                  </div>
                </div>

                {/* Glowing effect */}
                {hoveredItem === item.name && (
                  <motion.div
                    className="absolute inset-0 border border-cyan-400 shadow-[0_0_20px_#00ffff]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.a>

              {/* Terminal-style connector lines */}
              {index < navigationItems.length - 1 && (
                <div className="absolute left-1/2 bottom-0 w-px h-4 bg-gradient-to-b from-cyan-400/50 to-transparent transform -translate-x-1/2 translate-y-full" />
              )}
            </div>
          </motion.div>
        ))}

        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-8 p-4 bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-green-400/50 backdrop-blur-sm"
        >
          <div className="flex items-center space-x-2">
            <motion.div
              className="w-2 h-2 bg-green-400 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-400 text-sm font-mono">ONLINE</span>
          </div>
          <div className="text-cyan-400 text-xs font-mono mt-1">
            SYSTEM_STATUS: SECURE
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 