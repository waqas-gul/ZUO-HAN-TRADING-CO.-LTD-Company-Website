import { Search, Globe, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Product Sourcing Services | Zuohan Trading",
  description:
    "Professional product sourcing services. Find high-quality ready-made products from trusted global suppliers for your brand.",
};

const sourcingFeatures = [
  {
    icon: Globe,
    title: 'Global Supplier Network',
    description: 'Access to 500+ verified suppliers across 50+ product categories worldwide'
  },
  {
    icon: Shield,
    title: 'Quality Verified',
    description: 'Every supplier undergoes rigorous verification and quality assessment'
  },
  {
    icon: Users,
    title: 'Industry Experts',
    description: 'Our sourcing specialists have 15+ years of industry experience'
  },
  {
    icon: CheckCircle,
    title: 'Risk Management',
    description: 'Comprehensive due diligence to minimize sourcing risks'
  }
]

const sourcingProcess = [
  {
    step: '01',
    title: 'Requirement Analysis',
    description: 'We understand your product specifications, target market, and budget requirements'
  },
  {
    step: '02',
    title: 'Supplier Identification',
    description: 'Match your needs with pre-vetted suppliers from our global network'
  },
  {
    step: '03',
    title: 'Sample Procurement',
    description: 'Arrange product samples for your evaluation and approval'
  },
  {
    step: '04',
    title: 'Quality Verification',
    description: 'Conduct factory audits and product testing before bulk orders'
  },
  {
    step: '05',
    title: 'Negotiation & Contracting',
    description: 'Secure best pricing and favorable terms on your behalf'
  },
  {
    step: '06',
    title: 'Order Management',
    description: 'Manage the entire procurement process from order to delivery'
  }
]

const popularCategories = [
  'Beauty & Cosmetics',
  'Health Supplements',
  'Home & Garden',
  'Electronics',
  'Fitness Equipment',
  'Pet Products',
  'Toys & Kids',
  'Household Essentials'
]

export default function SourcingPage() {
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
          <span className="text-sm font-semibold text-accent">Product Sourcing</span>
        </div>
        
        <h1 className="mb-6 text-4xl lg:text-5xl font-bold">
          Global Product Sourcing Solutions
        </h1>
        
        <p className="mb-8 text-xl text-gray-100 max-w-3xl">
          Find high-quality ready-made products from our network of 500+ verified suppliers worldwide. 
          Launch your brand with confidence using our expert sourcing services.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact" 
            className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Start Sourcing
            <ArrowRight size={20} />
          </Link>
          <button className="button-secondary border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg transition-all">
            Download Sourcing Guide
          </button>
        </div>
      </div>

      {/* Image - Right Side */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <img 
            src="/sourcing.jpeg" // Update with your image path
            alt="Global product sourcing and supply chain management"
            className="rounded-2xl shadow-2xl"
          />
          {/* Optional decorative element */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-full filter blur-xl opacity-70 -z-10"></div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Features Grid */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sourcingFeatures.map((feature, index) => {
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

      {/* Sourcing Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Sourcing Process</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              A systematic approach to ensure you get the right products at the best value
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sourcingProcess.map((step, index) => (
              <div key={index} className="group relative rounded-lg border border-border bg-slate-800/50 p-6 hover:border-accent/50 transition-all">
                <div className="text-2xl font-bold text-accent mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Popular Sourcing Categories</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              We source products across diverse categories with proven supplier networks
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {popularCategories.map((category, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-slate-800/50 hover:border-accent/50 transition-all">
                <CheckCircle size={20} className="text-accent flex-shrink-0" />
                <span className="text-white font-medium">{category}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/categories" className="text-accent font-semibold hover:text-accent-light transition-colors">
              View All Categories →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-border">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Source Your Products?</h2>
            <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
              Let our sourcing experts help you find the perfect products for your brand. 
              Get competitive pricing and reliable suppliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold px-8 py-3 rounded-lg transition-all"
              >
                Request Sourcing Consultation
              </Link>
              <Link 
                href="/categories" 
                className="button-secondary border-accent text-accent hover:bg-accent hover:text-foreground px-8 py-3 rounded-lg transition-all"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}