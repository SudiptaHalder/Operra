// 'use client'

// import { useState } from 'react'
// import { Send, AlertCircle, Check } from 'lucide-react'

// interface ContactFormData {
//   firstName: string
//   lastName: string
//   email: string
//   phone: string
//   company: string
//   teamSize: string
//   interest: string
//   message: string
//   newsletter: boolean
// }

// interface FormErrors {
//   firstName?: string
//   lastName?: string
//   email?: string
//   message?: string
//   submit?: string
// }

// export default function ContactForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [errors, setErrors] = useState<FormErrors>({})
  
//   const [formData, setFormData] = useState<ContactFormData>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     company: '',
//     teamSize: '',
//     interest: '',
//     message: '',
//     newsletter: false
//   })

//   const teamSizes = [
//     '1-5 employees',
//     '6-15 employees',
//     '16-30 employees',
//     '31-50 employees',
//     '51-100 employees',
//     '101-200 employees',
//     '200+ employees'
//   ]

//   const interests = [
//     'HR Management',
//     'Vendor Management',
//     'Business Dashboard',
//     'Employee Onboarding',
//     'Payroll Tracking',
//     'Multiple Products',
//     'Enterprise Solution',
//     'Partnership Inquiry',
//     'General Question'
//   ]

//   const validateForm = (): boolean => {
//     const newErrors: FormErrors = {}
    
//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required'
//     }
    
//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required'
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required'
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email'
//     }
    
//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required'
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = 'Message must be at least 10 characters'
//     }
    
//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value, type } = e.target
//     const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }))
    
//     if (errors[name as keyof FormErrors]) {
//       setErrors(prev => ({ ...prev, [name]: undefined }))
//     }
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
    
//     if (!validateForm()) {
//       return
//     }
    
//     setIsSubmitting(true)
    
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500))
      
//       // Store in localStorage for demo
//       const contacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
//       contacts.push({
//         ...formData,
//         submittedAt: new Date().toISOString(),
//         status: 'new'
//       })
//       localStorage.setItem('contactSubmissions', JSON.stringify(contacts))
      
//       setIsSubmitted(true)
      
//       // Reset form
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         company: '',
//         teamSize: '',
//         interest: '',
//         message: '',
//         newsletter: false
//       })
      
//     } catch (error) {
//       setErrors({ submit: 'Something went wrong. Please try again.' })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   if (isSubmitted) {
//     return (
//       <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-xl text-center">
//         <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//           <Check className="h-10 w-10 text-green-600" />
//         </div>
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
//         <p className="text-lg text-gray-600 mb-8">
//           Thank you for reaching out. Our team will get back to you within 24 hours.
//         </p>
//         <button
//           onClick={() => setIsSubmitted(false)}
//           className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
//         >
//           Send another message
//         </button>
//       </div>
//     )
//   }

//   return (
//     <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
//       <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
//       <p className="text-gray-600 mb-8">
//         Fill out the form below and we'll respond within 24 hours.
//       </p>

//       {errors.submit && (
//         <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
//           <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
//           <p className="text-red-600">{errors.submit}</p>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Name Fields */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
//               First Name *
//             </label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 rounded-lg border ${
//                 errors.firstName ? 'border-red-500' : 'border-gray-300'
//               } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
//               placeholder="John"
//             />
//             {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
//           </div>

//           <div>
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
//               Last Name *
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 rounded-lg border ${
//                 errors.lastName ? 'border-red-500' : 'border-gray-300'
//               } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
//               placeholder="Doe"
//             />
//             {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
//           </div>
//         </div>

//         {/* Email and Phone */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//               Email Address *
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className={`w-full px-4 py-3 rounded-lg border ${
//                 errors.email ? 'border-red-500' : 'border-gray-300'
//               } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
//               placeholder="john@company.com"
//             />
//             {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//           </div>

//           <div>
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//               Phone Number 
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//               placeholder="(555) 123-4567"
//             />
//           </div>
//         </div>

//         {/* Company and Team Size */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
//               Company Name
//             </label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//               placeholder="Your Business LLC"
//             />
//           </div>

//           <div>
//             <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
//               Team Size
//             </label>
//             <select
//               id="teamSize"
//               name="teamSize"
//               value={formData.teamSize}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//             >
//               <option value="">Select team size</option>
//               {teamSizes.map(size => (
//                 <option key={size} value={size}>{size}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Interest */}
//         <div>
//           <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
//             I'm interested in
//           </label>
//           <select
//             id="interest"
//             name="interest"
//             value={formData.interest}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//           >
//             <option value="">Select an option</option>
//             {interests.map(interest => (
//               <option key={interest} value={interest}>{interest}</option>
//             ))}
//           </select>
//         </div>

//         {/* Message */}
//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//             Message *
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={5}
//             className={`w-full px-4 py-3 rounded-lg border ${
//               errors.message ? 'border-red-500' : 'border-gray-300'
//             } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
//             placeholder="Tell us how we can help you..."
//           />
//           {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
//         </div>

//         {/* Newsletter */}
//         <div className="flex items-center gap-3">
//           <input
//             type="checkbox"
//             id="newsletter"
//             name="newsletter"
//             checked={formData.newsletter}
//             onChange={handleChange}
//             className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
//           />
//           <label htmlFor="newsletter" className="text-sm text-gray-600">
//             Subscribe to our newsletter for tips and updates
//           </label>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//         >
//           {isSubmitting ? (
//             <>
//               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//               Sending...
//             </>
//           ) : (
//             <>
//               Send Message
//               <Send className="h-5 w-5" />
//             </>
//           )}
//         </button>

//         <p className="text-xs text-gray-400 text-center">
//           By submitting this form, you agree to our privacy policy and terms of service.
//           We'll respond within 24 hours.
//         </p>
//       </form>
//     </div>
//   )
// }
'use client'

import { useState } from 'react'
import { Send, AlertCircle, Check } from 'lucide-react'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  teamSize: string
  interest: string
  message: string
  newsletter: boolean
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  message?: string
  submit?: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '',
    interest: '',
    message: '',
    newsletter: false
  })

  const teamSizes = [
    '1-5 employees',
    '6-15 employees',
    '16-30 employees',
    '31-50 employees',
    '51-100 employees',
    '101-200 employees',
    '200+ employees'
  ]

  const interests = [
    'HR Management',
    'Vendor Management',
    'Business Dashboard',
    'Employee Onboarding',
    'Payroll Tracking',
    'Multiple Products',
    'Enterprise Solution',
    'Partnership Inquiry',
    'General Question'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
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
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const contacts = JSON.parse(localStorage.getItem('contactSubmissions') || '[]')
      contacts.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'new'
      })
      localStorage.setItem('contactSubmissions', JSON.stringify(contacts))
      
      setIsSubmitted(true)
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        teamSize: '',
        interest: '',
        message: '',
        newsletter: false
      })
      
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-xl text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below and we'll respond within 24 hours.
      </p>

      {errors.submit && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
          <p className="text-red-600">{errors.submit}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              placeholder="John"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
              placeholder="Doe"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
          </div>
        </div>

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
              placeholder="john@company.com"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Your Business LLC"
            />
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

        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
            I'm interested in
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option value="">Select an option</option>
            {interests.map(interest => (
              <option key={interest} value={interest}>{interest}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
            placeholder="Tell us how we can help you..."
          />
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-600"
          />
          <label htmlFor="newsletter" className="text-sm text-gray-600">
            Subscribe to our newsletter for tips and updates
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="h-5 w-5" />
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
          We'll respond within 24 hours.
        </p>
      </form>
    </div>
  )
}