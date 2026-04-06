'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    content: "We were managing everything in spreadsheets. Trezbo saved us hours every week and gave us back time to focus on our customers.",
    author: "Sarah Chen",
    role: "Owner, Chen's Bakery",
    rating: 5,
    company: "Retail",
    initials: "SC"
  },
  {
    content: "The vendor management feature alone is worth it. We haven't missed a single contract renewal since switching to Trezbo.",
    author: "Mike Rodriguez",
    role: "Founder, Rodriguez Plumbing",
    rating: 5,
    company: "Construction",
    initials: "MR"
  },
  {
    content: "Simple, affordable, and exactly what we needed. No enterprise complexity, just the features we actually use.",
    author: "Lisa Thompson",
    role: "Director, Thompson Marketing",
    rating: 5,
    company: "Marketing",
    initials: "LT"
  },
  {
    content: "Payroll used to take me half a day. Now it's 30 minutes. My team loves the time tracking feature.",
    author: "David Kim",
    role: "Owner, Kim's Landscaping",
    rating: 5,
    company: "Landscaping",
    initials: "DK"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#98259808] via-[#E491C908] to-[#15173D08]" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by small business owners
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See what our customers have to say about Trezbo
          </p>
        </div>

        {/* Rating summary */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-current" style={{ color: '#E491C9' }} />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900">4.9 out of 5</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Based on 500+ reviews</p>
        </div>

        {/* Testimonials grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative bg-white p-8 rounded-xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ 
                borderColor: index % 2 === 0 ? '#98259820' : '#E491C920',
                background: 'linear-gradient(135deg, white 0%, white 100%)'
              }}
            >
              {/* Quote icon */}
              <Quote 
                className="absolute top-6 right-6 h-8 w-8 opacity-10"
                style={{ color: index % 2 === 0 ? '#982598' : '#E491C9' }}
              />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#E491C9' }} />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-600 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div 
                  className="h-12 w-12 rounded-full flex items-center justify-center text-white font-semibold text-lg"
                  style={{
                    background: `linear-gradient(135deg, ${index % 2 === 0 ? '#982598' : '#E491C9'} 0%, ${index % 2 === 0 ? '#E491C9' : '#15173D'} 100%)`
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company logos */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          {['Retail', 'Construction', 'Marketing', 'Healthcare', 'Tech', 'Hospitality'].map((industry) => (
            <span 
              key={industry} 
              className="text-sm font-medium px-4 py-2 rounded-full border"
              style={{ 
                color: '#15173D',
                borderColor: '#98259820',
                backgroundColor: '#98259808'
              }}
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}