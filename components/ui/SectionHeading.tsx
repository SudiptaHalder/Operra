import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ 
  title, 
  subtitle, 
  description, 
  centered = true,
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      'max-w-2xl',
      centered && 'mx-auto text-center',
      className
    )}>
      {subtitle && (
        <p className="text-base font-semibold leading-7 text-blue-600">
          {subtitle}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  )
}