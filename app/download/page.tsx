'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Download, CheckCircle, ArrowLeft, FileText, Users, Building2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Default content that can be overridden by URL parameters
const defaultContent = {
  title: "90-Day AI Implementation Guide",
  subtitle: "Your complete roadmap to successful AI transformation",
  description: "Get our comprehensive 90-day implementation guide that has helped 200+ brokerages successfully deploy AI automation systems.",
  benefits: [
    "Proven 4-phase deployment process",
    "Risk mitigation strategies and best practices", 
    "Expected ROI timeline and benchmarks",
    "Training and support framework",
    "Common challenges and solutions"
  ],
  fileName: "realai-implementation-guide.pdf",
  downloadUrl: "/downloads/realai-implementation-guide.pdf",
  backUrl: "/resources/implementation-guide",
  backText: "Back to Implementation Guide"
}

export default function DownloadPage() {
  const searchParams = useSearchParams()
  const [content, setContent] = useState(defaultContent)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    brokerageSize: '',
    currentChallenges: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Override defaults with URL parameters
    const urlContent = { ...defaultContent }
    
    const title = searchParams?.get('title')
    const subtitle = searchParams?.get('subtitle') 
    const description = searchParams?.get('description')
    const benefits = searchParams?.get('benefits')
    const fileName = searchParams?.get('fileName')
    const downloadUrl = searchParams?.get('downloadUrl')
    const backUrl = searchParams?.get('backUrl')
    const backText = searchParams?.get('backText')

    if (title) urlContent.title = title
    if (subtitle) urlContent.subtitle = subtitle
    if (description) urlContent.description = description
    if (benefits) {
      try {
        urlContent.benefits = JSON.parse(benefits)
      } catch (e) {
        // Keep default if parsing fails
      }
    }
    if (fileName) urlContent.fileName = fileName
    if (downloadUrl) urlContent.downloadUrl = downloadUrl
    if (backUrl) urlContent.backUrl = backUrl
    if (backText) urlContent.backText = backText

    setContent(urlContent)
  }, [searchParams])

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.consent) {
      alert('Please agree to receive communications to download the guide.')
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/xvgajqnv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          downloadTitle: content.title,
          downloadUrl: content.downloadUrl,
          source: 'Download Page'
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
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

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center shadow-xl">
              <CardHeader className="pb-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl mb-4">Thank You!</CardTitle>
                <p className="text-lg text-gray-600">
                  Your download is ready.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                  asChild
                >
                  <a href={content.downloadUrl} download={content.fileName}>
                    <Download className="mr-2 h-5 w-5" />
                    Download {content.title}
                  </a>
                </Button>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">
                    Want to discuss your specific implementation needs?
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/get-started">Schedule a Consultation</Link>
                  </Button>
                </div>

                <div className="pt-4">
                  <Button variant="ghost" asChild>
                    <Link href={content.backUrl}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      {content.backText}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

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

      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Back Link */}
            <div className="mb-8">
              <Button variant="ghost" asChild>
                <Link href={content.backUrl}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {content.backText}
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              
              {/* Left Side - Content */}
              <div>
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-4">
                    <FileText className="h-4 w-4" />
                    FREE DOWNLOAD
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {content.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    {content.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {content.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Inside:</h3>
                  <ul className="space-y-3">
                    {content.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Proof */}
                <div className="bg-white p-6 rounded-lg border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold">200+ Brokerages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-green-600" />
                      <span className="font-semibold">89% Success Rate</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Join leading brokerages who have successfully implemented AI automation systems.
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Get Your Free Guide</CardTitle>
                  <p className="text-center text-gray-600">
                    Fill out the form below to download instantly
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company/Brokerage *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="title">Your Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="brokerageSize">Brokerage Size</Label>
                      <Select onValueChange={(value) => handleInputChange('brokerageSize', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 agents</SelectItem>
                          <SelectItem value="11-50">11-50 agents</SelectItem>
                          <SelectItem value="51-100">51-100 agents</SelectItem>
                          <SelectItem value="101-500">101-500 agents</SelectItem>
                          <SelectItem value="500+">500+ agents</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="currentChallenges">Current Biggest Challenge (Optional)</Label>
                      <Textarea
                        id="currentChallenges"
                        value={formData.currentChallenges}
                        onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                        placeholder="e.g., Lead response time, agent productivity, CRM integration..."
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                      />
                      <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                        I agree to receive communications from RealAI about this download and related 
                        AI implementation resources. You can unsubscribe at any time.
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Download Now'}
                      <Download className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

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
