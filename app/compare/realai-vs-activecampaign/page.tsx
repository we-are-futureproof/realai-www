import { CheckCircle, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar, AlertTriangle, Mail, Send, Bot } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealAI vs ActiveCampaign - Beyond Email Marketing',
  description: 'Compare RealAI vs ActiveCampaign. See why complete AI automation beats email marketing automation.',
  openGraph: {
    title: 'RealAI vs ActiveCampaign - Beyond Email Marketing | RealAI',
    description: 'Email automation vs complete business transformation. Get AI built for real estate.',
    url: 'https://realai.com/compare/realai-vs-activecampaign',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs ActiveCampaign - Complete vs Limited',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs ActiveCampaign - Beyond Email Marketing | RealAI',
    description: 'Why complete AI automation beats email marketing tools.',
  },
}

export default function ActiveCampaignComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 text-white px-4 py-2 hover:bg-blue-600">Complete vs Limited</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Email Automation That <span className="text-blue-400">Speaks Real Estate</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Email automation vs complete business transformation. Get AI built for real estate.
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
              <span className="text-lg">Complete business AI vs. email automation only</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">Real estate expertise vs. generic marketing</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">One-time investment vs. monthly subscriptions</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Email-Only Problem */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Beyond Email Marketing Automation</h2>
              <p className="text-xl text-slate-600">
                ActiveCampaign excels at email marketing, but real estate success requires comprehensive AI automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <AlertTriangle className="w-6 h-6" />
                    ActiveCampaign Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Limited to email marketing and basic automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">$9-$229+ monthly per contact tiers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">No real estate domain knowledge</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Template-based messaging only</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Requires manual campaign creation and management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">No comprehensive business automation</span>
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
                    <span className="text-green-700">Complete real estate business transformation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">One-time investment, no contact-based pricing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">20+ years real estate expertise embedded</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Natural conversations in your brand voice</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Self-managing AI that evolves automatically</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">End-to-end business process automation</span>
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
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Email Tool vs. Business Platform</h2>
              <p className="text-xl text-slate-600">
                See the difference between email marketing and complete business AI.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-6 font-semibold text-slate-900">Capability</th>
                      <th className="text-center p-6 font-semibold text-green-600">RealAI</th>
                      <th className="text-center p-6 font-semibold text-blue-600">ActiveCampaign</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-6 font-medium">Primary Focus</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Complete business automation</span>
                      </td>
                      <td className="p-6 text-center">
                        <Mail className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm">Email marketing automation</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Industry Expertise</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Real estate specialized</span>
                      </td>
                      <td className="p-6 text-center">
                        <Send className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm">Generic marketing platform</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">AI Sophistication</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">6 specialized AI agents</span>
                      </td>
                      <td className="p-6 text-center">
                        <Bot className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm">Basic automation rules</span>
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
                        <span className="text-sm">$9-$229+/month tiers</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Setup Complexity</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Professional implementation</span>
                      </td>
                      <td className="p-6 text-center">
                        <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm">Manual campaign setup</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Business Impact</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Transforms entire operation</span>
                      </td>
                      <td className="p-6 text-center">
                        <Mail className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                        <span className="text-sm">Improves email marketing only</span>
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
