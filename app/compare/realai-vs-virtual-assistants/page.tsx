import React from 'react';
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
  title: 'RealAI vs Virtual Assistants - Why Choose RealAI',
  description: 'Compare RealAI\'s specialized real estate AI solutions against Virtual Assistants. Discover why domain expertise and custom implementation matter for brokerages.',
  openGraph: {
    title: 'RealAI vs Virtual Assistants - Why Choose RealAI | RealAI',
    description: 'Professional-grade AI vs human virtual assistants. Why domain expertise and custom implementation matter for real estate brokerages.',
    url: 'https://realai.com/vs-virtual-assistants',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI vs Virtual Assistants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealAI vs Virtual Assistants - Why Choose RealAI | RealAI',
    description: 'Professional-grade AI vs human virtual assistants. The future of real estate isn\'t artificial.',
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

export default function VirtualAssistantsComparisonPage() {
  // Competitor data directly embedded
  const competitor = {
    name: 'Virtual Assistants',
    title: 'Virtual Assistants',
    description: 'Virtual assistants are human remote workers who provide administrative support for real estate professionals.',
    logo: '/va-logo.png',
    url: 'https://realai.com/vs-virtual-assistants',
    pros: [
      'Human understanding',
      'Flexible task handling',
      'Personal relationships'
    ],
    cons: [
      'Limited availability (not 24/7)',
      'High ongoing costs',
      'Inconsistent quality',
      'Need for management',
      'Limited scalability'
    ],
    hero: {
      title: 'AI Assistants vs. Human Virtual Assistants',
      subtitle: 'Why AI is changing the game for real estate professionals',
      image: '/images/va-hero.jpg',
      cta1: 'Get Demo',
      cta2: 'Learn More'
    },
    features: [
      {
        name: 'Availability',
        description: '24/7 availability with no time off or sick days',
        realAI: true,
        competitor: false,
        icon: 'Clock'
      },
      {
        name: 'Response Time',
        description: 'Instant responses to inquiries any time of day',
        realAI: true,
        competitor: false,
        icon: 'Clock'
      },
      {
        name: 'Cost Efficiency',
        description: 'Flat monthly fee versus hourly rates',
        realAI: true,
        competitor: false,
        icon: 'DollarSign'
      },
      {
        name: 'Consistency',
        description: 'Same quality responses every time',
        realAI: true,
        competitor: false,
        icon: 'Shield'
      },
      {
        name: 'Scalability',
        description: 'Handles unlimited volume with no additional cost',
        realAI: true,
        competitor: false,
        icon: 'TrendingUp'
      },
      {
        name: 'Complex Understanding',
        description: 'Human-like understanding of complex situations',
        realAI: false,
        competitor: true,
        icon: 'Users'
      }
    ],
    differentiators: [
      {
        title: 'Always Available',
        description: 'RealAI works 24/7/365, never takes vacation, never calls in sick, and never sleeps.',
        icon: 'Clock'
      },
      {
        title: 'Infinitely Scalable',
        description: 'RealAI can handle 1 or 1,000 conversations simultaneously with no additional cost.',
        icon: 'TrendingUp'
      },
      {
        title: 'Consistent Quality',
        description: 'Every interaction is handled with the same high level of quality and expertise.',
        icon: 'Shield'
      }
    ],
    costs: {
      setup: '$0',
      monthly: '$20-50/hour',
      annual: '$20,800-52,000',
      realAIMonthly: '$99 per agent',
      realAIAnnual: '$990 per agent',
      realAISetup: '$0',
      competitor: {
        setup: '$0-$500 (training)',
        monthly: '$20-50/hour',
        annual: '$20,800-52,000 (20 hrs/week)',
        items: [
          { name: 'Hourly rate', cost: '$20-50/hour' },
          { name: 'Training costs', cost: '$500-1,000' },
          { name: 'Management time', cost: '2-5 hrs/week' },
          { name: 'Benefits/taxes', cost: 'If W2 employee' }
        ],
        total: '$20,800-52,000 annually (20 hrs/week)'
      },
      realai: {
        setup: '$0',
        monthly: '$99 per agent',
        annual: '$990 per agent',
        items: [
          { name: 'All-inclusive monthly fee', cost: '$99 per agent' },
          { name: 'No hourly limits', cost: 'Unlimited usage' },
          { name: 'No training required', cost: '$0' },
          { name: 'No management overhead', cost: '$0' }
        ],
        total: '$990 per agent annually, $0 setup'
      },
      savings: {
        setup: 'Up to $1,000',
        monthly: '$3,400-$4,250',
        annual: '$19,810-$51,010',
        percent: '95%+'
      }
    },
    testimonials: [
      {
        quote: 'We replaced our three virtual assistants with RealAI and saved over $100,000 annually while improving our response times dramatically.',
        name: 'Robert Chen',
        title: 'Broker/Owner',
        company: 'Premier Properties',
        author: 'Robert Chen, Broker/Owner'
      },
      {
        quote: 'The biggest difference is consistency. Our virtual assistants had good days and bad days. RealAI is reliable 24/7.',
        name: 'Stephanie Williams',
        title: 'Team Leader',
        company: 'Williams Group Realty',
        author: 'Stephanie Williams, Team Leader'
      },
      {
        quote: 'I don\'t have to worry about training, sick days, or turnover anymore. RealAI is always there and always ready.',
        name: 'Michael Rodriguez',
        title: 'Managing Broker',
        company: 'Coastal Realty Partners',
        author: 'Michael Rodriguez, Managing Broker'
      }
    ],
    faq: [
      {
        question: 'Can RealAI really replace a human virtual assistant?',
        answer: 'For most routine tasks, yes. RealAI excels at lead qualification, inquiry responses, follow-ups, and scheduling. For complex, nuanced situations, you may still want human involvement, but RealAI handles 90% of daily tasks.'
      },
      {
        question: 'How much can I save by switching from VAs to RealAI?',
        answer: 'Most brokerages save 80-95% on their administrative support costs. A typical VA working 20 hours per week costs $20,800-$52,000 annually, while RealAI costs just $990 per year per agent.'
      },
      {
        question: 'What\'s the main advantage of RealAI over virtual assistants?',
        answer: 'Beyond cost savings, the biggest advantages are 24/7 availability, instant response times, perfect consistency, and infinite scalability. RealAI never sleeps, takes vacation, or calls in sick.'
      },
      {
        question: 'Is there a learning curve when switching from VAs to RealAI?',
        answer: 'RealAI is designed to be intuitive and requires minimal training. Most agents are fully operational within 1-2 days, compared to weeks or months of training for new virtual assistants.'
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
        return {
          container: 'py-8 md:py-12 lg:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white',
          iconColor: 'text-blue-600',
          bgColor: 'bg-blue-50',
          ctaBg: 'bg-blue-600',
          ctaText: 'text-blue-600',
          costBg: 'bg-blue-600'
        };
    }
  };

  const classes = getStaticClasses('hero');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 text-white px-4 py-2 hover:bg-blue-600">Real Estate AI Comparison</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI Assistants vs. Human Virtual Assistants
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Why AI is changing the game for real estate professionals
            </p>
          </div>
        </div>
      </section>

      {/* The Problem with Human VAs */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-slate-900">The Problem with Human Virtual Assistants</h2>
              <p className="text-xl text-slate-600">
                Virtual assistants provide valuable human support, but their limitations in availability, scalability, and consistency 
                create significant challenges for growing real estate businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <AlertTriangle className="w-6 h-6" />
                    Virtual Assistant Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Limited to working hours only (not 24/7)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">High ongoing costs (hourly rates add up)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-blue-700">Human inconsistency and turnover challenges</span>
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
                    <span>Available 24/7/365 with no time off or sick days</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Flat monthly rate regardless of usage volume</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Perfectly consistent responses at scale</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">RealAI vs {competitor.name}: Feature Comparison</h2>
            
            <Card className="shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-6 text-lg font-semibold text-slate-900">Feature</th>
                      <th className="text-center p-6 text-lg font-semibold text-slate-900">RealAI</th>
                      <th className="text-center p-6 text-lg font-semibold text-slate-900">{competitor.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitor.features.map((feature, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-6 border-t border-slate-200">
                          <div className="flex items-start gap-3">
                            {iconMap[feature.icon as keyof typeof iconMap] && (
                              React.createElement(iconMap[feature.icon as keyof typeof iconMap], {
                                className: "h-5 w-5 text-blue-500 mt-0.5"
                              })
                            )}
                            <div>
                              <p className="font-medium text-slate-900">{feature.name}</p>
                              <p className="text-sm text-slate-600">{feature.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center p-6 border-t border-slate-200">
                          {feature.realAI ? (
                            <CheckCircle className="text-green-600 w-6 h-6 mx-auto" />
                          ) : (
                            <X className="text-red-500 w-6 h-6 mx-auto" />
                          )}
                        </td>
                        <td className="text-center p-6 border-t border-slate-200">
                          {feature.competitor ? (
                            <CheckCircle className="text-green-600 w-6 h-6 mx-auto" />
                          ) : (
                            <X className="text-red-500 w-6 h-6 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
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

      {/* FAQ Section */}
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
