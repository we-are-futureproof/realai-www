import { CheckCircle, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar, AlertTriangle, Code, Zap, Brain } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealAI vs DIY AI - Why Professional Beats Patchwork',
  description: 'Compare RealAI vs DIY AI solutions like ChatGPT + Zapier. Discover why professional-grade AI beats patchwork automation.',
  openGraph: {
    title: 'RealAI vs DIY AI - Professional Beats Patchwork | RealAI',
    description: 'Stop duct-taping ChatGPT and Zapier together. Get professional real estate AI that actually works.',
    url: 'https://realai.com/compare/realai-vs-diy-ai',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs DIY AI - Professional vs Patchwork',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs DIY AI - Professional Beats Patchwork | RealAI',
    description: 'Why professional-grade AI beats DIY patchwork solutions.',
  },
}

export default function DIYAIComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-600 text-white px-4 py-2 hover:bg-orange-600">Professional Beats Patchwork</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-orange-400">DIY AI Looks Simple.</span> Until It Isn't.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Why cobbling together ChatGPT, Zapier, and other tools creates more problems than it solves for real estate brokerages.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Wins */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">Built for real estate, not jury-rigged</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">Professional deployment, not weekend projects</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">Guaranteed results, not experimental hope</span>
            </div>
          </div>
        </div>
      </section>

      {/* The DIY Trap */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">The Hidden Costs of DIY AI</h2>
              <p className="text-xl text-slate-600">
                ChatGPT + Zapier seems cheaper until you count your time, the limitations, and the compliance risks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-800">
                    <AlertTriangle className="w-6 h-6" />
                    DIY Patchwork Reality
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-orange-700">Hours spent building brittle connections</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-orange-700">Constant maintenance when APIs change</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-orange-700">No compliance oversight or safety nets</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-orange-700">Generic responses that sound robotic</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-orange-700">Limited to basic if-then logic</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-orange-700">No real estate domain knowledge</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="w-6 h-6" />
                    RealAI Professional System
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Professional implementation in weeks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Self-maintaining AI that evolves</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Built-in compliance and risk management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Natural conversations in your brand voice</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Advanced AI reasoning and context awareness</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">20+ years real estate expertise embedded</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Professional vs. Patchwork</h2>
              <p className="text-xl text-slate-600">
                See why professional-grade AI beats DIY solutions every time.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-6 font-semibold text-slate-900">Capability</th>
                      <th className="text-center p-6 font-semibold text-green-600">RealAI</th>
                      <th className="text-center p-6 font-semibold text-orange-600">DIY ChatGPT + Zapier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-6 font-medium">Setup Time</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">2-4 weeks</span>
                      </td>
                      <td className="p-6 text-center">
                        <Clock className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm">3-6 months (if you're lucky)</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Real Estate Knowledge</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">20+ years embedded</span>
                      </td>
                      <td className="p-6 text-center">
                        <X className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm">Generic only</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Compliance Monitoring</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Built-in & automatic</span>
                      </td>
                      <td className="p-6 text-center">
                        <X className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm">Your responsibility</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Maintenance Required</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Zero - self-improving</span>
                      </td>
                      <td className="p-6 text-center">
                        <X className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm">Constant fixes needed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Natural Conversations</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Advanced AI reasoning</span>
                      </td>
                      <td className="p-6 text-center">
                        <X className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm">Basic templates only</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Support & Training</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">White-glove service</span>
                      </td>
                      <td className="p-6 text-center">
                        <X className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm">You're on your own</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* True Cost Analysis */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">The Real Cost of "Free" DIY</h2>
              <p className="text-xl text-slate-600">
                Factor in your time, and suddenly DIY doesn't look so affordable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-800">DIY Hidden Costs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-orange-700">ChatGPT Plus subscription</span>
                    <span className="font-semibold text-orange-800">$20/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">Zapier Pro plan</span>
                    <span className="font-semibold text-orange-800">$50/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">Your time (100+ hours @ $50/hr)</span>
                    <span className="font-semibold text-orange-800">$5,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">Ongoing maintenance (5 hrs/month)</span>
                    <span className="font-semibold text-orange-800">$250/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700">Compliance risk exposure</span>
                    <span className="font-semibold text-orange-800">$???</span>
                  </div>
                  <hr className="border-orange-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-orange-800">Year 1 Total</span>
                    <span className="text-orange-900">$8,840+</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">RealAI Investment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-green-700">Professional implementation</span>
                    <span className="font-semibold text-green-800">Mid 5-figures</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Your time investment</span>
                    <span className="font-semibold text-green-800">Minimal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Ongoing maintenance</span>
                    <span className="font-semibold text-green-800">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Compliance protection</span>
                    <span className="font-semibold text-green-800">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Support & updates</span>
                    <span className="font-semibold text-green-800">Included</span>
                  </div>
                  <hr className="border-green-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-green-800">Total Investment</span>
                    <span className="text-green-900">One-time cost</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stop Building. Start Succeeding.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional-grade AI that works from day one
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
                  See Professional AI Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Calculate Your True Costs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
