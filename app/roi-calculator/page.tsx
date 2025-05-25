import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, TrendingUp, Users, Clock, DollarSign, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ROICalculator } from "@/components/roi-calculator"
import { CTASection } from "@/components/cta-section"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ROI Calculator - Calculate Your AI Investment Return',
  description: 'Calculate the ROI of implementing RealAI\'s human-guided AI agents for your real estate brokerage. See potential time savings, revenue increases, and cost reductions.',
  openGraph: {
    title: 'ROI Calculator - Calculate Your AI Investment Return | RealAI',
    description: 'Calculate the ROI of implementing AI agents for your real estate brokerage. Professional-grade AI deployment with measurable returns.',
    url: 'https://realai.com/roi-calculator',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI ROI Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROI Calculator - Calculate Your AI Investment Return | RealAI',
    description: 'Calculate the ROI of implementing AI agents for your real estate brokerage. The future of real estate isn\'t artificial.',
  },
}

export default function ROICalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-600 text-white px-4 py-2 hover:bg-green-600">
              <Calculator className="w-4 h-4 mr-2" />
              ROI Calculator
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Calculate Your <span className="text-green-400">AI Investment</span> Return
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              See the measurable impact of implementing RealAI's human-guided AI agents for your brokerage. Calculate potential time savings, revenue increases, and cost reductions.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ROICalculator />
          </div>
        </div>
      </section>

      {/* Parameters Explanation */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">How the ROI Calculator Works</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-red-600" />
                    Investment Costs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Implementation Fee</h4>
                    <p className="text-slate-600">$15K (Starter), $25K (Pro), $50K (Enterprise) - one-time setup cost</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Ongoing Monthly Costs</h4>
                    <p className="text-slate-600">Training, support, and system adjustments</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Internal Time Investment</h4>
                    <p className="text-slate-600">Staff training and onboarding hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    Operational Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Time Savings</h4>
                    <p className="text-slate-600">Admin task reduction, faster lead response, automated marketing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Revenue Impact</h4>
                    <p className="text-slate-600">Better conversion rates, increased capacity, more referrals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Cost Reductions</h4>
                    <p className="text-slate-600">Reduced admin staff, marketing efficiency, fewer errors</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-blue-600" />
                  Calculation Methodology
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">1. Annual Time Savings Value</h4>
                    <p className="text-slate-600 text-sm">Time saved per week × 52 weeks × Number of agents × Agent hourly value</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">2. Revenue Increase</h4>
                    <p className="text-slate-600 text-sm">Improved conversion rate × Lead volume × Average commission</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">3. Cost Reduction</h4>
                    <p className="text-slate-600 text-sm">Admin staff savings + Marketing efficiency + Error reduction</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">4. ROI Calculation</h4>
                    <p className="text-slate-600 text-sm">((Total Annual Benefit - Annual Cost) / Total Investment) × 100</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Scenarios */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Sample Scenarios</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    Small Brokerage
                  </CardTitle>
                  <div className="text-sm text-slate-600">10 agents</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Focus on admin time savings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Automated lead nurturing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Basic CRM automation</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <div className="text-sm text-blue-600">Typical ROI: 200-300%</div>
                    <div className="text-xs text-blue-500">Payback: 6-9 months</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white">Most Common</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-green-600" />
                    Medium Brokerage
                  </CardTitle>
                  <div className="text-sm text-slate-600">25 agents</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Lead conversion improvement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Marketing automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">MLS integration</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <div className="text-sm text-green-600">Typical ROI: 300-500%</div>
                    <div className="text-xs text-green-500">Payback: 4-6 months</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-purple-600" />
                    Large Brokerage
                  </CardTitle>
                  <div className="text-sm text-slate-600">50+ agents</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Operational efficiency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Staff cost reduction</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Full integration suite</span>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <div className="text-sm text-purple-600">Typical ROI: 400-700%</div>
                    <div className="text-xs text-purple-500">Payback: 3-5 months</div>
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
  )
}