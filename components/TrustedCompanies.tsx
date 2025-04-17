'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const TrustedCompanies = () => {
  // Sample list of company logos - replace with your actual partners
  const companies = [
    { name: 'Company 1', logo: '/companies/placeholder1.svg' },
    { name: 'Company 2', logo: '/companies/placeholder2.svg' },
    { name: 'Company 3', logo: '/companies/placeholder3.svg' },
    { name: 'Company 4', logo: '/companies/placeholder4.svg' },
    { name: 'Company 5', logo: '/companies/placeholder5.svg' },
  ]

  return (
    <section className="py-12 border-t border-border/30">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-foreground/70 mb-1">Trusted by innovative teams</h3>
          <div className="w-12 h-1 bg-primary/30 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="h-8 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                {/* Replace with actual company logos when available */}
                <div className="text-foreground/70 font-medium text-sm">{company.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedCompanies
