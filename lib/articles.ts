import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { Article } from '@/types/article'

const articlesDirectory = path.join(process.cwd(), 'content/help')

export function getAllArticleSlugs() {
  const categories = fs.readdirSync(articlesDirectory)
  const slugs: { category: string; slug: string }[] = []
  
  categories.forEach((category) => {
    const categoryPath = path.join(articlesDirectory, category)
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath)
      files.forEach((file) => {
        if (file.endsWith('.md')) {
          slugs.push({
            category,
            slug: file.replace(/\.md$/, '')
          })
        }
      })
    }
  })
  
  return slugs
}

export function getArticleBySlug(category: string, slug: string): Article {
  const fullPath = path.join(articlesDirectory, category, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const htmlContent = marked(content)
  
  return {
    slug,
    content: htmlContent,
    ...data
  } as Article
}

export function getAllArticles(): Article[] {
  const slugs = getAllArticleSlugs()
  const articles = slugs.map(({ category, slug }) => 
    getArticleBySlug(category, slug)
  )
  
  // Sort by date (newest first)
  return articles.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getArticlesByCategory(category: string): Article[] {
  const allArticles = getAllArticles()
  return allArticles.filter(article => article.categorySlug === category)
}

export function getPopularArticles(limit: number = 8): Article[] {
  const allArticles = getAllArticles()
  return allArticles
    .sort((a, b) => parseInt(b.views) - parseInt(a.views))
    .slice(0, limit)
}

export function getTrendingArticles(limit: number = 8): Article[] {
  const allArticles = getAllArticles()
  // You can implement custom trending logic here
  // For now, return recently updated with high views
  return allArticles
    .sort((a, b) => {
      const aScore = parseInt(a.views) * 0.7 + (new Date(a.date).getTime() * 0.3)
      const bScore = parseInt(b.views) * 0.7 + (new Date(b.date).getTime() * 0.3)
      return bScore - aScore
    })
    .slice(0, limit)
}