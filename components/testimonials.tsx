"use client"
import img from "../public/work3.jpg"
import { motion } from "motion/react"
import Image from "next/image"

const testimonials = [
  {
    quote: "The Tribal Art Initiative transformed my understanding of tribal art and its significance—truly an inspiring experience!",
    author: "Ananya Roy",
    role: "Cultural Curator",
    image: img,
  },
  {
    quote: "Working with the Tribal Art Initiative invigorated my passion for art, showcasing unique perspectives and stories.",
    author: "Ananya Roy",
    role: "Cultural Curator",
    image: img,
  },
  {
    quote: "An unforgettable journey through tribal artworks; it reignited my love for cultural traditions and storytelling.",
    author: "Mira Desai",
    role: "Art Historian",
    image: img,
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-16"
        >
          User Experiences
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col"
            >
              <blockquote className="mb-6 text-lg leading-relaxed">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <cite className="not-italic font-medium text-gray-900">
                    {testimonial.author}
                  </cite>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

