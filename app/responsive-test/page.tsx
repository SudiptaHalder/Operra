'use client'

import { Container } from '@/components/ui/Container'

export default function ResponsiveTest() {
  return (
    <Container className="py-10">
      <h1 className="text-2xl font-bold mb-6">Responsive Test Page</h1>
      
      <div className="space-y-8">
        {/* Breakpoint indicators */}
        <div className="fixed top-0 right-0 m-4 p-2 bg-black text-white text-xs rounded">
          <span className="sm:hidden">XS</span>
          <span className="hidden sm:inline md:hidden">SM</span>
          <span className="hidden md:inline lg:hidden">MD</span>
          <span className="hidden lg:inline xl:hidden">LG</span>
          <span className="hidden xl:inline 2xl:hidden">XL</span>
          <span className="hidden 2xl:inline">2XL</span>
        </div>

        {/* Grid test */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Grid Responsive</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="bg-blue-100 p-4 rounded text-center">Item {i}</div>
            ))}
          </div>
        </div>

        {/* Text size test */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Text Responsive</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            This text changes size at different breakpoints
          </p>
        </div>

        {/* Layout test */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Layout Responsive</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-green-100 p-4 rounded flex-1">Column 1</div>
            <div className="bg-green-100 p-4 rounded flex-1">Column 2</div>
          </div>
        </div>
      </div>
    </Container>
  )
}