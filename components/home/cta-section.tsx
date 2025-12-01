import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom text-center relative z-10">
        <h2 className="mb-4 text-4xl font-bold leading-tight lg:text-5xl">
          Ready to Launch Your Brand?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
          Share your product idea and we'll handle the rest - from sourcing to branding to delivery. Your finished products, your brand name.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row justify-center">
          <Link href="/contact" className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold">
            Start Your Project <ArrowRight size={20} />
          </Link>
          <Link href="/about" className="button-secondary inline-flex gap-2 text-white border-white/30 transition-all">
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  )
}