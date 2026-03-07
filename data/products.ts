import { Product } from '@/types'

export const products: Product[] = [
  {
    id: 'hr-management',
    name: 'HR Management System',
    slug: 'hr-management',
    description: 'Simple HR tools designed for small businesses. Manage employees, time-off, and documentation without complexity.',
    icon: '/icons/hr.svg',
    features: [
      'Employee database',
      'Time-off tracking',
      'Document management',
      'Performance reviews',
      'Team directory',
      'HR compliance tools'
    ],
    benefits: [
      'Replace manual spreadsheets with organized data',
      'Save time on administrative tasks',
      'Keep all employee information in one place',
      'Stay compliant with labor laws'
    ],
    seo: {
      title: 'Small Business HR Management System | Simple HR Software',
      description: 'Affordable HR management system built for small businesses. Manage employees, time-off, and documents without the complexity of enterprise software.',
      keywords: ['small business hr management', 'simple hr software', 'hr tools for small companies']
    }
  },
  {
    id: 'vendor-management',
    name: 'Vendor Management System',
    slug: 'vendor-management',
    description: 'Track and manage vendors, contracts, and payments in one simple dashboard.',
    icon: '/icons/vendor.svg',
    features: [
      'Vendor database',
      'Contract tracking',
      'Payment schedules',
      'Document storage',
      'Vendor performance ratings',
      'Renewal reminders'
    ],
    benefits: [
      'Stop tracking vendors in spreadsheets',
      'Never miss a contract renewal',
      'Compare vendor performance easily',
      'Access vendor documents instantly'
    ],
    seo: {
      title: 'Vendor Management Software for Small Business | Simple Tracking',
      description: 'Easy vendor management system for small businesses. Track vendors, contracts, and payments without enterprise complexity.',
      keywords: ['vendor management software', 'vendor tracking system for small business']
    }
  },
  {
    id: 'small-business-dashboard',
    name: 'Small Business Management Dashboard',
    slug: 'small-business-management',
    description: 'Get a complete overview of your business operations, team, and performance.',
    icon: '/icons/dashboard.svg',
    features: [
      'Team overview',
      'Revenue tracking',
      'Task management',
      'Operational metrics',
      'Custom reports',
      'Real-time updates'
    ],
    benefits: [
      'See your entire business at a glance',
      'Make data-driven decisions',
      'Identify operational bottlenecks',
      'Track team productivity'
    ],
    seo: {
      title: 'Small Business Management Software | Business Dashboard',
      description: 'Simple business management dashboard for small teams. Track operations, team performance, and revenue in one place.',
      keywords: ['small business management software', 'business dashboard for small teams']
    }
  },
  {
    id: 'employee-onboarding',
    name: 'Employee Onboarding System',
    slug: 'employee-onboarding',
    description: 'Streamline how you bring new employees into your company.',
    icon: '/icons/onboarding.svg',
    features: [
      'Digital offer letters',
      'Onboarding checklists',
      'Document collection',
      'Task assignments',
      'Training tracking',
      'Welcome automation'
    ],
    benefits: [
      'Create consistent onboarding experiences',
      'Reduce paperwork',
      'Get new employees productive faster',
      'Ensure nothing falls through cracks'
    ],
    seo: {
      title: 'Employee Onboarding Software | Simple Onboarding System',
      description: 'Easy employee onboarding system for small businesses. Digital offer letters, checklists, and document collection.',
      keywords: ['employee onboarding system', 'new hire onboarding software']
    }
  },
  {
    id: 'payroll-tracking',
    name: 'Payroll Tracking System',
    slug: 'payroll-tracking',
    description: 'Track time, attendance, and payroll basics without complexity.',
    icon: '/icons/payroll.svg',
    features: [
      'Time tracking',
      'Attendance records',
      'Payroll preparation',
      'Timesheet approval',
      'Overtime tracking',
      'Export to payroll services'
    ],
    benefits: [
      'Stop manual time calculations',
      'Reduce payroll errors',
      'Track employee hours accurately',
      'Simplify payroll processing'
    ],
    seo: {
      title: 'Payroll Tracking Software | Simple Time & Attendance',
      description: 'Basic payroll tracking system for small businesses. Track time, attendance, and prepare payroll data easily.',
      keywords: ['payroll tracking system', 'small business payroll tools']
    }
  }
]