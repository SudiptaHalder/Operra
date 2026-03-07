import { Metadata } from 'next'
import ProductTemplate from '@/components/product/ProductTemplate'
import { productsData } from '@/components/product/ProductTemplate'

export async function generateMetadata(): Promise<Metadata> {
  const product = productsData['business-dashboard']
  return {
    title: `${product.name} - Operra`,
    description: product.description,
  }
}

export default function BusinessDashboardPage() {
  return <ProductTemplate slug="business-dashboard" />
}