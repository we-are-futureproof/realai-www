import { CheckCircle, Clock, Target, Users, Shield, AlertTriangle, Building2, TrendingUp, ArrowRight } from 'lucide-react'
import Image from 'next/image'

// This is a print-optimized version of the implementation guide
export default function PrintImplementationGuide() {
  const phases = [
    {
      id: 1,
      title: "Discovery & Planning",
      duration: "Days 1-14",
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

  return (
    <div className="print:text-black print:bg-white bg-white text-black max-w-4xl mx-auto p-8 font-serif print:p-0 print:max-w-none">
      {/* Cover Page */}
      <div className="text-center mb-16">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt="RealAI"
              width={120}
              height={40}
              className="print:filter-none"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">RealAI Implementation Guide</h1>
          <h2 className="text-2xl text-gray-600 mb-8">Your 90-Day AI Transformation Roadmap</h2>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            A proven, step-by-step implementation process that transforms your brokerage without disruption.
            From discovery to deployment in 90 days.
          </p>
        </div>

        <div className="text-sm text-gray-600">
          <p> 2024 RealAI. All rights reserved.</p>
          <p>realai.com</p>
        </div>
      </div>

      <div className="print:break-before-page"></div>

      {/* Table of Contents */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Table of Contents</h2>
        <div className="space-y-2">
          <div className="flex justify-between border-dotted border-b">
            <span>Overview</span>
            <span>3</span>
          </div>
          <div className="flex justify-between border-dotted border-b">
            <span>Phase 1: Discovery & Planning</span>
            <span>4</span>
          </div>
          <div className="flex justify-between border-dotted border-b">
            <span>Phase 2: Agent Training & Configuration</span>
            <span>5</span>
          </div>
          <div className="flex justify-between border-dotted border-b">
            <span>Phase 3: Pilot Deployment</span>
            <span>6</span>
          </div>
          <div className="flex justify-between border-dotted border-b">
            <span>Phase 4: Full Deployment</span>
            <span>7</span>
          </div>
          <div className="flex justify-between border-dotted border-b">
            <span>Success Factors</span>
            <span>8</span>
          </div>
          <div className="flex justify-between border-dotted border-b">
            <span>Common Challenges & Solutions</span>
            <span>9</span>
          </div>
          <div className="flex justify-between border-dotted border-b">
            <span>ROI Timeline</span>
            <span>10</span>
          </div>
          <div className="flex justify-between border-dotted border-b">
            <span>Training & Support</span>
            <span>11</span>
          </div>
        </div>
      </div>

      <div className="print:break-before-page"></div>

      {/* Overview */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Implementation Overview</h2>
        <p className="text-lg leading-relaxed mb-6">
          Our 90-day implementation process has been refined through 200+ successful deployments.
          It's designed to minimize disruption while maximizing adoption and results.
        </p>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Principles</h3>
            <ul className="space-y-2">
              <li>• Gradual deployment with pilot groups</li>
              <li>• Extensive training and support</li>
              <li>• Continuous monitoring and optimization</li>
              <li>• Clear success metrics and milestones</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Expected Outcomes</h3>
            <ul className="space-y-2">
              <li>• 89% of leads contacted within 5 minutes</li>
              <li>• 234% improvement in lead conversion</li>
              <li>• 275% ROI in first year</li>
              <li>• 90%+ agent satisfaction with AI tools</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Implementation Phases */}
      {phases.map((phase, index) => (
        <div key={phase.id} className={`mb-16 ${index > 0 ? 'print:break-before-page' : ''}`}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Phase {phase.id}: {phase.title}</h2>
            <p className="text-lg text-gray-600 mb-2">{phase.duration}</p>
            <p className="leading-relaxed">{phase.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Deliverables</h3>
              <ul className="space-y-2">
                {phase.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Activities</h3>
              <ul className="space-y-2">
                {phase.keyActivities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <div className="print:break-before-page"></div>

      {/* Success Factors */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Critical Success Factors</h2>
        <p className="leading-relaxed mb-8">
          Based on our experience with 200+ implementations, these factors are most critical for success:
        </p>

        {successFactors.map((category, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
            <ul className="space-y-2">
              {category.factors.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="print:break-before-page"></div>

      {/* Common Challenges */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Common Challenges & Solutions</h2>
        <p className="leading-relaxed mb-8">
          Every implementation faces predictable challenges. Here's how to address them proactively:
        </p>

        {commonChallenges.map((item, index) => (
          <div key={index} className="mb-8 border-l-4 border-blue-500 pl-6">
            <h3 className="text-lg font-semibold mb-2">{item.challenge}</h3>
            <p className="text-gray-600 mb-2">Timeline: {item.timeframe}</p>
            <p className="leading-relaxed"><strong>Solution:</strong> {item.solution}</p>
          </div>
        ))}
      </div>

      <div className="print:break-before-page"></div>

      {/* ROI Timeline */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Expected ROI Timeline</h2>
        <p className="leading-relaxed mb-8">
          When you can expect to see returns on your AI investment:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Month 1</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">15%</div>
            <p>Efficiency gains from automated lead response</p>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Month 3</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">45%</div>
            <p>Lead conversion improvements and time savings</p>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Month 6</h3>
            <div className="text-3xl font-bold text-purple-600 mb-2">125%</div>
            <p>Full operational efficiency and revenue growth</p>
          </div>
          <div className="border p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Month 12</h3>
            <div className="text-3xl font-bold text-orange-600 mb-2">275%</div>
            <p>Sustained productivity gains and market expansion</p>
          </div>
        </div>
      </div>

      <div className="print:break-before-page"></div>

      {/* Training & Support */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Comprehensive Training & Support</h2>
        <p className="leading-relaxed mb-8">
          Every implementation includes extensive training and ongoing support to ensure success:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Training Program</h3>
            <ul className="space-y-2">
              <li>• Executive leadership briefings</li>
              <li>• Agent hands-on workshops</li>
              <li>• Admin configuration training</li>
              <li>• Best practices sessions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support Team</h3>
            <ul className="space-y-2">
              <li>• Dedicated implementation manager</li>
              <li>• Technical support specialists</li>
              <li>• Success coaching consultants</li>
              <li>• 24/7 emergency hotline</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ongoing Success</h3>
            <ul className="space-y-2">
              <li>• Monthly optimization reviews</li>
              <li>• Quarterly business reviews</li>
              <li>• Feature updates and training</li>
              <li>• Performance analytics reports</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="print:break-before-page"></div>
      {/* Contact Information */}
      <div className="text-center border-t pt-8">
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.png"
            alt="RealAI"
            width={100}
            height={33}
            className="print:filter-none"
          />
        </div>
        <h3 className="text-lg font-semibold mb-4">Ready to Get Started?</h3>
        <p className="mb-6">Schedule your implementation planning call today.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-6">
          <div>
            <p className="font-semibold">Website</p>
            <p>realai.com</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p>implementation@realai.com</p>
          </div>
          <div>
            <p className="font-semibold">Phone</p>
            <p>1-800-REAL-AI</p>
          </div>
        </div>
        <div className="text-xs text-gray-500 border-t pt-4">
          <p>This guide was generated from realai.com/resources/implementation-guide</p>
          <p> 2024 RealAI. All rights reserved. For the latest version, visit realai.com</p>
        </div>
      </div>
    </div>
  )
}
