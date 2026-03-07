 import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { 
  Check, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Sparkles,
  Truck,
  LayoutDashboard,
  UserPlus,
  ChevronRight,
  CheckCircle,
  Zap,
  Shield,
  ThumbsUp,
  Calendar,
  FileText,
  BarChart,
  Download,
  MessageCircle,
  TrendingUp,
  Award,
  Globe,
  Smartphone,
  Headphones,
  Lock,
  Layers,
  Target,
  Heart,
  Briefcase,
  DollarSign,
  PieChart,
  Bell,
  Mail,
  Coffee,
  AlertTriangle,
  HelpCircle,
  BookOpen,
  PenTool,
  Scissors,
  Wrench,
  Home,
  ShoppingBag,
  Building2,
  Landmark
} from 'lucide-react'

// Product data with comprehensive content
export const productsData = {
  'hr-management': {
    id: 'hr-management',
    name: 'HR Management',
    tagline: 'Simple HR for small teams',
    description: 'Stop juggling employee spreadsheets. Track time-off, store documents, manage performance — all in one place.',
    longDescription: "HR Management is built for small business owners who don't have an HR department. It replaces messy spreadsheets with a clean, organized system that saves you hours every week. From hiring to offboarding, everything is in one place.",
    icon: 'Users',
    color: '#982598',
    rating: 4.9,
    users: '500+',
    price: '$5',
    employeeRange: 'Up to 50 employees',
    href: '/products/hr-management',
    
    // Only 2 images - hero and one additional
    heroImage: '/images/products/hr-management/dashboard.jpg',
    featureImage: '/images/products/hr-management/employees.jpg',
    
    // Why choose section (content heavy)
    whyChoose: [
      {
        title: 'Save 5+ hours every week',
        description: 'Stop manual data entry and spreadsheet management. Automate routine tasks and focus on growing your business.',
        icon: 'Clock',
        details: [
          'No more manual data entry across multiple spreadsheets',
          'Automated time-off request workflows',
          'Bulk updates for employee information',
          'Template-based document generation'
        ]
      },
      {
        title: 'Never lose documents again',
        description: 'All employee contracts, IDs, certifications stored securely in one place. Access anytime, anywhere.',
        icon: 'Lock',
        details: [
          'Secure cloud storage with 256-bit encryption',
          'Version history for all documents',
          'Easy search by employee or document type',
          'Set expiration alerts for certifications'
        ]
      },
      {
        title: 'Know who\'s off instantly',
        description: 'See time-off requests and approvals at a glance. No more checking email or spreadsheets.',
        icon: 'Calendar',
        details: [
          'Team calendar showing all time-off',
          'Automated approval workflows',
          'Balance tracking for each employee',
          'Mobile access to approve on the go'
        ]
      },
      {
        title: 'Stay compliant easily',
        description: 'Automated reminders for reviews, document expirations, and important dates. Never miss a deadline.',
        icon: 'Shield',
        details: [
          'Automated review schedules',
          'Document expiry tracking',
          'Compliance checklist templates',
          'Audit-ready reports'
        ]
      }
    ],
    
    // Problems it solves
    problems: [
      {
        problem: 'Spreadsheets get outdated quickly',
        solution: 'Real-time updates across all devices. Everyone sees the same information instantly.',
        impact: 'No more version confusion or outdated data'
      },
      {
        problem: 'Documents lost in email threads',
        solution: 'Central document storage with version history and powerful search.',
        impact: 'Find any document in seconds, not hours'
      },
      {
        problem: 'Time-off confusion and conflicts',
        solution: 'Clear calendar showing who\'s off when. Automated approval workflow.',
        impact: 'No more double-booked time-off or schedule conflicts'
      },
      {
        problem: 'Missed performance reviews',
        solution: 'Automated reminders and templates for consistent, timely reviews.',
        impact: 'Better employee engagement and retention'
      },
      {
        problem: 'Manual data entry errors',
        solution: 'Automated data entry with validation rules.',
        impact: '98% reduction in data errors'
      },
      {
        problem: 'No centralized employee records',
        solution: 'Complete employee database with custom fields.',
        impact: 'All employee info accessible in one click'
      }
    ],
    
    // Features with detailed explanations
    features: [
      {
        name: 'Employee Database',
        description: 'Complete employee records with custom fields',
        details: [
          'Store contact information and emergency contacts for each employee',
          'Track job history, positions, departments, and reporting structure',
          'Add custom fields for your specific business needs',
          'Upload employee photos and identification documents',
          'Tag employees for easy filtering and reporting',
          'Export data anytime to CSV, Excel, or PDF formats',
          'Bulk import employees from spreadsheets',
          'Role-based access control for sensitive information'
        ]
      },
      {
        name: 'Time-off Tracking',
        description: 'Simple request and approval workflow',
        details: [
          'Employees request time off in seconds through web or mobile',
          'Managers approve or decline with one click',
          'Automatic calendar updates across the organization',
          'Track vacation, sick days, personal time, and holidays separately',
          'Set custom accrual rules and track balances in real-time',
          'View team availability at a glance with color-coded calendar',
          'Receive email notifications for pending requests',
          'Export time-off reports for payroll processing'
        ]
      },
      {
        name: 'Document Management',
        description: 'Secure storage for all employee documents',
        details: [
          'Upload contracts, agreements, and offer letters securely',
          'Store IDs, passports, and work authorizations with expiry tracking',
          'Keep certifications, licenses, and training records organized',
          'Set expiration alerts for important documents',
          'Version history for all files with restore capability',
          'Role-based access control for sensitive documents',
          'Full-text search within documents',
          'Audit logs for document access and changes'
        ]
      },
      {
        name: 'Performance Reviews',
        description: 'Templates and reminders for evaluations',
        details: [
          'Customizable review templates for different roles',
          'Schedule regular performance reviews with automated reminders',
          'Track goals and achievements over time',
          'Collect 360-degree feedback from peers and managers',
          'Review history for each employee accessible anytime',
          'Export reviews for records or legal compliance',
          'Set development plans and track progress',
          'Compensation review integration'
        ]
      },
      {
        name: 'Reporting & Analytics',
        description: 'Understand your workforce better',
        details: [
          'Headcount reports by department, role, and location',
          'Turnover and retention analytics with trends',
          'Time-off usage patterns and forecasting',
          'Demographic insights for diversity tracking',
          'Compliance reporting for audits',
          'Custom report builder with drag-and-drop',
          'Scheduled report delivery via email',
          'Export to Excel, PDF, or CSV formats'
        ]
      },
      {
        name: 'Mobile Access',
        description: 'Manage HR from anywhere',
        details: [
          'Full functionality on iOS and Android devices',
          'Approve time-off requests on the go',
          'Access employee directory from anywhere',
          'View documents directly on your phone',
          'Receive push notifications for approvals',
          'Clock in/out for employees with GPS',
          'Secure biometric login',
          'Offline access to key information'
        ]
      }
    ],
    
    // Benefits categorized
    benefits: {
      time: [
        'Save 5-7 hours per week on HR admin',
        'Reduce time-off request processing from days to minutes',
        'Cut document search time by 90%',
        'Onboard new employees in hours instead of days'
      ],
      money: [
        'Avoid compliance fines with automated tracking',
        'Reduce overtime costs with better scheduling',
        'Eliminate payroll errors from manual time tracking',
        'Save on document storage and management'
      ],
      peace: [
        'Never miss important deadlines or reviews',
        'No more searching through email for documents',
        'Confidence that data is secure and backed up',
        'Audit-ready reports anytime'
      ]
    },
    
    // Use cases with real scenarios
    useCases: [
      {
        title: 'Retail Shop with 15 Employees',
        scenario: 'Sarah runs a bakery with 15 employees across morning and evening shifts. Before, she tracked time-off in a notebook and stored documents in a filing cabinet.',
        solution: 'Now she manages everything digitally. Employees request time-off through their phones, she approves instantly, and all documents are securely stored and searchable.',
        results: [
          'Saves 4 hours per week on scheduling',
          'No more double-booked time-off',
          'All employee documents organized'
        ]
      },
      {
        title: 'Marketing Agency Growing from 10 to 50',
        scenario: 'Mike\'s agency grew fast. He went from 10 to 45 employees in 18 months. Spreadsheets became unmanageable.',
        solution: 'HR Management helped him scale. Automated onboarding, performance reviews, and document management kept everything organized.',
        results: [
          'Onboarding time reduced from 3 days to 3 hours',
          '100% of performance reviews completed on time',
          'No lost documents during rapid growth'
        ]
      },
      {
        title: 'Construction Company with Field Technicians',
        scenario: 'Lisa manages 30 technicians with various certifications that expire at different times. Tracking manually was impossible.',
        solution: 'Now she tracks all certifications with expiry alerts. Never misses a renewal. Technicians upload new certs from their phones.',
        results: [
          'Zero compliance issues from expired certs',
          'Field techs love the mobile access',
          'Saved 6 hours per week on tracking'
        ]
      },
      {
        title: 'Restaurant with High Turnover',
        scenario: 'Tom runs a busy restaurant with high seasonal turnover. Onboarding was chaotic and documents often got lost.',
        solution: 'Digital onboarding with checklists ensures every new hire completes everything. Documents are uploaded instantly.',
        results: [
          'Onboarding time cut by 70%',
          'No more missing I-9 forms',
          'Consistent experience for every hire'
        ]
      }
    ],
    
    // Testimonials
    testimonials: [
      {
        quote: "We were drowning in spreadsheets. This software saved us hours every week and gave us back time to focus on our customers. The time-off tracking alone is worth it.",
        author: "Sarah Chen",
        role: "Owner, Chen's Bakery",
        rating: 5,
        businessType: "Retail",
        employees: 15,
        usingSince: "2 years"
      },
      {
        quote: "Finally, HR software that doesn't require a degree to use. Simple, intuitive, and my team loves it. The mobile app is a game-changer for approving time-off.",
        author: "Mike Rodriguez",
        role: "Founder, Rodriguez Plumbing",
        rating: 5,
        businessType: "Construction",
        employees: 28,
        usingSince: "18 months"
      },
      {
        quote: "The document storage alone is worth the price. No more searching email for contracts and agreements. Everything is organized and searchable.",
        author: "Lisa Thompson",
        role: "Director, Thompson Marketing",
        rating: 5,
        businessType: "Agency",
        employees: 42,
        usingSince: "1 year"
      },
      {
        quote: "I can see who's off, who's working, and manage everything from my phone. Perfect for my busy schedule. The certification tracking saved us from a compliance nightmare.",
        author: "David Kim",
        role: "Owner, Kim's Landscaping",
        rating: 5,
        businessType: "Service Business",
        employees: 22,
        usingSince: "8 months"
      }
    ],
    
    // Comparison with alternatives
    comparisons: [
      {
        alternative: 'Spreadsheets',
        problems: [
          'Manual updates lead to version chaos',
          'No document storage',
          'No automated reminders',
          'Prone to errors and data loss',
          'Not accessible on mobile'
        ],
        whyBetter: 'Real-time updates, secure storage, automated workflows, mobile access'
      },
      {
        alternative: 'Enterprise HR Software',
        problems: [
          'Costs $50-100+ per month',
          'Complex features you don\'t need',
          'Requires training to use',
          'Long implementation time',
          'Annual contracts required'
        ],
        whyBetter: 'Simple, affordable ($5/month), no training needed, month-to-month'
      },
      {
        alternative: 'Paper Filing System',
        problems: [
          'Documents get lost or damaged',
          'No remote access',
          'Difficult to search',
          'No backup',
          'Takes up physical space'
        ],
        whyBetter: 'Secure cloud storage, access anywhere, instant search, automated backups'
      }
    ],
    
    // ROI calculation
    roi: {
      timeSavedPerWeek: '5 hours',
      hourlyRate: '$50',
      weeklySavings: '$250',
      monthlySavings: '$1,000',
      annualSavings: '$12,000',
      costPerMonth: '$5',
      roi: '24,000%'
    },
    
    // Statistics
    stats: [
      { value: '500+', label: 'Active businesses' },
      { value: '98%', label: 'Customer satisfaction' },
      { value: '5h', label: 'Average time saved per week' },
      { value: '24/7', label: 'Customer support' },
      { value: '99.9%', label: 'Uptime guarantee' },
      { value: '10k+', label: 'Employees managed' }
    ],
    
    // Integrations
    integrations: [
      'Gmail', 'Outlook', 'Slack', 'QuickBooks', 'Gusto', 'Zoom',
      'Microsoft Teams', 'Google Drive', 'Dropbox', 'Zapier'
    ],
    
    // FAQ
    faqs: [
      {
        question: 'Can I export employee data?',
        answer: 'Yes, you can export all employee data to CSV, Excel, or PDF anytime. Perfect for reporting, backups, or sharing with your accountant. Exports include all custom fields and document metadata.'
      },
      {
        question: 'Is it mobile friendly?',
        answer: 'Yes, it works perfectly on all devices - desktop, tablet, and phone. Native apps are available for iOS and Android with full functionality including approval workflows, document viewing, and push notifications.'
      },
      {
        question: 'How secure is my data?',
        answer: 'Bank-level 256-bit encryption for all data, both in transit and at rest. Daily automated backups stored in multiple locations. SOC2 compliant. Regular security audits. Your data is safer than on your local computer.'
      },
      {
        question: 'Can I customize fields?',
        answer: 'Absolutely! Add custom fields for any information you need to track - employee IDs, uniform sizes, parking spots, emergency contacts, or anything specific to your business. Custom fields work in reports and exports too.'
      },
      {
        question: 'What support do you offer?',
        answer: '24/7 email support included with response within 4 hours. Premium plans include phone support during business hours. We also have extensive documentation, video tutorials, and a knowledge base with common questions.'
      },
      {
        question: 'Is there a setup fee?',
        answer: 'No setup fees, no hidden costs, no implementation charges. Just the monthly subscription. Start with a 14-day free trial, no credit card required. Import your existing data easily from spreadsheets.'
      },
      {
        question: 'How do I import existing data?',
        answer: 'We provide CSV templates for easy import. Upload your employee data, time-off history, and documents in minutes. Our support team can help with the import process if needed.'
      },
      {
        question: 'Can I add my team members?',
        answer: 'Yes, add unlimited team members with role-based permissions. Managers can have approval权限, regular employees can request time-off and view their own data, admins have full access.'
      }
    ],
    
    // Awards/Recognition
    awards: [
      { name: 'Best HR Software for Small Business 2024', issuer: 'Small Business Awards' },
      { name: 'Top Rated Software 2023', issuer: 'Software Reviews' },
      { name: 'Easiest to Use 2024', issuer: 'Business Tech Magazine' },
      { name: 'Best Value 2024', issuer: 'SMB Tech Guide' }
    ],
    
    // Resources
    resources: [
      { title: 'HR Compliance Guide for Small Business', type: 'eBook', pages: 45 },
      { title: 'How to Onboard Employees in 24 Hours', type: 'Webinar', duration: '45 min' },
      { title: 'Time-off Policy Template', type: 'Template', format: 'Word/PDF' },
      { title: 'Employee Handbook Template', type: 'Template', format: 'Word' }
    ]
  },
  
  // For brevity, I'll include only HR data above. 
  // You would copy the pattern for other products with their specific content.
  
  'vendor-management': {
    id: 'vendor-management',
    name: 'Vendor Management',
    tagline: 'Never miss a contract renewal',
    description: 'Track vendors, contracts, and payments in one simple dashboard. Get alerts before contracts expire.',
    longDescription: "Vendor Management helps small businesses track vendors, contracts, and payments without spreadsheets. Get reminders before contracts expire, store all agreements securely, and know exactly what you owe and when.",
    icon: 'Truck',
    color: '#E491C9',
    rating: 4.8,
    users: '350+',
    price: '$5',
    employeeRange: 'Up to 50 employees',
    href: '/products/vendor-management',
    heroImage: '/images/products/vendor-management/dashboard.jpg',
    featureImage: '/images/products/vendor-management/contracts.jpg',
    
    // Similar comprehensive content structure would go here
    // For space, I'm showing the structure but you'd fill with actual content
    whyChoose: [],
    problems: [],
    features: [],
    benefits: { time: [], money: [], peace: [] },
    useCases: [],
    testimonials: [],
    comparisons: [],
    roi: {},
    stats: [],
    integrations: [],
    faqs: [],
    awards: [],
    resources: []
  }
  // Add other products similarly
}

