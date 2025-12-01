import { Eye, CheckCircle, AlertTriangle, FileCheck, Target, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: "Quality Inspection Services | Zuohan Trading",
  description:
    "Professional quality inspection services. Ensure your products meet specifications with our comprehensive inspection protocols.",
};

const inspectionFeatures = [
  {
    icon: CheckCircle,
    title: 'Pre-Shipment Inspection',
    description: 'Comprehensive checks before products leave the factory'
  },
  {
    icon: Target,
    title: 'During Production',
    description: 'Monitor production quality at critical manufacturing stages'
  },
  {
    icon: FileCheck,
    title: 'Documentation Review',
    description: 'Verify all certificates and compliance documentation'
  },
  {
    icon: Award,
    title: 'Final Random Inspection',
    description: 'Statistical sampling based on AQL standards'
  }
]

const inspectionChecklist = [
  {
    category: 'Visual Inspection',
    items: ['Color consistency', 'Surface defects', 'Printing quality', 'Packaging integrity']
  },
  {
    category: 'Functional Testing',
    items: ['Performance testing', 'Safety checks', 'Durability tests', 'Compliance verification']
  },
  {
    category: 'Measurement & Specs',
    items: ['Dimensional accuracy', 'Weight verification', 'Material composition', 'Tolerance checks']
  },
  {
    category: 'Packaging & Labeling',
    items: ['Barcode verification', 'Label accuracy', 'Packaging materials', 'Shipping marks']
  }
]

const standards = [
  'ISO 2859-1 AQL Standards',
  'International Safety Standards',
  'Industry-Specific Regulations',
  'Custom Client Specifications'
]

export default function InspectionPage() {
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
          <span className="text-sm font-semibold text-accent">Quality Inspection</span>
        </div>
        
        <h1 className="mb-6 text-4xl lg:text-5xl font-bold">
          Professional Quality Inspection Services
        </h1>
        
        <p className="mb-8 text-xl text-gray-100 max-w-3xl">
          Ensure your products meet the highest quality standards with our comprehensive inspection protocols. 
          Protect your brand reputation with rigorous quality control.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/contact" 
            className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Schedule Inspection
          </Link>
          <button className="button-secondary border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg transition-all">
            Download Inspection Checklist
          </button>
        </div>
      </div>

      {/* Image - Right Side */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <img 
            src="/inspection.jpeg" // Update with your image path
            alt="Professional quality inspection and product testing services"
            className="rounded-2xl shadow-2xl"
          />
          {/* Optional decorative element */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-full filter blur-xl opacity-70 -z-10"></div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Inspection Types */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Comprehensive Inspection Services</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Multiple inspection stages to catch issues early and ensure product quality
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {inspectionFeatures.map((feature, index) => {
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

      {/* Inspection Checklist */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Quality Inspection Checklist</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Our detailed inspection process covers every aspect of product quality
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {inspectionChecklist.map((category, index) => (
              <div key={index} className="rounded-lg border border-border bg-slate-800/50 p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-accent" />
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-secondary">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Quality Standards We Follow</h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Adhering to international standards and custom requirements
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {standards.map((standard, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-slate-800/50">
                <Award size={20} className="text-accent flex-shrink-0" />
                <span className="text-white font-medium text-sm">{standard}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto bg-slate-800/50 rounded-2xl p-8 border border-border">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ensure Your Product Quality</h2>
            <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
              Don't compromise on quality. Our inspection services protect your investment and brand reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold px-8 py-3 rounded-lg transition-all"
              >
                Request Inspection Quote
              </Link>
              <Link 
                href="/sourcing" 
                className="button-secondary border-accent text-accent hover:bg-accent hover:text-foreground px-8 py-3 rounded-lg transition-all"
              >
                Combine with Sourcing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}