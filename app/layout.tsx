import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        {/* Apply saved theme instantly before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const v = localStorage.getItem('dark_mode'); const m = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; if (v === 'true' || (v === null && m)) { document.documentElement.classList.add('dark'); } else { document.documentElement.classList.remove('dark'); } } catch (e) {} })();`,
          }}
        />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
