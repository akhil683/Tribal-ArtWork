"use client"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import img1 from "../public/work1.jpg"
import img2 from "../public/work2.jpg"
import img3 from "../public/work3.jpg"

const artworks = [
  {
    title: "Current Exhibitions",
    description: "Explore our current exhibitions that showcase diverse tribal artworks and their vibrant culture.",
    image: img1,
    action: "View Artwork",
    href: "/exhibitions"
  },
  {
    title: "Artist Collaborations",
    description: "Learn about our artist collaborations that aim to create dynamic artwork inspired by tribal traditions.",
    image: img2,
    action: "Learn More",
    href: "/collaborations"
  },
  {
    title: "Featured Collection",
    description: "Discover our featured collection highlighting ceremonial and everyday tribal artifacts and artworks.",
    image: img3,
    action: "Browse Collection",
    href: "/collection"
  },
  {
    title: "Cultural Heritage",
    description: "Delve into our cultural heritage through our collection that represents the essence of tribal identity.",
    image: img1,
    action: "Explore Heritage",
    href: "/heritage"
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function Artwork() {
  return (
    <section className="py-20 md:px-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl mb-16"
        >
          Our Artwork
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.title}
              variants={itemVariants}
              className={`relative ${index === 1 ? "md:mt-16" : ""
                } ${index === 2 ? "md:mt-[-4rem]" : ""
                }`}
            >
              <div className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    width={600}
                    height={600}
                    className="object-cover w-full h-[300px] md:h-[600px] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-3xl font-medium mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {artwork.description}
                  </p>
                  <Link
                    href={artwork.href}
                    className="inline-flex items-center font-medium hover:text-gray-900 transition-colors"
                  >
                    {artwork.action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

