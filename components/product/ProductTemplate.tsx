import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { 
  Check, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Zap,
  Truck,
  LayoutDashboard,
  UserPlus,
  ChevronRight,
  CheckCircle,
  Shield,
  Calendar,
  FileText,
  BarChart,
  Download,
  TrendingUp,
  Award,
  Smartphone,
  Headphones,
  Lock,
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
  Wrench,
  ShoppingBag,
  Building2
} from 'lucide-react'

export const productsData = {
  'hr-management': {
    id: 'hr-management',
    name: 'HR Management',
    tagline: 'HR software that actually works for small teams',
    description: 'Stop juggling spreadsheets and start managing your team effectively. Track time-off, store documents, manage performance — all in one beautiful dashboard.',
    longDescription: "Most HR software is built for enterprises with HR departments. Ours is built for you — the small business owner who just wants things to work. No complexity, no training needed, no hidden costs.",
    icon: 'Users',
    color: '#982598',
    rating: 4.9,
    users: '500+',
    price: '$5',
    employeeRange: 'Up to 50 employees',
    href: '/products/hr-management',
    
    // Hero image - big and bold
    heroImage: '/images/products/hr-image.png',
    
    // Feature highlights (3 main features with icons)
    featureHighlights: [
      {
        title: 'Employee Database',
        description: 'Centralized employee records with custom fields. Store everything from contact info to emergency contacts.',
        icon: 'Users',
        details: [
          'Store contact info, job details, and history',
          'Add custom fields for your specific needs',
          'Upload employee photos and IDs',
          'Tag and filter employees instantly',
          'Bulk import from spreadsheets',
          'Export to CSV, Excel, or PDF'
        ]
      },
      {
        title: 'Time-off Tracking',
        description: 'Simple request and approval workflow. No more spreadsheets or email chains.',
        icon: 'Calendar',
        details: [
          'Employees request time off in seconds',
          'Managers approve with one click',
          'Automatic calendar updates',
          'Track vacation, sick days, personal time',
          'Set custom accrual rules',
          'View team availability at a glance'
        ]
      },
      {
        title: 'Document Management',
        description: 'Secure storage for all employee documents. Never lose a contract again.',
        icon: 'Lock',
        details: [
          'Upload contracts, agreements, offer letters',
          'Store IDs, certifications, training records',
          'Set expiration alerts for documents',
          'Version history for all files',
          'Role-based access control',
          'Full-text search within documents'
        ]
      }
    ],
    
    // Additional features (secondary)
    additionalFeatures: [
      {
        name: 'Performance Reviews',
        description: 'Templates and reminders for regular evaluations',
        icon: 'BarChart',
        details: 'Customizable templates, scheduled reminders, goal tracking, 360-degree feedback'
      },
      {
        name: 'Team Directory',
        description: 'Quick access to employee contacts and roles',
        icon: 'Users',
        details: 'Searchable directory, role-based views, emergency contacts'
      },
      {
        name: 'Automated Reminders',
        description: 'Never miss reviews, birthdays, or anniversaries',
        icon: 'Bell',
        details: 'Email notifications, in-app alerts, customizable triggers'
      },
      {
        name: 'Mobile Access',
        description: 'Manage HR from anywhere',
        icon: 'Smartphone',
        details: 'iOS and Android apps, approve time-off on go, view documents'
      },
      {
        name: 'Reporting',
        description: 'Understand your workforce better',
        icon: 'PieChart',
        details: 'Headcount reports, turnover analytics, time-off patterns'
      },
      {
        name: 'Compliance Tools',
        description: 'Stay compliant with labor laws',
        icon: 'Shield',
        details: 'Document expiry tracking, audit-ready reports, compliance checklists'
      }
    ],
    
    // Use cases (real scenarios)
    useCases: [
      {
        title: 'Retail Shop',
        description: '15 employees across multiple shifts',
        points: [
          'Track time-off requests instantly',
          'Store food safety certifications',
          'Manage seasonal staff onboarding',
          'View schedules in one place'
        ]
      },
      {
        title: 'Marketing Agency',
        description: 'Growing from 10 to 50 employees',
        points: [
          'Scale without HR headaches',
          'Automated performance reviews',
          'Central employee database',
          'Onboard new hires in hours'
        ]
      },
      {
        title: 'Construction Company',
        description: '30+ field technicians',
        points: [
          'Track certification expirations',
          'Mobile access for field staff',
          'Document storage for licenses',
          'Time-off for crew scheduling'
        ]
      },
      {
        title: 'Restaurant',
        description: 'High turnover, multiple locations',
        points: [
          'Fast employee onboarding',
          'Track food handler permits',
          'Manage tip reporting',
          'Schedule time-off around rushes'
        ]
      }
    ],
    
    // Problems solved
    problems: [
      'Spreadsheets that are always out of date',
      'Documents lost in email threads',
      'Time-off conflicts and double-booking',
      'Missed performance reviews',
      'Manual data entry errors',
      'No centralized employee records',
      'Compliance risks from expired certs',
      'Wasted hours on admin tasks'
    ],
    
    // Testimonials
    testimonials: [
      {
        quote: "We were drowning in spreadsheets. This software saved us hours every week. The time-off tracking alone is worth it.",
        author: "Sarah Chen",
        role: "Owner, Chen's Bakery",
        rating: 5
      },
      {
        quote: "Finally, HR software that doesn't require a degree to use. Simple, intuitive, and my team loves it.",
        author: "Mike Rodriguez",
        role: "Founder, Rodriguez Plumbing",
        rating: 5
      }
    ],
    
    // Stats
    stats: [
      { value: '500+', label: 'Active businesses' },
      { value: '98%', label: 'Customer satisfaction' },
      { value: '5h', label: 'Time saved per week' },
      { value: '24/7', label: 'Support' }
    ],
    
    // FAQ
   faqs: [
  {
    q: 'Can I export employee data?',
    a: 'Yes, export to CSV, Excel, or PDF anytime.'
  },
  {
    q: 'Is it mobile friendly?',
    a: 'Yes, works perfectly on all devices.'
  },
  {
    q: 'How secure is my data?',
    a: '256-bit encryption, daily backups, SOC2 compliant.'
  },
  {
    q: 'Can I customize fields?',
    a: 'Absolutely! Add custom fields for your needs.'
  }
]
  },
  
  'vendor-management': {
    id: 'vendor-management',
    name: 'Vendor Management',
    tagline: 'Never miss a contract renewal again',
    description: 'Track vendors, contracts, and payments in one simple dashboard. Get alerts before contracts expire.',
    longDescription: "Stop tracking vendors in spreadsheets and losing contracts in email. Our vendor management system keeps everything organized and reminds you before important dates.",
    icon: 'Truck',
    color: '#E491C9',
    rating: 4.8,
    users: '350+',
    price: '$5',
    employeeRange: 'Up to 50 employees',
    href: '/products/vendor-management',
    heroImage: '/images/products/vendor.png',
    
    featureHighlights: [
      {
        title: 'Vendor Database',
        description: 'Complete vendor information in one place',
        icon: 'Truck',
        details: [
          'Store contact details and payment terms',
          'Track vendor categories and tags',
          'Add notes and attachments',
          'Search and filter vendors instantly',
          'View vendor history and performance',
          'Export vendor lists anytime'
        ]
      },
      {
        title: 'Contract Tracking',
        description: 'Never miss important deadlines',
        icon: 'FileText',
        details: [
          'Upload and store all contracts',
          'Set expiry dates and reminders',
          'Track contract value and terms',
          'View all contracts by vendor',
          'Renewal history tracking',
          'Get alerts 30, 14, 7 days before expiry'
        ]
      },
      {
        title: 'Payment Schedule',
        description: 'Stay on top of payments',
        icon: 'DollarSign',
        details: [
          'Track upcoming payments',
          'Record payment history',
          'Set recurring payments',
          'Payment due alerts',
          'Budget tracking by vendor',
          'Export payment reports'
        ]
      }
    ],
    
    additionalFeatures: [
      {
        name: 'Vendor Performance',
        description: 'Rate and track vendor performance',
        icon: 'Star',
        details: 'Rate vendors, keep notes, compare options'
      },
      {
        name: 'Document Storage',
        description: 'Store agreements and invoices',
        icon: 'Lock',
        details: 'Secure storage, version history, easy search'
      },
      {
        name: 'Renewal Alerts',
        description: 'Email and in-app reminders',
        icon: 'Bell',
        details: 'Customizable alert timing, team notifications'
      },
      {
        name: 'Mobile Access',
        description: 'Manage vendors on the go',
        icon: 'Smartphone',
        details: 'View contracts, approve payments from phone'
      },
      {
        name: 'Reports',
        description: 'Vendor spend analysis',
        icon: 'PieChart',
        details: 'Spend by vendor, contract value reports'
      },
      {
        name: 'Integrations',
        description: 'Connect with accounting',
        icon: 'Download',
        details: 'QuickBooks, Xero, FreshBooks export'
      }
    ],
    
    useCases: [
      {
        title: 'Restaurant Owner',
        description: 'Track food suppliers and equipment vendors',
        points: [
          'Never miss delivery contract renewals',
          'Track payment schedules',
          'Store supplier agreements',
          'Compare vendor pricing'
        ]
      },
      {
        title: 'Construction Company',
        description: 'Manage subcontractors and suppliers',
        points: [
          'Track subcontractor agreements',
          'Monitor equipment rentals',
          'Get renewal alerts',
          'Store insurance certificates'
        ]
      },
      {
        title: 'Retail Store',
        description: 'Multiple product vendors',
        points: [
          'Track wholesale agreements',
          'Manage seasonal suppliers',
          'Payment due tracking',
          'Reorder alerts'
        ]
      },
      {
        title: 'Marketing Agency',
        description: 'Software and freelance vendors',
        points: [
          'Track software subscriptions',
          'Manage freelance contracts',
          'Renewal reminders',
          'Budget tracking'
        ]
      }
    ],
    
    problems: [
      'Missed contract renewals',
      'Lost contracts in email',
      'Payment confusion and late fees',
      'No vendor performance tracking',
      'Spreadsheets out of date',
      'No centralized vendor info',
      'Forgotten subscription renewals',
      'Wasted time searching documents'
    ],
    
    testimonials: [
      {
        quote: "We haven't missed a single contract renewal since switching. Worth every penny.",
        author: "Lisa Thompson",
        role: "Director, Thompson Marketing",
        rating: 5
      },
      {
        quote: "Finally organized! All my vendor info in one place. No more searching emails.",
        author: "David Kim",
        role: "Owner, Kim's Landscaping",
        rating: 5
      }
    ],
    
    stats: [
      { value: '350+', label: 'Active businesses' },
      { value: '97%', label: 'Customer satisfaction' },
      { value: '3h', label: 'Time saved per week' },
      { value: '24/7', label: 'Support' }
    ],
    
    faqs: [
      { q: 'Can I upload existing contracts?', a: 'Yes, upload all your existing contracts.' },
      { q: 'How do renewal alerts work?', a: 'Email reminders before contracts expire.' },
      { q: 'Can I track payments?', a: 'Yes, track due dates and payment history.' },
      { q: 'Is there a vendor limit?', a: 'No limits on any plan.' }
    ]
  },
  
  'business-dashboard': {
    id: 'business-dashboard',
    name: 'Business Dashboard',
    tagline: 'See your whole business at a glance',
    description: 'Real-time overview of your operations, team performance, and revenue insights.',
    longDescription: "Make decisions based on data, not guesses. See exactly how your business is performing anytime, anywhere.",
    icon: 'LayoutDashboard',
    color: '#15173D',
    rating: 4.7,
    users: '400+',
    price: '$8',
    employeeRange: 'Up to 150 employees',
    href: '/products/business-dashboard',
    heroImage: '/images/products/BM1.png',
    
    featureHighlights: [
      {
        title: 'Team Overview',
        description: 'See what everyone is working on',
        icon: 'Users',
        details: [
          'Activity feed of team actions',
          'Task progress tracking',
          'Team availability view',
          'Workload balance insights',
          'Department breakdowns',
          'Individual performance metrics'
        ]
      },
      {
        title: 'Revenue Tracking',
        description: 'Monitor income and expenses',
        icon: 'TrendingUp',
        details: [
          'Real-time revenue charts',
          'Expense tracking',
          'Profit analysis',
          'Monthly comparisons',
          'Year-over-year trends',
          'Forecast projections'
        ]
      },
      {
        title: 'Task Management',
        description: 'Track project progress',
        icon: 'Check',
        details: [
          'Task lists by project',
          'Due date tracking',
          'Assignee overview',
          'Completion rates',
          'Overdue alerts',
          'Project milestones'
        ]
      }
    ],
    
    additionalFeatures: [
      {
        name: 'Custom Reports',
        description: 'Create reports that matter',
        icon: 'BarChart',
        details: 'Report builder, scheduled exports, data filters'
      },
      {
        name: 'Mobile Access',
        description: 'Check your business anywhere',
        icon: 'Smartphone',
        details: 'Full mobile functionality, push notifications'
      },
      {
        name: 'Upcoming Deadlines',
        description: 'Never miss important dates',
        icon: 'Calendar',
        details: 'Deadline view, email reminders, team alerts'
      },
      {
        name: 'Goal Tracking',
        description: 'Track business goals',
        icon: 'Target',
        details: 'Set goals, track progress, celebrate wins'
      },
      {
        name: 'Data Export',
        description: 'Export for deeper analysis',
        icon: 'Download',
        details: 'CSV, Excel, PDF exports, scheduled reports'
      },
      {
        name: 'Team Collaboration',
        description: 'Share insights with team',
        icon: 'Users',
        details: 'Share dashboards, comment on metrics'
      }
    ],
    
    useCases: [
      {
        title: 'Small Business Owner',
        description: 'See all key metrics in one place',
        points: [
          'Monitor daily revenue',
          'Track team productivity',
          'Spot issues early',
          'Make data-driven decisions'
        ]
      },
      {
        title: 'Team Leader',
        description: 'Track project progress',
        points: [
          'See team workload',
          'Monitor deadlines',
          'Identify bottlenecks',
          'Resource allocation'
        ]
      },
      {
        title: 'Operations Manager',
        description: 'Oversee daily operations',
        points: [
          'Task completion tracking',
          'Operational metrics',
          'Team availability',
          'Issue identification'
        ]
      },
      {
        title: 'Agency Owner',
        description: 'Manage client projects',
        points: [
          'Project profitability',
          'Team utilization',
          'Deadline tracking',
          'Client reporting'
        ]
      }
    ],
    
    problems: [
      'No visibility into business health',
      'Making decisions without data',
      'Missed deadlines',
      'Unclear team workload',
      'Revenue surprises',
      'No centralized metrics',
      'Wasted time on manual reporting',
      'Difficult to spot trends'
    ],
    
    testimonials: [
      {
        quote: "I can see exactly how my business is doing anytime, anywhere. Game changer.",
        author: "James Wilson",
        role: "Owner, Wilson Consulting",
        rating: 5
      },
      {
        quote: "The revenue tracking alone is worth it. I know my numbers daily, not monthly.",
        author: "Maria Garcia",
        role: "Founder, Garcia Designs",
        rating: 5
      }
    ],
    
    stats: [
      { value: '400+', label: 'Active businesses' },
      { value: '96%', label: 'Customer satisfaction' },
      { value: '2h', label: 'Time saved per week' },
      { value: '24/7', label: 'Support' }
    ],
    
    faqs: [
      { q: 'Can I connect my bank?', a: 'Yes, connect to QuickBooks, Stripe, and more.' },
      { q: 'Is it real-time?', a: 'Yes, data updates automatically.' },
      { q: 'Can my team access it?', a: 'Yes, with role-based permissions.' },
      { q: 'Can I create custom reports?', a: 'Yes, build any report you need.' }
    ]
  },
  
  'employee-onboarding': {
    id: 'employee-onboarding',
    name: 'Employee Onboarding',
    tagline: 'Get new hires productive faster',
    description: 'Streamlined onboarding with digital offer letters, automated checklists, and document collection.',
    longDescription: "Onboarding new employees is chaotic. Paperwork gets lost, tasks get missed, and new hires feel abandoned. Our system makes it smooth and professional.",
    icon: 'UserPlus',
    color: '#14B8A6',
    rating: 4.9,
    users: '300+',
    price: '$5',
    employeeRange: 'Up to 50 employees',
    href: '/products/employee-onboarding',
    heroImage: '/images/products/onboard.png',
    
    featureHighlights: [
      {
        title: 'Digital Offer Letters',
        description: 'Create and send offers with e-signature',
        icon: 'FileText',
        details: [
          'Professional offer letter templates',
          'E-signature built in',
          'Track offer status',
          'Auto-archive accepted offers',
          'Custom fields for your needs',
          'Send multiple offers at once'
        ]
      },
      {
        title: 'Onboarding Checklists',
        description: 'Step-by-step tasks for new hires',
        icon: 'Check',
        details: [
          'Custom checklists by role',
          'Task assignments and due dates',
          'Progress tracking',
          'Automated reminders',
          'Manager review points',
          'Completion certificates'
        ]
      },
      {
        title: 'Document Collection',
        description: 'Gather all new hire paperwork',
        icon: 'Download',
        details: [
          'ID upload and verification',
          'Tax form collection (W-4, I-9)',
          'Banking info for direct deposit',
          'Emergency contact forms',
          'Policy acknowledgments',
          'Secure document storage'
        ]
      }
    ],
    
    additionalFeatures: [
      {
        name: 'Welcome Automation',
        description: 'Auto-send welcome emails',
        icon: 'Mail',
        details: 'Welcome emails, system access, training assignments'
      },
      {
        name: 'New Hire Portal',
        description: 'One place for new hires',
        icon: 'Users',
        details: 'Complete all tasks, view documents, track progress'
      },
      {
        name: 'Training Assignment',
        description: 'Assign training materials',
        icon: 'BookOpen',
        details: 'Videos, documents, courses, track completion'
      },
      {
        name: 'Buddy Assignment',
        description: 'Assign onboarding buddies',
        icon: 'Heart',
        details: 'Pair new hires with experienced team members'
      },
      {
        name: 'Progress Tracking',
        description: 'See where each hire stands',
        icon: 'BarChart',
        details: 'Completion rates, pending tasks, bottlenecks'
      },
      {
        name: 'HR Integration',
        description: 'Sync with HR database',
        icon: 'Users',
        details: 'Auto-create employee records, update org chart'
      }
    ],
    
    useCases: [
      {
        title: 'Growing Company',
        description: 'Hiring 5+ people per month',
        points: [
          'Consistent experience for every hire',
          'Track all onboarding tasks',
          'Reduce time from offer to start',
          'No missed paperwork'
        ]
      },
      {
        title: 'Seasonal Business',
        description: 'Hire temporary staff quickly',
        points: [
          'Onboard in hours, not days',
          'Reuse checklists each season',
          'Collect documents digitally',
          'Quick offboarding process'
        ]
      },
      {
        title: 'Remote Teams',
        description: 'Hire employees anywhere',
        points: [
          'Digital paperwork only',
          'No mailing documents',
          'E-signature for everything',
          'Welcome portal for remote hires'
        ]
      },
      {
        title: 'Restaurant Group',
        description: 'High turnover, multiple locations',
        points: [
          'Fast onboarding for hourly staff',
          'Food safety training tracking',
          'Uniform and policy acknowledgment',
          'Compliance documentation'
        ]
      }
    ],
    
    problems: [
      'Paperwork gets lost or delayed',
      'Inconsistent onboarding experience',
      'New hires feel abandoned',
      'Missing I-9 and tax forms',
      'Training not completed',
      'No visibility into progress',
      'Weeks to get productive',
      'Compliance risks'
    ],
    
    testimonials: [
      {
        quote: "Onboarding used to take me 3 days. Now it takes 3 hours. Incredible.",
        author: "Rachel Green",
        role: "HR Manager, Green Retail",
        rating: 5
      },
      {
        quote: "New hires love how easy it is. Everything is digital and organized.",
        author: "Tom Harris",
        role: "Owner, Harris Construction",
        rating: 5
      }
    ],
    
    stats: [
      { value: '300+', label: 'Active businesses' },
      { value: '99%', label: 'Customer satisfaction' },
      { value: '4h', label: 'Saved per hire' },
      { value: '24/7', label: 'Support' }
    ],
    
    faqs: [
      { q: 'Can I customize offer letters?', a: 'Yes, create your own templates.' },
      { q: 'How do new hires access it?', a: 'They get a secure link via email.' },
      { q: 'What documents can I collect?', a: 'Any file type - PDF, images, etc.' },
      { q: 'Is it mobile friendly?', a: 'Yes, works on all devices.' }
    ]
  },
  
  'payroll-tracking': {
    id: 'payroll-tracking',
    name: 'Payroll Tracking',
    tagline: 'Simple time tracking for payroll',
    description: 'Track time, attendance, and prepare payroll data without the complexity.',
    longDescription: "Stop manual time calculations and spreadsheet errors. Our simple time tracking integrates with your payroll provider.",
    icon: 'Clock',
    color: '#F59E0B',
    rating: 4.8,
    users: '280+',
    price: '$8',
    employeeRange: 'Up to 150 employees',
    href: '/products/payroll-tracking',
    heroImage: '/images/products/payroll.png',
    
    featureHighlights: [
      {
        title: 'Time Clock',
        description: 'Easy clock in/out for employees',
        icon: 'Clock',
        details: [
          'Mobile clock in/out',
          'GPS location tracking',
          'Break tracking',
          'Overtime alerts',
          'Multiple clock methods',
          'Offline mode available'
        ]
      },
      {
        title: 'Timesheet Approval',
        description: 'Review before payroll',
        icon: 'Check',
        details: [
          'Pending approvals view',
          'History of all timesheets',
          'Add comments and notes',
          'Bulk approve timesheets',
          'Auto-approval rules',
          'Audit trail for changes'
        ]
      },
      {
        title: 'Payroll Export',
        description: 'Ready for payroll services',
        icon: 'Download',
        details: [
          'Export to Gusto, ADP, QuickBooks',
          'CSV and Excel formats',
          'Summary reports by department',
          'Overtime breakdown',
          'PTO tracking included',
          'Audit logs for compliance'
        ]
      }
    ],
    
    additionalFeatures: [
      {
        name: 'Attendance Tracking',
        description: 'See who\'s working',
        icon: 'Calendar',
        details: 'Daily view, late arrivals, absences, patterns'
      },
      {
        name: 'Overtime Calculation',
        description: 'Automatic OT tracking',
        icon: 'AlertTriangle',
        details: 'Custom rules, daily/weekly OT, alerts'
      },
      {
        name: 'PTO Management',
        description: 'Track paid time off',
        icon: 'Heart',
        details: 'Accrual tracking, requests, balances'
      },
      {
        name: 'Mobile Access',
        description: 'Clock in from anywhere',
        icon: 'Smartphone',
        details: 'iOS and Android apps, GPS optional'
      },
      {
        name: 'Reports',
        description: 'Labor cost analysis',
        icon: 'PieChart',
        details: 'Hours by employee, department, project'
      },
      {
        name: 'Compliance',
        description: 'Stay compliant',
        icon: 'Shield',
        details: 'Wage and hour rules, break tracking'
      }
    ],
    
    useCases: [
      {
        title: 'Retail Shop',
        description: 'Hourly employees across shifts',
        points: [
          'Track clock in/out accurately',
          'Manage break times',
          'Export to payroll weekly',
          'Avoid overtime surprises'
        ]
      },
      {
        title: 'Restaurant',
        description: 'Tipped employees and overtime',
        points: [
          'Track tipped hours separately',
          'Manage split shifts',
          'Overtime calculations',
          'Export to restaurant payroll'
        ]
      },
      {
        title: 'Construction',
        description: 'Field employees, multiple sites',
        points: [
          'GPS location tracking',
          'Project-based time tracking',
          'Mobile clock in from sites',
          'Overtime management'
        ]
      },
      {
        title: 'Service Business',
        description: 'Technicians in the field',
        points: [
          'Track travel time',
          'Job-based time entry',
          'Mobile approval for managers',
          'Export to billing system'
        ]
      }
    ],
    
    problems: [
      'Manual time calculations',
      'Payroll errors and adjustments',
      'Overtime tracking confusion',
      'Employees forget to clock in/out',
      'No visibility into labor costs',
      'Timesheet approval delays',
      'Integration with payroll manual',
      'PTO tracking separate'
    ],
    
    testimonials: [
      {
        quote: "Payroll used to take me all day. Now it's 30 minutes. Worth every penny.",
        author: "Susan Lee",
        role: "Owner, Lee's Restaurant",
        rating: 5
      },
      {
        quote: "No more timesheet errors. My employees love it and my accountant loves me.",
        author: "Robert Taylor",
        role: "Manager, Taylor Services",
        rating: 5
      }
    ],
    
    stats: [
      { value: '280+', label: 'Active businesses' },
      { value: '97%', label: 'Customer satisfaction' },
      { value: '3h', label: 'Time saved per week' },
      { value: '24/7', label: 'Support' }
    ],
    
    faqs: [
      { q: 'Can employees clock in from phone?', a: 'Yes, mobile app with optional GPS.' },
      { q: 'Does it calculate overtime?', a: 'Yes, automatic based on your rules.' },
      { q: 'Can I export to Gusto?', a: 'Yes, direct export to Gusto and ADP.' },
      { q: 'Is PTO tracking included?', a: 'Yes, included in all plans.' }
    ]
  }
}

const getIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    'Users': Users, 'Truck': Truck, 'LayoutDashboard': LayoutDashboard,
    'UserPlus': UserPlus, 'Clock': Clock, 'Calendar': Calendar,
    'FileText': FileText, 'BarChart': BarChart, 'TrendingUp': TrendingUp,
    'Check': Check, 'Download': Download, 'Star': Star,
    'Lock': Lock, 'Smartphone': Smartphone, 'Shield': Shield,
    'Bell': Bell, 'Mail': Mail, 'AlertTriangle': AlertTriangle,
    'Target': Target, 'Heart': Heart, 'Briefcase': Briefcase,
    'Coffee': Coffee, 'DollarSign': DollarSign, 'PieChart': PieChart,
    'Award': Award, 'BookOpen': BookOpen, 'Wrench': Wrench,
    'ShoppingBag': ShoppingBag, 'Building2': Building2, 'Headphones': Headphones
  }
  return icons[iconName] || Users
}

interface FeatureProductTemplateProps {
  slug: string
}

export default function FeatureProductTemplate({ slug }: FeatureProductTemplateProps) {
  const product = productsData[slug as keyof typeof productsData]
  
  if (!product) {
    notFound()
  }

  const Icon = getIcon(product.icon)

  return (
    <div className="pt-24 bg-white">
      {/* Hero Section with BIG Image */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Product header */}
          <div className="flex items-center gap-3 mb-6">
            <div 
              className="h-14 w-14 rounded-xl flex items-center justify-center"
              style={{ background: `${product.color}15` }}
            >
              <Icon className="h-7 w-7" style={{ color: product.color }} />
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                <Link href="/products" className="hover:text-gray-700">Products</Link>
                <ChevronRight className="h-3 w-3" />
                <span style={{ color: product.color }}>{product.name}</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            </div>
          </div>

          {/* Hero Image - BIG */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 mb-8">
            <Image
              src={product.heroImage}
              alt={product.name}
              width={1400}
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Product info below image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-2xl text-gray-700 font-light leading-relaxed">
                {product.longDescription}
              </p>
              
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-gray-400">({product.users})</span>
                </div>
                <div className="h-4 w-px bg-gray-200" />
                <div className="text-gray-500">{product.employeeRange}</div>
                <div className="h-4 w-px bg-gray-200" />
                <div className="text-2xl font-bold" style={{ color: product.color }}>{product.price}</div>
              </div>
            </div>
            
            <div className="flex gap-3 items-start justify-end">
              <Link
                href="/book-demo"
                className="px-6 py-3 rounded-xl text-white font-semibold transition-all hover:shadow-lg"
                style={{ background: product.color }}
              >
                Start free trial
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50"
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {product.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights - 3 Main Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Everything you need in one place</h2>
          <p className="text-xl text-gray-500 mb-16 text-center max-w-3xl mx-auto">
            Three powerful features that make {product.name} the choice for small businesses
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {product.featureHighlights.map((feature) => {
              const FeatureIcon = getIcon(feature.icon)
              return (
                <div key={feature.title} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
                  <div 
                    className="h-14 w-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${product.color}15` }}
                  >
                    <FeatureIcon className="h-7 w-7" style={{ color: product.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Problems Solved Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Problems {product.name} solves</h2>
              <p className="text-xl text-gray-600 mb-8">Stop struggling with these common issues</p>
              
              <div className="grid grid-cols-1 gap-3">
                {product.problems.map((problem) => (
                  <div key={problem} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
                    <AlertTriangle className="h-5 w-5 mt-0.5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The {product.name} difference</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 mt-0.5" style={{ color: product.color }} />
                  <p className="text-gray-700">Built specifically for small businesses, not enterprises</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 mt-0.5" style={{ color: product.color }} />
                  <p className="text-gray-700">No training needed - it just works</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 mt-0.5" style={{ color: product.color }} />
                  <p className="text-gray-700">Affordable flat pricing, no per-user fees</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 mt-0.5" style={{ color: product.color }} />
                  <p className="text-gray-700">Real humans for support, not chatbots</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">More features you'll love</h2>
          <p className="text-xl text-gray-500 mb-16 text-center">Plus these additional capabilities</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.additionalFeatures.map((feature) => {
              const FeatureIcon = getIcon(feature.icon)
              return (
                <div key={feature.name} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <FeatureIcon className="h-5 w-5 mt-1" style={{ color: product.color }} />
                    <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                  <p className="text-xs text-gray-500">{feature.details}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Real businesses, real results</h2>
          <p className="text-xl text-gray-500 mb-16 text-center">See how businesses like yours use {product.name}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.useCases.map((useCase) => (
              <div key={useCase.title} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What our customers say</h2>
          <p className="text-xl text-gray-500 mb-16 text-center">Join {product.users} businesses that trust us</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {product.testimonials.map((t) => (
              <div key={t.author} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
                <p className="font-semibold text-gray-900">{t.author}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Frequently asked questions</h2>
          <p className="text-xl text-gray-500 mb-12 text-center">Quick answers to common questions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: product.color }} />
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm ml-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join {product.users} small business owners who've already made the switch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
            >
              Start your free trial
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border border-gray-600 text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Talk to sales
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}