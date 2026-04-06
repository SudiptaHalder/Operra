// import Link from 'next/link'
// import { 
//   Search,
//   BookOpen,
//   Video,
//   Download,
//   FileText,
//   HelpCircle,
//   Mail,
//   MessageCircle,
//   ChevronRight,
//   Sparkles,
//   Users,
//   Clock,
//   Shield,
//   TrendingUp,
//   Truck,
//   Calendar,
//   DollarSign,
//   Settings,
//   Smartphone,
//   Lock
// } from 'lucide-react'
// import ChatButton from '@/components/contact/ChatButton'

// export const metadata = {
//   title: 'Help Center - Trezbo',
//   description: 'Find answers, guides, and support for Trezbo products. Get help with HR management, vendor tracking, payroll, and more.',
// }

// const helpCategories = [
//   {
//     title: 'Getting Started',
//     description: 'New to Trezbo? Start here',
//     icon: Sparkles,
//     color: 'purple',
//     articles: [
//       'How to create your account',
//       'Setting up your business profile',
//       'Adding team members',
//       'Understanding your dashboard',
//       'Importing data from spreadsheets',
//       'Tour of key features'
//     ]
//   },
//   {
//     title: 'HR Management',
//     description: 'Manage employees effectively',
//     icon: Users,
//     color: 'pink',
//     articles: [
//       'Adding new employees',
//       'Managing time-off requests',
//       'Setting up performance reviews',
//       'Storing employee documents',
//       'Creating custom fields',
//       'Exporting employee data'
//     ]
//   },
//   {
//     title: 'Vendor Management',
//     description: 'Track vendors and contracts',
//     icon: Truck,
//     color: 'purple',
//     articles: [
//       'Adding vendors to your database',
//       'Uploading and managing contracts',
//       'Setting up renewal reminders',
//       'Tracking payments',
//       'Vendor performance ratings',
//       'Exporting vendor reports'
//     ]
//   },
//   {
//     title: 'Business Dashboard',
//     description: 'Monitor your business health',
//     icon: TrendingUp,
//     color: 'pink',
//     articles: [
//       'Understanding key metrics',
//       'Customizing your dashboard',
//       'Setting up revenue tracking',
//       'Team performance monitoring',
//       'Creating custom reports',
//       'Sharing dashboards with team'
//     ]
//   },
//   {
//     title: 'Employee Onboarding',
//     description: 'Streamline new hire process',
//     icon: FileText,
//     color: 'purple',
//     articles: [
//       'Creating offer letters',
//       'Setting up onboarding checklists',
//       'Collecting new hire documents',
//       'Automating welcome emails',
//       'Training assignment',
//       'New hire portal setup'
//     ]
//   },
//   {
//     title: 'Payroll Tracking',
//     description: 'Simple time and payroll',
//     icon: DollarSign,
//     color: 'pink',
//     articles: [
//       'Setting up time tracking',
//       'Managing employee schedules',
//       'Approving timesheets',
//       'Overtime calculation rules',
//       'Exporting to payroll services',
//       'Tracking PTO and holidays'
//     ]
//   },
//   {
//     title: 'Account & Billing',
//     description: 'Manage your subscription',
//     icon: Settings,
//     color: 'purple',
//     articles: [
//       'Updating payment methods',
//       'Changing your plan',
//       'Canceling your subscription',
//       'Viewing invoices',
//       'Adding team members',
//       'Managing permissions'
//     ]
//   },
//   {
//     title: 'Security & Privacy',
//     description: 'Your data is safe with us',
//     icon: Lock,
//     color: 'pink',
//     articles: [
//       'Data encryption standards',
//       'Backup and recovery',
//       'Privacy policy overview',
//       'GDPR compliance',
//       'Two-factor authentication',
//       'Security best practices'
//     ]
//   }
// ]

// const popularArticles = [
//   { title: 'How to add employees to HR Management', views: '2.5k', href: '/help/hr/add-employees' },
//   { title: 'Setting up contract renewal reminders', views: '1.8k', href: '/help/vendor/renewal-reminders' },
//   { title: 'Creating your first dashboard', views: '1.6k', href: '/help/dashboard/first-dashboard' },
//   { title: 'Onboarding checklist template', views: '1.4k', href: '/help/onboarding/checklist' },
//   { title: 'Exporting timesheets to payroll', views: '1.2k', href: '/help/payroll/export-timesheets' },
//   { title: 'Understanding pricing plans', views: '1.1k', href: '/help/account/pricing-plans' }
// ]

