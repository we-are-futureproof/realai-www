import { CheckCircle, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar, AlertTriangle, Database, Search, Home } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealAI vs kvCORE - Beyond Traditional CRM',
  description: 'Compare RealAI vs kvCORE. See why AI-first architecture beats bolt-on automation for modern real estate teams.',
  openGraph: {
    title: 'RealAI vs kvCORE - Beyond Traditional CRM | RealAI',
    description: 'Traditional CRM vs AI-first architecture. Transform your real estate business with true AI automation.',
    url: 'https://realai.com/compare/realai-vs-kvcore',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs kvCORE - AI-First vs Traditional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs kvCORE - Beyond Traditional CRM | RealAI',
    description: 'Why AI-first architecture beats traditional CRM with bolt-on automation.',
  },
}

export default function KvCOREComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 text-white px-4 py-2 hover:bg-blue-600">AI-First vs Traditional</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              RealAI vs. <span className="text-blue-400">kvCORE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              kvCORE tries to do everything. RealAI perfects what matters most - intelligent automation that actually works.
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
              <span className="text-lg">6 specialized AI agents vs. basic automation rules</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">Human-guided setup vs. figure-it-out-yourself</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">Works with any CRM vs. locked into one platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Traditional CRM Problem */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">The Limitation of Traditional CRM + Automation</h2>
              <p className="text-xl text-slate-600">
                kvCORE's traditional CRM architecture with automation bolted on can't match purpose-built AI systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <AlertTriangle className="w-6 h-6" />
                    kvCORE's Traditional Approach
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">CRM-first design with automation added later</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">$299-$999+ monthly per agent costs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Limited to basic workflow automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Focus on lead management, not business transformation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Requires manual configuration and maintenance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Generic templates with minimal personalization</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="w-6 h-6" />
                    RealAI's AI-First Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Built from the ground up for AI automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">One-time investment, no monthly per-agent fees</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">6 specialized AI agents working in coordination</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Complete business transformation platform</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Self-improving AI that learns and adapts</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Brand-authentic conversations at scale</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Beyond Traditional CRM Limitations</h2>
              <p className="text-xl text-slate-600">
                See how AI-first architecture transforms what's possible.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-6 font-semibold text-slate-900">Capability</th>
                      <th className="text-center p-6 font-semibold text-green-600">RealAI</th>
                      <th className="text-center p-6 font-semibold text-blue-600">kvCORE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-6 font-medium">Architecture</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">AI-first design</span>
                      </td>
                      <td className="p-6 text-center">
                        <Database className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm">CRM + automation</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Cost Structure</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">One-time investment</span>
                      </td>
                      <td className="p-6 text-center">
                        <DollarSign className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm">$299-$999+/agent/month</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">AI Sophistication</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Advanced reasoning & context</span>
                      </td>
                      <td className="p-6 text-center">
                        <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm">Basic automation rules</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Scope of Automation</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Complete business transformation</span>
                      </td>
                      <td className="p-6 text-center">
                        <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm">Lead management focus</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Setup & Maintenance</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Professional implementation</span>
                      </td>
                      <td className="p-6 text-center">
                        <AlertTriangle className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm">Manual configuration required</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Real Estate Expertise</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">20+ years embedded</span>
                      </td>
                      <td className="p-6 text-center">
                        <Home className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm">Generic CRM adapted</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Traditional CRM vs. AI Investment</h2>
              <p className="text-xl text-slate-600">
                Per-agent monthly fees add up fast. See the real cost difference.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">kvCORE Monthly Costs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Base CRM per agent</span>
                    <span className="font-semibold text-blue-800">$299/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Premium features</span>
                    <span className="font-semibold text-blue-800">+$300/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Team of 10 agents</span>
                    <span className="font-semibold text-blue-800">$5,990/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Year 1 total</span>
                    <span className="font-semibold text-blue-800">$71,880</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">3-year commitment</span>
                    <span className="font-semibold text-blue-800">$215,640+</span>
                  </div>
                  <hr className="border-blue-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-blue-800">Plus setup & training costs</span>
                    <span className="text-blue-900">Ongoing expense</span>
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
                    <span className="font-semibold text-green-800">One-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Complete AI transformation</span>
                    <span className="font-semibold text-green-800">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Unlimited agents</span>
                    <span className="font-semibold text-green-800">No per-seat fees</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Ongoing updates</span>
                    <span className="font-semibold text-green-800">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Support & training</span>
                    <span className="font-semibold text-green-800">Included</span>
                  </div>
                  <hr className="border-green-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-green-800">Total investment</span>
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
              Ready for AI-First Architecture?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stop paying monthly fees for yesterday's technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
                  See AI-First Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Calculate Your ROI
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
