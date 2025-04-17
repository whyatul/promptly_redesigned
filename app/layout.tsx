import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import LayoutWrapper from '@/components/LayoutWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promptly | AI Tools for Productivity',
  description: 'Enhance your workflow with powerful AI tools and expertly crafted prompts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scrollbar-hide">
      <body className={`${inter.className} bg-background text-foreground scrollbar-hide overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false} 
          forcedTheme="dark" 
        >
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
