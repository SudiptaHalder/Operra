import Link from 'next/link'
import { 
  HelpCircle,
  ChevronRight,
  Mail,
  MessageCircle,
  BookOpen,
  Video,
  FileText,
  Users,
  Truck,
  TrendingUp,
  DollarSign
} from 'lucide-react'
import ChatButton from '@/components/contact/ChatButton'

export const metadata = {
  title: 'Help Center - Trezbo',
  description: 'Get help with Trezbo products. Quick answers to common questions.',
}

const quickTopics = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    color: 'purple',
    items: [
      'How to create an account',
      'Setting up your business',
      'Adding team members',
      'Importing data'
    ]
  },
  {
    title: 'HR Management',
    icon: Users,
    color: 'pink',
    items: [
      'Adding employees',
      'Time-off requests',
      'Employee documents',
      'Performance reviews'
    ]
  },
  {
    title: 'Vendor Management',
    icon: Truck,
    color: 'purple',
    items: [
      'Adding vendors',
      'Contract tracking',
      'Payment schedules',
      'Renewal reminders'
    ]
  },
  {
    title: 'Payroll & Dashboard',
    icon: DollarSign,
    color: 'pink',
    items: [
      'Time tracking',
      'Payroll export',
      'Business metrics',
      'Custom reports'
    ]
  }
]

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'Click "Forgot Password" on the login page and follow the email instructions.'
  },
  {
    question: 'Can I change my subscription plan?',
    answer: 'Yes, you can upgrade or downgrade anytime from your account settings.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, all plans include a 14-day free trial. No credit card required.'
  },
  {
    question: 'How do I contact support?',
    answer: 'Email us at support@Trezbo.com or use the chat button below.'
  },
  {
    question: 'Can I export my data?',
    answer: 'Yes, export to CSV, Excel, or PDF from any module.'
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, 256-bit encryption, daily backups, and SOC2 compliance.'
  }
]

export default function HelpCenterPage() {
  return (
    <div className="pt-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Header */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-4">
            <HelpCircle className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Help Center</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">How can we help?</h1>
          <p className="text-lg text-gray-600">Quick answers to common questions</p>
        </div>
      </section>

      {/* Quick Topics */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTopics.map((topic) => {
              const Icon = topic.icon
              return (
                <div 
                  key={topic.title}
                  className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                >
                  <div className={`bg-${topic.color}-100 rounded-lg w-10 h-10 flex items-center justify-center mb-3`}>
                    <Icon className={`h-5 w-5 text-${topic.color}-600`} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{topic.title}</h3>
                  <ul className="space-y-1.5">
                    {topic.items.map((item) => (
                      <li key={item}>
                        <Link 
                          href="#"
                          className="text-sm text-gray-600 hover:text-purple-600 flex items-center gap-1"
                        >
                          <ChevronRight className="h-3 w-3" />
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <div key={index} className="p-5">
                <h3 className="font-medium text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-xl font-bold mb-2">Still need help?</h2>
            <p className="text-sm text-white/90 mb-6">Our support team is ready to assist</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="mailto:support@Trezbo.com"
                className="bg-white text-purple-600 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 text-sm"
              >
                <Mail className="h-4 w-4" />
                Email Support
              </Link>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-5 py-2.5 font-medium border border-white/20">
                <ChatButton />
              </div>
            </div>
            <p className="text-xs text-white/70 mt-4">Response within 4 hours</p>
          </div>
        </div>
      </section>
    </div>
  )
}