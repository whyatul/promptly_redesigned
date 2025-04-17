'use client'

import { FaPen, FaCode, FaChartLine, FaFileAlt, FaGlobe, FaImage, FaCheck } from 'react-icons/fa'
import { useState } from 'react'
import Image from 'next/image'

const CapabilitiesSection = () => {
  const [activeTab, setActiveTab] = useState('content')
  
  // Use only reliable external image URLs since local images are returning HTML errors
  const capabilities = [
    {
      id: 'content',
      title: 'Content Creation',
      icon: FaPen,
      description: 'Generate high-quality articles, marketing copy, social media posts, and more that engage your audience and match your brand voice.',
      features: [
        'Blog posts and long-form content',
        'Social media captions and headlines',
        'Marketing copy and advertisements',
        'Product descriptions and catalogs',
        'Email newsletters and campaigns'
      ],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
      color: 'from-purple-500/20 to-blue-500/20'
    },
    {
      id: 'code',
      title: 'Development Assistance',
      icon: FaCode,
      description: 'Get help with coding challenges, debugging issues, and implementing best practices across multiple programming languages.',
      features: [
        'Code generation in multiple languages',
        'Debugging and error resolution',
        'Code explanation and documentation',
        'API integration assistance',
        'Testing implementations'
      ],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'analysis',
      title: 'Data Analysis',
      icon: FaChartLine,
      description: 'Transform raw data into meaningful insights with AI-powered analytics that help you make better business decisions.',
      features: [
        'Data interpretation and pattern recognition',
        'Statistical analysis and visualization',
        'Trend identification and forecasting',
        'Market research summarization',
        'Performance metrics evaluation'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'documents',
      title: 'Document Processing',
      icon: FaFileAlt,
      description: 'Extract key information from documents, summarize long texts, and organize information efficiently.',
      features: [
        'Text summarization and extraction',
        'Document categorization',
        'Information retrieval',
        'Format conversion',
        'Content reorganization'
      ],
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop',
      color: 'from-orange-500/20 to-amber-500/20'
    }
  ]

  const activeCapability = capabilities.find(cap => cap.id === activeTab) || capabilities[0]

  return (
    <section className="py-24 bg-gradient-to-r from-background to-muted/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Promptly's Capabilities</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            From content creation to data analysis, our AI platform helps you excel across multiple domains
          </p>
        </div>
        
        {/* Tab navigation */}
        <div className="flex justify-center mb-12 space-x-1 bg-muted/20 p-1 rounded-xl max-w-3xl mx-auto">
          {capabilities.map((cap) => (
            <button
              key={cap.id}
              onClick={() => setActiveTab(cap.id)}
              className={`px-4 py-3 rounded-lg text-sm font-medium flex items-center transition-all duration-300 ${
                activeTab === cap.id 
                  ? 'bg-card shadow-sm text-primary' 
                  : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
              }`}
            >
              <cap.icon className="h-4 w-4 mr-2" />
              {cap.title}
            </button>
          ))}
        </div>
        
        {/* Content area */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div 
            className="order-2 md:order-1 animate-fade-in-up" 
            key={activeCapability.id}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-xl bg-primary/10 mr-4">
                <activeCapability.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-medium">{activeCapability.title}</h3>
            </div>
            
            <p className="text-lg text-foreground/80 mb-8">
              {activeCapability.description}
            </p>
            
            <ul className="space-y-3">
              {activeCapability.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1.5">
                    <FaCheck className="h-3 w-3 text-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className={`relative bg-gradient-to-tr ${activeCapability.color} rounded-2xl p-1 overflow-hidden shadow-lg h-80 w-full max-w-md`}>
              <div className="absolute inset-0 backdrop-blur-sm rounded-2xl bg-card/10"></div>
              <div className="relative h-full w-full rounded-xl overflow-hidden">
                <Image 
                  src={activeCapability.image}
                  alt={`${activeCapability.title} illustration`}
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority={activeTab === activeCapability.id}
                  unoptimized={true} // Skip Next.js image optimization for external URLs
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <p className="text-white text-sm font-medium">
                    {activeCapability.title} capabilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
