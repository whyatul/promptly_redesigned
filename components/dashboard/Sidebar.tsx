'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaPlus, FaHistory, FaUserCircle, FaSignOutAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa' 
import Button from '@/components/ui/Button' 

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); 

  const historyItems = [
    { id: 1, title: 'Blog post about AI trends' },
    { id: 2, title: 'Marketing kaise karen' },
    { id: 3, title: 'Python code for data analysis' },
    { id: 4, title: 'Bhai Mera Homework karde' },
    { id: 5, title: 'Drafting email response' },
  ]

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`bg-card border-r border-border/50 flex flex-col ${isCollapsed ? 'w-20 p-2' : 'w-64 p-3'} space-y-4 transition-all duration-300 relative`}> 
      {/* Toggle Button */}
      <button 
        onClick={toggleSidebar}
        className="absolute -right-3 top-10 z-10 p-1.5 rounded-full bg-card border border-border/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <FaChevronRight className="h-3 w-3" /> : <FaChevronLeft className="h-3 w-3" />}
      </button>

      {/* New Chat Button - Adjust based on collapse state */}
      <Button 
        variant="ghost" 
        size="md" 
        fullWidth 
        className={`flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-muted border border-transparent hover:border-border transition-colors duration-200 ${isCollapsed ? 'px-0' : ''}`}
      >
        <FaPlus className={`h-4 w-4 ${!isCollapsed ? 'mr-2' : ''}`} /> 
        {!isCollapsed && <span>New Chat</span>}
      </Button>

      {/* Navigation/Sections */}
      <nav className={`flex-grow space-y-4 overflow-y-auto ${isCollapsed ? 'overflow-x-hidden' : 'pr-1'} scrollbar-hide`}>
        <div>
          <ul className="space-y-0.5"> 
            {historyItems.map(item => (
              <li key={item.id}>
                <Link 
                  href={`/dashboard/chat/${item.id}`} 
                  className={`flex items-center ${isCollapsed ? 'justify-center px-2 py-3' : 'px-3 py-2'} text-sm rounded-lg hover:bg-muted text-foreground/70 hover:text-foreground transition-colors duration-150 group truncate`}
                  title={isCollapsed ? item.title : undefined} 
                >
                  <FaHistory className={`flex-shrink-0 h-4 w-4 text-muted-foreground/60 ${!isCollapsed ? 'mr-2.5' : ''}`} /> 
                  {!isCollapsed && <span className="truncate flex-1">{item.title}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Footer Actions - Minimal */}
      <div className={`mt-auto border-t border-border/50 ${isCollapsed ? 'pt-2' : 'pt-3'} space-y-0.5`}>
         {/* User/Profile Link */}
         <Link 
            href="/profile" 
            className={`flex items-center ${isCollapsed ? 'justify-center px-2 py-3' : 'px-3 py-2'} text-sm rounded-lg hover:bg-muted text-foreground/70 hover:text-foreground transition-colors duration-150 group`}
            title={isCollapsed ? "My Account" : undefined}
          >
            <FaUserCircle className={`flex-shrink-0 h-5 w-5 text-muted-foreground/60 ${!isCollapsed ? 'mr-2.5' : ''}`} />
            {!isCollapsed && <span>My Account</span>}
          </Link>
         {/* Logout Button */}
         <button 
            className={`flex items-center w-full ${isCollapsed ? 'justify-center px-2 py-3' : 'px-3 py-2'} text-sm rounded-lg hover:bg-red-500/10 text-foreground/70 hover:text-red-500 transition-colors duration-150 group`}
            title={isCollapsed ? "Logout" : undefined}
          >
            <FaSignOutAlt className={`flex-shrink-0 h-5 w-5 text-muted-foreground/60 group-hover:text-red-500 transition-colors duration-150 ${!isCollapsed ? 'mr-2.5' : ''}`} />
            {!isCollapsed && <span>Logout</span>}
          </button>
      </div>
    </aside>
  )
}

export default Sidebar
