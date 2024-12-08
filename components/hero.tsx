"use client"

import { motion } from "motion/react"
import Image from "next/image"
import heroImage from "../public/hero.jpg"

export function Hero() {
  return (
    <div className="relative min-h-screen bg-[#1a1a1a] text-white pt-16 md:px-12">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-serif text-4xl md:text-7xl max-md:text-center mb-8">
              Welcome to Tribal Art Initiative
            </h1>
            <p className="text-lg mb-4 text-gray-300">
              Explore the unique world of tribal art, enriched with tradition and cultural significance.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Join us in celebrating the rich heritage of tribal communities through art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-pink-500 text-white text-lg px-6 py-4 rounded-md hover:bg-pink-500 transition-colors">
                Limited Access
              </button>
              {/* <div className="text-gray-300 flex items-center"> */}
              {/*   contact@tribalartinitiative.com */}
              {/* </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: -10 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <Image
              src={heroImage}
              alt="Tribal Art"
              width={600}
              height={800}
              className="rounded-lg transform rotate-6 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1920 250" className="w-full">
          <path
            fill="white"
            d="M1920,250H0V0C0,0,937.5,250,1920,0V250z"
          />
        </svg>
      </div>
    </div>
  )
}

