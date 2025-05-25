'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingUp, Users, Clock, DollarSign, Star, Play, Filter, Download, Calendar, MapPin, Building2 } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'

// Case study data
const caseStudies = [
  {
    id: 1,
    name: "Premier Realty Group",
    size: "mid-market",
    sizeLabel: "Mid-Market",
    agents: 150,
    location: "Chicago",
    offices: 3,
    categories: ["lead-management", "client-communication"],
    featured: true,
    metric: "312%",
    metricLabel: "ROI in year one",
    description: "High-touch client communication and coordination enabled 24/7 support without additional staff.",
    challenge: "67% of leads went uncontacted within first hour",
    solution: "90-day AI deployment focusing on lead response and nurturing",
    quote: "The transformation has been remarkable. Our agents are focusing on qualified prospects instead of chasing cold leads.",
    author: "Sarah Chen",
    title: "Operations Director",
    results: {
      leadResponse: "89%",
      conversion: "234%", 
      revenue: "$340K",
      roi: "312%"
    }
  },
  {
    id: 2,
    name: "Coastal Properties LLC",
    size: "boutique",
    sizeLabel: "Boutique Luxury",
    agents: 25,
    location: "Malibu",
    market: "Luxury market",
    categories: ["client-communication", "transaction-coordination"],
    metric: "156%",
    metricLabel: "Increase in client satisfaction scores",
    description: "High-touch client communication and coordination enabled 24/7 support without additional staff."
  },
  {
    id: 3,
    name: "Metro Housing Solutions",
    size: "mid-market",
    sizeLabel: "Mid-Market",
    agents: 80,
    location: "Denver",
    market: "Full service",
    categories: ["transaction-coordination", "team-productivity"],
    metric: "67%",
    metricLabel: "Reduction in transaction delays",
    description: "Transaction coordination and pipeline management resulted in $89K annual admin cost savings."
  },
  {
    id: 4,
    name: "Statewide Realty Network",
    size: "enterprise",
    sizeLabel: "Enterprise",
    agents: 300,
    location: "Texas",
    market: "Multi-location",
    categories: ["lead-management", "team-productivity"],
    metric: "198%",
    metricLabel: "Lead distribution efficiency improvement",
    description: "Intelligent lead routing and agent productivity tracking led to 45% more deals closed per agent."
  },
  {
    id: 5,
    name: "Urban Living Realty",
    size: "mid-market",
    sizeLabel: "Urban Focus",
    agents: 60,
    location: "San Francisco",
    market: "Rentals + Sales",
    categories: ["lead-management", "client-communication"],
    metric: "289%",
    metricLabel: "Increase in rental conversion rates",
    description: "Specialized rental and sales lead management enabled expansion into new markets without additional staff."
  },
  {
    id: 6,
    name: "Heritage Home Group",
    size: "boutique",
    sizeLabel: "Traditional",
    agents: 40,
    location: "Charleston",
    market: "Traditional",
    categories: ["client-communication", "team-productivity"],
    metric: "123%",
    metricLabel: "Increase in millennial client acquisition",
    description: "Modernized operations while maintaining personal touch through seamless integration with existing processes."
  },
  {
    id: 7,
    name: "Miami Rental Specialists",
    size: "boutique",
    sizeLabel: "Specialist",
    agents: 1,
    location: "Miami",
    market: "High-volume rentals",
    categories: ["lead-management", "transaction-coordination"],
    metric: "345%",
    metricLabel: "Improvement in showing conversion",
    description: "Instant response to 100+ weekly inquiries with automated showing scheduling and lease processing."
  },
  {
    id: 8,
    name: "Pacific Northwest Homes",
    size: "enterprise",
    sizeLabel: "Enterprise",
    agents: 450,
    location: "Seattle",
    market: "Regional leader",
    categories: ["team-productivity", "transaction-coordination"],
    metric: "187%",
    metricLabel: "Improvement in agent productivity",
    description: "Multi-office coordination and centralized transaction management across 12 locations."
  },
  {
    id: 9,
    name: "Elite Mountain Properties",
    size: "boutique",
    sizeLabel: "Luxury Resort",
    agents: 18,
    location: "Aspen",
    market: "Luxury resort",
    categories: ["client-communication", "lead-management"],
    metric: "278%",
    metricLabel: "Increase in international client acquisition",
    description: "24/7 multilingual support and concierge-level service automation for ultra-high-net-worth clients."
  },
  {
    id: 10,
    name: "Suburban Family Realty",
    size: "mid-market",
    sizeLabel: "Family-Focused",
    agents: 95,
    location: "Phoenix",
    market: "Suburban families",
    categories: ["lead-management", "transaction-coordination"],
    metric: "156%",
    metricLabel: "Faster family home transactions",
    description: "Streamlined family home buying process with automated document management and timeline coordination."
  },
  {
    id: 11,
    name: "National Property Solutions",
    size: "enterprise",
    sizeLabel: "National Chain",
    agents: 1200,
    location: "Multiple states",
    market: "National franchise",
    categories: ["team-productivity", "lead-management"],
    metric: "234%",
    metricLabel: "Cross-territory lead optimization",
    description: "Enterprise-scale lead distribution and agent performance analytics across 45 markets."
  },
  {
    id: 12,
    name: "Downtown Condo Experts",
    size: "boutique",
    sizeLabel: "Urban Specialist",
    agents: 12,
    location: "Boston",
    market: "Urban condos",
    categories: ["transaction-coordination", "client-communication"],
    metric: "189%",
    metricLabel: "Faster condo closing times",
    description: "Specialized condo transaction coordination with HOA management and building relationship automation."
  }
]

