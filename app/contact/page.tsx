'use client'

import Link from 'next/link'
import ContactForm from '../../components/forms/ContactForm'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Headphones,
  Shield,
  Users,
  Globe,
  ChevronRight
} from 'lucide-react'
import ChatButton from '@/components/contact/ChatButton'

export default function ContactPage() {
  return (
    <div className="pt-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-gray-600">Home</Link>
            <ChevronRight className="h-3 w-3 text-gray-300" />
            <span className="text-gray-900">Contact Sales</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Talk About Your Business
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you have questions about our products, need pricing information, 
              or want to discuss your specific needs — our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Mon-Fri, 9am-6pm EST</p>
              <a 
                href="tel:+18005551234" 
                className="text-purple-600 font-medium hover:text-purple-700"
              >
                +1 (800) 555-1234
              </a>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">24/7 email support</p>
              <a 
                href="mailto:sales@operra.com" 
                className="text-pink-600 font-medium hover:text-pink-700"
              >
                sales@operra.com
              </a>
            </div>

            {/* Live Chat - Using Client Component */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-3">Average response: 2 min</p>
              <ChatButton />
            </div>

            {/* Support */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 mb-3">Existing customers</p>
              <Link 
                href="/support" 
                className="text-pink-600 font-medium hover:text-pink-700"
              >
                Support center →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Contact Info & FAQs */}
            <div className="lg:col-span-1 space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-gray-900">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium text-gray-900">Closed</span>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-pink-600" />
                  Our Office
                </h3>
                <address className="not-italic text-gray-600">
                  <p>123 Business Avenue</p>
                  <p>Suite 100</p>
                  <p>San Francisco, CA 94105</p>
                  <p>United States</p>
                </address>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 text-sm"
                >
                  Get directions →
                </a>
              </div>

              {/* Quick FAQs */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Response time?</p>
                    <p className="text-sm text-gray-600">Within 4 hours during business hours</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Free trial?</p>
                    <p className="text-sm text-gray-600">Yes, 14-day trial on all plans</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Demo scheduling?</p>
                    <p className="text-sm text-gray-600">Within 1 week of request</p>
                  </div>
                </div>
                <Link 
                  href="/faq" 
                  className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 text-sm"
                >
                  View all FAQs →
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-white">
                <Shield className="h-8 w-8 mb-4 opacity-90" />
                <h4 className="text-lg font-semibold mb-2">Enterprise-Grade Security</h4>
                <p className="text-sm opacity-90 mb-4">
                  Your data is protected with 256-bit encryption, SOC2 compliance, and daily backups.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>500+</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    <span>99.9% uptime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center border border-gray-300">
            <p className="text-gray-500">Map would be embedded here</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gray-900 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prefer to book a demo first?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              See our products in action with a personalized demo.
            </p>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a demo
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}