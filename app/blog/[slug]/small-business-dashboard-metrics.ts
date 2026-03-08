export const dashboardMetricsData = {
  'small-business-dashboard-metrics': {
    title: 'Small business dashboard metrics that matter',
    excerpt: 'Stop tracking vanity metrics. Focus on the numbers that actually help you make better business decisions.',
    content: `
      <div class="space-y-8">
        <p class="lead text-xl text-gray-700 leading-relaxed">Dashboards are everywhere, but most are filled with vanity metrics that look good but don't help you make decisions. Here are the metrics that actually matter for small businesses.</p>
        
        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
          <p class="text-blue-800 font-medium">📈 Companies that use data-driven decision making are 5% more productive and 6% more profitable than their competitors.</p>
        </div>
        
        <h2>Financial metrics</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Revenue (with trends)</h3>
            <p class="text-gray-600">Track daily, weekly, and monthly revenue. More importantly, track trends—are you growing, plateauing, or declining? Compare to same periods last year to account for seasonality.</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Cash flow</h3>
            <p class="text-gray-600">Revenue is great, but cash is what pays the bills. Track money in and out, and forecast future cash position. Many profitable businesses fail because of poor cash flow management.</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Profit margin</h3>
            <p class="text-gray-600">Revenue minus expenses tells you if you're actually making money. Track both gross margin (revenue minus cost of goods) and net margin (after all expenses).</p>
          </div>
          
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div class="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Accounts receivable aging</h3>
            <p class="text-gray-600">Who owes you money and how old are those invoices? Aging receivables tie up your cash and increase the risk of non-payment.</p>
          </div>
        </div>
        
        <h2>Customer metrics</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div class="bg-gray-50 p-4 rounded-xl text-center">
            <p class="text-2xl font-bold text-purple-600">CAC</p>
            <p class="text-sm font-medium text-gray-900">Customer Acquisition Cost</p>
            <p class="text-xs text-gray-500 mt-2">How much you spend to acquire a new customer</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-xl text-center">
            <p class="text-2xl font-bold text-pink-600">LTV</p>
            <p class="text-sm font-medium text-gray-900">Customer Lifetime Value</p>
            <p class="text-xs text-gray-500 mt-2">Revenue from average customer over time</p>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-xl text-center">
            <p class="text-2xl font-bold text-purple-600">Churn</p>
            <p class="text-sm font-medium text-gray-900">Churn Rate</p>
            <p class="text-xs text-gray-500 mt-2">% of customers who leave each month</p>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white my-10">
          <h3 class="text-2xl font-bold mb-3">See all your metrics in one place</h3>
          <p class="text-white/90 mb-6">Operra Business Dashboard gives you real-time insights into your business.</p>
          <a href="/book-demo" class="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Try it free
            <Zap class="w-4 h-4" />
          </a>
        </div>
        
        <h2>Operational metrics</h2>
        
        <ul class="space-y-3">
          <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 font-bold flex-shrink-0 mt-0.5">✓</span> <span><strong>Employee productivity</strong> - Track key outputs per employee (billable hours, sales per employee, units produced)</span></li>
          <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 font-bold flex-shrink-0 mt-0.5">✓</span> <span><strong>Project completion rate</strong> - Track projects completed on time and within budget</span></li>
          <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 font-bold flex-shrink-0 mt-0.5">✓</span> <span><strong>Inventory turnover</strong> - How quickly you're selling through inventory</span></li>
        </ul>
        
        <h2>Building your dashboard</h2>
        
        <ul class="space-y-2">
          <li><strong>Start with 5-7 key metrics</strong> - Choose metrics that directly tie to your business goals</li>
          <li><strong>Focus on trends, not absolutes</strong> - Is the metric improving?</li>
          <li><strong>Set targets</strong> - Know what "good" looks like</li>
          <li><strong>Review regularly</strong> - Schedule weekly or monthly dashboard reviews</li>
        </ul>
        
        <h2>Metrics to ignore</h2>
        
        <ul class="space-y-2">
          <li class="flex items-start gap-2"><span class="text-red-500">✕</span> Social media followers (unless they translate to sales)</li>
          <li class="flex items-start gap-2"><span class="text-red-500">✕</span> Website traffic without conversion data</li>
          <li class="flex items-start gap-2"><span class="text-red-500">✕</span> Email open rates without click-through</li>
          <li class="flex items-start gap-2"><span class="text-red-500">✕</span> Gross revenue without profit context</li>
        </ul>
        
        <p>The right metrics help you make better decisions, spot problems early, and focus your energy where it matters most.</p>
      </div>
    `,
    author: 'Maya Patel',
    authorRole: 'Head of Product',
    authorBio: 'Maya leads product development at Operra, focusing on creating intuitive tools that solve real problems for small businesses.',
    authorImage: '/authors/maya.jpg',
    date: 'Feb 12, 2024',
    readTime: '6 min read',
    category: 'Analytics',
    categorySlug: 'analytics',
    image: '/blog/dashboard.jpg',
    tags: ['Analytics', 'Metrics', 'Growth'],
    relatedPosts: ['when-to-upgrade-from-spreadsheets', 'track-vendor-performance'],
    likes: 198,
    views: 1450,
    comments: 17,
    toc: [
      { id: 'financial-metrics', title: 'Financial metrics' },
      { id: 'customer-metrics', title: 'Customer metrics' },
      { id: 'operational-metrics', title: 'Operational metrics' },
      { id: 'building-dashboard', title: 'Building your dashboard' }
    ]
  }
}