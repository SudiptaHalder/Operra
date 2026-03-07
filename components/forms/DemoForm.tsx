'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
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
  const router = useRouter()
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
      newErrors.email = 'Email is invalid'
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
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      // In production, replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Store in localStorage for demo purposes
      const submissions = JSON.parse(localStorage.getItem('demoSubmissions') || '[]')
      submissions.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'pending'
      })
      localStorage.setItem('demoSubmissions', JSON.stringify(submissions))
      
      setIsSubmitted(true)
      
      // Reset form
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
      
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-xl">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Demo Request Received!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your interest in Operra. We'll contact you within 1 week to schedule your personalized demo.
        </p>
        <div className="bg-purple-50 rounded-xl p-6 mb-8 inline-block mx-auto">
          <div className="flex items-center gap-3 text-purple-700">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">Demo scheduled within 7 days</span>
          </div>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Request another demo
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Book a Demo</h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below and we'll schedule a personalized demo within 1 week.
      </p>

      {errors.submit && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
          <p className="text-red-600">{errors.submit}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Business Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              placeholder="John Doe"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
              Business Name *
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.businessName ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              placeholder="Your Business LLC"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              placeholder="(555) 123-4567"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Tell us about your business and what you're looking for..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Submitting...
            </>
          ) : (
            <>
              Request Demo
              <Send className="h-5 w-5" />
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          By submitting this form, you agree to our privacy policy and terms of service.
          We'll contact you within 1 week to schedule your demo.
        </p>
      </form>
    </div>
  )
}