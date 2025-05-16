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
          src="/images/marketing/banner.jpeg"
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
          src="/images/marketing/music.jpeg"
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
      Our programs aims at a strategic Malawi that is yet to evolve inthe marketing area of business. Evolve Marketing embraces thefuture as it already is at our disposal. Overall, the role of amarketing consultancy is to help businesses grow and succeedby developing and implementing effective marketing strategiesthat connect them with their target audience and drive salesand revenue growth. <br /><br />  Marketing is giving people information and showing them the reason to choose your products and services 
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
        With evolve Marketing the goalthe is to create a Fair play environment for emerging businesses to consider advertising as well as public relations. With these two disciplines in check Evolve Marketing for advanced IMC builds towards a certain level of status by being capable of reaching out to the multiple audience.
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
        Our agency will focus on the two way street that suffices effective communications by making sure the recipient gets the message and circles back feedback to the sender.
        </p>
      </div>
    </div>
  </div>
</section>




<section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-24">
  <div className="max-w-6xl mx-auto space-y-16">
    
    {/* Section Title */}
    <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Future Plans & Milestones</h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Transforming Markets & becoming a business leader.<br />
        As a firm we hope to be able operate on even a larger scale, as the day goes, all the data we have gathered will transform into useful experience if applied wisely.<br />
        Righ about now in cases of designing we've only been drawn to graphics but we look forward to acquiring more 21st century skills that are a perfect fit for this generation.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative border-l-4 border-black pl-6 space-y-10">
      {/* Milestone 1 */}
      <div className="relative">
        <div className="absolute left-[-1.1rem] top-1 w-5 h-5 bg-black rounded-full border-4 border-white"></div>
        <h4 className="text-xl font-semibold text-gray-900">Gain recognition over renowned organizations under the plc entity</h4>
        <span className="block text-sm text-gray-600 mt-1">2030</span>
      </div>

      {/* Milestone 2 */}
      <div className="relative">
        <div className="absolute left-[-1.1rem] top-1 w-5 h-5 bg-black rounded-full border-4 border-white"></div>
        <h4 className="text-xl font-semibold text-gray-900">Simply global brand.</h4>
        <span className="block text-sm text-gray-600 mt-1">2040</span>
      </div>

      {/* Milestone 3 */}
      <div className="relative">
        <div className="absolute left-[-1.1rem] top-1 w-5 h-5 bg-black rounded-full border-4 border-white"></div>
        <h4 className="text-xl font-semibold text-gray-900">Implement everything the organization has claimed of.</h4>
        <span className="block text-sm text-gray-600 mt-1">2026</span>
      </div>

      {/* Milestone 4 */}
      <div className="relative">
        <div className="absolute left-[-1.1rem] top-1 w-5 h-5 bg-black rounded-full border-4 border-white"></div>
        <h4 className="text-xl font-semibold text-gray-900">Try to expand internationally, Franchises, mergers and acquisitions</h4>
        <span className="block text-sm text-gray-600 mt-1">2035</span>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}
