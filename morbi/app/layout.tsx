import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MORBI - Connect with the best to create your dream team',
  description: 'Join MORBI and connect with the best professionals to create your dream team. Sign up now - it\'s free and only takes two minutes.',
  keywords: ['MORBI', 'team building', 'professionals', 'networking'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
