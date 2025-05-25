import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | RealAI',
  description: 'Terms of Service for RealAI - AI Agents for Real Estate Brokerages',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              <em>This page is currently under construction. Please check back soon for our complete Terms of Service.</em>
            </p>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Coming Soon</h2>
              <p className="text-slate-700 mb-4">
                We are preparing comprehensive Terms of Service that will outline the terms and conditions for using RealAI's services.
              </p>
              <p className="text-slate-700">
                For any questions about our terms in the meantime, please contact us at{' '}
                <a href="mailto:hello@realai.com" className="text-blue-600 hover:text-blue-800">
                  hello@realai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
