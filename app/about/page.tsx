// import { Metadata } from 'next'
// import Link from 'next/link'
// import { 
//   Heart, 
//   Target, 
//   Users, 
//   TrendingUp, 
//   Shield, 
//   Sparkles,
//   ArrowRight,
//   CheckCircle
// } from 'lucide-react'

// export const metadata: Metadata = {
//   title: 'About Us - Trezbo',
//   description: 'Learn about Trezbo\'s mission to provide simple, affordable business management software for small businesses.',
// }

// const values = [
//   {
//     icon: Heart,
//     name: 'Customer First',
//     description: 'We build software for small business owners, not enterprise committees. Every feature solves a real problem.'
//   },
//   {
//     icon: Target,
//     name: 'Simplicity',
//     description: 'Complexity is the enemy. We strip away the bloated features you don\'t need and focus on what matters.'
//   },
//   {
//     icon: Shield,
//     name: 'Trust & Transparency',
//     description: 'No hidden fees, no fine print, no surprises. Just honest software at fair prices.'
//   },
//   {
//     icon: Users,
//     name: 'Community',
//     description: 'We\'re not just a software company. We\'re part of the small business community we serve.'
//   }
// ]

// const team = [
//   {
//     name: 'Alex Rivera',
//     role: 'Founder & CEO',
//     bio: 'Former small business owner who got tired of complex, expensive software. Started Trezbo to build what he wished existed.',
//     initials: 'AR',
//     color: '#982598'
//   },
//   {
//     name: 'Maya Patel',
//     role: 'Head of Product',
//     bio: 'Product designer who specializes in making complex tools simple. Previously led design at startups.',
//     initials: 'MP',
//     color: '#E491C9'
//   },
//   {
//     name: 'James Chen',
//     role: 'Lead Engineer',
//     bio: 'Full-stack developer with 12 years experience. Passionate about building reliable, scalable software for small businesses.',
//     initials: 'JC',
//     color: '#15173D'
//   },
//   {
//     name: 'Sarah Okonkwo',
//     role: 'Customer Success',
//     bio: 'Former restaurant owner who understands small business challenges firsthand. Ensures every customer gets the help they need.',
//     initials: 'SO',
//     color: '#14B8A6'
//   }
// ]

// const milestones = [
//   {
//     year: '2020',
//     title: 'The Idea',
//     description: 'Founder Alex struggled with expensive, complex software for his small business. Decided to build something better.'
//   },
//   {
//     year: '2021',
//     title: 'First Prototype',
//     description: 'Built the first version of Trezbo with input from 50+ small business owners.'
//   },
//   {
//     year: '2022',
//     title: 'Official Launch',
//     description: 'Launched to the public with 100 beta customers. Focused on HR and vendor management.'
//   },
//   {
//     year: '2023',
//     title: 'Expansion',
//     description: 'Added payroll tracking and business dashboard. Reached 500+ small business customers.'
//   },
//   {
//     year: '2024',
//     title: 'Today',
//     description: 'Trusted by 1,000+ small businesses. Still focused on our mission: simple, affordable tools.'
//   }
// ]

// export default function AboutPage() {
//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section className="relative py-24 overflow-hidden">
//         {/* Background gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#15173D05] via-[#98259805] to-[#E491C905]" />
        
//         <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left content */}
//             <div>
//               <div 
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
//                 style={{
//                   background: 'linear-gradient(135deg, #98259810 0%, #E491C910 50%, #15173D10 100%)',
//                   border: '1px solid #98259820',
//                   color: '#15173D'
//                 }}
//               >
//                 <Sparkles className="h-4 w-4" style={{ color: '#982598' }} />
//                 Our story
//               </div>
              
//               <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//                 Built for small businesses,{' '}
//                 <span style={{ 
//                   background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text'
//                 }}>
//                   by small business people
//                 </span>
//               </h1>
              
//               <p className="mt-6 text-lg text-gray-600 leading-relaxed">
//                 Trezbo was founded on a simple idea: small businesses deserve software that's 
//                 actually built for them. Not watered-down enterprise tools, not bloated platforms 
//                 with features you'll never use. Just simple, affordable tools that work.
//               </p>
              
//               <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                 <Link
//                   href="/book-demo"
//                   className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
//                   style={{
//                     background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
//                   }}
//                 >
//                   Book a demo
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//                 <Link
//                   href="/products"
//                   className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
//                 >
//                   View products
//                 </Link>
//               </div>
//             </div>

