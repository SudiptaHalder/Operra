import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  Users, 
  Truck, 
  LayoutDashboard, 
  UserPlus, 
  Clock,
  Calendar,
  FileText,
  BarChart,
  TrendingUp,
  Check,
  Download,
  Star,
  Zap,
  ThumbsUp,
  Headphones,
  Lock,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Bell,
  Mail,
  AlertTriangle,
  AlertCircle,
  Target,
  Heart,
  Briefcase,
  Coffee,
  DollarSign,
  PieChart,
  Settings,
  Eye,
  Edit,
  Search,
  Filter,
  Printer,
  Share2,
  Bookmark,
  Flag,
  Info,
  HelpCircle,
  Award,
  Gift,
  Sun,
  Moon,
  Layers,
  Cpu,
  Network,
  Key,
  Plus,
  Minus,
  SortAsc,
  SortDesc,
  MessageCircle,
  ChevronRight,
  Sparkles,
  CalendarDays,
  Clock as ClockIcon,
  Users as UsersIcon,
  ArrowRight,
  ImageIcon  // Add this line
} from 'lucide-react'

// This would typically come from a database or CMS
const products = {
  'hr-management': {
    id: 'hr-management',
    name: 'HR Management System',
    tagline: 'Stop juggling employee spreadsheets',
    description: 'Complete employee management designed for small teams. Track time-off, store documents, manage performance — all in one place.',
    longDescription: `Managing employees manually is time-consuming and error-prone. Spreadsheets get outdated, documents get lost, and you waste hours on administrative tasks.

Operra's HR Management System gives you a central place to manage everything employee-related. From hiring to offboarding, keep all your employee data organized and accessible.`,
    icon: 'Users',
    color: '#982598',
    lightColor: '#98259810',
    features: [
      {
        name: 'Employee Database',
        description: 'Store all employee information in one place. Custom fields for your specific needs.'
      },
      {
        name: 'Time-off Tracking',
        description: 'Employees request time off, managers approve. Automatic calendar updates.'
      },
      {
        name: 'Document Storage',
        description: 'Keep contracts, IDs, certifications secure and easily accessible.'
      },
      {
        name: 'Performance Reviews',
        description: 'Templates and reminders for regular performance evaluations.'
      },
      {
        name: 'Team Directory',
        description: 'Quick access to employee contacts, roles, and reporting structure.'
      },
      {
        name: 'Automated Reminders',
        description: 'Never miss a review, birthday, or work anniversary again.'
      }
    ],
    benefits: [
      {
        title: 'Save 5+ hours per week',
        description: 'Stop manual data entry and spreadsheet management.'
      },
      {
        title: 'Never lose documents',
        description: 'All employee files stored securely in one place.'
      },
      {
        title: 'Reduce HR headaches',
        description: 'Automated workflows handle the busy work.'
      }
    ],
    useCases: [
      {
        title: 'Small retail shop',
        description: 'Manage 15 employees across multiple shifts. Track time-off and store certifications.'
      },
      {
        title: 'Growing agency',
        description: 'Scale from 10 to 50 employees. Keep performance reviews and documents organized.'
      },
      {
        title: 'Service business',
        description: 'Track licenses and certifications for 30+ field technicians.'
      }
    ],
    stats: {
      users: '500+',
      rating: 4.9,
      timeSaved: '5+ hours/week',
      satisfaction: '98%'
    },
    price: '$5/month',
    employeeRange: 'Up to 50 employees',
    href: '/products/hr-management',
    imagePrompt: "A modern, clean HR management dashboard interface showing employee directory, time-off calendar, and document storage. Professional design with purple (#982598) accents. Dashboard view with employee photos, pending requests, and recent activities. Minimalist, corporate style."
  },
  'vendor-management': {
    id: 'vendor-management',
    name: 'Vendor Management System',
    tagline: 'Never miss a contract renewal',
    description: 'Track vendors, contracts, and payments in one simple dashboard. Get alerts before contracts expire.',
    longDescription: `Managing vendors with spreadsheets means missed renewals, lost contracts, and payment confusion. 

Operra's Vendor Management System keeps all your vendor information organized and sends alerts before contracts expire.`,
    icon: 'Truck',
    color: '#E491C9',
    lightColor: '#E491C910',
    features: [
      {
        name: 'Vendor Database',
        description: 'Store contact info, payment terms, and notes for all vendors.'
      },
      {
        name: 'Contract Tracking',
        description: 'Upload contracts, set expiry dates, get renewal reminders.'
      },
      {
        name: 'Payment Schedule',
        description: 'Track when payments are due and what\'s been paid.'
      },
      {
        name: 'Document Storage',
        description: 'Keep agreements, invoices, and correspondence organized.'
      },
      {
        name: 'Performance Ratings',
        description: 'Rate vendors and keep notes for future reference.'
      },
      {
        name: 'Renewal Alerts',
        description: 'Email notifications before contracts expire.'
      }
    ],
    benefits: [
      {
        title: 'Never miss renewals',
        description: 'Automatic alerts before contracts expire.'
      },
      {
        title: 'Compare vendors easily',
        description: 'Ratings and notes help you make better decisions.'
      },
      {
        title: 'All docs in one place',
        description: 'No more searching email for contracts.'
      }
    ],
    useCases: [
      {
        title: 'Restaurant owner',
        description: 'Track food suppliers, equipment maintenance contracts, and delivery schedules.'
      },
      {
        title: 'Construction company',
        description: 'Manage material suppliers, subcontractor agreements, and equipment rentals.'
      },
      {
        title: 'Marketing agency',
        description: 'Track software subscriptions, freelance contracts, and vendor payments.'
      }
    ],
    stats: {
      users: '350+',
      rating: 4.8,
      timeSaved: '3+ hours/week',
      satisfaction: '97%'
    },
    price: '$5/month',
    employeeRange: 'Up to 50 employees',
    href: '/products/vendor-management',
    imagePrompt: "Clean vendor management dashboard interface showing vendor list, contract expiry calendar, and payment tracking. Professional design with pink (#E491C9) accents. Table view of vendors with status indicators, upcoming renewals highlighted. Modern, organized layout."
  },
  'business-dashboard': {
    id: 'business-dashboard',
    name: 'Business Dashboard',
    tagline: 'See your whole business at a glance',
    description: 'Real-time overview of your operations, team performance, and revenue insights.',
    longDescription: `Running a business without data is flying blind. You need to know what's working and what's not.

Operra's Business Dashboard gives you real-time insights into your operations, team performance, and revenue. Make decisions based on facts, not guesses.`,
    icon: 'LayoutDashboard',
    color: '#15173D',
    lightColor: '#15173D10',
    features: [
      {
        name: 'Team Overview',
        description: 'See who\'s in, who\'s off, and what everyone\'s working on.'
      },
      {
        name: 'Revenue Tracking',
        description: 'Connect your income sources and track performance.'
      },
      {
        name: 'Task Completion',
        description: 'Monitor progress on key projects and tasks.'
      },
      {
        name: 'Upcoming Deadlines',
        description: 'Never miss important dates or renewals.'
      },
      {
        name: 'Custom Reports',
        description: 'Create reports that matter to your business.'
      },
      {
        name: 'Mobile Access',
        description: 'Check your dashboard from anywhere.'
      }
    ],
    benefits: [
      {
        title: 'Data-driven decisions',
        description: 'Stop guessing, start knowing.'
      },
      {
        title: 'Spot issues early',
        description: 'Identify problems before they become crises.'
      },
      {
        title: 'Share with your team',
        description: 'Keep everyone aligned on goals.'
      }
    ],
    useCases: [
      {
        title: 'Small business owner',
        description: 'See all key metrics in one place without digging through reports.'
      },
      {
        title: 'Team leader',
        description: 'Track project progress and team capacity at a glance.'
      },
      {
        title: 'Operations manager',
        description: 'Monitor deadlines, tasks, and operational metrics daily.'
      }
    ],
    stats: {
      users: '400+',
      rating: 4.7,
      timeSaved: '2+ hours/week',
      satisfaction: '96%'
    },
    price: '$8/month',
    employeeRange: 'Up to 150 employees',
    href: '/products/business-dashboard',
    imagePrompt: "Modern business dashboard interface with charts, team activity feed, and key metrics. Professional design with dark navy (#15173D) accents. Clean cards showing revenue trends, task completion, and team availability. Minimalist data visualization."
  },
  'employee-onboarding': {
    id: 'employee-onboarding',
    name: 'Employee Onboarding',
    tagline: 'Get new hires productive faster',
    description: 'Streamlined onboarding with digital offer letters, automated checklists, and document collection.',
    longDescription: `Onboarding new employees manually is chaotic. Paperwork gets lost, tasks get missed, and new hires feel abandoned.

Operra's Employee Onboarding system creates a consistent, professional experience for every new hire. From offer letter to day one, everything is automated.`,
    icon: 'UserPlus',
    color: '#14B8A6',
    lightColor: '#14B8A610',
    features: [
      {
        name: 'Digital Offer Letters',
        description: 'Create and send offer letters with e-signature.'
      },
      {
        name: 'Onboarding Checklists',
        description: 'Step-by-step tasks for you and the new hire.'
      },
      {
        name: 'Document Collection',
        description: 'Request and store IDs, banking, and tax forms.'
      },
      {
        name: 'Training Assignment',
        description: 'Assign training materials and track completion.'
      },
      {
        name: 'Welcome Automation',
        description: 'Auto-send welcome emails and system access.'
      },
      {
        name: 'New Hire Portal',
        description: 'One place for new hires to complete everything.'
      }
    ],
    benefits: [
      {
        title: '50% faster onboarding',
        description: 'From days to hours for each new hire.'
      },
      {
        title: 'Consistent experience',
        description: 'Every employee gets the same great start.'
      },
      {
        title: 'No more chasing',
        description: 'Automated reminders for incomplete tasks.'
      }
    ],
    useCases: [
      {
        title: 'Growing company',
        description: 'Hiring 5+ people per month? Keep onboarding consistent.'
      },
      {
        title: 'Seasonal business',
        description: 'Onboard temporary staff quickly during peak seasons.'
      },
      {
        title: 'Remote teams',
        description: 'Handle all paperwork digitally for remote hires.'
      }
    ],
    stats: {
      users: '300+',
      rating: 4.9,
      timeSaved: '4+ hours/hire',
      satisfaction: '99%'
    },
    price: '$5/month',
    employeeRange: 'Up to 50 employees',
    href: '/products/employee-onboarding',
    imagePrompt: "Clean employee onboarding interface showing new hire checklist, document uploads, and progress tracking. Professional design with teal (#14B8A6) accents. Welcome dashboard for new employees with tasks to complete and documents to sign. Friendly, welcoming design."
  },
  'payroll-tracking': {
    id: 'payroll-tracking',
    name: 'Payroll Tracking',
    tagline: 'Simple time tracking for payroll',
    description: 'Track time, attendance, and prepare payroll data without the complexity of enterprise systems.',
    longDescription: `Payroll mistakes frustrate employees and create headaches for you. Manual time tracking leads to errors and overtime disputes.

Operra's Payroll Tracking makes it simple. Employees clock in/out, you approve timesheets, and export ready-to-use payroll data.`,
    icon: 'Clock',
    color: '#F59E0B',
    lightColor: '#F59E0B10',
    features: [
      {
        name: 'Time Clock',
        description: 'Mobile-friendly clock in/out for employees.'
      },
      {
        name: 'Attendance Records',
        description: "See who's late, who's off, and who's working." // Fixed: Used double quotes to escape apostrophes
      },
      {
        name: 'Timesheet Approval',
        description: 'Review and approve hours before payroll.'
      },
      {
        name: 'Overtime Calculation',
        description: 'Automatic overtime tracking based on your rules.'
      },
      {
        name: 'Payroll Export',
        description: 'Export data to Gusto, ADP, QuickBooks, or your accountant.'
      },
      {
        name: 'PTO Tracking',
        description: 'Track paid time off accruals and usage.'
      }
    ],
    benefits: [
      {
        title: 'Stop manual calculations',
        description: 'No more adding up timesheets by hand.'
      },
      {
        title: 'Reduce errors',
        description: 'Eliminate payroll mistakes and employee frustration.'
      },
      {
        title: 'Know your costs',
        description: 'Track labor costs in real-time.'
      }
    ],
    useCases: [
      {
        title: 'Retail shop',
        description: 'Track hours for hourly employees across shifts.'
      },
      {
        title: 'Restaurant',
        description: 'Manage tipped employees and overtime easily.'
      },
      {
        title: 'Service business',
        description: 'Track field employees time from mobile devices.'
      }
    ],
    stats: {
      users: '280+',
      rating: 4.8,
      timeSaved: '3+ hours/week',
      satisfaction: '97%'
    },
    price: '$8/month',
    employeeRange: 'Up to 150 employees',
    href: '/products/payroll-tracking',
    imagePrompt: "Simple time tracking interface showing clock in/out buttons, timesheet approval queue, and attendance calendar. Professional design with amber (#F59E0B) accents. Mobile-friendly design with employee list and hours worked. Clean, easy to use."
  }
}

