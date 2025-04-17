'use client'

import Link from 'next/link'
import { FaArrowRight, FaMagic, FaRobot, FaChartLine } from 'react-icons/fa'
import { useRef, useState, useEffect, useCallback } from 'react'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const animationRef = useRef<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const animateCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const width = canvas.width
    const height = canvas.height
    
    ctx.clearRect(0, 0, width, height)
    
    const time = performance.now() * 0.0005
    
    for (let i = 0; i < 7; i++) {
      ctx.beginPath()
      
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, `rgba(138, 61, 255, ${0.01 + i * 0.01})`)
      gradient.addColorStop(0.5, `rgba(32, 217, 210, ${0.01 + i * 0.01})`)
      gradient.addColorStop(1, `rgba(255, 91, 199, ${0.01 + i * 0.01})`)
      
      ctx.strokeStyle = gradient
      ctx.lineWidth = 1
      
      ctx.moveTo(0, height * (0.2 + i * 0.1))
      
      for (let x = 0; x < width; x += 20) {
        const yOffset = 
          Math.sin(x * 0.003 + time + i) * 50 + 
          Math.cos(x * 0.001 - time * 0.7 + i * 0.3) * 30
        
        const y = height * (0.5 + i * 0.05) + yOffset
        ctx.lineTo(x, y)
      }
      
      ctx.stroke()
    }
    
    const drawStaticNodes = () => {
      const nodes = []
      const nodeCount = 24
      const centerX = width * 0.5
      const centerY = height * 0.5
      
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2
        const baseRadius = Math.min(width, height) * 0.25
        const radius = baseRadius + Math.sin(time * 2 + i * 0.5) * 50
        
        nodes.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius
        })
      }
      
      for (let j = 0; j < 3; j++) {
        const offsetX = width * (0.25 + j * 0.25)
        const offsetY = height * (0.2 + Math.sin(time + j) * 0.1)
        
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2
          const radius = 60 + Math.cos(time * 1.5) * 20
          
          nodes.push({
            x: offsetX + Math.cos(angle + time * 0.3) * radius,
            y: offsetY + Math.sin(angle + time * 0.3) * radius
          })
        }
      }
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
      ctx.lineWidth = 0.5
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i]
          const n2 = nodes[j]
          
          const dist = Math.sqrt(Math.pow(n2.x - n1.x, 2) + Math.pow(n2.y - n1.y, 2))
          if (dist < 150) {
            const opacity = 0.05 * (1 - dist / 150)
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            
            ctx.beginPath()
            ctx.moveTo(n1.x, n1.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.stroke()
          }
        }
      }
      
      nodes.forEach(node => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'
        ctx.fill()
      })
    }
    
    drawStaticNodes()
    
    animationRef.current = requestAnimationFrame(animateCanvas)
  }, [])
  
  useEffect(() => {
    setMounted(true)
    
    if (canvasRef.current && heroRef.current) {
      const canvas = canvasRef.current
      const resizeCanvas = () => {
        if (heroRef.current) {
          const { width, height } = heroRef.current.getBoundingClientRect()
          canvas.width = width
          canvas.height = height
        }
      }
      
      resizeCanvas()
      window.addEventListener('resize', resizeCanvas)
      
      animationRef.current = requestAnimationFrame(animateCanvas)
    }
    
    return () => {
      window.removeEventListener('resize', () => {})
      
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animateCanvas])

  const featureCards = [
    { 
      icon: FaMagic, 
      title: "AI-Powered Prompts", 
      bgColor: "bg-primary/10",
      textColor: "text-primary" 
    },
    { 
      icon: FaRobot, 
      title: "Specialized Tools", 
      bgColor: "bg-secondary/10",
      textColor: "text-secondary" 
    },
    { 
      icon: FaChartLine, 
      title: "Boost Productivity", 
      bgColor: "bg-accent/10",
      textColor: "text-accent" 
    },
  ]

  return (
    <div 
      ref={heroRef}
      className="h-[62rem] flex items-center justify-center pt-10 pb-16 -mt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent animate-pulse-slow" 
               style={{ animationDuration: '15s' }} />
          <div className="absolute top-1/3 left-1/3 w-2/3 h-2/3 bg-gradient-radial from-secondary/5 via-transparent to-transparent animate-pulse-slow" 
               style={{ animationDuration: '18s', animationDelay: '2s' }} />
          <div className="absolute top-1/4 left-1/2 w-1/2 h-1/2 bg-gradient-radial from-accent/5 via-transparent to-transparent animate-pulse-slow" 
               style={{ animationDuration: '20s', animationDelay: '1s' }} />
        </div>
        
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-100"
        />
        
        {mounted && (
          <>
            {[...Array(12)].map((_, i) => (
              <div
                key={`circle-${i}`}
                className={`absolute rounded-full mix-blend-screen animate-float-slow opacity-${Math.floor(Math.random() * 15 + 5)}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 8 + 2}rem`,
                  height: `${Math.random() * 8 + 2}rem`,
                  backgroundColor: i % 3 === 0 ? 'rgba(138, 61, 255, 0.03)' :
                                   i % 3 === 1 ? 'rgba(32, 217, 210, 0.03)' :
                                                'rgba(255, 91, 199, 0.03)',
                  animationDuration: `${Math.random() * 20 + 30}s`,
                  animationDelay: `${Math.random() * 10}s`,
                  transform: `scale(${Math.random() * 0.5 + 0.5})`,
                  filter: `blur(${Math.random() * 5 + 5}px)`,
                }}
              />
            ))}
            
            {[...Array(8)].map((_, i) => (
              <div
                key={`rect-${i}`}
                className="absolute mix-blend-screen animate-float-slow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 10 + 5}rem`,
                  height: `${Math.random() * 10 + 5}rem`,
                  backgroundColor: i % 3 === 0 ? 'rgba(138, 61, 255, 0.02)' :
                                   i % 3 === 1 ? 'rgba(32, 217, 210, 0.02)' :
                                                'rgba(255, 91, 199, 0.02)',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  animationDuration: `${Math.random() * 30 + 30}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  transform: `scale(${Math.random() * 0.7 + 0.3}) rotate(${Math.random() * 360}deg)`,
                  filter: `blur(${Math.random() * 8 + 8}px)`,
                }}
              />
            ))}
          </>
        )}
        
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-soft-light" />
      </div>
      
      <div className="container-custom relative z-10 symmetric-container backdrop-blur-[1px] pt-14 flex items-center">
        <div className="md:col-span-2 lg:col-span-12 text-center flex flex-col items-center justify-center py-8">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full glass interactive-tag animate-subtle-fade-in"
            style={{ animationDuration: '3s' }}
          >
            <span className="text-sm font-medium">AI-Powered Workflow Revolution</span>
          </div>
          
          <h1 
            className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight mb-3 animate-subtle-fade-in bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            style={{ animationDuration: '3s', animationDelay: '0.5s' }}
          >
            Promptly
          </h1>
          
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-subtle-fade-in"
            style={{ animationDuration: '3s', animationDelay: '0.8s' }}
          >
            Work Smarter with <span className="gradient-text mx-2 px-1">200+AI</span> Tools
          </h2>
          
          <p 
            className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-3xl animate-subtle-fade-in"
            style={{ animationDuration: '3s', animationDelay: '1s' }}
          >
            Boost your productivity with expert-crafted prompts and specialized tools designed for modern professionals.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-5 justify-center animate-subtle-fade-in"
            style={{ animationDuration: '3s', animationDelay: '1.5s' }}
          >
            <Link 
              href="/dashboard" 
              className="btn btn-lg btn-primary group min-w-[200px] inline-flex justify-center"
            >
              <span className="relative z-10">Try Free</span>
              <FaArrowRight className="ml-2 h-4 w-4 relative z-10" />
            </Link>
            <Link 
              href="/prompts" 
              className="btn btn-lg glass min-w-[200px] inline-flex justify-center"
            >
              Browse Prompts
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full">
            {featureCards.map((feature, i) => (
              <div
                key={i}
                className="bg-card/80 rounded-2xl border border-white/10 p-6 backdrop-blur-sm animate-subtle-fade-in"
                style={{ 
                  animationDuration: '3s', 
                  animationDelay: `${2 + i * 0.5}s`,
                  transition: 'all 1.2s ease-in-out'
                }}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 backdrop-blur-sm`}>
                  <feature.icon className={`h-6 w-6 ${feature.textColor}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">Get better results in less time with our specialized AI solutions.</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .bg-grid-pattern {
          background-size: 30px 30px;
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
        
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0.7; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(10px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 30s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Hero
