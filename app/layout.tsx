import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roshan Pathak — Growth Operator',
  description: 'Growth operator studying systems across business, travel and performance.',
  openGraph: {
    title: 'Roshan Pathak',
    description: 'Growth operator studying systems across business, travel and performance.',
    url: 'https://yourdomain.com',
    siteName: 'Roshan Pathak',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roshan Pathak',
    description: 'Growth operator studying systems across business, travel and performance.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (e) {}
            `
          }}
        />
      </head>
      <body className="bg-base text-text font-body">
        {children}
      </body>
    </html>
  )
}