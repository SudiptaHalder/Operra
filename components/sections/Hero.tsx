// 'use client'

// import Link from 'next/link'
// import { ArrowRight, CheckCircle } from 'lucide-react'

// export function Hero() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Main background gradient - more visible */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#15173D] via-[#982598] to-[#E491C9] opacity-15" />
      
//       {/* Animated gradient orbs - more visible */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div 
//           className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl animate-pulse"
//           style={{ 
//             background: 'radial-gradient(circle, #982598 0%, #E491C9 50%, #15173D 100%)',
//             opacity: 0.3
//           }}
//         />
//         <div 
//           className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse"
//           style={{ 
//             background: 'radial-gradient(circle, #E491C9 0%, #15173D 50%, #982598 100%)',
//             opacity: 0.3,
//             animationDelay: '2s'
//           }}
//         />
//       </div>

//       {/* Additional color overlay for depth */}
//       <div 
//         className="absolute inset-0"
//         style={{
//           background: 'radial-gradient(circle at 30% 50%, #98259820 0%, transparent 50%)',
//         }}
//       />
//       <div 
//         className="absolute inset-0"
//         style={{
//           background: 'radial-gradient(circle at 70% 50%, #E491C920 0%, transparent 50%)',
//         }}
//       />

//       {/* Subtle grid overlay */}
//       <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

//       <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div>
//             {/* Gradient badge */}
//             <div 
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
//               style={{
//                 background: 'linear-gradient(135deg, #98259820 0%, #E491C920 50%, #15173D20 100%)',
//                 color: '#15173D',
//                 border: '1px solid #98259840',
//                 backdropFilter: 'blur(4px)'
//               }}
//             >
//               <span className="w-2 h-2 rounded-full" style={{ background: '#982598' }} />
//               Built for small businesses
//             </div>

//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
//               Business management software{' '}
//               <span style={{ 
//                 background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text'
//               }}>
//                 built for small teams
//               </span>
//             </h1>
            
//             <p className="mt-6 text-lg text-gray-600 leading-relaxed">
//               Replace spreadsheets and manual processes with simple, affordable tools.
//               HR, vendors, payroll — all in one place.
//             </p>
            
//             <div className="mt-8 space-y-3">
//               {[
//                 'Employee management & onboarding',
//                 'Vendor tracking & contract management',
//                 'Payroll preparation & time tracking',
//                 'Business dashboard with insights'
//               ].map((feature) => (
//                 <div key={feature} className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5" style={{ color: '#982598' }} />
//                   <span className="text-gray-600">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-10 flex flex-col sm:flex-row gap-4">
//               <Link
//                 href="/book-demo"
//                 className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
//                 style={{
//                   background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
//                   backgroundSize: '200% 200%',
//                 }}
//               >
//                 Book a demo
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors bg-white/80 backdrop-blur-sm"
//                 style={{ borderColor: '#98259840' }}
//               >
//                 View all products
//               </Link>
//             </div>

//             <p className="mt-6 text-sm text-gray-500">
//               ✦ Trusted by 500+ small businesses
//             </p>
//           </div>

//           {/* Right Content - Product Cards Grid */}
//           <div className="grid grid-cols-2 gap-4">
//             {[
//               { name: 'HR Management', users: '1.2k+ users' },
//               { name: 'Vendor Management', users: '890+ users' },
//               { name: 'Business Dashboard', users: '2.1k+ users' },
//               { name: 'Payroll Tracking', users: '750+ users' }
//             ].map((item, index) => (
//               <div
//                 key={item.name}
//                 className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
//                 style={{ borderColor: index % 2 === 0 ? '#98259840' : '#E491C940' }}
//               >
//                 <div 
//                   className="h-10 w-10 rounded-lg mb-3 flex items-center justify-center"
//                   style={{
//                     background: index % 2 === 0 
//                       ? 'linear-gradient(135deg, #982598 0%, #E491C9 100%)'
//                       : 'linear-gradient(135deg, #E491C9 0%, #15173D 100%)'
//                   }}
//                 >
//                   <div 
//                     className="h-5 w-5 rounded bg-white/30"
//                   />
//                 </div>
//                 <h3 className="font-semibold text-gray-900">{item.name}</h3>
//                 <p className="text-xs mt-1" style={{ color: '#982598' }}>{item.users}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// 'use client'

// import Link from 'next/link'
// import { ArrowRight, CheckCircle } from 'lucide-react'

// export function Hero() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Main background gradient - more visible */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#15173D] via-[#982598] to-[#E491C9] opacity-15" />
      
