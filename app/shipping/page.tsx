import { Truck, Globe, Clock, Shield, Package, MapPin } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Shipping & Delivery Services | Zuohan Trading",
  description:
    "Professional shipping and delivery services worldwide. Reliable logistics solutions for your branded products.",
};

const shippingFeatures = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Shipping to 200+ countries with reliable partners'
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Express and standard shipping options available'
  },
  {
    icon: Shield,
    title: 'Secure Handling',
    description: 'Careful packaging and handling of all products'
  },
  {
    icon: Package,
    title: 'Tracking',
    description: 'Real-time tracking for all shipments'
  }
]

const shippingOptions = [
  {
    method: 'Express Shipping',
    duration: '3-7 days',
    features: ['Fastest delivery', 'Priority handling', 'Real-time tracking', 'Signature required'],
    bestFor: 'Urgent orders, high-value items'
  },
  {
    method: 'Standard Shipping',
    duration: '10-20 days',
    features: ['Cost-effective', 'Reliable delivery', 'Package tracking', 'Insurance available'],
    bestFor: 'Regular orders, bulk shipments'
  },
  {
    method: 'Economy Shipping',
    duration: '25-40 days',
    features: ['Most affordable', 'Sea freight options', 'Consolidated shipping', 'Perfect for large orders'],
    bestFor: 'Large volumes, non-urgent'
  }
]

const regions = [
  {
    region: 'North America',
    countries: ['USA', 'Canada', 'Mexico'],
    delivery: '5-15 days'
  },
  {
    region: 'Europe',
    countries: ['UK, Germany, France + 25 more'],
    delivery: '7-18 days'
  },
  {
    region: 'Asia Pacific',
    countries: ['Australia, Japan, Singapore + 15 more'],
    delivery: '5-12 days'
  },
  {
    region: 'Middle East',
    countries: ['UAE, Saudi Arabia, Qatar + 8 more'],
    delivery: '8-20 days'
  }
]

export default function ShippingPage() {
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
          <span className="text-sm font-semibold text-accent">Shipping & Delivery</span>
        </div>
        
        <h1 className="mb-6 text-4xl lg:text-5xl font-bold">
          Global Shipping & Delivery Solutions
        </h1>
        
        <p className="mb-8 text-xl text-gray-100 max-w-3xl">
          Reliable shipping services to deliver your finished, branded products worldwide. 
          From factory door to your customers' hands - we handle it all.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact" 
            className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Get Shipping Quote
          </Link>
          <button className="button-secondary border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg transition-all">
            Track Your Shipment
          </button>
        </div>
      </div>

      {/* Image - Right Side */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <img 
            src="/shipping.jpeg" // Update with your image path
            alt="Global shipping and delivery logistics network"
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Reliable Shipping Services</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Comprehensive logistics solutions for your global supply chain
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {shippingFeatures.map((feature, index) => {
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

      {/* Shipping Options */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Shipping Methods</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Choose the shipping method that best fits your timeline and budget
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {shippingOptions.map((option, index) => (
              <div key={index} className="rounded-lg border border-border bg-slate-800/50 p-6 hover:border-accent/50 transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{option.method}</h3>
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

      {/* Global Reach */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Global Delivery Network</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Shipping to major regions worldwide with reliable delivery times
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {regions.map((region, index) => (
              <div key={index} className="rounded-lg border border-border bg-slate-800/50 p-6 text-center">
                <MapPin size={32} className="text-accent mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{region.region}</h3>
                <p className="text-sm text-secondary mb-3">{region.countries.join(', ')}</p>
                <div className="text-accent font-semibold">{region.delivery}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-border">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Ship Your Products?</h2>
            <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
              Get reliable shipping solutions for your branded products. We handle customs, documentation, and delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold px-8 py-3 rounded-lg transition-all"
              >
                Get Shipping Quote
              </Link>
              <Link 
                href="/warehouse" 
                className="button-secondary border-accent text-accent hover:bg-accent hover:text-foreground px-8 py-3 rounded-lg transition-all"
              >
                Combine with Storage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}