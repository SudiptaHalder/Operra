'use client'

import { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'

interface FAQClientProps {
  faqCategories: {
    name: string
    icon: string
    questions: {
      q: string
      a: string
    }[]
  }[]
}

export default function FAQClient({ faqCategories }: FAQClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [openCategories, setOpenCategories] = useState<string[]>(faqCategories.map(c => c.name))

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(c => c !== categoryName)
        : [...prev, categoryName]
    )
  }

  const filteredFaqs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <section className="pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-sm"
          />
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <h2 className="text-lg font-semibold text-gray-900">{category.name}</h2>
                  <span className="text-sm text-gray-400">({category.questions.length})</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    openCategories.includes(category.name) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openCategories.includes(category.name) && (
                <div className="px-6 pb-4">
                  {category.questions.map((faq, index) => (
                    <div
                      key={index}
                      className="py-4 border-t border-gray-100 first:border-t-0"
                    >
                      <h3 className="font-medium text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-gray-600 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No results found for "{searchQuery}"</p>
          </div>
        )}
      </div>
    </section>
  )
}