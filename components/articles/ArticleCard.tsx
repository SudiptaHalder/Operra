'use client'

import Link from 'next/link'
import { Eye, Clock, ThumbsUp, ChevronRight } from 'lucide-react'

interface ArticleCardProps {
  article: {
    id: string
    title: string
    excerpt: string
    category: string
    categorySlug: string
    readTime: string
    views: string
    likes: number
    author: string
    date: string
    slug: string
    icon: any
    color: string
  }
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const Icon = article.icon

  return (
    <Link
      href={`/help/${article.categorySlug}/${article.slug}`}
      className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
    >
      <div className="flex items-start gap-4">
        <div className={`bg-${article.color}-100 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0`}>
          <Icon className={`h-6 w-6 text-${article.color}-600`} />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs font-medium text-${article.color}-600 bg-${article.color}-50 px-2 py-1 rounded-full`}>
              {article.category}
            </span>
            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
            {article.title}
          </h3>

          <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {article.views}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </div>
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-3 w-3" />
              {article.likes}
            </div>
            <span>•</span>
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}