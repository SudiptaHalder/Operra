
// import { Metadata } from 'next'
// import Link from 'next/link'
// import { notFound } from 'next/navigation'
// import { 
//   Calendar, 
//   User, 
//   Clock, 
//   Tag, 
//   ArrowLeft, 
//   Share2, 
//   Bookmark, 
//   ThumbsUp,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Mail,
//   ChevronRight,
//   MessageCircle,
//   Eye,
//   Heart,
//   BookOpen,
//   Sparkles,
//   TrendingUp,
//   Award,
//   Zap
// } from 'lucide-react'

// // Complete blog posts with full content
// const blogPosts = {
//   'manage-employees-without-hr-software': {
//     title: 'How to manage employees without HR software',
//     excerpt: 'Stop using spreadsheets for employee management. Learn the simple way to track time-off, documents, and performance.',
//     content: `
//       <div class="space-y-8">
//         <p class="lead text-xl text-gray-700 leading-relaxed">Managing employees is one of the most time-consuming tasks for any small business owner. When you're just starting out, spreadsheets seem like a perfectly good solution. They're free, familiar, and flexible.</p>
        
//         <p>But as your team grows, those spreadsheets become a nightmare. You end up with multiple versions, lost documents, and hours of manual data entry. Here's how to break free from spreadsheet chaos.</p>
        
//         <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
//           <p class="text-amber-800 font-medium">Did you know? Small businesses spend an average of 5 hours per week on manual HR tasks that could be automated.</p>
//         </div>
        
//         <h2>The problem with spreadsheets</h2>
        
//         <p>Spreadsheets weren't designed for employee management. They lack:</p>
        
//         <ul class="space-y-3">
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex-shrink-0 mt-0.5">✕</span> <span><strong>Version control</strong> - Multiple people editing the same file leads to confusion</span></li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex-shrink-0 mt-0.5">✕</span> <span><strong>Security</strong> - Sensitive employee data isn't properly protected</span></li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex-shrink-0 mt-0.5">✕</span> <span><strong>Automation</strong> - Everything requires manual entry and updates</span></li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex-shrink-0 mt-0.5">✕</span> <span><strong>Accessibility</strong> - Can't easily access from mobile devices</span></li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex-shrink-0 mt-0.5">✕</span> <span><strong>Integration</strong> - Doesn't connect with other business tools</span></li>
//         </ul>
        
//         <div class="relative my-12">
//           <div class="absolute inset-0 flex items-center" aria-hidden="true">
//             <div class="w-full border-t border-gray-300"></div>
//           </div>
//           <div class="relative flex justify-center">
//             <span class="bg-white px-6 text-sm font-medium text-gray-900">Simple solutions</span>
//           </div>
//         </div>
        
//         <h2>Simple solutions for common HR tasks</h2>
        
//         <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
//           <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
//               <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
//             </div>
//             <h3 class="text-lg font-semibold text-gray-900 mb-2">Employee database</h3>
//             <p class="text-gray-600">Instead of maintaining multiple spreadsheets, use a centralized employee database. Store contact information, job details, emergency contacts, and documents in one secure place.</p>
//           </div>
          
//           <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
//               <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
//             </div>
//             <h3 class="text-lg font-semibold text-gray-900 mb-2">Time-off tracking</h3>
//             <p class="text-gray-600">Stop managing vacation requests via email. Implement a simple system where employees can request time off and managers can approve with one click.</p>
//           </div>
          
//           <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
//               <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
//             </div>
//             <h3 class="text-lg font-semibold text-gray-900 mb-2">Document management</h3>
//             <p class="text-gray-600">How many times have you searched through email to find an employee's contract? A centralized document repository with version history ensures you never lose important paperwork again.</p>
//           </div>
          
//           <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//             <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
//               <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
//             </div>
//             <h3 class="text-lg font-semibold text-gray-900 mb-2">Performance reviews</h3>
//             <p class="text-gray-600">Regular performance reviews are crucial for employee development, but they're easy to forget. Automated reminders and templates make it easy to conduct consistent, timely reviews.</p>
//           </div>
//         </div>
        
//         <h2>When to make the switch</h2>
        
//         <p>If you're experiencing any of these pain points, it's time to upgrade:</p>
        
