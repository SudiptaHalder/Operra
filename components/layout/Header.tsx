'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-200 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-medium tracking-tight">
            <span className="text-gray-900">op</span>
            <span className="text-gray-500">erra</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book-demo"
              className="px-4 py-2 rounded-md text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 3s ease infinite'
              }}
            >
              Get demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5 text-gray-600" /> : <Menu className="h-5 w-5 text-gray-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/book-demo"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-md text-sm font-medium text-white text-center transition-all duration-300 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
                  backgroundSize: '200% 200%'
                }}
              >
                Get demo
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Add keyframes for gradient animation */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </header>
  )
}