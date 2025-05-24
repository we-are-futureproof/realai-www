import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'RealAI - AI Agents for Real Estate Brokerages',
    template: '%s | RealAI'
  },
  description: 'Transform your real estate brokerage with human-guided AI deployment. Custom AI agents for lead generation, CRM automation, and operational excellence.',
  keywords: ['real estate AI', 'brokerage automation', 'AI agents', 'real estate CRM', 'lead generation'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