//         <ul class="space-y-3">
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600 font-bold flex-shrink-0 mt-0.5">!</span> Spending more than 2 hours per week on HR admin</li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600 font-bold flex-shrink-0 mt-0.5">!</span> Missing important deadlines or document renewals</li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600 font-bold flex-shrink-0 mt-0.5">!</span> Employees asking about their remaining vacation days</li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600 font-bold flex-shrink-0 mt-0.5">!</span> Can't find documents when you need them</li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600 font-bold flex-shrink-0 mt-0.5">!</span> Making payroll errors due to manual time tracking</li>
//         </ul>
        
//         <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white my-10">
//           <h3 class="text-2xl font-bold mb-3">Ready to simplify your HR?</h3>
//           <p class="text-white/90 mb-6">Join 500+ small businesses that have ditched spreadsheets for Operra.</p>
//           <a href="/book-demo" class="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
//             Book a free demo
//             <Zap class="w-4 h-4" />
//           </a>
//         </div>
        
//         <h2>What to look for in HR software</h2>
        
//         <p>When choosing HR software for your small business, look for:</p>
        
//         <ul class="space-y-3">
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span> <strong>Simplicity</strong> - Should be intuitive, not require training</li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span> <strong>Affordability</strong> - Flat monthly pricing, not per-employee fees</li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span> <strong>Mobile access</strong> - Employees should be able to request time off from their phones</li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span> <strong>Document storage</strong> - Secure cloud storage for all employee files</li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span> <strong>Integration</strong> - Should work with your payroll and other tools</li>
//         </ul>
        
//         <h2>Getting started</h2>
        
//         <p>Start by identifying your biggest pain point. Is it time-off tracking? Document management? Focus on solving that first. Most modern HR tools offer free trials, so you can test them with your actual team before committing.</p>
        
//         <p>Remember, the goal isn't to have perfect HR processes overnight. It's to gradually replace manual work with simple, automated systems that save you time and reduce errors.</p>
//       </div>
//     `,
//     author: 'Alex Rivera',
//     authorRole: 'Founder & CEO',
//     authorBio: 'Alex started Operra after struggling with complex HR software in his own small business. He believes tools should be simple, affordable, and actually helpful.',
//     authorImage: '/authors/alex.jpg',
//     date: 'Mar 15, 2024',
//     readTime: '5 min read',
//     category: 'HR Management',
//     categorySlug: 'hr-management',
//     image: '/blog/hr-management.jpg',
//     tags: ['HR', 'Employees', 'Productivity'],
//     relatedPosts: ['hr-compliance-basics', 'employee-onboarding-checklist-small-teams'],
//     likes: 234,
//     views: 1245,
//     comments: 18
//   },
  
//   'vendor-management-tips-small-business': {
//     title: 'Vendor management tips for small businesses',
//     excerpt: 'Stop missing contract renewals and losing track of payments. Simple strategies to manage vendors effectively.',
//     content: `
//       <div class="space-y-8">
//         <p class="lead text-xl text-gray-700 leading-relaxed">Vendor management might not be the most exciting part of running a business, but it's one of the most important. Your vendors supply the products, services, and materials you need to operate.</p>
        
//         <p>Yet many small businesses manage vendors with a chaotic mix of spreadsheets, email threads, and sticky notes. Here's how to get organized.</p>
        
//         <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl my-8">
//           <p class="text-blue-800 font-medium">💡 Did you know? The average small business works with 20-30 vendors and misses at least 2-3 contract renewals per year.</p>
//         </div>
        
//         <h2>Why vendor management matters</h2>
        
//         <p>Poor vendor management leads to:</p>
        
//         <ul class="space-y-3">
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex-shrink-0 mt-0.5">✕</span> Missed contract renewals and auto-renewals at higher rates</li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex-shrink-0 mt-0.5">✕</span> Late payments and unnecessary fees</li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex-shrink-0 mt-0.5">✕</span> Lost agreements and contracts</li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex-shrink-0 mt-0.5">✕</span> Inconsistent vendor performance</li>
//           <li class="flex items-start gap-3"><span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 font-bold flex-shrink-0 mt-0.5">✕</span> Wasted time searching for information</li>
//         </ul>
        
//         <h2>Essential vendor management practices</h2>
        
