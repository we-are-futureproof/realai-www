import { CheckCircle, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar, AlertTriangle, Settings, Zap, Bot } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealAI vs Traditional Software - AI Revolution vs Old Methods',
  description: 'Compare RealAI vs traditional real estate software. See why AI automation beats outdated manual systems.',
  openGraph: {
    title: 'RealAI vs Traditional Software - AI Revolution | RealAI',
    description: 'Revolutionary AI automation vs outdated traditional software. Transform your business today.',
    url: 'https://realai.com/compare/realai-vs-traditional-software',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs Traditional Software - Revolution vs Old',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs Traditional Software - AI Revolution | RealAI',
    description: 'Why AI automation beats traditional real estate software.',
  },
}

export default function TraditionalSoftwareComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-600 text-white px-4 py-2 hover:bg-yellow-600">Revolution vs Old</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Software Follows Rules. <span className="text-yellow-400">AI Thinks.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Revolutionary AI automation vs outdated traditional software. Transform your business today.
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
              <span className="text-lg">AI automation vs. manual processes</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">Intelligent reasoning vs. rigid workflows</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">Complete transformation vs. incremental improvement</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Traditional Limitation */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">The AI Revolution vs. Traditional Methods</h2>
              <p className="text-xl text-slate-600">
                Traditional real estate software forces you to work around technology. AI works around you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-800">
                    <AlertTriangle className="w-6 h-6" />
                    Traditional Software Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-yellow-700">Manual data entry and process management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-yellow-700">Rigid workflows that don't adapt</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-yellow-700">Multiple disconnected tools and systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-yellow-700">No intelligent automation or reasoning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-yellow-700">Requires extensive training and ongoing management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <span className="text-yellow-700">Forces you to adapt to software limitations</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="w-6 h-6" />
                    RealAI's Intelligent Platform
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">AI automation eliminating manual work entirely</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Adaptive AI that learns and evolves with your business</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Unified platform replacing multiple tools</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">6 specialized AI agents with advanced reasoning</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Self-managing system requiring minimal oversight</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Software adapts to your business, not the reverse</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">AI Intelligence vs. Traditional Rigidity</h2>
              <p className="text-xl text-slate-600">
                See the fundamental difference between intelligent automation and traditional software.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-6 font-semibold text-slate-900">Approach</th>
                      <th className="text-center p-6 font-semibold text-green-600">RealAI</th>
                      <th className="text-center p-6 font-semibold text-yellow-600">Traditional Software</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-6 font-medium">Automation Philosophy</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">AI thinks and acts intelligently</span>
                      </td>
                      <td className="p-6 text-center">
                        <Settings className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                        <span className="text-sm">Manual configuration and rules</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Workflow Flexibility</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Adapts to any business process</span>
                      </td>
                      <td className="p-6 text-center">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                        <span className="text-sm">Rigid predefined workflows</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Learning Capability</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Continuously improves and evolves</span>
                      </td>
                      <td className="p-6 text-center">
                        <X className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                        <span className="text-sm">Static, requires manual updates</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">User Experience</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Natural interactions, minimal training</span>
                      </td>
                      <td className="p-6 text-center">
                        <Clock className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                        <span className="text-sm">Complex interfaces, extensive training</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Integration Approach</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Unified intelligent platform</span>
                      </td>
                      <td className="p-6 text-center">
                        <Settings className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                        <span className="text-sm">Multiple disconnected tools</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Business Impact</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Revolutionary transformation</span>
                      </td>
                      <td className="p-6 text-center">
                        <TrendingUp className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                        <span className="text-sm">Incremental improvement</span>
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
