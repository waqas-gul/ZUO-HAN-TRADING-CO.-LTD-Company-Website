import {
  CheckCircle,
  Users,
  Globe,
  Award,
  Zap,
  Search,
  Eye,
  Warehouse,
  Truck,
} from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Zuohan Trading | Complete Brand Launch Solutions",
  description:
    "Learn about Zuohan Trading - Your partner for launching brands without manufacturing. We source, brand, and deliver ready-to-sell products.",
};

const values = [
  {
    icon: Search,
    title: "Expert Sourcing",
    description:
      "We find high-quality ready-made products from trusted suppliers worldwide for your brand.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Rigorous inspection and quality control to ensure every product meets your standards.",
  },
  {
    icon: Users,
    title: "Brand Partnership",
    description:
      "We work as an extension of your team to bring your brand vision to life.",
  },
  {
    icon: Globe,
    title: "Global Logistics",
    description:
      "Complete shipping and delivery solutions to get your products where they need to be.",
  },
];

const milestones = [
  {
    year: "2009",
    title: "Founded",
    description:
      "Started with vision to help entrepreneurs launch brands easily",
  },
  {
    year: "2015",
    title: "Expansion",
    description:
      "Established global supplier network across multiple product categories",
  },
  {
    year: "2019",
    title: "3PL Launch",
    description: "Added warehouse storage and fulfillment services",
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Helped launch 500+ brands across diverse product categories",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content - Left Side */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="mb-6 text-4xl lg:text-5xl font-bold">
                About ZUO HAN TRADING CO., LTD
              </h1>
              <p className="mb-8 text-xl text-gray-100 max-w-3xl mx-auto lg:mx-0">
                ZUO HAN TRADING CO., LTD is a fully registered company in China,
                providing complete solutions for building and scaling your
                ecommerce brand. We offer end-to-end services including product
                sourcing, manufacturing support, brand development, 3PL storage,
                and global shipping—ensuring your products are ready to sell
                with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
                >
                  Start Your Brand
                </a>
                <a
                  href="/company-profile.pdf"
                  download="Company Profile.pdf"
                  className="button-secondary border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg transition-all"
                >
                  Download Company Profile
                </a>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative  w-full max-w-md lg:max-w-xl">
                <img
                  src="/WhatsApp Image 2025-11-16 at 7.41.16 PM.jpeg" // Update with your image path
                  alt="ZUO HAN TRADING CO., LTD - Professional trading company headquarters"
                  className="rounded-2xl h-[28rem] object-cover shadow-2xl "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex items-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mb-6 border border-accent/30">
                <span className="text-sm font-semibold text-accent">
                  Our Story
                </span>
              </div>

              <h2 className="mb-6 text-3xl lg:text-4xl font-bold text-white">
                Simplifying Brand Launching
              </h2>
              <p className="mb-4 text-secondary leading-relaxed">
                Zuohan Trading emerged with a revolutionary approach: help
                entrepreneurs and businesses launch their own brands without the
                complexities of manufacturing. We recognized that great ideas
                shouldn't be limited by production challenges.
              </p>
              <p className="mb-4 text-secondary leading-relaxed">
                Our model is simple yet powerful. You share your product vision
                - whether it's pens, bottles, gadgets, beauty items, or any
                custom product. We source high-quality ready-made products,
                apply your branding and packaging, and deliver a finished,
                ready-to-sell product under your brand name.
              </p>
              <p className="text-secondary leading-relaxed">
                Today, we've helped launch over 500 brands across diverse
                categories, providing a complete one-stop solution that turns
                product ideas into market-ready brands.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-slate-800 border border-border">
              <Image
                // src="/branded-products-showcase-custom-packaging.jpg"
                src="/professional-packaging-production-facility-industr.jpg"
                alt="Custom branded products showcase"
                height={1000}
                width={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mx-auto border border-accent/30 mb-4">
              <span className="text-sm font-semibold text-accent">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Complete Brand Launch Solution
            </h2>
            <p className="mx-auto max-w-2xl text-secondary">
              We handle everything from sourcing to delivery so you can focus on
              building your brand.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-lg border border-border bg-slate-800/50 p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/20 text-accent mb-4 mx-auto group-hover:bg-accent/30 transition-colors">
                <Search size={32} />
              </div>
              <h3 className="mb-2 font-semibold text-white">
                Product Sourcing
              </h3>
              <p className="text-sm text-secondary">
                Find high-quality ready-made products from trusted suppliers
                worldwide
              </p>
            </div>

            <div className="group rounded-lg border border-border bg-slate-800/50 p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/20 text-accent mb-4 mx-auto group-hover:bg-accent/30 transition-colors">
                <Eye size={32} />
              </div>
              <h3 className="mb-2 font-semibold text-white">
                Quality Inspection
              </h3>
              <p className="text-sm text-secondary">
                Thorough inspection to ensure products meet your quality
                standards
              </p>
            </div>

            <div className="group rounded-lg border border-border bg-slate-800/50 p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/20 text-accent mb-4 mx-auto group-hover:bg-accent/30 transition-colors">
                <Warehouse size={32} />
              </div>
              <h3 className="mb-2 font-semibold text-white">
                Warehouse Storage
              </h3>
              <p className="text-sm text-secondary">
                Secure 3PL storage facilities for your inventory management
              </p>
            </div>

            <div className="group rounded-lg border border-border bg-slate-800/50 p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/20 text-accent mb-4 mx-auto group-hover:bg-accent/30 transition-colors">
                <Truck size={32} />
              </div>
              <h3 className="mb-2 font-semibold text-white">
                Shipping & Delivery
              </h3>
              <p className="text-sm text-secondary">
                Reliable shipping to deliver finished products to you or
                customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mx-auto border border-accent/30 mb-4">
              <span className="text-sm font-semibold text-accent">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What We Stand For
            </h2>
            <p className="mx-auto max-w-2xl text-secondary">
              These principles guide our mission to make brand launching
              accessible to everyone.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="group rounded-lg border border-border bg-slate-800/50 p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
                >
                  <Icon
                    size={32}
                    className="mb-4 text-accent group-hover:scale-110 transition-transform"
                  />
                  <h3 className="mb-2 font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm text-secondary">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-slate-900/50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mx-auto border border-accent/30 mb-4">
              <span className="text-sm font-semibold text-accent">
                Our Journey
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Milestones of Innovation
            </h2>
            <p className="mx-auto max-w-2xl text-secondary">
              15 years of helping entrepreneurs turn ideas into successful
              brands.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 md:gap-12">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-lg flex-shrink-0">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="mt-2 h-20 w-1 bg-gradient-to-b from-accent to-transparent" />
                  )}
                </div>
                <div className="pb-8 pt-2">
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {milestone.title}
                  </h3>
                  <p className="text-secondary">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container-custom">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold text-accent">15+</div>
              <p className="text-gray-200">Years of Experience</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-accent">500+</div>
              <p className="text-gray-200">Brands Launched</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-accent">50+</div>
              <p className="text-gray-200">Product Categories</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-accent">100%</div>
              <p className="text-gray-200">Turnkey Solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mx-auto border border-accent/30 mb-4">
            <span className="text-sm font-semibold text-accent">Our Team</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Your Brand Launch Experts
          </h2>
          <p className="mx-auto max-w-2xl mb-12 text-secondary">
            Our team of sourcing specialists, quality inspectors, and logistics
            experts brings decades of combined experience to deliver your fully
            branded, ready-to-sell products.
          </p>
          <a
            href="/contact"
            className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold"
          >
            Start Your Brand
          </a>
        </div>
      </section>
    </div>
  );
}
