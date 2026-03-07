import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, Tag, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Operra',
  description: 'Tips, guides, and resources for small business owners. Learn how to manage employees, vendors, and operations more effectively.',
}

const blogPosts = [
  {
    title: 'How to manage employees without HR software',
    excerpt: 'Stop using spreadsheets for employee management. Learn the simple way to track time-off, documents, and performance.',
    author: 'Alex Rivera',
    authorRole: 'Founder & CEO',
    date: 'Mar 15, 2024',
    readTime: '5 min read',
    category: 'HR Management',
    slug: 'manage-employees-without-hr-software',
    image: '/blog/hr-management.jpg',
    tags: ['HR', 'Employees', 'Productivity']
  },
  {
    title: 'Vendor management tips for small businesses',
    excerpt: 'Stop missing contract renewals and losing track of payments. Simple strategies to manage vendors effectively.',
    author: 'Maya Patel',
    authorRole: 'Head of Product',
    date: 'Mar 10, 2024',
    readTime: '4 min read',
    category: 'Vendor Management',
    slug: 'vendor-management-tips-small-business',
    image: '/blog/vendor-management.jpg',
    tags: ['Vendors', 'Contracts', 'Operations']
  },
  {
    title: 'Payroll mistakes that cost small businesses',
    excerpt: 'Avoid these common payroll errors that lead to frustrated employees and compliance issues.',
    author: 'James Chen',
    authorRole: 'Lead Engineer',
    date: 'Mar 5, 2024',
    readTime: '6 min read',
    category: 'Payroll',
    slug: 'payroll-mistakes-small-business',
    image: '/blog/payroll.jpg',
    tags: ['Payroll', 'Finance', 'Compliance']
  },
  {
    title: 'Employee onboarding checklist for small teams',
    excerpt: 'A step-by-step guide to onboarding new employees without the chaos. Make new hires productive from day one.',
    author: 'Sarah Okonkwo',
    authorRole: 'Customer Success',
    date: 'Feb 28, 2024',
    readTime: '7 min read',
    category: 'Onboarding',
    slug: 'employee-onboarding-checklist-small-teams',
    image: '/blog/onboarding.jpg',
    tags: ['Onboarding', 'HR', 'Training']
  },
  {
    title: 'When to upgrade from spreadsheets to software',
    excerpt: 'Know the signs that it\'s time to move beyond spreadsheets and invest in proper business management tools.',
    author: 'Alex Rivera',
    authorRole: 'Founder & CEO',
    date: 'Feb 20, 2024',
    readTime: '5 min read',
    category: 'Business Tips',
    slug: 'when-to-upgrade-from-spreadsheets',
    image: '/blog/spreadsheets.jpg',
    tags: ['Growth', 'Tools', 'Productivity']
  },
  {
    title: 'Small business dashboard metrics that matter',
    excerpt: 'Stop tracking vanity metrics. Focus on the numbers that actually help you make better business decisions.',
    author: 'Maya Patel',
    authorRole: 'Head of Product',
    date: 'Feb 12, 2024',
    readTime: '6 min read',
    category: 'Analytics',
    slug: 'small-business-dashboard-metrics',
    image: '/blog/dashboard.jpg',
    tags: ['Analytics', 'Metrics', 'Growth']
  },
  {
    title: 'How to track vendor performance effectively',
    excerpt: 'Simple ways to evaluate your vendors and make sure you\'re getting the best value for your money.',
    author: 'James Chen',
    authorRole: 'Lead Engineer',
    date: 'Feb 5, 2024',
    readTime: '4 min read',
    category: 'Vendor Management',
    slug: 'track-vendor-performance',
    image: '/blog/vendor-performance.jpg',
    tags: ['Vendors', 'Performance', 'Savings']
  },
  {
    title: 'Time tracking for small business: Best practices',
    excerpt: 'Implement simple time tracking that your employees will actually use. No complicated timesheets.',
    author: 'Sarah Okonkwo',
    authorRole: 'Customer Success',
    date: 'Jan 28, 2024',
    readTime: '5 min read',
    category: 'Payroll',
    slug: 'time-tracking-best-practices',
    image: '/blog/time-tracking.jpg',
    tags: ['Time Tracking', 'Payroll', 'Productivity']
  },
  {
    title: 'HR compliance basics for small business owners',
    excerpt: 'Stay compliant with labor laws without hiring an HR department. Simple guidelines for small teams.',
    author: 'Alex Rivera',
    authorRole: 'Founder & CEO',
    date: 'Jan 20, 2024',
    readTime: '8 min read',
    category: 'HR Management',
    slug: 'hr-compliance-basics',
    image: '/blog/compliance.jpg',
    tags: ['HR', 'Compliance', 'Legal']
  }
]

