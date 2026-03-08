'use client'

import { useState } from 'react'
import { Check, AlertCircle } from 'lucide-react'

interface SubscribeButtonProps {
  variant?: 'footer' | 'blog' | 'sidebar'
}

export default function SubscribeButton({ variant = 'footer' }: SubscribeButtonProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return
    
    setIsSubmitting(true)
    setMessage(null)
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setMessage({ type: 'success', text: 'Thanks for subscribing!' })
      setEmail('')
      
      // Clear success message after 5 seconds
      setTimeout(() => setMessage(null), 5000)
      
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error instanceof Error ? error.message : 'Something went wrong' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      {message && (
        <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
          message.type === 'success' 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-red-50 border border-red-200'
        }`}>
          {message.type === 'success' ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-500" />
          )}
          <p className={`text-sm ${
            message.type === 'success' ? 'text-green-600' : 'text-red-600'
          }`}>
            {message.text}
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={`flex-1 px-4 py-3 ${
            variant === 'footer' 
              ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-500' 
              : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {variant === 'footer' && (
        <p className="text-xs text-gray-500 mt-3">
          No spam. Unsubscribe anytime.
        </p>
      )}
    </div>
  )
}