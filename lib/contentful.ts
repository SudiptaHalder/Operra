import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
})

export async function getArticles() {
  try {
    const response = await client.getEntries({
      content_type: 'article',
      order: ['-fields.date'] as any, // Fix the type issue
    })
    return response.items
  } catch (error) {
    console.error('Error fetching articles:', error)
    return []
  }
}