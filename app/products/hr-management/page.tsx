import { Metadata } from 'next'
import ContentProductTemplate from '@/components/product/ProductTemplate'
import { productsData } from '@/components/product/ProductTemplate'

export async function generateMetadata(): Promise<Metadata> {
  const product = productsData['hr-management']
  return {
    title: `${product.name} - Operra`,
    description: product.description,
  }
}

export default function HRManagementPage() {
  return <ContentProductTemplate slug="hr-management" />
}