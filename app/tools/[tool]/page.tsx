"use client"

import { useEffect, useState } from 'react'
import { toolsData, toolCategories } from '@/data/toolsData'
import TextGeneratorTool from '@/components/tools/TextGeneratorTool'
import ImageAnalyzerTool from '@/components/tools/ImageAnalyzerTool'
import DataVisualizerTool from '@/components/tools/DataVisualizerTool'
import SummarizerTool from '@/components/tools/SummarizerTool'
import ToolCard from '@/components/ToolCard'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FaArrowLeft, FaStar, FaBookmark, FaArrowRight } from 'react-icons/fa'

export default function ToolPage({ params }: { params: { tool: string } }) {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  const tool = toolsData.find(t => t.id === params.tool)
  
  if (!tool) {
    notFound()
  }
  
  const category = toolCategories.find(c => c.id === tool.category)
  
  const renderTool = () => {
    switch (tool.id) {
      case 'text-generator':
        return <TextGeneratorTool />
      case 'image-analyzer':
        return <ImageAnalyzerTool />
      case 'data-visualizer':
        return <DataVisualizerTool />
      case 'summarizer':
        return <SummarizerTool />
      default:
        return <div className="p-8 text-center">This tool is coming soon!</div>
    }
  }
  
  // Related tools (same category, excluding current tool)
  const relatedTools = toolsData
    .filter(t => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3)
  
  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Breadcrumb */}
      <div className="bg-muted/50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center text-sm">
          <Link href="/tools" className="text-muted-foreground hover:text-foreground flex items-center group transition-colors duration-300">
            <FaArrowLeft className="mr-2 h-3 w-3 transition-transform duration-300 group-hover:-translate-x-1" /> Back to tools
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          {category && (
            <>
              <Link href={`/tools?category=${category.id}`} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                {category.name}
              </Link>
              <span className="mx-2 text-muted-foreground">/</span>
            </>
          )}
          <span className="text-foreground font-medium">{tool.title}</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 animate-fade-in-up">
          <div>
            <div className="flex items-center mb-2">
              <tool.icon className="h-6 w-6 text-primary mr-3 animate-pulse-soft" />
              <h1 className="text-3xl font-bold mr-3">{tool.title}</h1>
              {tool.isNew && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/20 text-secondary animate-pulse-soft">
                  New
                </span>
              )}
            </div>
            <p className="text-lg text-muted-foreground">{tool.description}</p>
          </div>
          
          <div className="flex mt-4 md:mt-0">
            <button className="btn btn-outline mr-2 group">
              <FaBookmark className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" /> Save
            </button>
            <button className="btn btn-outline group">
              <FaStar className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" /> Favorite
            </button>
          </div>
        </div>
        
        {/* Tool Interface */}
        <div className="bg-card rounded-2xl border shadow-anthropic hover:shadow-anthropic-md transition-all duration-300 animate-fade-in-up delay-200">
          {renderTool()}
        </div>
        
        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <div className="mt-12 animate-fade-in-up delay-300">
            <h2 className="text-2xl font-bold mb-6">Related Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
              {relatedTools.map((relatedTool) => (
                <ToolCard 
                  key={relatedTool.id}
                  id={relatedTool.id}
                  title={relatedTool.title}
                  description={relatedTool.description}
                  icon={relatedTool.icon}
                  isNew={relatedTool.isNew}
                  isPopular={relatedTool.isPopular}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Getting Started Guide */}
        <div className="mt-12 p-6 border rounded-2xl bg-card hover:shadow-anthropic transition-all duration-300 animate-fade-in-up delay-400">
          <h3 className="text-xl font-bold mb-4">How to use {tool.title}</h3>
          <ol className="list-decimal pl-5 space-y-3">
            <li className="animate-fade-in delay-500">Enter your inputs in the fields above</li>
            <li className="animate-fade-in delay-600">Adjust any parameters or settings to customize the output</li>
            <li className="animate-fade-in delay-700">Click the generate/analyze button to process your request</li>
            <li className="animate-fade-in delay-800">Review the results and download or share as needed</li>
          </ol>
          <div className="mt-4 animate-fade-in delay-900">
            <Link href="/help" className="text-primary hover:underline flex items-center group">
              Need more help? Check our detailed guide 
              <FaArrowRight className="ml-2 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
