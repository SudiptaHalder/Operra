'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  HelpCircle, 
  Search, 
  ChevronDown,
  Mail,
  MessageCircle,
  Sparkles,
  BookOpen,
  Users,
  CreditCard,
  Shield,
  Headphones,
  Star,
  ChevronRight,
  ThumbsUp
} from 'lucide-react'



const faqCategories = [
  {
    name: 'General',
    icon: '📋',
    color: 'purple',
    questions: [
      {
        q: 'What is Trezbo?',
        a: 'Trezbo is a simple, affordable business management software built specifically for small businesses. We offer HR management, vendor management, business dashboard, employee onboarding, and payroll tracking tools.'
      },
      {
        q: 'Who is Trezbo for?',
        a: 'Trezbo is designed for small business owners with teams of 3-200 employees. We serve retail shops, restaurants, construction companies, marketing agencies, service businesses, and more.'
      },
      {
        q: 'Do I need technical skills to use Trezbo?',
        a: 'Not at all! Trezbo is designed to be intuitive and easy to use. If you can use a spreadsheet, you can use Trezbo. No training required.'
      },
      {
        q: 'Is Trezbo really free to try?',
        a: 'Yes! We offer a 14-day free trial on all plans. No credit card required. You can cancel anytime.'
      }
    ]
  },
  {
    name: 'Pricing & Plans',
    icon: '💰',
    color: 'pink',
    questions: [
      {
        q: 'How much does Trezbo cost?',
        a: 'Our plans start at just $5/month. Basic: $5/month (up to 50 employees), Professional: $8/month (up to 150 employees), Premium: $10/month (up to 200 employees). All plans include a 14-day free trial.'
      },
      {
        q: 'Are there any hidden fees?',
        a: 'No hidden fees, no setup costs, no long-term contracts. You pay the monthly subscription and that\'s it.'
      },
      {
        q: 'Can I change plans later?',
        a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
      },
      {
        q: 'Do you offer discounts for annual billing?',
        a: 'Yes! Save 20% when you pay annually. That\'s two months free.'
      },
      {
        q: 'What if I need more than 200 employees?',
        a: 'Contact us for custom enterprise pricing. We offer special rates for larger teams.'
      }
    ]
  },
  {
    name: 'Products & Features',
    icon: '🚀',
    color: 'purple',
    questions: [
      {
        q: 'Can I use multiple products together?',
        a: 'Absolutely! All Trezbo products work together seamlessly. HR data flows into payroll, vendor contracts appear in your dashboard, and onboarding connects to employee records.'
      },
      {
        q: 'Can I import data from spreadsheets?',
        a: 'Yes, we provide CSV templates for easy import. You can upload your employee data, vendor lists, and time-off history in minutes.'
      },
      {
        q: 'Is there a mobile app?',
        a: 'Yes, Trezbo works perfectly on all devices - desktop, tablet, and phone. Native apps for iOS and Android are available.'
      },
      {
        q: 'Can I customize fields?',
        a: 'Absolutely! Add custom fields for any information you need to track - employee IDs, uniform sizes, vendor categories, or anything specific to your business.'
      }
    ]
  },
  {
    name: 'Account & Billing',
    icon: '🔐',
    color: 'pink',
    questions: [
      {
        q: 'How do I create an account?',
        a: 'Click the "Get Demo" button on our website and fill out the form. Our team will reach out within 1 week to schedule your personalized demo and set up your account.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards (Visa, Mastercard, American Express) and debit cards.'
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes, you can cancel your subscription at any time with no penalties. Your data will be available for export for 30 days after cancellation.'
      },
      {
        q: 'How do I update my billing information?',
        a: 'You can update your payment method anytime from your account settings under "Billing".'
      }
    ]
  },
  {
    name: 'Security & Privacy',
    icon: '🛡️',
    color: 'purple',
    questions: [
      {
        q: 'How secure is my data?',
        a: 'Your data is protected with 256-bit encryption, SOC2 compliance, and daily automated backups. We use bank-level security to keep your information safe.'
      },
      {
        q: 'Where is my data stored?',
        a: 'Your data is stored in secure cloud servers with multiple redundancies. We use industry-leading cloud providers with 99.9% uptime guarantees.'
      },
      {
        q: 'Do you share my data with third parties?',
        a: 'No, we never sell or share your data with third parties. Your information is yours alone. See our Privacy Policy for details.'
      },
      {
        q: 'Is Trezbo GDPR compliant?',
        a: 'Yes, we are fully GDPR compliant. We take data privacy seriously and follow all applicable regulations.'
      }
    ]
  },
  {
    name: 'Support',
    icon: '💬',
    color: 'pink',
    questions: [
      {
        q: 'How do I get help?',
        a: 'You can reach us at support@Trezbo.com, use the live chat on our website, or visit our Help Center for guides and articles.'
      },
      {
        q: 'What are your support hours?',
        a: 'Email support is available 24/7. Live chat is available Monday-Friday, 9am-6pm EST. Premium plans include phone support.'
      },
      {
        q: 'How fast do you respond?',
        a: 'We typically respond to emails within 4 hours during business days. Live chat responses are usually within 2 minutes.'
      },
      {
        q: 'Do you offer onboarding assistance?',
        a: 'Yes, all plans include onboarding assistance. We can help you import your data and get set up quickly.'
      }
    ]
  }
]