//             {/* Right content - Stats */}
//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 { number: '500+', label: 'Small businesses', color: '#982598' },
//                 { number: '10k+', label: 'Employees managed', color: '#E491C9' },
//                 { number: '98%', label: 'Customer satisfaction', color: '#15173D' },
//                 { number: '24/7', label: 'Support available', color: '#14B8A6' },
//               ].map((stat) => (
//                 <div 
//                   key={stat.label}
//                   className="bg-white p-6 rounded-xl border text-center hover:shadow-md transition-shadow"
//                   style={{ borderColor: `${stat.color}20` }}
//                 >
//                   <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
//                     {stat.number}
//                   </div>
//                   <p className="text-sm text-gray-600">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20 bg-white border-y border-gray-100">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             {/* Main mission */}
//             <div className="lg:col-span-2">
//               <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//                 Our mission: Make business management simple
//               </h2>
//               <p className="mt-4 text-lg text-gray-600">
//                 We believe running a small business is hard enough. Your software shouldn't make it harder.
//               </p>
//               <p className="mt-4 text-gray-600">
//                 Most business software is built for large enterprises with deep pockets and IT departments. 
//                 They pack in hundreds of features you'll never use, charge you for every extra user, and 
//                 make you watch hours of training videos just to get started.
//               </p>
//               <p className="mt-4 text-gray-600">
//                 Trezbo is different. We build for the other 99% — the small business owners who just want 
//                 simple tools that work. No complexity, no bloat, no enterprise pricing.
//               </p>
              
//               <div className="mt-8 space-y-4">
//                 {[
//                   'Simple, intuitive interfaces that don\'t require training',
//                   'Flat, affordable pricing that scales with your business',
//                   'Features you actually need, not ones you\'ll never use',
//                   'Support from people who understand small business'
//                 ].map((item) => (
//                   <div key={item} className="flex items-start gap-3">
//                     <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#982598' }} />
//                     <span className="text-gray-700">{item}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Quote card */}
//             <div 
//               className="bg-gradient-to-br p-8 rounded-2xl text-white"
//               style={{
//                 background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)'
//               }}
//             >
//               <Heart className="h-8 w-8 mb-4 opacity-90" />
//               <p className="text-xl font-medium leading-relaxed">
//                 "We're not just building software. We're building tools that help small businesses thrive."
//               </p>
//               <div className="mt-6">
//                 <p className="font-semibold">Alex Rivera</p>
//                 <p className="text-sm opacity-90">Founder & CEO, Trezbo</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               Our values
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               The principles that guide everything we build.
//             </p>
//           </div>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
//             {values.map((value, index) => {
//               const Icon = value.icon
//               return (
//                 <div 
//                   key={value.name}
//                   className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
//                 >
//                   <div 
//                     className="h-12 w-12 rounded-lg flex items-center justify-center mb-4"
//                     style={{
//                       background: index === 0 
//                         ? '#98259810'
//                         : index === 1
//                         ? '#E491C910'
//                         : index === 2
//                         ? '#15173D10'
//                         : '#14B8A610'
//                     }}
//                   >
//                     <Icon 
//                       className="h-6 w-6" 
//                       style={{
//                         color: index === 0 
//                           ? '#982598'
//                           : index === 1
//                           ? '#E491C9'
//                           : index === 2
//                           ? '#15173D'
//                           : '#14B8A6'
//                       }} 
//                     />
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900">{value.name}</h3>
//                   <p className="mt-2 text-gray-600">
//                     {value.description}
//                   </p>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Journey Timeline */}
//       <section className="py-20 bg-gray-50">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               Our journey
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               From a simple idea to helping thousands of small businesses.
//             </p>
//           </div>

//           <div className="mt-16 relative">
//             {/* Timeline line */}
//             <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#982598] via-[#E491C9] to-[#15173D] hidden md:block" style={{ left: '50%', marginLeft: '-1px' }} />
            
//             <div className="space-y-12">
//               {milestones.map((milestone, index) => (
//                 <div key={milestone.year} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
//                   {/* Year bubble */}
//                   <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12">
//                     <div 
//                       className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 text-lg font-bold"
//                       style={{ 
//                         borderColor: index === 0 
//                           ? '#982598'
//                           : index === 1
//                           ? '#E491C9'
//                           : index === 2
//                           ? '#15173D'
//                           : index === 3
//                           ? '#14B8A6'
//                           : '#982598',
//                         color: index === 0 
//                           ? '#982598'
//                           : index === 1
//                           ? '#E491C9'
//                           : index === 2
//                           ? '#15173D'
//                           : index === 3
//                           ? '#14B8A6'
//                           : '#982598'
//                       }}
//                     >
//                       {milestone.year.slice(-2)}
//                     </div>
//                   </div>
                  
