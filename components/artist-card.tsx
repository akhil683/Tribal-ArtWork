import Image from 'next/image'
import Link from 'next/link'

interface ArtistCardProps {
  artist: {
    id: number
    name: string
    tribe: string
    image: string
  }
}

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link href={"/artist-portfolio"} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <Image
          src={artist.image}
          alt={artist.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{artist.name}</h3>
        <p className="text-gray-600">{artist.tribe} Tribe</p>
      </div>
    </Link>
  )
}

