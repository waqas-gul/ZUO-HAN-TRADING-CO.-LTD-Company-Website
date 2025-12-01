import Link from 'next/link'
import { Search, Eye, Warehouse, Truck } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Product Sourcing',
    description: 'We find high-quality ready-made products from trusted suppliers worldwide. Just tell us what you need.',
    href: '/sourcing'
  },
  {
    icon: Eye,
    title: 'Quality Inspection',
    description: 'Thorough inspection of all products to ensure they meet your quality standards and specifications.',
    href: '/inspection'
  },
  {
    icon: Warehouse,
    title: 'Warehouse & Storage',
    description: 'Secure 3PL storage facilities to manage your inventory until products are ready for shipping.',
    href: '/warehouse'
  },
  {
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'Reliable shipping services to deliver your finished, branded products directly to you or your customers.',
    href: '/shipping'
  }
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex flex-col gap-4 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mx-auto border border-accent/30">
            <span className="text-sm font-semibold text-accent">Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Complete Brand Launch Solution
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            We handle everything from sourcing to delivery so you can focus on building your brand, not managing logistics.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Link
                key={idx}
                href={service.href}
                className="group relative overflow-hidden rounded-lg border border-border bg-gradient-to-br from-slate-900 to-slate-800 p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-accent/20 text-accent mb-4 group-hover:bg-accent/30 transition-colors">
                    <Icon size={24} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-secondary">
                    {service.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}