import { Metadata } from 'next'
import {Hero } from '@/components/sections/Hero'
import { ProblemSolution } from '@/components/sections/ProblemSolution'
import { ProductsShowcase } from '@/components/sections/ProductsShowcase'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'SmallBizTools - Modern Business Management for Small Teams',
  description: 'Beautiful, intuitive business management software built exclusively for small businesses. Replace spreadsheets with tools that actually save you time.',
  openGraph: {
    title: 'SmallBizTools - Modern Business Management for Small Teams',
    description: 'Beautiful, intuitive business management software built exclusively for small businesses.',
    type: 'website',
  }
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ProductsShowcase />
      <Testimonials />
      <CTA />
    </>
  )
}