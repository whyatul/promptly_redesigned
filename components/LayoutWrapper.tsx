'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith('/dashboard')
  const isAuthPage = pathname === '/login' || pathname === '/signup'
  const isHomePage = pathname === '/' // Check if it's the home page

  return (
    <>
      {!isDashboard && !isAuthPage && <Header />} 
      <main className={!isDashboard && !isAuthPage && !isHomePage ? "pt-16" : ""}> {/* Remove padding for home page */}
        {children}
      </main>
      {!isDashboard && !isAuthPage && <Footer />} 
    </>
  )
}
