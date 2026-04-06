import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Heart, 
  Target, 
  Users, 
  TrendingUp, 
  Shield, 
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Trezbo',
  description: 'Learn about Trezbo\'s mission to provide simple, affordable business management software for small businesses.',
}

const values = [
  {
    icon: Heart,
    name: 'Customer First',
    description: 'We build software for small business owners, not enterprise committees. Every feature solves a real problem.'
  },
  {
    icon: Target,
    name: 'Simplicity',
    description: 'Complexity is the enemy. We strip away the bloated features you don\'t need and focus on what matters.'
  },
  {
    icon: Shield,
    name: 'Trust & Transparency',
    description: 'No hidden fees, no fine print, no surprises. Just honest software at fair prices.'
  },
  {
    icon: Users,
    name: 'Community',
    description: 'We\'re not just a software company. We\'re part of the small business community we serve.'
  }
]

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    bio: 'Former small business owner who got tired of complex, expensive software. Started Trezbo to build what he wished existed.',
    initials: 'AR',
    color: '#982598'
  },
  {
    name: 'Maya Patel',
    role: 'Head of Product',
    bio: 'Product designer who specializes in making complex tools simple. Previously led design at几家 startups.',
    initials: 'MP',
    color: '#E491C9'
  },
  {
    name: 'James Chen',
    role: 'Lead Engineer',
    bio: 'Full-stack developer with 12 years experience. Passionate about building reliable, scalable software for small businesses.',
    initials: 'JC',
    color: '#15173D'
  },
  {
    name: 'Sarah Okonkwo',
    role: 'Customer Success',
    bio: 'Former restaurant owner who understands small business challenges firsthand. Ensures every customer gets the help they need.',
    initials: 'SO',
    color: '#14B8A6'
  }
]

const milestones = [
  {
    year: '2020',
    title: 'The Idea',
    description: 'Founder Alex struggled with expensive, complex software for his small business. Decided to build something better.'
  },
  {
    year: '2021',
    title: 'First Prototype',
    description: 'Built the first version of Trezbo with input from 50+ small business owners.'
  },
  {
    year: '2022',
    title: 'Official Launch',
    description: 'Launched to the public with 100 beta customers. Focused on HR and vendor management.'
  },
  {
    year: '2023',
    title: 'Expansion',
    description: 'Added payroll tracking and business dashboard. Reached 500+ small business customers.'
  },
  {
    year: '2024',
    title: 'Today',
    description: 'Trusted by 1,000+ small businesses. Still focused on our mission: simple, affordable tools.'
  }
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#15173D05] via-[#98259805] to-[#E491C905]" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{
                  background: 'linear-gradient(135deg, #98259810 0%, #E491C910 50%, #15173D10 100%)',
                  border: '1px solid #98259820',
                  color: '#15173D'
                }}
              >
                <Sparkles className="h-4 w-4" style={{ color: '#982598' }} />
                Our story
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Built for small businesses,{' '}
                <span style={{ 
                  background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  by small business people
                </span>
              </h1>
              
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Trezbo was founded on a simple idea: small businesses deserve software that's 
                actually built for them. Not watered-down enterprise tools, not bloated platforms 
                with features you'll never use. Just simple, affordable tools that work.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  View products
                </Link>
              </div>
            </div>

            {/* Right content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '1,000+', label: 'Small businesses', color: '#982598' },
                { number: '50k+', label: 'Employees managed', color: '#E491C9' },
                { number: '98%', label: 'Customer satisfaction', color: '#15173D' },
                { number: '24/7', label: 'Support available', color: '#14B8A6' },
              ].map((stat) => (
                <div 
                  key={stat.label}
                  className="bg-white p-6 rounded-xl border text-center hover:shadow-md transition-shadow"
                  style={{ borderColor: `${stat.color}20` }}
                >
                  <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main mission */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our mission: Make business management simple
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We believe running a small business is hard enough. Your software shouldn't make it harder.
              </p>
              <p className="mt-4 text-gray-600">
                Most business software is built for large enterprises with deep pockets and IT departments. 
                They pack in hundreds of features you'll never use, charge you for every extra user, and 
                make you watch hours of training videos just to get started.
              </p>
              <p className="mt-4 text-gray-600">
                Trezbo is different. We build for the other 99% — the small business owners who just want 
                simple tools that work. No complexity, no bloat, no enterprise pricing.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  'Simple, intuitive interfaces that don\'t require training',
                  'Flat, affordable pricing that scales with your business',
                  'Features you actually need, not ones you\'ll never use',
                  'Support from people who understand small business'
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#982598' }} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div 
              className="bg-gradient-to-br p-8 rounded-2xl text-white"
              style={{
                background: 'linear-gradient(135deg, #982598 0%, #E491C9 50%, #15173D 100%)'
              }}
            >
              <Heart className="h-8 w-8 mb-4 opacity-90" />
              <p className="text-xl font-medium leading-relaxed">
                "We're not just building software. We're building tools that help small businesses thrive."
              </p>
              <div className="mt-6">
                <p className="font-semibold">Alex Rivera</p>
                <p className="text-sm opacity-90">Founder & CEO, Trezbo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we build.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div 
                  key={value.name}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div 
                    className="h-12 w-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      background: index === 0 
                        ? '#98259810'
                        : index === 1
                        ? '#E491C910'
                        : index === 2
                        ? '#15173D10'
                        : '#14B8A610'
                    }}
                  >
                    <Icon 
                      className="h-6 w-6" 
                      style={{
                        color: index === 0 
                          ? '#982598'
                          : index === 1
                          ? '#E491C9'
                          : index === 2
                          ? '#15173D'
                          : '#14B8A6'
                      }} 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.name}</h3>
                  <p className="mt-2 text-gray-600">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our journey
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From a simple idea to helping thousands of small businesses.
            </p>
          </div>

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#982598] via-[#E491C9] to-[#15173D] hidden md:block" style={{ left: '50%', marginLeft: '-1px' }} />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Year bubble */}
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12">
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 text-lg font-bold"
                      style={{ 
                        borderColor: index === 0 
                          ? '#982598'
                          : index === 1
                          ? '#E491C9'
                          : index === 2
                          ? '#15173D'
                          : index === 3
                          ? '#14B8A6'
                          : '#982598',
                        color: index === 0 
                          ? '#982598'
                          : index === 1
                          ? '#E491C9'
                          : index === 2
                          ? '#15173D'
                          : index === 3
                          ? '#14B8A6'
                          : '#982598'
                      }}
                    >
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                      <p className="mt-2 text-gray-600">{milestone.description}</p>
                      <p className="mt-3 text-sm" style={{ color: '#982598' }}>{milestone.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet the team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're small business people too. We understand your challenges because we've lived them.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div 
                key={member.name}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow group"
              >
                <div 
                  className="h-20 w-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                  style={{ background: member.color }}
                >
                  {member.initials}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm font-medium" style={{ color: member.color }}>{member.role}</p>
                <p className="mt-3 text-sm text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why small businesses choose Trezbo
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: 'Built for your size',
                    description: 'Not enterprise software stripped down. Built from the ground up for small teams.'
                  },
                  {
                    title: 'Simple pricing',
                    description: 'Flat monthly rates. No per-user fees, no hidden costs, no surprises.'
                  },
                  {
                    title: 'Easy to use',
                    description: 'No training required. If you can use a spreadsheet, you can use Trezbo.'
                  },
                  {
                    title: 'Support that cares',
                    description: 'Talk to real people who understand small business challenges.'
                  }
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-full bg-[#98259810] flex items-center justify-center mt-0.5">
                      <div className="h-2 w-2 rounded-full" style={{ background: '#982598' }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div 
              className="p-8 rounded-2xl text-white"
              style={{
                background: 'linear-gradient(135deg, #15173D 0%, #982598 50%, #E491C9 100%)'
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="mb-6 opacity-90">
                Join thousands of small business owners who've simplified their operations with Trezbo.
              </p>
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-2 bg-white text-[#15173D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book your free demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-4 text-sm opacity-80">
                No credit card required • 14-day free trial
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}