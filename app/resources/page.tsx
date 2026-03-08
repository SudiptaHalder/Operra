// import Link from 'next/link'
// import { 
//   BookOpen,
//   Video,
//   Download,
//   FileText,
//   ChevronRight,
//   Sparkles,
//   Calendar,
//   Users,
//   TrendingUp,
//   Clock,
//   Download as DownloadIcon,
//   Play,
//   File,
//   Headphones
// } from 'lucide-react'

// export const metadata = {
//   title: 'Resources - Operra',
//   description: 'Free guides, webinars, and eBooks for small business owners. Learn how to manage employees, vendors, and operations effectively.',
// }

// const categories = [
//   { name: 'All Resources', count: 24, active: true },
//   { name: 'eBooks & Guides', count: 8, active: false },
//   { name: 'Webinars', count: 6, active: false },
//   { name: 'Templates', count: 5, active: false },
//   { name: 'Case Studies', count: 3, active: false },
//   { name: 'Blog Posts', count: 12, active: false }
// ]

// const resources = [
//   {
//     type: 'eBook',
//     typeIcon: BookOpen,
//     title: 'The Complete HR Guide for Small Business',
//     description: 'Learn how to manage employees, stay compliant, and build a great workplace culture.',
//     author: 'Sarah Chen, HR Expert',
//     date: 'Mar 15, 2024',
//     readTime: '45 min read',
//     downloads: '2.4k',
//     image: '/images/resources/hr-guide.jpg',
//     color: 'purple'
//   },
//   {
//     type: 'Webinar',
//     typeIcon: Video,
//     title: 'Mastering Vendor Management: Save Time & Money',
//     description: 'Expert tips on negotiating contracts, tracking performance, and avoiding late fees.',
//     author: 'Mike Rodriguez, Procurement Specialist',
//     date: 'Mar 10, 2024',
//     duration: '45 min',
//     views: '1.8k',
//     image: '/images/resources/vendor-webinar.jpg',
//     color: 'pink'
//   },
//   {
//     type: 'Template',
//     typeIcon: FileText,
//     title: 'Employee Onboarding Checklist & Templates',
//     description: 'Ready-to-use checklists, offer letter templates, and new hire forms.',
//     author: 'Operra Team',
//     date: 'Mar 5, 2024',
//     format: 'Word, PDF, Excel',
//     downloads: '3.2k',
//     image: '/images/resources/onboarding-kit.jpg',
//     color: 'purple'
//   },
//   {
//     type: 'Case Study',
//     typeIcon: TrendingUp,
//     title: 'How Chen\'s Bakery Saved 5 Hours Per Week',
//     description: 'See how a small bakery streamlined HR and vendor management with Operra.',
//     author: 'Sarah Chen',
//     date: 'Feb 28, 2024',
//     readTime: '12 min read',
//     views: '1.2k',
//     image: '/images/resources/bakery-case.jpg',
//     color: 'pink'
//   },
//   {
//     type: 'eBook',
//     typeIcon: BookOpen,
//     title: 'Payroll Simplified: A Guide for Small Business',
//     description: 'Everything you need to know about payroll, taxes, and time tracking.',
//     author: 'James Chen, Payroll Expert',
//     date: 'Feb 20, 2024',
//     readTime: '60 min read',
//     downloads: '1.9k',
//     image: '/images/resources/payroll-guide.jpg',
//     color: 'purple'
//   },
//   {
//     type: 'Webinar',
//     typeIcon: Video,
//     title: 'Business Dashboard: Metrics That Matter',
//     description: 'Learn which KPIs to track and how to use data to grow your business.',
//     author: 'Maya Patel, Product Manager',
//     date: 'Feb 15, 2024',
//     duration: '50 min',
//     views: '1.5k',
//     image: '/images/resources/dashboard-webinar.jpg',
//     color: 'pink'
//   },
//   {
//     type: 'Template',
//     typeIcon: FileText,
//     title: 'Performance Review Templates',
//     description: 'Customizable review forms for different roles and departments.',
//     author: 'Operra Team',
//     date: 'Feb 10, 2024',
//     format: 'Word, PDF',
//     downloads: '2.1k',
//     image: '/images/resources/performance-templates.jpg',
//     color: 'purple'
//   },
//   {
//     type: 'Case Study',
//     typeIcon: TrendingUp,
//     title: 'Rodriguez Plumbing: From Spreadsheets to Software',
//     description: 'How a plumbing company organized 28 employees and 50+ vendors.',
//     author: 'Mike Rodriguez',
//     date: 'Feb 5, 2024',
//     readTime: '10 min read',
//     views: '980',
//     image: '/images/resources/plumbing-case.jpg',
//     color: 'pink'
//   }
// ]

