import Link from 'next/link'
import Hero from '@/components/Hero'
import ToolCategories from '@/components/ToolCategories'
import { 
  FaSearch, 
  FaStar, 
  FaRegClock, 
  FaArrowRight, 
  FaCheck, 
  FaShieldAlt,
  FaRocket, 
  FaUserFriends,
  FaLightbulb,
  FaCube,
  FaBrain,
  FaLock
} from 'react-icons/fa'
import { popularPrompts } from '@/data/toolsData'
import TestimonialsSection from '@/components/TestimonialSlider'
import CapabilitiesSection from '@/components/CapabilitiesSection'
import TrustedCompanies from '@/components/TrustedCompanies'
import PricingSection from '@/components/PricingSection' // Import the new component

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
 
      {/* Feature Tools Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-3">Most Popular AI Tools</h2>
              <p className="text-foreground/70 max-w-2xl">
                Discover our most-used tools that help professionals enhance their workflow
              </p>
            </div>
            <Link href="/tools" className="mt-4 md:mt-0 text-primary font-medium flex items-center group hover:underline">
              View all tools
              <FaArrowRight className="ml-2 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Blog Article Generator',
                description: 'Create SEO-optimized blog posts on any topic in minutes',
                icon: FaSearch,
                badge: 'Popular'
              },
              {
                title: 'Email Assistant',
                description: 'Write professional emails for any business situation',
                icon: FaSearch,
                badge: 'New'
              },
              {
                title: 'Code Generator',
                description: 'Generate clean, functional code snippets in multiple languages',
                icon: FaSearch,
                badge: null
              }
            ].map((tool, i) => (
              <div 
                key={i}
                className="bg-card/80 rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <tool.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium ml-3">{tool.title}</h3>
                  </div>
                  {tool.badge && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                      {tool.badge}
                    </span>
                  )}
                </div>
                <p className="text-foreground/70 mb-6">{tool.description}</p>
                <Link 
                  href={`/tools/${tool.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary font-medium group-hover:underline"
                >
                  Try this tool
                  <FaArrowRight className="ml-2 h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tool Categories Section */}
      <ToolCategories />
      
      {/* Capabilities Section - New */}
      <CapabilitiesSection />

      {/* Pricing Section - Added */}
      <PricingSection />
      

      {/* Why Promptly? Section - Enhanced with more detail */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Promptly?</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              A powerful AI platform designed to enhance your productivity and creativity
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaRocket,
                title: 'Exceptional Performance',
                description: 'Our platform delivers fast, accurate results across a wide range of tasks, from content creation to complex analysis.'
              },
              {
                icon: FaLightbulb,
                title: 'Contextual Understanding',
                description: 'Promptly comprehends nuanced instructions and produces responses tailored to your specific needs.'
              },
              {
                icon: FaBrain,
                title: 'Continuous Learning',
                description: 'Our AI technology evolves with each interaction, constantly improving through feedback and new data.'
              },
              {
                icon: FaShieldAlt,
                title: 'Built-in Safeguards',
                description: 'Advanced safety systems ensure reliable, aligned outputs that follow ethical guidelines and best practices.'
              },
              {
                icon: FaUserFriends,
                title: 'Human-Centered Design',
                description: 'Created with real users in mind, focusing on intuitive interfaces and meaningful interactions.'
              },
              {
                icon: FaLock,
                title: 'Privacy Focused',
                description: 'Your data remains secure with enterprise-grade protection and privacy controls built into our platform.'
              },
            ].map((feature, i) => (
              <div key={i} className="bg-card/40 border border-white/5 rounded-2xl p-8 hover:border-primary/10 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection />
      
   
      {/* Pricing CTA */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card/80 rounded-2xl border border-white/10 p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your workflow?</h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who are already using Promptly to enhance their productivity with AI.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup" className="btn btn-lg btn-primary">
                Get Started Free
              </Link>
              <Link href="/pricing" className="btn btn-lg btn-outline">
                View Pricing
              </Link>
            </div>
            
            <div className="mt-8 text-foreground/50 text-sm">
              No credit card required. Free plan available.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
