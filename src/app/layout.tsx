import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Petriko Designers - Beautiful spaces. Beautifully crafted.',
  description: 'Premium interior design and painting services across Kenya since 2008. Transform your space with our expert craftsmanship.',
  keywords: 'interior design, painting services, Kenya, premium design, home renovation',
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#007AFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0A84FF' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-apple-text dark:text-apple-text-dark transition-colors duration-300 pl-safe-left pr-safe-right">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
