"use client"

import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

const services = [
  {
    title: "Art Exhibitions",
    description: "Visit our curated exhibitions showcasing a blend of contemporary and traditional tribal art.",
    href: "/exhibitions"
  },
  {
    title: "Cultural Workshops",
    description: "Join our cultural workshops that celebrate tribal art forms and storytelling traditions.",
    href: "/workshops"
  },
  {
    title: "Art Preservation",
    description: "Support our efforts in preserving traditional tribal art styles and techniques for future generations.",
    href: "/preservation"
  },
  {
    title: "Community Outreach Programs",
    description: "Be a part of our outreach programs that support and uplift tribal artist communities through various initiatives.",
    href: "/community"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function Services() {
  return (
    <section className="bg-[#1a1a1a] text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl mb-16 text-center"
        >
          Diverse Services
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <Link href={service.href}>
                <div className="py-8 border-b border-gray-800 flex justify-between items-start hover:bg-gray-900/30 transition-colors px-4 -mx-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-medium mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 transform transition-transform group-hover:translate-x-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

