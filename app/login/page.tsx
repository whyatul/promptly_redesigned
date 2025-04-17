'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaEnvelope, FaLock, FaArrowRight, FaSignInAlt } from 'react-icons/fa' 
import { useRouter } from 'next/navigation' 

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
      router.push('/dashboard') 
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="max-w-md w-full space-y-8 bg-card/80 border border-white/10 rounded-2xl p-8 sm:p-10 shadow-xl animate-fade-in-up">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <FaSignInAlt className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">
            Welcome Back
          </h2>
          <p className="mt-2 text-muted-foreground">
            Sign in to access your Promptly dashboard.
          </p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaEnvelope className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
            </div>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="input pl-12" 
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="sr-only">Password</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaLock className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="input pl-12" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-border rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-muted-foreground">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="font-medium text-primary hover:text-primary/80">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary w-full group relative flex justify-center py-3 px-4 text-sm font-medium" 
              
            >
             
              Sign in 
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don't have an account?{' '}
          <Link href="/signup" className="font-medium text-primary hover:text-primary/80">
            Create one now
          </Link>
        </p>
      </div>
    </div>
  )
}
