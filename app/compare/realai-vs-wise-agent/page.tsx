import { CheckCircle, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar, AlertTriangle, UserCheck, Bot, Zap } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealAI vs Wise Agent - Complete AI vs Basic CRM',
  description: 'Compare RealAI vs Wise Agent. See why comprehensive AI automation beats basic CRM functionality.',
  openGraph: {
    title: 'RealAI vs Wise Agent - Complete vs Basic | RealAI',
    description: 'Comprehensive AI transformation vs basic CRM features. Get complete business automation.',
    url: 'https://realai.com/compare/realai-vs-wise-agent',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs Wise Agent - Complete vs Basic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs Wise Agent - Complete vs Basic | RealAI',
    description: 'Why comprehensive AI beats basic CRM functionality.',
  },
}

export default function WiseAgentComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-teal-600 text-white px-4 py-2 hover:bg-teal-600">Complete vs Basic</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              When You're Ready to Graduate from <span className="text-teal-400">Basic to Brilliant</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Comprehensive AI transformation vs basic CRM features. Get complete business automation.
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
              <span className="text-lg">Complete AI automation vs. basic CRM</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">6 AI agents vs. simple contact management</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">One-time investment vs. monthly subscriptions</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Basic CRM Problem */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Beyond Basic CRM Functions</h2>
              <p className="text-xl text-slate-600">
                Wise Agent offers basic CRM features, but modern real estate demands comprehensive AI automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-teal-200 bg-teal-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-teal-800">
                    <AlertTriangle className="w-6 h-6" />
                    Wise Agent's Basic Approach
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-teal-700">Basic CRM functionality with limited automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-teal-700">$29-39+ monthly per agent subscription costs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-teal-700">Manual contact management and follow-up processes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-teal-700">No intelligent AI reasoning or automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-teal-700">Limited business process automation capabilities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <span className="text-teal-700">Requires multiple additional tools for complete workflow</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="w-6 h-6" />
                    RealAI's Comprehensive Platform
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Complete AI-powered business transformation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">One-time investment, no monthly per-agent fees</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Intelligent AI automation eliminating manual work</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">6 specialized AI agents with advanced reasoning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">End-to-end business process automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Unified platform replacing multiple tools entirely</span>
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
              <h2 className="text-4xl font-bold mb-6 text-slate-900">AI Platform vs. Basic CRM</h2>
              <p className="text-xl text-slate-600">
                See the difference between comprehensive AI and basic contact management.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-6 font-semibold text-slate-900">Capability</th>
                      <th className="text-center p-6 font-semibold text-green-600">RealAI</th>
                      <th className="text-center p-6 font-semibold text-teal-600">Wise Agent</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-6 font-medium">System Sophistication</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">6 specialized AI agents</span>
                      </td>
                      <td className="p-6 text-center">
                        <UserCheck className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                        <span className="text-sm">Basic contact management</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Automation Level</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Complete business automation</span>
                      </td>
                      <td className="p-6 text-center">
                        <Clock className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                        <span className="text-sm">Limited automation features</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">AI Intelligence</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Advanced reasoning and learning</span>
                      </td>
                      <td className="p-6 text-center">
                        <Bot className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                        <span className="text-sm">Basic rule-based features</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Cost Structure</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">One-time investment</span>
                      </td>
                      <td className="p-6 text-center">
                        <DollarSign className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                        <span className="text-sm">$29-39+/agent/month</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Business Scope</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Transforms entire operation</span>
                      </td>
                      <td className="p-6 text-center">
                        <UserCheck className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                        <span className="text-sm">Contact management focus</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Implementation</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Professional deployment</span>
                      </td>
                      <td className="p-6 text-center">
                        <Users className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                        <span className="text-sm">Self-setup CRM</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">CRM Features vs. Business Transformation</h2>
              <p className="text-xl text-slate-600">
                Compare basic CRM functionality to comprehensive AI business automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-teal-200 bg-teal-50">
                <CardHeader>
                  <CardTitle className="text-teal-800">Wise Agent CRM Approach</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-teal-700">Basic contact management</span>
                    <span className="font-semibold text-teal-800">Manual processes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-teal-700">Simple follow-up reminders</span>
                    <span className="font-semibold text-teal-800">Limited automation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-teal-700">Basic reporting features</span>
                    <span className="font-semibold text-teal-800">Static insights</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-teal-700">Monthly per-agent cost</span>
                    <span className="font-semibold text-teal-800">$29-39+/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-teal-700">Additional tools needed</span>
                    <span className="font-semibold text-teal-800">Multiple subscriptions</span>
                  </div>
                  <hr className="border-teal-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-teal-800">Basic CRM only</span>
                    <span className="text-teal-900">Limited impact</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">RealAI Complete Transformation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-green-700">Intelligent AI automation</span>
                    <span className="font-semibold text-green-800">Complete automation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Advanced AI reasoning</span>
                    <span className="font-semibold text-green-800">Intelligent actions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Dynamic AI insights</span>
                    <span className="font-semibold text-green-800">Continuous learning</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">One-time investment</span>
                    <span className="font-semibold text-green-800">No monthly fees</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">All-in-one platform</span>
                    <span className="font-semibold text-green-800">Single solution</span>
                  </div>
                  <hr className="border-green-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-green-800">Complete AI transformation</span>
                    <span className="text-green-900">Revolutionary impact</span>
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
