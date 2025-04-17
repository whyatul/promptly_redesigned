'use client'

import { useState, useEffect, useRef } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'slide-in-right' | 'slide-in-left'
  delay?: number
  className?: string
  threshold?: number
}

const AnimatedSection = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  className = '',
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current)
          }
        }
      },
      { threshold }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [threshold])

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={isVisible ? { animationDelay: `${delay * 0.1}s` } : {}}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
