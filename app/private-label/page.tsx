import { CheckCircle, Lightbulb, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Private Label Manufacturing | Zuohan Trading",
  description:
    "Launch your own brand with our complete private label manufacturing and packaging services. Turn your vision into reality.",
};

export default function PrivateLabelPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 rounded-full bg-accent/20 w-fit px-4 py-2 border border-accent/30">
                <Lightbulb size={16} className="text-accent" />
                <span className="text-sm font-semibold text-accent">Private Label Solutions</span>
              </div>

              <h1 className="text-5xl font-bold leading-tight">
                Launch Your Own Brand Today
              </h1>

              <p className="text-lg text-gray-200 leading-relaxed">
                Transform your vision into a market-ready product. We provide complete private label manufacturing including product development, custom packaging, quality assurance, and distribution support.
              </p>

              <Link href="/contact" className="button-primary bg-accent hover:bg-accent-light text-foreground w-fit font-semibold">
                Start Your Brand
              </Link>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden border border-white/10 bg-slate-800">
              <img
                src="/placeholder.svg?key=q3m5n"
                alt="Private label product development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Private Label</h2>
            <p className="mx-auto max-w-2xl text-secondary">
              Build your brand without the overhead of manufacturing. We handle everything.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Lightbulb,
                title: 'Product Development',
                desc: 'Expert consultation on formulation, ingredients, and product innovation'
              },
              {
                icon: Award,
                title: 'Custom Branding',
                desc: 'Unique packaging design that reflects your brand identity and values'
              },
              {
                icon: TrendingUp,
                title: 'Market Ready',
                desc: 'Full regulatory compliance and quality assurance for market launch'
              },
              {
                icon: CheckCircle,
                title: 'Cost Effective',
                desc: 'Economies of scale with flexible minimum order quantities'
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="rounded-lg border border-border bg-slate-900/50 p-6 hover:border-accent/50 transition-all">
                  <Icon size={32} className="text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-secondary text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">The Private Label Journey</h2>
            <p className="mx-auto max-w-2xl text-secondary">
              From concept to market-ready product in six steps
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              { num: '01', title: 'Concept & Strategy', desc: 'Define your brand vision, target market, and product goals' },
              { num: '02', title: 'Product Development', desc: 'Formulation testing and ingredient selection' },
              { num: '03', title: 'Design & Packaging', desc: 'Create custom packaging that stands out on shelves' },
              { num: '04', title: 'Prototyping', desc: 'Sample production and approval process' },
              { num: '05', title: 'Production', desc: 'Full-scale manufacturing with quality control' },
              { num: '06', title: 'Launch & Distribution', desc: 'Packaging, shipping, and market introduction support' },
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-6 rounded-lg border border-border bg-slate-800/50 p-6 hover:border-accent/50 transition-all">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-white font-bold">
                  {step.num}
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">{step.title}</h3>
                  <p className="text-secondary">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-4xl font-bold">Ready to Launch Your Brand?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
            Let's discuss your brand vision and create a private label strategy tailored to your goals.
          </p>
          <Link href="/contact" className="button-primary bg-accent hover:bg-accent-light text-foreground font-semibold">
            Begin Your Journey
          </Link>
        </div>
      </section>
    </div>
  )
}