const categories = [
  { name: 'All', count: 9 },
  { name: 'HR Management', count: 2 },
  { name: 'Vendor Management', count: 2 },
  { name: 'Payroll', count: 2 },
  { name: 'Onboarding', count: 1 },
  { name: 'Business Tips', count: 1 },
  { name: 'Analytics', count: 1 }
]

const popularTags = [
  'HR', 'Employees', 'Vendors', 'Payroll', 'Productivity',
  'Onboarding', 'Compliance', 'Growth', 'Analytics', 'Time Tracking'
]

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15173D05] via-[#98259805] to-[#E491C905]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: 'linear-gradient(135deg, #98259810 0%, #E491C910 50%, #15173D10 100%)',
                border: '1px solid #98259820',
                color: '#15173D'
              }}
            >
              <Calendar className="h-4 w-4" style={{ color: '#982598' }} />
              Resources for small business owners
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              The{' '}
              <span style={{ 
                background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Operra Blog
              </span>
            </h1>
            
            <p className="mt-4 text-lg text-gray-600">
              Tips, guides, and resources to help you run your small business better.
              No jargon, no fluff — just practical advice.
            </p>
          </div>

          {/* Search bar */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#982598] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-gray-600">{category.name}</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 hover:bg-[#98259810] hover:text-[#982598] hover:border-[#98259820] cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div 
                  className="rounded-xl p-6 text-white"
                  style={{
                    background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)'
                  }}
                >
                  <h3 className="text-lg font-semibold mb-2">Get updates</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Subscribe to get new articles delivered to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 mb-2"
                  />
                  <button
                    className="w-full bg-white text-[#982598] px-3 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image placeholder with gradient */}
                    <div 
                      className="h-48 w-full"
                      style={{
                        background: index % 3 === 0 
                          ? 'linear-gradient(135deg, #98259820 0%, #E491C920 100%)'
                          : index % 3 === 1
                          ? 'linear-gradient(135deg, #15173D20 0%, #98259820 100%)'
                          : 'linear-gradient(135deg, #E491C920 0%, #14B8A620 100%)'
                      }}
                    >
                      <div className="h-full w-full flex items-center justify-center">
                        <span className="text-4xl opacity-30">📄</span>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="h-3 w-3" style={{ color: '#982598' }} />
                        <span className="text-xs font-medium" style={{ color: '#982598' }}>
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[#982598] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Meta info */}
                      <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Author */}
                      <div className="mt-4 flex items-center gap-2 pt-4 border-t border-gray-100">
                        <div 
                          className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium text-white"
                          style={{
                            background: index % 2 === 0 ? '#982598' : '#E491C9'
                          }}
                        >
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.authorRole}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center gap-2">
                {[1, 2, 3, '...', 5].map((page, i) => (
                  <button
                    key={i}
                    className={`h-10 w-10 rounded-lg text-sm font-medium transition-colors ${
                      page === 1
                        ? 'text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    style={page === 1 ? { background: '#982598' } : undefined}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Editor's pick
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our most popular article this month
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog/when-to-upgrade-from-spreadsheets"
              className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div 
                  className="h-64 md:h-full"
                  style={{
                    background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)'
                  }}
                />
                <div className="p-8">
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                    style={{
                      background: '#98259810',
                      color: '#982598',
                      border: '1px solid #98259820'
                    }}
                  >
                    Featured Article
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#982598] transition-colors">
                    When to upgrade from spreadsheets to software
                  </h3>
                  <p className="mt-4 text-gray-600">
                    Know the signs that it's time to move beyond spreadsheets and invest in proper business management tools. Learn from real small business owners who made the switch.
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      Feb 20, 2024
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      5 min read
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[#982598] font-medium">
                    Read article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div 
            className="relative rounded-2xl p-12 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #15173D 0%, #982598 50%, #E491C9 100%)'
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Get helpful articles delivered
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Join 1,000+ small business owners who get our weekly newsletter.
                No spam, unsubscribe anytime.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <button
                  className="px-6 py-3 bg-white text-[#982598] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              
              <p className="mt-4 text-sm text-white/70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}