//         <div class="grid grid-cols-1 gap-6 my-8">
//           <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
//             <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
//               <span class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">1</span>
//               Centralize vendor information
//             </h3>
//             <p class="text-gray-600 ml-10">Create a single source of truth for all vendor data. This should include contact details, payment terms, contract dates, and key documents. When everything is in one place, you can find what you need in seconds instead of hours.</p>
//           </div>
          
//           <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
//             <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
//               <span class="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600">2</span>
//               Track contracts religiously
//             </h3>
//             <p class="text-gray-600 ml-10">Contracts are the backbone of vendor relationships. For each contract, track start and end dates, auto-renewal terms, pricing, and key contacts.</p>
//           </div>
          
//           <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
//             <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
//               <span class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">3</span>
//               Set renewal reminders
//             </h3>
//             <p class="text-gray-600 ml-10">Don't let contracts auto-renew without review. Set reminders 30, 14, and 7 days before expiration. This gives you time to negotiate better terms or find alternatives if needed.</p>
//           </div>
//         </div>
        
//         <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white my-10">
//           <h3 class="text-2xl font-bold mb-3">Never miss a renewal again</h3>
//           <p class="text-white/90 mb-6">Operra Vendor Management sends automatic reminders before contracts expire.</p>
//           <a href="/book-demo" class="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
//             Try it free
//             <Sparkles class="w-4 h-4" />
//           </a>
//         </div>
//       </div>
//     `,
//     author: 'Maya Patel',
//     authorRole: 'Head of Product',
//     authorBio: 'Maya leads product development at Operra, focusing on creating intuitive tools that solve real problems for small businesses.',
//     authorImage: '/authors/maya.jpg',
//     date: 'Mar 10, 2024',
//     readTime: '4 min read',
//     category: 'Vendor Management',
//     categorySlug: 'vendor-management',
//     image: '/blog/vendor-management.jpg',
//     tags: ['Vendors', 'Contracts', 'Operations'],
//     relatedPosts: ['track-vendor-performance', 'small-business-dashboard-metrics'],
//     likes: 156,
//     views: 890,
//     comments: 12
//   }
//   // ... other posts with similar enhanced formatting
// }

// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//   const { slug } = await params
//   const post = blogPosts[slug as keyof typeof blogPosts]
  
//   if (!post) {
//     return {
//       title: 'Post Not Found - Operra Blog',
//     }
//   }

//   return {
//     title: `${post.title} - Operra Blog`,
//     description: post.excerpt,
//   }
// }

// export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params
//   const post = blogPosts[slug as keyof typeof blogPosts]
  
//   if (!post) {
//     notFound()
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
//       {/* Hero Section with Gradient */}
//       <div className="relative pt-24 pb-16 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-transparent" />
//         <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-600/10 to-transparent" />
        
//         {/* Floating Elements */}
//         <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        
//         <div className="relative mx-auto max-w-7xl px-6">
//           {/* Breadcrumb */}
//           <div className="flex items-center gap-2 text-sm mb-8 bg-white/80 backdrop-blur-sm w-fit px-4 py-2 rounded-full shadow-sm border border-gray-100">
//             <Link href="/" className="text-gray-500 hover:text-purple-600 transition-colors">Home</Link>
//             <ChevronRight className="h-3 w-3 text-gray-400" />
//             <Link href="/blog" className="text-gray-500 hover:text-purple-600 transition-colors">Blog</Link>
//             <ChevronRight className="h-3 w-3 text-gray-400" />
//             <span className="text-gray-900 font-medium truncate max-w-xs">{post.category}</span>
//           </div>

//           {/* Category Badge */}
//           <div className="flex items-center gap-4 mb-6">
//             <Link 
//               href={`/blog/category/${post.categorySlug}`}
//               className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
//             >
//               <Sparkles className="h-4 w-4" />
//               {post.category}
//             </Link>
//             <div className="flex items-center gap-3 text-sm text-gray-500">
//               <div className="flex items-center gap-1">
//                 <Eye className="h-4 w-4" />
//                 {post.views} views
//               </div>
//               <div className="flex items-center gap-1">
//                 <Heart className="h-4 w-4" />
//                 {post.likes}
//               </div>
//               <div className="flex items-center gap-1">
//                 <MessageCircle className="h-4 w-4" />
//                 {post.comments}
//               </div>
//             </div>
//           </div>

