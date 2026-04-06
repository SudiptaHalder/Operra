// // 'use client'

// // import Link from 'next/link'
// // import ContactForm from '../../components/forms/ContactForm'
// // import { 
// //   Phone, 
// //   Mail, 
// //   MapPin, 
// //   Clock, 
// //   MessageCircle, 
// //   Headphones,
// //   Shield,
// //   Users,
// //   Globe,
// //   ChevronRight
// // } from 'lucide-react'
// // import ChatButton from '@/components/contact/ChatButton'

// // export default function ContactPage() {
// //   return (
// //     <div className="pt-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
// //       {/* Breadcrumb */}
// //       <div className="border-b border-gray-100 bg-white">
// //         <div className="mx-auto max-w-7xl px-6 py-4">
// //           <div className="flex items-center gap-2 text-sm">
// //             <Link href="/" className="text-gray-400 hover:text-gray-600">Home</Link>
// //             <ChevronRight className="h-3 w-3 text-gray-300" />
// //             <span className="text-gray-900">Contact Sales</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Hero Section */}
// //       <section className="py-16">
// //         <div className="mx-auto max-w-7xl px-6">
// //           <div className="text-center max-w-3xl mx-auto">
// //             <h1 className="text-4xl font-bold text-gray-900 mb-4">
// //               Let's Talk About Your Business
// //             </h1>
// //             <p className="text-xl text-gray-600 leading-relaxed">
// //               Whether you have questions about our products, need pricing information, 
// //               or want to discuss your specific needs — our team is here to help.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Options */}
// //       <section className="pb-16">
// //         <div className="mx-auto max-w-7xl px-6">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             {/* Phone */}
// //             <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
// //               <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
// //                 <Phone className="h-6 w-6 text-purple-600" />
// //               </div>
// //               <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
// //               <p className="text-gray-600 mb-3">Mon-Fri, 9am-6pm EST</p>
// //               <a 
// //                 href="tel:+18005551234" 
// //                 className="text-purple-600 font-medium hover:text-purple-700"
// //               >
// //                 +1 (800) 555-1234
// //               </a>
// //             </div>

// //             {/* Email */}
// //             <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
// //               <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
// //                 <Mail className="h-6 w-6 text-pink-600" />
// //               </div>
// //               <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
// //               <p className="text-gray-600 mb-3">24/7 email support</p>
// //               <a 
// //                 href="mailto:sales@Trezbo.com" 
// //                 className="text-pink-600 font-medium hover:text-pink-700"
// //               >
// //                 sales@Trezbo.com
// //               </a>
// //             </div>

// //             {/* Live Chat - Using Client Component */}
// //             <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
// //               <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
// //                 <MessageCircle className="h-6 w-6 text-purple-600" />
// //               </div>
// //               <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
// //               <p className="text-gray-600 mb-3">Average response: 2 min</p>
// //               <ChatButton />
// //             </div>

