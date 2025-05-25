import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tools Guide for Real Estate 2025',
  description: 'Comprehensive guide to AI tools for real estate agents and brokerages. Lead generation, CRM automation, property analysis, and why integration matters more than individual tools.',
  openGraph: {
    title: 'AI Tools Guide for Real Estate 2025 | RealAI',
    description: 'Complete breakdown of AI tools for real estate: lead generation, CRM automation, property analysis. Why integration matters more than individual tools.',
    url: 'https://realai.com/ai-tools-landscape',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI - AI Tools Guide for Real Estate 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Guide for Real Estate 2025 | RealAI',
    description: 'Comprehensive guide to AI tools for real estate. Where real estate meets real intelligence.',
  },
}

export default function AIToolsLandscapePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-600 text-white px-4 py-2 hover:bg-green-600">Comprehensive Guide</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI Tools for <span className="text-green-400">Real Estate</span> in 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Where real estate meets real intelligence. A complete breakdown of AI-powered tools available to real estate agents and brokerages—and why
              integration matters more than individual tools.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">The AI Revolution in Real Estate</h2>
              <p className="text-xl text-slate-600">
                Real estate agents can now leverage AI-powered tools to gain an edge in lead generation, client
                communication, property analysis, and deal evaluation. But the real power comes from integration, not
                isolation.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">The Integration Challenge</h3>
              <p className="text-blue-800 mb-4">
                While individual AI tools can provide value, most agents struggle with:
              </p>
              <ul className="space-y-2 text-blue-700">
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>Managing multiple disconnected tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>Data silos that don't communicate</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>Inconsistent brand voice across platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>Time spent managing tools instead of clients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation & Scraping */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">1. Lead Generation & Scraping</h2>
            <p className="text-xl text-center text-slate-600 mb-12">
              AI-driven tools for finding seller/buyer prospects with predictive lead scoring and data scraping.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Offrs</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Predictive seller lead platform using machine-learning to identify homeowners likely to sell in 6-12
                    months.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Territory exclusivity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Daily updated lists</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Starting ~$399/month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">SmartZip</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Predictive analytics for "smart farming" with integrated marketing campaigns.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Geographic farm targeting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>6-18 month predictions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Integrated marketing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Revaluate</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Sphere intelligence for likely movers using behavioral and life-event data.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>3-6 month predictions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Daily score updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>CRM integrations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Remine</CardTitle>
                    <Badge className="bg-yellow-100 text-yellow-800">AI-Enabled</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    MLS-integrated data mining with AI Sell Scores for off-market properties.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Often free via MLS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Contact information included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>High/Medium/Low scoring</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Leadflow</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Emerging AI lead predictor with "Sellability Score" for 90-180 day predictions.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Generative AI powered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Prioritized prospect queue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Solo agent friendly</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Outreach Automation */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">2. Personalized Outreach Automation</h2>
            <p className="text-xl text-center text-slate-600 mb-12">
              AI tools for automating and personalizing agent outreach including cold emails, SMS follow-ups, and
              voicemail drops.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Lindy</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Custom AI assistant for lead follow-up with no-code agent design.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>24/7 lead conversations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Free tier available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>CRM integrations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Ylopo (Raiya)</CardTitle>
                    <Badge className="bg-yellow-100 text-yellow-800">AI-Enabled</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    End-to-end lead gen + AI follow-up system with automated texting assistant.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Facebook/Google ad integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Behavioral tracking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Branded IDX websites</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Structurely</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    AI conversational SMS bot for 24/7 lead engagement and qualification.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Real estate trained AI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Zero-human lead incubation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>CRM integrations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Scout</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    AI-powered outreach and email sequencing with exclusive ZIP territories.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Personalized email templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Territory exclusivity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Compliance focused</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Property Analysis & Valuation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">3. Property Analysis & Valuation</h2>
            <p className="text-xl text-center text-slate-600 mb-12">
              AI-powered tools for property data, comps, and pricing including AVMs, CMA generators, and market
              analytics.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">HouseCanary</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Canary AI platform with advanced AVM and generative AI assistant for property insights.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Instant valuations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Market forecasts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Conversational AI interface</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Saleswise</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">AI CMA and content assistant with room remodel visualization.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>One-click CMA generation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>AI image generation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>~$39/month pricing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">PropStream</CardTitle>
                    <Badge className="bg-yellow-100 text-yellow-800">AI-Enabled</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Investor-focused property data with AI analysis for motivated sellers.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Nationwide property data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>ARV calculations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>~$99/month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Automation */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">4. CRM Automation</h2>
            <p className="text-xl text-center text-slate-600 mb-12">
              AI-enhanced CRMs and follow-up systems for managing relationships with buyers and investors.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Lofty (Chime)</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    AI-driven smart CRM with predictive lead scoring and automated nurturing.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>AI Sales Assistant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Lead resurrection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Integrated marketing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Sidekick</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Virtual AI assistant for busy agents to automate routine CRM and admin tasks.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Email/text management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>$25/month starting price</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Natural language processing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Follow Up Boss</CardTitle>
                    <Badge className="bg-yellow-100 text-yellow-800">AI-Enabled</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Popular real estate CRM with AI integrations and call summary features.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>AI Call Summary (Den AI)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>App marketplace</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>$69/month solo plan</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Evaluation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">5. AI-Powered Deal Evaluation</h2>
            <p className="text-xl text-center text-slate-600 mb-12">
              AI tools that assist in analyzing deals, forecasting outcomes, and guiding investment decisions.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">DealMachine Alma</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    AI-driven real estate investment assistant for analyzing off-market deals.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>ROI calculations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Automated outreach</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Fix-and-flip analysis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Plunk Pro</CardTitle>
                    <Badge className="bg-green-100 text-green-800">AI-Native</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Real-time home analysis and remodel ROI forecasting with dynamic valuations.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>100M+ home database</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Renovation value projections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Risk assessment metrics</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">ChatGPT</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800">General AI</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    General AI assistant for deal analysis, strategy brainstorming, and decision support.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Free or $20/month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Versatile assistant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Strategy brainstorming</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Integration Problem */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
              The Problem: Tool Sprawl Without Integration
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800">What Most Agents Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">5-10 different AI tools that don't talk to each other</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Manual data entry between systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Inconsistent messaging across platforms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">More time managing tools than serving clients</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Monthly subscription costs adding up</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">The RealAI Solution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Unified AI agent ecosystem that communicates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Seamless data flow between all systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Consistent brand voice across all touchpoints</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">AI handles the busywork, you focus on relationships</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">One integrated solution vs. multiple subscriptions</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Individual Tools vs. Integrated Systems</h3>
              <p className="text-blue-800 mb-4">
                While these individual AI tools can provide value, the real transformation happens when they work
                together as a cohesive system.
              </p>
              <p className="text-blue-800">
                That's where RealAI comes in—we don't just implement tools, we create an integrated AI ecosystem
                tailored to your brokerage.
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