//           {/* Title */}
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl">
//             {post.title}
//           </h1>

//           {/* Excerpt */}
//           <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
//             {post.excerpt}
//           </p>

//           {/* Author Card */}
//           <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-2xl">
//                   {post.author.split(' ').map(n => n[0]).join('')}
//                 </div>
//                 <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
//               </div>
//               <div>
//                 <p className="text-lg font-semibold text-gray-900">{post.author}</p>
//                 <p className="text-gray-500">{post.authorRole}</p>
//                 <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
//                   <div className="flex items-center gap-1">
//                     <Calendar className="h-4 w-4" />
//                     {post.date}
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Clock className="h-4 w-4" />
//                     {post.readTime}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Social Share */}
//             <div className="flex items-center gap-2">
//               <button className="p-3 bg-gray-100 rounded-xl hover:bg-blue-100 hover:text-blue-600 transition-colors group">
//                 <Facebook className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
//               </button>
//               <button className="p-3 bg-gray-100 rounded-xl hover:bg-blue-100 hover:text-blue-400 transition-colors group">
//                 <Twitter className="h-5 w-5 text-gray-600 group-hover:text-blue-400" />
//               </button>
//               <button className="p-3 bg-gray-100 rounded-xl hover:bg-blue-100 hover:text-blue-700 transition-colors group">
//                 <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-blue-700" />
//               </button>
//               <button className="p-3 bg-gray-100 rounded-xl hover:bg-purple-100 hover:text-purple-600 transition-colors group">
//                 <Share2 className="h-5 w-5 text-gray-600 group-hover:text-purple-600" />
//               </button>
//               <button className="p-3 bg-gray-100 rounded-xl hover:bg-pink-100 hover:text-pink-600 transition-colors group">
//                 <Bookmark className="h-5 w-5 text-gray-600 group-hover:text-pink-600" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="mx-auto max-w-7xl px-6 pb-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Article Content */}
//           <div className="lg:col-span-2">
//             <article className="prose prose-lg max-w-none 
//               prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
//               prose-h1:text-4xl prose-h1:mb-6
//               prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-100
//               prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
//               prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
//               prose-li:text-gray-600 prose-li:my-2
//               prose-strong:text-gray-900
//               prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
//               prose-ul:my-8 prose-ul:space-y-2
//               prose-ol:my-8 prose-ol:space-y-2
//               prose-img:rounded-xl prose-img:shadow-lg
//               prose-blockquote:border-l-4 prose-blockquote:border-purple-600 prose-blockquote:bg-purple-50 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-gray-700"
//               dangerouslySetInnerHTML={{ __html: post.content }}
//             />

//             {/* Tags */}
//             <div className="mt-12 pt-8 border-t border-gray-200">
//               <h3 className="text-sm font-medium text-gray-500 mb-4">Related topics</h3>
//               <div className="flex flex-wrap gap-2">
//                 {post.tags.map((tag) => (
//                   <Link
//                     key={tag}
//                     href={`/blog/tag/${tag.toLowerCase()}`}
//                     className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-600 hover:border-purple-200 transition-all border border-transparent"
//                   >
//                     #{tag}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* Feedback */}
//             <div className="mt-10 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Was this article helpful?</h3>
//               <div className="flex flex-wrap gap-4">
//                 <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 transition-all group">
//                   <ThumbsUp className="h-5 w-5 text-gray-400 group-hover:text-purple-600" />
//                   <span className="font-medium">Yes, very helpful</span>
//                 </button>
//                 <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600 transition-all group">
//                   <ThumbsUp className="h-5 w-5 text-gray-400 group-hover:text-pink-600 rotate-180" />
//                   <span className="font-medium">No, needs improvement</span>
//                 </button>
//               </div>
//             </div>

