import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { CheckCircle } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discovery Questionnaire - Start Your AI Journey',
  description: 'Tell us about your brokerage needs and goals. Complete our discovery form to receive a customized AI implementation strategy designed specifically for your real estate business.',
  openGraph: {
    title: 'Discovery Questionnaire - Start Your AI Journey | RealAI',
    description: 'Ready to transform your brokerage? Complete our discovery form to receive a customized AI implementation strategy designed for your business.',
    url: 'https://realai.com/discovery',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI Discovery - Start Your AI Journey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discovery Questionnaire - Start Your AI Journey | RealAI',
    description: 'Transform your brokerage with AI. Where real estate meets real intelligence.',
  },
}

export default function DiscoveryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 text-white px-4 py-2 hover:bg-blue-600">
              Discovery Questionnaire
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Build Your <span className="text-blue-400">AI Strategy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300 leading-relaxed">
              Where real estate meets real intelligence. Help us understand your brokerage needs so we can design the perfect AI solution for your team.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Discovery Questionnaire</CardTitle>
                <p className="text-slate-600 text-center">
                  Please provide the following information to help us understand your needs and goals.
                </p>
              </CardHeader>
              <CardContent>
                <form action="https://formspree.io/f/mzzrlpgo" method="POST" className="space-y-6">
                  {/* Agency Owner Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                      Agency Owner Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="agencyOwnerName">Agency Owner Name *</Label>
                        <Input
                          id="agencyOwnerName"
                          name="agencyOwnerName"
                          placeholder="Enter agency owner name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="agencyName">Agency Name *</Label>
                        <Input
                          id="agencyName"
                          name="agencyName"
                          placeholder="Enter agency name"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="ownerPhone">Phone Number *</Label>
                        <Input
                          id="ownerPhone"
                          name="ownerPhone"
                          type="tel"
                          placeholder="Enter phone number"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="ownerEmail">Email Address *</Label>
                        <Input
                          id="ownerEmail"
                          name="ownerEmail"
                          type="email"
                          placeholder="Enter email address"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Agent Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                      Agent Information (if applicable)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="agentName">Agent Name</Label>
                        <Input
                          id="agentName"
                          name="agentName"
                          placeholder="Enter agent name"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="agentPhone">Agent Phone</Label>
                        <Input
                          id="agentPhone"
                          name="agentPhone"
                          type="tel"
                          placeholder="Enter agent phone"
                        />
                      </div>
                      <div>
                        <Label htmlFor="agentEmail">Agent Email</Label>
                        <Input
                          id="agentEmail"
                          name="agentEmail"
                          type="email"
                          placeholder="Enter agent email"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Agency Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                      Agency Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="agencySize">Agency Size *</Label>
                        <select name="agencySize" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Select agency size</option>
                          <option value="1-5">1-5 agents</option>
                          <option value="6-15">6-15 agents</option>
                          <option value="16-50">16-50 agents</option>
                          <option value="51-100">51-100 agents</option>
                          <option value="100+">100+ agents</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="agencyLocation">Agency Location(s) *</Label>
                        <Input
                          id="agencyLocation"
                          name="agencyLocation"
                          placeholder="Enter office locations"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Current Technology */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                      Current Technology
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="crmSystem">CRM System Used *</Label>
                        <Input
                          id="crmSystem"
                          name="crmSystem"
                          placeholder="e.g., Follow Up Boss, Chime, KvCore"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="mlsIntegration">MLS Integration Status *</Label>
                        <select name="mlsIntegration" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Select MLS status</option>
                          <option value="fully-integrated">Fully Integrated</option>
                          <option value="partially-integrated">Partially Integrated</option>
                          <option value="not-integrated">Not Integrated</option>
                          <option value="unsure">Unsure</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="currentAITools">Current AI Tools Used</Label>
                      <Textarea
                        id="currentAITools"
                        name="currentAITools"
                        placeholder="List any AI tools or automation systems currently in use"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* AI Requirements */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                      AI Requirements & Goals
                    </h3>
                    <div>
                      <Label htmlFor="desiredAIFunctions">Desired AI Functions *</Label>
                      <Textarea
                        id="desiredAIFunctions"
                        name="desiredAIFunctions"
                        placeholder="e.g., lead generation, CRM automation, marketing, transaction management"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="challenges">Current Challenges *</Label>
                      <Textarea
                        id="challenges"
                        name="challenges"
                        placeholder="Describe current pain points in your agency operations"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="goals">Goals & Objectives *</Label>
                      <Textarea
                        id="goals"
                        name="goals"
                        placeholder="What do you hope to achieve with AI implementation?"
                        rows={3}
                        required
                      />
                    </div>
                  </div>

                  {/* Implementation Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                      Implementation Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="timeline">Implementation Timeline *</Label>
                        <select name="timeline" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (within 30 days)</option>
                          <option value="1-3months">1-3 months</option>
                          <option value="3-6months">3-6 months</option>
                          <option value="6-12months">6-12 months</option>
                          <option value="12+months">12+ months</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget Range *</Label>
                        <select name="budget" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Select budget range</option>
                          <option value="under-15k">Under $15,000</option>
                          <option value="15k-25k">$15,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k+">$100,000+</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">
                      Additional Information
                    </h3>
                    <div>
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        placeholder="Any additional comments, specific requirements, or questions"
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 border border-transparent text-lg px-8 py-4"
                    >
                      Submit Discovery Form
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-xl">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Review & Analysis</h4>
                      <p className="text-slate-600">We'll review your responses and analyze your specific needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Custom Strategy Session</h4>
                      <p className="text-slate-600">We'll schedule a personalized strategy call within 24-48 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Tailored Proposal</h4>
                      <p className="text-slate-600">Receive a customized AI implementation proposal designed for your brokerage.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  )
}