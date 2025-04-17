'use client'

import { useState } from 'react'
import { FaLink, FaFileUpload } from 'react-icons/fa'

const SummarizerTool = () => {
  const [content, setContent] = useState('')
  const [url, setUrl] = useState('')
  const [length, setLength] = useState('medium')
  const [summary, setSummary] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('text')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      if (activeTab === 'url' && url) {
        setSummary(`Summary of content from URL: ${url}\n\nThis is an AI-generated summary of the webpage content. The article discusses artificial intelligence applications in modern business environments. Key points include the transformation of customer service through chatbots, data analysis improvements, and predictive maintenance capabilities. The summary is condensed to highlight only the most important information from the original source.`)
      } else {
        setSummary(`Summary of provided text content:\n\nThis is an AI-generated summary of the text provided. The content has been analyzed and condensed to ${length} length while preserving the key points and main ideas. This summary removes redundant information and focuses on delivering the core message in a concise format.`)
      }
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="bg-card rounded-lg p-6">
      <div className="mb-6">
        <div className="flex border-b">
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'text' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('text')}
          >
            Enter Text
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'url' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('url')}
          >
            Webpage URL
          </button>
          <button
            className={`py-2 px-4 font-medium ${activeTab === 'file' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
            onClick={() => setActiveTab('file')}
          >
            Upload File
          </button>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {activeTab === 'text' && (
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Enter text to summarize
            </label>
            <textarea
              id="content"
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Paste your article, document, or text content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        )}
        
        {activeTab === 'url' && (
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
              Enter webpage URL
            </label>
            <div className="flex">
              <div className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
                <FaLink className="text-gray-400" />
              </div>
              <input
                type="url"
                id="url"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="https://example.com/article"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
          </div>
        )}
        
        {activeTab === 'file' && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload a PDF or text file
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <FaFileUpload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, TXT, DOCX up to 10MB
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Summary Length
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                value="short" 
                checked={length === 'short'} 
                onChange={() => setLength('short')} 
                className="form-radio" 
              />
              <span className="ml-2">Short</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                value="medium" 
                checked={length === 'medium'} 
                onChange={() => setLength('medium')} 
                className="form-radio" 
              />
              <span className="ml-2">Medium</span>
            </label>
            <label className="inline-flex items-center">
              <input 
                type="radio" 
                value="long" 
                checked={length === 'long'} 
                onChange={() => setLength('long')} 
                className="form-radio" 
              />
              <span className="ml-2">Long</span>
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading || (activeTab === 'text' && !content) || (activeTab === 'url' && !url)}
        >
          {loading ? 'Summarizing...' : 'Generate Summary'}
        </button>
      </form>
      
      {summary && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-2">Summary:</h3>
          <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">
            {summary}
          </div>
          <div className="mt-4 flex justify-end">
            <button className="btn btn-sm btn-outline mr-2">
              Copy
            </button>
            <button className="btn btn-sm btn-outline">
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SummarizerTool
