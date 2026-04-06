import Link from 'next/link'
import { 
  Cookie, 
  ChevronRight,
  Info,
  Settings,
  CheckCircle,
  AlertCircle,
  Shield,
  Heart,
  Mail
} from 'lucide-react'

export const metadata = {
  title: 'Cookie Policy - Trezbo',
  description: 'Learn about how we use cookies to improve your experience.',
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-600/10 to-transparent" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Cookie className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Cookie Policy</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            We <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Cookie</span> with Care
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We use cookies to make your experience better, not to track you across the web.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-400">
            <Info className="h-4 w-4" />
            <span>Last updated: March 1, 2024</span>
          </div>
        </div>
      </div>

      {/* What Are Cookies */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">What Are Cookies?</h2>
                <p className="text-white/90 leading-relaxed">
                  Cookies are small text files stored on your device that help websites work better. 
                  They remember your preferences, keep you logged in, and help us understand how 
                  people use our site so we can improve it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Types of Cookies We Use</h2>
          
          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-green-100 rounded-xl p-4 text-center">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Essential</h3>
                    <p className="text-xs text-gray-500">Always active</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4">
                    These cookies are necessary for the website to function. They enable core 
                    functionality like security, network management, and account access.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Session authentication</li>
                      <li>• Security tokens</li>
                      <li>• Load balancing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Preference Cookies */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-purple-100 rounded-xl p-4 text-center">
                    <Settings className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Preferences</h3>
                    <p className="text-xs text-gray-500">Optional</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4">
                    These cookies remember your settings and preferences to enhance your experience.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Language preferences</li>
                      <li>• Theme selection</li>
                      <li>• Saved preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-pink-100 rounded-xl p-4 text-center">
                    <Info className="h-8 w-8 text-pink-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Analytics</h3>
                    <p className="text-xs text-gray-500">Optional</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4">
                    These cookies help us understand how visitors interact with our website, 
                    allowing us to improve our services.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Page views</li>
                      <li>• Time on site</li>
                      <li>• Click patterns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Table */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Cookie Details</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Cookie</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Duration</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">session_id</td>
                    <td className="py-3 px-4">Maintains your session</td>
                    <td className="py-3 px-4">Session</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">Essential</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">csrf_token</td>
                    <td className="py-3 px-4">Security protection</td>
                    <td className="py-3 px-4">Session</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs">Essential</span></td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">preferences</td>
                    <td className="py-3 px-4">Stores your settings</td>
                    <td className="py-3 px-4">1 year</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs">Preferences</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">_ga</td>
                    <td className="py-3 px-4">Google Analytics</td>
                    <td className="py-3 px-4">2 years</td>
                    <td className="py-3 px-4"><span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-xs">Analytics</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Your Choices */}
          <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-purple-600" />
              Your Choices
            </h3>
            <p className="text-gray-600 mb-4">
              You can control cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-sm text-gray-700">View cookies stored on your device</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-sm text-gray-700">Delete individual or all cookies</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-sm text-gray-700">Block cookies from specific sites</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-sm text-gray-700">Set preferences for different cookie types</span>
              </li>
            </ul>
          </div>

          {/* Consent Card */}
          <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="h-6 w-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Your Consent</h3>
                  <p className="text-gray-300">
                    By continuing to use our site, you consent to our use of essential cookies. 
                    You can manage preferences for optional cookies anytime.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors">
                  Cookie Settings
                </button>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Questions?
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              Questions about cookies? Contact us at privacy@Trezbo.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}