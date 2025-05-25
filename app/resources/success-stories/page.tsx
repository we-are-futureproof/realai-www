import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight, Star, Users, TrendingUp, Award, Building2, MapPin } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Real estate professionals share their experiences with AI implementation and the measurable impact on their business operations.
            </p>
            
            {/* Hero Statistics - Toned Down */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-gray-600 text-sm">Client Implementations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">234%</div>
                <div className="text-gray-600 text-sm">Avg. Productivity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">89%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">$2.3M</div>
                <div className="text-gray-600 text-sm">Total Documented Savings</div>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/resources/success-stories/share">Share Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Implementation Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Users className="h-8 w-8 text-gray-700 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">By Role</h3>
              <p className="text-sm text-gray-600">Broker/Owner, Team Leader, Individual Agent</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <Building2 className="h-8 w-8 text-gray-700 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">By Brokerage Size</h3>
              <p className="text-sm text-gray-600">Boutique, Mid-size, Large</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <MapPin className="h-8 w-8 text-gray-700 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">By Market</h3>
              <p className="text-sm text-gray-600">Urban, Suburban, Rural, Luxury</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <TrendingUp className="h-8 w-8 text-gray-700 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">By Focus</h3>
              <p className="text-sm text-gray-600">Lead Gen, Communication, Transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <FeaturedSuccessStory />

      {/* Success Story Collection */}
      <SuccessStoryCollection />

      {/* Aggregate Metrics */}
      <AggregateMetrics />

      {/* CTA Section */}
      <CTASection />
      <Footer />
    </div>
  )
}

