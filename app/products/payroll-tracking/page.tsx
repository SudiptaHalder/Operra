import { Metadata } from 'next'
import ProductTemplate from '@/components/product/ProductTemplate'
import { productsData } from '@/components/product/ProductTemplate'

export async function generateMetadata(): Promise<Metadata> {
  const product = productsData['payroll-tracking']
  return {
    title: `${product.name} - Operra`,
    description: product.description,
  }
}

export default function PayrollTrackingPage() {
  return <ProductTemplate slug="payroll-tracking" />
}