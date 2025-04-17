'use client'

import { useState } from 'react'
import { FaUpload, FaTable } from 'react-icons/fa'

const DataVisualizerTool = () => {
  const [data, setData] = useState<string | null>(null)
  const [visualization, setVisualization] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [chartType, setChartType] = useState('bar')

  const handleDataUpload = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData(e.target.value)
    setVisualization(null)
  }

  const visualizeData = () => {
    if (!data) return
    
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setVisualization(`[Visualization of ${chartType} chart would be displayed here]

Data Insights:
- Average value: 42.5
- Highest value: 78 (Category D)
- Lowest value: 12 (Category F)
- Trend: Increasing pattern detected
- Anomalies: Possible outlier in Category E

The data shows a correlation between variables X and Y with a coefficient of 0.82.`)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="bg-card rounded-lg p-6">
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Input your data (CSV format or JSON)
        </label>
        <textarea
          rows={8}
          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Category A, 45
Category B, 32
Category C, 67
Category D, 78
Category E, 23
Category F, 12"
          onChange={handleDataUpload}
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Chart Type
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['bar', 'line', 'pie', 'scatter', 'area', 'heatmap'].map((type) => (
            <div 
              key={type}
              className={`border rounded-md p-3 text-center cursor-pointer ${chartType === type ? 'bg-primary text-white border-primary' : 'hover:border-primary'}`}
              onClick={() => setChartType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={visualizeData}
        disabled={!data || loading}
        className="btn btn-primary w-full"
      >
        {loading ? 'Generating Visualization...' : 'Visualize Data'}
      </button>

      {visualization && (
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-2">Visualization & Insights:</h3>
          <div className="bg-muted p-4 rounded-md mb-4">
            <div className="bg-muted/50 h-64 flex items-center justify-center mb-4 rounded">
              <FaTable className="h-12 w-12 text-muted-foreground mr-3" />
              <p className="text-foreground font-medium">
                {chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart
              </p>
            </div>
            <div className="whitespace-pre-wrap text-foreground">
              {visualization}
            </div>
          </div>
          <div className="flex justify-end">
            <button className="btn btn-sm btn-outline mr-2">
              Download CSV
            </button>
            <button className="btn btn-sm btn-outline mr-2">
              Download Image
            </button>
            <button className="btn btn-sm btn-outline">
              Share
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DataVisualizerTool
