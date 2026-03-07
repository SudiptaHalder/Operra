import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SmallBizTools - Simple Business Management for Small Teams',
    template: '%s | SmallBizTools'
  },
  description: 'Affordable business management software for small businesses. HR, vendor management, payroll tracking, and more without enterprise complexity.',
  keywords: ['small business management software', 'HR management system', 'vendor management software', 'business management tools'],
  authors: [{ name: 'SmallBizTools' }],
  creator: 'SmallBizTools',
  publisher: 'SmallBizTools',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smallbiztools.com',
    siteName: 'SmallBizTools',
    title: 'SmallBizTools - Simple Business Management for Small Teams',
    description: 'Affordable business management software for small businesses. HR, vendor management, payroll tracking, and more.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SmallBizTools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmallBizTools - Simple Business Management for Small Teams',
    description: 'Affordable business management software for small businesses.',
    images: ['/images/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${inter.className} flex min-h-full flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}