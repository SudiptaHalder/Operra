export interface Product {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  features: string[]
  benefits: string[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export interface DemoFormData {
  name: string
  businessName: string
  businessType: string
  teamSize: string
  productInterest: string
  email: string
  phone: string
  message: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: Date
  readTime: number
  tags: string[]
}