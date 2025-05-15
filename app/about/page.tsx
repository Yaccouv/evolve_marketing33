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
          src="/images/banner.jpeg"
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
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
    
    {/* Circular Image on the Left */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-start">
      <div className="w-72 h-72 rounded-full overflow-hidden shadow-md">
        <Image
          src="/images/music.jpeg"
          alt="Evolve Marketing"
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    {/* Text Section on the Right */}
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight tracking-tight">
        Evolve Marketing & Communications
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Our programs aim at a strategic Malawi that is ready to evolve in the marketing space. Evolve Marketing embraces the future — it's already within our reach. 
      </p>
      <p className="text-gray-600 text-lg leading-relaxed">
        We exist to help businesses grow and thrive by crafting meaningful marketing strategies that build connection, influence decisions, and drive lasting success.
      </p>
      <p className="text-gray-600 text-lg leading-relaxed">
        Marketing is more than promotion — it’s giving people a reason to choose your products and services with confidence.
      </p>
    </div>

  </div>
</section>



<section className="bg-gray-50 py-16 px-6 md:px-16">
  <div className="max-w-4xl mx-auto space-y-10">
    <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Core Focus Strengths</h3>

    {[
      { title: "Branding", percent: 30 },
      { title: "Designing", percent: 40 },
      { title: "Copywriting", percent: 50 },
      { title: "Public Relations", percent: 60 }
    ].map(({ title, percent }) => (
      <div key={title} className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">{title}</span>
          <span className="text-gray-500 text-sm">{percent}%</span>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
          <div
            className="bg-gray-800 h-full rounded-full transition-all duration-1000"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    ))}
  </div>
</section>


<section className="bg-white py-16 px-6 md:px-16 border-t border-gray-200">
  <div className="max-w-6xl mx-auto space-y-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
      Our Core Philosophy
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Fair Play Environment</h3>
        <p className="text-gray-600 leading-relaxed">
        With evolve Marketing the goalthe is to create a Fair playenvironment for emergingbusinesses to consideradvertising as well as publicrelations. With these twodisciplines in check EvolveMarketing for advanced IMCbuilds towards a certain level ofstatus by being capable ofreaching out to the multipleaudience.
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Disciplined Communication</h3>
        <p className="text-gray-600 leading-relaxed">
          A busy universe, Evolve seeks to keep & be productive at all times. The world rather the industry of marketing is growing by day with rise digital along social networking packages 
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Audience Reach & Status</h3>
        <p className="text-gray-600 leading-relaxed">
        Our agency will focus on the two waystreet that suffices effectivecommunications by making sure therecipient gets the message and circlesback feedback to the sender.
        </p>
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
