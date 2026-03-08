export const hrComplianceData = {
  'hr-compliance-basics': {
    title: 'HR compliance basics for small business owners',
    excerpt: 'Stay compliant with labor laws without hiring an HR department. Simple guidelines for small teams.',
    content: `
      <div class="space-y-8">
        <p class="lead text-xl text-gray-700 leading-relaxed">HR compliance sounds intimidating. Laws, regulations, paperwork—it's enough to make any small business owner's head spin. But you don't need to become an HR expert. You just need to know the basics and have systems to stay on track.</p>
        
        <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
          <p class="text-red-800 font-medium">⚠️ The average cost of an HR compliance violation for a small business is $10,000 - $15,000.</p>
        </div>
        
        <h2>Why compliance matters</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div class="bg-white p-4 rounded-xl border border-gray-100 text-center">
            <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-red-600 font-bold text-lg">$</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">Money</h3>
            <p class="text-xs text-gray-500">Fines, penalties, and legal fees</p>
          </div>
          
          <div class="bg-white p-4 rounded-xl border border-gray-100 text-center">
            <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">Time</h3>
            <p class="text-xs text-gray-500">Dealing with audits and disputes</p>
          </div>
          
          <div class="bg-white p-4 rounded-xl border border-gray-100 text-center">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">Reputation</h3>
            <p class="text-xs text-gray-500">Compliance failures damage your brand</p>
          </div>
        </div>
        
        <h2>Essential compliance areas</h2>
        
        <div class="space-y-5 my-6">
          <div class="bg-white p-5 rounded-xl border border-gray-100">
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-purple-600 text-sm">1</span>
              Employee classification
            </h3>
            <p class="text-sm text-gray-600">One of the costliest mistakes is misclassifying employees as independent contractors. The IRS has strict guidelines. When in doubt, consult with an employment attorney.</p>
            <div class="mt-2 p-2 bg-red-50 rounded text-xs text-red-700">
              <strong>Penalty:</strong> Back taxes, interest, and fines up to $1,000 per misclassified worker
            </div>
          </div>
          
          <div class="bg-white p-5 rounded-xl border border-gray-100">
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-pink-100 rounded flex items-center justify-center text-pink-600 text-sm">2</span>
              I-9 and work authorization
            </h3>
            <p class="text-sm text-gray-600">Every employee must complete Form I-9 within three days of starting work. Review original documents and retain I-9s for all current employees.</p>
          </div>
          
          <div class="bg-white p-5 rounded-xl border border-gray-100">
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-purple-600 text-sm">3</span>
              Wage and hour laws
            </h3>
            <p class="text-sm text-gray-600">The Fair Labor Standards Act (FLSA) establishes minimum wage ($7.25 federal, but many states are higher), overtime (1.5x for hours over 40), and recordkeeping requirements.</p>
          </div>
          
          <div class="bg-white p-5 rounded-xl border border-gray-100">
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span class="w-6 h-6 bg-pink-100 rounded flex items-center justify-center text-pink-600 text-sm">4</span>
              Payroll taxes
            </h3>
            <p class="text-sm text-gray-600">Withhold federal income tax, withhold and match Social Security and Medicare (FICA), and pay federal and state unemployment taxes (FUTA/SUTA). Missing deadlines triggers penalties.</p>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white my-10">
          <h3 class="text-2xl font-bold mb-3">Stay compliant effortlessly</h3>
          <p class="text-white/90 mb-6">Operra HR Management helps you track documents, deadlines, and compliance requirements.</p>
          <a href="/book-demo" class="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Try it free
            <Zap class="w-4 h-4" />
          </a>
        </div>
        
        <h2>Simple compliance systems</h2>
        
        <ul class="space-y-3">
          <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span> <span><strong>Create an employee handbook</strong> - Document policies on at-will employment, anti-discrimination, leave, and conduct</span></li>
          <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span> <span><strong>Keep organized records</strong> - Personnel files, payroll records, I-9 forms (separate file), medical records (confidential)</span></li>
          <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span> <span><strong>Use technology</strong> - HR software helps with document storage, automated reminders, and consistent policy acknowledgments</span></li>
        </ul>
        
        <h2>Common compliance mistakes</h2>
        
        <ul class="space-y-2">
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Treating employees as contractors</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Not paying overtime correctly</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Missing I-9 deadlines</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Inconsistent application of policies</li>
          <li class="flex items-start gap-2"><span class="text-red-500">•</span> Not keeping required records</li>
        </ul>
        
        <h2>State and local considerations</h2>
        
        <p>Federal law is just the starting point. Many states and cities have additional requirements for minimum wage, paid sick leave, paid family leave, and more. Check with your state labor department.</p>
        
        <p>HR compliance doesn't have to be overwhelming. Focus on the basics, build simple systems, and get help when you need it.</p>
      </div>
    `,
    author: 'Alex Rivera',
    authorRole: 'Founder & CEO',
    authorBio: 'Alex started Operra after struggling with complex software in his own small business. He believes tools should be simple, affordable, and actually helpful.',
    authorImage: '/authors/alex.jpg',
    date: 'Jan 20, 2024',
    readTime: '8 min read',
    category: 'HR Management',
    categorySlug: 'hr-management',
    image: '/blog/compliance.jpg',
    tags: ['HR', 'Compliance', 'Legal'],
    relatedPosts: ['manage-employees-without-hr-software', 'employee-onboarding-checklist-small-teams'],
    likes: 215,
    views: 1650,
    comments: 22,
    toc: [
      { id: 'why-compliance-matters', title: 'Why compliance matters' },
      { id: 'essential-areas', title: 'Essential compliance areas' },
      { id: 'simple-systems', title: 'Simple compliance systems' },
      { id: 'common-mistakes', title: 'Common mistakes' }
    ]
  }
}