//             {/* Author Bio */}
//             <div className="mt-10 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
//               <div className="flex items-start gap-6">
//                 <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-3xl flex-shrink-0 shadow-lg">
//                   {post.author.split(' ').map(n => n[0]).join('')}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-1">About {post.author}</h3>
//                   <p className="text-purple-600 font-medium mb-3">{post.authorRole}</p>
//                   <p className="text-gray-700 leading-relaxed">{post.authorBio}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24 space-y-6">
//               {/* Table of Contents */}
//               <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                   <BookOpen className="h-5 w-5 text-purple-600" />
//                   Table of Contents
//                 </h3>
//                 <ul className="space-y-3 text-sm">
//                   <li>
//                     <a href="#" className="text-gray-600 hover:text-purple-600 flex items-center gap-2">
//                       <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
//                       Introduction
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-gray-600 hover:text-purple-600 flex items-center gap-2">
//                       <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
//                       The problem with spreadsheets
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-gray-600 hover:text-purple-600 flex items-center gap-2">
//                       <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
//                       Simple solutions
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-gray-600 hover:text-purple-600 flex items-center gap-2">
//                       <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
//                       When to make the switch
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               {/* Related Posts */}
//               {post.relatedPosts && post.relatedPosts.length > 0 && (
//                 <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                     <TrendingUp className="h-5 w-5 text-pink-600" />
//                     You might also like
//                   </h3>
//                   <div className="space-y-4">
//                     {post.relatedPosts.map((slug) => {
//                       const relatedPost = blogPosts[slug as keyof typeof blogPosts]
//                       if (!relatedPost) return null
//                       return (
//                         <Link
//                           key={slug}
//                           href={`/blog/${slug}`}
//                           className="group block p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all"
//                         >
//                           <span className="text-xs font-medium text-purple-600 mb-1 block">
//                             {relatedPost.category}
//                           </span>
//                           <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 mb-2">
//                             {relatedPost.title}
//                           </h4>
//                           <div className="flex items-center gap-3 text-xs text-gray-400">
//                             <div className="flex items-center gap-1">
//                               <Calendar className="h-3 w-3" />
//                               {relatedPost.date}
//                             </div>
//                             <div className="flex items-center gap-1">
//                               <Clock className="h-3 w-3" />
//                               {relatedPost.readTime}
//                             </div>
//                           </div>
//                         </Link>
//                       )
//                     })}
//                   </div>
//                 </div>
//               )}

//               {/* Newsletter */}
//               <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
//                 <h3 className="text-xl font-bold mb-2">Get weekly insights</h3>
//                 <p className="text-white/90 text-sm mb-4">
//                   Join 1,000+ small business owners who get our newsletter.
//                 </p>
//                 <div className="space-y-3">
//                   <input
//                     type="email"
//                     placeholder="Your email"
//                     className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400"
//                   />
//                   <button className="w-full bg-white text-purple-600 px-4 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
//                     <Mail className="h-4 w-4" />
//                     Subscribe
//                   </button>
//                 </div>
//                 <p className="text-xs text-white/70 mt-3">
//                   No spam, unsubscribe anytime.
//                 </p>
//               </div>

//               {/* Advertisement / CTA */}
//               <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-lg">
//                 <h3 className="text-xl font-bold mb-2">Try Operra free</h3>
//                 <p className="text-gray-300 text-sm mb-4">
//                   14-day trial, no credit card required.
//                 </p>
//                 <Link
//                   href="/book-demo"
//                   className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-center"
//                 >
//                   Start free trial
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  Calendar, 
  Clock, 
  Tag, 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  ThumbsUp,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  ChevronRight,
  MessageCircle,
  Eye,
  Heart,
  BookOpen,
  Sparkles,
  TrendingUp,
  Zap
} from 'lucide-react'