const popularQuestions = [
  'How much does Trezbo cost?',
  'Is there a free trial?',
  'Can I cancel anytime?',
  'How secure is my data?',
  'Do you have a mobile app?',
  'What payment methods do you accept?'
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openCategories, setOpenCategories] = useState<string[]>(faqCategories.map(c => c.name))

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    )
  }

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-600/10 to-transparent" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <HelpCircle className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Got Questions?</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            We've Got{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Answers
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Everything you need to know about Trezbo. Can't find what you're looking for? Just ask!
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Popular Questions */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500 fill-current" />
              Popular Questions
            </h2>
            <Link href="#all" className="text-purple-600 hover:text-purple-700 flex items-center gap-1">
              View all
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(question)}
                className="group text-left p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
              >
                <p className="text-sm text-gray-700 group-hover:text-purple-600 transition-colors">
                  {question}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Stats */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {faqCategories.map((category) => (
              <div 
                key={category.name}
                className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => {
                  const element = document.getElementById(category.name)
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span className="text-3xl mb-2 block">{category.icon}</span>
                <p className="text-xs font-medium text-gray-900">{category.name}</p>
                <p className="text-xs text-gray-400">{category.questions.length} questions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="all" className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-4">
            {filteredFaqs.map((category) => (
              <div
                key={category.name}
                id={category.name}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <div className="text-left">
                      <h2 className="text-lg font-semibold text-gray-900">{category.name}</h2>
                      <p className="text-sm text-gray-400">{category.questions.length} questions</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      openCategories.includes(category.name) ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openCategories.includes(category.name) && (
                  <div className="px-6 pb-5 space-y-4">
                    {category.questions.map((faq, index) => (
                      <div
                        key={index}
                        className="pt-4 border-t border-gray-100 first:border-t-0"
                      >
                        <h3 className="font-medium text-gray-900 mb-2 flex items-start gap-2">
                          <span className={`w-5 h-5 rounded-full bg-${category.color}-100 flex items-center justify-center mt-0.5 flex-shrink-0`}>
                            <span className={`text-xs text-${category.color}-600`}>Q</span>
                          </span>
                          {faq.q}
                        </h3>
                        <p className="text-gray-600 text-sm pl-7 flex items-start gap-2">
                          <span className={`w-4 h-4 rounded-full bg-${category.color === 'purple' ? 'pink' : 'purple'}-100 flex items-center justify-center mt-0.5 flex-shrink-0`}>
                            <span className={`text-xs text-${category.color === 'purple' ? 'pink' : 'purple'}-600`}>A</span>
                          </span>
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-16">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500 mb-6">We couldn't find any FAQs matching "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Still Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Headphones className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm mb-4">Get help anytime from our support team</p>
              <Link href="/contact" className="text-purple-600 font-medium hover:text-purple-700 flex items-center gap-1">
                Contact support
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Help Center</h3>
              <p className="text-gray-600 text-sm mb-4">Browse guides, tutorials, and articles</p>
              <Link href="/help" className="text-pink-600 font-medium hover:text-pink-700 flex items-center gap-1">
                Visit help center
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-4">Chat with our team in real-time</p>
              <button className="text-purple-600 font-medium hover:text-purple-700 flex items-center gap-1">
                Start chat
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
            <ThumbsUp className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-3">Was this helpful?</h2>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Your feedback helps us improve our FAQs and support content.
            </p>
            <div className="flex gap-3 justify-center">
              <button className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                👍 Yes
              </button>
              <button className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                👎 No
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}