// //             {/* Support */}
// //             <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
// //               <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
// //                 <Headphones className="h-6 w-6 text-pink-600" />
// //               </div>
// //               <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
// //               <p className="text-gray-600 mb-3">Existing customers</p>
// //               <Link 
// //                 href="/support" 
// //                 className="text-pink-600 font-medium hover:text-pink-700"
// //               >
// //                 Support center →
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Main Content - 2 Column Layout */}
// //       <section className="pb-20">
// //         <div className="mx-auto max-w-7xl px-6">
// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
// //             {/* Left Column - Contact Info & FAQs */}
// //             <div className="lg:col-span-1 space-y-8">
// //               {/* Office Hours */}
// //               <div className="bg-white rounded-xl p-6 border border-gray-200">
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
// //                   <Clock className="h-5 w-5 text-purple-600" />
// //                   Office Hours
// //                 </h3>
// //                 <div className="space-y-3">
// //                   <div className="flex justify-between text-sm">
// //                     <span className="text-gray-600">Monday - Friday</span>
// //                     <span className="font-medium text-gray-900">9:00 AM - 6:00 PM EST</span>
// //                   </div>
// //                   <div className="flex justify-between text-sm">
// //                     <span className="text-gray-600">Saturday</span>
// //                     <span className="font-medium text-gray-900">10:00 AM - 4:00 PM EST</span>
// //                   </div>
// //                   <div className="flex justify-between text-sm">
// //                     <span className="text-gray-600">Sunday</span>
// //                     <span className="font-medium text-gray-900">Closed</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Office Location */}
// //               <div className="bg-white rounded-xl p-6 border border-gray-200">
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
// //                   <MapPin className="h-5 w-5 text-pink-600" />
// //                   Our Office
// //                 </h3>
// //                 <address className="not-italic text-gray-600">
// //                   <p>123 Business Avenue</p>
// //                   <p>Suite 100</p>
// //                   <p>San Francisco, CA 94105</p>
// //                   <p>United States</p>
// //                 </address>
// //                 <a 
// //                   href="https://maps.google.com" 
// //                   target="_blank" 
// //                   rel="noopener noreferrer"
// //                   className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 text-sm"
// //                 >
// //                   Get directions →
// //                 </a>
// //               </div>

// //               {/* Quick FAQs */}
// //               <div className="bg-white rounded-xl p-6 border border-gray-200">
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Answers</h3>
// //                 <div className="space-y-4">
// //                   <div>
// //                     <p className="font-medium text-gray-900 mb-1">Response time?</p>
// //                     <p className="text-sm text-gray-600">Within 4 hours during business hours</p>
// //                   </div>
// //                   <div>
// //                     <p className="font-medium text-gray-900 mb-1">Free trial?</p>
// //                     <p className="text-sm text-gray-600">Yes, 14-day trial on all plans</p>
// //                   </div>
// //                   <div>
// //                     <p className="font-medium text-gray-900 mb-1">Demo scheduling?</p>
// //                     <p className="text-sm text-gray-600">Within 1 week of request</p>
// //                   </div>
// //                 </div>
// //                 <Link 
// //                   href="/faq" 
// //                   className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 text-sm"
// //                 >
// //                   View all FAQs →
// //                 </Link>
// //               </div>

// //               {/* Trust Badges */}
// //               <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-white">
// //                 <Shield className="h-8 w-8 mb-4 opacity-90" />
// //                 <h4 className="text-lg font-semibold mb-2">Enterprise-Grade Security</h4>
// //                 <p className="text-sm opacity-90 mb-4">
// //                   Your data is protected with 256-bit encryption, SOC2 compliance, and daily backups.
// //                 </p>
// //                 <div className="flex items-center gap-4 text-sm">
// //                   <div className="flex items-center gap-1">
// //                     <Users className="h-4 w-4" />
// //                     <span>500+</span>
// //                   </div>
// //                   <div className="flex items-center gap-1">
// //                     <Globe className="h-4 w-4" />
// //                     <span>99.9% uptime</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Column - Contact Form */}
// //             <div className="lg:col-span-2">
// //               <ContactForm />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Map Section */}
// //       <section className="pb-20">
// //         <div className="mx-auto max-w-7xl px-6">
// //           <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center border border-gray-300">
// //             <p className="text-gray-500">Map would be embedded here</p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="pb-20">
// //         <div className="mx-auto max-w-4xl px-6">
// //           <div className="bg-gray-900 rounded-2xl p-12 text-center">
// //             <h2 className="text-3xl font-bold text-white mb-4">
// //               Prefer to book a demo first?
// //             </h2>
// //             <p className="text-xl text-gray-300 mb-8">
// //               See our products in action with a personalized demo.
// //             </p>
// //             <Link
// //               href="/book-demo"
// //               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
// //             >
// //               Schedule a demo
// //               <ChevronRight className="h-5 w-5" />
// //             </Link>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }
// import Link from 'next/link'
// import ContactForm from '@/components/forms/ContactForm'
// import { 
//   Phone, 
//   Mail, 
//   MapPin, 
//   Clock, 
//   MessageCircle, 
//   Headphones,
//   Shield,
//   Users,
//   Globe,
//   ChevronRight
// } from 'lucide-react'
// import ChatButton from '@/components/contact/ChatButton'

// export const metadata = {
//   title: 'Contact Sales - Trezbo',
//   description: 'Get in touch with our sales team. We\'re here to help you find the right solution for your small business.',
// }

// export default function ContactPage() {
//   return (
//     <div className="pt-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
//       {/* Breadcrumb */}
//       <div className="border-b border-gray-100 bg-white">
//         <div className="mx-auto max-w-7xl px-6 py-4">
//           <div className="flex items-center gap-2 text-sm">
//             <Link href="/" className="text-gray-400 hover:text-gray-600">Home</Link>
//             <ChevronRight className="h-3 w-3 text-gray-300" />
//             <span className="text-gray-900">Contact Sales</span>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section className="py-16">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="text-center max-w-3xl mx-auto">
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">
//               Let's Talk About Your Business
//             </h1>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Whether you have questions about our products, need pricing information, 
//               or want to discuss your specific needs — our team is here to help.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Options */}
//       <section className="pb-16">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {/* Phone */}
//             <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
//               <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <Phone className="h-6 w-6 text-purple-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
//               <p className="text-gray-600 mb-3">Mon-Fri, 9am-6pm EST</p>
//               <a 
//                 href="tel:+18005551234" 
//                 className="text-purple-600 font-medium hover:text-purple-700"
//               >
//                 +1 (800) 555-1234
//               </a>
//             </div>

//             {/* Email */}
//             <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
//               <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <Mail className="h-6 w-6 text-pink-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
//               <p className="text-gray-600 mb-3">24/7 email support</p>
//               <a 
//                 href="mailto:sales@Trezbo.com" 
//                 className="text-pink-600 font-medium hover:text-pink-700"
//               >
//                 sales@Trezbo.com
//               </a>
//             </div>

//             {/* Live Chat */}
//             <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
//               <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <MessageCircle className="h-6 w-6 text-purple-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
//               <p className="text-gray-600 mb-3">Average response: 2 min</p>
//               <ChatButton />
//             </div>

//             {/* Support */}
//             <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
//               <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                 <Headphones className="h-6 w-6 text-pink-600" />
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
//               <p className="text-gray-600 mb-3">Existing customers</p>
//               <Link 
//                 href="/support" 
//                 className="text-pink-600 font-medium hover:text-pink-700"
//               >
//                 Support center →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Rest of your content - same as before */}
//       <section className="pb-20">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             {/* Left Column - Contact Info & FAQs */}
//             <div className="lg:col-span-1 space-y-8">
//               {/* Office Hours */}
//               <div className="bg-white rounded-xl p-6 border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                   <Clock className="h-5 w-5 text-purple-600" />
//                   Office Hours
//                 </h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Monday - Friday</span>
//                     <span className="font-medium text-gray-900">9:00 AM - 6:00 PM EST</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Saturday</span>
//                     <span className="font-medium text-gray-900">10:00 AM - 4:00 PM EST</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Sunday</span>
//                     <span className="font-medium text-gray-900">Closed</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Office Location */}
//               <div className="bg-white rounded-xl p-6 border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                   <MapPin className="h-5 w-5 text-pink-600" />
//                   Our Office
//                 </h3>
//                 <address className="not-italic text-gray-600">
//                   <p>123 Business Avenue</p>
//                   <p>Suite 100</p>
//                   <p>San Francisco, CA 94105</p>
//                   <p>United States</p>
//                 </address>
//                 <a 
//                   href="https://maps.google.com" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 text-sm"
//                 >
//                   Get directions →
//                 </a>
//               </div>

//               {/* Quick FAQs */}
//               <div className="bg-white rounded-xl p-6 border border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Answers</h3>
//                 <div className="space-y-4">
//                   <div>
//                     <p className="font-medium text-gray-900 mb-1">Response time?</p>
//                     <p className="text-sm text-gray-600">Within 4 hours during business hours</p>
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-900 mb-1">Free trial?</p>
//                     <p className="text-sm text-gray-600">Yes, 14-day trial on all plans</p>
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-900 mb-1">Demo scheduling?</p>
//                     <p className="text-sm text-gray-600">Within 1 week of request</p>
//                   </div>
//                 </div>
//                 <Link 
//                   href="/faq" 
//                   className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 text-sm"
//                 >
//                   View all FAQs →
//                 </Link>
//               </div>

//               {/* Trust Badges */}
//               <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-white">
//                 <Shield className="h-8 w-8 mb-4 opacity-90" />
//                 <h4 className="text-lg font-semibold mb-2">Enterprise-Grade Security</h4>
//                 <p className="text-sm opacity-90 mb-4">
//                   Your data is protected with 256-bit encryption, SOC2 compliance, and daily backups.
//                 </p>
//                 <div className="flex items-center gap-4 text-sm">
//                   <div className="flex items-center gap-1">
//                     <Users className="h-4 w-4" />
//                     <span>500+</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Globe className="h-4 w-4" />
//                     <span>99.9% uptime</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Contact Form */}
//             <div className="lg:col-span-2">
//               <ContactForm />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="pb-20">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center border border-gray-300">
//             <p className="text-gray-500">Map would be embedded here</p>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="pb-20">
//         <div className="mx-auto max-w-4xl px-6">
//           <div className="bg-gray-900 rounded-2xl p-12 text-center">
//             <h2 className="text-3xl font-bold text-white mb-4">
//               Prefer to book a demo first?
//             </h2>
//             <p className="text-xl text-gray-300 mb-8">
//               See our products in action with a personalized demo.
//             </p>
//             <Link
//               href="/book-demo"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
//             >
//               Schedule a demo
//               <ChevronRight className="h-5 w-5" />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
import Link from 'next/link'
import ContactForm from '@/components/forms/ContactForm'
import { 
  Mail, 
  Clock, 
  MessageCircle, 
  Headphones,
  Shield,
  Users,
  Globe,
  ChevronRight,
  Zap,
  Sparkles,
  Award,
  HelpCircle,
  BookOpen,
  Video,
  Download,
  CheckCircle,
  Lock,
  TrendingUp,
  Star
} from 'lucide-react'
import ChatButton from '@/components/contact/ChatButton'

export const metadata = {
  title: 'Contact Sales - Trezbo',
  description: 'Get in touch with our sales team. We\'re here to help you find the right solution for your small business.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-gray-600">Home</Link>
            <ChevronRight className="h-3 w-3 text-gray-300" />
            <span className="text-gray-900">Contact Sales</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">We're here to help</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Talk About Your Business
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you have questions about our products, need pricing information, 
              or want to discuss your specific needs — our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options - Only Email, Chat, Support, and Resources */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Mail className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-500 text-sm mb-3">Get a response within 24 hours</p>
              <a 
                href="mailto:sales@Trezbo.com" 
                className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center gap-1 group"
              >
                sales@Trezbo.com
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Live Chat */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MessageCircle className="h-7 w-7 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Chat</h3>
              <p className="text-gray-500 text-sm mb-3">Average response: 2 minutes</p>
              <ChatButton />
            </div>

            {/* Support */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Headphones className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Help Center</h3>
              <p className="text-gray-500 text-sm mb-3">24/7 access to guides & FAQs</p>
             <Link 
  href="/help" 
  className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center gap-1 group"
>
  Visit help center
  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
</Link> 
            </div>

            {/* Resources */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Resources</h3>
              <p className="text-gray-500 text-sm mb-3">Guides, webinars & eBooks</p>
              <Link 
  href="/resources" 
  className="text-pink-600 font-medium hover:text-pink-700 inline-flex items-center gap-1 group"
>
  Browse resources
  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 2 Column Layout with Adjusted Widths */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - Takes 2/5 of space */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Response Time Promise */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 text-white shadow-lg">
                <Zap className="h-8 w-8 mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">Lightning Fast Response</h3>
                <p className="text-sm opacity-90 mb-4">
                  We pride ourselves on quick responses. Most inquiries get a reply within 2-4 hours during business hours.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Avg. 2hr response</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>500+ businesses</span>
                  </div>
                </div>
              </div>

              {/* Why Businesses Choose Us */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-600" />
                  Why businesses choose us
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">98% customer satisfaction rate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">14-day free trial, no credit card</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">No long-term contracts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Dedicated account managers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Free onboarding assistance</span>
                  </li>
                </ul>
              </div>

              {/* Quick FAQs */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-pink-600" />
                  Quick Answers
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-3">
                    <p className="font-medium text-gray-900 mb-1">How fast do you respond?</p>
                    <p className="text-sm text-gray-500">Within 4 hours during business hours</p>
                  </div>
                  <div className="border-b border-gray-100 pb-3">
                    <p className="font-medium text-gray-900 mb-1">Is there a free trial?</p>
                    <p className="text-sm text-gray-500">Yes, 14-day trial on all plans</p>
                  </div>
                  <div className="border-b border-gray-100 pb-3">
                    <p className="font-medium text-gray-900 mb-1">When can I get a demo?</p>
                    <p className="text-sm text-gray-500">Within 1 week of request</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Do you offer support?</p>
                    <p className="text-sm text-gray-500">24/7 email support, chat during business hours</p>
                  </div>
                </div>
                <Link 
                  href="/faq" 
                  className="inline-block mt-4 text-purple-600 font-medium hover:text-purple-700 text-sm"
                >
                  View all FAQs →
                </Link>
              </div>
            </div>

            {/* Right Column - Contact Form - Takes 3/5 of space */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section - Full Width with Expanded Content */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Commitments & Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Lock className="h-8 w-8 text-purple-600" />
                </div>
                <p className="font-semibold text-gray-900">256-bit Encryption</p>
                <p className="text-xs text-gray-500 mt-1">Bank-level security</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-8 w-8 text-pink-600" />
                </div>
                <p className="font-semibold text-gray-900">99.9% Uptime</p>
                <p className="text-xs text-gray-500 mt-1">Reliable infrastructure</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <p className="font-semibold text-gray-900">500+ Customers</p>
                <p className="text-xs text-gray-500 mt-1">And growing fast</p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-pink-600" />
                </div>
                <p className="font-semibold text-gray-900">SOC2 Compliant</p>
                <p className="text-xs text-gray-500 mt-1">Audited annually</p>
              </div>
            </div>

            {/* Additional Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm text-gray-600">4.9/5 rating</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Globe className="h-4 w-4 text-purple-500" />
                <span className="text-sm text-gray-600">Global service</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 text-pink-500" />
                <span className="text-sm text-gray-600">24/7 support</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm text-gray-600">GDPR compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Free Resources for You</h2>
            <p className="text-lg text-gray-600">Download guides and templates to help your business grow</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">HR Compliance Guide</h3>
              <p className="text-sm text-gray-500 mb-4">45-page eBook for small business owners</p>
              <Link href="/resources/hr-guide" className="text-purple-600 text-sm font-medium hover:text-purple-700 inline-flex items-center gap-1">
                Download free
                <Download className="h-3 w-3" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="bg-pink-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Vendor Management Webinar</h3>
              <p className="text-sm text-gray-500 mb-4">45-min video with expert tips</p>
              <Link href="/resources/vendor-webinar" className="text-pink-600 text-sm font-medium hover:text-pink-700 inline-flex items-center gap-1">
                Watch now
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Employee Onboarding Kit</h3>
              <p className="text-sm text-gray-500 mb-4">Templates & checklists for new hires</p>
              <Link href="/resources/onboarding-kit" className="text-purple-600 text-sm font-medium hover:text-purple-700 inline-flex items-center gap-1">
                Download free
                <Download className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-gray-900 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prefer to book a demo first?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              See our products in action with a personalized demo.
            </p>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a demo
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}