//                   {/* Content */}
//                   <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
//                     <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
//                       <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
//                       <p className="mt-2 text-gray-600">{milestone.description}</p>
//                       <p className="mt-3 text-sm" style={{ color: '#982598' }}>{milestone.year}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//               Meet the team
//             </h2>
//             <p className="mt-4 text-lg text-gray-600">
//               We're small business people too. We understand your challenges because we've lived them.
//             </p>
//           </div>

//           <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {team.map((member) => (
//               <div 
//                 key={member.name}
//                 className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow group"
//               >
//                 <div 
//                   className="h-20 w-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
//                   style={{ background: member.color }}
//                 >
//                   {member.initials}
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
//                 <p className="text-sm font-medium" style={{ color: member.color }}>{member.role}</p>
//                 <p className="mt-3 text-sm text-gray-600">
//                   {member.bio}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-gray-50">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//                 Why small businesses choose Trezbo
//               </h2>
//               <div className="mt-8 space-y-6">
//                 {[
//                   {
//                     title: 'Built for your size',
//                     description: 'Not enterprise software stripped down. Built from the ground up for small teams.'
//                   },
//                   {
//                     title: 'Simple pricing',
//                     description: 'Flat monthly rates. No per-user fees, no hidden costs, no surprises.'
//                   },
//                   {
//                     title: 'Easy to use',
//                     description: 'No training required. If you can use a spreadsheet, you can use Trezbo.'
//                   },
//                   {
//                     title: 'Support that cares',
//                     description: 'Talk to real people who understand small business challenges.'
//                   }
//                 ].map((item) => (
//                   <div key={item.title} className="flex items-start gap-4">
//                     <div className="h-6 w-6 rounded-full bg-[#98259810] flex items-center justify-center mt-0.5">
//                       <div className="h-2 w-2 rounded-full" style={{ background: '#982598' }} />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900">{item.title}</h3>
//                       <p className="text-gray-600">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CTA card */}
//             <div 
//               className="p-8 rounded-2xl text-white"
//               style={{
//                 background: 'linear-gradient(135deg, #15173D 0%, #982598 50%, #E491C9 100%)'
//               }}
//             >
//               <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
//               <p className="mb-6 opacity-90">
//                 Join thousands of small business owners who've simplified their operations with Trezbo.
//               </p>
//               <Link
//                 href="/book-demo"
//                 className="inline-flex items-center gap-2 bg-white text-[#15173D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
//               >
//                 Book your free demo
//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//               <p className="mt-4 text-sm opacity-80">
//                 No credit card required • 14-day free trial
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Star,
  TrendingUp,
  Shield,
  Zap,
  PhoneCall,
  Package,
  BarChart2,
  Lock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Trezbo',
  description:
    'Trezbo provides affordable, ready-to-use HR and business management software built exclusively for small and growing businesses.',
}

const stats = [
  { number: '500+', label: 'Businesses served' },
  { number: '4.8 / 5', label: 'Customer satisfaction' },
  { number: '< 4 hrs', label: 'Average setup time' },
  { number: '12+', label: 'Industries covered' },
]

const values = [
  {
    icon: Package,
    title: 'Affordable by design',
    description:
      'Flat monthly pricing built for small teams. No per-user charges, no surprise fees, no costs that scale against you as you grow.',
  },
  {
    icon: Zap,
    title: 'Ready to use from day one',
    description:
      'No lengthy onboarding. No implementation consultants. Most businesses are fully set up and running within a few hours.',
  },
  {
    icon: TrendingUp,
    title: 'Scales with your business',
    description:
      'Start with what you need today. Add modules as you grow. Upgrade to Pro or migrate your data anytime — completely on your terms.',
  },
  {
    icon: Shield,
    title: 'Transparent pricing',
    description:
      'The price listed is the price you pay. No hidden tiers, no fine print, no invoice surprises at the end of the month.',
  },
  {
    icon: PhoneCall,
    title: 'Support that responds',
    description:
      'Reach a real person — not a chatbot. Our support team is available seven days a week, including weekends.',
  },
  {
    icon: Lock,
    title: 'No lock-in, ever',
    description:
      'Your data belongs to you. Export it anytime, in any format. We earn your business every month — not through contracts.',
  },
]

