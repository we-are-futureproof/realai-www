import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, Database } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security | RealAI',
  description: 'Security and data protection information for RealAI - AI Agents for Real Estate Brokerages',
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Security & Data Protection</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-600 mb-8">
              <em>This page is currently under construction. Please check back soon for detailed security information.</em>
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Enterprise Security</h3>
                <p className="text-slate-700">
                  Industry-standard security measures to protect your data and client information.
                </p>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <Lock className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Data Encryption</h3>
                <p className="text-slate-700">
                  End-to-end encryption for all data transmission and storage.
                </p>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <Eye className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Privacy First</h3>
                <p className="text-slate-700">
                  Your data remains yours. We never sell or share client information.
                </p>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <Database className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Compliance</h3>
                <p className="text-slate-700">
                  Built to meet real estate industry compliance requirements.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Questions About Security?</h2>
              <p className="text-slate-700 mb-4">
                We take security seriously and are happy to discuss our security measures in detail.
              </p>
              <p className="text-slate-700">
                Contact our security team at{' '}
                <a href="mailto:security@realai.com" className="text-blue-600 hover:text-blue-800">
                  security@realai.com
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
