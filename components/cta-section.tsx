import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function CTASection() {
  return (
    <section className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Brokerage?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            The future of real estate isn't artificial. See how RealAI can scale your operations while protecting your brand.
          </p>
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8 py-4" asChild>
            <Link href="/get-started">Schedule Your Discovery Call</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
