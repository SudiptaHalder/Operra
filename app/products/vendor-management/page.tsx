import { Metadata } from 'next'
import ProductTemplate from '@/components/product/ProductTemplate'
import { productsData } from '@/components/product/ProductTemplate'

export async function generateMetadata(): Promise<Metadata> {
  const product = productsData['vendor-management']
  return {
    title: `${product.name} - Operra`,
    description: product.description,
  }
}

export default function VendorManagementPage() {
  return <ProductTemplate slug="vendor-management" />
}