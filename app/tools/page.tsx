"use client"

import { useState, useEffect } from 'react'
import { toolsData, toolCategories } from '@/data/toolsData'
import ToolCard from '@/components/ToolCard'
import { FaSearch } from 'react-icons/fa'

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  const filteredTools = toolsData.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory
    
    return matchesSearch && matchesCategory
  })
  
  return (
    <div className={`py-12 px-4 max-w-7xl mx-auto transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-4xl font-bold mb-2 animate-fade-in-up">AI Tools</h1>
      <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up delay-100">Explore our collection of powerful AI tools</p>
      
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fade-in-up delay-200">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search tools..."
            className="pl-10 pr-4 py-3 w-full border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex overflow-x-auto pb-2 md:pb-0 space-x-2 scrollbar-hide">
          <button
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
              activeCategory === 'all' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-accent text-accent-foreground hover:bg-accent/80'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            All Tools
          </button>
          
          {toolCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-accent text-accent-foreground hover:bg-accent/80'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <category.icon className="mr-2 h-4 w-4" />
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-6 animate-fade-in-up delay-300">
        Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
      </p>
      
      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {filteredTools.map((tool) => (
            <ToolCard 
              key={tool.id}
              id={tool.id}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              isNew={tool.isNew}
              isPopular={tool.isPopular}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 animate-fade-in">
          <h3 className="text-xl font-medium mb-2">No tools found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}
