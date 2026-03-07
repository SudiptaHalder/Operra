'use client'

import { useState, useEffect } from 'react'
import { Calendar, Mail, Phone, Building2, Users, Package } from 'lucide-react'

interface Submission {
  name: string
  businessName: string
  businessType: string
  teamSize: string
  productInterest: string
  email: string
  phone: string
  message: string
  submittedAt: string
  status: string
}

export default function DemoSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('demoSubmissions')
    if (stored) {
      setSubmissions(JSON.parse(stored))
    }
  }, [])

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Demo Submissions</h1>
        
        {submissions.length === 0 ? (
          <p className="text-gray-500">No submissions yet.</p>
        ) : (
          <div className="space-y-6">
            {submissions.map((sub, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">{sub.name}</h2>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                    {sub.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building2 className="h-4 w-4" />
                    <span>{sub.businessName}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span>{sub.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{sub.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{sub.teamSize}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                    {sub.businessType}
                  </span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                    {sub.productInterest}
                  </span>
                </div>
                
                {sub.message && (
                  <p className="text-gray-600 text-sm bg-gray-50 p-3 rounded-lg">
                    "{sub.message}"
                  </p>
                )}
                
                <p className="text-xs text-gray-400 mt-4">
                  Submitted: {new Date(sub.submittedAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}