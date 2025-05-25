import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const competitiveComparisons = [
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

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/our-approach", label: "Our Approach" },
    { href: "/ai-tools-landscape", label: "AI Tools Guide" },
    { href: "/roi-calculator", label: "ROI Calculator" },
    { href: "/get-started", label: "Get Started" },
  ]

  const resources = [
    { href: "/resources/case-studies", label: "Case Studies", disabled: false },
    { href: "#implementation-guide", label: "Implementation Guide", disabled: true },
    { href: "#ai-best-practices", label: "AI Best Practices", disabled: true },
    { href: "#success-stories", label: "Success Stories", disabled: true },
    { href: "#help-center", label: "Help Center", disabled: true },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">

            <p className="text-slate-300 mb-6 max-w-md">
              Where real estate meets real intelligence. Professional-grade AI deployment with white-glove precision for real estate brokerages.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@realai.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>United States</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose RealAI */}
          <div>
            <h3 className="font-semibold text-white mb-4">Why Choose RealAI?</h3>
            <ul className="space-y-3">
              {competitiveComparisons.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((link) => (
                <li key={link.href}>
                  {link.disabled ? (
                    <span className="text-slate-500 text-sm">
                      {link.label}
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-white mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#twitter"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#linkedin"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#youtube"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div>
            <p>&copy; {currentYear} RealAI. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link href="#privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#security" className="hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}