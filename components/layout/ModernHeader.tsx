'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { cn } from '@/lib/utils'

const navigation = {
  products: [
    { name: 'HR Management', href: '/products/hr-management', description: 'Simplify employee management' },
    { name: 'Vendor Management', href: '/products/vendor-management', description: 'Track vendors effortlessly' },
    { name: 'Business Dashboard', href: '/products/small-business-management', description: 'Complete business overview' },
    { name: 'Employee Onboarding', href: '/products/employee-onboarding', description: 'Streamline new hires' },
    { name: 'Payroll Tracking', href: '/products/payroll-tracking', description: 'Simple time & payroll' },
  ],
  main: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ]
}

export function ModernHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
      )}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8" aria-label="Global">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex lg:flex-1"
          >
            <Link href="/" className="-m-1.5 p-1.5 group">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SmallBiz<span className="text-gray-900 group-hover:text-blue-600 transition-colors">Tools</span>
              </span>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex lg:hidden"
          >
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100/50 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </motion.div>

          {/* Desktop navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden lg:flex lg:gap-x-8"
          >
            {navigation.main.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                    className="flex items-center gap-1 text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                    <ChevronDownIcon className={cn(
                      'h-4 w-4 transition-transform duration-200',
                      productsOpen ? 'rotate-180' : ''
                    )} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:flex lg:flex-1 lg:justify-end"
          >
            <Link
              href="/book-demo"
              className="relative group overflow-hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Book Demo →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </nav>

        {/* Products dropdown */}
        <AnimatePresence>
          {productsOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-md"
            >
              <div className="rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
                <div className="p-4">
                  {navigation.products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                    >
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {product.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 lg:hidden"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Menu panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm"
              >
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                    <span className="text-2xl font-bold text-gray-900">SmallBizTools</span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-200">
                    <div className="space-y-2 py-6">
                      {navigation.main.map((item) => (
                        <div key={item.name}>
                          {item.hasDropdown ? (
                            <div className="space-y-2">
                              <p className="text-sm font-semibold text-gray-400 px-3 py-2">
                                {item.name}
                              </p>
                              <div className="pl-4 space-y-2">
                                {navigation.products.map((product) => (
                                  <Link
                                    key={product.name}
                                    href={product.href}
                                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {product.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="py-6">
                      <Link
                        href="/book-demo"
                        className="block w-full rounded-lg bg-blue-600 px-3 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Book Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  )
}