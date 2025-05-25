'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Circle, Clock, Users, Target, Shield, ArrowRight, Download, Calendar, Play, BookOpen, Zap, AlertTriangle, CheckSquare, FileText, PieChart, TrendingUp } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'

// Implementation phases data
const phases = [
  {
    id: 1,
    title: "Discovery & Planning",
    duration: "Days 1-14",
    progress: 100,
    status: "completed",
    description: "Foundation setting and strategic alignment",
    deliverables: [
      "Brokerage workflow analysis",
      "AI agent configuration plan",
      "Integration requirements assessment",
      "Success metrics definition",
      "Project timeline and milestones"
    ],
    keyActivities: [
      "Stakeholder interviews with leadership and agents",
      "Current system audit and integration mapping",
      "Custom AI agent training data preparation",
      "Risk assessment and mitigation planning"
    ]
  },
  {
    id: 2,
    title: "Agent Training & Configuration",
    duration: "Days 15-35",
    progress: 75,
    status: "in-progress",
    description: "AI agent development and initial training",
    deliverables: [
      "Custom AI agents trained on brokerage data",
      "Integration testing completed",
      "Pilot user group selected",
      "Training materials prepared",
      "Go-live checklist finalized"
    ],
    keyActivities: [
      "AI agent training on brokerage-specific processes",
      "CRM and lead system integrations built",
      "Pilot testing with select agents",
      "Performance benchmarking and optimization"
    ]
  },
  {
    id: 3,
    title: "Pilot Deployment",
    duration: "Days 36-60",
    progress: 50,
    status: "upcoming",
    description: "Controlled rollout with monitoring",
    deliverables: [
      "Pilot group successful deployment",
      "Performance metrics validation",
      "User feedback collection",
      "Process refinements implemented",
      "Full rollout plan approval"
    ],
    keyActivities: [
      "Limited deployment to pilot group",
      "Daily monitoring and support",
      "User training and adoption guidance",
      "Performance optimization based on real usage"
    ]
  },
  {
    id: 4,
    title: "Full Deployment",
    duration: "Days 61-90",
    progress: 0,
    status: "planned",
    description: "Company-wide rollout and optimization",
    deliverables: [
      "All agents successfully onboarded",
      "Full system integration verified",
      "Success metrics achieved",
      "Ongoing support established",
      "ROI validation completed"
    ],
    keyActivities: [
      "Company-wide deployment execution",
      "Comprehensive agent training program",
      "Performance monitoring and optimization",
      "Success celebration and case study development"
    ]
  }
]

const successFactors = [
  {
    category: "Leadership",
    factors: [
      "Executive sponsorship and clear communication",
      "Dedicated project champion within leadership",
      "Realistic expectations and timeline commitment"
    ]
  },
  {
    category: "Agent Engagement",
    factors: [
      "Early involvement of key agents in planning",
      "Clear benefit communication and WIIFM messaging",
      "Gradual adoption curve with ongoing support"
    ]
  },
  {
    category: "Technical",
    factors: [
      "Quality data for AI agent training",
      "Stable integrations with existing systems",
      "Regular monitoring and optimization cycles"
    ]
  }
]

const commonChallenges = [
  {
    challenge: "Agent resistance to new technology",
    solution: "Start with enthusiastic early adopters and showcase wins",
    timeframe: "Weeks 3-6"
  },
  {
    challenge: "Integration complexity with legacy systems",
    solution: "Phased integration approach with fallback plans",
    timeframe: "Weeks 2-4"
  },
  {
    challenge: "Data quality and consistency issues",
    solution: "Data cleanup and standardization during discovery",
    timeframe: "Weeks 1-3"
  },
  {
    challenge: "Training and adoption curve",
    solution: "Bite-sized training with hands-on practice sessions",
    timeframe: "Weeks 4-12"
  }
]

