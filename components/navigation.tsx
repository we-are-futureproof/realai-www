"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const aboutLinks = [
    { href: "/about", label: "About Us" },
    { href: "/our-approach", label: "Our Approach" },
  ]

  const toolsLinks = [
    { href: "/roi-calculator", label: "ROI Calculator" },
    { href: "/ai-tools-landscape", label: "AI Tools Guide" },
  ]

  const resourcesLinks = [
    { href: "/resources/case-studies", label: "Case Studies" },
    { href: "/resources/implementation-guide", label: "Implementation Guide" },
    { href: "/resources/ai-best-practices", label: "AI Best Practices" },
    { href: "/resources/success-stories", label: "Success Stories" },
    { href: "/resources/help-center", label: "Help Center" },
  ]

  const competitiveLinks = [
    { href: "/compare/realai-vs-activecampaign", label: "vs ActiveCampaign" },
    { href: "/compare/realai-vs-building-inhouse", label: "vs Building In-House" },
    { href: "/compare/realai-vs-cinc", label: "vs CINC" },
    { href: "/compare/realai-vs-diy-ai", label: "vs DIY AI" },
    { href: "/compare/realai-vs-follow-up-boss", label: "vs Follow Up Boss" },
    { href: "/compare/realai-vs-hubspot", label: "vs HubSpot" },
    { href: "/compare/realai-vs-kvcore", label: "vs kvCORE" },
    { href: "/compare/realai-vs-lofty", label: "vs Lofty (Chime)" },
    { href: "/compare/realai-vs-meetalfred", label: "vs MeetAlfred" },
    { href: "/compare/realai-vs-roof-ai", label: "vs Roof AI" },
    { href: "/compare/realai-vs-salesforce", label: "vs Salesforce" },
    { href: "/compare/realai-vs-structurely", label: "vs Structurely" },
    { href: "/compare/realai-vs-top-producer", label: "vs Top Producer" },
    { href: "/compare/realai-vs-traditional-software", label: "vs Traditional Software" },
    { href: "/compare/realai-vs-virtual-assistants", label: "vs Virtual Assistants" },
    { href: "/compare/realai-vs-wise-agent", label: "vs Wise Agent" },
  ]

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="RealAI"
                width={1000}
                height={400}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors">
                About
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {aboutLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="w-full">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors">
                Tools
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {toolsLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="w-full">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors">
                Resources
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {resourcesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="w-full">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Why Choose RealAI Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors">
                Why Choose RealAI?
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {competitiveLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="w-full">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
              
              {/* About Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-slate-700 mb-2">About</div>
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Tools Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-slate-700 mb-2">Tools</div>
                {toolsLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Resources Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-slate-700 mb-2">Resources</div>
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Why Choose RealAI Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-slate-700 mb-2">Why Choose RealAI?</div>
                {competitiveLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-1 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Get Started Button */}
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/get-started" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}