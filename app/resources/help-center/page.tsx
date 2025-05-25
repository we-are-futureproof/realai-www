import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  Phone, 
  MessageCircle, 
  Ticket, 
  Calendar,
  Book,
  Settings,
  Users,
  BarChart3,
  Shield,
  PlayCircle,
  Download,
  Search,
  ChevronRight,
  ExternalLink,
  Clock,
  Star,
  CheckCircle,
  HelpCircle,
  FileText,
  Video,
  Headphones
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get the Most from Your AI Investment
              </h1>
              <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto">
                Comprehensive support, detailed documentation, and expert guidance to ensure your success every step of the way.
              </p>
              
              {/* Support Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-blue-200 text-sm">Technical Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">&lt;2hrs</div>
                  <div className="text-blue-200 text-sm">Avg Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">97%</div>
                  <div className="text-blue-200 text-sm">First-Contact Resolution</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                  <div className="text-blue-200 text-sm">Support Satisfaction</div>
                </div>
              </div>

              {/* Quick Access */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Support
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Live Chat
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Ticket className="mr-2 h-5 w-5" />
                  Submit Ticket
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Training
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                New to RealAI? Start Here
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow our step-by-step guide to get your brokerage up and running with AI automation.
              </p>
            </div>

            {/* Quick Start Guide */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Quick Start Guide</h3>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Account Setup", desc: "Initial configuration and team access management" },
                    { step: 2, title: "System Integration", desc: "Connecting your CRM and existing tools" },
                    { step: 3, title: "AI Training", desc: "Customizing AI agents for your brokerage" },
                    { step: 4, title: "Team Onboarding", desc: "Getting your team up and running" },
                    { step: 5, title: "Performance Monitoring", desc: "Tracking success and optimization" }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Popular First Steps</h3>
                <div className="space-y-4">
                  {[
                    { title: "Complete the onboarding checklist", icon: CheckCircle },
                    { title: "Schedule your implementation consultation", icon: Calendar },
                    { title: "Download the getting started guide", icon: Download },
                    { title: "Watch the video tutorial series", icon: PlayCircle },
                    { title: "Join the welcome webinar", icon: Users }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <item.icon className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="flex-1 font-medium text-gray-900">{item.title}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Documentation */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Feature Guides and Documentation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive guides for every RealAI feature to help you maximize your investment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Lead Management",
                  icon: Users,
                  features: ["AI Lead Response Configuration", "Lead Nurturing Automation", "Qualification Criteria", "Escalation Rules"],
                  color: "blue"
                },
                {
                  title: "Client Communication",
                  icon: MessageCircle,
                  features: ["Email Automation Setup", "SMS Configuration", "Social Media Integration", "Voice Call Routing"],
                  color: "green"
                },
                {
                  title: "Transaction Management",
                  icon: FileText,
                  features: ["Pipeline Tracking", "Milestone Notifications", "Document Management", "Task Automation"],
                  color: "purple"
                },
                {
                  title: "Analytics & Reporting",
                  icon: BarChart3,
                  features: ["Performance Dashboards", "Custom Report Creation", "KPI Tracking", "ROI Calculation"],
                  color: "orange"
                },
                {
                  title: "System Integrations",
                  icon: Settings,
                  features: ["CRM Connections", "Email Platform Setup", "Phone System Integration", "Marketing Tools"],
                  color: "red"
                },
                {
                  title: "Security & Compliance",
                  icon: Shield,
                  features: ["Data Protection", "User Permissions", "Audit Trails", "Compliance Reporting"],
                  color: "gray"
                }
              ].map((section, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 bg-${section.color}-100 text-${section.color}-600 rounded-lg flex items-center justify-center mb-4`}>
                    <section.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 hover:text-blue-600 cursor-pointer">
                        <ChevronRight className="h-4 w-4 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    View Documentation
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to the most common questions about RealAI.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  category: "Getting Started",
                  questions: [
                    {
                      q: "How long does implementation take?",
                      a: "Most brokerages are fully operational within 2-4 weeks, with initial results visible within the first week."
                    },
                    {
                      q: "Do we need technical expertise to set up RealAI?",
                      a: "No, our implementation team handles all technical setup. Your team just needs to participate in training sessions."
                    },
                    {
                      q: "Can we try RealAI before committing?",
                      a: "Yes, we offer a 30-day pilot program to evaluate fit and performance before full implementation."
                    }
                  ]
                },
                {
                  category: "Features and Functionality",
                  questions: [
                    {
                      q: "How does AI decide which leads to prioritize?",
                      a: "Our AI uses machine learning algorithms trained on your historical data and successful conversion patterns."
                    },
                    {
                      q: "Can we customize the AI's communication style?",
                      a: "Absolutely. We train the AI to match your brokerage's voice, tone, and communication preferences."
                    },
                    {
                      q: "What happens if the AI can't handle a situation?",
                      a: "The AI seamlessly transfers to human agents based on predetermined criteria and complexity thresholds."
                    }
                  ]
                },
                {
                  category: "Technical and Integration",
                  questions: [
                    {
                      q: "Which CRM systems do you integrate with?",
                      a: "We support all major real estate CRMs and can build custom integrations for specialized systems."
                    },
                    {
                      q: "Is our data secure with RealAI?",
                      a: "Yes, we use enterprise-grade encryption and are SOC 2 compliant with strict data protection protocols."
                    }
                  ]
                }
              ].map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h3>
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h4>
                        <p className="text-gray-600">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Tutorial Library */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Video Tutorials and Training
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn through comprehensive video tutorials designed for every skill level.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Getting Started Videos",
                  videos: ["Welcome to RealAI", "Initial Setup Walkthrough", "Team Member Onboarding", "First Week Best Practices"],
                  duration: "15-20 min each"
                },
                {
                  title: "Feature Deep Dives",
                  videos: ["Lead Management Mastery", "Communication Automation", "Analytics and Reporting", "Advanced Customization"],
                  duration: "30-45 min each"
                },
                {
                  title: "Integration Tutorials",
                  videos: ["CRM Setup Guide", "Email Platform Integration", "Phone System Connection", "Marketing Tool Sync"],
                  duration: "20-30 min each"
                },
                {
                  title: "Best Practices Series",
                  videos: ["Optimization Strategies", "Performance Monitoring", "Team Training Tips", "Communication Excellence"],
                  duration: "25-35 min each"
                }
              ].map((series, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                    <Video className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{series.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{series.duration}</p>
                  <ul className="space-y-2 mb-4">
                    {series.videos.map((video, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <PlayCircle className="h-4 w-4 mr-2 text-red-500" />
                        {video}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">
                    Watch Series
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Getting Help When You Need It
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple ways to get support, from emergency assistance to self-service resources.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 text-center border-2 border-red-200">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Support</h3>
                <p className="text-gray-600 mb-6">24/7 technical hotline for critical system issues and urgent troubleshooting.</p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div>• Critical system issues</div>
                  <div>• Urgent configuration needs</div>
                  <div>• Emergency troubleshooting</div>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Call Emergency Line
                </Button>
              </div>

              <div className="bg-white rounded-lg p-8 text-center border-2 border-blue-200">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Support</h3>
                <p className="text-gray-600 mb-6">Business hours support for general questions, training, and optimization.</p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div>• General questions & guidance</div>
                  <div>• Feature requests & feedback</div>
                  <div>• Training & optimization</div>
                </div>
                <Button variant="outline" className="w-full">
                  Start Chat
                </Button>
              </div>

              <div className="bg-white rounded-lg p-8 text-center border-2 border-green-200">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Self-Service</h3>
                <p className="text-gray-600 mb-6">Comprehensive knowledge base with searchable documentation and guides.</p>
                <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <div>• Searchable documentation</div>
                  <div>• Step-by-step guides</div>
                  <div>• Community forums</div>
                </div>
                <Button variant="outline" className="w-full">
                  Browse Knowledge Base
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Search */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Still need help? Search our knowledge base
            </h2>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search documentation, guides, and tutorials..."
                className="w-full px-6 py-4 pr-12 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            </div>
            <p className="text-gray-600 mt-4">
              Or <Link href="/contact" className="text-blue-600 hover:underline">contact our support team</Link> directly
            </p>
          </div>
        </section>
      </div>

      <CTASection />
      <Footer />
    </div>
  )
}