export default function ImplementationGuidePage() {
  const [selectedPhase, setSelectedPhase] = useState(1)
  const [expandedChallenge, setExpandedChallenge] = useState<number | null>(null)

  const currentPhase = phases.find(p => p.id === selectedPhase)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Your 90-Day AI Transformation Roadmap
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A proven, step-by-step implementation process that transforms your brokerage without disruption. From discovery to deployment in 90 days.
            </p>

            {/* Overall Progress */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm mb-10 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-gray-600">Overall Implementation Progress</span>
                <span className="text-sm font-semibold text-green-600">56%</span>
              </div>
              <Progress value={56} className="h-3 mb-3" />
              <div className="text-sm text-gray-500">Phase 2: Agent Training & Configuration</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Calendar className="mr-2 h-5 w-5" />
                <Link href="/get-started">Schedule Planning Call</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/download?title=90-Day%20AI%20Implementation%20Guide&subtitle=Your%20complete%20roadmap%20to%20successful%20AI%20transformation&backUrl=/resources/implementation-guide&backText=Back%20to%20Implementation%20Guide">
                  <Download className="mr-2 h-5 w-5" />
                  Download Full Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The 90-Day Implementation Process</h2>
              <p className="text-lg text-gray-600">Four carefully orchestrated phases ensure smooth transformation</p>
            </div>

            {/* Phase Timeline */}
            <div className="grid lg:grid-cols-4 gap-6 mb-12">
              {phases.map((phase, index) => (
                <Card
                  key={phase.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${selectedPhase === phase.id ? 'ring-2 ring-green-500 shadow-lg' : ''}`}
                  onClick={() => setSelectedPhase(phase.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={phase.status === 'completed' ? 'default' : phase.status === 'in-progress' ? 'secondary' : 'outline'}>
                        Phase {phase.id}
                      </Badge>
                      {phase.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-600" />}
                      {phase.status === 'in-progress' && <Clock className="h-5 w-5 text-blue-600" />}
                      {(phase.status === 'upcoming' || phase.status === 'planned') && <Circle className="h-5 w-5 text-gray-400" />}
                    </div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                    <p className="text-sm text-gray-600">{phase.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Progress value={phase.progress} className="h-2" />
                      <p className="text-sm text-gray-700">{phase.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Phase View */}
            {currentPhase && (
              <Card className="shadow-xl">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">Phase {currentPhase.id}: {currentPhase.title}</CardTitle>
                      <p className="text-gray-600">{currentPhase.duration} • {currentPhase.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600 mb-1">{currentPhase.progress}%</div>
                      <div className="text-sm text-gray-500">Complete</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg mb-4 flex items-center">
                        <Target className="mr-2 h-5 w-5 text-green-600" />
                        Key Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {currentPhase.deliverables.map((deliverable, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckSquare className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-sm">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-4 flex items-center">
                        <Users className="mr-2 h-5 w-5 text-blue-600" />
                        Key Activities
                      </h4>
                      <ul className="space-y-2">
                        {currentPhase.keyActivities.map((activity, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Play className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Success Factors & Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="success" className="w-full">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Implementation Intelligence</h2>
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                  <TabsTrigger value="success">Success Factors</TabsTrigger>
                  <TabsTrigger value="challenges">Common Challenges</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="success" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {successFactors.map((category, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-green-600" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {category.factors.map((factor, factorIndex) => (
                            <li key={factorIndex} className="flex items-start gap-3">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                              <span className="text-sm">{factor}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="challenges" className="space-y-6">
                <div className="space-y-4">
                  {commonChallenges.map((item, index) => (
                    <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardHeader
                        className="pb-4"
                        onClick={() => setExpandedChallenge(expandedChallenge === index ? null : index)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <AlertTriangle className="h-5 w-5 text-orange-600" />
                            <CardTitle className="text-lg">{item.challenge}</CardTitle>
                          </div>
                          <Badge variant="outline">{item.timeframe}</Badge>
                        </div>
                      </CardHeader>
                      {expandedChallenge === index && (
                        <CardContent className="pt-0">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-green-800 mb-2">Solution Strategy:</h5>
                            <p className="text-green-700">{item.solution}</p>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* ROI Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Expected ROI Timeline</h2>
              <p className="text-lg text-gray-600">When you can expect to see returns on your AI investment</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle>Month 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-2">15%</div>
                  <p className="text-sm text-gray-600">Efficiency gains from automated lead response</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle>Month 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600 mb-2">45%</div>
                  <p className="text-sm text-gray-600">Lead conversion improvements and time savings</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle>Month 6</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600 mb-2">125%</div>
                  <p className="text-sm text-gray-600">Full operational efficiency and revenue growth</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PieChart className="h-6 w-6" />
                  </div>
                  <CardTitle>Month 12</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600 mb-2">275%</div>
                  <p className="text-sm text-gray-600">Sustained productivity gains and market expansion</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Training & Support</h2>
            <p className="text-lg text-gray-600 mb-10">
              Every implementation includes extensive training and ongoing support to ensure success
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Training Program</h3>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li>• Executive leadership briefings</li>
                  <li>• Agent hands-on workshops</li>
                  <li>• Admin configuration training</li>
                  <li>• Best practices sessions</li>
                </ul>
              </Card>

              <Card className="text-center p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Support Team</h3>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li>• Dedicated implementation manager</li>
                  <li>• Technical support specialists</li>
                  <li>• Success coaching consultants</li>
                  <li>• 24/7 emergency hotline</li>
                </ul>
              </Card>

              <Card className="text-center p-6">
                <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ongoing Success</h3>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li>• Monthly optimization reviews</li>
                  <li>• Quarterly business reviews</li>
                  <li>• Feature updates and training</li>
                  <li>• Performance analytics reports</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Continue Your Research</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Case Studies</h3>
                <p className="text-sm text-gray-600 mb-4">See real implementation results</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/case-studies">View Results</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">ROI Calculator</h3>
                <p className="text-sm text-gray-600 mb-4">Calculate your potential returns</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/roi-calculator">Calculate ROI</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">AI Best Practices</h3>
                <p className="text-sm text-gray-600 mb-4">Strategic guidance for success</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/ai-best-practices">Read Guide</Link>
                </Button>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Help Center</h3>
                <p className="text-sm text-gray-600 mb-4">Support and documentation</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/help-center">Get Help</Link>
                </Button>
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
