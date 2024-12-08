import type { Metadata } from "next"
import { Inter, Fraunces } from 'next/font/google'
import "./globals.css"
import { Nav } from "@/components/nav"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" })

export const metadata: Metadata = {
  title: "Tribal Art Initiative",
  description: "Explore the unique world of tribal art",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fraunces.variable} font-sans`}>
        <main className="max-w-screen overflow-hidden">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

