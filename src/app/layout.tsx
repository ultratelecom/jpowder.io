import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import SmoothScroll from '@/components/SmoothScroll'
import Preloader from '@/components/Preloader'
import CustomCursor from '@/components/CustomCursor'
import FixedCanvas from '@/components/FixedCanvas'
import BlueprintLine from '@/components/BlueprintLine'
import ScrollProgress from '@/components/ScrollProgress'
import MobileGlow from '@/components/MobileGlow'
import TapFeedback from '@/components/TapFeedback'
import MobileParallax from '@/components/MobileParallax'

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
  metadataBase: new URL('https://jpowder.com'),
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon.ico'],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jpowder.com',
    title: 'Joshua Powder — Cybersecurity Analyst, AI Full Stack Developer & AI Contextual Engineer',
    description:
      'E-governance strategist and systems architect building AI-driven tools that improve how governments and businesses operate.',
    siteName: 'Joshua Powder',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Joshua Powder — Building secure, AI-driven systems for governments and businesses.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joshua Powder — Cybersecurity Analyst, AI Full Stack Developer & AI Contextual Engineer',
    description:
      'E-governance strategist and systems architect building AI-driven tools that improve how governments and businesses operate.',
    images: ['/og-image.png'],
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
        <meta name="theme-color" content="#fafafa" />
      </head>
      <body className="font-body bg-paper text-ink antialiased">
        <Preloader />
        <CustomCursor />
        <FixedCanvas />
        <BlueprintLine />
        <ScrollProgress />
        <MobileGlow />
        <TapFeedback />
        <MobileParallax />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
