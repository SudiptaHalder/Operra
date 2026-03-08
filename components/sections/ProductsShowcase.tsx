// 'use client'

// import Link from 'next/link'
// import { 
//   Users, 
//   Truck, 
//   LayoutDashboard, 
//   UserPlus, 
//   Clock,
//   ArrowRight,
//   Check
// } from 'lucide-react'

// const products = [
//   {
//     icon: Users,
//     name: 'HR Management System',
//     description: 'Complete employee management for small teams.',
//     features: [
//       'Employee database',
//       'Time-off tracking',
//       'Document storage',
//       'Performance reviews'
//     ],
//     color: '#982598',
//     lightColor: '#98259820',
//     href: '/products/hr',
//     popular: true
//   },
//   {
//     icon: Truck,
//     name: 'Vendor Management System',
//     description: 'Track vendors, contracts, and payments.',
//     features: [
//       'Vendor database',
//       'Contract tracking',
//       'Payment schedules',
//       'Renewal reminders'
//     ],
//     color: '#E491C9',
//     lightColor: '#E491C920',
//     href: '/products/vendor'
//   },
//   {
//     icon: LayoutDashboard,
//     name: 'Business Dashboard',
//     description: 'Real-time overview of your operations.',
//     features: [
//       'Team analytics',
//       'Revenue tracking',
//       'Task management',
//       'Custom reports'
//     ],
//     color: '#15173D',
//     lightColor: '#15173D20',
//     href: '/products/dashboard'
//   },
//   {
//     icon: UserPlus,
//     name: 'Employee Onboarding',
//     description: 'Streamlined onboarding for new hires.',
//     features: [
//       'Digital offer letters',
//       'Onboarding checklists',
//       'Document collection',
//       'Training tracking'
//     ],
//     color: '#982598',
//     lightColor: '#98259820',
//     href: '/products/onboarding'
//   },
//   {
//     icon: Clock,
//     name: 'Payroll Tracking',
//     description: 'Simple time tracking and payroll prep.',
//     features: [
//       'Time tracking',
//       'Attendance records',
//       'Timesheet approval',
//       'Payroll export'
//     ],
//     color: '#E491C9',
//     lightColor: '#E491C920',
//     href: '/products/payroll'
//   }
// ]

// export function ProductsShowcase() {
//   return (
//     <section className="py-24 relative overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#15173D05] via-[#98259805] to-[#E491C905]" />
      
//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Everything you need to run your business
//           </h2>
//           <p className="mt-4 text-lg text-gray-600">
//             Simple, focused tools that work together. No complexity, no bloat.
//           </p>
//         </div>

//         {/* Product Grid */}
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product) => {
//             const Icon = product.icon
//             return (
//               <div
//                 key={product.name}
//                 className="group relative bg-white rounded-xl border p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//                 style={{ borderColor: `${product.color}20` }}
//               >
//                 {product.popular && (
//                   <span 
//                     className="absolute -top-3 right-6 text-white text-xs font-semibold px-3 py-1 rounded-full"
//                     style={{ background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)' }}
//                   >
//                     Most popular
//                   </span>
//                 )}
                
//                 <div 
//                   className="h-12 w-12 rounded-lg flex items-center justify-center mb-4"
//                   style={{ background: product.lightColor }}
//                 >
//                   <Icon style={{ color: product.color }} className="h-6 w-6" />
//                 </div>
                
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   {product.description}
//                 </p>
                
//                 <div className="mt-4 space-y-2">
//                   {product.features.map((feature) => (
//                     <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
//                       <Check className="h-4 w-4 flex-shrink-0" style={{ color: product.color }} />
//                       <span>{feature}</span>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="mt-6 pt-4 border-t border-gray-100">
//                   <Link
//                     href={product.href}
//                     className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
//                     style={{ color: product.color }}
//                   >
//                     Learn more
//                     <ArrowRight className="h-3 w-3" />
//                   </Link>
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-12 text-center">
//           <Link
//             href="/products"
//             className="inline-flex items-center gap-2 font-medium transition-all duration-300 hover:gap-3"
//             style={{ 
//               color: '#982598',
//               borderBottom: '2px solid #E491C9'
//             }}
//           >
//             View all products
//             <ArrowRight className="h-4 w-4" />
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import Link from 'next/link'
import { 
  Users, 
  Truck, 
  LayoutDashboard, 
  UserPlus, 
  Clock,
  ArrowRight,
  Check
} from 'lucide-react'

const products = [
  {
    icon: Users,
    name: 'HR Management System',
    description: 'Complete employee management for small teams.',
    features: [
      'Employee database',
      'Time-off tracking',
      'Document storage',
      'Performance reviews'
    ],
    color: '#982598',
    lightColor: '#98259820',
    href: '/products/hr-management', // Fixed path
    popular: true
  },
  {
    icon: Truck,
    name: 'Vendor Management System',
    description: 'Track vendors, contracts, and payments.',
    features: [
      'Vendor database',
      'Contract tracking',
      'Payment schedules',
      'Renewal reminders'
    ],
    color: '#E491C9',
    lightColor: '#E491C920',
    href: '/products/vendor-management', // Fixed path
    popular: false
  },
  {
    icon: LayoutDashboard,
    name: 'Business Dashboard',
    description: 'Real-time overview of your operations.',
    features: [
      'Team analytics',
      'Revenue tracking',
      'Task management',
      'Custom reports'
    ],
    color: '#15173D',
    lightColor: '#15173D20',
    href: '/products/business-dashboard', // Fixed path
    popular: false
  },
  {
    icon: UserPlus,
    name: 'Employee Onboarding',
    description: 'Streamlined onboarding for new hires.',
    features: [
      'Digital offer letters',
      'Onboarding checklists',
      'Document collection',
      'Training tracking'
    ],
    color: '#982598',
    lightColor: '#98259820',
    href: '/products/employee-onboarding', // Fixed path
    popular: false
  },
  {
    icon: Clock,
    name: 'Payroll Tracking',
    description: 'Simple time tracking and payroll prep.',
    features: [
      'Time tracking',
      'Attendance records',
      'Timesheet approval',
      'Payroll export'
    ],
    color: '#E491C9',
    lightColor: '#E491C920',
    href: '/products/payroll-tracking', // Fixed path
    popular: false
  }
]

export function ProductsShowcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#15173D05] via-[#98259805] to-[#E491C905]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to run your business
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Simple, focused tools that work together. No complexity, no bloat.
          </p>
        </div>

        {/* Product Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.name}
                className="group relative bg-white rounded-xl border p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: `${product.color}20` }}
              >
                {product.popular && (
                  <span 
                    className="absolute -top-3 right-6 text-white text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)' }}
                  >
                    Most popular
                  </span>
                )}
                
                <div 
                  className="h-12 w-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: product.lightColor }}
                >
                  <Icon style={{ color: product.color }} className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {product.description}
                </p>
                
                <div className="mt-4 space-y-2">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 flex-shrink-0" style={{ color: product.color }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
                    style={{ color: product.color }}
                  >
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-medium transition-all duration-300 hover:gap-3"
            style={{ 
              color: '#982598',
              borderBottom: '2px solid #E491C9'
            }}
          >
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}