import { CheckCircle, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar, AlertTriangle, Building2, Cog, Zap } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealAI vs Salesforce - Specialized vs Generic',
  description: 'Compare RealAI vs Salesforce. See why real estate-specialized AI beats generic enterprise platforms.',
  openGraph: {
    title: 'RealAI vs Salesforce - Specialized vs Generic | RealAI',
    description: 'Enterprise complexity vs real estate specialization. Get AI built for your industry.',
    url: 'https://realai.com/compare/realai-vs-salesforce',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs Salesforce - Specialized vs Generic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs Salesforce - Specialized vs Generic | RealAI',
    description: 'Why real estate specialization beats enterprise complexity.',
  },
}

export default function SalesforceComparisonPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-600 text-white px-4 py-2 hover:bg-cyan-600">Specialized vs Generic</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Built for Real Estate, <span className="text-cyan-400">Not Everything Else</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Why force-fit your brokerage into Salesforce when you can have AI designed specifically for real estate?
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
              <span className="text-lg">Real estate-specialized vs. generic enterprise</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">Simple deployment vs. enterprise complexity</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600 w-6 h-6" />
              <span className="text-lg">One-time investment vs. enterprise licensing</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Enterprise Complexity Problem */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Enterprise Overkill vs. Industry Focus</h2>
              <p className="text-xl text-slate-600">
                Salesforce is built for Fortune 500 companies. Real estate teams need specialized, simple solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-cyan-800">
                    <AlertTriangle className="w-6 h-6" />
                    Salesforce Enterprise Complexity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-cyan-700">Generic platform requiring extensive customization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-cyan-700">$75-$300+ per user monthly licensing costs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-cyan-700">Months of implementation and training required</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-cyan-700">No real estate domain expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-cyan-700">Requires dedicated admin and IT support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-cyan-700">Complex user interface overwhelming for agents</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="w-6 h-6" />
                    RealAI's Industry Specialization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Built specifically for real estate businesses</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">One-time investment, no monthly licensing fees</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Professional implementation in weeks, not months</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">20+ years real estate expertise embedded</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">No IT team or dedicated admin required</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Intuitive for real estate professionals</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Complexity Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Enterprise Platform vs. Purpose-Built Solution</h2>
              <p className="text-xl text-slate-600">
                See why industry specialization beats generic enterprise platforms.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-6 font-semibold text-slate-900">Factor</th>
                      <th className="text-center p-6 font-semibold text-green-600">RealAI</th>
                      <th className="text-center p-6 font-semibold text-cyan-600">Salesforce</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-6 font-medium">Industry Focus</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Real estate specialized</span>
                      </td>
                      <td className="p-6 text-center">
                        <Building2 className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                        <span className="text-sm">Generic enterprise</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Implementation Time</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">2-4 weeks</span>
                      </td>
                      <td className="p-6 text-center">
                        <Clock className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                        <span className="text-sm">6-12 months</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">Cost Structure</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">One-time investment</span>
                      </td>
                      <td className="p-6 text-center">
                        <DollarSign className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                        <span className="text-sm">$75-$300+/user/month</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Customization Required</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Pre-configured for real estate</span>
                      </td>
                      <td className="p-6 text-center">
                        <Cog className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                        <span className="text-sm">Extensive customization needed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">User Experience</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Intuitive for real estate</span>
                      </td>
                      <td className="p-6 text-center">
                        <AlertTriangle className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                        <span className="text-sm">Complex, requires training</span>
                      </td>
                    </tr>
                    <tr className="bg-slate-25">
                      <td className="p-6 font-medium">Support Required</td>
                      <td className="p-6 text-center">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                        <span className="text-sm">Included professional support</span>
                      </td>
                      <td className="p-6 text-center">
                        <Users className="w-6 h-6 text-cyan-600 mx-auto mb-2" />
                        <span className="text-sm">Dedicated admin team needed</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Enterprise Licensing vs. Simple Investment</h2>
              <p className="text-xl text-slate-600">
                Compare ongoing enterprise costs to straightforward real estate AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="text-cyan-800">Salesforce Enterprise Costs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-cyan-700">Professional licenses (per user)</span>
                    <span className="font-semibold text-cyan-800">$75/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-700">Enterprise features (per user)</span>
                    <span className="font-semibold text-cyan-800">$150/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-700">Implementation & customization</span>
                    <span className="font-semibold text-cyan-800">$50,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-700">Team of 10 users (monthly)</span>
                    <span className="font-semibold text-cyan-800">$1,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cyan-700">Year 1 total cost</span>
                    <span className="font-semibold text-cyan-800">$68,000+</span>
                  </div>
                  <hr className="border-cyan-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-cyan-800">Plus ongoing admin costs</span>
                    <span className="text-cyan-900">Complex deployment</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">RealAI Simple Investment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-green-700">Complete AI transformation</span>
                    <span className="font-semibold text-green-800">One-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Professional implementation</span>
                    <span className="font-semibold text-green-800">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Real estate specialization</span>
                    <span className="font-semibold text-green-800">Built-in</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Unlimited users</span>
                    <span className="font-semibold text-green-800">No per-seat fees</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-700">Ongoing support & updates</span>
                    <span className="font-semibold text-green-800">Included</span>
                  </div>
                  <hr className="border-green-300" />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-green-800">Total investment</span>
                    <span className="text-green-900">Simple deployment</span>
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
