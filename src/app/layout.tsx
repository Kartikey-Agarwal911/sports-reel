import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ES Reels - Sports Celebrity History',
  description: 'AI-generated sports celebrity history reels',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 