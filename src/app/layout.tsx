import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Petriko Designers — Beautiful spaces, beautifully crafted',
  description: 'Premium interior design and painting services across Kenya since 2008. Transform your space with expert craftsmanship.',
  keywords: 'interior design, painting services, Kenya, premium design, home renovation, Nairobi',
  icons: {
    icon: '/favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased overflow-x-clip">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&family=Space+Grotesk:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
