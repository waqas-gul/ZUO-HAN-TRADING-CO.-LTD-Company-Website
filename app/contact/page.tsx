import ContactForm from '@/components/contact/contact-form'
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react'

export const metadata = {
  title: "Contact Zuohan Trading | Brand Launch Solutions",
  description:
    "Get in touch with Zuohan Trading. Contact our team for product sourcing, branding, and complete brand launch services.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Enhanced Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-900 to-slate-900 py-20 md:py-28 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl md:text-6xl font-bold text-balance">
              Launch Your Brand With Us
            </h1>
            <p className="text-xl text-gray-100 text-balance mb-8">
              Have a product idea? We'll handle sourcing, branding, and
              delivery. Your vision, our execution.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <span className="text-sm font-semibold">
                Typically respond within 24 hours
              </span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Layout - Form + Info Side by Side */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
            {/* Left: Contact Form */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Right: Contact Information Cards */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="mb-8 text-3xl font-bold text-white">
                  Get in Touch
                </h2>
              </div>

              {/* Email Card */}
              <div className="group rounded-xl border border-border bg-gradient-to-br from-slate-800 to-slate-900 p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-all text-accent">
                  <Mail size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Email</h3>
                <a
                  href="mailto:info@Zuohantrading.ae"
                  className="text-accent hover:text-accent-light font-medium transition-colors"
                >
                  info@zuohantrading.com
                </a>
                <p className="mt-3 text-sm text-secondary">
                  We typically respond within 24 hours during business hours.
                </p>
              </div>

              {/* Phone Card */}
              <div className="group rounded-xl border border-border bg-gradient-to-br from-slate-800 to-slate-900 p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-all text-accent">
                  <Phone size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Phone</h3>
                <a
                  href="tel:+971545555555"
                  className="text-accent hover:text-accent-light font-medium transition-colors"
                >
                  +86-13238384330
                </a>
                <p className="mt-3 text-sm text-secondary">
                  Monday-Friday, 9 AM - 6 PM GST
                </p>
              </div>

              {/* Address Card */}
              <div className="group rounded-xl border border-border bg-gradient-to-br from-slate-800 to-slate-900 p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-all text-accent">
                  <MapPin size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Office Address
                </h3>
                <p className="text-secondary font-medium">
                  Address: Tangjia Town, Dongguan City, Guangdong
                  Province,warehouse 326, Longjing Living Plaza, No. 96 Tanglong
                  East Road
                </p>
              </div>

              {/* Business Hours Card */}
              <div className="group rounded-xl border border-border bg-gradient-to-br from-slate-800 to-slate-900 p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-all text-accent">
                  <Clock size={24} />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Business Hours
                </h3>
                <ul className="space-y-2 text-sm text-secondary">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-foreground">
                      9:00 AM - 6:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-foreground">
                      10:00 AM - 4:00 PM
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom max-w-3xl">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mx-auto border border-accent/30 mb-4">
              <span className="text-sm font-semibold text-accent">FAQs</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary">
              Quick answers to common questions about launching your brand with
              us.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How does your brand launching service work?",
                a: "You share your product idea, we source high-quality ready-made products, apply your branding and packaging, and deliver finished, ready-to-sell products under your brand name. No manufacturing required.",
              },
              {
                q: "What types of products can you source?",
                a: "We can source virtually any product - pens, bottles, gadgets, beauty items, accessories, home goods, and custom products. Just tell us what you need.",
              },
              {
                q: "Do you have minimum order quantities?",
                a: "MOQs vary by product type, but we work with businesses of all sizes. We can often accommodate smaller quantities starting from 100-500 units depending on the product.",
              },
              {
                q: "How do you ensure product quality?",
                a: "We conduct thorough quality inspections on all sourced products before applying your branding. We work with trusted suppliers and verify product quality meets your standards.",
              },
              {
                q: "Can you help with packaging design?",
                a: "Yes! We provide complete packaging design services including logo application, custom packaging, and label design to make your products look professional and branded.",
              },
              {
                q: "What are your shipping and delivery options?",
                a: "We offer global shipping with multiple carrier options. Products can be shipped directly to you or to your customers. We handle customs clearance and provide tracking.",
              },
              {
                q: "How long does the entire process take?",
                a: "Typically 3-6 weeks depending on product complexity and shipping destination. Sourcing takes 1-2 weeks, branding 1 week, and shipping 1-3 weeks.",
              },
              {
                q: "Do you offer warehouse storage?",
                a: "Yes, we provide 3PL warehouse services to store your inventory until it's ready for shipping. We offer real-time inventory tracking and management.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-border bg-slate-800/50 p-6 cursor-pointer hover:border-accent/50 transition-all"
              >
                <summary className="flex items-start justify-between font-semibold text-white cursor-pointer">
                  {faq.q}
                  <span className="text-accent group-open:rotate-180 transition-transform flex-shrink-0">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-secondary leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Launch Your Brand?
          </h2>
          <p className="mx-auto max-w-2xl mb-8 text-gray-100">
            Share your product idea with us and we'll handle everything from
            sourcing to delivery. Let's build your brand together.
          </p>
        </div>
      </section>
    </div>
  );
}