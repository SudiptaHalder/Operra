import { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, HelpCircle, Users, Building2, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing - Operra',
  description: 'Simple, affordable pricing for small businesses. Plans start at just $5 per month.',
}

const plans = [
  {
    name: 'Basic',
    description: 'For small teams getting started',
    price: '$5',
    period: 'per month',
    features: [
      'Up to 50 employees',
      'HR Management',
      'Employee records',
      'Vendor management',
      'Email support',
      'Mobile app access',
    ],
    notIncluded: [
      'Advanced HR workflows',
      'Vendor contract tracking',
      'Business dashboard',
      'Payroll tracking',
      'Priority support'
    ],
    cta: 'Start with Basic',
    popular: false,
    icon: Users,
    employeeLimit: '50'
  },
  {
    name: 'Professional',
    description: 'For growing businesses',
    price: '$8',
    period: 'per month',
    features: [
      'Up to 150 employees',
      'Everything in Basic',
      'Advanced HR workflows',
      'Vendor contract tracking',
      'Business dashboard',
      'Payroll preparation',
      'Priority email support',
    ],
    notIncluded: [
      'Full payroll tracking',
      'Advanced analytics',
      'API access'
    ],
    cta: 'Start with Professional',
    popular: true,
    icon: Building2,
    employeeLimit: '150'
  },
  {
    name: 'Premium',
    description: 'For established businesses',
    price: '$10',
    period: 'per month',
    features: [
      'Up to 200 employees',
      'Everything in Professional',
      'Full payroll tracking',
      'Vendor performance analytics',
      'Contract renewal alerts',
      'Custom reporting',
      'Phone & priority support',
      'API access',
    ],
    notIncluded: [],
    cta: 'Start with Premium',
    popular: false,
    icon: Sparkles,
    employeeLimit: '200'
  }
]

const faqs = [
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
  },
  {
    question: 'Is there a long-term contract?',
    answer: 'No, all plans are month-to-month. You can cancel anytime with no penalties.'
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes, we offer a 14-day free trial on all plans. No credit card required.'
  },
  {
    question: 'What if I have more than 200 employees?',
    answer: 'Contact us for custom enterprise pricing. We offer special rates for larger teams.'
  },
  {
    question: 'Is there a discount for annual billing?',
    answer: 'Yes, save 20% when you pay annually. Two months free!'
  },
  {
    question: 'Do you offer non-profit discounts?',
    answer: 'Yes, we offer 30% discount for registered non-profits. Contact us to verify.'
  }
]

