import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, TrendingUp, Star, Zap, Shield, Target, Clock } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About RealAI - Meet Our Team',
  description: 'Learn about RealAI\'s leadership team combining 20+ years of real estate expertise with cutting-edge AI technology to transform brokerage operations.',
  openGraph: {
    title: 'About RealAI - Meet Our Team | RealAI',
    description: 'Meet the team behind RealAI. 20+ years of real estate expertise meets cutting-edge AI technology. The future of real estate isn\'t artificial.',
    url: 'https://realai.com/about',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI Team - Where real estate meets real intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About RealAI - Meet Our Team | RealAI',
    description: 'Meet the team behind RealAI. 20+ years of real estate expertise meets cutting-edge AI technology.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 text-white px-4 py-2 hover:bg-blue-600">Meet the Team</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-blue-400">RealAI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Where real estate meets real intelligence. Combining 20+ years of real estate expertise with cutting-edge AI technology to transform how brokerages
              operate.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Our Leadership Team</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Justin</CardTitle>
                  <p className="text-slate-600">Sales Strategist / Go-To-Market Advisor</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-slate-600">
                      Justin brings over 20 years of real estate brokerage domain expertise, providing the strategic
                      foundation for all our AI implementations.
                    </p>

                    <h4 className="font-semibold text-slate-900">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">Provides all real estate brokerage domain expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">Crafts marketing messaging and sales strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">Facilitates discovery calls with broker/owners</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">Creates demo narratives showcasing real-world use cases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">Leads market testing and appointment setting</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-12 h-12 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Sherif</CardTitle>
                  <p className="text-slate-600">AI Product Architect & Builder</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-slate-600">
                      Sherif leads the technical design and implementation of our AI solutions, ensuring every system is
                      built to scale and integrate seamlessly.
                    </p>

                    <h4 className="font-semibold text-slate-900">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">Leads design and technical build of demo automations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">
                          Interprets intake forms and builds functional agent workflows
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">Participates in discovery and demo calls with clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">Advises on feasibility and implementation scope</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">
                          Ensures backend infrastructure is operational and effective
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-slate-600">Defines and refines replicable product stack</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Our Mission</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Safe AI Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We ensure AI implementations that enhance your business without risking your brand or operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Operational Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Transform your brokerage operations to be more efficient, scalable, and competitive in the market.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Agent Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Enable your agents to focus on relationships and sales while AI handles the administrative burden.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-slate-100 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                We believe AI should amplify human expertise, not replace it.
              </h3>
              <p className="text-lg text-slate-700 mb-4">
                Our approach combines deep real estate knowledge with cutting-edge AI technology to create solutions
                that feel natural, work reliably, and scale with your business.
              </p>
              <p className="text-lg text-slate-600 italic">
                The future of real estate isn't artificial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Why We're Different</h2>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-8 h-8 text-blue-600" />
                    Domain Expertise First
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We don't start with technology and try to fit it to real estate. We start with deep understanding of
                    real estate operations and apply AI strategically where it adds the most value.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-green-600" />
                    Incremental Implementation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We identify the highest value integration points and tackle them first, ensuring you see maximum ROI
                    quickly without risking operational stability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-purple-600" />
                    Human-Guided Deployment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Every AI implementation includes human oversight, quality assurance, and staged rollouts. We ensure
                    your AI sounds like your brand and operates within your standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Zap className="w-8 h-8 text-yellow-600" />
                    Comprehensive Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Rather than implementing isolated AI tools, we create integrated ecosystems where your CRM, MLS,
                    marketing, and operations work together seamlessly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-slate-900">Our Commitment to You</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
              <p className="text-xl text-blue-800 mb-4">
                We're not just implementing AI—we're partnering with you to transform your brokerage.
              </p>
              <p className="text-lg text-blue-700">
                Our success is measured by your success: increased agent productivity, reduced operational costs,
                improved client satisfaction, and sustainable competitive advantage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Transparent Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    You'll understand every step of the implementation, from discovery to deployment to ongoing
                    optimization.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ongoing Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We don't disappear after implementation. We provide training, documentation, and continuous
                    improvement.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Risk Mitigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Staged rollouts and human oversight ensure you never risk your business on untested automation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Measurable Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We track and report on key metrics so you can see the tangible impact of your AI investment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work with Us?</h2>
            <p className="text-xl mb-8 text-slate-300">
              Let's discuss how our combined expertise can transform your brokerage with AI that actually works.
            </p>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 border border-transparent text-lg px-8 py-4" asChild>
              <Link href="/discovery">Schedule Your Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