//       {/* Animated gradient orbs - more visible */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div 
//           className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl animate-pulse"
//           style={{ 
//             background: 'radial-gradient(circle, #982598 0%, #E491C9 50%, #15173D 100%)',
//             opacity: 0.3
//           }}
//         />
//         <div 
//           className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse"
//           style={{ 
//             background: 'radial-gradient(circle, #E491C9 0%, #15173D 50%, #982598 100%)',
//             opacity: 0.3,
//             animationDelay: '2s'
//           }}
//         />
//       </div>

//       {/* Additional color overlay for depth */}
//       <div 
//         className="absolute inset-0"
//         style={{
//           background: 'radial-gradient(circle at 30% 50%, #98259820 0%, transparent 50%)',
//         }}
//       />
//       <div 
//         className="absolute inset-0"
//         style={{
//           background: 'radial-gradient(circle at 70% 50%, #E491C920 0%, transparent 50%)',
//         }}
//       />

//       {/* Subtle grid overlay */}
//       <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

//       <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content */}
//           <div>
//             {/* Gradient badge */}
//             <div 
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
//               style={{
//                 background: 'linear-gradient(135deg, #98259820 0%, #E491C920 50%, #15173D20 100%)',
//                 color: '#15173D',
//                 border: '1px solid #98259840',
//                 backdropFilter: 'blur(4px)'
//               }}
//             >
//               <span className="w-2 h-2 rounded-full" style={{ background: '#982598' }} />
//               Built for small businesses
//             </div>

//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
//               Business management software{' '}
//               <span style={{ 
//                 background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text'
//               }}>
//                 built for small teams
//               </span>
//             </h1>
            
//             <p className="mt-6 text-lg text-gray-600 leading-relaxed">
//               Replace spreadsheets and manual processes with simple, affordable tools.
//               HR, vendors, payroll — all in one place.
//             </p>
            
//             <div className="mt-8 space-y-3">
//               {[
//                 'Employee management & onboarding',
//                 'Vendor tracking & contract management',
//                 'Payroll preparation & time tracking',
//                 'Business dashboard with insights'
//               ].map((feature) => (
//                 <div key={feature} className="flex items-center gap-3">
//                   <CheckCircle className="h-5 w-5" style={{ color: '#982598' }} />
//                   <span className="text-gray-600">{feature}</span>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-10 flex flex-col sm:flex-row gap-4">
//               <Link
//                 href="/book-demo"
//                 className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
//                 style={{
//                   background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
//                   backgroundSize: '200% 200%',
//                 }}
//               >
//                 Book a demo
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors bg-white/80 backdrop-blur-sm"
//                 style={{ borderColor: '#98259840' }}
//               >
//                 View all products
//               </Link>
//             </div>

//             <p className="mt-6 text-sm text-gray-500">
//               ✦ Trusted by 500+ small businesses
//             </p>
//           </div>

//           {/* Right Content - Product Cards Grid with Different Colors */}
//           <div className="grid grid-cols-2 gap-4">
//             {/* HR Management - Teal */}
//             <div
//               className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
//               style={{ borderColor: '#14B8A620' }}
//             >
//               <div 
//                 className="h-10 w-10 rounded-lg mb-3 flex items-center justify-center"
//                 style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)' }}
//               >
//                 <div className="h-5 w-5 rounded bg-white/30" />
//               </div>
//               <h3 className="font-semibold text-gray-900">HR Management</h3>
//               <p className="text-xs mt-1" style={{ color: '#14B8A6' }}>1.2k+ users</p>
//             </div>

//             {/* Vendor Management - Coral */}
//             <div
//               className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
//               style={{ borderColor: '#F9731620' }}
//             >
//               <div 
//                 className="h-10 w-10 rounded-lg mb-3 flex items-center justify-center"
//                 style={{ background: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)' }}
//               >
//                 <div className="h-5 w-5 rounded bg-white/30" />
//               </div>
//               <h3 className="font-semibold text-gray-900">Vendor Management</h3>
//               <p className="text-xs mt-1" style={{ color: '#F97316' }}>890+ users</p>
//             </div>

//             {/* Business Dashboard - Emerald */}
//             <div
//               className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
//               style={{ borderColor: '#10B98120' }}
//             >
//               <div 
//                 className="h-10 w-10 rounded-lg mb-3 flex items-center justify-center"
//                 style={{ background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)' }}
//               >
//                 <div className="h-5 w-5 rounded bg-white/30" />
//               </div>
//               <h3 className="font-semibold text-gray-900">Business Dashboard</h3>
//               <p className="text-xs mt-1" style={{ color: '#10B981' }}>2.1k+ users</p>
//             </div>

//             {/* Payroll Tracking - Amber */}
//             <div
//               className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
//               style={{ borderColor: '#F59E0B20' }}
//             >
//               <div 
//                 className="h-10 w-10 rounded-lg mb-3 flex items-center justify-center"
//                 style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)' }}
//               >
//                 <div className="h-5 w-5 rounded bg-white/30" />
//               </div>
//               <h3 className="font-semibold text-gray-900">Payroll Tracking</h3>
//               <p className="text-xs mt-1" style={{ color: '#F59E0B' }}>750+ users</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main background gradient - more visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#15173D] via-[#982598] to-[#E491C9] opacity-15" />
      
      {/* Animated gradient orbs - more visible */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, #982598 0%, #E491C9 50%, #15173D 100%)',
            opacity: 0.3
          }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, #E491C9 0%, #15173D 50%, #982598 100%)',
            opacity: 0.3,
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Additional color overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 30% 50%, #98259820 0%, transparent 50%)',
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 70% 50%, #E491C920 0%, transparent 50%)',
        }}
      />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Gradient badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: 'linear-gradient(135deg, #98259820 0%, #E491C920 50%, #15173D20 100%)',
                color: '#15173D',
                border: '1px solid #98259840',
                backdropFilter: 'blur(4px)'
              }}
            >
              <span className="w-2 h-2 rounded-full" style={{ background: '#982598' }} />
              Built for small businesses
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Business management software{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                built for small teams
              </span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Replace spreadsheets and manual processes with simple, affordable tools.
              HR, vendors, payroll — all in one place.
            </p>
            
            <div className="mt-8 space-y-3">
              {[
                'Employee management & onboarding',
                'Vendor tracking & contract management',
                'Payroll preparation & time tracking',
                'Business dashboard with insights'
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" style={{ color: '#982598' }} />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
                  backgroundSize: '200% 200%',
                }}
              >
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors bg-white/80 backdrop-blur-sm"
                style={{ borderColor: '#98259840' }}
              >
                View all products
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              ✦ Trusted by 500+ small businesses
            </p>
          </div>

          {/* Right Content - Product Cards Grid with Links */}
          <div className="grid grid-cols-2 gap-4">
            {/* HR Management - Teal */}
            <Link href="/products/hr-management" className="group">
              <div
                className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm border transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 cursor-pointer"
                style={{ borderColor: '#14B8A620' }}
              >
                <div 
                  className="h-10 w-10 rounded-lg mb-3 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)' }}
                >
                  <div className="h-5 w-5 rounded bg-white/30" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#14B8A6] transition-colors">HR Management</h3>
                <p className="text-xs mt-1" style={{ color: '#14B8A6' }}>1.2k+ users</p>
              </div>
            </Link>

            {/* Vendor Management - Coral */}
            <Link href="/products/vendor-management" className="group">
              <div
                className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm border transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 cursor-pointer"
                style={{ borderColor: '#F9731620' }}
              >
                <div 
                  className="h-10 w-10 rounded-lg mb-3 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)' }}
                >
                  <div className="h-5 w-5 rounded bg-white/30" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#F97316] transition-colors">Vendor Management</h3>
                <p className="text-xs mt-1" style={{ color: '#F97316' }}>890+ users</p>
              </div>
            </Link>

            {/* Business Dashboard - Emerald */}
            <Link href="/products/business-dashboard" className="group">
              <div
                className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm border transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 cursor-pointer"
                style={{ borderColor: '#10B98120' }}
              >
                <div 
                  className="h-10 w-10 rounded-lg mb-3 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)' }}
                >
                  <div className="h-5 w-5 rounded bg-white/30" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#10B981] transition-colors">Business Dashboard</h3>
                <p className="text-xs mt-1" style={{ color: '#10B981' }}>2.1k+ users</p>
              </div>
            </Link>

            {/* Payroll Tracking - Amber */}
            <Link href="/products/payroll-tracking" className="group">
              <div
                className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm border transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 cursor-pointer"
                style={{ borderColor: '#F59E0B20' }}
              >
                <div 
                  className="h-10 w-10 rounded-lg mb-3 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)' }}
                >
                  <div className="h-5 w-5 rounded bg-white/30" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#F59E0B] transition-colors">Payroll Tracking</h3>
                <p className="text-xs mt-1" style={{ color: '#F59E0B' }}>750+ users</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}