import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Joshua Powder — Cybersecurity Analyst, AI Full Stack Developer & AI Contextual Engineer',
  description:
    'I am Joshua Powder, an e-governance strategist and systems architect focused on building AI-driven tools that improve how governments and businesses operate. Specializing in cybersecurity, full-stack development, and AI contextual engineering.',
  keywords: [
    'Joshua Powder',
    'Cybersecurity Analyst',
    'AI Full Stack Developer',
    'AI Contextual Engineer',
    'e-governance',
    'systems architect',
    'cybersecurity',
    'AI',
    'full stack development',
  ],
  authors: [{ name: 'Joshua Powder' }],
  creator: 'Joshua Powder',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Joshua Powder — Cybersecurity Analyst, AI Full Stack Developer & AI Contextual Engineer',
    description:
      'E-governance strategist and systems architect building AI-driven tools that improve how governments and businesses operate.',
    siteName: 'Joshua Powder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joshua Powder — Cybersecurity Analyst, AI Full Stack Developer & AI Contextual Engineer',
    description:
      'E-governance strategist and systems architect building AI-driven tools that improve how governments and businesses operate.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${syne.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="theme-color" content="#fafafa" />
      </head>
      <body className="font-body bg-paper text-ink antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
