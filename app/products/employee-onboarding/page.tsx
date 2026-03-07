import { Metadata } from 'next'
import ProductTemplate from '@/components/product/ProductTemplate'
import { productsData } from '@/components/product/ProductTemplate'

export async function generateMetadata(): Promise<Metadata> {
  const product = productsData['employee-onboarding']
  return {
    title: `${product.name} - Operra`,
    description: product.description,
  }
}

export default function EmployeeOnboardingPage() {
  return <ProductTemplate slug="employee-onboarding" />
}