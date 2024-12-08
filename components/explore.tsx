"use client"
import { motion } from 'motion/react'
import { Eye, Pencil, Castle } from 'lucide-react'

const offerings = [
  {
    icon: Eye,
    title: "Authentic Tribal Art",
    subtitle: "Cultural Heritage",
    description: "Unearth the beauty and craftsmanship of authentic tribal art, each piece tells a unique story."
  },
  {
    icon: Pencil,
    title: "Art Workshops",
    subtitle: "Hands-on Experience",
    description: "Participate in workshops that connect you with traditional artisans, learning ancient techniques and cultural heritage."
  },
  {
    icon: Castle,
    title: "Tribal Collaborations",
    subtitle: "Unique Partnerships",
    description: "Engage with local communities through meaningful collaborations that empower artists and enrich cultural exchanges."
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

export function Explore() {
  return (
    <section className="py-20 md:px-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl"
          >
            Explore Offerings
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                variants={itemVariants}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <offering.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-medium mb-2">
                    {offering.title}
                  </h3>
                  <p className="md:text-xl text-gray-600 mb-3">
                    {offering.subtitle}
                  </p>
                  <p className="md:text-xl md:font-semibold text-gray-800 leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

