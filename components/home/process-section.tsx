import { MapPin } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Share Your Vision',
    description: 'Tell us the product you want - pens, bottles, gadgets, beauty items, or any custom product.'
  },
  {
    number: '02',
    title: 'Product Sourcing',
    description: 'We find high-quality ready-made products from our network of trusted suppliers.'
  },
  {
    number: '03',
    title: 'Quality Inspection',
    description: 'Thorough inspection to ensure products meet your quality standards before branding.'
  },
  {
    number: '04',
    title: 'Branding & Customization',
    description: 'We apply your logo, branding, and packaging to create your unique product.'
  },
  {
    number: '05',
    title: 'Warehouse Storage',
    description: 'Secure storage in our 3PL facilities until products are ready for shipping.'
  },
  {
    number: '06',
    title: 'Delivery',
    description: 'We ship the finished, ready-to-sell products directly to you or your customers.'
  }
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex flex-col gap-4 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mx-auto border border-accent/30">
            <span className="text-sm font-semibold text-accent">How It Works</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Launch Your Brand in 6 Simple Steps
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            A streamlined process that turns your product idea into a fully branded, ready-to-sell reality.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative group rounded-lg border border-border bg-slate-900/50 p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-accent text-foreground flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                {step.number}
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-secondary">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}