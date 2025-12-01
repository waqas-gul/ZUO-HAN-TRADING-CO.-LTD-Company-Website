import { ShoppingCart, TrendingUp, Package, Users, Zap, Globe, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'E-commerce Solutions | Zouhan Trading',
  description:
    'Empower your e-commerce business with our dropshipping, wholesale, and inventory solutions.',
}

const solutions = [
  {
    icon: ShoppingCart,
    title: 'Dropshipping Solutions',
    description:
      'Launch your online store without inventory risk. We handle sourcing, quality, and fulfillment.',
    benefits: ['Zero inventory risk', 'Fast shipping', 'Product variety', 'Margin optimization'],
  },
  {
    icon: Package,
    title: 'Wholesale Supply',
    description:
      'Bulk ordering with competitive pricing. Flexible quantities and payment terms for retailers.',
    benefits: ['Bulk pricing', 'MOQ negotiation', 'Flexible terms', 'Private labeling'],
  },
  {
    icon: TrendingUp,
    title: 'Inventory Management',
    description:
      'Managed warehouse services with real-time inventory tracking and fulfillment integration.',
    benefits: ['Warehouse storage', 'Inventory tracking', 'Order fulfillment', 'Returns management'],
  },
  {
    icon: Users,
    title: 'Private Labeling',
    description:
      'Create your brand identity with custom packaging, branding, and manufacturing.',
    benefits: ['Brand customization', 'Custom packaging', 'Quality control', 'Market ready products'],
  },
  {
    icon: Zap,
    title: 'Speed to Market',
    description:
      'Accelerate your product launch with our streamlined processes and expedited services.',
    benefits: ['Fast production', 'Quick sampling', 'Rush shipments', 'Trend-responsive sourcing'],
  },
  {
    icon: Globe,
    title: 'Global Marketplace Optimization',
    description:
      'Optimize for multiple platforms including Amazon, Shopify, and international markets.',
    benefits: ['Multi-platform support', 'Compliance expertise', 'Bulk pricing', 'Fulfillment integration'],
  },
]

const ecommerceFeatures = [
  'Access to 500+ verified suppliers',
  'Bulk pricing and wholesale rates',
  'Expedited quality control',
  'API integration with your platform',
  'Real-time inventory updates',
  'Streamlined order fulfillment',
]

export default function EcommercePage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-primary-hover text-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="mb-6 text-5xl font-bold leading-tight">
                E-commerce Sourcing Made Simple
              </h1>
              <p className="mb-8 text-xl text-gray-100">
                Whether you're a dropshipper, retailer, or marketplace seller, we provide end-to-end sourcing solutions
                to scale your online business.
              </p>
              <Link
                href="/contact"
                className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground"
              >
                Start Your E-commerce Journey
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
              <img
                src="/placeholder.svg?key=7ubef"
                alt="E-commerce"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="gradient-text mb-4 text-3xl font-bold">Our Solutions</h2>
            <p className="mx-auto max-w-2xl text-secondary">
              Tailored services for every e-commerce business model.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon
              return (
                <div
                  key={solution.title}
                  className="rounded-lg border border-border bg-gradient-to-br from-white to-gray-50 p-8 hover:shadow-lg transition-shadow group"
                >
                  <Icon size={40} className="mb-4 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{solution.title}</h3>
                  <p className="mb-4 text-secondary">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm text-secondary">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="gradient-text mb-6 text-3xl font-bold">Why Choose Us for E-commerce?</h2>
              <ul className="space-y-4">
                {ecommerceFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-primary flex-shrink-0" />
                    <span className="text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-200">
              <img
                src="/placeholder.svg?key=fjr2d"
                alt="E-commerce platform"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="gradient-text mb-6 text-3xl font-bold">Platform Integration</h2>
          <p className="mx-auto mb-12 max-w-2xl text-secondary">
            We integrate seamlessly with major e-commerce platforms for effortless order management.
          </p>
          <div className="grid gap-6 md:grid-cols-4">
            {['Shopify', 'Amazon', 'WooCommerce', 'eBay'].map((platform) => (
              <div key={platform} className="flex items-center justify-center rounded-lg border border-border bg-gray-50 py-8 font-semibold text-secondary hover:border-primary transition-colors">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-4xl font-bold">Scale Your E-commerce Business</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
            Let Zouhan Trading handle your sourcing while you focus on growing your sales.
          </p>
          <Link href="/contact" className="button-primary bg-accent hover:bg-accent-light text-foreground">
            Get E-commerce Solutions
          </Link>
        </div>
      </section>
    </div>
  )
}
