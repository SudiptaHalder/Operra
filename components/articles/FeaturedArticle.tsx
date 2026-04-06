'use client'

import Link from 'next/link'
import { ArrowRight, Eye, Clock, ThumbsUp, Sparkles } from 'lucide-react'

export default function FeaturedArticle() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl overflow-hidden shadow-xl">
      <div className="p-8 text-white">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-yellow-300" />
          <span className="text-sm font-medium uppercase tracking-wider text-yellow-300">
            Editor's Pick
          </span>
        </div>
        
        <h2 className="text-3xl font-bold mb-3">
          How to Add Employees to HR Management
        </h2>
        
        <p className="text-white/90 mb-6 max-w-2xl">
          Step-by-step guide to adding new employees, setting up profiles, 
          managing permissions, and getting your team started with Trezbo.
        </p>

        <div className="flex flex-wrap items-center gap-6 text-sm text-white/80 mb-8">
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            <span>2.5k views</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>5 min read</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" />
            <span>124 likes</span>
          </div>
        </div>

        <Link
          href="/help/hr-management/add-employees"
          className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors group"
        >
          Read Featured Article
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}