'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Calendar, Shield } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Main gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #15173D 0%, #982598 50%, #E491C9 100%)',
          opacity: 0.95
        }}
      />
      
      {/* Animated overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white'
          }}
        >
          <Sparkles className="h-4 w-4" />
          <span>Start your free demo today</span>
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Ready to transform your{' '}
          <span className="block mt-2" style={{ color: '#E491C9' }}>
            business operations?
          </span>
        </h2>
        
        <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
          Join 500+ small business owners who've simplified their operations and gained back precious time with Trezbo.
        </p>

        {/* Features */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Calendar className="h-4 w-4" style={{ color: '#E491C9' }} />
            <span>Demo in 1 week</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/30" />
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Shield className="h-4 w-4" style={{ color: '#E491C9' }} />
            <span>No credit card</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book-demo"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-[#15173D] bg-white hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Book your demo
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(4px)'
            }}
          >
            Contact sales
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            { number: '500+', label: 'Businesses' },
            { number: '98%', label: 'Satisfaction' },
            { number: '24/7', label: 'Support' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}