import Image from 'next/image'

interface ArtworkGridProps {
  artworks: Array<{
    id: number
    title: string
    artist: string
    image: any
  }>
}

export function ArtworkGrid({ artworks }: ArtworkGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {artworks.map((artwork) => (
        <div key={artwork.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64">
            <Image
              src={artwork.image}
              alt={artwork.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">{artwork.title}</h3>
            <p className="text-gray-600">by {artwork.artist}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

