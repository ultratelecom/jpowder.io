'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={'#8b5cf6'} />
      </mesh>
      <mesh position={[3, 0, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={'#ec4899'} />
      </mesh>
      <mesh position={[-3, 0, 0]} rotation={[0, 0, 0]}>
        <coneGeometry args={[1, 2, 8]} />
        <meshStandardMaterial color={'#06b6d4'} />
      </mesh>
      <OrbitControls enableZoom={false} />
    </>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Template Website
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Built with Next.js, TypeScript, Tailwind CSS, Three.js, and more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">Next.js 15</h3>
            <p className="text-gray-300">Modern React framework with App Router</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">TypeScript</h3>
            <p className="text-gray-300">Type-safe development experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">Tailwind CSS</h3>
            <p className="text-gray-300">Utility-first CSS framework</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">Three.js</h3>
            <p className="text-gray-300">3D graphics and animations</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">Framer Motion</h3>
            <p className="text-gray-300">Smooth animations and transitions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">Supabase</h3>
            <p className="text-gray-300">Backend as a Service platform</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="h-96 bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
        >
          <Canvas>
            <Scene />
          </Canvas>
        </motion.div>
      </div>
    </main>
  )
} 