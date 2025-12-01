import { Warehouse, Package, Shield, Clock, Zap, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Warehouse & Storage Services | Zuohan Trading",
  description:
    "Professional 3PL warehouse storage and inventory management services. Secure facilities with real-time inventory tracking.",
};

const warehouseFeatures = [
  {
    icon: Shield,
    title: 'Secure Facilities',
    description: '24/7 monitored warehouses with advanced security systems'
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Real-time tracking and organized storage solutions'
  },
  {
    icon: Clock,
    title: 'Flexible Storage',
    description: 'Short-term and long-term storage options available'
  },
  {
    icon: Zap,
    title: 'Quick Access',
    description: 'Easy inventory retrieval and dispatch when needed'
  }
]

const storageOptions = [
  {
    type: 'Short-Term Storage',
    duration: '1-3 months',
    features: ['Flexible terms', 'No long-term commitment', 'Ideal for seasonal products'],
    bestFor: 'Seasonal items, product testing'
  },
  {
    type: 'Long-Term Storage',
    duration: '6+ months',
    features: ['Discounted rates', 'Dedicated space', 'Regular inventory reports'],
    bestFor: 'Core inventory, bulk orders'
  },
  {
    type: 'Fulfillment Ready',
    duration: 'Flexible',
    features: ['Pick and pack services', 'Order processing', 'Shipping integration'],
    bestFor: 'E-commerce, direct-to-customer'
  }
]

const facilities = [
  'Climate-controlled areas',
  '24/7 security monitoring',
  'Fire suppression systems',
  'Pest control management',
  'Loading docks',
  'Inventory management software'
]

export default function WarehousePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-900 to-slate-900 text-white relative overflow-hidden">
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
  </div>
  
  <div className="container-custom relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* Text Content - Left Side */}
      <div className="flex-1 max-w-4xl">
        <div className="flex items-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mb-6 border border-accent/30">
          <span className="text-sm font-semibold text-accent">Warehouse & Storage</span>
        </div>
        
        <h1 className="mb-6 text-4xl lg:text-5xl font-bold">
          Professional 3PL Warehouse Solutions
        </h1>
        
        <p className="mb-8 text-xl text-gray-100 max-w-3xl">
          Secure, scalable warehouse storage with real-time inventory management. 
          Focus on growing your business while we handle your inventory storage needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact" 
            className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Get Storage Quote
          </Link>
          <button className="button-secondary border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg transition-all">
            View Facility Tour
          </button>
        </div>
      </div>

      {/* Image - Right Side */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <img 
            src="/warehouse.jpeg" // Update with your image path
            alt="Modern 3PL warehouse and storage solutions with inventory management"
            className="rounded-2xl shadow-2xl"
          />
          {/* Optional decorative element */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-full filter blur-xl opacity-70 -z-10"></div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Features */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Secure Storage Solutions</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Advanced warehouse facilities designed to protect your inventory
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {warehouseFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/20 text-accent mb-4 mx-auto">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-secondary">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Storage Options */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Flexible Storage Plans</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Choose the storage solution that fits your business needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {storageOptions.map((option, index) => (
              <div key={index} className="rounded-lg border border-border bg-slate-800/50 p-6 hover:border-accent/50 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{option.type}</h3>
                  <div className="text-accent font-bold">{option.duration}</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-secondary">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-accent font-semibold mb-2">BEST FOR:</p>
                  <p className="text-sm text-secondary">{option.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Premium Facility Features</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              State-of-the-art warehouse facilities with comprehensive amenities
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-slate-800/50">
                <Package size={20} className="text-accent flex-shrink-0" />
                <span className="text-white font-medium">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-border">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Store Your Inventory?</h2>
            <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
              Get secure, affordable warehouse storage with professional inventory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold px-8 py-3 rounded-lg transition-all"
              >
                Get Storage Quote
              </Link>
              <Link 
                href="/shipping" 
                className="button-secondary border-accent text-accent hover:bg-accent hover:text-foreground px-8 py-3 rounded-lg transition-all"
              >
                Combine with Shipping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}