const offerings = [
  {
    icon: Users,
    title: 'HR Management',
    description:
      'Employee records, leave tracking, attendance, and HR workflows — all in one clean interface designed for non-HR teams.',
  },
  {
    icon: BarChart2,
    title: 'Business Dashboard',
    description:
      'A unified view of your business health. Track key metrics, vendor performance, and operational data without switching between tools.',
  },
  {
    icon: Package,
    title: 'Vendor Management',
    description:
      'Manage supplier relationships, purchase orders, and vendor communications with full visibility and zero spreadsheets.',
  },
  {
    icon: TrendingUp,
    title: 'Payroll Tracking',
    description:
      'Accurate, hassle-free payroll tracking that keeps your team paid on time and your records audit-ready.',
  },
]

const milestones = [
  {
    year: '2020',
    title: 'Founded',
    description:
      'Trezbo was established with a clear mission: build business management software that works for small teams, not just large enterprises.',
  },
  {
    year: '2021',
    title: 'Product development',
    description:
      'Over 60 small business owners participated in our early testing program. Their feedback shaped every feature we shipped.',
  },
  {
    year: '2022',
    title: 'Public launch',
    description:
      'Trezbo launched publicly with HR management and vendor tools — the two areas small businesses needed most.',
  },
  {
    year: '2023',
    title: 'Platform expansion',
    description:
      'Payroll tracking and the unified business dashboard were added based on customer demand. Over 500 businesses onboarded.',
  },
  {
    year: '2024',
    title: 'Growing stronger',
    description:
      'Trusted by 500+ businesses across 12 industries. Continued investment in reliability, new features, and customer support.',
  },
]

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    bio: 'Brings 10+ years of experience in business operations and software. Leads product strategy and company direction at Trezbo.',
    initials: 'AR',
    color: '#982598',
  },
  {
    name: 'Maya Patel',
    role: 'Head of Product',
    bio: 'Product designer with a specialisation in simplifying complex workflows for non-technical users. 8 years across SaaS products.',
    initials: 'MP',
    color: '#E491C9',
  },
  {
    name: 'James Chen',
    role: 'Lead Engineer',
    bio: 'Full-stack engineer with 12 years of experience building reliable, high-availability software platforms for growing businesses.',
    initials: 'JC',
    color: '#15173D',
  },
  {
    name: 'Sarah Okonkwo',
    role: 'Head of Customer Success',
    bio: 'Ensures every Trezbo customer gets maximum value from the platform. Has worked directly with 200+ small business teams.',
    initials: 'SO',
    color: '#14B8A6',
  },
]

const industries = [
  'Retail', 'Restaurants', 'Clinics & Wellness', 'Agencies',
  'Logistics', 'Manufacturing', 'Freelance Teams', 'Education',
  'Construction', 'Salons', 'E-commerce', 'Consulting',
]

