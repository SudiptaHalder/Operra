import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import ChatBot from '@/components/chat/ChatBot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Operra - Business Management for Small Teams',
    template: '%s | Operra'
  },
  description: 'Simple, affordable business management software for small businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex min-h-full flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatBot /> {/* This adds the chat widget to every page */}
      </body>
    </html>
  )
}