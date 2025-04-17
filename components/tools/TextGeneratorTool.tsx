'use client'

import { useState } from 'react'

const TextGeneratorTool = () => {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setResult(`Generated text based on: "${prompt}"\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc eget nunc. Nullam euismod, nisl eget aliquam ultricies, nunc nunc aliquet nunc, vitae aliquam nisl nunc eget nunc.`)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="bg-card rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
            Enter your prompt
          </label>
          <textarea
            id="prompt"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Describe what you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
        </div>
        
        <div className="flex items-center mb-4">
          <label className="text-sm font-medium text-gray-700 mr-4">Length:</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input type="radio" name="length" value="short" className="form-radio" defaultChecked />
              <span className="ml-2">Short</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="length" value="medium" className="form-radio" />
              <span className="ml-2">Medium</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="length" value="long" className="form-radio" />
              <span className="ml-2">Long</span>
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Text'}
        </button>
      </form>
      
      {result && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-2">Generated Result:</h3>
          <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">
            {result}
          </div>
          <div className="mt-4 flex justify-end">
            <button className="btn bg-muted hover:bg-muted/80 text-muted-foreground mr-2">
              Copy
            </button>
            <button className="btn bg-muted hover:bg-muted/80 text-muted-foreground">
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TextGeneratorTool
