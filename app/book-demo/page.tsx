import { Metadata } from 'next'
import DemoForm from '@/components/forms/DemoForm'
import { Calendar, Clock, Users, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book a Demo - Trezbo',
  description: 'Schedule a personalized demo of Trezbo products. See how our software can help your small business.',
}

export default function BookDemoPage() {
  return (
    <div className="pt-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            See Trezbo in Action
          </h1>
          <p className="text-xl text-gray-600">
            Book a personalized demo with our team. We'll show you how Trezbo can simplify your business operations.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-sm font-medium text-gray-700">1-week scheduling</p>
          </div>
          <div className="text-center">
            <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-pink-600" />
            </div>
            <p className="text-sm font-medium text-gray-700">30-minute demo</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-sm font-medium text-gray-700">Personalized for you</p>
          </div>
          <div className="text-center">
            <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
              <Shield className="h-6 w-6 text-pink-600" />
            </div>
            <p className="text-sm font-medium text-gray-700">No commitment</p>
          </div>
        </div>

        {/* Demo Form */}
        <DemoForm />

        {/* FAQ Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Have questions before booking?{' '}
            <a href="/contact" className="text-purple-600 hover:text-purple-700 font-medium">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}