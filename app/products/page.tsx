import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const TeamCard1 = ({ name, role, grade, school, major, imageSrc }: { name: string; role: string; grade: string; school: string; major: string; imageSrc: string }) => (
  <div className="text-center max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden text-center p-6 space-y-3">
    <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4 border-4 border-green-700">
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="object-cover"
      />
    </div>
    
    <div className="w-72 mx-auto"> {/* Fixed width and centered */}
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-green-700">{role}</p>
      {grade && grade !== "null" && <p className="text-green-700">{grade}</p>}
      {major && major !== "null" && <p className="text-green-700">{major}</p>}
      {school && school !== "null" && <p className="text-green-700">{school}</p>}
    </div>
  </div>
)
const TeamCard = ({ name, role, grade, major, imageSrc }: { name: string; role: string; grade: string; major: string; imageSrc: string }) => (

<Card className="bg-white border-green-200">
<CardHeader className="pb-2">
  <CardTitle className="flex items-center gap-2">
    <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4 border-green-700">
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="object-cover"
      />
    </div>
  </CardTitle>
</CardHeader>
<CardContent>
  <div className="w-72 mx-auto"> {/* Fixed width and centered */}
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-green-700">{role}</p>
    {grade && grade !== "null" && <p className="text-green-700">{grade}</p>}
    {major && major !== "null" && <p className="text-green-700">{major}</p>}
  </div>
</CardContent>
</Card>
)


export default function AboutPage() {
  return (
    <div className="flex min-h-[500px] flex-col">
    <section className="relative h-[500px] w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/game.jpeg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
  
      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Evolve Marketing</h1>
        <p className="max-w-xl text-lg text-gray-200 mb-6">
          We craft modern marketing communications that drive results and build lasting brand value.
        </p>
       
      </div>
    </section>

  
    <section className="bg-white py-20 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Subscription and Competitive Advantage</h2>

    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {/* Card 1 */}
      <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
        <div className="text-sm uppercase font-semibold text-gray-500 mb-2">Package</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Advertising</h3>
        <p className="text-gray-700 mb-4">
          From jingles, commercials, social media, and infomercials to printing in our weekly and quarterly issues.
        </p>
        <p className="text-sm text-gray-600 mb-4 italic">
          Subscribe to this package and get the brand awareness and loyalty your business deserves.
        </p>
        <div className="text-xl font-bold text-black">MWK 100,000</div>
      </div>

      {/* Card 2 */}
      <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
        <div className="text-sm uppercase font-semibold text-gray-500 mb-2">Package</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Copywriting & Proofreading</h3>
        <p className="text-gray-700 mb-4">
          For profound advertising scripts that evoke the reader to delve into what is being communicated.
        </p>
        <p className="text-sm text-gray-600 mb-4 italic">
          Copywriting ensures efficiency by enhancing connectivity between the business and clients.
        </p>
        <div className="text-xl font-bold text-black">MWK 150,000 - MWK 250,000</div>
      </div>

      {/* Card 3 */}
      <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
        <div className="text-sm uppercase font-semibold text-gray-500 mb-2">Package</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Graphic Designing</h3>
        <p className="text-gray-700 mb-4">
          Flyers, infographics, album cover art, banners, billboards, brochures – mass appeal is one way to put it.
        </p>
        <p className="text-sm text-gray-600 mb-4 italic">
          Great design requires deep insight into color psychology and smart AI tools that provide impactful templates.
        </p>
        <div className="text-xl font-bold text-black">MWK 20,000</div>
      </div>

      {/* Card 4 */}
      <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition duration-300">
        <div className="text-sm uppercase font-semibold text-gray-500 mb-2">Package</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Public Relations</h3>
        <p className="text-gray-700 mb-4">
          PR calls for public support to build understanding, gain neutrality, or respond to inquiries effectively.
        </p>
        <p className="text-sm text-gray-600 mb-4 italic">
          A well-executed public relations strategy is an ongoing process that builds strong, lasting relationships.
        </p>
        <div className="text-xl font-bold text-black">MWK 200,000</div>
      </div>
    </div>
  </div>
</section>





<section className="bg-white py-20 px-6 md:px-16 border-t border-gray-200 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Evolve Marketing Hierarchy</h2>

  <ul className="relative border-l-2 border-gray-300 pl-6">
    {/* Root */}
    <li className="mb-6">
      <div className="inline-block bg-black text-white px-4 py-2 rounded-md font-semibold relative -left-4">
        Evolve Marketing
      </div>

      {/* Level 1 */}
      <ul className="mt-6 border-l-2 border-gray-300 pl-6">
        {/* Advertising */}
        <li className="mb-4 relative">
          <div className="font-semibold text-gray-900">Advertising</div>

          {/* Level 2 */}
          <ul className="mt-2 border-l-2 border-gray-300 pl-6">
            <li className="mb-2 text-gray-700">Jingles Commercials</li>
            <li className="mb-2 relative">
              <div className="font-semibold text-gray-900">Graphic Designing</div>

              {/* Level 3 */}
              <ul className="mt-2 border-l-2 border-gray-300 pl-6 text-gray-700">
                <li>Corporate Branding</li>
                <li>Personal Branding</li>
                <li>Vehicle Branding</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Public Relations */}
        <li className="mb-4 relative">
          <div className="font-semibold text-gray-900">Public Relations</div>
          <ul className="mt-2 border-l-2 border-gray-300 pl-6 text-gray-700">
            <li>Proofreading</li>
          </ul>
        </li>

        {/* Copywriting */}
        <li className="mb-4 text-gray-900 font-semibold">Copywriting</li>
      </ul>
    </li>
  </ul>
</section>


    </div>
  )
}
