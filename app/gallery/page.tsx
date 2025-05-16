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
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Evolve Marketing</h2>
    <p className="text-center text-lg text-gray-600 mb-12">
      For Advanced Integrated Marketing Communications
    </p>

    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 text-left text-sm text-gray-800">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="py-4 px-6 font-semibold border-b">Strengths</th>
            <th className="py-4 px-6 font-semibold border-b">Weaknesses</th>
            <th className="py-4 px-6 font-semibold border-b">Opportunities</th>
            <th className="py-4 px-6 font-semibold border-b">Threats</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50 transition">
            <td className="py-4 px-6 border-b">Up-to-date business information</td>
            <td className="py-4 px-6 border-b">All businesses depend on the overall economic growth projected by GDP</td>
            <td className="py-4 px-6 border-b">Growing number of people seeking to be civic educated about tech and marketing</td>
            <td className="py-4 px-6 border-b">Increasing number of competitors</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="py-4 px-6 border-b">Attractive and trendy designs</td>
            <td className="py-4 px-6 border-b"></td>
            <td className="py-4 px-6 border-b">High demand for outstanding marketing communications</td>
            <td className="py-4 px-6 border-b">Supply chain disruptions</td>
          </tr>
          <tr className="hover:bg-gray-50 transition">
            <td className="py-4 px-6 border-b">Quality time invested in research and development</td>
            <td className="py-4 px-6 border-b"></td>
            <td className="py-4 px-6 border-b"></td>
            <td className="py-4 px-6 border-b">Negative reviews</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-12 text-center max-w-3xl mx-auto text-gray-700">
      <p className="italic text-base">
        <strong>Note:</strong> For our competitors, we can only hope for a strategic alliance so we both could satisfy the customer's needs.
      </p>
    </div>
  </div>
</section>



<section className="bg-white py-20 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Text & Market Segmentation */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Market Segmentation & Positioning</h2>
        <p className="text-gray-700 leading-relaxed">
        In addition, to this section we take a look at the people we sell products and offer services to. Market analysis is a detailed assessment of your business’s target market and the competitive landscape within a specific industry. Market analysis is a critical component of it includes segment in the market deciding which customers to target and providing the input needed to develop product proposition.
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
        <div className="flex items-center gap-6">
          <img
            src="/images/newton1.jpg"
            alt="Huey P Newton"
            className="w-32 h-32 object-cover rounded-full border-4 border-black"
          />
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Huey P. Newton</h3>
            <p className="text-sm text-gray-500 italic">African American revolutionary and political activist who founded the Black Panther</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase mb-2">Personality</h4>
            <ul className="list-disc ml-4 text-gray-700 text-sm space-y-1">
              <li>Creative</li>
              <li>Resourceful</li>
              <li>Educated</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase mb-2">Goals</h4>
            <ul className="list-disc ml-4 text-gray-700 text-sm space-y-1">
              <li>Practice self-care daily</li>
              <li>Reduce household waste</li>
              <li>Win more clients</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase mb-2">Likes</h4>
            <ul className="list-disc ml-4 text-gray-700 text-sm space-y-1">
              <li>Yoga</li>
              <li>Lean cooking</li>
              <li>Productivity apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase mb-2">Challenges</h4>
            <ul className="list-disc ml-4 text-gray-700 text-sm space-y-1">
              <li>Dealing with stress</li>
              <li>Managing an eco-conscious</li>
              <li>Meeting her work deadlines</li>
              <li>Household</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-800 uppercase mb-2">Dislikes</h4>
          <ul className="list-disc ml-4 text-gray-700 text-sm space-y-1">
            <li>Smog</li>
            <li>Wasteful packaging</li>
            <li>Fatty food</li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-800 uppercase mb-2">Products They Enjoy</h4>
          <ul className="list-disc ml-4 text-gray-700 text-sm space-y-1">
            <li>Greenery Lifestyle Groceries</li>
            <li>Flawless Green Skincare Line</li>
            <li>Year Yoga Gear Mat</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="relative bg-gray-50 py-20 px-6 sm:px-10 lg:px-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
    {/* Text Section */}
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">Marketing Plan</h2>
      <p className="text-lg text-gray-700">
        <strong>Touching More Lives</strong><br />
        Evolve Marketing paints the bigger canvas by being tactical and by already having devised short term strategies for the uncertainty. <br /><br />
        And along term strategies for the long run. <br />
        For a long lasting impression. We care, our relationship with clients doesn't cease after they make a purchase.
      </p>
    </div>

    {/* Image Section */}
    <div className="w-full">
      <img
        src="/images/chic.jpg"
        alt="Marketing Strategy"
        className="rounded-3xl shadow-xl w-full h-auto object-cover"
      />
    </div>
  </div>

  {/* Decorative Background Element */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-black opacity-5 rounded-full blur-2xl -z-10"></div>
</section>



<section className="bg-white py-20 px-6 sm:px-10 lg:px-24">
  <div className="max-w-6xl mx-auto space-y-16">
    
    {/* Section Title */}
    <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Plan</h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        <strong>Capital Requirements</strong><br />
        In oder to keep this endeavor up and running we are to be accountable, for the pursuit of what may come out as platform for financial activities
      </p>
    </div>

    {/* Capital Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-50 rounded-xl shadow-lg">
        <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
          <tr>
          <th className="px-6 py-4 text-left">Requirement</th>
            <th className="px-6 py-4 text-left">Value</th>
            <th className="px-6 py-4 text-left">Percentage</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 text-md">
          <tr className="border-t">
            <td className="px-6 py-4">Research and Development</td>
            <td className="px-6 py-4">MWK 100,000</td>
            <td className="px-6 py-4">44%</td>
          </tr>
          <tr className="border-t">
            <td className="px-6 py-4">Marketing and Advertising</td>
            <td className="px-6 py-4">MWK 200,000</td>
            <td className="px-6 py-4">44%</td>
          </tr>
          <tr className="border-t">
            <td className="px-6 py-4">Daily Operations</td>
            <td className="px-6 py-4">MWK 20,000 x 12</td>
            <td className="px-6 py-4">22%</td>
          </tr>
          <tr className="border-t bg-gray-100 font-bold">
            <td className="px-6 py-4">TOTAL</td>
            <td className="px-6 py-4">K540, 000</td>
            <td className="px-6 py-4">100%</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Financial Outlook Section */}
    <div className="bg-gray-100 p-8 rounded-2xl shadow-inner">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Financial Outlook</h3>
      <p className="text-gray-700 text-lg">
        If the business we are running spends K6, 480, 000 annually, K540 000 every month to keep it's day to day operations afloat.
        Fora a start up company research and development K100, 000 is enough.
        For advertising our work should speak for itself and let word of mouth take course.
      </p>
    </div>
  </div>
</section>




    </div>
  )
}