// Helper to get icon component
const getIcon = (iconName: string) => {
  switch(iconName) {
    case 'Users': return Users
    case 'Truck': return Truck
    case 'LayoutDashboard': return LayoutDashboard
    case 'UserPlus': return UserPlus
    case 'Clock': return Clock
    default: return Users
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products[params.slug as keyof typeof products]
  
  if (!product) {
    return {
      title: 'Product Not Found - Operra',
    }
  }

  return {
    title: `${product.name} - Operra`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]
  
  if (!product) {
    notFound()
  }

  const Icon = getIcon(product.icon)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15173D05] via-[#98259805] to-[#E491C905]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{
                  background: 'linear-gradient(135deg, #98259810 0%, #E491C910 50%, #15173D10 100%)',
                  border: '1px solid #98259820',
                  color: '#15173D'
                }}
              >
                <Zap className="h-4 w-4" style={{ color: product.color }} />
                {product.employeeRange}
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {product.name}
              </h1>
              
              <p className="mt-4 text-xl" style={{ color: product.color }}>
                {product.tagline}
              </p>
              
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Stats */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current" style={{ color: '#F59E0B' }} />
                  <span className="font-semibold text-gray-900">{product.stats.rating}</span>
                  <span className="text-sm text-gray-500">({product.stats.users} users)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">{product.stats.timeSaved}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">{product.stats.satisfaction} satisfaction</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
                  }}
                >
                  Book a demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  View pricing
                </Link>
              </div>

              <p className="mt-4 text-sm text-gray-400">
                Starting at {product.price} • 14-day free trial
              </p>
            </div>

            {/* Right content - AI Image Placeholder */}
            <div className="relative">
              <div 
                className="rounded-2xl border-2 border-dashed p-8 text-center"
                style={{ borderColor: `${product.color}40` }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-12">
                  <ImageIcon className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-sm font-medium text-gray-700 mb-2">AI-generated dashboard image</p>
                  <p className="text-xs text-gray-500 max-w-md mx-auto">
                    Prompt: "{product.imagePrompt}"
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-[#98259810] border border-[#98259820]">
                    <Sparkles className="h-3 w-3" style={{ color: '#982598' }} />
                    <span style={{ color: '#982598' }}>Generate with AI</span>
                  </div>
                </div>
                
                {/* Preview tags */}
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">Dashboard view</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">Employee list</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">Calendar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why {product.name}?</h2>
            <div className="prose prose-gray">
              {product.longDescription.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-gray-600 mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              No bloated features. Just what you need to get the job done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature) => (
              <div 
                key={feature.name}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {product.benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="p-8 rounded-xl"
                style={{ background: product.lightColor }}
              >
                <h3 className="text-xl font-bold mb-2" style={{ color: product.color }}>{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built for real businesses
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See how different businesses use {product.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.useCases.map((useCase) => (
              <div 
                key={useCase.title}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div 
            className="rounded-2xl p-12 text-white"
            style={{
              background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Simple, affordable pricing</h2>
                <p className="text-white/90 mb-6">
                  {product.name} is included in all plans. Start with a 14-day free trial.
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">{product.price}</span>
                  <span className="text-white/80">per month</span>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>{product.employeeRange}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>All core features included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Email support</span>
                  </div>
                </div>
                <Link
                  href="/book-demo"
                  className="inline-block bg-white text-[#982598] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start your free trial
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">What's included</h3>
                <ul className="space-y-3">
                  {product.features.slice(0, 4).map((feature) => (
                    <li key={feature.name} className="flex items-start gap-2">
                      <Check className="h-5 w-5 flex-shrink-0" />
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className="mt-6 inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  View full pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Works great with
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Combine {product.name} with other Operra tools for a complete solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(products)
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((related) => {
                const RelatedIcon = getIcon(related.icon)
                return (
                  <Link
                    key={related.id}
                    href={`/products/${related.id}`}
                    className="group bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all hover:-translate-y-1"
                  >
                    <div 
                      className="h-10 w-10 rounded-lg flex items-center justify-center mb-3"
                      style={{ background: `${related.color}10` }}
                    >
                      <RelatedIcon className="h-5 w-5" style={{ color: related.color }} />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#982598] transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{related.tagline}</p>
                  </Link>
                )
              })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to simplify your {product.name.toLowerCase()}?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Join 500+ small business owners who've already made the switch.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
                }}
              >
                Book a free demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                View pricing
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}