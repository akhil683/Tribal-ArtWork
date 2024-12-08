import { ArtistCard } from '@/components/artist-card'
import { ArtworkGrid } from '@/components/artwork-grid'
import img1 from "../../public/work1.jpg"
import img2 from "../../public/work2.jpg"
import img3 from "../../public/work3.jpg"

// This would typically come from a database or API
const artists = [
  { id: 1, name: "Maya Johnson", tribe: "Navajo", image: "https://images.unsplash.com/photo-1595523052653-b9f497845c3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Kai Nez", tribe: "Hopi", image: "https://images.unsplash.com/photo-1609174112693-52fdcebffd89?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Zara White", tribe: "Cherokee", image: "https://images.unsplash.com/photo-1630519047643-0b31f2540a1c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
]

const artworks = [
  { id: 2, title: "Spirit Dance", artist: "Kai Nez", image: img1 },
  { id: 3, title: "River's Song", artist: "Zara White", image: img2 },
  { id: 4, title: "Mountain Dreams", artist: "Maya Johnson", image: img3 },
]

export default function ArtDetailsPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <main className="container mx-auto px-4 py-8">
        <h1 className="md:text-4xl text-2xl font-bold mb-8 text-center">Related Artists and Artworks</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Related Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Related Artworks</h2>
          <ArtworkGrid artworks={artworks} />
        </section>
      </main>
    </div>
  )
}

