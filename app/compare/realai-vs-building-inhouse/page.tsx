import { CheckCircle, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar, AlertTriangle, Code, Wrench, Zap } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealAI vs Building In-House - Professional vs DIY Development',
  description: 'Compare RealAI vs building in-house. See why professional AI beats custom development for real estate.',
  openGraph: {
    title: 'RealAI vs Building In-House - Professional vs DIY | RealAI',
    description: 'Professional AI vs years of development. Get proven solutions now, not later.',
    url: 'https://realai.com/compare/realai-vs-building-inhouse',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs Building In-House - Professional vs DIY',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs Building In-House - Professional vs DIY | RealAI',
    description: 'Why professional AI beats custom development.',
  },
}

export default function BuildingInHouseComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-600 text-white px-4 py-2 hover:bg-red-600">Professional vs DIY</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              You're a Brokerage, <span className="text-red-400">Not a Tech Startup</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Why building in-house AI distracts from your core business of selling real estate
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
              <span className="text-lg">Proven solution vs. unproven development</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">Immediate deployment vs. 2-3 year timeline</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">One-time cost vs. ongoing development expenses</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Development Reality */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">The Reality of Custom Development</h2>
              <p className="text-xl text-slate-600">
                Building AI from scratch sounds appealing until you face the reality of cost, time, and complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="w-6 h-6" />
                    Building In-House Reality
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">2-3 year development timeline minimum</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">$500K-$2M+ development costs before any results</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Need specialized AI/ML engineering team</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">High risk of failure or abandonment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Ongoing maintenance and infrastructure costs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Miss years of business opportunities</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="w-6 h-6" />
                    RealAI's Proven Solution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Deploy in 2-4 weeks with immediate results</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">One-time investment, fraction of development cost</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">20+ years real estate expertise included</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Proven solution with established ROI</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Professional support and continuous updates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Start benefiting immediately, not in years</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Development Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Professional Solution vs. Custom Development</h2>
              <p className="text-xl text-slate-600">
                See the stark difference between proven AI and development uncertainty.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-6 font-semibold text-slate-900">Factor</th>
                      <th className="text-center p-6 font-semibold text-green-600">RealAI</th>
                      <th className="text-center p-6 font-semibold text-red-600">Building In-House</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-6 font-medium">Time to Market</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">2-4 weeks</span>
                      </td>
                      <td className="p-6 text-center">
                        <Clock className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <span className="text-sm">2-3 years minimum</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Total Investment</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">One-time professional cost</span>
                      </td>
                      <td className="p-6 text-center">
                        <DollarSign className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <span className="text-sm">$500K-$2M+ before any results</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Success Risk</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Proven with established track record</span>
                      </td>
                      <td className="p-6 text-center">
                        <AlertTriangle className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <span className="text-sm">High failure rate, uncertain outcome</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Team Requirements</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">No additional team needed</span>
                      </td>
                      <td className="p-6 text-center">
                        <Code className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <span className="text-sm">AI/ML engineers, data scientists</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Maintenance Burden</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Professional support included</span>
                      </td>
                      <td className="p-6 text-center">
                        <Wrench className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <span className="text-sm">Ongoing internal maintenance</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Business Impact</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Immediate transformation</span>
                      </td>
                      <td className="p-6 text-center">
                        <X className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <span className="text-sm">Years before any benefit</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Reality Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">The True Cost of Building In-House</h2>
              <p className="text-xl text-slate-600">
                Beyond the sticker shock, consider the opportunity cost and business risk.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800">Custom Development Reality</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-red-700">AI Engineer salaries (3 people)</span>
                    <span className="font-semibold text-red-800">$450K/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-700">Infrastructure & tools</span>
                    <span className="font-semibold text-red-800">$100K/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-700">Development timeline</span>
                    <span className="font-semibold text-red-800">2-3 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-700">Total before any results</span>
                    <span className="font-semibold text-red-800">$1.6M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-700">Success probability</span>
                    <span className="font-semibold text-red-800">~30%</span>
                  </div>
                  <hr className="border-red-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-red-800">Plus opportunity cost</span>
                    <span className="text-red-900">Years of lost business</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">RealAI Professional Solution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-green-700">Complete AI transformation</span>
                    <span className="font-semibold text-green-800">One-time investment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Professional implementation</span>
                    <span className="font-semibold text-green-800">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Time to value</span>
                    <span className="font-semibold text-green-800">2-4 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Ongoing support & updates</span>
                    <span className="font-semibold text-green-800">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Success probability</span>
                    <span className="font-semibold text-green-800">Proven track record</span>
                  </div>
                  <hr className="border-green-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-green-800">Start benefiting immediately</span>
                    <span className="text-green-900">No years of waiting</span>
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
