import React from 'react';
import { Check, X, Clock, Users, TrendingUp, Shield, Sparkles, Calculator, Phone, DollarSign, Calendar } from 'lucide-react';
import { Footer } from '@/components/footer';
import { CTASection } from '@/components/cta-section';
import { competitorData } from '../realai-vs-[competitor]/page';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const competitor = competitorData['structurely'];
  
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
  const competitor = competitorData['structurely'];
  
  if (!competitor) {
    return (
      <div className="min-h-screen bg-white p-8">
        <h1 className="text-3xl font-bold">Error: Competitor data not found</h1>
        <p>Could not find data for Structurely comparison.</p>
      </div>
    );
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
