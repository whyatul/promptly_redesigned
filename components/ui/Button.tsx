import { forwardRef } from 'react'
import Link from 'next/link'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  href?: string
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className = '',
  variant = 'primary',
  size = 'md',
  asChild = false,
  href,
  fullWidth = false,
  children,
  ...props
}, ref) => {
  const baseClass = 'btn'
  const variantClass = `btn-${variant}`
  const sizeClass = `btn-${size}`
  const widthClass = fullWidth ? 'w-full' : ''
  
  const buttonClass = `${baseClass} ${variantClass} ${sizeClass} ${widthClass} ${className}`

  if (href) {
    return (
      <Link 
        href={href} 
        className={buttonClass}
      >
        {children}
      </Link>
    )
  }
  
  return (
    <button
      className={buttonClass}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
