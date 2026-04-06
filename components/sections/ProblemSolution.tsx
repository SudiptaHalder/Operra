'use client'

import { X, Check } from 'lucide-react'

export function ProblemSolution() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-64 h-64" style={{ 
        background: 'radial-gradient(circle, #98259810 0%, transparent 70%)' 
      }} />
      <div className="absolute bottom-0 right-0 w-64 h-64" style={{ 
        background: 'radial-gradient(circle, #E491C910 0%, transparent 70%)' 
      }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From chaos to clarity
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See how Trezbo transforms your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 opacity-10" style={{
              background: 'radial-gradient(circle, #982598 0%, transparent 70%)'
            }} />
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: '#982598' }}>
              <X className="h-5 w-5" />
              Before Trezbo
            </h3>
            <div className="space-y-4">
              {[
                'Hours spent on manual data entry',
                'Spreadsheets with outdated information',
                'Missed contract renewals',
                'Payroll calculation errors',
                'No visibility into business metrics'
              ].map((item) => (
                <div 
                  key={item} 
                  className="flex items-center gap-3 p-4 rounded-lg border"
                  style={{ 
                    backgroundColor: '#98259808',
                    borderColor: '#98259820'
                  }}
                >
                  <X className="h-5 w-5 flex-shrink-0" style={{ color: '#982598' }} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 opacity-10" style={{
              background: 'radial-gradient(circle, #E491C9 0%, transparent 70%)'
            }} />
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ color: '#15173D' }}>
              <Check className="h-5 w-5" />
              With Trezbo
            </h3>
            <div className="space-y-4">
              {[
                'Automated data entry and workflows',
                'Real-time updates across all tools',
                'Automated renewal reminders',
                'Error-free payroll preparation',
                'Comprehensive business dashboard'
              ].map((item) => (
                <div 
                  key={item} 
                  className="flex items-center gap-3 p-4 rounded-lg border"
                  style={{ 
                    backgroundColor: '#E491C908',
                    borderColor: '#E491C920'
                  }}
                >
                  <Check className="h-5 w-5 flex-shrink-0" style={{ color: '#E491C9' }} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '10h+', label: 'Saved per week' },
            { number: '100%', label: 'Data accuracy' },
            { number: '500+', label: 'Happy businesses' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-xl border"
              style={{ 
                background: 'linear-gradient(135deg, #98259808 0%, #E491C908 100%)',
                borderColor: index === 0 ? '#98259840' : index === 1 ? '#E491C940' : '#15173D40'
              }}
            >
              <div 
                className="text-3xl font-bold mb-2"
                style={{ 
                  background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {stat.number}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}