export default function AboutPage() {
  return (
    <div className="pt-16 overflow-hidden">

      {/* HERO */}
      <section className="relative py-28 bg-white">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-7"
                style={{ background: '#98259215', color: '#982598', border: '1px solid #98259830' }}
              >
                About Trezbo
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.08]">
                Business software{' '}
                <span
                  style={{
                    background: 'linear-gradient(120deg, #982598 0%, #E491C9 55%, #15173D 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  built for small teams.
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Trezbo provides ready-to-use HR, payroll, vendor, and business management
                tools at a subscription cost that makes sense for businesses with 5 to 100
                employees. No bloated features. No enterprise pricing. Just practical software
                that works from day one.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                As your business grows, Trezbo grows with you. Upgrade your plan, add modules,
                or move to another platform entirely — we make it easy either way.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #982598 0%, #15173D 100%)' }}
                >
                  Book a free demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  View all products
                </Link>
              </div>
              <p className="mt-4 text-xs text-gray-400">
                14-day free trial &nbsp;&middot;&nbsp; No credit card required &nbsp;&middot;&nbsp; Cancel anytime
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-7 border border-gray-200 bg-gray-50 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl font-extrabold mb-2" style={{ color: '#982598' }}>
                    {stat.number}
                  </div>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION BANNER */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(135deg, #15173D 0%, #982598 100%)' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
                Our mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Every small business deserves access to professional-grade tools — not just the ones with enterprise budgets.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-white/80 text-base leading-relaxed">
                Most business software is designed for large companies with IT departments and procurement teams. Small businesses are left with tools that are overcomplicated, overpriced, and built for a scale they may never reach.
              </p>
              <p className="text-white/80 text-base leading-relaxed">
                Trezbo changes that. We offer the core capabilities that growing businesses rely on — packaged for smaller teams, priced fairly, and built to be used without any technical background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#982598] mb-3">
              Our products
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Everything you need to run your business
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              Four core modules. One affordable subscription. All working together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((item, i) => {
              const Icon = item.icon
              const accent = i === 0 ? '#982598' : i === 1 ? '#15173D' : i === 2 ? '#14B8A6' : '#b035b0'
              return (
                <div
                  key={item.title}
                  className="flex gap-6 p-7 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 bg-white"
                >
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${accent}18` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: accent }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY TREZBO */}
      <section className="py-24 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E491C9] mb-3">
              Why businesses choose us
            </p>
            <h2 className="text-4xl font-bold text-white">
              Designed around the way small businesses actually work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="rounded-2xl p-7 border border-white/10 hover:border-white/20 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <div
                    className="h-11 w-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: '#98259828' }}
                  >
                    <Icon className="h-5 w-5" style={{ color: '#E491C9' }} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#982598] mb-3">
            Who we serve
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Trusted across industries
          </h2>
          <p className="text-gray-500 mb-10">
            From single-location retailers to multi-branch clinics — teams of all shapes use Trezbo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-5 py-2 rounded-full text-sm font-medium border border-gray-200 bg-gray-50 text-gray-600 hover:border-[#982598] hover:text-[#982598] transition-colors cursor-default"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#982598] mb-3">
              Our journey
            </p>
            <h2 className="text-4xl font-bold text-gray-900">How we got here</h2>
            <p className="mt-4 text-gray-500">
              Built steadily, with purpose — guided by our customers every step of the way.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute hidden md:block top-0 bottom-0 w-px"
              style={{
                left: '50%',
                marginLeft: '-0.5px',
                background: 'linear-gradient(to bottom, #982598, #E491C9, #15173D)',
              }}
            />

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 mb-4 md:mb-0">
                    <div
                      className="h-14 w-14 rounded-full bg-white border-2 flex items-center justify-center font-bold text-sm z-10 shadow-sm"
                      style={{ borderColor: '#982598', color: '#982598' }}
                    >
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 w-full">
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <span
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: '#982598' }}
                      >
                        {milestone.year}
                      </span>
                      <h3 className="text-base font-semibold text-gray-900 mt-1">{milestone.title}</h3>
                      <p className="mt-2 text-sm text-gray-500 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#982598] mb-3">
              The team
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Led by people who understand your business
            </h2>
            <p className="mt-4 text-gray-500 text-base">
              Our team combines deep product expertise with real-world business experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg transition-shadow text-center"
              >
                <div
                  className="h-20 w-20 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-bold text-white"
                  style={{ background: member.color }}
                >
                  {member.initials}
                </div>
                <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mt-1 mb-3"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#982598] mb-4">
                Get started
              </p>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                See Trezbo in action — free, no commitment.
              </h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                Book a 20-minute demo tailored to your business. We will walk you through
                the exact features relevant to your team size, industry, and current challenges.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  'Live walkthrough — no pre-recorded videos',
                  'Personalised to your industry and team size',
                  'Honest guidance, including whether we are the right fit',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="h-5 w-5 flex-shrink-0 mt-0.5"
                      style={{ color: '#982598' }}
                    />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-9 text-white"
              style={{ background: 'linear-gradient(145deg, #15173D 0%, #982598 100%)' }}
            >
              <h3 className="text-2xl font-bold mb-2">Start your free trial</h3>
              <p className="text-white/75 text-sm mb-7">
                14 days free. No credit card. Full access. Cancel anytime.
              </p>
              <Link
                href="/book-demo"
                className="flex items-center justify-center gap-2 bg-white px-6 py-4 rounded-xl font-semibold text-[#15173D] hover:bg-gray-100 transition-colors w-full"
              >
                Book your free demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="mt-7 grid grid-cols-3 gap-3 text-center">
                {[
                  { icon: Shield, label: 'No credit card' },
                  { icon: Clock, label: '20-min demo' },
                  { icon: Star, label: '4.8 / 5 rated' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="bg-white/10 rounded-xl p-3">
                    <Icon className="h-4 w-4 mx-auto mb-1 text-white/80" />
                    <p className="text-xs text-white/75">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}