"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const ProductCategories = () => {
  const router = useRouter()

  const categories = [
    {
      id: 'beauty-cosmetics',
      name: 'Beauty & Cosmetics',
      image: '/categories/beauty-cosmetics.jpg',
      description: 'Creams, serums, bottles & cosmetic packaging',
      tags: ['Private Label', 'Custom Formulation', 'White Label']
    },
    {
      id: 'health-personal-care',
      name: 'Health & Personal Care',
      image: '/categories/health-personal-care.jpg',
      description: 'Serums, oils, personal care products',
      tags: ['OEM', 'Contract Manufacturing', 'Custom Packaging']
    },
    {
      id: 'supplements',
      name: 'Supplements',
      image: '/categories/supplements.jpg',
      description: 'Gummies, capsules, tablets & health supplements',
      tags: ['GMP Certified', 'Private Label', 'Custom Formulas']
    },
    {
      id: 'toys-kids',
      name: 'Toys & Kids',
      image: '/categories/toys-kids.jpg',
      description: 'Wooden toys, educational toys & kids products',
      tags: ['Safety Certified', 'Custom Designs', 'Bulk Manufacturing']
    },
    {
      id: 'home-patio-lawn',
      name: 'Home, Patio & Lawn',
      image: '/categories/home-patio.jpg',
      description: 'Patio furniture, outdoor decor & lawn items',
      tags: ['Custom Designs', 'Bulk Orders', 'OEM Services']
    },
    {
      id: 'household-essentials',
      name: 'Household Essentials',
      image: '/categories/household-essentials.jpg',
      description: 'Tapes, organizers, cleaning supplies',
      tags: ['Private Label', 'Custom Packaging', 'Bulk Manufacturing']
    },
    {
      id: 'fitness-lifestyle',
      name: 'Fitness & Lifestyle',
      image: '/categories/fitness-lifestyle.jpg',
      description: 'Resistance bands, rollers, fitness equipment',
      tags: ['OEM', 'Custom Designs', 'White Label']
    },
    {
      id: 'pet-products',
      name: 'Pet Products',
      image: '/categories/pet-products.jpg',
      description: 'Grooming items, toys, pet care products',
      tags: ['Private Label', 'Custom Designs', 'Safety Certified']
    },
    {
      id: 'safety-sleep',
      name: 'Safety & Sleep Products',
      image: '/categories/safety-sleep.jpg',
      description: 'Breathing strips, tapes, sleep aids',
      tags: ['Medical Grade', 'FDA Compliant', 'Custom Manufacturing']
    }
  ]

  const handleCategoryClick = (categoryId: string) => {
    router.push(`/categories/${categoryId}`)
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 mb-4"
          >
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Product Categories
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Manufacturing Categories
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Explore our wide range of product categories with complete manufacturing solutions
          </motion.p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {categories.map((category) => (
              <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="p-1">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card 
                      className="group relative overflow-hidden cursor-pointer border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-2xl transition-all duration-300"
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      <CardContent className="p-0">
                        {/* Image Container */}
                        <div className="relative h-48 w-full overflow-hidden">
                          {/* Placeholder for image - replace with actual Image component */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                            <span className="text-white font-bold text-lg text-center px-4">
                              {category.name}
                            </span>
                          </div>
                          
                          {/* Actual Image Component (uncomment when images are ready) */}
                          {/* 
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          />
                          */}
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {category.name}
                          </h3>
                          
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                            {category.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {category.tags.slice(0, 2).map((tag, index) => (
                              <span
                                key={index}
                                className="inline-block px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                            {category.tags.length > 2 && (
                              <span className="inline-block px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full">
                                +{category.tags.length - 2} more
                              </span>
                            )}
                          </div>

                          <Button 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                            size="sm"
                          >
                            View Manufacturing Options
                          </Button>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-lg transition-all duration-300 pointer-events-none" />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static transform-none" />
            <CarouselNext className="relative static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default ProductCategories