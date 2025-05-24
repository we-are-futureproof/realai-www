import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Users, Zap, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Approach - Human-Guided AI Deployment',
  description: 'Discover RealAI\'s unique 4-phase methodology for safe, effective AI implementation. Professional-grade AI deployment with white-glove precision for real estate brokerages.',
  openGraph: {
    title: 'Our Approach - Human-Guided AI Deployment | RealAI',
    description: 'We\'re not selling AI—we\'re selling confidence, control, and peace of mind. Discover our 4-phase methodology for safe AI implementation.',
    url: 'https://realai.com/our-approach',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI Approach - Human-Guided AI Deployment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Approach - Human-Guided AI Deployment | RealAI',
    description: 'We\'re not selling AI—we\'re selling confidence, control, and peace of mind. The future of real estate isn\'t artificial.',
  },
}

export default function OurApproachPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 text-white px-4 py-2 hover:bg-blue-600">
              Human-Guided AI Deployment
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-blue-400">Approach</span> to AI Implementation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Where real estate meets real intelligence. We're not selling AI—we're selling confidence, control, and peace of mind that automation won't wreck what
              you've built.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">AI Is Valuable But Intimidating</h2>
              <p className="text-xl text-slate-600">
                Many broker/owners already know AI is powerful. But they're also terrified of losing control.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800">Common AI Fears</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Terrified of losing control</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Afraid messaging will be off-brand</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Worried it will create more work, not less</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Intimidated by technical complexity</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Not ready to trust bots with customer communication</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">RealAI: The Human Interface to AI</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">
                      Domain expertise to identify what should and shouldn't be automated
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Process interviewing to understand your unique workflows</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Integration skill to ensure we don't break things</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Human QA and staged rollout plans</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Trust and clarity in a high-stakes environment</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Our 4-Phase Methodology</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <CardTitle className="text-xl">Discovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    We audit your business processes and identify the highest value integration points
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Workflow analysis</li>
                    <li>• Pain point identification</li>
                    <li>• ROI prioritization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <CardTitle className="text-xl">Blueprinting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    You complete a simple intake form while we design your custom AI architecture
                  </p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Custom workflow design</li>
                    <li>• Brand voice training</li>
                    <li>• Integration planning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <CardTitle className="text-xl">Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">We build and deploy your AI agent team in safe, staged sprints</p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Incremental rollout</li>
                    <li>• Testing & validation</li>
                    <li>• Risk mitigation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                  <CardTitle className="text-xl">Training & Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">You get full guidance, documentation, and ongoing optimization</p>
                  <ul className="text-sm text-slate-500 space-y-1">
                    <li>• Team training</li>
                    <li>• Performance monitoring</li>
                    <li>• Continuous improvement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">What Makes Us Different</h2>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-8 h-8 text-blue-600" />
                    Incremental Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We identify the highest value integration points and tackle them first so you see maximum ROI as
                    quickly as possible without risking operational stability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Zap className="w-8 h-8 text-green-600" />
                    Comprehensive Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We integrate AI deeply into every aspect of your brokerage operations, from CRM management to MLS
                    updates and marketing automation. This ensures a seamless flow of information and tasks, eliminating
                    manual errors and enhancing operational efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-purple-600" />
                    Customized Workflows
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Unlike off-the-shelf solutions that offer generic functionalities, we tailor AI workflows
                    specifically to your brokerage's needs. Each AI agent is designed to perform tasks that align with
                    your unique business processes, enhancing productivity and reducing overhead costs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-yellow-600" />
                    Competitive Advantage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Our focus is on providing a competitive advantage through technology. By leveraging AI in strategic
                    areas beyond lead generation, such as transaction management, client communication, and analytics,
                    we empower your team to focus on high-value activities while AI handles repetitive tasks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-slate-900">You're Not Buying AI—You're Buying Confidence</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mb-8">
              <p className="text-xl text-blue-800 mb-4">What our prospects think they want is automation.</p>
              <p className="text-xl text-blue-800 mb-4">
                What they actually want is clarity, control, and peace of mind that automation won't wreck what they've
                built.
              </p>
              <p className="text-xl font-semibold text-blue-900 mb-3">RealAI offers that peace of mind.</p>
              <p className="text-lg text-blue-700 italic">
                The future of real estate isn't artificial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Expert Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    That's why this is worth $25K–$50K—not for the tech, but for the expert deployment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Brand Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We ensure your AI sounds like you, not like a generic bot that could damage your reputation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Operational Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Staged rollouts and human oversight mean you never risk your business on untested automation.
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Brokerage?</h2>
            <p className="text-xl mb-8 text-slate-300">
              Let's discuss how our human-guided AI approach can safely scale your operations while protecting your
              brand.
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
