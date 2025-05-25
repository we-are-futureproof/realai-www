import { CheckCircle, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar, AlertTriangle, Mail, Target, Briefcase } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealAI vs HubSpot - Real Estate vs Marketing Focus',
  description: 'Compare RealAI vs HubSpot. See why real estate specialization beats generic marketing automation.',
  openGraph: {
    title: 'RealAI vs HubSpot - Real Estate vs Marketing Focus | RealAI',
    description: 'Marketing automation vs real estate transformation. Get AI built for your industry.',
    url: 'https://realai.com/compare/realai-vs-hubspot',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs HubSpot - Specialized vs Generic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs HubSpot - Real Estate vs Marketing Focus | RealAI',
    description: 'Why real estate specialization beats marketing automation.',
  },
}

export default function HubSpotComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-600 text-white px-4 py-2 hover:bg-orange-600">Real Estate vs Marketing</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              RealAI vs. <span className="text-orange-400">HubSpot</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              HubSpot is great for general marketing. But your brokerage needs AI that understands listings, not just leads.
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
              <span className="text-lg">Real estate expertise vs. generic marketing</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">Complete business automation vs. marketing focus</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">One-time investment vs. tiered subscriptions</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Marketing-Only Limitation */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">When Your CRM Thinks a House Is Just Another Product</h2>
              <p className="text-xl text-slate-600">
                HubSpot excels at marketing automation, but real estate needs comprehensive business intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-800">
                    <AlertTriangle className="w-6 h-6" />
                    HubSpot's Marketing Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-orange-700">Generic marketing automation, not real estate specific</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-orange-700">$45-$1,200+ monthly tiered subscription costs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-orange-700">Complex setup requiring marketing expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-orange-700">Limited to marketing workflows, not business operations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-orange-700">No real estate domain knowledge or compliance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-orange-700">Requires ongoing campaign management</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="w-6 h-6" />
                    RealAI's Complete Solution
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Real estate-specific AI with industry expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">One-time investment, no monthly subscription tiers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Professional implementation, no setup complexity</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Complete business transformation beyond marketing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Built-in compliance and real estate best practices</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Self-managing AI that evolves with your business</span>
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
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Marketing Tool vs. Business Platform</h2>
              <p className="text-xl text-slate-600">
                See the difference between marketing automation and complete business AI.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-6 font-semibold text-slate-900">Capability</th>
                      <th className="text-center p-6 font-semibold text-green-600">RealAI</th>
                      <th className="text-center p-6 font-semibold text-orange-600">HubSpot</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-6 font-medium">Primary Focus</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Complete real estate transformation</span>
                      </td>
                      <td className="p-6 text-center">
                        <Target className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm">Marketing automation</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Industry Expertise</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">20+ years real estate knowledge</span>
                      </td>
                      <td className="p-6 text-center">
                        <Briefcase className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm">Generic business marketing</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Setup Complexity</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Professional implementation</span>
                      </td>
                      <td className="p-6 text-center">
                        <AlertTriangle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm">Complex campaign setup required</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Cost Model</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">One-time investment</span>
                      </td>
                      <td className="p-6 text-center">
                        <DollarSign className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm">$45-$1,200+/month tiers</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Business Coverage</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">End-to-end operations</span>
                      </td>
                      <td className="p-6 text-center">
                        <Mail className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm">Marketing & sales only</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Maintenance Required</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Self-improving AI</span>
                      </td>
                      <td className="p-6 text-center">
                        <Users className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                        <span className="text-sm">Ongoing campaign management</span>
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
