import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary via-blue-900 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 rounded-full bg-accent/20 w-fit px-4 py-2 backdrop-blur-sm border border-accent/30">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-accent">
                End-to-End Manufacturing & Logistics
              </span>
            </div>

            <h1 className="text-lg font-bold text-white leading-tight lg:text-3xl">
             We provide complete brand-building support, offering high-quality manufacturing,sourcing  and reliable logistics to bring your products to market with confidence.
            </h1>

            <div className="flex items-center gap-3 py-4">
              <div className="w-12 h-0.5 bg-accent"></div>
              <p className="text-xl font-semibold text-accent italic">
                WHEN EVERYTHING IS IN PLACE, OUR JOB IS DONE
              </p>
            </div>

            <p className="text-md text-gray-200 leading-relaxed">
              From production setup to supply chain management, we handle every detail of your manufacturing journey. 
              We ensure seamless operations so you can focus on growing your business while we make sure everything is perfectly positioned for success.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold"
              >
                Start Your Project <ArrowRight size={20} />
              </Link>
              <Link
                href="/about"
                className="button-secondary text-white border-white/30 transition-all"
                style={{ '--tw-bg-opacity': '0.1' } as any}
              >
                Our Process
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-accent">360°</div>
                <p className="text-sm text-gray-300">Full Service</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">100%</div>
                <p className="text-sm text-gray-300">Turnkey Solutions</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">0</div>
                <p className="text-sm text-gray-300">Setup Hassles</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-full  max-w-2xl rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
            <Image
              // src="/professional-packaging-production-facility-industr.jpg"
              src="/pic1.jpeg"
              alt="Complete manufacturing and logistics solution"
              className="w-full h-full object-cover"
              height={1000}
              width={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-slate-900/20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}