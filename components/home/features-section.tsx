import { Zap, Globe, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Fast Sourcing',
    description:
      'Connect with verified manufacturers in hours, not weeks. Access a curated network of trusted suppliers.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Source from 50+ countries with competitive pricing and reliable logistics support.',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description:
      'All partners undergo rigorous verification. Ensure consistent quality and reliability.',
  },
  {
    icon: TrendingUp,
    title: 'Cost Optimization',
    description:
      'Reduce sourcing costs by up to 40% through direct manufacturer connections.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="gradient-text mb-4">Why Choose Zouhan Trading?</h2>
          <p className="mx-auto max-w-2xl text-lg text-secondary">
            We combine industry expertise with modern technology to deliver exceptional
            sourcing solutions for your business.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-lg border border-border bg-white p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-secondary">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
