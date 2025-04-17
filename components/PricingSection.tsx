'use client'

import Link from 'next/link'
import { FaCheck, FaStar, FaBuilding } from 'react-icons/fa'
import Button from '@/components/ui/Button'

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    frequency: '/ month',
    description: 'Get started with basic AI tools and prompts.',
    features: [
      '45 uses of AI per month',
      'Access to all AI Tools',
      'Community support',
    ],
    cta: 'Start for Free',
    href: '/signup',
    isFeatured: false,
  },
  {
    name: 'Pro',
    price: '$19',
    frequency: '/ month',
    description: 'Unlock the full power of Promptly for professionals.',
    features: [
        '200 uses of AI per month',
      'Access to all AI tools',
      'Priority support and early access to new AI',
     
    ],
    cta: 'Go Pro',
    href: '/pricing',
    isFeatured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    frequency: '',
    description: 'Tailored solutions for teams and organizations.',
    features: [
      'Requested uses of AI per month',
      'Access to all AI tools',
      'Priority support and early access to new AI',
    ],
    cta: 'Contact Sales',
    href: '/contact',
    isFeatured: false,
  },
]

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Choose the plan that fits your needs and start boosting your productivity today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                tier.isFeatured
                  ? 'border-primary shadow-xl bg-card hover:shadow-primary/20'
                  : 'border-border bg-card/80 hover:border-primary/50'
              }`}
            >
              {tier.isFeatured && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold tracking-wide text-primary-foreground bg-primary">
                    <FaStar className="mr-1.5 h-4 w-4" /> Most Popular
                  </span>
                </div>
              )}

              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-foreground/70 mb-6">{tier.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.frequency && (
                    <span className="text-lg text-foreground/60">{tier.frequency}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-10">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <FaCheck className="h-4 w-4 text-primary mt-1" />
                      </div>
                      <span className="ml-3 text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                href={tier.href}
                variant={tier.isFeatured ? 'primary' : 'outline'}
                size="lg"
                fullWidth
                className="mt-auto"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
