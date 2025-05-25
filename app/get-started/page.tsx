import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Clock, Zap, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started - Choose Your AI Journey | RealAI',
  description: 'Three ways to get started with RealAI. Quick lead capture, free 20-minute consultation, or fast-track paid deep dive. Pick the path that fits your timeline and needs.',
  openGraph: {
    title: 'Get Started - Choose Your AI Journey | RealAI',
    description: 'Transform your real estate brokerage with AI. Three pathways to get started with professional AI deployment.',
    url: 'https://realai.com/get-started',
    images: [
      {
        url: '/logo.png',
        width: 1000,
        height: 400,
        alt: 'RealAI Get Started - Choose Your AI Journey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Started - Choose Your AI Journey | RealAI',
    description: 'Transform your brokerage with AI. Where real estate meets real intelligence.',
  },
}

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="py-4 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="RealAI"
              width={1000}
              height={400}
              className="h-12 w-auto"
            />
          </Link>
          <a href="/" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
            ← Back to RealAI.com
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-blue-600">AI Journey</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Three ways to get started with RealAI. Pick the path that fits your timeline and needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>No Long-Term Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Professional Deployment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Three Paths */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Path 1: Quick Lead Capture */}
              <Card className="relative border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center pb-4">
                  <Badge className="mb-3 bg-green-100 text-green-800 w-fit mx-auto">
                    <Clock className="w-3 h-3 mr-1" />
                    2 Minutes
                  </Badge>
                  <CardTitle className="text-xl mb-2">Get Your Custom AI Strategy</CardTitle>
                  <p className="text-slate-600 text-sm">
                    Quick assessment to receive a personalized AI roadmap for your brokerage
                  </p>
                </CardHeader>
                <CardContent>
                  <form action="https://formspree.io/f/mjkwqopq" method="POST" className="space-y-4">
                    <input type="hidden" name="path" value="quick-capture" />
                    
                    <div className="space-y-2">
                      <Label htmlFor="name1">Your Name *</Label>
                      <Input
                        id="name1"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email1">Email Address *</Label>
                      <Input
                        id="email1"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone1">Phone Number *</Label>
                      <Input
                        id="phone1"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="brokerageName1">Brokerage Name *</Label>
                      <Input
                        id="brokerageName1"
                        name="brokerageName"
                        placeholder="Enter brokerage name"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="brokerageSize1">Brokerage Size *</Label>
                      <select 
                        id="brokerageSize1"
                        name="brokerageSize" 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select brokerage size</option>
                        <option value="1-5">1-5 agents</option>
                        <option value="6-15">6-15 agents</option>
                        <option value="16-50">16-50 agents</option>
                        <option value="51-100">51-100 agents</option>
                        <option value="100+">100+ agents</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentChallenge1">Biggest Current Challenge *</Label>
                      <select 
                        id="currentChallenge1"
                        name="currentChallenge" 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select your biggest challenge</option>
                        <option value="Lead follow-up taking too long">Lead follow-up taking too long</option>
                        <option value="Too much manual admin work">Too much manual admin work</option>
                        <option value="Inconsistent marketing efforts">Inconsistent marketing efforts</option>
                        <option value="Poor CRM organization">Poor CRM organization</option>
                        <option value="Agent productivity issues">Agent productivity issues</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 border border-transparent text-lg py-6"
                    >
                      Send My Free AI Roadmap
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Path 2: Free Consultation */}
              <Card className="relative border-2 border-blue-300 hover:border-blue-400 transition-colors">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                </div>
                <CardHeader className="text-center pb-4">
                  <Badge className="mb-3 bg-blue-100 text-blue-800 w-fit mx-auto">
                    <Star className="w-3 h-3 mr-1" />
                    Free Call
                  </Badge>
                  <CardTitle className="text-xl mb-2">Book Your Free Discovery Call</CardTitle>
                  <p className="text-slate-600 text-sm">
                    20-minute strategy session to discuss your specific needs and AI opportunities
                  </p>
                </CardHeader>
                <CardContent>
                  <form action="https://formspree.io/f/mjkwqopq" method="POST" className="space-y-4">
                    <input type="hidden" name="path" value="free-consultation" />
                    
                    <div className="space-y-2">
                      <Label htmlFor="name2">Your Name *</Label>
                      <Input
                        id="name2"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email2">Email Address *</Label>
                      <Input
                        id="email2"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone2">Phone Number *</Label>
                      <Input
                        id="phone2"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="brokerageName2">Brokerage Name *</Label>
                      <Input
                        id="brokerageName2"
                        name="brokerageName"
                        placeholder="Enter brokerage name"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="primaryGoal2">Primary Goal for AI Implementation *</Label>
                      <select 
                        id="primaryGoal2"
                        name="primaryGoal" 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select your primary goal</option>
                        <option value="Automate lead follow-up">Automate lead follow-up</option>
                        <option value="Streamline transaction management">Streamline transaction management</option>
                        <option value="Improve marketing efficiency">Improve marketing efficiency</option>
                        <option value="Scale operations">Scale operations</option>
                        <option value="Reduce admin burden">Reduce admin burden</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline2">When do you want to start? *</Label>
                      <select 
                        id="timeline2"
                        name="timeline" 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select timeline</option>
                        <option value="Immediate (within 30 days)">Immediate (within 30 days)</option>
                        <option value="1-3 months">1-3 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentCRM2">Current CRM System</Label>
                      <Input
                        id="currentCRM2"
                        name="currentCRM"
                        placeholder="e.g., Follow Up Boss, Chime, KvCore, or None"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="questions2">Questions for our call</Label>
                      <Textarea
                        id="questions2"
                        name="questions"
                        placeholder="Any specific questions or areas you'd like to discuss?"
                        rows={3}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 text-white hover:bg-white hover:text-blue-600 hover:border-blue-600 border border-transparent text-lg py-6"
                    >
                      Schedule My Free Call
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Path 3: Paid Deep Dive */}
              <Card className="relative border-2 border-amber-300 hover:border-amber-400 transition-colors">
                <CardHeader className="text-center pb-4">
                  <Badge className="mb-3 bg-amber-100 text-amber-800 w-fit mx-auto">
                    <Zap className="w-3 h-3 mr-1" />
                    Fast Track
                  </Badge>
                  <CardTitle className="text-xl mb-2">Fast-Track Your AI Implementation</CardTitle>
                  <p className="text-slate-600 text-sm mb-2">
                    60-minute deep dive session with comprehensive assessment
                  </p>
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <p className="text-amber-800 font-semibold text-sm">$500 Applied to First Month</p>
                    <p className="text-amber-700 text-xs">Get your first month free after signup</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <form action="https://formspree.io/f/mjkwqopq" method="POST" className="space-y-4">
                    <input type="hidden" name="path" value="paid-deep-dive" />
                    
                    <div className="space-y-2">
                      <Label htmlFor="name3">Your Name *</Label>
                      <Input
                        id="name3"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email3">Email Address *</Label>
                      <Input
                        id="email3"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone3">Phone Number *</Label>
                      <Input
                        id="phone3"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="brokerageName3">Brokerage Name *</Label>
                      <Input
                        id="brokerageName3"
                        name="brokerageName"
                        placeholder="Enter brokerage name"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companySize3">Brokerage Size *</Label>
                      <select 
                        id="companySize3"
                        name="companySize" 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select brokerage size</option>
                        <option value="1-5">1-5 agents</option>
                        <option value="6-15">6-15 agents</option>
                        <option value="16-50">16-50 agents</option>
                        <option value="51-100">51-100 agents</option>
                        <option value="100+">100+ agents</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentTech3">Current Technology Stack</Label>
                      <Textarea
                        id="currentTech3"
                        name="currentTech"
                        placeholder="List current CRM, MLS integration, marketing tools, etc."
                        rows={2}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specificChallenges3">Specific Operational Challenges *</Label>
                      <Textarea
                        id="specificChallenges3"
                        name="specificChallenges"
                        placeholder="Describe current pain points in your agency operations"
                        rows={2}
                        required
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="implementationGoals3">AI Implementation Goals *</Label>
                      <Textarea
                        id="implementationGoals3"
                        name="implementationGoals"
                        placeholder="What do you hope to achieve with AI implementation?"
                        rows={2}
                        required
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budgetRange3">Investment Range *</Label>
                      <select 
                        id="budgetRange3"
                        name="budgetRange" 
                        required 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select investment range</option>
                        <option value="$15k-25k">$15k-25k</option>
                        <option value="$25k-50k">$25k-50k</option>
                        <option value="$50k-100k">$50k-100k</option>
                        <option value="$100k+">$100k+</option>
                      </select>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-amber-600 text-white hover:bg-white hover:text-amber-600 hover:border-amber-600 border border-transparent text-lg py-6"
                    >
                      Book & Pay for Deep Dive ($500)
                    </Button>
                  </form>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </main>

      {/* Trust Signals */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-6 text-slate-800">Why Brokerages Choose RealAI</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                <h4 className="font-semibold mb-1">20+ Years Real Estate Expertise</h4>
                <p className="text-slate-600">Domain-specific AI that understands your business</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                <h4 className="font-semibold mb-1">Professional Deployment</h4>
                <p className="text-slate-600">White-glove service with brand protection</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                <h4 className="font-semibold mb-1">Complete Integration</h4>
                <p className="text-slate-600">Works with your existing CRM and tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <div className="py-8 text-center text-sm text-slate-600 border-t">
        Questions? Email us at{' '}
        <a href="mailto:contact@realai.com" className="text-blue-600 hover:underline">
          contact@realai.com
        </a>
      </div>
    </div>
  )
}
