'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaUser, FaEnvelope, FaLock, FaArrowRight, FaUserPlus } from 'react-icons/fa' 
import { useRouter } from 'next/navigation' // Import useRouter

export default function SignUpPage() {
  const [name, setName] = useState('')
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
            <FaUserPlus className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground">
            Create Account
          </h2>
           <p className="mt-2 text-muted-foreground">
            Join Promptly and boost your productivity.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="name" className="sr-only">Name</label>
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaUser className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="input pl-12" 
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              autoComplete="new-password"
              required
              className="input pl-12" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

           <div className="text-xs text-center text-muted-foreground pt-2"> 
            By signing up, you agree to our{' '}
            <Link href="/terms" className="font-medium text-primary hover:text-primary/80 underline">Terms</Link> and{' '}
            <Link href="/privacy" className="font-medium text-primary hover:text-primary/80 underline">Privacy Policy</Link>.
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary w-full group relative flex justify-center py-3 px-4 text-sm font-medium" // Use btn classes
            >
              Create Account 
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary hover:text-primary/80">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

