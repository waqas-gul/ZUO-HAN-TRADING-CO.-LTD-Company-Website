'use client'

import { useState } from 'react'
import { ChevronRight, Search, Users, Package, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    name: 'Beauty & Cosmetics',
    image: '/gemstone-2016874_1280.jpg',
    description: 'Creams, serums, bottles & complete cosmetic lines with custom branding',
    subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Fragrances'],
    suppliers: 89,
    featured: true,
    manufacturing: ['Private Label', 'Custom Formulation', 'White Label']
  },
  {
    name: 'Health & Personal Care',
    image: '/online-marketing-hIgeoQjS_iE-unsplash.jpg',
    description: 'Serums, oils, personal hygiene products with quality assurance',
    subcategories: ['Body Care', 'Oral Care', 'Personal Hygiene', 'Wellness'],
    suppliers: 76,
    featured: true,
    manufacturing: ['OEM', 'Contract Manufacturing', 'Custom Packaging']
  },
  {
    name: 'Supplements & Nutrition',
    image: '/pills-6127501_1280.jpg',
    description: 'Gummies, capsules, tablets & health supplements with GMP certification',
    subcategories: ['Vitamins', 'Protein Supplements', 'Herbal Extracts', 'Sports Nutrition'],
    suppliers: 67,
    featured: true,
    manufacturing: ['GMP Certified', 'Private Label', 'Custom Formulas']
  },
  {
    name: 'Toys & Kids Products',
    image: '/mirna-wabi-sabi-196kFSh9EJA-unsplash.jpg',
    description: 'Wooden toys, educational toys & kids accessories with safety certification',
    subcategories: ['Educational Toys', 'Outdoor Play', 'Baby Products', 'Arts & Crafts'],
    suppliers: 54,
    manufacturing: ['Safety Certified', 'Custom Designs', 'Bulk Manufacturing']
  },
  {
    name: 'Home, Patio & Lawn',
    image: '/sk-strannik-9U9Kf6191X0-unsplash.jpg',
    description: 'Patio furniture, outdoor decor & home accessories with custom designs',
    subcategories: ['Outdoor Furniture', 'Home Decor', 'Kitchenware', 'Garden Tools'],
    suppliers: 92,
    manufacturing: ['Custom Designs', 'Bulk Orders', 'OEM Services']
  },
  {
    name: 'Household Essentials',
    image: '/zoshua-colah-KGDAMKJZ0G8-unsplash.jpg',
    description: 'Tapes, organizers, cleaning supplies & utilities with private labeling',
    subcategories: ['Cleaning Products', 'Storage Solutions', 'Home Maintenance', 'Organization'],
    suppliers: 78,
    manufacturing: ['Private Label', 'Custom Packaging', 'Bulk Manufacturing']
  },
  {
    name: 'Fitness & Lifestyle',
    image: '/jakub-zerdzicki-Il9YbhIBiOA-unsplash.jpg',
    description: 'Resistance bands, rollers, fitness equipment with OEM options',
    subcategories: ['Exercise Equipment', 'Yoga Gear', 'Sports Accessories', 'Recovery Tools'],
    suppliers: 63,
    manufacturing: ['OEM', 'Custom Designs', 'White Label']
  },
  {
    name: 'Pet Products',
    image: '/erfan-khoshbin-JJXqZZTbgb0-unsplash.jpg',
    description: 'Grooming items, toys, pet care accessories with safety standards',
    subcategories: ['Pet Toys', 'Grooming Supplies', 'Pet Furniture', 'Feeding Solutions'],
    suppliers: 45,
    manufacturing: ['Private Label', 'Custom Designs', 'Safety Certified']
  },
  {
    name: 'Safety & Sleep Products',
    image: '/pop-zebra-wp81DxKUd1E-unsplash.jpg',
    description: 'Breathing strips, tapes, sleep aid products with medical compliance',
    subcategories: ['Sleep Aids', 'Safety Equipment', 'Health Monitors', 'Comfort Products'],
    suppliers: 38,
    manufacturing: ['Medical Grade', 'FDA Compliant', 'Custom Manufacturing']
  },
]

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredCard, setHoveredCard] = useState(null)

  const filteredCategories = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.subcategories.some((sub) =>
        sub.toLowerCase().includes(searchQuery.toLowerCase())
      )
  )

  const featuredCategories = categories.filter(cat => cat.featured)

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <div className="flex items-center justify-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mx-auto mb-4 border border-accent/30">
            <span className="text-sm font-semibold text-accent">Product Categories</span>
          </div>
          <h1 className="mb-6 text-4xl lg:text-5xl font-bold">Manufacturing Categories</h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-100">
            Complete sourcing and manufacturing solutions across diverse product categories. Launch your brand with our end-to-end services.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      

      {/* All Categories */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Search Section */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search manufacturing categories..."
                className="w-full rounded-lg border border-border bg-slate-800/50 py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <p className="text-sm text-secondary">
                Showing {filteredCategories.length} of {categories.length} manufacturing categories
              </p>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category, index) => (
              <div
                key={category.name}
                className="group relative rounded-lg border border-border bg-slate-800/50 overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Container */}
                <div className="relative h-50 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    {/* <div className="text-center p-4">
                      <h3 className="text-lg font-bold text-white">{category.name}</h3>
                    </div> */}
                   
                  </div>
                  {/* Actual Image - Uncomment when images are ready */}
                  
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300" />
                 
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                   
                    <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors flex-1">
                      {category.name}
                    </h3>
                    <div className="flex items-center gap-1 text-accent text-xs ml-2 flex-shrink-0">
                      <Users size={12} />
                      <span>{category.suppliers}</span>
                    </div>
                  </div>

                  <p className="text-sm text-secondary mb-3 line-clamp-2">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {category.subcategories.slice(0, 2).map((sub, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded border border-slate-600"
                      >
                        {sub}
                      </span>
                    ))}
                    {category.subcategories.length > 2 && (
                      <span className="text-xs bg-slate-700/50 text-gray-400 px-2 py-1 rounded border border-slate-600">
                        +{category.subcategories.length - 2}
                      </span>
                    )}
                  </div>

                  {/* <Link
                    href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    
                    className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:gap-2 transition-all group"
                  >
                    Explore Manufacturing
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link> */}
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="py-16 text-center">
              <Package size={48} className="mx-auto mb-4 text-gray-500" />
              <p className="text-secondary mb-4 text-lg">No manufacturing categories found matching your search.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="button-secondary bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="container-custom">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-2 text-4xl font-bold text-accent">9+</div>
              <p className="text-gray-200">Manufacturing Categories</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-accent">500+</div>
              <p className="text-gray-200">Verified Suppliers</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-accent">15+</div>
              <p className="text-gray-200">Years Experience</p>
            </div>
            <div>
              <div className="mb-2 text-4xl font-bold text-accent">100%</div>
              <p className="text-gray-200">Brand Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 rounded-full bg-accent/10 w-fit px-4 py-2 mx-auto border border-accent/30 mb-4">
            <span className="text-sm font-semibold text-accent">Custom Manufacturing</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Launch Your Brand?</h2>
          <p className="mx-auto max-w-2xl mb-8 text-lg text-secondary">
            Our complete manufacturing solutions include sourcing, quality control, branding, and global logistics. 
            Turn your product idea into a market-ready brand.
          </p>
          <Link 
            href="/contact" 
            className="button-primary inline-flex gap-2 bg-accent hover:bg-accent-light text-foreground font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Start Your Project
            <Zap size={20} className="group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}