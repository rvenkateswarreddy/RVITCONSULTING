

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | RV IT Consulting',
    default: 'RV IT Consulting | Global IT Solutions & Services'
  },
  description: 'RV IT Consulting provides comprehensive IT solutions including corporate training, project support, and global recruitment services across USA, Canada, Luxembourg and more.',
  keywords: ['IT consulting', 'corporate training', 'global recruitment', 'project support', 'IT solutions', 'freelance IT', 'contract IT'],
  openGraph: {
    title: 'RV IT Consulting | Global IT Solutions & Services',
    description: 'Comprehensive IT solutions including corporate training, project support, and global recruitment services.',
    url: 'https://www.rvitconsulting.com',
    siteName: 'RV IT Consulting',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'RV IT Consulting',
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-800 antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}