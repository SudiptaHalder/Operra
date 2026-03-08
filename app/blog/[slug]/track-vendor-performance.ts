export const trackVendorData = {
  'track-vendor-performance': {
    title: 'How to track vendor performance effectively',
    excerpt: 'Simple ways to evaluate your vendors and make sure you\'re getting the best value for your money.',
    content: `
      <div class="space-y-8">
        <p class="lead text-xl text-gray-700 leading-relaxed">Your vendors are critical partners in your business success. But how do you know if they're performing well? Gut feelings aren't enough. You need data.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
          <p class="text-blue-800 font-medium">📊 Companies that track vendor performance regularly save an average of 12% on vendor costs.</p>
        </div>
        
        <h2>Why track vendor performance?</h2>
        
        <p>Regular vendor evaluation helps you:</p>
        
        <ul class="space-y-2">
          <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Identify underperforming vendors before they cause problems</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Negotiate better terms with data to back your position</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Make informed decisions about renewals</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Build stronger relationships with top performers</li>
          <li class="flex items-start gap-2"><span class="text-green-500">✓</span> Reduce costs by consolidating with better vendors</li>
        </ul>
        
        <h2>Key metrics to track</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-purple-600 text-sm">1</span>
              Quality
            </h3>
            <p class="text-sm text-gray-600">Defect rates, customer complaints, returns, compliance with specifications</p>
          </div>
          
          <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-pink-100 rounded flex items-center justify-center text-pink-600 text-sm">2</span>
              Delivery
            </h3>
            <p class="text-sm text-gray-600">On-time delivery percentage, lead time consistency, backorder rates</p>
          </div>
          
          <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-purple-600 text-sm">3</span>
              Pricing
            </h3>
            <p class="text-sm text-gray-600">Price competitiveness, increase frequency, hidden fees, payment term compliance</p>
          </div>
          
          <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-pink-100 rounded flex items-center justify-center text-pink-600 text-sm">4</span>
              Responsiveness
            </h3>
            <p class="text-sm text-gray-600">Response time, issue resolution time, proactive communication</p>
          </div>
        </div>
        
        <h2>Simple rating system</h2>
        
        <p>Create a 1-5 scale for each metric:</p>
        
        <div class="grid grid-cols-5 gap-2 my-4">
          <div class="bg-red-100 p-2 rounded text-center">
            <span class="block font-bold text-red-600">1</span>
            <span class="text-xs">Poor</span>
          </div>
          <div class="bg-orange-100 p-2 rounded text-center">
            <span class="block font-bold text-orange-600">2</span>
            <span class="text-xs">Fair</span>
          </div>
          <div class="bg-yellow-100 p-2 rounded text-center">
            <span class="block font-bold text-yellow-600">3</span>
            <span class="text-xs">Average</span>
          </div>
          <div class="bg-green-100 p-2 rounded text-center">
            <span class="block font-bold text-green-600">4</span>
            <span class="text-xs">Good</span>
          </div>
          <div class="bg-purple-100 p-2 rounded text-center">
            <span class="block font-bold text-purple-600">5</span>
            <span class="text-xs">Excellent</span>
          </div>
        </div>
        
        <h2>Tracking template</h2>
        
        <div class="bg-gray-50 p-4 rounded-xl overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-2 px-3">Vendor</th>
                <th class="text-center py-2 px-3">Quality</th>
                <th class="text-center py-2 px-3">Delivery</th>
                <th class="text-center py-2 px-3">Price</th>
                <th class="text-center py-2 px-3">Response</th>
                <th class="text-center py-2 px-3">Overall</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-3 font-medium">ABC Supply</td>
                <td class="text-center py-2 px-3 text-green-600">5</td>
                <td class="text-center py-2 px-3 text-green-600">4</td>
                <td class="text-center py-2 px-3 text-yellow-600">3</td>
                <td class="text-center py-2 px-3 text-green-600">5</td>
                <td class="text-center py-2 px-3 font-bold">4.3</td>
              </tr>
              <tr>
                <td class="py-2 px-3 font-medium">XYZ Logistics</td>
                <td class="text-center py-2 px-3 text-green-600">4</td>
                <td class="text-center py-2 px-3 text-green-600">5</td>
                <td class="text-center py-2 px-3 text-green-600">4</td>
                <td class="text-center py-2 px-3 text-green-600">4</td>
                <td class="text-center py-2 px-3 font-bold">4.3</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white my-10">
          <h3 class="text-2xl font-bold mb-3">Automate vendor tracking</h3>
          <p class="text-white/90 mb-6">Operra Vendor Management makes it easy to track performance and get renewal reminders.</p>
          <a href="/book-demo" class="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Try it free
            <Zap class="w-4 h-4" />
          </a>
        </div>
        
        <h2>When to review</h2>
        
        <ul class="space-y-2">
          <li><strong>Monthly:</strong> Quick check of critical metrics for key vendors</li>
          <li><strong>Quarterly:</strong> Formal review of all active vendors</li>
          <li><strong>Annually:</strong> Comprehensive review before contract renewals</li>
          <li><strong>Event-driven:</strong> After major issues or successes</li>
        </ul>
        
        <h2>Red flags to watch</h2>
        
        <ul class="space-y-2">
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Declining scores over time</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Frequent excuses or blame-shifting</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> High turnover in your account team</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Repeated billing errors</li>
        </ul>
        
        <p>Regular vendor performance tracking takes time, but it pays off in better service, lower costs, and fewer surprises.</p>
      </div>
    `,
    author: 'James Chen',
    authorRole: 'Lead Engineer',
    authorBio: 'James has 12 years of experience building software for small businesses. He specializes in creating reliable, scalable solutions.',
    authorImage: '/authors/james.jpg',
    date: 'Feb 5, 2024',
    readTime: '4 min read',
    category: 'Vendor Management',
    categorySlug: 'vendor-management',
    image: '/blog/vendor-performance.jpg',
    tags: ['Vendors', 'Performance', 'Savings'],
    relatedPosts: ['vendor-management-tips-small-business', 'small-business-dashboard-metrics'],
    likes: 145,
    views: 950,
    comments: 11,
    toc: [
      { id: 'why-track', title: 'Why track vendor performance' },
      { id: 'key-metrics', title: 'Key metrics to track' },
      { id: 'rating-system', title: 'Simple rating system' },
      { id: 'when-to-review', title: 'When to review' }
    ]
  }
}