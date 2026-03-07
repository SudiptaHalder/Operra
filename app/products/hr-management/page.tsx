import { Metadata } from 'next'
import FeatureProductTemplate from '@/components/product/ProductTemplate'
import { productsData } from '@/components/product/ProductTemplate'

export async function generateMetadata(): Promise<Metadata> {
  const product = productsData['hr-management']
  return {
    title: `${product.name} - Operra`,
    description: product.description,
  }
}

export default function HRManagementPage() {
  return <FeatureProductTemplate slug="hr-management" />
}