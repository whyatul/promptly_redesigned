"use client"

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation' // Import usePathname
import { 
  FaTwitter, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaArrowUp, 
  FaPaperPlane,
  FaHeart,
  FaHeadset,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const footerRef = useRef<HTMLElement>(null)
  const pathname = usePathname() // Get the current path
  const isHomePage = pathname === '/' // Check if it's the home page

  useEffect(() => {
    // Only run the scroll logic if it's the home page
    if (!isHomePage) {
      setShowScrollButton(false); // Ensure button is hidden on other pages
      return; // Exit early if not home page
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only update based on observer if on home page
        if (isHomePage) {
          setShowScrollButton(entry.isIntersecting);
        }
      },
      { threshold: 0.1 } 
    )
    
    if (footerRef.current) {
      observer.observe(footerRef.current)
    }
    
    const handleScroll = () => {
      // Only handle scroll if on home page
      if (!isHomePage) return; 

      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const threshold = totalHeight * 0.85; 

      if (scrollPosition >= threshold) {
        setShowScrollButton(true);
      } else {
        // Check if the observer is NOT intersecting before hiding based on scroll
        const observerEntry = observer.takeRecords ? observer.takeRecords()[0] : null; 
        if (!observerEntry || !observerEntry.isIntersecting) {
          setShowScrollButton(false);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true }); 
    handleScroll(); // Initial check

    // Cleanup
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
      // Remove listener only if it was added (i.e., on home page)
      window.removeEventListener('scroll', handleScroll);
    }
  // Add isHomePage and pathname to dependency array
  }, [isHomePage, pathname]) 
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Here you would normally send the email to your API
  }
  
  // Footer navigation items restructured for better site map
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "AI Tools", href: "/tools" },
        { name: "Library", href: "/prompts" },
        { name: "Pricing", href: "/pricing" },
        { name: "Get Started Free", href: "/dashboard" }, // Adding a direct dashboard link
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Documentation", href: "/docs" },
        { name: "API", href: "/api" },
        { name: "FAQ", href: "/faq" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ]
    },
  ]
  
  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-primary/10">
      {/* Enhanced decorative background */}
      <div className="absolute inset-0 -z-10 opacity-15">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <footer ref={footerRef} className="relative pt-24 pb-12 overflow-hidden bg-transparent" role="contentinfo">
          
          {/* Floating scroll to top button - Conditionally rendered based on state */}
          {isHomePage && ( // Only render the button structure if on the home page
            <button 
              onClick={scrollToTop} 
              className={`fixed z-50 bottom-6 right-6 bg-gradient-to-r from-primary to-secondary p-0.5 rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-500 group ${
                showScrollButton ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
              }`}
              aria-label="Scroll to top"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background">
                <FaArrowUp className="h-5 w-5 text-primary group-hover:animate-bounce transition-all duration-300" />
              </span>
            </button>
          )}
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
              {/* Company info and newsletter - spans 4 columns */}
              <div className="lg:col-span-4 space-y-8">
                <div className="space-y-4">
                  {/* Brand name */}
                  <Link href="/" className="inline-block">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      Promptly
                    </span>
                  </Link>
                  
                  <p className="text-foreground/70 max-w-md text-base leading-relaxed">
                    Your all-in-one AI productivity platform. We help professionals and creators work smarter with specialized AI tools and expertly crafted prompts.
                  </p>
                  
                  {/* Contact info added */}
                  <div className="space-y-2 pt-2">
                    <a href="mailto:promptlyteam.ai@gmail.com" className="flex items-center text-foreground/60 hover:text-primary transition-colors duration-300">
                      <FaPaperPlane className="h-4 w-4 mr-2" /> promptlyteam.ai@gmail.com
                    </a>
                    <div className="flex items-center text-foreground/60">
                      <FaMapMarkerAlt className="h-4 w-4 mr-2" /> Prayagraj, Uttar Pradesh, India
                    </div>
                  </div>
                </div>
                
                {/* Social icons with improved design */}
                <div className="flex space-x-3">
                  {[
                    { icon: FaTwitter, href: "#", label: "Twitter" },
                    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                    { icon: FaGithub, href: "#", label: "GitHub" },
                    { icon: FaInstagram, href: "#", label: "Instagram" },
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href} 
                      aria-label={social.label}
                      className="group relative h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-0.5 transition-all duration-300 hover:from-primary/60 hover:to-secondary/60"
                    >
                      <span className="absolute inset-0.5 rounded-full bg-card flex items-center justify-center transition-all duration-300 group-hover:bg-background/90">
                        <social.icon className="h-4 w-4 text-foreground/60 group-hover:text-primary transition-colors duration-300" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Newsletter section - better positioned for conversions */}
              <div className="lg:col-span-4 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Get weekly insights on AI tools, prompts, and productivity tips straight to your inbox.
                  </p>
                  
                  {/* Newsletter form with better UX */}
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="relative">
                        <input 
                          type="email" 
                          placeholder="Enter your email" 
                          className="w-full h-12 px-4 pr-12 rounded-xl bg-background/50 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:outline-none text-sm"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          required
                        />
                        <button 
                          type="submit"
                          className="absolute right-1.5 top-1.5 h-9 w-9 bg-primary/90 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-300 group"
                          aria-label="Subscribe"
                        >
                          <FaPaperPlane className="h-4 w-4 text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                  
                    </form>
                  ) : (
                    <div className="bg-primary/5 border border-primary/20 rounded-xl py-4 px-5 text-center animate-fade-in">
                      <p className="text-primary flex items-center justify-center text-sm font-medium">
                        <FaHeart className="h-4 w-4 mr-2 animate-pulse" />
                        Thanks for subscribing!
                      </p>
                    </div>
                  )}
                </div>
                
              </div>
              
              {/* Navigation links - spans 4 columns */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                  {footerSections.map((section) => (
                    <div key={section.title} className="space-y-4">
                      <h3 className="text-base font-semibold">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.links.map((link) => (
                          <li key={link.name}>
                            <Link 
                              href={link.href} 
                              className="text-foreground/60 hover:text-primary transition-colors duration-300 text-sm flex items-center group"
                            >
                              <span className="w-0 h-0.5 bg-primary rounded-full mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Bottom section with credits and important links */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright text */}
              <div className="text-foreground/40 text-sm order-2 md:order-1">
                <p>© {new Date().getFullYear()} Promptly. All rights reserved.</p>
              </div>
              
              {/* Secondary links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/40 order-1 md:order-2">
                <Link href="/terms" className="hover:text-foreground/70 transition-colors duration-300">Terms</Link>
                <Link href="/privacy" className="hover:text-foreground/70 transition-colors duration-300">Privacy</Link>
                <Link href="/cookies" className="hover:text-foreground/70 transition-colors duration-300">Cookies</Link>
                <span className="flex items-center ">
                  <span className='mx-1'>Made By</span>
                  <span className='text-anthropic-purple'>Atul</span>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
      <style jsx global>{`
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
        }
        
        .grid-bg {
          background-size: 30px 30px;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
      `}</style>
    </section>
  )
}

export default Footer
