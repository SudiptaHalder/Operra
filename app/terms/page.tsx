import Link from 'next/link'
import { 
  FileText, 
  ChevronRight,
  Scale,
  AlertCircle,
  CheckCircle,
  BookOpen,
  Heart,
  Mail
} from 'lucide-react'

export const metadata = {
  title: 'Terms of Service - Trezbo',
  description: 'Our terms of service - fair, transparent, and designed with small businesses in mind.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-600/10 to-transparent" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Scale className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Fair & Transparent</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Terms of <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Service</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, fair terms designed for small businesses. No hidden clauses, no fine print tricks.
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-400">
            <BookOpen className="h-4 w-4" />
            <span>Last updated: March 1, 2024</span>
          </div>
        </div>
      </div>

      {/* Quick Summary */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Quick Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <CheckCircle className="h-6 w-6 mb-2" />
                <h3 className="font-semibold mb-1">30-Day Guarantee</h3>
                <p className="text-sm text-white/80">Not happy? Full refund within 30 days</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <CheckCircle className="h-6 w-6 mb-2" />
                <h3 className="font-semibold mb-1">Your Data is Yours</h3>
                <p className="text-sm text-white/80">Export or delete anytime</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <CheckCircle className="h-6 w-6 mb-2" />
                <h3 className="font-semibold mb-1">Cancel Anytime</h3>
                <p className="text-sm text-white/80">No penalties, no questions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-xl">1</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Agreement to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing or using Trezbo's services, you agree to be bound by these Terms of Service. 
                    If you disagree with any part of the terms, you may not access our services. We keep things 
                    simple and fair—no hidden surprises.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold text-xl">2</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Subscription and Pricing</h2>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Free Trial
                      </h3>
                      <p className="text-gray-600">14-day free trial on all plans. No credit card required.</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                        Paid Plans
                      </h3>
                      <p className="text-gray-600">Starting at $5/month. Billed monthly. Cancel anytime.</p>
                    </div>
                    <div className="bg-pink-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-pink-600" />
                        30-Day Money-Back Guarantee
                      </h3>
                      <p className="text-gray-600">Not satisfied? Contact us within 30 days for a full refund.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-xl">3</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Responsibilities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Keep your account credentials secure',
                      'Provide accurate information',
                      'Use services lawfully',
                      'Respect others\' rights',
                      'Maintain data accuracy',
                      'Comply with regulations'
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold text-xl">4</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Ownership</h2>
                  <p className="text-gray-600 mb-4">
                    You retain all rights to your data. We only access it to provide our services to you.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong className="text-gray-900">Your data is yours:</strong> You can export it anytime, 
                      delete it anytime, or take it to another service. No lock-in, no hard feelings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-xl">5</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Cancellation and Termination</h2>
                  <p className="text-gray-600 mb-4">
                    You can cancel your subscription anytime. No penalties, no questions asked.
                  </p>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="text-sm text-amber-800">
                      <strong>Note:</strong> After cancellation, you'll have 30 days to export your data before it's permanently deleted.
                    </p>
                  </div>
                </div>
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
                  <h3 className="text-xl font-bold mb-2">Questions about our terms?</h3>
                  <p className="text-gray-300">We're happy to explain—no legalese, just plain English.</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Ask Us
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              By using Trezbo, you agree to these terms. They're designed to be fair to everyone.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}