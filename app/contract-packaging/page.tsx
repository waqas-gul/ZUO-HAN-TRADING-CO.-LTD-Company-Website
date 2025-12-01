import { CheckCircle, Droplet, Tag, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Contract Packaging | Zuohan Trading",
  description:
    "Professional contract packaging services for cosmetics, food, beverages, and consumer goods. Custom solutions for any product.",
};

export default function ContractPackagingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 rounded-full bg-accent/20 w-fit px-4 py-2 border border-accent/30">
                <Droplet size={16} className="text-accent" />
                <span className="text-sm font-semibold text-accent">Contract Packaging</span>
              </div>

              <h1 className="text-5xl font-bold leading-tight">
                Professional Contract Packaging Solutions
              </h1>

              <p className="text-lg text-gray-200 leading-relaxed">
                From concept to delivery, we handle all aspects of your packaging needs. Our state-of-the-art facility specializes in filling, labeling, and quality assurance for cosmetics, food, beverages, and consumer goods.
              </p>

              <Link href="/contact" className="button-primary bg-accent hover:bg-accent-light text-foreground w-fit font-semibold">
                Request Quote
              </Link>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden border border-white/10 bg-slate-800">
              <img
                src="/placeholder.svg?key=p9k2l"
                alt="Contract packaging facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">What We Offer</h2>
            <p className="mx-auto max-w-2xl text-secondary">
              Complete contract packaging services tailored to your specific product requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Droplet,
                title: 'Liquid Filling',
                desc: 'Precision filling for serums, oils, lotions, and liquid products with accuracy up to 0.1ml'
              },
              {
                icon: Tag,
                title: 'Labeling & Branding',
                desc: 'Custom label design and application ensuring perfect placement and quality finishes'
              },
              {
                icon: Zap,
                title: 'Sealing & Shrinking',
                desc: 'Professional shrink wrap and sealing for tamper-proof, premium product presentation'
              },
              {
                icon: CheckCircle,
                title: 'Quality Testing',
                desc: 'Comprehensive testing including pH, viscosity, stability, and microbial analysis'
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="rounded-lg border border-border bg-slate-900/50 p-6 hover:border-accent/50 transition-all">
                  <Icon size={32} className="text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-secondary">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Product Categories</h2>
            <p className="mx-auto max-w-2xl text-secondary">
              We have specialized expertise across multiple product categories
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {['Cosmetics & Beauty', 'Skincare Products', 'Hair Care', 'Fragrances', 'Supplements', 'Essential Oils', 'Beverages', 'Food Products'].map((cat, idx) => (
              <div key={idx} className="rounded-lg border border-border bg-slate-800/50 p-4 text-center hover:border-accent/50 transition-all">
                <p className="font-semibold text-white">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-4xl font-bold">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
            Contact us to discuss your contract packaging requirements and get a custom quote.
          </p>
          <Link href="/contact" className="button-primary bg-accent hover:bg-accent-light text-foreground font-semibold">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
