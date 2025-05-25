import { CheckCircle, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar, AlertTriangle, Database, FileText, Zap } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealAI vs Top Producer - AI Revolution vs Legacy Systems',
  description: 'Compare RealAI vs Top Producer. See why modern AI automation beats legacy real estate software.',
  openGraph: {
    title: 'RealAI vs Top Producer - AI vs Legacy | RealAI',
    description: 'Modern AI automation vs outdated legacy systems. Transform your business with intelligent technology.',
    url: 'https://realai.com/compare/realai-vs-top-producer',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs Top Producer - Modern vs Legacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs Top Producer - AI vs Legacy | RealAI',
    description: 'Why modern AI beats legacy real estate software.',
  },
}

export default function TopProducerComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-600">AI vs Legacy</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Breathe New Life Into Your <span className="text-emerald-400">Legacy CRM</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Modern AI automation vs outdated legacy systems. Transform your business with intelligent technology.
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
              <span className="text-lg">Modern AI vs. 1990s legacy technology</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">Intelligent automation vs. manual processes</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">One-time investment vs. ongoing license fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Legacy Problem */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Legacy Technology vs. Modern AI</h2>
              <p className="text-xl text-slate-600">
                Top Producer represents 1990s thinking in a 2024 world. It's time to embrace intelligent automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-800">
                    <AlertTriangle className="w-6 h-6" />
                    Top Producer's Legacy Burden
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-emerald-700">Outdated technology from the 1990s era</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-emerald-700">$29-49+ monthly per agent recurring costs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-emerald-700">Manual data entry and process management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-emerald-700">No AI automation or intelligent features</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-emerald-700">Clunky interface requiring extensive training</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-emerald-700">Limited modern integrations and workflows</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="w-6 h-6" />
                    RealAI's Modern Platform
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Cutting-edge AI technology built for today</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">One-time investment, no monthly per-agent fees</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Intelligent automation eliminating manual work</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">6 specialized AI agents handling complex tasks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Intuitive modern interface, minimal training needed</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Seamless modern integrations and smart workflows</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Modern AI vs. Legacy Software</h2>
              <p className="text-xl text-slate-600">
                See the stark difference between intelligent automation and outdated manual systems.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-6 font-semibold text-slate-900">Technology Factor</th>
                      <th className="text-center p-6 font-semibold text-green-600">RealAI</th>
                      <th className="text-center p-6 font-semibold text-emerald-600">Top Producer</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-6 font-medium">Technology Era</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">2024 AI-first platform</span>
                      </td>
                      <td className="p-6 text-center">
                        <Database className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                        <span className="text-sm">1990s legacy system</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Automation Level</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Intelligent AI automation</span>
                      </td>
                      <td className="p-6 text-center">
                        <FileText className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                        <span className="text-sm">Manual data entry</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">User Experience</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Modern, intuitive interface</span>
                      </td>
                      <td className="p-6 text-center">
                        <AlertTriangle className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                        <span className="text-sm">Clunky, requires training</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Cost Model</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">One-time investment</span>
                      </td>
                      <td className="p-6 text-center">
                        <DollarSign className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                        <span className="text-sm">$29-49+/agent/month</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Innovation Rate</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Continuous AI advancement</span>
                      </td>
                      <td className="p-6 text-center">
                        <Clock className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                        <span className="text-sm">Minimal updates</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Business Impact</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Transforms operations</span>
                      </td>
                      <td className="p-6 text-center">
                        <Database className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                        <span className="text-sm">Basic record keeping</span>
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
