'use client'

import Link from 'next/link'
import { IconType } from 'react-icons'
import { FaArrowRight, FaStar, FaCheck } from 'react-icons/fa'

interface ToolCardProps {
  id: string
  title: string
  description: string
  icon: IconType
  isNew?: boolean
  isPopular?: boolean
}

const ToolCard = ({ id, title, description, icon: Icon, isNew = false, isPopular = false }: ToolCardProps) => {
  return (
    <div 
      className="bg-card/80 rounded-2xl border border-white/10 p-6 h-full animate-subtle-fade-in transition-all duration-700"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <div
              className="p-3 rounded-xl bg-primary/10 text-primary"
            >
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-medium ml-3">{title}</h3>
          </div>
          <div className="flex space-x-2">
            {isNew && (
              <span 
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/20 text-secondary border-secondary/20"
              >
                New
              </span>
            )}
            {isPopular && (
              <span 
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary border-primary/20 flex items-center"
              >
                <FaStar className="mr-1 h-3 w-3" /> Popular
              </span>
            )}
          </div>
        </div>
        
        <p className="text-foreground/70 mb-6 flex-grow">{description}</p>
        
        {/* Feature points - always visible */}
        <div className="mb-6 space-y-2">
          {['Advanced AI model', 'Custom settings'].map((feature, i) => (
            <div 
              key={i}
              className="flex items-center text-sm text-foreground/60"
            >
              <FaCheck className="h-3 w-3 text-primary mr-2" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <Link 
          href={`/tools/${id}`}
          className="mt-auto inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
        >
          Try this tool
          <FaArrowRight className="ml-2 h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}

export default ToolCard
