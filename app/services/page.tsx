import { CheckCircle, Search, Eye, Warehouse, Truck } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Services | Zuohan Trading",
  description:
    "Complete brand launch services - product sourcing, quality inspection, warehouse storage, and shipping solutions.",
};

const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'We find high-quality ready-made products from trusted suppliers worldwide. Just share your product idea and we handle the rest.',
    features: [
      'Global supplier network', 
      'Multiple product categories', 
      'Quality supplier vetting', 
      'Competitive pricing', 
      'Fast sourcing turnaround'
    ],
    link: '/sourcing'
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    description: 'Thorough inspection of all products to ensure they meet your quality standards and specifications before branding.',
    features: [
      'Pre-shipment inspection', 
      'Quality standards verification', 
      'Defect identification', 
      'Sample approval process', 
      'Detailed inspection reports'
    ],
    link: '/inspection'
  },
  {
    icon: Warehouse,
    title: 'Warehouse & Storage',
    description: 'Secure 3PL storage facilities to manage your inventory with real-time tracking and efficient inventory management.',
    features: [
      'Secure storage facilities', 
      'Inventory management', 
      'Real-time stock tracking', 
      'Climate-controlled options', 
      'Order fulfillment support'
    ],
    link: '/warehouse'
  },
  {
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'Reliable shipping services to deliver your finished, branded products directly to you or your customers worldwide.',
    features: [
      'Global shipping network', 
      'Customs clearance support', 
      'Tracking and visibility', 
      'Multiple carrier options', 
      'Delivery confirmation'
    ],
    link: '/shipping'
  }
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <h1 className="mb-6 text-5xl font-bold">Our Services</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-100">
            Complete brand launch solutions - from product sourcing to delivery. Your products, your brand, our logistics.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  href={service.link || '#'}
                  className="group relative rounded-lg border border-border bg-gradient-to-br from-slate-800 to-slate-900 p-8 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>

                  <div className="relative">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/20 text-accent mb-4 group-hover:bg-accent/30 transition-colors">
                      <Icon size={32} />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mb-4 text-secondary">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-secondary">
                          <CheckCircle size={16} className="text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mx-auto border border-accent/30 mb-4">
              <span className="text-sm font-semibold text-accent">Our Process</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">How We Launch Your Brand</h2>
            <p className="mx-auto max-w-2xl text-secondary">
              A streamlined process that turns your product idea into a fully branded, ready-to-sell reality.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              { 
                num: '01', 
                title: 'Share Your Vision', 
                desc: 'Tell us the product you want - pens, bottles, gadgets, beauty items, or any custom product.' 
              },
              { 
                num: '02', 
                title: 'Product Sourcing', 
                desc: 'We find high-quality ready-made products from our network of trusted suppliers.' 
              },
              { 
                num: '03', 
                title: 'Quality Inspection', 
                desc: 'Thorough inspection to ensure products meet your quality standards before branding.' 
              },
              { 
                num: '04', 
                title: 'Branding & Customization', 
                desc: 'We apply your logo, branding, and packaging to create your unique product.' 
              },
              { 
                num: '05', 
                title: 'Warehouse Storage', 
                desc: 'Secure storage in our 3PL facilities until products are ready for shipping.' 
              },
              { 
                num: '06', 
                title: 'Delivery', 
                desc: 'We ship the finished, ready-to-sell products directly to you or your customers.' 
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-6 rounded-lg border border-border bg-slate-800/50 p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-white font-bold text-lg flex-shrink-0">
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
      <section className="section-padding bg-gradient-to-r from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <h2 className="mb-4 text-4xl font-bold">Ready to Launch Your Brand?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-100">
            Share your product idea and we'll handle everything from sourcing to delivery.
          </p>
          <Link href="/contact" className="button-primary bg-accent hover:bg-accent-light text-foreground font-semibold inline-flex gap-2">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}