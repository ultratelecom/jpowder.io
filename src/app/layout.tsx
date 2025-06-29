import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mr. J. Powder - Cybersecurity Analyst, Senior Marketing Consultant, Advance Systems Developer & AI Advocate',
  description: 'Welcome to my world — I\'m Mr. J. Powder, a business strategist and systems developer who thrives on solving the things others avoid. I work with teams ready to think smarter, move faster, and build better — from digital architecture to creative strategy.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 