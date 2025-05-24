import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'RealAI - AI Agents for Real Estate Brokerages',
    template: '%s | RealAI'
  },
  description: 'Where real estate meets real intelligence. Transform your real estate brokerage with human-guided AI deployment. Custom AI agents for lead generation, CRM automation, and operational excellence.',
  keywords: ['real estate AI', 'brokerage automation', 'AI agents', 'real estate CRM', 'lead generation'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://realai.com',
    siteName: 'RealAI',
    title: 'RealAI - AI Agents for Real Estate Brokerages',
    description: 'Where real estate meets real intelligence. Transform your real estate brokerage with human-guided AI deployment.',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI - Where real estate meets real intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI - AI Agents for Real Estate Brokerages',
    description: 'Where real estate meets real intelligence. Transform your real estate brokerage with human-guided AI deployment.',
    images: ['/logo.png'],
  },
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