// Helper to get icon component
const getIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    'Users': Users,
    'Truck': Truck,
    'LayoutDashboard': LayoutDashboard,
    'UserPlus': UserPlus,
    'Clock': Clock,
    'Calendar': Calendar,
    'FileText': FileText,
    'BarChart': BarChart,
    'TrendingUp': TrendingUp,
    'Check': Check,
    'Download': Download,
    'Star': Star,
    'Zap': Zap,
    'ThumbsUp': ThumbsUp,
    'Headphones': Headphones,
    'Lock': Lock,
    'Globe': Globe,
    'Smartphone': Smartphone,
    'Shield': Shield,
    'Bell': Bell,
    'Mail': Mail,
    'AlertTriangle': AlertTriangle,
    'Target': Target,
    'Heart': Heart,
    'Briefcase': Briefcase,
    'Coffee': Coffee,
    'DollarSign': DollarSign,
    'PieChart': PieChart,
    'Award': Award,
    'BookOpen': BookOpen,
    'PenTool': PenTool,
    'Wrench': Wrench,
    'Home': Home,
    'ShoppingBag': ShoppingBag,
    'Building2': Building2,
    'Landmark': Landmark,
    'Layers': Layers,
    'MessageCircle': MessageCircle,
    'HelpCircle': HelpCircle
  }
  return icons[iconName] || Users
}