// Import all blog post data
import { blogPosts } from './blog-data'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Post Not Found - Operra Blog',
    }
  }

  return {
    title: `${post.title} - Operra Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section with Gradient */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-pink-600/5 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-purple-600/10 to-transparent" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8 bg-white/80 backdrop-blur-sm w-fit px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <Link href="/" className="text-gray-500 hover:text-purple-600 transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <Link href="/blog" className="text-gray-500 hover:text-purple-600 transition-colors">Blog</Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <span className="text-gray-900 font-medium truncate max-w-xs">{post.category}</span>
          </div>

          {/* Category Badge */}
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href={`/blog/category/${post.categorySlug}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
            >
              <Sparkles className="h-4 w-4" />
              {post.category}
            </Link>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {post.views} views
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {post.likes}
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                {post.comments}
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Card */}
          <div className="flex flex-wrap items-center justify-between gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-2xl">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">{post.author}</p>
                <p className="text-gray-500">{post.authorRole}</p>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-2">
              <button className="p-3 bg-gray-100 rounded-xl hover:bg-blue-100 hover:text-blue-600 transition-colors group">
                <Facebook className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
              </button>
              <button className="p-3 bg-gray-100 rounded-xl hover:bg-blue-100 hover:text-blue-400 transition-colors group">
                <Twitter className="h-5 w-5 text-gray-600 group-hover:text-blue-400" />
              </button>
              <button className="p-3 bg-gray-100 rounded-xl hover:bg-blue-100 hover:text-blue-700 transition-colors group">
                <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-blue-700" />
              </button>
              <button className="p-3 bg-gray-100 rounded-xl hover:bg-purple-100 hover:text-purple-600 transition-colors group">
                <Share2 className="h-5 w-5 text-gray-600 group-hover:text-purple-600" />
              </button>
              <button className="p-3 bg-gray-100 rounded-xl hover:bg-pink-100 hover:text-pink-600 transition-colors group">
                <Bookmark className="h-5 w-5 text-gray-600 group-hover:text-pink-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none 
              prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-4xl prose-h1:mb-6
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-100
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
              prose-li:text-gray-600 prose-li:my-2
              prose-strong:text-gray-900
              prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
              prose-ul:my-8 prose-ul:space-y-2
              prose-ol:my-8 prose-ol:space-y-2
              prose-img:rounded-xl prose-img:shadow-lg
              prose-blockquote:border-l-4 prose-blockquote:border-purple-600 prose-blockquote:bg-purple-50 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Related topics</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-600 hover:border-purple-200 transition-all border border-transparent"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Feedback */}
            <div className="mt-10 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Was this article helpful?</h3>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:bg-purple-50 hover:border-purple-200 hover:text-purple-600 transition-all group">
                  <ThumbsUp className="h-5 w-5 text-gray-400 group-hover:text-purple-600" />
                  <span className="font-medium">Yes, very helpful</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600 transition-all group">
                  <ThumbsUp className="h-5 w-5 text-gray-400 group-hover:text-pink-600 rotate-180" />
                  <span className="font-medium">No, needs improvement</span>
                </button>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-10 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-3xl flex-shrink-0 shadow-lg">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">About {post.author}</h3>
                  <p className="text-purple-600 font-medium mb-3">{post.authorRole}</p>
                  <p className="text-gray-700 leading-relaxed">{post.authorBio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  Table of Contents
                </h3>
                <ul className="space-y-3 text-sm">
                  {post.toc?.map((item, index) => (
                    <li key={index}>
                      <a href={`#${item.id}`} className="text-gray-600 hover:text-purple-600 flex items-center gap-2">
                        <span className="w-1 h-1 bg-purple-600 rounded-full"></span>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Posts */}
              {post.relatedPosts && post.relatedPosts.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-pink-600" />
                    You might also like
                  </h3>
                  <div className="space-y-4">
                    {post.relatedPosts.map((slug) => {
                      const relatedPost = blogPosts[slug as keyof typeof blogPosts]
                      if (!relatedPost) return null
                      return (
                        <Link
                          key={slug}
                          href={`/blog/${slug}`}
                          className="group block p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all"
                        >
                          <span className="text-xs font-medium text-purple-600 mb-1 block">
                            {relatedPost.category}
                          </span>
                          <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h4>
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {relatedPost.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {relatedPost.readTime}
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="h-3 w-3" />
                              {relatedPost.likes}
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-2">Get weekly insights</h3>
                <p className="text-white/90 text-sm mb-4">
                  Join 1,000+ small business owners who get our newsletter.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-xl text-gray-900 placeholder-gray-400"
                  />
                  <button className="w-full bg-white text-purple-600 px-4 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-white/70 mt-3">
                  No spam, unsubscribe anytime.
                </p>
              </div>

              {/* Advertisement / CTA */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white shadow-lg">
                <h3 className="text-xl font-bold mb-2">Try Operra free</h3>
                <p className="text-gray-300 text-sm mb-4">
                  14-day trial, no credit card required.
                </p>
                <Link
                  href="/book-demo"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all text-center"
                >
                  Start free trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}