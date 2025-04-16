import Image from "next/image"

export default function GalleryPage() {
  // Sample gallery images - in a real implementation, these would be actual farm images
  const galleryImages = [
    { src: "/images/gallery/PoultryFarm.webp?height=300&width=400", alt: "Poultry Farm", category: "Poultry" },
    { src: "/images/gallery/MaizeField.webp?height=300&width=400", alt: "Maize Field", category: "Crops" },
    { src: "/images/gallery/Organic.webp?height=300&width=400", alt: "Organic Fertilizer", category: "Fertilizer" },
    { src: "/images/gallery/ChickenCoop.webp?height=300&width=400", alt: "Chicken Coop", category: "Poultry" },
    { src: "/images/gallery/CassavaPlantation.webp?height=300&width=400", alt: "Cassava Plantation", category: "Crops" },
    { src: "/images/gallery/TrainingSession.webp?height=300&width=400", alt: "Training Session", category: "Training" },
    { src: "/images/gallery/FreshEggs.webp?height=300&width=400", alt: "Fresh Eggs", category: "Poultry" },
    { src: "images/gallery/TomatoPlants.webp?height=300&width=400", alt: "Tomato Plants", category: "Crops" },
    { src: "/images/gallery/Organic.webp?height=300&width=400", alt: "Organic Fertilizer", category: "Fertilizer" },
    { src: "/images/gallery/FarmWorkers.webp?height=300&width=400", alt: "Farm Workers", category: "Team" },
    { src: "/images/gallery/CowpeasHarvest.webp?height=300&width=400", alt: "Cowpeas Harvest", category: "Crops" },
    { src: "/images/gallery/ConsultancySession.webp?height=300&width=400", alt: "Consultancy Session", category: "Training" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image src="/images/home/CropProduction.webp?height=400&width=1200" alt="DMT Acres Gallery" fill className="object-cover" />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Photo Gallery</h1>
          <p className="mx-auto max-w-[700px] mt-4 text-lg text-gray-200">
            Visual showcase of our farming activities and operations
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-64 w-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
                  <p className="font-semibold text-lg">{image.alt}</p>
                  <span className="text-sm bg-green-700 px-2 py-1 rounded-full mt-2">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}