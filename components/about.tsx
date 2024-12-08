"use client"

import { motion } from "motion/react"

export function About() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg mb-8">
            At Tribal Art Initiative, we represent the voices of indigenous artists,
            showcasing their talents and reconnecting them with their roots.
          </p>
          <h2 className="font-serif text-5xl">
            An Exquisite
          </h2>
        </motion.div>
      </div>
    </div>
  )
}

