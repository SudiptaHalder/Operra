'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Check, AlertCircle } from 'lucide-react'

export default function UnsubscribePage() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setError('Email is required')
      return
    }
    
    setIsSubmitting(true)
    setError('')
    
    // Simulate unsubscribe (in production, you'd call an API)
    setTimeout(() => {
      setIsSuccess(true)
      setIsSubmitting(false)
      setEmail('')
    }, 1000)
  }

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-md px-6 py-12">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Unsubscribe from Newsletter</h1>
            <p className="text-gray-600 mt-2">
              We're sorry to see you go. Enter your email to unsubscribe.
            </p>
          </div>

          {isSuccess ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Successfully Unsubscribed</h2>
              <p className="text-gray-600 mb-6">
                You've been removed from our newsletter list.
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : 'Unsubscribe'}
              </button>

              <p className="text-center">
                <Link href="/" className="text-sm text-purple-600 hover:text-purple-700">
                  Changed your mind? Return to site
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}