import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const TeamCard = ({ name, role }: { name: string; role: string }) => (
  <div className="text-center">
    <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
      <Image
        src="/placeholder.svg?height=200&width=200"
        alt={name}
        fill
        className="object-cover"
      />
    </div>
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-green-700">{role}</p>
  </div>
);


export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image src="/placeholder.svg?height=400&width=1200" alt="DMT Acres Farm" fill className="object-cover" />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About DMT Acres</h1>
          <p className="mx-auto max-w-[700px] mt-4 text-lg text-gray-200">
            Learn about our journey, mission, and commitment to sustainable agriculture
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Who We Are</h2>
              <p className="text-gray-600">
                DMT Acres is a registered and dynamic farming enterprise based in Ntcheu District, Malawi. Founded in
                2019, this agriculture farming enterprise was officially registered in April 2024, specializing in
                poultry farming, crop production and organic manure manufacturing.
              </p>
              <p className="text-gray-600">
                Our operations are guided by a passion for food security, environmental sustainability and economic
                empowerment. Our focus is on cultivating high-quality crops and livestock while implementing innovative
                and eco-friendly farming techniques.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="DMT Acres Farm" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Operations */}
      <section className="py-16 bg-green-50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Operations</h2>
            <p className="mx-auto max-w-[700px] text-gray-600">
              DMT Acres embraces a sustainable and symbiotic farming system where our poultry and crop production
              complement each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🐔</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Poultry Farming</h3>
              <p className="text-gray-600">
                We focus primarily on chicken farming, ensuring high-quality, nutritious poultry products for local
                markets. Our approach emphasizes proper animal husbandry, biosecurity and ethical farming practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🌽</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Crop Production</h3>
              <p className="text-gray-600">
                We cultivate a variety of staple and high value crops including legumes (cowpeas), maize and cassava and
                other seasonal produce like tomato and garlic. We use sustainable farming techniques to maximize yield
                while preserving soil health.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Organic Manure Production</h3>
              <p className="text-gray-600">
                As part of our commitment to environmental conservation, we produce organic manure to enhance soil
                fertility and reduce reliance on chemical fertilizers, promoting eco-friendly and cost-effective manure.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-600">
              The nutrient-rich manure from our chickens is carefully processed into organic fertilizer, which enriches
              the soil and enhances crop yields. In return, the crops provide a natural and sustainable source of feed
              for the poultry, creating a balanced ecosystem that minimizes waste and promote environmental
              sustainability. This integrated approach not only improves productivity but also supports long-term soil
              health, reducing the need for synthetic fertilizers while ensuring high quality produce.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Commitment */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter text-green-800">Our Vision</h3>
              <p className="text-gray-600">
                To become a leading agricultural enterprise in Malawi, driving sustainable farming practices and
                contributing to national food security and economic growth.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter text-green-800">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality agricultural products through sustainable farming, advanced techniques, and
                community engagement, ensuring growth for both our business and the local farming sector.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter text-green-800">Our Commitment</h3>
              <p className="text-gray-600">
                We believe in sustainable agriculture that not only feeds communities but also nurtures the environment.
                Through innovative farming methods, responsible resource management, and continuous improvement, we
                strive to contribute to Malawi's growth and food security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Goals */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Business Goals</h2>
            <p className="mx-auto max-w-[700px] text-gray-200">
              DMT Acres is committed to growth, innovation, and sustainability in all our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Increase Production Capacity</h3>
                <p className="text-gray-300">
                  Expand farming operations and improve crop yields through efficient farming techniques.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Strengthen Distribution Channels</h3>
                <p className="text-gray-300">
                  Build reliable partnerships with local markets, retailers and bulk buyers to expand product reach.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Achieve Financial Sustainability</h3>
                <p className="text-gray-300">
                  Optimize cost management, improve operational efficiency, and secure funding or grants for business
                  growth.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Implement Advanced Techniques</h3>
                <p className="text-gray-300">
                  Adopt precision farming, irrigation systems, and improved poultry housing for increased efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Diversify Product Offerings</h3>
                <p className="text-gray-300">
                  Introduce additional poultry breeds, new crop varieties, and value-added products such as packaged
                  organic fertilizers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Team Structure</h2>
            <p className="mx-auto max-w-[700px] text-gray-600">
              DMT Acres is led by a dedicated team of professionals committed to excellence in agriculture.
            </p>
          </div>

          {/* Top Level - Managing Director */}
          <div className="flex justify-center mb-16">
            <div className="text-center">
              <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=200&width=200" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Daniel Tsonga</h3>
              <p className="text-green-700">Managing Director</p>
            </div>
          </div>

          {/* Second Level - 2 Members */}
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <TeamCard name="Mwayi Makhalila" role="Operations Manager" />
            <TeamCard name="Angela Chinyama" role="Finance & Admin" />
          </div>

          {/* Third Level - 4 Members */}
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <TeamCard name="Dr. Malata" role="Production Manager" />
            <TeamCard name="Carol Chingwalu" role="Sales & Marketing" />
            <TeamCard name="Chipiliro" role="Farm Manager" />
            <TeamCard name="-" role="Veterinary Officer" />
          </div>

          {/* Fourth Level - 4 Members */}
          <div className="flex flex-wrap justify-center gap-12">
            <TeamCard name="Chikondi Lifa" role="Geo-spartial Analyst" />
            <TeamCard name="-" role="Farm Supervisor" />
            <TeamCard name="-" role="Sales Executives" />
            <TeamCard name="-" role="Field Workers" />
          </div>
        </div>
      </section>
    </div>
  )
}