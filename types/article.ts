export interface Article {
  slug: string
  title: string
  description: string
  excerpt: string
  category: string
  categorySlug: string
  author: string
  authorRole?: string
  date: string
  updatedDate?: string
  readTime: string
  views: string
  likes: number
  icon: string
  color: string
  tags: string[]
  relatedArticles?: string[]
  content: string
}