interface ContentProductTemplateProps {
  slug: string
}

export default function ContentProductTemplate({ slug }: ContentProductTemplateProps) {
  const product = productsData[slug as keyof typeof productsData]
  
  if (!product) {
    notFound()
  }

  const Icon = getIcon(product.icon)

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/products" className="text-gray-400 hover:text-gray-600">Products</Link>
            <ChevronRight className="h-3 w-3 text-gray-300" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section - Image Right, Content Left */}
      <section className="pt-12 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="h-16 w-16 rounded-xl flex items-center justify-center"
                  style={{ background: `${product.color}15` }}
                >
                  <Icon className="h-8 w-8" style={{ color: product.color }} />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
                  <p className="text-xl text-gray-500">{product.tagline}</p>
                </div>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-gray-400 text-sm">({product.users} reviews)</span>
                </div>
                <div className="h-4 w-px bg-gray-200" />
                <div className="text-sm text-gray-500">{product.employeeRange}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-demo"
                  className="px-8 py-4 rounded-xl text-white font-semibold transition-all hover:shadow-lg text-center"
                  style={{ background: product.color }}
                >
                  Start 14-day free trial
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors text-center"
                >
                  View pricing
                </Link>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                ✦ No credit card required • Cancel anytime
              </p>
            </div>

            {/* Right - Hero Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src={product.heroImage}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {product.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - Content Only, No Image */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why small businesses choose {product.name}</h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Four key reasons why business owners like you make the switch
          </p>
          
          <div className="space-y-12">
            {product.whyChoose.map((item, index) => {
              const ItemIcon = getIcon(item.icon)
              return (
                <div key={item.title} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div 
                      className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${product.color}15` }}
                    >
                      <ItemIcon className="h-6 w-6" style={{ color: product.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {item.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Problems Solved Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Problems we solve</h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            Stop struggling with these common small business headaches
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.problems.map((item) => (
              <div key={item.problem} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="h-5 w-5 mt-1 flex-shrink-0" style={{ color: product.color }} />
                  <h3 className="font-semibold text-gray-900">{item.problem}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-3 ml-8">{item.solution}</p>
                <p className="text-sm font-medium ml-8" style={{ color: product.color }}>✓ {item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Image - The second image */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src={product.featureImage}
              alt={`${product.name} feature`}
              width={1000}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            ✦ {product.name} interface showing key features
          </p>
        </div>
      </section>

      {/* All Features - Detailed */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Everything included</h2>
          <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
            No bloated features. Just what you need to run your business.
          </p>
          
          <div className="space-y-8">
            {product.features.map((feature) => (
              <div key={feature.name} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.name}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {feature.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-2">
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits by Category */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Benefits at a glance</h2>
          <p className="text-lg text-gray-600 mb-16 text-center">See exactly how {product.name} helps your business</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <Clock className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Time savings</h3>
              <ul className="space-y-3">
                {product.benefits.time.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8">
              <DollarSign className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Money savings</h3>
              <ul className="space-y-3">
                {product.benefits.money.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-2xl p-8">
              <Heart className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Peace of mind</h3>
              <ul className="space-y-3">
                {product.benefits.peace.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-purple-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Calculate your ROI</h2>
          <p className="text-xl text-gray-300 mb-8">See how much you'll save with {product.name}</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div>
                <div className="text-sm text-gray-400 mb-1">Time saved/week</div>
                <div className="text-2xl font-bold">{product.roi.timeSavedPerWeek}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Weekly savings</div>
                <div className="text-2xl font-bold">{product.roi.weeklySavings}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Annual savings</div>
                <div className="text-2xl font-bold">{product.roi.annualSavings}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Your cost</div>
                <div className="text-2xl font-bold">{product.roi.costPerMonth}/mo</div>
              </div>
            </div>
            <div className="text-2xl">
              <span className="text-gray-400">ROI: </span>
              <span className="font-bold text-green-400">{product.roi.roi}</span>
            </div>
          </div>
          
          <p className="text-gray-300">Based on average time savings and $50/hr labor cost</p>
        </div>
      </section>

      {/* Use Cases - Real Scenarios */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Real businesses, real results</h2>
          <p className="text-lg text-gray-600 mb-16 text-center">See how businesses like yours use {product.name}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.useCases.map((useCase) => (
              <div key={useCase.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4"><span className="font-medium">Before:</span> {useCase.scenario}</p>
                <p className="text-gray-600 mb-4"><span className="font-medium">Solution:</span> {useCase.solution}</p>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-medium text-gray-900 mb-2">Results:</p>
                  <ul className="space-y-2">
                    {useCase.results.map((result) => (
                      <li key={result} className="flex items-start gap-2">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How we compare</h2>
          <p className="text-lg text-gray-600 mb-16 text-center">See why {product.name} is better than alternatives</p>
          
          <div className="space-y-6">
            {product.comparisons.map((comp) => (
              <div key={comp.alternative} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">vs {comp.alternative}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Problems with {comp.alternative}:</p>
                    <ul className="space-y-2">
                      {comp.problems.map((problem) => (
                        <li key={problem} className="flex items-start gap-2 text-sm">
                          <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-500" />
                          <span className="text-gray-600">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="font-medium text-gray-700 mb-2">Why {product.name} is better:</p>
                    <p className="text-gray-600">{comp.whyBetter}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Loved by business owners</h2>
          <p className="text-lg text-gray-600 mb-16 text-center">Join {product.users} businesses that trust us</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.testimonials.map((testimonial) => (
              <div key={testimonial.author} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role} • {testimonial.businessType}</p>
                  </div>
                  <div className="text-xs text-gray-400">
                    {testimonial.employees} employees • {testimonial.usingSince}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Works with tools you love</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">Seamless integration with your favorite apps</p>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {product.integrations.map((integration) => (
              <span 
                key={integration}
                className="px-4 py-2 bg-white rounded-lg text-sm text-gray-700 border border-gray-200"
              >
                {integration}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {product.awards.map((award) => (
              <div key={award.name} className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-full">
                <Award className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="font-medium text-gray-900">{award.name}</p>
                  <p className="text-xs text-gray-500">{award.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Frequently asked questions</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">Everything you need to know about {product.name}</p>
          
          <div className="space-y-4">
            {product.faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Free resources</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">Helpful guides and templates</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.resources.map((resource) => (
              <div key={resource.title} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <BookOpen className="h-8 w-8 mb-4" style={{ color: product.color }} />
                <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{resource.type} • {resource.pages || resource.duration}</p>
                <Link href="#" className="text-sm font-medium" style={{ color: product.color }}>
                  Download free →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to simplify your {product.name.toLowerCase()}?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join {product.users} small business owners who've already made the switch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
            >
              Start your 14-day free trial
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border border-gray-600 text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Talk to an expert
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            No credit card required • Cancel anytime • Free trial includes all features
          </p>
        </div>
      </section>
    </div>
  )
}