'use client'

export default function ChatButton() {
  return (
    <button 
      className="text-purple-600 font-medium hover:text-purple-700"
      onClick={() => alert('Chat would open here')}
    >
      Start chat →
    </button>
  )
}