'use client'

import { useState } from 'react'
import { FaUpload, FaImage } from 'react-icons/fa'

const ImageAnalyzerTool = () => {
  const [image, setImage] = useState<string | null>(null)
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setImage(reader.result as string)
        setAnalysis(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = () => {
    if (!image) return
    
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setAnalysis(`
Image Analysis Results:

- Content: Outdoor nature scene
- Objects detected: Trees (85%), Sky (90%), Mountains (75%)
- Colors: Primarily green and blue tones
- Estimated location: Mountainous region
- Weather conditions: Clear sky, sunny day
- Additional notes: Beautiful landscape photo with no visible text content
      `)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="bg-card rounded-lg p-6">
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Upload an image for analysis
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-border rounded-md">
          <div className="space-y-1 text-center">
            <FaUpload className="mx-auto h-12 w-12 text-muted-foreground" />
            <div className="flex text-sm text-muted-foreground">
              <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                <span>Upload a file</span>
                <input 
                  id="file-upload" 
                  name="file-upload" 
                  type="file" 
                  className="sr-only"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-muted-foreground">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>

      {image && (
        <div className="mt-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
          <div className="relative w-full h-64 mb-4">
            <img 
              src={image} 
              alt="Preview" 
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
          <button
            onClick={analyzeImage}
            disabled={loading}
            className="btn btn-primary w-full"
          >
            {loading ? 'Analyzing...' : 'Analyze Image'}
          </button>
        </div>
      )}

      {analysis && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-2">Analysis Results:</h3>
          <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">
            {analysis}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageAnalyzerTool
