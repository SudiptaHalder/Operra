'use client'

import { useState } from 'react'
import { Calendar, Check, Send, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  businessName: string
  businessType: string
  teamSize: string
  productInterest: string
  email: string
  phone: string
  message: string
}

interface FormErrors {
  name?: string
  businessName?: string
  email?: string
  phone?: string
  submit?: string
}

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    businessType: '',
    teamSize: '',
    productInterest: '',
    email: '',
    phone: '',
    message: ''
  })

  const businessTypes = [
    'Retail',
    'Restaurant',
    'Construction',
    'Marketing Agency',
    'Service Business',
    'Healthcare',
    'Technology',
    'Manufacturing',
    'Other'
  ]

  const teamSizes = [
    '1-5 employees',
    '6-15 employees',
    '16-30 employees',
    '31-50 employees',
    '51-100 employees',
    '101-200 employees',
    '200+ employees'
  ]

  const products = [
    'HR Management',
    'Vendor Management',
    'Business Dashboard',
    'Employee Onboarding',
    'Payroll Tracking',
    'Multiple Products'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  if (!validateForm()) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  
  setIsSubmitting(true)
  setErrors({})
  
  try {
    console.log('📝 Submitting form data:', JSON.stringify(formData, null, 2))
    
    const response = await fetch('/api/send-demo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    console.log('📨 Response status:', response.status)
    console.log('📨 Response headers:', Object.fromEntries(response.headers.entries()))

    let responseText = ''
    let data

    try {
      responseText = await response.text()
      console.log('📨 Raw response:', responseText)
      
      if (responseText) {
        data = JSON.parse(responseText)
        console.log('📨 Parsed response:', data)
      }
    } catch (parseError) {
      console.error('❌ Failed to parse response:', parseError)
      console.error('❌ Response text:', responseText)
      throw new Error('Invalid server response format')
    }

    if (!response.ok) {
      const errorMessage = data?.error || data?.message || `Server error (${response.status})`
      console.error('❌ Server returned error:', { status: response.status, data })
      throw new Error(errorMessage)
    }
    
    // Success!
    console.log('✅ Form submitted successfully')
    setIsSubmitted(true)
    
    setFormData({
      name: '',
      businessName: '',
      businessType: '',
      teamSize: '',
      productInterest: '',
      email: '',
      phone: '',
      message: ''
    })
    
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
  } catch (error) {
    console.error('❌ Form submission error:', error)
    
    setErrors({ 
      submit: error instanceof Error 
        ? error.message 
        : 'Something went wrong. Please email us directly at sales@operra.com' 
    })
    
    window.scrollTo({ top: 0, behavior: 'smooth' })
    
  } finally {
    setIsSubmitting(false)
  }
}
  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 text-center border border-gray-200 shadow-xl">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Demo Request Received!
        </h2>
        
        <p className="text-lg text-gray-600 mb-6">
          Thank you for your interest in Operra. We've sent a confirmation email to{' '}
          <span className="font-medium text-purple-600">{formData.email}</span>
        </p>
        
        <div className="bg-purple-50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center gap-3 text-purple-700 mb-4">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">What happens next?</span>
          </div>
          <ul className="text-left space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">1.</span>
              <span>Our team will review your request within <strong>24 hours</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">2.</span>
              <span>We'll contact you to schedule your <strong>30-minute demo</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">3.</span>
              <span>Your demo will be scheduled within <strong>1 week</strong></span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Didn't receive an email? Check your spam folder or contact us directly at{' '}
            <a 
              href="mailto:sales@operra.com" 
              className="text-purple-600 hover:text-purple-700 font-medium hover:underline"
            >
              sales@operra.com
            </a>
          </p>
          
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Request another demo
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 lg:p-10 border border-gray-200 shadow-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Book a Demo</h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below and we'll schedule a personalized demo within 1 week.
      </p>

      {errors.submit && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-red-600 text-sm">{errors.submit}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* Name and Business Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors`}
              placeholder="John Doe"
              disabled={isSubmitting}
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.businessName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors`}
              placeholder="Your Business LLC"
              disabled={isSubmitting}
            />
            {errors.businessName && <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>}
          </div>
        </div>

        {/* Business Type and Team Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
              Business Type
            </label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
              disabled={isSubmitting}
            >
              <option value="">Select business type</option>
              {businessTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
              Team Size
            </label>
            <select
              id="teamSize"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
              disabled={isSubmitting}
            >
              <option value="">Select team size</option>
              {teamSizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Interest */}
        <div>
          <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-2">
            Product Interest
          </label>
          <select
            id="productInterest"
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
            disabled={isSubmitting}
          >
            <option value="">Select a product</option>
            {products.map(product => (
              <option key={product} value={product}>{product}</option>
            ))}
          </select>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors`}
              placeholder="you@example.com"
              disabled={isSubmitting}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors`}
              placeholder="(555) 123-4567"
              disabled={isSubmitting}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Message <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors"
            placeholder="Tell us about your business and what you're looking for..."
            disabled={isSubmitting}
          />
        </div>

        {/* Form Footer */}
        <div className="space-y-4">
          <p className="text-xs text-gray-400">
            <span className="text-red-500">*</span> Required fields
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Processing...
              </>
            ) : (
              <>
                Request Demo
                <Send className="h-5 w-5" />
              </>
            )}
          </button>

          <p className="text-xs text-gray-400 text-center">
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</a>{' '}
            and{' '}
            <a href="/terms" className="text-purple-600 hover:underline">Terms of Service</a>.
            We'll contact you within 1 week to schedule your demo.
          </p>
        </div>
      </form>
    </div>
  )
}