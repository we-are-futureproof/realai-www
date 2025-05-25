import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | RealAI',
  description: 'Privacy Policy for RealAI - AI Agents for Real Estate Brokerages',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              <em>This page is currently under construction. Please check back soon for our complete Privacy Policy.</em>
            </p>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Coming Soon</h2>
              <p className="text-slate-700 mb-4">
                We are preparing a comprehensive Privacy Policy that will detail how RealAI collects, uses, and protects your personal information.
              </p>
              <p className="text-slate-700">
                For any privacy-related questions in the meantime, please contact us at{' '}
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
