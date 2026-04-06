// // 'use client'

// // import { useState, useRef, useEffect } from 'react'
// // import { X, MessageCircle, Send, Bot, User, Clock } from 'lucide-react'

// // type Message = {
// //   id: string
// //   text: string
// //   sender: 'bot' | 'user' | 'agent'
// //   timestamp: Date
// //   options?: string[]
// // }

// // type ChatState = 'initial' | 'bot' | 'waiting' | 'human' | 'offline'

// // export default function ChatBot() {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const [messages, setMessages] = useState<Message[]>([
// //     {
// //       id: '1',
// //       text: "Hi there! 👋 I'm Trezbo's virtual assistant. How can I help you today?",
// //       sender: 'bot',
// //       timestamp: new Date(),
// //       options: [
// //         'Product information',
// //         'Pricing questions',
// //         'Book a demo',
// //         'Talk to human',
// //         'Support issue'
// //       ]
// //     }
// //   ])
// //   const [inputValue, setInputValue] = useState('')
// //   const [chatState, setChatState] = useState<ChatState>('bot')
// //   const [isTyping, setIsTyping] = useState(false)
// //   const messagesEndRef = useRef<HTMLDivElement>(null)
// //   const inputRef = useRef<HTMLInputElement>(null)
// //   const chatWindowRef = useRef<HTMLDivElement>(null)
// //   const [windowHeight, setWindowHeight] = useState(600)
// //   const [windowTop, setWindowTop] = useState(0)

// //   // Calculate available space and adjust chat window height
// //   useEffect(() => {
// //     if (isOpen) {
// //       const updatePosition = () => {
// //         const viewportHeight = window.innerHeight
// //         const bottomOffset = 24 // 6rem from bottom (same as button)
// //         const topOffset = 20 // Minimum space from top
// //         const maxHeight = viewportHeight - bottomOffset - topOffset - 80 // 80px for button + padding
        
// //         // Set height to fit within viewport, max 600px
// //         const newHeight = Math.min(600, maxHeight)
// //         setWindowHeight(newHeight)
        
// //         // Calculate top position to keep chat within viewport
// //         const buttonBottom = viewportHeight - 80 // Approximate button position
// //         const chatTop = buttonBottom - newHeight - 10
        
// //         // Ensure chat doesn't go above viewport
// //         setWindowTop(Math.max(topOffset, chatTop))
// //       }

// //       updatePosition()
// //       window.addEventListener('resize', updatePosition)
      
// //       return () => {
// //         window.removeEventListener('resize', updatePosition)
// //       }
// //     }
// //   }, [isOpen])

// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
// //   }

// //   useEffect(() => {
// //     scrollToBottom()
// //   }, [messages])

// //   useEffect(() => {
// //     if (isOpen && inputRef.current) {
// //       setTimeout(() => {
// //         inputRef.current?.focus()
// //       }, 100)
// //     }
// //   }, [isOpen])

// //   // Close chat when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event: MouseEvent) => {
// //       if (chatWindowRef.current && !chatWindowRef.current.contains(event.target as Node) && isOpen) {
// //         // Check if click is on the chat button
// //         const chatButton = document.querySelector('[aria-label="Open chat"]')
// //         if (chatButton && chatButton.contains(event.target as Node)) {
// //           return
// //         }
// //         setIsOpen(false)
// //       }
// //     }

// //     document.addEventListener('mousedown', handleClickOutside)
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside)
// //     }
// //   }, [isOpen])

// //   const generateId = () => Math.random().toString(36).substring(2, 9)

// //   const addMessage = (text: string, sender: 'bot' | 'user' | 'agent', options?: string[]) => {
// //     setMessages(prev => [...prev, {
// //       id: generateId(),
// //       text,
// //       sender,
// //       timestamp: new Date(),
// //       options
// //     }])
// //   }

// //   const simulateTyping = (response: string, options?: string[]) => {
// //     setIsTyping(true)
// //     setTimeout(() => {
// //       setIsTyping(false)
// //       addMessage(response, 'bot', options)
// //     }, 1000)
// //   }

// //   const handleBotResponse = (userMessage: string) => {
// //     const lowerMsg = userMessage.toLowerCase()

// //     // Product information
// //     if (lowerMsg.includes('product') || lowerMsg.includes('hr') || lowerMsg.includes('vendor') || lowerMsg.includes('payroll')) {
// //       simulateTyping(
// //         "We offer several products for small businesses:\n\n• HR Management - Employee records, time-off, documents\n• Vendor Management - Track contracts and payments\n• Business Dashboard - Real-time insights\n• Employee Onboarding - Digital offer letters and checklists\n• Payroll Tracking - Simple time tracking\n\nWhich one would you like to learn more about?",
// //         ['HR Management', 'Vendor Management', 'Business Dashboard', 'Employee Onboarding', 'Payroll Tracking']
// //       )
// //     }
// //     // Pricing questions
// //     else if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('pricing') || lowerMsg.includes('plan')) {
// //       simulateTyping(
// //         "Our plans start at just $5/month:\n\n• Basic: $5/month (up to 50 employees)\n• Professional: $8/month (up to 150 employees)\n• Premium: $10/month (up to 200 employees)\n\nAll plans include a 14-day free trial. Would you like to see a detailed comparison?",
// //         ['View pricing', 'Compare plans', 'Book demo', 'Talk to sales']
// //       )
// //     }
// //     // Book a demo
// //     else if (lowerMsg.includes('demo') || lowerMsg.includes('book') || lowerMsg.includes('schedule')) {
// //       simulateTyping(
// //         "I'd be happy to help you schedule a demo! You can either:\n\n1. Book directly through our demo form (takes 2 minutes)\n2. Talk to our sales team to find the best time\n\nWhich would you prefer?",
// //         ['Book online now', 'Talk to sales team']
// //       )
// //     }
// //     // Talk to human
// //     else if (lowerMsg.includes('human') || lowerMsg.includes('agent') || lowerMsg.includes('person') || lowerMsg.includes('real')) {
// //       setChatState('waiting')
// //       simulateTyping(
// //         "I understand you'd like to speak with a human. Let me check if an agent is available...",
// //         []
// //       )
// //       setTimeout(() => {
// //         // For demo purposes, always connect to human
// //         setChatState('human')
// //         addMessage(
// //           "Good news! An agent is available now. You've been connected to Sarah from our sales team. She'll be with you shortly.",
// //           'bot'
// //         )
// //         setTimeout(() => {
// //           addMessage(
// //             "Hi there! I'm Sarah 👋 Thanks for reaching out. I see you're interested in learning more about Trezbo. How can I help you today?",
// //             'agent'
// //           )
// //         }, 2000)
// //       }, 3000)
// //     }
// //     // Support issue
// //     else if (lowerMsg.includes('support') || lowerMsg.includes('issue') || lowerMsg.includes('problem') || lowerMsg.includes('help')) {
// //       simulateTyping(
// //         "I'm sorry you're having trouble! For technical support, you can:\n\n• Visit our help center: help.Trezbo.com\n• Email: support@Trezbo.com\n\nWould you like me to connect you with a support agent?",
// //         ['Connect to support', 'Email support', 'View help center']
// //       )
// //     }
// //     // Default response
// //     else {
// //       simulateTyping(
// //         "I'm not sure I understand. Could you please choose from these options or rephrase your question?",
// //         ['Product information', 'Pricing', 'Book demo', 'Talk to human', 'Support']
// //       )
// //     }
// //   }

// //   const handleSendMessage = () => {
// //     if (!inputValue.trim()) return

// //     // Add user message
// //     addMessage(inputValue, 'user')
    
// //     // Handle based on current state
// //     if (chatState === 'human') {
// //       // In human chat mode, messages go to agent
// //       setTimeout(() => {
// //         addMessage("Thanks for your message. An agent will respond shortly.", 'agent')
// //       }, 1000)
// //     } else if (chatState === 'bot') {
// //       // Bot handles the response
// //       handleBotResponse(inputValue)
// //     }

// //     setInputValue('')
// //   }

// //   const handleKeyPress = (e: React.KeyboardEvent) => {
// //     if (e.key === 'Enter' && !e.shiftKey) {
// //       e.preventDefault()
// //       handleSendMessage()
// //     }
// //   }

// //   const handleOptionClick = (option: string) => {
// //     addMessage(option, 'user')
    
// //     if (option === 'Book online now') {
// //       window.open('/book-demo', '_blank')
// //       setTimeout(() => {
// //         addMessage("I've opened the demo booking page for you. Let me know if you need any help! 😊", 'bot')
// //       }, 1000)
// //     } else if (option === 'Talk to sales team') {
// //       setChatState('waiting')
// //       setTimeout(() => {
// //         setChatState('human')
// //         addMessage(
// //           "Great! You've been connected to our sales team. A representative will be with you shortly.",
// //           'bot'
// //         )
// //         setTimeout(() => {
// //           addMessage(
// //             "Hello! I'm Mike from sales. Thanks for your interest in Trezbo. How can I assist you today?",
// //             'agent'
// //           )
// //         }, 2000)
// //       }, 1500)
// //     } else {
// //       handleBotResponse(option)
// //     }
// //   }

// //   const formatTime = (date: Date) => {
// //     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
// //   }

// //   return (
// //     <>
// //       {/* Chat Button - Fixed at bottom right */}
// //       <button
// //         onClick={() => setIsOpen(true)}
// //         className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
// //         aria-label="Open chat"
// //       >
// //         <MessageCircle className="h-6 w-6" />
// //       </button>

// //       {/* Chat Window - Fixed position with dynamic top and height */}
// //       {isOpen && (
// //         <div 
// //           ref={chatWindowRef}
// //           className="fixed right-6 w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200 animate-in slide-in-from-bottom-5 duration-300"
// //           style={{
// //             bottom: '80px',
// //             height: `${windowHeight}px`,
// //             maxHeight: '80vh'
// //           }}
// //         >
// //           {/* Header */}
// //           <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 flex-shrink-0">
// //             <div className="flex justify-between items-center">
// //               <div className="flex items-center gap-3">
// //                 {chatState === 'human' ? (
// //                   <div className="relative">
// //                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
// //                       <User className="h-6 w-6 text-purple-600" />
// //                     </div>
// //                     <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
// //                   </div>
// //                 ) : (
// //                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
// //                     <Bot className="h-6 w-6 text-purple-600" />
// //                   </div>
// //                 )}
// //                 <div>
// //                   <h3 className="font-semibold">
// //                     {chatState === 'human' ? 'Sarah (Sales)' : 'Trezbo Assistant'}
// //                   </h3>
// //                   <p className="text-xs opacity-90">
// //                     {chatState === 'human' 
// //                       ? 'Online' 
// //                       : chatState === 'waiting' 
// //                       ? 'Connecting...' 
// //                       : chatState === 'offline'
// //                       ? 'Agents offline'
// //                       : 'Typically replies instantly'}
// //                   </p>
// //                 </div>
// //               </div>
// //               <button
// //                 onClick={() => setIsOpen(false)}
// //                 className="hover:bg-white/20 rounded-lg p-1 transition-colors"
// //               >
// //                 <X className="h-5 w-5" />
// //               </button>
// //             </div>
// //           </div>

// //           {/* Messages - Scrollable area */}
// //           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 min-h-0">
// //             {messages.map((message) => (
// //               <div
// //                 key={message.id}
// //                 className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
// //               >
// //                 <div
// //                   className={`max-w-[80%] rounded-2xl p-3 ${
// //                     message.sender === 'user'
// //                       ? 'bg-purple-600 text-white rounded-br-none'
// //                       : message.sender === 'agent'
// //                       ? 'bg-pink-100 text-gray-800 rounded-bl-none'
// //                       : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-200'
// //                   }`}
// //                 >
// //                   <p className="text-sm whitespace-pre-line">{message.text}</p>
// //                   <p className="text-xs mt-1 opacity-70 text-right">
// //                     {formatTime(message.timestamp)}
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}

// //             {/* Typing indicator */}
// //             {isTyping && (
// //               <div className="flex justify-start">
// //                 <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
// //                   <div className="flex gap-1">
// //                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
// //                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
// //                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Options */}
// //             {messages[messages.length - 1]?.options && messages[messages.length - 1]?.sender === 'bot' && (
// //               <div className="flex flex-wrap gap-2 mt-2">
// //                 {messages[messages.length - 1].options!.map((option) => (
// //                   <button
// //                     key={option}
// //                     onClick={() => handleOptionClick(option)}
// //                     className="px-3 py-2 bg-white border border-purple-200 text-purple-700 rounded-full text-sm hover:bg-purple-50 transition-colors"
// //                   >
// //                     {option}
// //                   </button>
// //                 ))}
// //               </div>
// //             )}

// //             <div ref={messagesEndRef} />
// //           </div>

// //           {/* Input - Fixed at bottom */}
// //           <div className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
// //             <div className="flex gap-2">
// //               <input
// //                 ref={inputRef}
// //                 type="text"
// //                 value={inputValue}
// //                 onChange={(e) => setInputValue(e.target.value)}
// //                 onKeyPress={handleKeyPress}
// //                 placeholder={chatState === 'human' ? "Message Sarah..." : "Type your message..."}
// //                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
// //                 disabled={chatState === 'waiting'}
// //               />
// //               <button
// //                 onClick={handleSendMessage}
// //                 disabled={!inputValue.trim() || chatState === 'waiting'}
// //                 className="bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
// //               >
// //                 <Send className="h-5 w-5" />
// //               </button>
// //             </div>

// //             {/* Offline message */}
// //             {chatState === 'offline' && (
// //               <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
// //                 <p className="text-xs text-yellow-700 flex items-center gap-1">
// //                   <Clock className="h-3 w-3" />
// //                   Agents are offline. Leave a message and we'll respond within 4 hours.
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   )
// // }
// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { X, MessageCircle, Send, Bot, Clock } from 'lucide-react'

// type Message = {
//   id: string
//   text: string
//   sender: 'bot' | 'user'
//   timestamp: Date
//   options?: string[]
// }

// export default function ChatBot() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: '1',
//       text: "Hi there! 👋 I'm Trezbo's virtual assistant. How can I help you today?",
//       sender: 'bot',
//       timestamp: new Date(),
//       options: [
//         'Product information',
//         'Pricing questions',
//         'Book a demo',
//         'Support issue'
//       ]
//     }
//   ])
//   const [inputValue, setInputValue] = useState('')
//   const [isTyping, setIsTyping] = useState(false)
//   const messagesEndRef = useRef<HTMLDivElement>(null)
//   const inputRef = useRef<HTMLInputElement>(null)
//   const chatWindowRef = useRef<HTMLDivElement>(null)
//   const [windowHeight, setWindowHeight] = useState(500)

//   // Calculate available space and adjust chat window height
//   useEffect(() => {
//     if (isOpen) {
//       const updatePosition = () => {
//         const viewportHeight = window.innerHeight
//         const maxHeight = Math.min(500, viewportHeight - 150)
//         setWindowHeight(maxHeight)
//       }

//       updatePosition()
//       window.addEventListener('resize', updatePosition)
      
//       return () => {
//         window.removeEventListener('resize', updatePosition)
//       }
//     }
//   }, [isOpen])

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
//   }

//   useEffect(() => {
//     scrollToBottom()
//   }, [messages])

//   useEffect(() => {
//     if (isOpen && inputRef.current) {
//       setTimeout(() => {
//         inputRef.current?.focus()
//       }, 100)
//     }
//   }, [isOpen])

//   // Close chat when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (chatWindowRef.current && !chatWindowRef.current.contains(event.target as Node) && isOpen) {
//         // Check if click is on the chat button
//         const chatButton = document.querySelector('[aria-label="Open chat"]')
//         if (chatButton && chatButton.contains(event.target as Node)) {
//           return
//         }
//         setIsOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [isOpen])

//   const generateId = () => Math.random().toString(36).substring(2, 9)

//   const addMessage = (text: string, sender: 'bot' | 'user', options?: string[]) => {
//     setMessages(prev => [...prev, {
//       id: generateId(),
//       text,
//       sender,
//       timestamp: new Date(),
//       options
//     }])
//   }

//   const simulateTyping = (response: string, options?: string[]) => {
//     setIsTyping(true)
//     setTimeout(() => {
//       setIsTyping(false)
//       addMessage(response, 'bot', options)
//     }, 800)
//   }

//   const handleBotResponse = (userMessage: string) => {
//     const lowerMsg = userMessage.toLowerCase()

//     // Product information
//     if (lowerMsg.includes('product') || lowerMsg.includes('hr') || lowerMsg.includes('vendor') || lowerMsg.includes('payroll') || lowerMsg.includes('dashboard')) {
//       simulateTyping(
//         "We offer several products for small businesses:\n\n• HR Management - Employee records, time-off, documents\n• Vendor Management - Track contracts and payments\n• Business Dashboard - Real-time insights\n• Employee Onboarding - Digital offer letters and checklists\n• Payroll Tracking - Simple time tracking\n\nYou can learn more about each product on our products page.",
//         ['View all products', 'Pricing', 'Book demo']
//       )
//     }
//     // Pricing questions
//     else if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('pricing') || lowerMsg.includes('plan')) {
//       simulateTyping(
//         "Our plans start at just $5/month:\n\n• Basic: $5/month (up to 50 employees)\n• Professional: $8/month (up to 150 employees)\n• Premium: $10/month (up to 200 employees)\n\nAll plans include a 14-day free trial. No credit card required.",
//         ['View pricing', 'Compare plans', 'Book demo']
//       )
//     }
//     // Book a demo
//     else if (lowerMsg.includes('demo') || lowerMsg.includes('book') || lowerMsg.includes('schedule')) {
//       simulateTyping(
//         "I'd be happy to help you schedule a demo! You can book directly through our demo form. It only takes 2 minutes.",
//         ['Book demo now']
//       )
//     }
//     // Support issue
//     else if (lowerMsg.includes('support') || lowerMsg.includes('issue') || lowerMsg.includes('problem') || lowerMsg.includes('help')) {
//       simulateTyping(
//         "For support, you can:\n\n• Visit our help center: help.Trezbo.com\n• Email: support@Trezbo.com\n• Check our FAQ page\n\nOur support team typically responds within 4 hours.",
//         ['Visit help center', 'View FAQ', 'Email support']
//       )
//     }
//     // Greetings
//     else if (lowerMsg.includes('hi') || lowerMsg.includes('hello') || lowerMsg.includes('hey')) {
//       simulateTyping(
//         "Hello! 👋 How can I assist you with Trezbo today?",
//         ['Product information', 'Pricing', 'Book demo']
//       )
//     }
//     // Default response
//     else {
//       simulateTyping(
//         "I'm here to help with questions about Trezbo! You can ask me about:\n\n• Products and features\n• Pricing and plans\n• Booking a demo\n• Support options\n\nWhat would you like to know?",
//         ['Product information', 'Pricing', 'Book demo', 'Support']
//       )
//     }
//   }

//   const handleSendMessage = () => {
//     if (!inputValue.trim()) return

//     // Add user message
//     addMessage(inputValue, 'user')
    
//     // Bot handles the response
//     handleBotResponse(inputValue)

//     setInputValue('')
//   }

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault()
//       handleSendMessage()
//     }
//   }

//   const handleOptionClick = (option: string) => {
//     addMessage(option, 'user')
    
//     if (option === 'Book demo now' || option === 'Book a demo') {
//       window.open('/book-demo', '_blank')
//       setTimeout(() => {
//         addMessage("I've opened the demo booking page for you! Let me know if you need anything else. 😊", 'bot')
//       }, 800)
//     } 
//     else if (option === 'View all products') {
//       window.open('/products', '_blank')
//       setTimeout(() => {
//         addMessage("I've opened our products page. Take a look and let me know if you have questions about any specific product!", 'bot')
//       }, 800)
//     }
//     else if (option === 'View pricing' || option === 'Compare plans') {
//       window.open('/pricing', '_blank')
//       setTimeout(() => {
//         addMessage("Our pricing page is now open. All plans include a 14-day free trial!", 'bot')
//       }, 800)
//     }
//     else if (option === 'Visit help center') {
//       window.open('https://help.Trezbo.com', '_blank')
//       setTimeout(() => {
//         addMessage("Our help center has articles, guides, and FAQs. Let me know if you still need assistance!", 'bot')
//       }, 800)
//     }
//     else if (option === 'View FAQ') {
//       window.open('/faq', '_blank')
//       setTimeout(() => {
//         addMessage("I've opened our FAQ page. Hope that helps!", 'bot')
//       }, 800)
//     }
//     else if (option === 'Email support') {
//       window.location.href = 'mailto:support@Trezbo.com'
//       setTimeout(() => {
//         addMessage("Your email client should open. Our support team typically responds within 4 hours.", 'bot')
//       }, 800)
//     }
//     else {
//       handleBotResponse(option)
//     }
//   }

//   const formatTime = (date: Date) => {
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//   }

//   return (
//     <>
//       {/* Chat Button - Fixed at bottom right */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
//         aria-label="Open chat"
//       >
//         <MessageCircle className="h-6 w-6" />
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div 
//           ref={chatWindowRef}
//           className="fixed right-6 w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200 animate-in slide-in-from-bottom-5 duration-300"
//           style={{
//             bottom: '80px',
//             height: `${windowHeight}px`,
//             maxHeight: '80vh'
//           }}
//         >
//           {/* Header */}
//           <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 flex-shrink-0">
//             <div className="flex justify-between items-center">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                   <Bot className="h-6 w-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Trezbo Assistant</h3>
//                   <p className="text-xs opacity-90">Typically replies instantly</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="hover:bg-white/20 rounded-lg p-1 transition-colors"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 min-h-0">
//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div
//                   className={`max-w-[80%] rounded-2xl p-3 ${
//                     message.sender === 'user'
//                       ? 'bg-purple-600 text-white rounded-br-none'
//                       : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-200'
//                   }`}
//                 >
//                   <p className="text-sm whitespace-pre-line">{message.text}</p>
//                   <p className="text-xs mt-1 opacity-70 text-right">
//                     {formatTime(message.timestamp)}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {/* Typing indicator */}
//             {isTyping && (
//               <div className="flex justify-start">
//                 <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
//                   <div className="flex gap-1">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Options */}
//             {messages[messages.length - 1]?.options && messages[messages.length - 1]?.sender === 'bot' && (
//               <div className="flex flex-wrap gap-2 mt-2">
//                 {messages[messages.length - 1].options!.map((option) => (
//                   <button
//                     key={option}
//                     onClick={() => handleOptionClick(option)}
//                     className="px-3 py-2 bg-white border border-purple-200 text-purple-700 rounded-full text-sm hover:bg-purple-50 transition-colors"
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             )}

//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t border-gray-200 bg-white flex-shrink-0">
//             <div className="flex gap-2">
//               <input
//                 ref={inputRef}
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type your message..."
//                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//               />
//               <button
//                 onClick={handleSendMessage}
//                 disabled={!inputValue.trim()}
//                 className="bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <Send className="h-5 w-5" />
//               </button>
//             </div>
//             <p className="text-xs text-gray-400 mt-2 text-center">
//               Quick answers • No human agent • 24/7 available
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }
'use client'

import { useState, useRef, useEffect } from 'react'
import { X, MessageCircle, Send, Bot, Clock } from 'lucide-react'

type Message = {
  id: string
  text: string
  sender: 'bot' | 'user'
  timestamp: Date
  options?: string[]
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! 👋 I'm Trezbo's virtual assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      options: [
        'Product information',
        'Pricing questions',
        'Book a demo',
        'Support issue'
      ]
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatWindowRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target as Node) && isOpen) {
        const chatButton = document.querySelector('[aria-label="Open chat"]')
        if (chatButton && chatButton.contains(event.target as Node)) {
          return
        }
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const generateId = () => Math.random().toString(36).substring(2, 9)

  const addMessage = (text: string, sender: 'bot' | 'user', options?: string[]) => {
    setMessages(prev => [...prev, {
      id: generateId(),
      text,
      sender,
      timestamp: new Date(),
      options
    }])
  }

  const simulateTyping = (response: string, options?: string[]) => {
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      addMessage(response, 'bot', options)
    }, 800)
  }

  const handleBotResponse = (userMessage: string) => {
    const lowerMsg = userMessage.toLowerCase()

    if (lowerMsg.includes('product') || lowerMsg.includes('hr') || lowerMsg.includes('vendor') || lowerMsg.includes('payroll') || lowerMsg.includes('dashboard')) {
      simulateTyping(
        "We offer several products for small businesses:\n\n• HR Management\n• Vendor Management\n• Business Dashboard\n• Employee Onboarding\n• Payroll Tracking\n\nWhich would you like to learn more about?",
        ['HR Management', 'Vendor Management', 'Business Dashboard', 'Employee Onboarding', 'Payroll Tracking']
      )
    }
    else if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('pricing') || lowerMsg.includes('plan')) {
      simulateTyping(
        "Our plans start at just $5/month:\n\n• Basic: $5/month (up to 50 employees)\n• Professional: $8/month (up to 150 employees)\n• Premium: $10/month (up to 200 employees)\n\nAll plans include a 14-day free trial.",
        ['View pricing', 'Compare plans', 'Book demo']
      )
    }
    else if (lowerMsg.includes('demo') || lowerMsg.includes('book') || lowerMsg.includes('schedule')) {
      simulateTyping(
        "I'd be happy to help you schedule a demo! You can book directly through our demo form. It only takes 2 minutes.",
        ['Book demo now']
      )
    }
    else if (lowerMsg.includes('support') || lowerMsg.includes('issue') || lowerMsg.includes('problem') || lowerMsg.includes('help')) {
      simulateTyping(
        "For support, you can:\n\n• Visit our help center\n• Email: support@Trezbo.com\n• Check our FAQ page",
        ['Visit help center', 'View FAQ', 'Email support']
      )
    }
    else if (lowerMsg.includes('hi') || lowerMsg.includes('hello') || lowerMsg.includes('hey')) {
      simulateTyping(
        "Hello! 👋 How can I assist you with Trezbo today?",
        ['Product information', 'Pricing', 'Book demo']
      )
    }
    else {
      simulateTyping(
        "I'm here to help with questions about Trezbo! You can ask me about products, pricing, demos, or support.",
        ['Product information', 'Pricing', 'Book demo', 'Support']
      )
    }
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    addMessage(inputValue, 'user')
    handleBotResponse(inputValue)
    setInputValue('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleOptionClick = (option: string) => {
    addMessage(option, 'user')
    
    if (option === 'Book demo now' || option === 'Book a demo') {
      window.open('/book-demo', '_blank')
      setTimeout(() => {
        addMessage("I've opened the demo booking page for you! 😊", 'bot')
      }, 800)
    } 
    else if (option === 'View all products' || option === 'HR Management' || option === 'Vendor Management' || option === 'Business Dashboard' || option === 'Employee Onboarding' || option === 'Payroll Tracking') {
      window.open('/products', '_blank')
      setTimeout(() => {
        addMessage(`You can learn more about ${option} on our products page!`, 'bot')
      }, 800)
    }
    else if (option === 'View pricing' || option === 'Compare plans') {
      window.open('/pricing', '_blank')
      setTimeout(() => {
        addMessage("Our pricing page is now open. All plans include a 14-day free trial!", 'bot')
      }, 800)
    }
    else if (option === 'Visit help center') {
      window.open('/help', '_blank')
      setTimeout(() => {
        addMessage("Our help center has articles, guides, and FAQs.", 'bot')
      }, 800)
    }
    else if (option === 'View FAQ') {
      window.open('/faq', '_blank')
      setTimeout(() => {
        addMessage("I've opened our FAQ page. Hope that helps!", 'bot')
      }, 800)
    }
    else if (option === 'Email support') {
      window.location.href = 'mailto:support@Trezbo.com'
      setTimeout(() => {
        addMessage("Your email client should open. Our support team responds within 4 hours.", 'bot')
      }, 800)
    }
    else {
      handleBotResponse(option)
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      {/* Chat Button - Fixed at bottom right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
        aria-label="Open chat"
      >
        <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Chat Window - Mobile Optimized */}
      {isOpen && (
        <div 
          ref={chatWindowRef}
          className="fixed inset-x-4 bottom-20 md:right-6 md:left-auto md:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200 animate-in slide-in-from-bottom-5 duration-300"
          style={{
            height: 'calc(100vh - 120px)',
            maxHeight: '600px',
            bottom: '80px'
          }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 md:p-4 flex-shrink-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">Trezbo Assistant</h3>
                  <p className="text-xs opacity-90">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-lg p-1 transition-colors"
              >
                <X className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-50 min-h-0">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] md:max-w-[80%] rounded-2xl p-2 md:p-3 ${
                    message.sender === 'user'
                      ? 'bg-purple-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-200'
                  }`}
                >
                  <p className="text-xs md:text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-[10px] md:text-xs mt-1 opacity-70 text-right">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl p-3 md:p-4 shadow-sm border border-gray-200">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* Options */}
            {messages[messages.length - 1]?.options && messages[messages.length - 1]?.sender === 'bot' && (
              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2">
                {messages[messages.length - 1].options!.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className="px-2 py-1.5 md:px-3 md:py-2 bg-white border border-purple-200 text-purple-700 rounded-full text-xs md:text-sm hover:bg-purple-50 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 md:p-4 border-t border-gray-200 bg-white flex-shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 md:px-4 md:py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-purple-600 text-white rounded-lg px-3 py-2 md:px-4 md:py-2 hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
            <p className="text-[10px] md:text-xs text-gray-400 mt-2 text-center">
              Quick answers • No human agent • 24/7 available
            </p>
          </div>
        </div>
      )}
    </>
  )
}