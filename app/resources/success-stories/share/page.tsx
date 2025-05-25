'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function ShareStoryPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://formspree.io/f/mzzrlazz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your story. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <div className="pt-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Your success story has been submitted. Our team will review it and may reach out for additional details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/resources/success-stories">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Success Stories
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link href="/resources/success-stories" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Success Stories
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Share Your Success Story
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Help other real estate professionals by sharing how AI has transformed your business. 
              Your story could inspire the next breakthrough.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Business Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Information</h3>
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Brokerage Name *
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your role</option>
                      <option value="broker_owner">Broker/Owner</option>
                      <option value="agent">Real Estate Agent</option>
                      <option value="team_lead">Team Lead</option>
                      <option value="operations_manager">Operations Manager</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="company_size" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Size *
                    </label>
                    <select
                      id="company_size"
                      name="company_size"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select size</option>
                      <option value="solo">Solo Agent</option>
                      <option value="small_team">Small Team (2-10)</option>
                      <option value="medium_brokerage">Medium Brokerage (11-50)</option>
                      <option value="large_brokerage">Large Brokerage (51-200)</option>
                      <option value="enterprise">Enterprise (200+)</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location (City, State) *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    placeholder="e.g., Austin, TX"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Success Story Details */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Success Story</h3>
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1">
                    What challenges were you facing before implementing AI? *
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    required
                    rows={4}
                    placeholder="Describe the specific problems or inefficiencies you were experiencing..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="solution" className="block text-sm font-medium text-gray-700 mb-1">
                    How did RealAI help solve these challenges? *
                  </label>
                  <textarea
                    id="solution"
                    name="solution"
                    required
                    rows={4}
                    placeholder="Describe which RealAI features you implemented and how they addressed your challenges..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="results" className="block text-sm font-medium text-gray-700 mb-1">
                    What measurable results have you achieved? *
                  </label>
                  <textarea
                    id="results"
                    name="results"
                    required
                    rows={4}
                    placeholder="Include specific metrics like time savings, increased conversions, revenue growth, etc..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">
                    Would you like to provide a testimonial quote?
                  </label>
                  <textarea
                    id="testimonial"
                    name="testimonial"
                    rows={3}
                    placeholder="A brief quote we could use in marketing materials (optional)..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Implementation Timeline */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Implementation Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="implementation_date" className="block text-sm font-medium text-gray-700 mb-1">
                      When did you start using RealAI?
                    </label>
                    <input
                      type="month"
                      id="implementation_date"
                      name="implementation_date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="implementation_speed" className="block text-sm font-medium text-gray-700 mb-1">
                      How quickly did you see results?
                    </label>
                    <select
                      id="implementation_speed"
                      name="implementation_speed"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select timeframe</option>
                      <option value="immediately">Immediately (within days)</option>
                      <option value="within_month">Within 1 month</option>
                      <option value="within_quarter">Within 3 months</option>
                      <option value="within_six_months">Within 6 months</option>
                      <option value="longer">Longer than 6 months</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Permissions */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Permissions & Preferences</h3>
                <div className="space-y-3">
                  <label className="flex items-start">
                    <input type="checkbox" name="permission_marketing" className="mt-1 mr-3" />
                    <span className="text-sm text-gray-700">
                      I give permission for RealAI to use my story in marketing materials (website, case studies, presentations)
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" name="permission_contact" className="mt-1 mr-3" />
                    <span className="text-sm text-gray-700">
                      I'm open to being contacted by potential RealAI customers who want to learn more about my experience
                    </span>
                  </label>
                  <label className="flex items-start">
                    <input type="checkbox" name="permission_follow_up" className="mt-1 mr-3" />
                    <span className="text-sm text-gray-700">
                      I'd like RealAI to follow up with me about featuring my story in more detail
                    </span>
                  </label>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label htmlFor="additional_info" className="block text-sm font-medium text-gray-700 mb-1">
                  Any additional information you'd like to share?
                </label>
                <textarea
                  id="additional_info"
                  name="additional_info"
                  rows={3}
                  placeholder="Anything else we should know about your experience..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? 'Submitting...' : 'Share My Story'}
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/resources/success-stories">Cancel</Link>
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  )
}
