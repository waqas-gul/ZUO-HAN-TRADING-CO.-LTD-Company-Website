import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Supplier Sourcing',
    description: 'Identify and connect with vetted manufacturers matching your specifications.',
    icon: '🏭',
  },
  {
    title: 'Quality Control',
    description: 'Comprehensive inspection and testing to ensure product standards.',
    icon: '✓',
  },
  {
    title: 'Logistics Management',
    description: 'End-to-end shipping solutions with real-time tracking.',
    icon: '📦',
  },
  {
    title: 'Trade Financing',
    description: 'Flexible payment options and financing solutions for bulk orders.',
    icon: '💳',
  },
]

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-white border-t border-border">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="gradient-text mb-4">Our Core Services</h2>
          <p className="mx-auto max-w-2xl text-lg text-secondary">
            Comprehensive solutions designed to streamline your supply chain operations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border bg-gradient-to-br from-white to-gray-50 p-6 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="mb-4 text-3xl">{service.icon}</div>
              <h3 className="mb-2 font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-secondary mb-4">{service.description}</p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="button-primary">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