const categories = [
  { id: "lead-management", label: "Lead Management" },
  { id: "client-communication", label: "Client Communication" },
  { id: "transaction-coordination", label: "Transaction Coordination" },
  { id: "team-productivity", label: "Team Productivity" }
]

const sizes = [
  { id: "all", label: "All Case Studies" },
  { id: "boutique", label: "Boutique (1-25)" },
  { id: "mid-market", label: "Mid-Market (26-100)" },
  { id: "enterprise", label: "Enterprise (100+)" }
]

export default function CaseStudiesPage() {
  const [activeSize, setActiveSize] = useState("all")
  const [activeCategory, setActiveCategory] = useState("")

  // Filter case studies based on selected filters
  const filteredCaseStudies = caseStudies.filter(study => {
    const sizeMatch = activeSize === "all" || study.size === activeSize
    const categoryMatch = !activeCategory || study.categories.includes(activeCategory)
    return sizeMatch && categoryMatch && !study.featured
  })

  const featuredStudy = caseStudies.find(study => study.featured)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Real Brokerages. Real Results. Real ROI.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              See how forward-thinking brokerages are using AI to transform their operations and accelerate growth.
            </p>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">73%</div>
                <div className="text-gray-600">Faster Lead Response</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">$127K</div>
                <div className="text-gray-600">Average Annual Savings</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">45%</div>
                <div className="text-gray-600">Less Admin Overhead</div>
              </div>
            </div>

            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/roi-calculator">
                See Your Potential ROI <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredStudy && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Story</h2>
                <p className="text-lg text-gray-600">{featuredStudy.name}: {featuredStudy.metric} ROI in Year One</p>
              </div>

              <Card className="overflow-hidden shadow-xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                          <Building2 className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{featuredStudy.name}</h3>
                          <p className="text-blue-100">{featuredStudy.agents} agents • {featuredStudy.location} • {featuredStudy.offices} offices</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        <div>
                          <h4 className="font-semibold mb-2">The Challenge</h4>
                          <p className="text-blue-100">{featuredStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">The Solution</h4>
                          <p className="text-blue-100">{featuredStudy.solution}</p>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-white/30 pl-4 italic text-blue-100">
                        "{featuredStudy.quote}"
                      </blockquote>
                      <div className="mt-4 text-sm">
                        <strong>{featuredStudy.author}</strong>, {featuredStudy.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h4 className="text-xl font-semibold mb-6">Results After Implementation</h4>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-3xl font-bold text-green-600 mb-2">{featuredStudy.results?.leadResponse}</div>
                        <div className="text-sm text-gray-600">Leads contacted within 5 minutes</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{featuredStudy.results?.conversion}</div>
                        <div className="text-sm text-gray-600">Lead-to-appointment conversion</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-3xl font-bold text-purple-600 mb-2">{featuredStudy.results?.revenue}</div>
                        <div className="text-sm text-gray-600">Additional revenue (6 months)</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-3xl font-bold text-orange-600 mb-2">{featuredStudy.results?.roi}</div>
                        <div className="text-sm text-gray-600">ROI in year one</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h5 className="font-semibold">Implementation Timeline</h5>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                          <span className="text-sm">Week 1-2: AI agent training on brokerage processes</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                          <span className="text-sm">Week 3-6: Gradual rollout with human oversight</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                          <span className="text-sm">Week 7-12: Full deployment with optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Filter Navigation */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {sizes.map((size) => (
                <Button 
                  key={size.id}
                  variant={activeSize === size.id ? "default" : "outline"}
                  className={activeSize === size.id ? "bg-blue-600" : ""}
                  onClick={() => setActiveSize(size.id)}
                >
                  {size.id === "all" && <Filter className="mr-2 h-4 w-4" />}
                  {size.label}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={`cursor-pointer ${activeCategory === category.id ? "bg-blue-600 text-white" : ""}`}
                  onClick={() => setActiveCategory(activeCategory === category.id ? "" : category.id)}
                >
                  {category.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {activeSize !== "all" || activeCategory ? "Filtered " : "More "}Success Stories
              {filteredCaseStudies.length > 0 && (
                <span className="text-lg font-normal text-gray-600 ml-2">
                  ({filteredCaseStudies.length} {filteredCaseStudies.length === 1 ? 'result' : 'results'})
                </span>
              )}
            </h2>
            
            {filteredCaseStudies.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No case studies match your current filters.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setActiveSize("all")
                    setActiveCategory("")
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.map((study) => (
                  <Card key={study.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{study.sizeLabel}</Badge>
                        <MapPin className="h-4 w-4 text-gray-400" />
                      </div>
                      <CardTitle className="text-lg">{study.name}</CardTitle>
                      <p className="text-sm text-gray-600">
                        {study.agents === 1 ? "Individual Agent" : `${study.agents} agents`} • {study.location} • {study.market}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="text-2xl font-bold text-green-600 mb-1">{study.metric}</div>
                          <div className="text-sm text-gray-600">{study.metricLabel}</div>
                        </div>
                        <p className="text-sm text-gray-700">
                          {study.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {study.categories.map((cat) => {
                            const category = categories.find(c => c.id === cat)
                            return (
                              <Badge key={cat} variant="secondary" className="text-xs">
                                {category?.label}
                              </Badge>
                            )
                          })}
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Aggregate Results */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Aggregate Impact Across Our Client Base</h2>
              <p className="text-lg text-gray-600">Measurable results from 150+ successful implementations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">73%</div>
                <div className="text-lg font-semibold mb-2">Faster Lead Response</div>
                <div className="text-gray-600">Average response time improvement across all clients</div>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">156%</div>
                <div className="text-lg font-semibold mb-2">Conversion Improvement</div>
                <div className="text-gray-600">Average increase in lead-to-appointment rates</div>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">$127K</div>
                <div className="text-lg font-semibold mb-2">Average Annual Savings</div>
                <div className="text-gray-600">Cost reduction through automation and efficiency</div>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">134%</div>
                <div className="text-lg font-semibold mb-2">Revenue Growth</div>
                <div className="text-gray-600">Average increase in brokerage revenue</div>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">89%</div>
                <div className="text-lg font-semibold mb-2">More Qualified Time</div>
                <div className="text-gray-600">Time agents spend with qualified prospects</div>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-pink-600 mb-2">167%</div>
                <div className="text-lg font-semibold mb-2">Satisfaction Improvement</div>
                <div className="text-gray-600">Increase in client satisfaction scores</div>
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
                <h3 className="font-semibold mb-2">Implementation Guide</h3>
                <p className="text-sm text-gray-600 mb-4">See the detailed 90-day process</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/implementation-guide">Learn More</Link>
                </Button>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">ROI Calculator</h3>
                <p className="text-sm text-gray-600 mb-4">Estimate your potential returns</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/roi-calculator">Calculate ROI</Link>
                </Button>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">AI Best Practices</h3>
                <p className="text-sm text-gray-600 mb-4">Strategic guidelines for success</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/ai-best-practices">Read Guide</Link>
                </Button>
              </Card>
              
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Success Stories</h3>
                <p className="text-sm text-gray-600 mb-4">More transformation stories</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/success-stories">View Stories</Link>
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
