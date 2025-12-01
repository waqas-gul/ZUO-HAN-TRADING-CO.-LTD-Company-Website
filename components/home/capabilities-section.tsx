import { CheckCircle } from 'lucide-react'

const capabilities = [
  'Custom branding and logo application',
  'Personalized packaging design',
  'Quality product sourcing',
  'Supplier verification and vetting',
  'Multi-category product expertise',
  'Brand consistency management',
  'Small to large quantity orders',
  'Fast turnaround times',
  'White-label ready products',
  'Quality assurance checks',
  'Inventory management',
  'Global shipping solutions'
]

export default function CapabilitiesSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-slate-900">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mb-6 border border-accent/30">
              <span className="text-sm font-semibold text-accent">What We Offer</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Your Complete Brand Launch Partner
            </h2>
            
            <p className="text-lg text-secondary mb-8">
              We source high-quality products, apply your branding, and handle all logistics. You get a finished, ready-to-sell product under your own brand name.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm text-secondary">{cap}</span>
                </div>
              ))}
            </div>
          </div>       

          <div className="relative h-96 rounded-lg overflow-hidden border border-border bg-slate-800">
            <img
              // src="/branded-products-showcase-custom-packaging.jpg"
              src="/pic2.jpeg"
              alt="Custom branded products showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}