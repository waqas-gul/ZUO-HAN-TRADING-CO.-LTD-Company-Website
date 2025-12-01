"use client"

import React from 'react'
import { motion } from 'framer-motion'

const TrustedBySection = () => {
  const companies = [
  "InnovaTech Solutions",
  "BlueWave Analytics",
  "QuantumSoft Labs",
  "ApexWare Systems",
  "NorthStar Logistics",
  "BrightPath Consulting",
  "SilverOak Manufacturing",
  "Everline Foods",
  "RapidLink Couriers",
  "SkyBridge Finance",
  "ClearVision Healthcare",
  "UrbanEdge Retail",
  "GreenLeaf Organics",
  "Pioneer Engineering Works",
  "NovaCore Telecom",
  "PrimeSource Distributors",
  "TechSphere Dynamics",
  "CloudNest IT Services",
  "AlphaPoint Security",
  "MetroWorks Construction",
  "NextEra Apparel",
  "Oakridge Furnishings",
  "Suncrest Farms",
  "BlueSky Energy Solutions",
  "Vertex Digital Media",
  "StreamFlow Marketing",
  "BrightLabs Software",
  "CoreBridge Automation",
  "FreshPoint Supplies",
  "GlobalReach Exports"
];

  // Duplicate for seamless loop
  const duplicatedCompanies = [...companies, ...companies, ...companies, ...companies]

  const scrollVariants = {
    animate: {
      x: [0, -3840],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 90,
          ease: "linear",
        },
      },
    },
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-blue-900 text-white overflow-hidden " >
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by Global Businesses
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Join the world's most innovative companies who trust our solutions
          </p>
        </motion.div>
       

        <div className="relative">
          <motion.div
            variants={scrollVariants}
            animate="animate"
            className="flex space-x-12 items-center py-4"
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex-shrink-0 flex items-center justify-center min-w-max"
              >
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white/80 font-semibold text-lg whitespace-nowrap">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBySection