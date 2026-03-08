'use client'

import { useState } from 'react'
import ChatBot from '@/components/chat/ChatBot'

export default function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <button 
        onClick={() => setIsChatOpen(true)}
        className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center gap-1 group"
      >
        Start chat
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </button>
      
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setIsChatOpen(false)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-200"
            >
              Close ✕
            </button>
            <ChatBot />
          </div>
        </div>
      )}
    </>
  )
}