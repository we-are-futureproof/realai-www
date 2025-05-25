import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, TrendingUp, Star, Zap, Shield, Target, Clock } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agents for Real Estate Brokerages',
  description: 'Transform your real estate brokerage with human-guided AI deployment. Custom AI agents for lead generation, CRM automation, marketing, and transaction management.',
  openGraph: {
    title: 'AI Agents for Real Estate Brokerages | RealAI',
    description: 'Where real estate meets real intelligence. Professional-grade AI deployment with white-glove precision for real estate brokerages.',
    url: 'https://realai.com',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI - AI Agents for Real Estate Brokerages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents for Real Estate Brokerages | RealAI',
    description: 'Where real estate meets real intelligence. Professional-grade AI deployment with white-glove precision.',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 text-white px-4 py-2 hover:bg-blue-600">
              Human-Guided AI Deployment
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Unlock the Power of <span className="text-blue-400">AI Agents</span> for Your Real Estate Brokerage
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Where real estate meets real intelligence. We don't hand your voice over to a bot. We train the bot to sound like you. Professional-grade AI
              deployment with white-glove precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 border border-transparent text-lg px-8 py-4" asChild>
                <Link href="/get-started">Get Started Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-slate-900 bg-white border-white hover:bg-slate-900 hover:text-white text-lg px-8 py-4"
                asChild
              >
                <Link href="/compare/realai-vs-meetalfred">Why Not Off-the-Shelf?</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">The Problem: Chaos, Costs & Clutter</h2>
              <p className="text-xl text-slate-600">
                Running a real estate brokerage today means juggling dozens of systems, departments, and workflows
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Agents drowning in admin tasks</h3>
                    <p className="text-slate-600">Valuable selling time lost to paperwork and data entry</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Slow lead follow-up killing deals</h3>
                    <p className="text-slate-600">Missed opportunities due to delayed responses</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Marketing takes hours, not minutes</h3>
                    <p className="text-slate-600">Time-consuming content creation and distribution</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Post-close follow-ups often forgotten</h3>
                    <p className="text-slate-600">Lost referral opportunities and client relationships</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Hiring admin staff that eats your margins</h3>
                    <p className="text-slate-600">High overhead costs reducing profitability</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-red-800 mb-2">The Result?</h3>
              <p className="text-red-700">
                Inconsistent performance, frustrated agents, missed opportunities, and difficulty attracting top talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Human-Guided AI Agent Stack Built for Brokerages</h2>
            <p className="text-xl text-slate-600">
              We implement a custom suite of AI agents that each handle a core real estate workflow. They don't just
              replace tasks—they collaborate, communicate, and scale with you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-blue-600" />
                  </div>
                  CRM Architect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Builds out and maintains intelligent CRM flows</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  Lead Nurturer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Handles all auto-responses, text/email drips, and follow-up reminders</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                  </div>
                  Listing Syndicator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Scrapes and pushes your listings across platforms</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-600" />
                  </div>
                  Post-Close Concierge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Sends thank-yous, referrals, and check-ins</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-red-600" />
                  </div>
                  Compliance Tracker
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Makes sure documents are on time and error-free</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-indigo-600" />
                  </div>
                  Marketing Assistant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Auto-generates flyers, posts, and updates in your brand voice</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Investment Tiers</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-blue-200 transition-colors flex flex-col h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Starter</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mt-4">$15,000</div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>3 AI agents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Standard CRM integration</span>
                    </div>
                  </div>
                  <Link href="/get-started">
                    <Button className="w-full mt-6">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500 relative flex flex-col h-full">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mt-4">$25,000</div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>5 AI agents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>MLS sync</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Marketing automation</span>
                    </div>
                  </div>
                  <Link href="/get-started">
                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors flex flex-col h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <div className="text-4xl font-bold text-blue-600 mt-4">$50,000</div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>8+ AI agents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Full integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Team training</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Ongoing support</span>
                    </div>
                  </div>
                  <Link href="/get-started">
                    <Button className="w-full mt-6">Get Started</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      
      <CTASection />
      <Footer />
    </div>
  )
}
