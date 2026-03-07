import Link from 'next/link'
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart
} from 'lucide-react'

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
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers', badge: 'Hiring' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Help Center', href: '/help' },
    { name: 'Guides & eBooks', href: '/resources' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'API Status', href: '/status' },
  ],
  support: [
    { name: 'Contact Sales', href: '/contact' },
    { name: 'Book Demo', href: '/book-demo' },
    { name: 'Support Center', href: '/support' },
    { name: 'FAQs', href: '/faq' },
    { name: 'System Status', href: '/status', external: true },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Security', href: '/security' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ]
}

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/operra', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com/operra', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/operra', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/operra', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/operra', icon: Youtube },
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
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">
                <span className="text-white">op</span>
                <span className="text-gray-400">erra</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Simple, affordable business management software built specifically for small businesses. 
              No complexity, no enterprise bloat — just tools that work.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-gray-500" />
                <a href="mailto:support@operra.com" className="text-gray-400 hover:text-white transition-colors">
                  support@operra.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-gray-500" />
                <a href="tel:+18005551234" className="text-gray-400 hover:text-white transition-colors">
                  +1 (800) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
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
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our Privacy Policy. We respect your inbox — unsubscribe anytime.
            </p>

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

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-16">
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
                    {item.highlight && <ArrowRight className="inline h-3 w-3 ml-1" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
                  >
                    {item.name}
                    {item.badge && (
                      <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">
                        {item.badge}
                      </span>
                    )}
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

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {item.name}
                      <span className="text-xs">↗</span>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
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
            &copy; {new Date().getFullYear()} Operra. All rights reserved.
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