'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ChevronRight, 
  Eye, 
  Clock, 
  ThumbsUp, 
  BookOpen, 
  Users, 
  Truck, 
  TrendingUp, 
  FileText, 
  DollarSign,
  Calendar,
  Sparkles,
  Award
} from 'lucide-react'

interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  categorySlug: string
  readTime: string
  views: string
  likes: number
  author: string
  date: string
  slug: string
  icon: any
  color: string
  trending?: boolean
  popular?: boolean
}

const popularArticles: Article[] = [
  {
    id: '1',
    title: 'How to Add Employees to HR Management',
    excerpt: 'Step-by-step guide to adding new employees, setting up profiles, and managing permissions.',
    category: 'HR Management',
    categorySlug: 'hr-management',
    readTime: '5 min',
    views: '2.5k',
    likes: 124,
    author: 'Sarah Chen',
    date: 'Mar 15, 2024',
    slug: 'add-employees-hr-management',
    icon: Users,
    color: 'purple',
    trending: true
  },
  {
    id: '2',
    title: 'Setting Up Contract Renewal Reminders',
    excerpt: 'Never miss a contract renewal again. Learn how to set up automated reminders.',
    category: 'Vendor Management',
    categorySlug: 'vendor-management',
    readTime: '4 min',
    views: '1.8k',
    likes: 98,
    author: 'Mike Rodriguez',
    date: 'Mar 12, 2024',
    slug: 'contract-renewal-reminders',
    icon: Truck,
    color: 'pink',
    popular: true
  },
  {
    id: '3',
    title: 'Creating Your First Business Dashboard',
    excerpt: 'Learn how to customize your dashboard to see the metrics that matter most.',
    category: 'Business Dashboard',
    categorySlug: 'business-dashboard',
    readTime: '6 min',
    views: '1.6k',
    likes: 87,
    author: 'Maya Patel',
    date: 'Mar 10, 2024',
    slug: 'first-business-dashboard',
    icon: TrendingUp,
    color: 'purple'
  },
  {
    id: '4',
    title: 'Employee Onboarding Checklist Template',
    excerpt: 'Ready-to-use onboarding checklist that ensures nothing falls through the cracks.',
    category: 'Employee Onboarding',
    categorySlug: 'employee-onboarding',
    readTime: '3 min',
    views: '1.4k',
    likes: 156,
    author: 'Lisa Thompson',
    date: 'Mar 8, 2024',
    slug: 'onboarding-checklist-template',
    icon: FileText,
    color: 'pink',
    trending: true
  },
  {
    id: '5',
    title: 'Exporting Timesheets to Payroll Services',
    excerpt: 'How to export time tracking data to Gusto, ADP, QuickBooks, and more.',
    category: 'Payroll Tracking',
    categorySlug: 'payroll-tracking',
    readTime: '7 min',
    views: '1.2k',
    likes: 76,
    author: 'James Chen',
    date: 'Mar 5, 2024',
    slug: 'export-timesheets-payroll',
    icon: DollarSign,
    color: 'purple'
  },
  {
    id: '6',
    title: 'Understanding Operra Pricing Plans',
    excerpt: 'Detailed breakdown of our pricing tiers and how to choose the right plan.',
    category: 'Account & Billing',
    categorySlug: 'account-billing',
    readTime: '4 min',
    views: '1.1k',
    likes: 92,
    author: 'Operra Team',
    date: 'Mar 3, 2024',
    slug: 'pricing-plans-explained',
    icon: DollarSign,
    color: 'pink',
    popular: true
  },
  {
    id: '7',
    title: 'Managing Time-Off Requests',
    excerpt: 'Complete guide to setting up time-off policies, approving requests, and tracking balances.',
    category: 'HR Management',
    categorySlug: 'hr-management',
    readTime: '6 min',
    views: '2.2k',
    likes: 145,
    author: 'Sarah Chen',
    date: 'Feb 28, 2024',
    slug: 'manage-time-off-requests',
    icon: Calendar,
    color: 'purple'
  },
  {
    id: '8',
    title: 'Vendor Performance Rating Guide',
    excerpt: 'How to rate vendors, track performance, and make better sourcing decisions.',
    category: 'Vendor Management',
    categorySlug: 'vendor-management',
    readTime: '5 min',
    views: '980',
    likes: 67,
    author: 'Mike Rodriguez',
    date: 'Feb 25, 2024',
    slug: 'vendor-performance-ratings',
    icon: Award,
    color: 'pink'
  }
]

const categories = [
  'All Categories',
  'HR Management',
  'Vendor Management',
  'Business Dashboard',
  'Employee Onboarding',
  'Payroll Tracking',
  'Account & Billing'
]

export default function PopularArticles() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [sortBy, setSortBy] = useState<'popular' | 'recent' | 'trending'>('popular')

  const filteredArticles = selectedCategory === 'All Categories'
    ? popularArticles
    : popularArticles.filter(a => a.category === selectedCategory)

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortBy === 'popular') return parseInt(b.views) - parseInt(a.views)
    if (sortBy === 'trending') return (b.trending ? 1 : 0) - (a.trending ? 1 : 0)
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-600" />
              Popular Articles
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Most read articles this month
            </p>
          </div>
          
          {/* Sort Options */}
          <div className="flex gap-2">
            <button
              onClick={() => setSortBy('popular')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                sortBy === 'popular'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Most Popular
            </button>
            <button
              onClick={() => setSortBy('trending')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                sortBy === 'trending'
                  ? 'bg-pink-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Trending
            </button>
            <button
              onClick={() => setSortBy('recent')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                sortBy === 'recent'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Recent
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles List */}
      <div className="divide-y divide-gray-100">
        {sortedArticles.map((article, index) => {
          const Icon = article.icon
          return (
            <Link
              key={article.id}
              href={`/help/${article.categorySlug}/${article.slug}`}
              className="block p-6 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`bg-${article.color}-100 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`h-6 w-6 text-${article.color}-600`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`text-xs font-medium text-${article.color}-600 bg-${article.color}-50 px-2 py-1 rounded-full`}>
                      {article.category}
                    </span>
                    {article.trending && (
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        Trending
                      </span>
                    )}
                    {article.popular && (
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-1">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {article.views} views
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" />
                      {article.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {article.author}
                    </div>
                    <div>{article.date}</div>
                  </div>
                </div>

                {/* Arrow */}
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0" />
              </div>
            </Link>
          )
        })}
      </div>

      {/* View All Link */}
      <div className="p-6 border-t border-gray-100 bg-gray-50 text-center">
        <Link
          href="/help"
          className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700"
        >
          View all articles in Help Center
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}