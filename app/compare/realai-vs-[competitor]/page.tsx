import React from 'react';
import { notFound } from 'next/navigation';
import { Check, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import type { Metadata, ResolvingMetadata } from 'next';

interface CompetitorData {
  name: string;
  description: string;
  weakness: string;
  type: 'direct' | 'adjacent' | 'category';
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  features: {
    [key: string]: {
      realai: boolean | string;
      competitor: boolean | string;
    };
  };
  differentiators: {
    title: string;
    description: string;
    icon: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    company: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  costs?: {
    competitor: {
      items: { name: string; cost: string }[];
      total: string;
    };
    realai: {
      items: { name: string; cost: string }[];
      total: string;
    };
    savings: string;
  };
}

// Export the competitor data for use in other files
export const competitorData: Record<string, CompetitorData> = {
  'cinc': {
    name: 'CINC',
    description: 'AI-powered CRM with lead generation, featuring their AI assistant Alex',
    weakness: 'generic AI responses that don\'t match your brokerage\'s voice',
    type: 'direct',
    hero: {
      title: 'Automate Your Brokerage Without Losing Your Brand Voice',
      subtitle: 'Unlike CINC, RealAI trains AI agents to match YOUR brokerage\'s unique voice and workflows',
      cta1: 'Book a Demo',
      cta2: 'Download Comparison Guide'
    },
    features: {
      'Custom AI Voice Training': { realai: true, competitor: false },
      'Full CRM Integration': { realai: true, competitor: true },
      'Document Automation': { realai: true, competitor: false },
      'Content Generation': { realai: true, competitor: 'Limited' },
      'White-Glove Implementation': { realai: true, competitor: false },
      'Multi-Agent Collaboration': { realai: true, competitor: false },
      '24/7 Support': { realai: true, competitor: 'Business Hours Only' },
      'Pricing Structure': { realai: 'All-inclusive', competitor: '$1,500/month + AI add-ons' }
    },
    differentiators: [
      {
        title: 'Your Voice, Amplified',
        description: 'While CINC offers generic AI responses that don\'t match your brokerage\'s voice, RealAI\'s custom voice training ensures every interaction sounds exactly like your brokerage. No generic responses, no brand disconnect - just your unique voice at scale.',
        icon: 'Sparkles'
      },
      {
        title: 'Complete Workflow Coverage',
        description: 'Don\'t settle for point solutions. RealAI handles everything from initial lead contact to closing documentation, creating a seamless experience that CINC simply can\'t match.',
        icon: 'Shield'
      },
      {
        title: 'White-Glove Service',
        description: 'Skip the DIY headaches. Our team handles your entire implementation, training, and optimization - getting you results in days, not months like typical CINC deployments.',
        icon: 'Users'
      }
    ],
    testimonials: [
      {
        quote: 'Switching from CINC to RealAI cut our response time from hours to minutes. Our agents love having AI assistants that actually sound like us.',
        author: 'Sarah Chen',
        company: 'Pacific Realty Group'
      },
      {
        quote: 'We saved $120K annually by replacing CINC\'s piecemeal approach with RealAI. Unlike CINC, it handles our entire workflow.',
        author: 'Mike Rodriguez',
        company: 'Elite Properties Network'
      },
      {
        quote: 'The white-glove implementation made all the difference. We were up and running in a week - CINC quoted us 3 months.',
        author: 'Jennifer Walsh',
        company: 'Metro Real Estate Solutions'
      }
    ],
    faq: [
      {
        question: 'What if I\'m locked in a contract with CINC?',
        answer: 'We handle the entire migration process for you, including importing your CINC data. Most clients report being fully operational within 7 days, and we can work around your existing contract timing.'
      },
      {
        question: 'How hard is it to migrate from CINC?',
        answer: 'Our team manages the technical transition while you keep working. We import all your data, train your AI agents, and ensure everything works perfectly before going live.'
      },
      {
        question: 'Will my agents actually use it?',
        answer: 'Yes! Unlike CINC\'s generic approach, RealAI sounds like your brokerage, making adoption natural. Plus, agents see immediate time savings, which drives adoption.'
      }
    ],
    costs: {
      competitor: {
        items: [
          { name: 'Base platform', cost: '$1,500/month' },
          { name: 'Alex AI assistant (add-on)', cost: 'Extra fee' },
          { name: 'Implementation time', cost: '3+ months DIY' }
        ],
        total: '$20,000+'
      },
      realai: {
        items: [
          { name: 'All-inclusive platform', cost: '$1,200/month' },
          { name: 'Custom AI training', cost: 'Included' },
          { name: 'White-glove implementation', cost: '7 days' }
        ],
        total: '$14,400'
      },
      savings: 'Save $5,600+ annually'
    }
  },
  'structurely': {
    name: 'Structurely',
    description: 'AI-powered lead qualification and nurturing platform',
    weakness: 'one-size-fits-all conversations that feel robotic',
    type: 'direct',
    hero: {
      title: 'AI Conversations That Actually Convert',
      subtitle: 'Unlike Structurely\'s one-size-fits-all conversations that feel robotic, RealAI creates personalized interactions that match your brokerage\'s unique approach',
      cta1: 'Book a Demo',
      cta2: 'Compare Solutions'
    },
    features: {
      'Custom Conversation Training': { realai: true, competitor: false },
      'Lead Qualification': { realai: true, competitor: true },
      'Document Generation': { realai: true, competitor: false },
      'Listing Content Creation': { realai: true, competitor: false },
      'Multi-Channel Communication': { realai: true, competitor: 'Limited' },
      'Voice & Personality Match': { realai: true, competitor: false },
      'Complete Workflow Management': { realai: true, competitor: false },
      'White-Glove Setup': { realai: true, competitor: 'Self-service' }
    },
    differentiators: [
      {
        title: 'Natural Conversations',
        description: 'While Structurely relies on robotic scripts, RealAI creates authentic conversations that match your brokerage\'s personality. Prospects feel like they\'re talking to a real member of your team.',
        icon: 'Sparkles'
      },
      {
        title: 'Beyond Lead Qualification',
        description: 'Structurely stops at lead qualification. RealAI handles your entire workflow - from first contact through closing documentation, creating a seamless client experience.',
        icon: 'Shield'
      },
      {
        title: 'True Personalization',
        description: 'No more one-size-fits-all scripts. RealAI learns your unique approach to real estate and applies it consistently across all client interactions.',
        icon: 'Users'
      }
    ],
    testimonials: [
      {
        quote: 'Structurely\'s conversations were so obviously robotic that prospects would hang up. RealAI\'s natural interactions increased our phone qualification rate by 60%.',
        author: 'David Kim',
        company: 'Coastal Realty Partners'
      },
      {
        quote: 'We loved Structurely\'s lead qualification but needed more. RealAI gives us that plus listing creation, document prep, and ongoing nurturing.',
        author: 'Maria Santos',
        company: 'Premier Home Group'
      },
      {
        quote: 'The difference is night and day. RealAI conversations sound like our actual agents - prospects can\'t tell it\'s AI, which is exactly what we wanted.',
        author: 'Tom Anderson',
        company: 'Anderson Real Estate'
      }
    ],
    faq: [
      {
        question: 'Can you integrate with our existing Structurely data?',
        answer: 'Yes! We\'ll import all your lead data and conversation history, then enhance it with our advanced conversation training to create more natural interactions.'
      },
      {
        question: 'How do you make conversations feel more natural than Structurely?',
        answer: 'We train AI agents on your specific communication style, market knowledge, and brand personality - not generic scripts. The result is conversations that truly sound like your team.'
      },
      {
        question: 'What about the phone features Structurely offers?',
        answer: 'RealAI includes advanced phone capabilities plus much more - email, text, social media, and complete workflow automation that Structurely can\'t provide.'
      }
    ]
  },
  'virtual-assistants': {
    name: 'Virtual Assistants',
    description: 'Human virtual assistant services',
    weakness: 'require extensive training, management, and still only work human hours',
    type: 'category',
    hero: {
      title: 'RealAI vs Hiring Virtual Assistants: The Modern Choice',
      subtitle: 'Get 24/7 AI agents that never call in sick, never need training, and sound exactly like your brokerage',
      cta1: 'Calculate Your Savings',
      cta2: 'See Case Studies'
    },
    features: {
      'Availability': { realai: '24/7', competitor: '40 hours/week' },
      'Training Required': { realai: 'None', competitor: '4-6 weeks' },
      'Management Overhead': { realai: 'None', competitor: '10+ hours/week' },
      'Sick Days / Vacation': { realai: 'Never', competitor: 'Yes' },
      'Consistency': { realai: 'Perfect', competitor: 'Variable' },
      'Scalability': { realai: 'Instant', competitor: 'Hiring cycle' },
      'Brand Voice Match': { realai: 'Perfect', competitor: 'Inconsistent' },
      'Cost Predictability': { realai: 'Fixed', competitor: 'Variable + benefits' }
    },
    differentiators: [
      {
        title: 'Always Available',
        description: 'Virtual assistants work 40 hours per week max and take sick days. RealAI works 168 hours per week, never takes a break, and maintains perfect consistency.',
        icon: 'Clock'
      },
      {
        title: 'Zero Management',
        description: 'No more managing VA schedules, training, or quality control. RealAI handles everything automatically while you focus on growing your business.',
        icon: 'Shield'
      },
      {
        title: 'Instant Scaling',
        description: 'Need more capacity? Add unlimited AI agents instantly. No hiring, training, or onboarding time - just immediate, perfectly trained assistance.',
        icon: 'TrendingUp'
      }
    ],
    testimonials: [
      {
        quote: 'We replaced 3 VAs with RealAI and saved $8,000 per month while getting better, more consistent work. No more managing schedules or quality issues.',
        author: 'Jennifer Martinez',
        company: 'Sunshine Realty Group'
      },
      {
        quote: 'Virtual assistants were a constant headache - training, turnover, inconsistent quality. RealAI eliminated all those problems while working 24/7.',
        author: 'Robert Kim',
        company: 'Premier Properties Network'
      },
      {
        quote: 'The ROI was immediate. We went from spending $120K annually on VAs to $14K with RealAI, plus we got better results and zero management overhead.',
        author: 'Lisa Thompson',
        company: 'Metro Realty Solutions'
      }
    ],
    faq: [
      {
        question: 'What happens to our existing VAs?',
        answer: 'Many brokerages transition gradually, moving VAs to higher-value tasks like client relations while AI handles routine work. Some use the cost savings to invest in agent training or business growth.'
      },
      {
        question: 'Can AI really match the quality of a trained VA?',
        answer: 'RealAI often exceeds VA quality because it never has bad days, never forgets training, and maintains perfect consistency. Plus, it works 24/7 without breaks.'
      },
      {
        question: 'How do we handle the transition period?',
        answer: 'We provide white-glove implementation in just 7 days. You can run both systems in parallel during the transition, ensuring zero disruption to your business.'
      }
    ],
    costs: {
      competitor: {
        items: [
          { name: 'Full-time VA salary', cost: '$2,000-3,000/month' },
          { name: 'Training & onboarding time', cost: '$1,500 value' },
          { name: 'Management overhead', cost: '10 hours/week = $2,000/month' },
          { name: 'Benefits & HR costs', cost: '$500/month' }
        ],
        total: '$66,000+/year'
      },
      realai: {
        items: [
          { name: 'All-inclusive platform', cost: '$1,200/month' },
          { name: 'Implementation & training', cost: 'Included' },
          { name: 'Management time', cost: 'None required' },
          { name: 'Benefits & HR', cost: '$0' }
        ],
        total: '$14,400/year'
      },
      savings: 'Save $51,600+ annually'
    }
  }
};

const iconMap = {
  'Sparkles': Sparkles,
  'Shield': Shield,
  'Users': Users,
  'Clock': Clock,
  'TrendingUp': TrendingUp,
  'Phone': Phone,
  'DollarSign': DollarSign,
  'Calendar': Calendar
};

export async function generateMetadata(
  { params }: { params: { competitor: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Read route params
  const id = params.competitor;
  
  // Find the competitor data
  const competitor = competitorData[id];
  
  if (!competitor) {
    return {
      title: 'Competitor Not Found',
    };
  }
  
  return {
    title: `RealAI vs ${competitor.name} - Why Choose RealAI`,
    description: `Compare RealAI's specialized real estate AI solutions against ${competitor.name}. Discover why domain expertise and custom implementation matter for brokerages.`,
    openGraph: {
      title: `RealAI vs ${competitor.name} - Why Choose RealAI`,
      description: `Professional-grade AI vs ${competitor.description}. Why domain expertise and custom implementation matter for real estate brokerages.`,
    },
  };
}

export default function CompetitorPage({ params }: { params: { competitor: string } }) {
  const competitor = competitorData[params.competitor];
  
  if (!competitor) {
    notFound();
  }

  const getStaticClasses = (type: string) => {
    switch (type) {
      case 'direct':
        return {
          heroGradient: 'bg-gradient-to-b from-blue-600 to-blue-700',
          iconColor: 'text-blue-600',
          bgColor: 'bg-blue-50',
          ctaBg: 'bg-blue-600',
          ctaText: 'text-blue-600',
          costBg: 'bg-blue-600'
        };
      case 'adjacent':
        return {
          heroGradient: 'bg-gradient-to-b from-indigo-600 to-indigo-700',
          iconColor: 'text-indigo-600',
          bgColor: 'bg-indigo-50',
          ctaBg: 'bg-indigo-600',
          ctaText: 'text-indigo-600',
          costBg: 'bg-indigo-600'
        };
      case 'category':
        return {
          heroGradient: 'bg-gradient-to-b from-purple-600 to-purple-700',
          iconColor: 'text-purple-600',
          bgColor: 'bg-purple-50',
          ctaBg: 'bg-purple-600',
          ctaText: 'text-purple-600',
          costBg: 'bg-purple-600'
        };
      default:
        return {
          heroGradient: 'bg-gradient-to-b from-blue-600 to-blue-700',
          iconColor: 'text-blue-600',
          bgColor: 'bg-blue-50',
          ctaBg: 'bg-blue-600',
          ctaText: 'text-blue-600',
          costBg: 'bg-blue-600'
        };
    }
  };

  const classes = getStaticClasses(competitor.type);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`${classes.heroGradient} text-white py-20`}>
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {competitor.hero.title}
          </h1>
          <p className="text-xl mb-8 max-w-3xl">
            {competitor.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className={`bg-white ${classes.ctaText} px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition`}>
              {competitor.hero.cta1}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              {competitor.hero.cta2}
            </button>
          </div>
        </div>
      </section>

      {/* Quick Wins */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex items-center gap-3">
              <Clock className={`${classes.iconColor} w-6 h-6`} />
              <span className="text-lg">Save 20+ hours per agent weekly</span>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className={`${classes.iconColor} w-6 h-6`} />
              <span className="text-lg">3x faster response times</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className={`${classes.iconColor} w-6 h-6`} />
              <span className="text-lg">Scale without hiring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            RealAI vs {competitor.name}: Feature Comparison
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-6">Feature</th>
                  <th className="text-center p-6">RealAI</th>
                  <th className="text-center p-6">{competitor.name}</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(competitor.features).map(([feature, values], index) => (
                  <tr key={feature} className={index % 2 === 0 ? 'border-t' : 'border-t bg-gray-50'}>
                    <td className="p-6">{feature}</td>
                    <td className="text-center p-6">
                      {typeof values.realai === 'boolean' ? (
                        values.realai ? (
                          <Check className="text-green-600 w-6 h-6 mx-auto" />
                        ) : (
                          <X className="text-red-500 w-5 h-5 mx-auto" />
                        )
                      ) : (
                        values.realai
                      )}
                    </td>
                    <td className="text-center p-6">
                      {typeof values.competitor === 'boolean' ? (
                        values.competitor ? (
                          <Check className="text-green-600 w-6 h-6 mx-auto" />
                        ) : (
                          <X className="text-red-500 w-5 h-5 mx-auto" />
                        )
                      ) : (
                        values.competitor
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Makes RealAI Different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {competitor.differentiators.map((diff, index) => {
              const IconComponent = iconMap[diff.icon as keyof typeof iconMap] || Sparkles;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-xl">
                  <IconComponent className={`${classes.iconColor} w-12 h-12 mb-4`} />
                  <h3 className="text-xl font-bold mb-4">{diff.title}</h3>
                  <p className="text-gray-700">{diff.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cost Comparison (if available) */}
      {competitor.costs && (
        <section className={`py-16 ${classes.bgColor}`}>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">True Cost Comparison</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-600">{competitor.name}</h3>
                <ul className="space-y-4">
                  {competitor.costs.competitor.items.map((item, index) => (
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
              </div>
              <div className={`${classes.costBg} text-white p-8 rounded-xl shadow-lg`}>
                <h3 className="text-2xl font-bold mb-6">RealAI</h3>
                <ul className="space-y-4">
                  {competitor.costs.realai.items.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span className="font-bold">{item.cost}</span>
                    </li>
                  ))}
                  <li className="flex justify-between border-t pt-4">
                    <span className="font-bold">Total First Year</span>
                    <span className="font-bold text-green-300">{competitor.costs.realai.total}</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold">
                    {competitor.costs.savings}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Brokerages That Made the Switch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {competitor.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions About Switching
          </h2>
          <div className="space-y-6">
            {competitor.faq.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-lg mb-2">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 ${classes.ctaBg} text-white text-center`}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to See the RealAI Difference?
          </h2>
          <p className="text-xl mb-8">
            Join forward-thinking brokerages who've moved beyond {competitor.name}'s limitations
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className={`bg-white ${classes.ctaText} px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition`}>
              Book Your Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Download Comparison Guide
            </button>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}