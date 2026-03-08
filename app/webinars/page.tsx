import Link from 'next/link'
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Play,
  Sparkles,
  ChevronRight
} from 'lucide-react'

export const metadata = {
  title: 'Webinars - Operra',
  description: 'Free webinars for small business owners. Learn from experts about HR, vendor management, payroll, and more.',
}

const webinars = [
  {
    title: 'Mastering HR Management for Small Teams',
    description: 'Learn how to manage employees, track time-off, and stay compliant without an HR department.',
    date: 'Apr 15, 2024',
    time: '2:00 PM EST',
    duration: '45 min',
    host: 'Alex Rivera',
    hostRole: 'Founder & CEO',
    attendees: '1.2k',
    status: 'upcoming',
    color: 'purple',
    slug: 'hr-management-webinar'
  },
  {
    title: 'Vendor Management: Save Time & Money',
    description: 'Discover strategies to track contracts, negotiate better terms, and avoid late fees.',
    date: 'Apr 22, 2024',
    time: '1:00 PM EST',
    duration: '50 min',
    host: 'Maya Patel',
    hostRole: 'Head of Product',
    attendees: '890',
    status: 'upcoming',
    color: 'pink',
    slug: 'vendor-management-webinar'
  },
  {
    title: 'Payroll Mistakes and How to Avoid Them',
    description: 'Common payroll errors that cost small businesses and how to prevent them.',
    date: 'Apr 29, 2024',
    time: '3:00 PM EST',
    duration: '40 min',
    host: 'James Chen',
    hostRole: 'Lead Engineer',
    attendees: '750',
    status: 'upcoming',
    color: 'purple',
    slug: 'payroll-webinar'
  },
  {
    title: 'Employee Onboarding Best Practices',
    description: 'Create a seamless onboarding experience that gets new hires productive faster.',
    date: 'Mar 10, 2024',
    duration: '45 min',
    host: 'Sarah Okonkwo',
    hostRole: 'Customer Success',
    views: '2.1k',
    status: 'recorded',
    color: 'pink',
    slug: 'onboarding-webinar',
    videoUrl: 'https://youtube.com/watch?v=123'
  },
  {
    title: 'Business Dashboard Metrics That Matter',
    description: 'Learn which KPIs to track and how to use data to grow your business.',
    date: 'Mar 5, 2024',
    duration: '50 min',
    host: 'Maya Patel',
    hostRole: 'Head of Product',
    views: '1.8k',
    status: 'recorded',
    color: 'purple',
    slug: 'dashboard-webinar',
    videoUrl: 'https://youtube.com/watch?v=456'
  },
  {
    title: 'Time Tracking for Small Business',
    description: 'Simple time tracking strategies that employees will actually use.',
    date: 'Feb 28, 2024',
    duration: '35 min',
    host: 'Sarah Okonkwo',
    hostRole: 'Customer Success',
    views: '1.5k',
    status: 'recorded',
    color: 'pink',
    slug: 'time-tracking-webinar',
    videoUrl: 'https://youtube.com/watch?v=789'
  }
]

export default function WebinarsPage() {
  const upcomingWebinars = webinars.filter(w => w.status === 'upcoming')
  const recordedWebinars = webinars.filter(w => w.status === 'recorded')

  return (
    <div className="pt-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Video className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Free Webinars</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learn from the Experts</h1>
          <p className="text-xl text-gray-600">
            Join our free webinars and get practical advice for your small business
          </p>
        </div>
      </section>

      {/* Upcoming Webinars */}
      {upcomingWebinars.length > 0 && (
        <section className="pb-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-600" />
              Upcoming Webinars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingWebinars.map((webinar) => (
                <div 
                  key={webinar.slug}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <span className={`inline-block px-3 py-1 bg-${webinar.color}-100 text-${webinar.color}-600 rounded-full text-xs font-medium mb-4`}>
                    Live Webinar
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{webinar.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{webinar.date} at {webinar.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{webinar.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{webinar.attendees} registered</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{webinar.host}</p>
                      <p className="text-xs text-gray-500">{webinar.hostRole}</p>
                    </div>
                    <button className={`px-4 py-2 bg-${webinar.color}-600 text-white rounded-lg text-sm font-medium hover:bg-${webinar.color}-700 transition-colors`}>
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recorded Webinars */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Watch On-Demand</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recordedWebinars.map((webinar) => (
              <div 
                key={webinar.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`h-40 bg-gradient-to-r from-${webinar.color}-100 to-${webinar.color}-200 relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className={`h-5 w-5 text-${webinar.color}-600 ml-0.5`} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className={`text-xs font-medium text-${webinar.color}-600 bg-${webinar.color}-50 px-2 py-1 rounded-full`}>
                    Recorded
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">{webinar.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{webinar.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{webinar.date}</span>
                    <span>{webinar.duration}</span>
                    <span>{webinar.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}