// export default function HelpCenterPage() {
//   return (
//     <div className="pt-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
//       {/* Hero Section */}
//       <section className="py-16">
//         <div className="mx-auto max-w-4xl px-6 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
//             <HelpCircle className="h-4 w-4 text-purple-600" />
//             <span className="text-sm font-medium text-purple-600">Help Center</span>
//           </div>
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             How can we help you?
//           </h1>
//           <p className="text-xl text-gray-600 mb-8">
//             Search our knowledge base or browse categories below
//           </p>
          
//           {/* Search Bar */}
//           <div className="relative max-w-2xl mx-auto">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search for answers..."
//               className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-sm"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Popular Articles */}
//       <section className="pb-16">
//         <div className="mx-auto max-w-7xl px-6">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {popularArticles.map((article) => (
//               <Link
//                 key={article.title}
//                 href={article.href}
//                 className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all hover:-translate-y-1 flex justify-between items-center group"
//               >
//                 <div>
//                   <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
//                     {article.title}
//                   </h3>
//                   <p className="text-xs text-gray-400 mt-1">{article.views} views</p>
//                 </div>
//                 <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Help Categories */}
//       <section className="pb-20">
//         <div className="mx-auto max-w-7xl px-6">
//           <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {helpCategories.map((category) => {
//               const Icon = category.icon
//               return (
//                 <div
//                   key={category.title}
//                   className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
//                 >
//                   <div className={`bg-${category.color}-100 rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
//                     <Icon className={`h-6 w-6 text-${category.color}-600`} />
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
//                   <p className="text-sm text-gray-500 mb-4">{category.description}</p>
//                   <ul className="space-y-2 mb-4">
//                     {category.articles.slice(0, 3).map((article) => (
//                       <li key={article} className="text-sm text-gray-600 hover:text-purple-600 cursor-pointer">
//                         • {article}
//                       </li>
//                     ))}
//                   </ul>
//                   <Link
//                     href={`/help/${category.title.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
//                     className="text-purple-600 text-sm font-medium hover:text-purple-700 inline-flex items-center gap-1"
//                   >
//                     View all articles
//                     <ChevronRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Still Need Help */}
//       <section className="pb-20">
//         <div className="mx-auto max-w-4xl px-6">
//           <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
//             <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
//             <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//               Our support team is ready to assist you with any questions
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 href="/contact"
//                 className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
//               >
//                 <Mail className="h-5 w-5" />
//                 Email Support
//               </Link>
//               <div className="bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4 font-semibold border border-white/20">
//                 <ChatButton />
//               </div>
//             </div>
//             <p className="text-sm text-white/70 mt-6">
//               Average response time: 4 hours • 24/7 support available
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }



import Link from 'next/link'
import { 
  Search,
  HelpCircle,
  ChevronRight,
  Sparkles,
  Mail
} from 'lucide-react'
import ChatButton from '@/components/contact/ChatButton'
import PopularArticles from '@/components/articles/PopularArticles'
import FeaturedArticle from '@/components/articles/FeaturedArticle'

export const metadata = {
  title: 'Help Center - Trezbo',
  description: 'Find answers, guides, and support for Trezbo products. Get help with HR management, vendor tracking, payroll, and more.',
}

export default function HelpCenterPage() {
  return (
    <div className="pt-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <HelpCircle className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Help Center</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How can we help you?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Search our knowledge base or browse popular articles below
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <FeaturedArticle />
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <PopularArticles />
        </div>
      </section>

      {/* Help Categories (Quick Links) */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'HR Management', icon: '👥', href: '/help/hr-management' },
              { name: 'Vendor Management', icon: '🚚', href: '/help/vendor-management' },
              { name: 'Business Dashboard', icon: '📊', href: '/help/business-dashboard' },
              { name: 'Employee Onboarding', icon: '📝', href: '/help/employee-onboarding' },
              { name: 'Payroll Tracking', icon: '💰', href: '/help/payroll-tracking' },
              { name: 'Account & Billing', icon: '⚙️', href: '/help/account-billing' },
              { name: 'Security & Privacy', icon: '🔒', href: '/help/security' },
              { name: 'Tutorials', icon: '🎥', href: '/help/tutorials' }
            ].map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all hover:-translate-y-1 text-center"
              >
                <span className="text-3xl mb-2 block">{category.icon}</span>
                <span className="text-sm font-medium text-gray-900">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our support team is ready to assist you with any questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Email Support
              </Link>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4 font-semibold border border-white/20">
                <ChatButton />
              </div>
            </div>
            <p className="text-sm text-white/70 mt-6">
              Average response time: 4 hours • 24/7 support available
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}