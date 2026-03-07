import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  className,
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:outline-gray-600',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:outline-gray-600'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  const styles = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  )
}