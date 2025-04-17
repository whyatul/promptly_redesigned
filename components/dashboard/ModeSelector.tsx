'use client'

import { useState } from 'react'
import { FaChevronDown, FaBrain, FaCode, FaPenFancy, FaFileAlt } from 'react-icons/fa'
import { toolsData } from '@/data/toolsData' 
interface ModeSelectorProps {
  currentMode: string
  onModeChange: (mode: string) => void
}


const modes = [
  { id: 'general', name: 'General AI', icon: FaBrain, description: 'Broad knowledge and conversation' },
  { id: 'content', name: 'Content Creation', icon: FaPenFancy, description: 'Generate articles, posts, etc.' },
  { id: 'code', name: 'Code Assistant', icon: FaCode, description: 'Help with programming tasks' },
  { id: 'summarize', name: 'Summarization', icon: FaFileAlt, description: 'Condense text or webpages' },
]

const ModeSelector = ({ currentMode, onModeChange }: ModeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectedMode = modes.find(m => m.id === currentMode) || modes[0];

  return (
    <div className="relative inline-block text-left self-end flex-shrink-0 pb-1"> 
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg px-3 py-2 bg-muted/50 text-sm font-medium text-foreground hover:bg-muted focus:outline-none focus:ring-1 focus:ring-primary" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <selectedMode.icon className="mr-1.5 h-4 w-4 text-primary" />
          <span className="hidden sm:inline">{selectedMode.name}</span> 
          <FaChevronDown className="ml-1.5 h-4 w-4 text-muted-foreground" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-bottom-left absolute left-0 bottom-full mb-2 w-72 rounded-xl shadow-lg bg-popover border border-border ring-1 ring-black ring-opacity-5 focus:outline-none z-20 p-1"> 
          <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {modes.map((mode) => (
              <button
                key={mode.id}
                className={`${
                  mode.id === currentMode ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-muted hover:text-foreground'
                } group flex items-start rounded-lg px-3 py-2.5 text-sm w-full text-left transition-colors duration-150`} // Adjusted padding/rounding
                onClick={() => {
                  onModeChange(mode.id)
                  setIsOpen(false)
                }}
                role="menuitem"
              >
                <mode.icon className="mr-3 h-5 w-5 flex-shrink-0 text-primary/70 group-hover:text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium">{mode.name}</p>
                  <p className="text-xs text-muted-foreground">{mode.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ModeSelector
