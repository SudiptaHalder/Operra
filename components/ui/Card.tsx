import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn(
      'rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200',
      hover && 'transition-all hover:shadow-md hover:ring-gray-300',
      className
    )}>
      {children}
    </div>
  )
}