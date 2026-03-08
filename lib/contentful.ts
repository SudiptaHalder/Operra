// lib/contentful.ts
import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export async function getArticles() {
  const response = await client.getEntries({
    content_type: 'article',
    order: '-fields.date',
  })
  return response.items
}