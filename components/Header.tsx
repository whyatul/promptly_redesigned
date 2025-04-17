"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { 
  FaSearch, 
  FaBars, 
  FaTimes, 
  FaTools,
  FaBookOpen,
  FaTag,
  FaInfoCircle,
  FaUserCircle,
  FaArrowRight
} from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.6)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  if (!isScrolled) return null
  
  const navItems = [
    { name: "AI Tools", href: "/tools", icon: FaTools, description: "Explore our collection of AI-powered tools" },
    { name: "Pricing", href: "/#pricing", icon: FaTag, description: "View our subscription plans" },
  ]
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-white/5 py-3 shadow-sm' 
          : 'bg-transparent py-3'
      } animate-subtle-fade-in`}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="group flex items-center" onClick={() => setIsMenuOpen(false)}>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary transition-all duration-300">
              Promptly
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1" aria-label="Main navigation">
            <div className="flex space-x-1 mr-4 bg-muted/20 rounded-full p-1 backdrop-blur-sm">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveItem(item.name)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  <Link 
                    href={item.href} 
                    className={`px-4 py-2 text-sm rounded-full flex items-center space-x-2 transition-all duration-300 ${
                      activeItem === item.name ? 'bg-primary/15 text-primary' : 'hover:bg-white/5'
                    }`}
                    aria-label={item.name}
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    <span>{item.name}</span>
                  </Link>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 p-2 bg-background/95 backdrop-blur-sm rounded-md shadow-lg border border-white/10 text-xs w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
              <input
                type="search"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-40 text-sm rounded-full border border-white/5 bg-muted/20  focus:w-60 transition-all duration-300 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                aria-label="Search"
              />
            </div>
            
            <div className="ml-6 flex items-center space-x-3">
              <Link 
                href="/login"
                className="px-4 py-2 text-sm rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center"
              >
                <FaUserCircle className="mr-2 h-3.5 w-3.5" />
                <span>Sign In</span>
              </Link>
              <Link 
                href="/dashboard"
                className="px-4 py-2 text-sm rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center group"
              >
                <span>Try Free</span>
                <FaArrowRight className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </nav>
          
          <div className="flex md:hidden items-center">
            <button 
              className="p-2 rounded-full hover:bg-white/5 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-5 w-5" />
              ) : (
                <FaBars className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div 
        id="mobile-menu"
        className={`fixed inset-0 bg-background/98 backdrop-blur-lg md:hidden z-40 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="h-full flex flex-col py-20 px-6 overflow-y-auto">
          <button
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/5"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes className="h-6 w-6" />
          </button>
          
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="search"
              placeholder="Search tools, prompts..."
              className="pl-12 pr-4 py-4 w-full text-base rounded-xl border border-white/10 bg-white/5 focus:outline-none focus:border-primary/30"
              aria-label="Search"
            />
          </div>
          
          <nav className="space-y-2 mb-8">
            {navItems.map((item, index) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-medium">{item.name}</div>
                  <p className="text-sm text-foreground/60">{item.description}</p>
                </div>
              </Link>
            ))}
          </nav>
          
          <div className="h-px w-full bg-white/10 my-6"></div>
          
          <div className="grid grid-cols-1 gap-4 mt-auto">
            <Link 
              href="/login"
              className="flex justify-center items-center py-4 px-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaUserCircle className="mr-2 h-5 w-5" />
              <span>Sign In</span>
            </Link>
            <Link 
              href="/dashboard"
              className="flex justify-center items-center py-4 px-4 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all duration-300 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Try Free</span>
              <FaArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
