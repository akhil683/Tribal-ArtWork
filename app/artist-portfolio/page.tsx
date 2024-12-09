import Image from 'next/image'
import { ArtworkGrid } from '@/components/artwork-grid'
import { PaymentMethods } from '@/components/payment-methods'
import img1 from "../../public/work1.jpg"
import img2 from "../../public/work2.jpg"
import img3 from "../../public/work3.jpg"

const artist = {
  name: "Maya Johnson",
  photo: img1,
  banner: img3,
  address: "123 Tribal Art Lane, Phoenix, AZ 85001",
  email: "maya.johnson@tribalart.com",
}

const artworks = [
  { id: 1, title: "Desert Sunset", image: img1 },
  { id: 2, title: "Mountain Dreams", image: img2 },
  { id: 3, title: "Canyon Echoes", image: img3 },
]

export default function ArtistPortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-64 md:h-96">
        <Image
          src={artist.banner}
          alt={`${artist.name}'s banner`}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 -mt-36 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white duration-200 hover:scale-105 shadow-gray-400 shadow-lg">
              <Image
                src={artist.photo}
                alt={artist.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{artist.name}</h1>
              <p className="text-gray-600 mb-2">{artist.address}</p>
              <p className="text-gray-600 mb-4">{artist.email}</p>
              <PaymentMethods />
            </div>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Artworks by {artist.name}</h2>
          <ArtworkGrid artworks={artworks} />
        </section>
      </main >
    </div >
  )
}

