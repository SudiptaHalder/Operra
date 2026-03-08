import Link from 'next/link'
import { 
  Shield, 
  ChevronRight,
  Lock,
  Eye,
  Database,
  Globe,
  Mail,
  Heart,
  Sparkles,
  CheckCircle,
  Calendar  // Add this import
} from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy - Operra',
  description: 'Your privacy matters. Learn how we protect and handle your data with care.',
}

export default function PrivacyPolicyPage() {
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
            <Shield className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Your Privacy Matters</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">First</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We believe your data belongs to you. Read about how we protect it.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>Last updated: March 1, 2024</span>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Lock, title: '256-bit Encryption', desc: 'Bank-level security' },
              { icon: Database, title: 'Daily Backups', desc: 'Your data is safe' },
              { icon: Eye, title: 'No Tracking', desc: 'We respect your privacy' },
              { icon: Globe, title: 'GDPR Compliant', desc: 'Global standards' }
            ].map((item) => (
              <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Quick Summary Card */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-12 shadow-xl">
            <Sparkles className="h-8 w-8 mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-4">Our Promise to You</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>We never sell your personal information</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Your data is encrypted and secure</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>You can export or delete your data anytime</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>We're transparent about what we collect</span>
              </li>
            </ul>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-lg">1</span>
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>We collect only what's necessary to provide you with great service:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm flex-shrink-0">•</span>
                    <div>
                      <strong className="text-gray-900">Account Information:</strong> Your name, email, and business details when you sign up.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-sm flex-shrink-0">•</span>
                    <div>
                      <strong className="text-gray-900">Business Data:</strong> Employee records, vendor information, and other data you store in Operra.
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-sm flex-shrink-0">•</span>
                    <div>
                      <strong className="text-gray-900">Usage Data:</strong> How you use our services to help us improve.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 text-lg">2</span>
                How We Use Your Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'To provide and maintain our services',
                  'To notify you about updates',
                  'To provide customer support',
                  'To improve our services',
                  'To process your transactions',
                  'To send you helpful resources'
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-lg">3</span>
                Your Rights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Right to access your data',
                  'Right to correct your data',
                  'Right to delete your data',
                  'Right to export your data',
                  'Right to opt-out of marketing',
                  'Right to withdraw consent'
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                    <Shield className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 text-lg">4</span>
                Security Measures
              </h2>
              <div className="prose max-w-none text-gray-600">
                <p>We implement industry-standard security measures to protect your data:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-green-500" />
                    256-bit encryption for all data
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-green-500" />
                    Regular security audits
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-green-500" />
                    SOC2 compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-green-500" />
                    Daily automated backups
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Have questions about your privacy?</h3>
                  <p className="text-gray-300">We're here to help. Reach out anytime.</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}