// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Menu, X } from 'lucide-react'

// const navigation = [
//   { name: 'Products', href: '/products' },
//   { name: 'Pricing', href: '/pricing' },
//   { name: 'About', href: '/about' },
//   { name: 'Blog', href: '/blog' },
//   { name: 'Contact', href: '/contact' }, // Add this line
// ]

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header className={`fixed top-0 w-full z-50 transition-all duration-200 ${
//       scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
//     }`}>
//       <nav className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="flex items-center justify-between h-14 lg:h-16">
//           {/* Logo */}
//           <Link href="/" className="text-xl font-medium tracking-tight">
//             <span className="text-gray-900">op</span>
//             <span className="text-gray-500">erra</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//            <Link
//   href="/book-demo"
//   className="px-4 py-2 rounded-md text-sm font-medium text-white transition-colors hover:opacity-90"
//   style={{ backgroundColor: '#982598' }}
// >
//   Get demo
// </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X className="h-5 w-5 text-gray-600" /> : <Menu className="h-5 w-5 text-gray-600" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden py-4 border-t border-gray-100">
//             <div className="flex flex-col space-y-3">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Link
//                 href="/book-demo"
//                 onClick={() => setIsOpen(false)}
//                 className="px-4 py-2.5 rounded-md text-sm font-medium text-white text-center transition-all duration-300 hover:shadow-lg"
//                 style={{
//                   background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
//                   backgroundSize: '200% 200%'
//                 }}
//               >
//                 Get demo
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Add keyframes for gradient animation */}
//       <style jsx>{`
//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </header>
//   )
// }
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
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
          {/* Enhanced Logo */}
         {/* Enhanced Logo */}
<Link href="/" className="group relative flex items-center">
  <div className="relative flex items-center">
    
    {/* Icon */}
    <div className="relative w-9 h-9 mr-2">
      {/* Outer glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity" />
      
      {/* Inner box */}
      <div className="absolute inset-1 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
        <span className="text-white font-bold text-sm">T</span>
      </div>

      {/* Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity" />
    </div>

    {/* Text Logo */}
    <div className="flex items-center">
      <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        Trez
      </span>
      <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
        bo
        {/* Accent dot */}
        <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-75" />
      </span>
    </div>

  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/book-demo"
              className="px-4 py-2 rounded-md text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
                backgroundSize: '200% 200%',
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
                  className="text-sm text-gray-600 hover:text-gray-900 py-2 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
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