function FeaturedSuccessStory() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Implementation</h2>
          <p className="text-xl text-gray-600">Coastal Properties Group - San Diego Market</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <Building2 className="h-8 w-8 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Coastal Properties Group</h3>
                  <p className="text-gray-600">Marcus Rodriguez, Broker/Owner</p>
                  <p className="text-sm text-gray-500">45-agent brokerage, Luxury coastal properties</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Initial Challenge</h4>
                <p className="text-gray-700 leading-relaxed">
                  "We were experiencing significant inefficiencies in our lead management process. Our agents were dedicating approximately 60% of their time to administrative tasks rather than client consultation and relationship building. This was impacting our conversion rates and overall productivity."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">312%</div>
                  <div className="text-sm text-gray-600">Lead conversion improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">67%</div>
                  <div className="text-sm text-gray-600">Administrative overhead reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">$890K</div>
                  <div className="text-sm text-gray-600">Additional annual revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">156%</div>
                  <div className="text-sm text-gray-600">Agent satisfaction increase</div>
                </div>
              </div>

              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-gray-700 leading-relaxed">
                  "The transformation has been remarkable. Our agents have transitioned from data entry clerks to strategic consultants. They now focus on their core competencies - building relationships and closing transactions. The AI handles the routine work, allowing our team to deliver exceptional service at scale."
                </p>
                <cite className="text-sm text-gray-500 mt-2 block">— Marcus Rodriguez, Broker/Owner</cite>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h4 className="text-xl font-bold mb-6">Implementation Timeline</h4>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <h5 className="font-semibold mb-1">Weeks 1-2: Foundation Setup</h5>
                  <p className="text-gray-600 text-sm">Initial system configuration and team training on AI lead qualification protocols</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <h5 className="font-semibold mb-1">Weeks 3-4: Workflow Integration</h5>
                  <p className="text-gray-600 text-sm">Full CRM integration and automated client communication sequence deployment</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <h5 className="font-semibold mb-1">Weeks 5-8: Performance Optimization</h5>
                  <p className="text-gray-600 text-sm">Monitoring, refinement, and advanced feature implementation based on initial results</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center mr-3 text-sm">✓</div>
                <div>
                  <div className="font-semibold text-green-800">Implementation Complete</div>
                  <div className="text-green-700 text-sm">All performance targets exceeded by month 3</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h5 className="font-semibold mb-2">Key Success Factors</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Comprehensive staff training and change management</li>
                <li>• Gradual implementation with continuous monitoring</li>
                <li>• Integration with existing systems and workflows</li>
                <li>• Regular performance evaluation and optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SuccessStoryCollection() {
  const stories = [
    {
      name: "Sarah Chen",
      role: "Team Leader",
      company: "Phoenix Growth Team",
      market: "Phoenix",
      agents: "12 agents",
      challenge: "Growing team struggling with lead distribution and follow-up consistency across multiple agents. Manual coordination was creating bottlenecks and inconsistent client experiences.",
      results: [
        { metric: "289%", description: "Team conversion improvement" },
        { metric: "100%", description: "Lead contact within 5 minutes" },
        { metric: "100%", description: "Agent retention (vs. 67% industry avg)" },
      ],
      quote: "The systematic approach to lead management has transformed our team dynamics. AI didn't replace our personal touch - it enhanced our ability to be more personal with qualified prospects by eliminating administrative overhead.",
      impact: "The implementation resulted in consistent lead nurturing protocols across all team members, significantly improving conversion rates while maintaining high agent satisfaction and retention."
    },
    {
      name: "James Mitchell",
      role: "Solo Agent",
      company: "Independent Agent",
      market: "Denver", 
      agents: "5 years experience",
      challenge: "Established agent reaching capacity constraints due to manual lead management and client communication processes limiting growth potential.",
      results: [
        { metric: "156%", description: "Increase in transactions closed" },
        { metric: "234%", description: "Lead conversion improvement" },
        { metric: "45 hrs", description: "Work week (down from 70)" },
      ],
      quote: "The efficiency gains have been transformational. AI gave me my professional life back while simultaneously growing my business. I'm closing more deals and actually have time for family commitments.",
      impact: "Automated lead qualification and communication sequences enabled focus on high-value activities, resulting in sustainable business growth without corresponding increase in working hours."
    },
    {
      name: "Linda Park",
      role: "Operations Manager",
      company: "Atlanta Realty Group",
      market: "Atlanta",
      agents: "85-agent brokerage",
      challenge: "Managing complex operations across multiple offices with inconsistent communication protocols and significant administrative coordination requirements.",
      results: [
        { metric: "73%", description: "Reduction in coordination time" },
        { metric: "145%", description: "Client satisfaction increase" },
        { metric: "$127K", description: "Annual operational cost savings" },
      ],
      quote: "The implementation fundamentally changed our operational approach. AI transformed us from reactive problem-solving to proactive client service. We now anticipate client needs and prevent issues before they occur.",
      impact: "Standardized communication protocols across offices improved client experience consistency while reducing operational overhead and administrative burden on management staff."
    },
    {
      name: "Robert Kim",
      role: "Broker/Owner",
      company: "Pacific Northwest Realty",
      market: "Seattle to Portland expansion",
      agents: "Expanding from 23 to 67 agents",
      challenge: "Geographic expansion requiring scalable systems for lead management and agent coordination across multiple markets and time zones.",
      results: [
        { metric: "278%", description: "Market expansion efficiency" },
        { metric: "189%", description: "Cross-market lead conversion" },
        { metric: "$1.2M", description: "Additional annual revenue" },
      ],
      quote: "The scalable infrastructure provided by AI implementation enabled our geographic expansion strategy. We maintained service quality standards while rapidly growing our market presence.",
      impact: "Automated systems facilitated seamless expansion into new markets with consistent service delivery and lead management protocols across all locations."
    },
    {
      name: "Maria Gonzalez",
      role: "Rental Division Specialist",
      company: "Miami Metro Properties",
      market: "Miami",
      agents: "High-volume rental focus",
      challenge: "Managing high-volume rental inquiries with seasonal fluctuations requiring rapid response times and consistent qualification processes.",
      results: [
        { metric: "423%", description: "Daily inquiry handling capacity" },
        { metric: "89%", description: "Qualification accuracy improvement" },
        { metric: "167%", description: "Seasonal scalability" },
      ],
      quote: "The system's ability to handle volume fluctuations has been remarkable. We maintain consistent service quality during peak seasons while optimizing resource allocation during slower periods.",
      impact: "Automated qualification and response systems enabled efficient handling of seasonal demand variations while maintaining high service standards and qualification accuracy."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed analysis of AI implementation outcomes across different market segments, business models, and operational challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-3">
                    <Users className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.role}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>{story.company}</p>
                  <p>{story.market} • {story.agents}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Implementation Challenge</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{story.challenge}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Measured Outcomes</h4>
                <div className="space-y-3">
                  {story.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="text-sm text-gray-600">{result.description}</span>
                      <span className="font-bold text-gray-900">{result.metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="border-l-4 border-gray-300 pl-3">
                  <p className="text-gray-700 text-sm leading-relaxed italic">"{story.quote}"</p>
                </div>
              </div>

              <div className="text-xs text-gray-500 leading-relaxed">
                <strong>Impact Summary:</strong> {story.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AggregateMetrics() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Aggregate Performance Analysis</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive analysis of implementation outcomes across 150+ client engagements, representing diverse market conditions and business models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-gray-900 mb-2">89%</div>
            <div className="text-gray-900 font-semibold mb-2">Response Time Improvement</div>
            <div className="text-gray-600 text-sm">Average reduction in initial lead response time across all implementations</div>
          </div>
          
          <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-gray-900 mb-2">167%</div>
            <div className="text-gray-900 font-semibold mb-2">Conversion Rate Enhancement</div>
            <div className="text-gray-600 text-sm">Mean improvement in lead-to-client conversion rates</div>
          </div>
          
          <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-gray-900 mb-2">134%</div>
            <div className="text-gray-900 font-semibold mb-2">Agent Productivity Gains</div>
            <div className="text-gray-600 text-sm">Average increase in transactions per agent annually</div>
          </div>
          
          <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-gray-900 mb-2">$89K</div>
            <div className="text-gray-900 font-semibold mb-2">Operational Cost Reduction</div>
            <div className="text-gray-600 text-sm">Median annual cost savings per brokerage implementation</div>
          </div>
          
          <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-gray-900 mb-2">156%</div>
            <div className="text-gray-900 font-semibold mb-2">Revenue Growth</div>
            <div className="text-gray-600 text-sm">Average revenue increase within first implementation year</div>
          </div>
          
          <div className="bg-white p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl font-bold text-gray-900 mb-2">4.8/5</div>
            <div className="text-gray-900 font-semibold mb-2">Implementation Satisfaction</div>
            <div className="text-gray-600 text-sm">Average client satisfaction rating post-implementation</div>
          </div>
        </div>

        <div className="bg-white p-8 border border-gray-200 rounded-lg mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Return on Investment Distribution</h3>
          <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto">
            Analysis of ROI achievement timelines across all client implementations, demonstrating consistent value delivery patterns.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-gray-900 mb-2">67%</div>
              <div className="text-gray-600 text-sm">Achieve positive ROI within 60 days of implementation</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-gray-900 mb-2">89%</div>
              <div className="text-gray-600 text-sm">Reach break-even within 90 days of deployment</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-gray-900 mb-2">312%</div>
              <div className="text-gray-600 text-sm">Average first-year ROI across all implementations</div>
            </div>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-gray-900 mb-2">456%</div>
              <div className="text-gray-600 text-sm">Median three-year cumulative ROI</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 border border-gray-200 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Client Satisfaction Metrics</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-3">87</div>
              <div className="text-gray-900 font-semibold mb-2">Net Promoter Score</div>
              <div className="text-gray-600 text-sm">Likelihood to recommend to industry peers</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-3">94%</div>
              <div className="text-gray-900 font-semibold mb-2">Implementation Success Rate</div>
              <div className="text-gray-600 text-sm">Percentage of implementations meeting or exceeding targets</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-3">96%</div>
              <div className="text-gray-900 font-semibold mb-2">Client Retention Rate</div>
              <div className="text-gray-600 text-sm">Percentage of clients continuing service after year one</div>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold mb-3 text-center">Key Performance Indicators Summary</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <p><strong>Methodology:</strong> Data collected from 150+ implementations over 24-month period</p>
                <p><strong>Sample Size:</strong> Brokerages ranging from 5-500 agents across 47 markets</p>
              </div>
              <div>
                <p><strong>Measurement Period:</strong> 12-month post-implementation tracking</p>
                <p><strong>Success Criteria:</strong> Minimum 50% improvement in targeted metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