export default function PricingPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15173D05] via-[#98259805] to-[#E491C905]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              background: 'linear-gradient(135deg, #98259810 0%, #E491C910 50%, #15173D10 100%)',
              border: '1px solid #98259820',
              color: '#15173D'
            }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: '#982598' }} />
            Affordable plans for every business size
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pricing that scales{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              from 50 to 200 employees
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Start for as low as $5/month. Flat pricing, no hidden fees.
          </p>
          
          {/* Savings badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-green-700">Save 20% with annual billing</span>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-[#982598] shadow-lg scale-105 md:scale-110 z-10 bg-white' 
                    : 'border-gray-200 bg-white/80 hover:border-[#98259840]'
                }`}
              >
                {plan.popular && (
                  <span 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium text-white whitespace-nowrap"
                    style={{ background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)' }}
                  >
                    Most popular
                  </span>
                )}
                
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div 
                      className="h-14 w-14 rounded-xl flex items-center justify-center"
                      style={{
                        background: index === 0 
                          ? 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)'
                          : index === 1
                          ? 'linear-gradient(135deg, #982598 0%, #E491C9 100%)'
                          : 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)'
                      }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                  
                  {/* Employee limit badge */}
                  <div 
                    className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: index === 0 
                        ? '#14B8A610'
                        : index === 1
                        ? '#98259810'
                        : '#F59E0B10',
                      color: index === 0 
                        ? '#14B8A6'
                        : index === 1
                        ? '#982598'
                        : '#F59E0B',
                      border: `1px solid ${
                        index === 0 
                          ? '#14B8A620'
                          : index === 1
                          ? '#98259820'
                          : '#F59E0B20'
                      }`
                    }}
                  >
                    Up to {plan.employeeLimit} employees
                  </div>
                  
                  <p className="mt-3 text-sm text-gray-500">{plan.description}</p>
                  
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  </div>
                  
                  {/* Per employee calculation */}
                  <p className="mt-1 text-xs text-gray-400">
                    less than ${(parseInt(plan.price.slice(1)) / parseInt(plan.employeeLimit)).toFixed(2)}/employee
                  </p>
                  
                  {/* Annual pricing note */}
                  <p className="mt-2 text-xs text-gray-400">
                    or ${parseInt(plan.price.slice(1)) * 12 * 0.8}/year (save 20%)
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#982598' }} />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm opacity-50">
                      <X className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/book-demo"
                    className={`block w-full text-center px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'text-white hover:opacity-90 hover:scale-105'
                        : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                    }`}
                    style={plan.popular ? { 
                      background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)'
                    } : undefined}
                  >
                    {plan.cta}
                  </Link>
                </div>

                <p className="mt-4 text-xs text-center text-gray-400">
                  14-day free trial • No credit card needed
                </p>
              </div>
            )
          })}
        </div>

        {/* Enterprise note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need more than 200 employees?{' '}
            <Link href="/contact" className="font-medium" style={{ color: '#982598' }}>
              Contact us for custom enterprise pricing
            </Link>
          </p>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Compare features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find the perfect plan for your team size.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-xl border border-gray-200 bg-white">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic ($5)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Professional ($8)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Premium ($10)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { name: 'Employee limit', basic: '50', pro: '150', premium: '200' },
                  { name: 'HR Management', basic: 'Basic', pro: 'Advanced', premium: 'Advanced' },
                  { name: 'Employee records', basic: true, pro: true, premium: true },
                  { name: 'Vendor management', basic: 'Basic', pro: 'Contract tracking', premium: 'Full analytics' },
                  { name: 'Business dashboard', basic: false, pro: 'Basic', premium: 'Complete' },
                  { name: 'Payroll tracking', basic: false, pro: 'Preparation', premium: 'Full tracking' },
                  { name: 'Contract renewals', basic: false, pro: true, premium: true },
                  { name: 'Custom reporting', basic: false, pro: false, premium: true },
                  { name: 'API access', basic: false, pro: false, premium: true },
                  { name: 'Support', basic: 'Email', pro: 'Priority email', premium: 'Phone + email' },
                ].map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 text-sm text-gray-900">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.basic === 'boolean' ? (
                        feature.basic ? (
                          <Check className="h-5 w-5 mx-auto" style={{ color: '#14B8A6' }} />
                        ) : (
                          <X className="h-5 w-5 mx-auto text-gray-300" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.basic}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? (
                          <Check className="h-5 w-5 mx-auto" style={{ color: '#982598' }} />
                        ) : (
                          <X className="h-5 w-5 mx-auto text-gray-300" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.pro}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.premium === 'boolean' ? (
                        feature.premium ? (
                          <Check className="h-5 w-5 mx-auto" style={{ color: '#F59E0B' }} />
                        ) : (
                          <X className="h-5 w-5 mx-auto text-gray-300" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Value highlight */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { plan: 'Basic', price: '$5', employees: '50', cost: '10¢/employee' },
              { plan: 'Professional', price: '$8', employees: '150', cost: '5¢/employee' },
              { plan: 'Premium', price: '$10', employees: '200', cost: '5¢/employee' },
            ].map((item) => (
              <div key={item.plan} className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <p className="text-sm text-gray-500">{item.plan}</p>
                <p className="text-xl font-bold text-gray-900">{item.price}/month</p>
                <p className="text-sm text-gray-600">{item.employees} employees</p>
                <p className="text-xs font-medium" style={{ color: '#982598' }}>{item.cost}</p>
              </div>
            ))}
          </div>

          {/* Money-back guarantee */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-50 border border-green-100">
              <Sparkles className="h-5 w-5 text-green-600" />
              <span className="text-sm text-green-700">
                30-day money-back guarantee. No questions asked.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to know about our pricing.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-base font-semibold text-gray-900 flex items-start gap-2">
                  <HelpCircle className="h-5 w-5 flex-shrink-0" style={{ color: '#982598' }} />
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-gray-600 pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #15173D 0%, #982598 50%, #E491C9 100%)',
            opacity: 0.05
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Start your 14-day free trial today
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            No credit card required. Cancel anytime.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
              }}
            >
              Get started now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Contact sales
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Plans start at just $5/month for up to 50 employees • Save 20% with annual billing
          </p>
        </div>
      </section>
    </div>
  )
}