'use client'

import { toolsData, toolCategories, Tool } from '@/data/toolsData' 
import Link from 'next/link'
import { FaTimes, FaArrowRight } from 'react-icons/fa'

interface ToolsModalProps {
  isOpen: boolean
  onClose: () => void
  onToolSelect: (tool: Tool) => void 
}

const ToolsModal = ({ isOpen, onClose, onToolSelect }: ToolsModalProps) => {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-subtle-fade-in"
      onClick={onClose} 
    >
      <div 
        className="bg-card rounded-xl shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden flex flex-col border border-border/50"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-border/50 flex-shrink-0">
          <h2 className="text-lg font-semibold">Explore Promptly Tools</h2>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Close tools modal"
          >
            <FaTimes />
          </button>
        </div>

        {/* Modal Content - Scrollable but scrollbar hidden */}
        <div className="p-6 overflow-y-auto scrollbar-hide">
          {toolCategories.map((category) => (
            <div key={category.id} className="mb-8 last:mb-0">
              <div className="flex items-center mb-4">
                <category.icon className="h-5 w-5 text-primary mr-3" />
                <h3 className="text-md font-semibold">{category.name}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {toolsData
                  .filter((tool) => tool.category === category.id)
                  .map((tool) => (
                    <button 
                      key={tool.id}
                      onClick={() => {
                        onToolSelect(tool); 
                      }} 
                      className="relative block p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all duration-300 group border border-transparent hover:border-primary/30 overflow-hidden text-left" // Added text-left
                    >
                      <div className="flex items-center mb-2">
                        <div className="p-1.5 rounded-md bg-primary/10 mr-2 group-hover:bg-primary/20 transition-colors duration-300">
                           <tool.icon className="h-4 w-4 text-primary" />
                        </div>
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">{tool.title}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{tool.shortDescription}</p>
                      <FaArrowRight className="absolute bottom-3 right-3 h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-0 translate-x-1" />
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ToolsModal
