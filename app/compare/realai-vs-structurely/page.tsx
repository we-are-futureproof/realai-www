import { CheckCircle, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar, AlertTriangle } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealAI vs Structurely - Why Choose RealAI',
  description: 'Compare RealAI\'s specialized real estate AI solutions against Structurely. Discover why domain expertise and custom implementation matter for brokerages.',
  openGraph: {
    title: 'RealAI vs Structurely - Why Choose RealAI | RealAI',
    description: 'Professional-grade AI vs generic solutions. Why domain expertise and custom implementation matter for real estate brokerages.',
    url: 'https://realai.com/vs-structurely',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs Structurely',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs Structurely - Why Choose RealAI | RealAI',
    description: 'Professional-grade AI vs generic solutions. The future of real estate isn\'t artificial.',
  },
}

// Define icon mapping
const iconMap = {
  'Sparkles': Sparkles,
  'Shield': Shield,
  'Calculator': Calculator,
  'Phone': Phone,
  'DollarSign': DollarSign,
  'Calendar': Calendar,
};

export default function StructurelyComparisonPage() {
  // Competitor data directly embedded
  const competitor = {
    name: 'Structurely',
    title: 'Structurely',
    description: 'Structurely is an AI-powered lead conversion assistant for real estate teams.',
    logo: '/structurely-logo.png',
    url: 'https://structurely.com/',
    pros: [
      'AI lead qualification',
      'Automated follow-up',
      'Simple interface'
    ],
    cons: [
      'Limited real estate specific training',
      'Basic features only',
      'Limited customization',
      'Inconsistent AI responses'
    ],
    hero: {
      title: 'AI-Powered Lead Conversion',
      subtitle: 'Automate your lead engagement with conversational AI',
      image: '/images/structurely-hero.jpg',
      cta1: 'Get Demo',
      cta2: 'Learn More'
    },
    features: [
      {
        name: 'Lead Qualification',
        description: 'AI-powered lead qualification and scoring',
        realAI: true,
        competitor: true,
        icon: 'Users'
      },
      {
        name: 'Response Generation',
        description: 'AI-generated responses to common inquiries',
        realAI: true,
        competitor: true,
        icon: 'MessageCircle'
      },
      {
        name: 'Multi-channel Support',
        description: 'Support for email, SMS, and website chat',
        realAI: true,
        competitor: false,
        icon: 'Phone'
      },
      {
        name: 'Real Estate Specific',
        description: 'Purpose-built for real estate workflows',
        realAI: true,
        competitor: false,
        icon: 'Home'
      },
      {
        name: 'Integration Ecosystem',
        description: 'Deep integration with real estate tools',
        realAI: true,
        competitor: false,
        icon: 'Link'
      },
      {
        name: 'Analytics Dashboard',
        description: 'Comprehensive performance analytics',
        realAI: true,
        competitor: true,
        icon: 'BarChart'
      }
    ],
    differentiators: [
      {
        title: 'Real Estate Expertise',
        description: 'RealAI is built specifically for real estate, with deep domain knowledge that generic AI assistants lack.',
        icon: 'Home'
      },
      {
        title: 'Comprehensive Solution',
        description: 'RealAI offers a complete platform, not just a chat assistant, with full CRM capabilities.',
        icon: 'Layout'
      },
      {
        title: 'Custom Training',
        description: 'RealAI can be trained on your specific business processes and listing information.',
        icon: 'Book'
      }
    ],
    costs: {
      setup: '$0-$500',
      monthly: '$300-$500 per team',
      annual: '$3,600-$6,000 per team',
      realAIMonthly: '$99 per agent',
      realAIAnnual: '$990 per agent',
      realAISetup: '$0',
      competitor: {
        setup: '$0-$500',
        monthly: '$300-$500 per team',
        annual: '$3,600-$6,000 per team',
        items: [
          { name: 'Base subscription', cost: '$300-$500 per team' },
          { name: 'Setup fee', cost: '$0-$500' },
          { name: 'Additional agent seats', cost: 'Extra' },
          { name: 'Support', cost: 'Included' }
        ],
        total: '$3,600-$6,000 per team annually + potential setup fees'
      },
      realai: {
        setup: '$0',
        monthly: '$99 per agent',
        annual: '$990 per agent',
        items: [
          { name: 'All-inclusive subscription', cost: '$99 per agent' },
          { name: 'No setup fees', cost: '$0' },
          { name: 'Unlimited agent seats', cost: 'Included' },
          { name: 'Premium support', cost: 'Included' }
        ],
        total: '$990 per agent annually, $0 setup'
      },
      savings: {
        setup: 'Up to $500',
        monthly: 'Varies by team size',
        annual: 'Varies by team size',
        percent: '30-60%'
      }
    },
    testimonials: [
      {
        quote: 'We tried Structurely but found RealAI offers much deeper real estate knowledge and more consistent responses.',
        name: 'David Wilson',
        title: 'Team Leader',
        company: 'Keller Williams',
        author: 'David Wilson, Team Leader'
      },
      {
        quote: 'RealAI has better integrations with our existing tools and provides a more comprehensive solution than Structurely did.',
        name: 'Jennifer Lopez',
        title: 'Broker',
        company: 'ReMax Advantage',
        author: 'Jennifer Lopez, Broker'
      },
      {
        quote: 'The quality of the AI responses from RealAI is noticeably better than what we experienced with Structurely.',
        name: 'Mark Thompson',
        title: 'Sales Manager',
        company: 'Century 21',
        author: 'Mark Thompson, Sales Manager'
      }
    ],
    faq: [
      {
        question: 'How does RealAI compare to Structurely for lead conversion?',
        answer: 'While both use AI for lead engagement, RealAI offers deeper real estate knowledge, more consistent responses, and integrates with a complete CRM solution rather than being a standalone chat tool.'
      },
      {
        question: 'Is RealAI more expensive than Structurely?',
        answer: 'RealAI typically offers better value with straightforward per-agent pricing rather than team-based pricing, potentially saving 30-60% depending on team size.'
      },
      {
        question: 'Can I migrate my data from Structurely to RealAI?',
        answer: 'Yes, RealAI offers a seamless migration service that transfers all your lead data, conversation history, and settings from Structurely.'
      },
      {
        question: 'What makes RealAI\'s AI better than Structurely\'s?',
        answer: 'RealAI uses more advanced large language models specifically trained on real estate data and communications, resulting in more natural, helpful, and domain-appropriate responses.'
      }
    ]
  };

  const getStaticClasses = (section: string) => {
    switch (section) {
      case 'hero':
        return {
          container: 'py-8 md:py-12 lg:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white',
          content: 'container mx-auto px-4',
          grid: 'grid md:grid-cols-2 gap-8 items-center',
          heading: 'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
          highlight: 'text-blue-400',
          subheading: 'text-xl md:text-2xl mb-8 text-slate-300',
          buttons: 'flex flex-col sm:flex-row gap-4',
          primaryBtn: 'bg-blue-500 hover:bg-blue-600 text-white',
          secondaryBtn: 'bg-white hover:bg-slate-100 text-slate-900',
        };
      case 'features':
        return {
          container: 'py-16 bg-white',
          content: 'container mx-auto px-4',
          heading: 'text-3xl font-bold text-center mb-16 text-slate-900',
          grid: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8',
          card: 'border border-slate-200 rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:border-blue-200',
          cardTitle: 'flex items-center gap-2 text-xl font-semibold mb-3 text-slate-900',
          cardIcon: 'w-6 h-6 text-blue-500',
          cardDesc: 'text-slate-600',
        };
      default:
        return {};
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 text-white px-4 py-2 hover:bg-blue-600">Real Estate AI Comparison</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              One AI Assistant or Six? Why Complete AI Teams Outperform Solo Acts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Structurely gives you Holmes. RealAI gives you an entire AI department working 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem with Generic Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">When One AI Assistant Isn't Enough</h2>
              <p className="text-xl text-slate-600">
                Generic AI tools like {competitor.name} offer basic functionalities, but when it comes to real estate—where
                every lead and interaction is critical—they fall short.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <AlertTriangle className="w-6 h-6" />
                    Generic AI Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Limited lead nurturing capabilities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Lacks real estate domain expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Limited integration with existing systems</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    RealAI Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Built specifically for real estate lead workflows</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Custom implementation for your brokerage</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>White-glove onboarding and ongoing support</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Feature-by-Feature Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-4 text-left font-semibold">Feature</th>
                    <th className="border border-slate-300 p-4 text-center font-semibold text-green-700">RealAI</th>
                    <th className="border border-slate-300 p-4 text-center font-semibold text-blue-700">{competitor.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(competitor.features).map(([feature, values], index) => (
                    <tr key={feature} className={index % 2 === 0 ? '' : 'bg-slate-50'}>
                      <td className="border border-slate-300 p-4 font-medium">{feature}</td>
                      <td className="border border-slate-300 p-4 text-center">
                        {typeof values.realAI === 'boolean' ? (
                          values.realAI ? (
                            <CheckCircle className="text-green-600 w-5 h-5 mx-auto" />
                          ) : (
                            <X className="text-red-500 w-5 h-5 mx-auto" />
                          )
                        ) : (
                          values.realAI as React.ReactNode
                        )}
                      </td>
                      <td className="border border-slate-300 p-4 text-center">
                        {typeof values.competitor === 'boolean' ? (
                          values.competitor ? (
                            <CheckCircle className="text-green-600 w-5 h-5 mx-auto" />
                          ) : (
                            <X className="text-red-500 w-5 h-5 mx-auto" />
                          )
                        ) : (
                          values.competitor as React.ReactNode
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Why Choose RealAI?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {competitor.differentiators.map((diff, index) => {
                const IconComponent = iconMap[diff.icon as keyof typeof iconMap] || Sparkles;
                return (
                  <Card key={index} className="border-slate-200 transition-all duration-300 hover:shadow-md hover:border-blue-200">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="text-blue-600 w-8 h-8" />
                        <CardTitle>{diff.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{diff.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Cost Comparison</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-slate-200 shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl">{competitor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {competitor.costs.competitor.items.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.name}</span>
                        <span className="font-bold">{item.cost}</span>
                      </li>
                    ))}
                    <li className="flex justify-between border-t border-slate-200 pt-4 mt-4">
                      <span className="font-semibold">Total Cost</span>
                      <span className="font-bold text-red-600">{competitor.costs.competitor.total}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-600 text-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">RealAI</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {competitor.costs.realai.items.map((item, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{item.name}</span>
                        <span className="font-bold text-white">{item.cost}</span>
                      </li>
                    ))}
                    <li className="flex justify-between border-t border-blue-500 pt-4 mt-4">
                      <span className="font-semibold">Total Cost</span>
                      <span className="font-bold text-green-300">{competitor.costs.realai.total}</span>
                    </li>
                  </ul>
                  <div className="mt-6 text-center">
                    <p className="text-xl font-bold text-green-300">
                      Save {competitor.costs.savings.percent} on average
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">What Our Customers Say</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {competitor.testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-sm border-slate-200 h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow flex flex-col">
                    <div className="mb-4">
                      <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9524 0C5.45452 0 0.568883 5.07428 0.568883 12.8571C0.568883 24 9.80935 32 21.333 32C19.6188 25.2 15.8078 12.8571 12.9524 12.8571C15.8078 12.8571 18.0916 10.3315 18.0916 7.14285C18.0916 3.19999 15.8078 0 12.9524 0ZM34.9778 0C27.4799 0 22.5943 5.07428 22.5943 12.8571C22.5943 24 31.8348 32 43.3584 32C41.6442 25.2 37.8332 12.8571 34.9778 12.8571C37.8332 12.8571 40.117 10.3315 40.117 7.14285C40.117 3.19999 37.8332 0 34.9778 0Z" fill="#E2E8F0"/>
                      </svg>
                    </div>
                    
                    <p className="text-slate-700 mb-6 flex-grow">{testimonial.quote}</p>
                    
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.author}</p>
                      <p className="text-slate-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {competitor.faq.map((item, index) => (
                <Card key={index} className="shadow-sm border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
