import { CheckCircle, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar, AlertTriangle, Bot, MessageSquare, Home } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealAI vs Roof AI - Complete Business vs. Lead Qualification',
  description: 'Compare RealAI vs Roof AI. See why complete business automation beats lead qualification chatbots.',
  openGraph: {
    title: 'RealAI vs Roof AI - Complete vs Limited | RealAI',
    description: 'Complete business transformation vs basic lead qualification. Get comprehensive AI.',
    url: 'https://realai.com/compare/realai-vs-roof-ai',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs Roof AI - Complete vs Limited',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs Roof AI - Complete vs Limited | RealAI',
    description: 'Why complete business automation beats lead qualification.',
  },
}

export default function RoofAIComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-600 text-white px-4 py-2 hover:bg-purple-600">Complete vs Limited</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              From Chatbot to Complete AI: <span className="text-purple-400">The Natural Evolution</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Complete business transformation vs basic lead qualification. Get comprehensive AI.
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
              <span className="text-lg">Complete business automation vs. lead qualification only</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">6 AI agents vs. single chatbot</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">One-time investment vs. monthly subscriptions</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Lead Qualification Limitation */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Beyond Lead Qualification</h2>
              <p className="text-xl text-slate-600">
                Roof AI focuses on qualifying leads, but real estate success requires comprehensive business automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <AlertTriangle className="w-6 h-6" />
                    Roof AI's Limited Scope
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-purple-700">Limited to lead qualification chatbots</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-purple-700">Monthly subscription fees for basic functionality</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-purple-700">Single-purpose tool, not comprehensive solution</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-purple-700">Simple rule-based responses</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-purple-700">No business process automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-purple-700">Requires additional tools for complete workflow</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="w-6 h-6" />
                    RealAI's Complete System
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Complete business transformation beyond lead qualification</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">One-time investment, no recurring subscription fees</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">6 specialized AI agents covering all business aspects</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Advanced AI reasoning and natural conversations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">End-to-end business process automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">All-in-one solution replacing multiple tools</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Single Tool vs. Complete Platform</h2>
              <p className="text-xl text-slate-600">
                See the difference between point solution and comprehensive business AI.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-6 font-semibold text-slate-900">Capability</th>
                      <th className="text-center p-6 font-semibold text-green-600">RealAI</th>
                      <th className="text-center p-6 font-semibold text-purple-600">Roof AI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-6 font-medium">Scope of Automation</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Complete business transformation</span>
                      </td>
                      <td className="p-6 text-center">
                        <MessageSquare className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <span className="text-sm">Lead qualification only</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">AI Sophistication</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">6 specialized AI agents</span>
                      </td>
                      <td className="p-6 text-center">
                        <Bot className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <span className="text-sm">Single chatbot</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Business Coverage</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">All business operations</span>
                      </td>
                      <td className="p-6 text-center">
                        <Home className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <span className="text-sm">Website qualification only</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Cost Model</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">One-time investment</span>
                      </td>
                      <td className="p-6 text-center">
                        <DollarSign className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <span className="text-sm">Monthly subscription</span>
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
                        <span className="text-sm">Self-setup chatbot</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Business Impact</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Transforms entire operation</span>
                      </td>
                      <td className="p-6 text-center">
                        <MessageSquare className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                        <span className="text-sm">Improves lead capture only</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