// export default function ResourcesPage() {
//   return (
//     <div className="pt-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
//       {/* Hero Section */}
//       <section className="py-16">
//         <div className="mx-auto max-w-4xl px-6 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
//             <Sparkles className="h-4 w-4 text-purple-600" />
//             <span className="text-sm font-medium text-purple-600">Free Resources</span>
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Learn & Grow Your Business
//           </h1>
//           <p className="text-xl text-gray-600">
//             Free guides, webinars, and templates designed for small business owners
//           </p>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="pb-12">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="flex flex-wrap gap-3 justify-center">
//             {categories.map((category) => (
//               <button
//                 key={category.name}
//                 className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
//                   category.active
//                     ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
//                     : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
//                 }`}
//               >
//                 {category.name} ({category.count})
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Resources Grid */}
//       <section className="pb-20">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {resources.map((resource) => {
//               const TypeIcon = resource.typeIcon
//               return (
//                 <div
//                   key={resource.title}
//                   className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
//                 >
//                   <div className={`h-48 bg-gradient-to-br from-${resource.color}-100 to-${resource.color}-50 relative`}>
//                     <div className="absolute top-4 left-4">
//                       <span className={`inline-flex items-center gap-1 px-3 py-1 bg-${resource.color}-600 text-white text-xs rounded-full`}>
//                         <TypeIcon className="h-3 w-3" />
//                         {resource.type}
//                       </span>
//                     </div>
//                     <div className="absolute bottom-4 right-4">
//                       {resource.type === 'Webinar' ? (
//                         <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                           <Play className="h-3 w-3" />
//                           {resource.duration}
//                         </span>
//                       ) : resource.type === 'eBook' ? (
//                         <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
//                           <Clock className="h-3 w-3" />
//                           {resource.readTime}
//                         </span>
//                       ) : (
//                         <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
//                           {resource.format || 'Free'}
//                         </span>
//                       )}
//                     </div>
//                   </div>
                  
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
//                     <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    
//                     <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
//                       <span>{resource.author}</span>
//                       <span>•</span>
//                       <span>{resource.date}</span>
//                     </div>
                    
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-1 text-sm text-gray-500">
//                         {resource.downloads ? (
//                           <>
//                             <DownloadIcon className="h-4 w-4" />
//                             <span>{resource.downloads} downloads</span>
//                           </>
//                         ) : (
//                           <>
//                             <Play className="h-4 w-4" />
//                             <span>{resource.views} views</span>
//                           </>
//                         )}
//                       </div>
                      
//                       <Link
//                         href={`/resources/${resource.title.toLowerCase().replace(/\s+/g, '-')}`}
//                         className={`text-${resource.color}-600 font-medium hover:text-${resource.color}-700 inline-flex items-center gap-1`}
//                       >
//                         {resource.type === 'Webinar' ? 'Watch now' : 
//                          resource.type === 'eBook' ? 'Read now' :
//                          resource.type === 'Template' ? 'Download' : 'Read case study'}
//                         <ChevronRight className="h-4 w-4" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>

//           {/* Load More */}
//           <div className="text-center mt-12">
//             <button className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
//               Load More Resources
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Newsletter */}
//       <section className="pb-20">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="bg-gray-900 rounded-2xl p-12 text-center">
//             <h2 className="text-3xl font-bold text-white mb-4">
//               Get New Resources Delivered
//             </h2>
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               Subscribe to our newsletter and get free guides, templates, and webinar invites
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="flex-1 px-4 py-3 rounded-lg text-gray-900"
//               />
//               <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors">
//                 Subscribe
//               </button>
//             </div>
//             <p className="text-xs text-gray-400 mt-4">
//               We respect your privacy. Unsubscribe anytime.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
import Link from 'next/link'
import { 
  BookOpen,
  Video,
  FileText,
  ChevronRight,
  Download,
  Sparkles
} from 'lucide-react'

export const metadata = {
  title: 'Resources - Operra',
  description: 'Free guides and resources for small business owners.',
}

const resources = [
  {
    type: 'Guide',
    icon: BookOpen,
    title: 'HR Management Guide',
    description: 'Simple guide to managing employees for small businesses.',
    color: 'purple'
  },
  {
    type: 'Template',
    icon: FileText,
    title: 'Employee Onboarding Checklist',
    description: 'Ready-to-use checklist for new hires.',
    color: 'pink'
  },
  {
    type: 'Webinar',
    icon: Video,
    title: 'Vendor Management Tips',
    description: '45-min video on tracking vendors and contracts.',
    color: 'purple'
  },
  {
    type: 'Guide',
    icon: BookOpen,
    title: 'Payroll Simplified',
    description: 'Guide to time tracking and payroll basics.',
    color: 'pink'
  },
  {
    type: 'Template',
    icon: FileText,
    title: 'Performance Review Template',
    description: 'Customizable review forms for your team.',
    color: 'purple'
  },
  {
    type: 'Webinar',
    icon: Video,
    title: 'Business Dashboard Demo',
    description: 'See how to track key metrics.',
    color: 'pink'
  }
]

export default function ResourcesPage() {
  return (
    <div className="pt-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Header */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-4">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Free Resources</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Guides & Templates</h1>
          <p className="text-lg text-gray-600">Free resources to help you run your business</p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <div 
                  key={resource.title}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className={`bg-${resource.color}-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 text-${resource.color}-600`} />
                  </div>
                  <div className="mb-3">
                    <span className={`text-xs font-medium text-${resource.color}-600 bg-${resource.color}-50 px-2 py-1 rounded-full`}>
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{resource.description}</p>
                  <Link
                    href="#"
                    className={`text-${resource.color}-600 text-sm font-medium hover:text-${resource.color}-700 inline-flex items-center gap-1`}
                  >
                    {resource.type === 'Webinar' ? 'Watch now' : 'Download'}
                    <Download className="h-3 w-3" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}