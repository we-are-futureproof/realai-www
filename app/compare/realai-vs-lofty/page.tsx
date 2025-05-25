import { CheckCircle, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar, AlertTriangle, Building, Zap, Target } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealAI vs Lofty (Chime) - Beyond Basic Lead Routing',
  description: 'Compare RealAI vs Lofty (Chime). See why comprehensive AI automation beats basic lead routing and CRM.',
  openGraph: {
    title: 'RealAI vs Lofty (Chime) - Beyond Basic Lead Routing | RealAI',
    description: 'Stop settling for basic lead routing. Get comprehensive AI that transforms your entire business.',
    url: 'https://realai.com/compare/realai-vs-lofty',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs Lofty - Comprehensive vs Basic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs Lofty (Chime) - Beyond Basic Lead Routing | RealAI',
    description: 'Why comprehensive AI automation beats basic lead routing.',
  },
}

export default function LoftyComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-600 text-white px-4 py-2 hover:bg-purple-600">Comprehensive vs Basic</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Why Pay for IDX When You Need AI? <span className="text-purple-400">Get Intelligent Automation Without the Website Tax</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Lofty bundles everything together. RealAI gives you best-in-class AI automation that works with the tools you already love.
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
              <span className="text-lg">Complete business automation vs. lead routing only</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">6 AI agents vs. single-purpose tools</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">One-time investment vs. ongoing subscriptions</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Lead Routing Limitation */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Beyond Basic Lead Routing</h2>
              <p className="text-xl text-slate-600">
                Lofty focuses on lead routing and basic CRM. RealAI transforms your entire business operation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <AlertTriangle className="w-6 h-6" />
                    Lofty's Limited Scope
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-purple-700">Focus limited to lead routing and basic CRM</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-purple-700">$99-$299+ monthly per agent recurring costs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-purple-700">Basic automation with manual setup required</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-purple-700">No deep business process automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-purple-700">Generic templates and workflows</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-purple-700">Limited compliance and brand protection</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="w-6 h-6" />
                    RealAI's Complete Transformation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Complete business transformation platform</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">One-time investment, no monthly per-agent fees</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Professional implementation with 6 AI agents</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Deep automation across all business processes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Brand-authentic AI trained to your voice</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Built-in compliance and risk management</span>
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
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Complete Solution vs. Point Solution</h2>
              <p className="text-xl text-slate-600">
                See the difference between comprehensive AI and basic lead routing.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-6 font-semibold text-slate-900">Capability</th>
                      <th className="text-center p-6 font-semibold text-green-600">RealAI</th>
                      <th className="text-center p-6 font-semibold text-purple-600">Lofty (Chime)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-6 font-medium">Primary Focus</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Complete business transformation</span>
                      </td>
                      <td className="p-6 text-center">
                        <Target className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <span className="text-sm">Lead routing & basic CRM</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">AI Sophistication</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">6 specialized AI agents</span>
                      </td>
                      <td className="p-6 text-center">
                        <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <span className="text-sm">Basic automation tools</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Business Process Coverage</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">End-to-end automation</span>
                      </td>
                      <td className="p-6 text-center">
                        <X className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <span className="text-sm">Lead management only</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Cost Structure</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">One-time investment</span>
                      </td>
                      <td className="p-6 text-center">
                        <DollarSign className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <span className="text-sm">$99-$299+/agent/month</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Implementation</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Professional deployment</span>
                      </td>
                      <td className="p-6 text-center">
                        <Users className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <span className="text-sm">Self-setup required</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Customization</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Brand-authentic AI</span>
                      </td>
                      <td className="p-6 text-center">
                        <Building className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <span className="text-sm">Template-based</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculation */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Point Solution vs. Platform Investment</h2>
              <p className="text-xl text-slate-600">
                Compare ongoing subscription costs to comprehensive transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-800">Lofty Ongoing Costs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-purple-700">Basic plan per agent</span>
                    <span className="font-semibold text-purple-800">$99/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">Pro features per agent</span>
                    <span className="font-semibold text-purple-800">$199/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">Team of 10 agents</span>
                    <span className="font-semibold text-purple-800">$1,990/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">Year 1 subscription</span>
                    <span className="font-semibold text-purple-800">$23,880</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-700">3-year total</span>
                    <span className="font-semibold text-purple-800">$71,640+</span>
                  </div>
                  <hr className="border-purple-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-purple-800">Limited to lead routing</span>
                    <span className="text-purple-900">Ongoing expense</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">RealAI Platform</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-green-700">Complete AI transformation</span>
                    <span className="font-semibold text-green-800">One-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">6 specialized AI agents</span>
                    <span className="font-semibold text-green-800">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Unlimited agents</span>
                    <span className="font-semibold text-green-800">No per-seat fees</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Professional implementation</span>
                    <span className="font-semibold text-green-800">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Ongoing support & updates</span>
                    <span className="font-semibold text-green-800">Included</span>
                  </div>
                  <hr className="border-green-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-green-800">Complete business automation</span>
                    <span className="text-green-900">One-time investment</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
