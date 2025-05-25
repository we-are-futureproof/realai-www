import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, Shield, Users, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RealAI vs MeetAlfred - Why Generic AI Falls Short',
  description: 'Compare RealAI\'s specialized real estate AI solutions against generic tools like MeetAlfred. Discover why domain expertise and custom implementation matter for brokerages.',
  openGraph: {
    title: 'RealAI vs MeetAlfred - Why Generic AI Falls Short | RealAI',
    description: 'Professional-grade AI vs generic solutions. Why domain expertise and custom implementation matter for real estate brokerages.',
    url: 'https://realai.com/vs-meetalfred',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs Generic AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs MeetAlfred - Why Generic AI Falls Short | RealAI',
    description: 'Professional-grade AI vs generic solutions. The future of real estate isn\'t artificial.',
  },
}

export default function VsMeetAlfredPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-600 text-white px-4 py-2 hover:bg-red-600">Why Generic AI Falls Short</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              RealAI vs. <span className="text-red-400">Off-the-Shelf</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Why MeetAlfred and similar tools can't deliver the comprehensive AI transformation your brokerage needs
            </p>
          </div>
        </div>
      </section>

      {/* The Problem with Generic Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">The Problem with One-Size-Fits-All AI</h2>
              <p className="text-xl text-slate-600">
                Generic AI tools like MeetAlfred offer basic functionalities, but when it comes to real estate—where
                every lead and interaction is critical—they fall short.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="w-6 h-6" />
                    Generic AI Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Basic lead generation only</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">No real estate domain expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Generic messaging that sounds robotic</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">No integration with MLS or real estate CRMs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Set-it-and-forget-it approach</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Risk of brand damage from poor AI responses</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="w-6 h-6" />
                    RealAI Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Complete brokerage transformation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">20+ years real estate expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">AI trained to sound like your brand</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Deep CRM, MLS, and operations integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Human-guided deployment with oversight</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Brand protection and quality assurance</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Feature-by-Feature Comparison</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-4 text-left font-semibold">Feature</th>
                    <th className="border border-slate-300 p-4 text-center font-semibold text-red-700">
                      MeetAlfred & Similar
                    </th>
                    <th className="border border-slate-300 p-4 text-center font-semibold text-green-700">RealAI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-4 font-medium">Lead Generation</td>
                    <td className="border border-slate-300 p-4 text-center">
                      <span className="text-yellow-600">Basic outbound only</span>
                    </td>
                    <td className="border border-slate-300 p-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-4 font-medium">Real Estate Expertise</td>
                    <td className="border border-slate-300 p-4 text-center">
                      <X className="w-5 h-5 text-red-600 mx-auto" />
                    </td>
                    <td className="border border-slate-300 p-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-4 font-medium">CRM Integration</td>
                    <td className="border border-slate-300 p-4 text-center">
                      <span className="text-yellow-600">Limited</span>
                    </td>
                    <td className="border border-slate-300 p-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-4 font-medium">MLS Integration</td>
                    <td className="border border-slate-300 p-4 text-center">
                      <X className="w-5 h-5 text-red-600 mx-auto" />
                    </td>
                    <td className="border border-slate-300 p-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-4 font-medium">Transaction Management</td>
                    <td className="border border-slate-300 p-4 text-center">
                      <X className="w-5 h-5 text-red-600 mx-auto" />
                    </td>
                    <td className="border border-slate-300 p-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-4 font-medium">Brand Voice Training</td>
                    <td className="border border-slate-300 p-4 text-center">
                      <X className="w-5 h-5 text-red-600 mx-auto" />
                    </td>
                    <td className="border border-slate-300 p-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-4 font-medium">Human Oversight</td>
                    <td className="border border-slate-300 p-4 text-center">
                      <X className="w-5 h-5 text-red-600 mx-auto" />
                    </td>
                    <td className="border border-slate-300 p-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-4 font-medium">Custom Implementation</td>
                    <td className="border border-slate-300 p-4 text-center">
                      <X className="w-5 h-5 text-red-600 mx-auto" />
                    </td>
                    <td className="border border-slate-300 p-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Our Unique Value Proposition */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
              Our Unique Selling Proposition: Human-Guided AI Deployment
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-blue-600" />
                    Insurance Against Bot Disasters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Anyone can slap an AI chatbot on a website. What we do is fundamentally different.
                  </p>
                  <p className="text-slate-600">
                    Our clients are paying for insurance—the insurance that their brand, workflow, and operations don't
                    collapse under a half-baked AI rollout.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-green-600" />
                    Domain Expertise Matters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    With us, you don't get a generic AI tool. You get a premium service delivered by a team that
                    understands real estate.
                  </p>
                  <p className="text-slate-600">
                    We interview your staff and custom-build automations that reflect how you actually operate.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                AI Isn't Replacing You. It's Either Scaling You Or It's Scaling Your Competitors. You Decide.
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">We don't hand your voice over to a bot.</h4>
                  <p className="text-blue-700">We train the bot to sound like you.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">This is not set-it-and-forget-it AI.</h4>
                  <p className="text-blue-700">This is orchestrated automation with white-glove precision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internet Analogy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-slate-900">Think of It Like the Early Internet</h2>
            <div className="bg-slate-100 rounded-lg p-8">
              <p className="text-xl text-slate-700 mb-6">
                "Adopting AI today is like moving your business online in the early 2000s."
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Back then, companies that waited too long got left behind—but the smart ones didn't jump in blind.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                They hired professionals to build smart websites, not broken ones.
              </p>
              <p className="text-lg text-slate-600 mb-6">They didn't just use the internet. They used it well.</p>
              <p className="text-xl font-semibold text-slate-800 mb-3">
                That's what we offer: a professional-grade AI team that ensures you move fast without breaking your
                brand.
              </p>
              <p className="text-lg text-slate-600 italic">
                The future of real estate isn't artificial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  )
}
