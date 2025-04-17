'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { toolCategories } from '@/data/toolsData'

const ToolCategories = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Discover Our AI Tool Categories</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Specialized tools to help you with content creation, development, business, and more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category) => (
            <div 
              key={category.id}
              className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 group"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="ml-4 text-xl font-medium">{category.name}</h3>
              </div>
              
              <p className="text-foreground/70 mb-6 min-h-[80px]">
                {category.description}
              </p>
              
              <Link 
                href={`/tools?category=${category.id}`}
                className="inline-flex items-center text-primary font-medium transition-all duration-300 group-hover:underline"
              >
                <span>Explore {category.name}</span>
                <FaArrowRight className="ml-2 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/tools" 
            className="btn btn-lg btn-primary inline-flex items-center"
          >
            <span>View All Tools</span>
            <FaArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ToolCategories
