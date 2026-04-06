
// import Link from 'next/link'
// import { 
//   Facebook, 
//   Twitter, 
//   Linkedin, 
//   Instagram, 
//   Youtube,
//   Mail,
//   Heart
// } from 'lucide-react'
// import SubscribeButton from '@/components/forms/SubscribeButton'

// const navigation = {
//   products: [
//     { name: 'HR Management', href: '/products/hr-management' },
//     { name: 'Vendor Management', href: '/products/vendor-management' },
//     { name: 'Business Dashboard', href: '/products/business-dashboard' },
//     { name: 'Employee Onboarding', href: '/products/employee-onboarding' },
//     { name: 'Payroll Tracking', href: '/products/payroll-tracking' },
//     { name: 'View All Products', href: '/products', highlight: true },
//   ],
//   company: [
//     { name: 'About Us', href: '/about' },
//     { name: 'Our Team', href: '/about#team' },
//     { name: 'Mission & Values', href: '/about#mission' },
//     { name: 'Blog', href: '/blog' },
//     { name: 'Contact Us', href: '/contact' },
//     { name: 'Book a Demo', href: '/book-demo', highlight: true },
//   ],
//   resources: [
//     { name: 'Help Center', href: '/help' },
//     { name: 'Guides & eBooks', href: '/resources' },
//     { name: 'Webinars', href: '/resources#webinars' },
//     { name: 'FAQs', href: '/faq' },
//   ],
//   legal: [
//     { name: 'Privacy Policy', href: '/privacy' },
//     { name: 'Terms of Service', href: '/terms' },
//     { name: 'Cookie Policy', href: '/cookies' },
//   ]
// }

// const socialLinks = [
//   { name: 'Facebook', href: 'https://facebook.com/Trezbo', icon: Facebook },
//   { name: 'Twitter', href: 'https://twitter.com/Trezbo', icon: Twitter },
//   { name: 'LinkedIn', href: 'https://linkedin.com/company/Trezbo', icon: Linkedin },
//   { name: 'Instagram', href: 'https://instagram.com/Trezbo', icon: Instagram },
//   { name: 'YouTube', href: 'https://youtube.com/Trezbo', icon: Youtube },
// ]

// export function Footer() {
//   return (
//     <footer className="bg-gray-900 border-t border-gray-800" aria-labelledby="footer-heading">
//       <h2 id="footer-heading" className="sr-only">
//         Footer
//       </h2>

//       {/* Main Footer */}
//       <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
//         {/* Top Section with Logo and Newsletter */}
//         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-800">
//           {/* Company Info */}
//           <div className="lg:col-span-2">
//             <Link href="/" className="inline-block mb-6">
//               <span className="text-2xl font-bold">
//                 <span className="text-white">op</span>
//                 <span className="text-gray-400">erra</span>
//               </span>
//             </Link>
//             <p className="text-gray-400 text-sm leading-relaxed max-w-md">
//               Simple, affordable business management software built specifically for small businesses. 
//               No complexity, no enterprise bloat — just tools that work.
//             </p>
            
//             {/* Contact Info */}
//             <div className="mt-6">
//               <div className="flex items-center gap-3 text-sm">
//                 <Mail className="h-4 w-4 text-gray-500" />
//                 <a href="mailto:support@Trezbo.com" className="text-gray-400 hover:text-white transition-colors">
//                   support@Trezbo.com
//                 </a>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="mt-8">
//               <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
//                 Follow Us
//               </h3>
//               <div className="flex gap-4">
//                 {socialLinks.map((item) => {
//                   const Icon = item.icon
//                   return (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-400 hover:text-white transition-colors"
//                       aria-label={item.name}
//                     >
//                       <Icon className="h-5 w-5" />
//                     </a>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Newsletter Signup */}
//           <div className="lg:col-span-3">
//             <h3 className="text-lg font-semibold text-white mb-3">
//               Get helpful resources for your business
//             </h3>
//             <p className="text-gray-400 text-sm mb-4">
//               Subscribe to our newsletter for tips, guides, and updates tailored for small businesses.
//             </p>
            
//             <SubscribeButton variant="footer" />

//             {/* Trust Badges */}
//             <div className="flex flex-wrap gap-6 mt-8">
//               <div className="flex items-center gap-2">
//                 <div className="h-6 w-6 bg-green-500/20 rounded-full flex items-center justify-center">
//                   <div className="h-2 w-2 bg-green-500 rounded-full"></div>
//                 </div>
//                 <span className="text-xs text-gray-400">99.9% Uptime</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="h-6 w-6 bg-blue-500/20 rounded-full flex items-center justify-center">
//                   <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
//                 </div>
//                 <span className="text-xs text-gray-400">SOC2 Compliant</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="h-6 w-6 bg-purple-500/20 rounded-full flex items-center justify-center">
//                   <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
//                 </div>
//                 <span className="text-xs text-gray-400">24/7 Support</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Links - 4 columns */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
//           {/* Products */}
//           <div>
//             <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
//               Products
//             </h3>
//             <ul className="space-y-3">
//               {navigation.products.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className={`text-sm transition-colors ${
//                       item.highlight 
//                         ? 'text-purple-400 hover:text-purple-300 font-medium' 
//                         : 'text-gray-400 hover:text-white'
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company - Full Menu */}
//           <div>
//             <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
//               Company
//             </h3>
//             <ul className="space-y-3">
//               {navigation.company.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className={`text-sm transition-colors ${
//                       item.highlight 
//                         ? 'text-purple-400 hover:text-purple-300 font-medium' 
//                         : 'text-gray-400 hover:text-white'
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
//               Resources
//             </h3>
//             <ul className="space-y-3">
//               {navigation.resources.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-gray-400 hover:text-white transition-colors"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Legal */}
//           <div>
//             <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
//               Legal
//             </h3>
//             <ul className="space-y-3">
//               {navigation.legal.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="text-sm text-gray-400 hover:text-white transition-colors"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-xs text-gray-500">
//             &copy; {new Date().getFullYear()} Trezbo. All rights reserved.
//           </p>
          
//           <div className="flex flex-wrap justify-center gap-6">
//             {navigation.legal.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           <p className="text-xs text-gray-600 flex items-center gap-1">
//             Made with <Heart className="h-3 w-3 text-pink-500 fill-current" /> for small businesses
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }
import Link from 'next/link'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Mail,
  Heart
} from 'lucide-react'
import SubscribeButton from '@/components/forms/SubscribeButton'

const navigation = {
  products: [
    { name: 'HR Management', href: '/products/hr-management' },
    { name: 'Vendor Management', href: '/products/vendor-management' },
    { name: 'Business Dashboard', href: '/products/business-dashboard' },
    { name: 'Employee Onboarding', href: '/products/employee-onboarding' },
    { name: 'Payroll Tracking', href: '/products/payroll-tracking' },
    { name: 'View All Products', href: '/products', highlight: true },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Mission & Values', href: '/about#mission' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Book a Demo', href: '/book-demo', highlight: true },
  ],
  resources: [
    { name: 'Help Center', href: '/help' },
    { name: 'Guides & eBooks', href: '/resources/guides' },
    { name: 'Webinars', href: '/resources/webinars' },
    { name: 'FAQs', href: '/faq' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ]
}

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/Trezbo', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com/Trezbo', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/Trezbo', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/Trezbo', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/Trezbo', icon: Youtube },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Top Section with Logo and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-800">
          {/* Company Info */}
          <div className="lg:col-span-2">
           {/* Enhanced Logo - Trezbo */}
<Link href="/" className="group relative inline-flex items-center mb-6">
  <div className="relative flex items-center">
    
    {/* Icon */}
    <div className="relative w-10 h-10 mr-3">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity" />
      
      {/* Inner Box */}
      <div className="absolute inset-1 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
        <span className="text-white font-bold text-lg">T</span>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity" />
    </div>

    {/* Text Logo */}
    <div className="flex items-center">
      <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        Trez
      </span>
      <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent relative">
        bo
        <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-75" />
      </span>
    </div>

  </div>
</Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Simple, affordable business management software built specifically for small businesses. 
              No complexity, no enterprise bloat — just tools that work.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <a href="mailto:support@Trezbo.com" className="text-gray-400 hover:text-white transition-colors">
                  support@Trezbo.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all hover:scale-110"
                      aria-label={item.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-3">
              Get helpful resources for your business
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for tips, guides, and updates tailored for small businesses.
            </p>
            
            <SubscribeButton variant="footer" />

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-green-500/20 rounded-full flex items-center justify-center">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-400">99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-400">SOC2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-400">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links - 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors ${
                      item.highlight 
                        ? 'text-purple-400 hover:text-purple-300 font-medium' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company - Full Menu */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-sm transition-colors ${
                      item.highlight 
                        ? 'text-purple-400 hover:text-purple-300 font-medium' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Trezbo. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <p className="text-xs text-gray-600 flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-pink-500 fill-current" /> for small businesses
          </p>
        </div>
      </div>
    </footer>
  )
}