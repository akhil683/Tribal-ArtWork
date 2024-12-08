import { Hero } from "@/components/hero"
import { Explore } from "@/components/explore"
import { Services } from "@/components/services"
import { Artwork } from "@/components/artwork"
import { ContactForm } from "@/components/contact-form"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <ContactForm />
      <Explore />
      <Services />
      <Artwork />
      <Testimonials />
    </>
  )
}

