import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Users, 
  Truck, 
  LayoutDashboard, 
  UserPlus, 
  Clock,
  ArrowRight,
  Check,
  Star,
  Shield,
  Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products - Operra',
  description: 'Simple, affordable business management tools for small businesses. HR, vendor management, payroll, and more.',
}

const products = [
  {
    id: 'hr-management',
    name: 'HR Management System',
    tagline: 'Stop juggling employee spreadsheets',
    description: 'Complete employee management designed for small teams. Track time-off, store documents, manage performance — all in one place.',
    icon: Users,
    color: '#982598',
    lightColor: '#98259810',
    features: [
      'Employee database with custom fields',
      'Time-off requests and approval',
      'Document storage (contracts, IDs, certifications)',
      'Performance review templates',
      'Team directory with roles',
      'Automated reminders for reviews'
    ],
    benefits: [
      'Save 5+ hours per week on admin',
      'Never lose employee documents again',
      'Know who\'s off without checking spreadsheets'
    ],
    href: '/products/hr-management',
    stats: { users: '500+', rating: 4.9 }
  },
  {
    id: 'vendor-management',
    name: 'Vendor Management System',
    tagline: 'Never miss a contract renewal',
    description: 'Track vendors, contracts, and payments in one simple dashboard. Get alerts before contracts expire.',
    icon: Truck,
    color: '#E491C9',
    lightColor: '#E491C910',
    features: [
      'Vendor database with contact info',
      'Contract tracking with expiry alerts',
      'Payment schedule management',
      'Document storage (agreements, invoices)',
      'Vendor performance ratings',
      'Renewal reminders'
    ],
    benefits: [
      'Stop missing contract renewals',
      'Compare vendor performance easily',
      'Access all vendor docs in seconds'
    ],
    href: '/products/vendor-management',
    stats: { users: '350+', rating: 4.8 }
  },
  {
    id: 'business-dashboard',
    name: 'Business Dashboard',
    tagline: 'See your whole business at a glance',
    description: 'Real-time overview of your operations, team performance, and revenue insights.',
    icon: LayoutDashboard,
    color: '#15173D',
    lightColor: '#15173D10',
    features: [
      'Team activity overview',
      'Revenue and expense tracking',
      'Task completion metrics',
      'Upcoming deadlines',
      'Custom reports',
      'Mobile access'
    ],
    benefits: [
      'Make data-driven decisions',
      'Spot issues before they become problems',
      'Share insights with your team'
    ],
    href: '/products/business-dashboard',
    stats: { users: '400+', rating: 4.7 }
  },
  {
    id: 'employee-onboarding',
    name: 'Employee Onboarding',
    tagline: 'Get new hires productive faster',
    description: 'Streamlined onboarding with digital offer letters, automated checklists, and document collection.',
    icon: UserPlus,
    color: '#14B8A6',
    lightColor: '#14B8A610',
    features: [
      'Digital offer letters with e-signature',
      'Onboarding task checklists',
      'Document collection (IDs, banking)',
      'Training assignment',
      'Welcome email automation',
      'New hire portal'
    ],
    benefits: [
      'Reduce onboarding time by 50%',
      'Consistent experience for every hire',
      'No more chasing paperwork'
    ],
    href: '/products/employee-onboarding',
    stats: { users: '300+', rating: 4.9 }
  },
  {
    id: 'payroll-tracking',
    name: 'Payroll Tracking',
    tagline: 'Simple time tracking for payroll',
    description: 'Track time, attendance, and prepare payroll data without the complexity of enterprise systems.',
    icon: Clock,
    color: '#F59E0B',
    lightColor: '#F59E0B10',
    features: [
      'Time clock with mobile access',
      'Attendance records',
      'Timesheet approval',
      'Overtime calculation',
      'Export to payroll services',
      'Paid time off tracking'
    ],
    benefits: [
      'Stop manual time calculations',
      'Reduce payroll errors',
      'Know exactly what you owe'
    ],
    href: '/products/payroll-tracking',
    stats: { users: '280+', rating: 4.8 }
  }
]

