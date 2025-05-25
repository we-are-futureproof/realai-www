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
  title: 'RealAI vs CINC - Why Choose RealAI',
  description: 'Compare RealAI\'s specialized real estate AI solutions against CINC. Discover why domain expertise and custom implementation matter for brokerages.',
  openGraph: {
    title: 'RealAI vs CINC - Why Choose RealAI | RealAI',
    description: 'Professional-grade AI vs generic solutions. Why domain expertise and custom implementation matter for real estate brokerages.',
    url: 'https://realai.com/vs-cinc',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs CINC Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs CINC - Why Choose RealAI | RealAI',
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

export default function CINCComparisonPage() {
  // Competitor data directly embedded
  const competitor = {
    name: 'CINC',
    title: 'CINC',
    description: 'CINC is a real estate CRM platform that offers lead generation, marketing automation, and transaction management tools.',
    logo: '/cinc-logo.png',
    url: 'https://cincpro.com/',
    pros: [
      'Established real estate platform',
      'Comprehensive CRM features',
      'Multiple integration options'
    ],
    cons: [
      'Expensive pricing structure',
      'Complex implementation',
      'Requires significant training',
      'Limited AI capabilities'
    ],
    hero: {
      title: 'Your Ultimate Real Estate CRM Solution',
      subtitle: 'AI-powered lead generation and marketing automation',
      image: '/images/cinc-hero.jpg',
      cta1: 'Get Demo',
      cta2: 'Learn More'
    },
    features: [
      {
        name: 'Lead Generation',
        description: 'Built-in lead generation with automated follow-up',
        realAI: true,
        competitor: true,
        icon: 'Users'
      },
      {
        name: 'CRM System',
        description: 'Comprehensive contact management system',
        realAI: true,
        competitor: true,
        icon: 'Users'
      },
      {
        name: 'Marketing Automation',
        description: 'Automated drip campaigns and follow-ups',
        realAI: true,
        competitor: true,
        icon: 'Calendar'
      },
      {
        name: 'AI Assistant',
        description: 'Advanced AI writing and response generation',
        realAI: true,
        competitor: false,
        icon: 'Sparkles'
      },
      {
        name: 'Integration',
        description: 'Deep integration with other real estate tools',
        realAI: true,
        competitor: true,
        icon: 'Shield'
      },
      {
        name: 'Multi-channel Support',
        description: 'Support across email, SMS, social media',
        realAI: true,
        competitor: false,
        icon: 'Phone'
      }
    ],
    differentiators: [
      {
        title: 'Specialized for Real Estate',
        description: 'RealAI is built specifically for real estate agents and brokerages, with deep domain expertise.',
        icon: 'Home'
      },
      {
        title: 'Advanced AI Capabilities',
        description: 'RealAI leverages the latest in AI technology to provide intelligent automation and insights.',
        icon: 'Sparkles'
      },
      {
        title: 'Affordable Pricing',
        description: 'RealAI offers transparent pricing without long-term contracts or hidden fees.',
        icon: 'DollarSign'
      }
    ],
    costs: {
      setup: '$1,500+',
      monthly: '$250-500 per agent',
      annual: '$3,000-6,000 per agent',
      realAIMonthly: '$99 per agent',
      realAIAnnual: '$990 per agent',
      realAISetup: '$0',
      competitor: {
        setup: '$1,500+',
        monthly: '$250-500 per agent',
        annual: '$3,000-6,000 per agent',
        items: [
          { name: 'Setup fee', cost: '$1,500+' },
          { name: 'Monthly subscription', cost: '$250-500 per agent' },
          { name: 'Support fees', cost: 'Included' },
          { name: 'Training costs', cost: 'Additional' }
        ],
        total: '$3,000-6,000 per agent annually + $1,500+ setup'
      },
      realai: {
        setup: '$0',
        monthly: '$99 per agent',
        annual: '$990 per agent',
        items: [
          { name: 'All-inclusive monthly subscription', cost: '$99 per agent' },
          { name: 'No setup fees', cost: '$0' },
          { name: 'Free training', cost: 'Included' },
          { name: 'Unlimited support', cost: 'Included' }
        ],
        total: '$990 per agent annually, $0 setup'
      },
      savings: {
        setup: '$1,500+',
        monthly: '$151-401 per agent',
        annual: '$2,010-5,010 per agent',
        percent: '60-80%'
      }
    },
    testimonials: [
      {
        quote: 'We switched from CINC to RealAI and saw an immediate improvement in lead conversion rates and agent productivity.',
        name: 'Sarah Johnson',
        title: 'Broker Owner',
        company: 'Johnson Real Estate Group',
        author: 'Sarah Johnson, Broker Owner'
      },
      {
        quote: 'The cost savings alone made the switch worthwhile, but the AI capabilities have transformed how we do business.',
        name: 'Michael Chen',
        title: 'Managing Broker',
        company: 'Prestige Properties',
        author: 'Michael Chen, Managing Broker'
      },
      {
        quote: 'Our agents love how intuitive RealAI is compared to our previous CINC implementation.',
        name: 'Jessica Martinez',
        title: 'Team Leader',
        company: 'Elite Home Sales',
        author: 'Jessica Martinez, Team Leader'
      }
    ],
    faq: [
      {
        question: 'How does RealAI compare to CINC in terms of cost?',
        answer: 'RealAI typically costs 60-80% less than CINC when comparing monthly subscription costs, with no setup fees.'
      },
      {
        question: 'Is it difficult to migrate from CINC to RealAI?',
        answer: 'Not at all. RealAI offers a white-glove migration service that handles all data transfer and provides comprehensive training.'
      },
      {
        question: 'What makes RealAI\'s AI capabilities superior to CINC?',
        answer: 'RealAI uses advanced language models specifically trained on real estate data, while CINC offers more basic automation tools.'
      },
      {
        question: 'Can RealAI integrate with my other tools like CINC does?',
        answer: 'Yes, RealAI has an extensive API and integration ecosystem that connects with all major real estate platforms and tools.'
      }
    ]
  };
  
  // Use red highlight color for CINC (direct competitor)
  const highlightColor = 'red';

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-600 text-white px-4 py-2 hover:bg-red-600">Why Generic AI Falls Short</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              RealAI vs. <span className="text-red-400">CINC</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              {competitor.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-slate-900 hover:bg-gray-100">
                {competitor.hero.cta1}
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900">
                {competitor.hero.cta2}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Wins */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex items-center gap-3">
              <Clock className="text-slate-600 w-6 h-6" />
              <span className="text-lg">Save 20+ hours per agent weekly</span>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="text-slate-600 w-6 h-6" />
              <span className="text-lg">3x faster response times</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-slate-600 w-6 h-6" />
              <span className="text-lg">Scale without hiring</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem with Generic Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">The Problem with One-Size-Fits-All AI</h2>
              <p className="text-xl text-slate-600">
                Generic AI tools like CINC offer basic functionalities, but when it comes to real estate—where
                every lead and interaction is critical—they fall short.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="w-6 h-6" />
                    Generic AI Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Basic lead generation only</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">No real estate domain expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Generic messaging that sounds robotic</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">No integration with MLS or real estate CRMs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Set-it-and-forget-it approach</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-red-700">Risk of brand damage from poor AI responses</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <Shield className="w-6 h-6" />
                    RealAI Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Complete brokerage transformation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">20+ years real estate expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">AI trained to sound like your brand</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Deep CRM, MLS, and operations integration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Human-guided deployment with oversight</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-green-700">Brand protection and quality assurance</span>
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
                    <th className="border border-slate-300 p-4 text-center font-semibold text-red-700">{competitor.name}</th>
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
                          <span className="text-yellow-600">{values.competitor}</span>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
              What Makes RealAI Different
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {competitor.differentiators.map((diff, index) => {
                const IconComponent = iconMap[diff.icon as keyof typeof iconMap] || Sparkles;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                        {diff.title}
                      </CardTitle>
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

      {/* Cost Comparison (if available) */}
      {competitor.costs && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">True Cost Comparison</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-gray-600">{competitor.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {competitor.costs.competitor.items.map((item: { name: string; cost: string }, index: number) => (
                        <li key={index} className="flex justify-between">
                          <span>{item.name}</span>
                          <span className="font-bold">{item.cost}</span>
                        </li>
                      ))}
                      <li className="flex justify-between border-t pt-4">
                        <span className="font-bold">Total First Year</span>
                        <span className="font-bold text-red-600">{competitor.costs.competitor.total}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <div className="mt-20 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-center mb-8">Your Savings with RealAI</h3>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8">
                    <p className="text-xl font-semibold text-center mb-4">Switching from {competitor.name} to RealAI can save you:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                      <div>
                        <p className="text-lg font-bold text-green-700">{competitor.costs.savings.setup}</p>
                        <p className="text-sm">Setup Costs</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-green-700">{competitor.costs.savings.monthly}</p>
                        <p className="text-sm">Monthly Per Agent</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-green-700">{competitor.costs.savings.annual}</p>
                        <p className="text-sm">Annually Per Agent</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold text-center text-green-700 mt-8">That's a {competitor.costs.savings.percent || '60-80%'} cost reduction!</p>
                  </div>
                </div>
                <Card className="bg-blue-600 text-white shadow-lg">
                  <CardHeader>
                    <CardTitle>RealAI</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {competitor.costs.realai.items.map((item: { name: string; cost: string }, index: number) => (
                        <li key={index} className="flex justify-between">
                          <span>{item.name}</span>
                          <span className="font-bold">{item.cost}</span>
                        </li>
                      ))}
                      <li className="flex justify-between border-t border-blue-500 pt-4">
                        <span className="font-bold">Total First Year</span>
                        <span className="font-bold text-green-300">{competitor.costs.realai.total}</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Social Proof */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
              Brokerages That Made the Switch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {competitor.testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="text-slate-600 mb-6 italic">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
              Common Questions About Switching
            </h2>
            <div className="space-y-6">
              {competitor.faq.map((item: { question: string; answer: string }, index: number) => (
                <Card key={index} className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
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

      {/* Ready to Transform Your Brokerage? */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Brokerage?
            </h2>
            <p className="text-xl mb-8">
              The future of real estate lies in AI—but only if you deploy it properly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/book-demo" passHref>
                <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100">
                  Book Your Free Demo Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