const comparisons = [
  {
    feature: 'Price',
    operra: 'From $5/month',
    competitors: '$30-100/month'
  },
  {
    feature: 'Setup time',
    operra: '15 minutes',
    competitors: 'Days or weeks'
  },
  {
    feature: 'Training needed',
    operra: 'None',
    competitors: 'Hours of training'
  },
  {
    feature: 'Contract',
    operra: 'Month-to-month',
    competitors: 'Annual commitment'
  },
  {
    feature: 'Support',
    operra: 'Real humans',
    competitors: 'Chatbots'
  }
]

export default function ProductsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15173D05] via-[#98259805] to-[#E491C905]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: 'linear-gradient(135deg, #98259810 0%, #E491C910 50%, #15173D10 100%)',
                border: '1px solid #98259820',
                color: '#15173D'
              }}
            >
              <Zap className="h-4 w-4" style={{ color: '#982598' }} />
              Simple tools, powerful results
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Built for small businesses,{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                not enterprises
              </span>
            </h1>
            
            <p className="mt-4 text-lg text-gray-600">
              Every tool is designed to solve real problems for small teams. No bloated features, 
              no complex setup, no enterprise pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: `${product.color}20` }}
                >
                  {/* Popular badge for HR (optional) */}
                  {index === 0 && (
                    <span 
                      className="absolute -top-3 right-8 px-4 py-1 rounded-full text-xs font-medium text-white"
                      style={{ background: product.color }}
                    >
                      Most popular
                    </span>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left column - Icon and basic info */}
                    <div className="lg:col-span-1">
                      <div 
                        className="h-16 w-16 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: product.lightColor }}
                      >
                        <Icon className="h-8 w-8" style={{ color: product.color }} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                      <p className="text-lg font-medium mt-1" style={{ color: product.color }}>
                        {product.tagline}
                      </p>
                      <p className="mt-3 text-gray-600">
                        {product.description}
                      </p>

                      {/* Stats */}
                      <div className="mt-6 flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-current" style={{ color: '#F59E0B' }} />
                          <span className="text-sm font-medium text-gray-900">{product.stats.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{product.stats.users} businesses</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6">
                        <Link
                          href={product.href}
                          className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                          style={{ color: product.color }}
                        >
                          Learn more about {product.name}
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Middle column - Features */}
                    <div className="lg:col-span-1">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                        Key features
                      </h3>
                      <ul className="space-y-3">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right column - Benefits */}
                    <div className="lg:col-span-1">
                      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                        Benefits
                      </h3>
                      <div className="space-y-4">
                        {product.benefits.map((benefit) => (
                          <div 
                            key={benefit} 
                            className="p-4 rounded-lg"
                            style={{ background: product.lightColor }}
                          >
                            <p className="text-sm font-medium" style={{ color: product.color }}>
                              {benefit}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Quick demo CTA */}
                      <div className="mt-6">
                        <Link
                          href="/book-demo"
                          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Book a demo for this product
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Operra Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why small businesses choose Operra
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're built differently. Here's how we compare.
            </p>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold" style={{ color: '#982598' }}>Operra</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-400">Others</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisons.map((item) => (
                    <tr key={item.feature}>
                      <td className="px-6 py-4 text-sm text-gray-900">{item.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm font-medium" style={{ color: '#982598' }}>{item.operra}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-400">{item.competitors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {[
                { icon: Shield, text: 'No long-term contracts' },
                { icon: Users, text: '500+ businesses trust us' },
                { icon: Zap, text: '15-minute setup' }
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.text} className="flex items-center gap-2">
                    <Icon className="h-5 w-5" style={{ color: '#982598' }} />
                    <span className="text-sm text-gray-600">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Note */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  All products work together
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Each tool is powerful on its own. But when you use them together, 
                  they create a complete business management system.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'HR data flows into payroll',
                    'Vendor contracts appear in dashboard',
                    'Onboarding connects to employee records',
                    'One login for everything'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#982598' }} />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 text-[#982598] font-medium hover:gap-3 transition-all"
                  >
                    View pricing
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div 
                className="p-8 rounded-xl text-white"
                style={{
                  background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)'
                }}
              >
                <h3 className="text-xl font-bold mb-4">Start with one, add more as you grow</h3>
                <p className="opacity-90 mb-6">
                  Many customers start with HR or vendor management, then add more tools as their business expands.
                </p>
                <Link
                  href="/book-demo"
                  className="inline-block bg-white text-[#982598] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book a demo to learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to simplify your business?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join 500+ small business owners who've ditched spreadsheets for Operra.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
                }}
              >
                Book a free demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                View pricing
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}