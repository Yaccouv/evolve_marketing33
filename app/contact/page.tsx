import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

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

  
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-24">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
    
    {/* Contact Info */}
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-black">Get In Touch</h2>
      <p className="text-lg text-gray-700">
        We'd love to hear from you. Whether it's a question, suggestion, or a business inquiry, feel free to reach out.
      </p>
      <div className="space-y-4 text-gray-800 text-lg">
        <div>
          <strong>Email:</strong><br />
          <a href="mailto:NyirendaKhumbo905@gmail.com" className="text-black hover:underline">
            NyirendaKhumbo905@gmail.com
          </a>
        </div>
        <div>
          <strong>Phone:</strong><br />
          <a href="tel:+265996744149" className="text-black hover:underline">
            +265 996 744 149
          </a>
        </div>
      </div>

      {/* Social Media */}
      <div className="pt-6">
        <h3 className="text-lg font-semibold text-black mb-3">Follow us</h3>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-black">Your Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-black">Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-black">Message</label>
        <textarea
          rows="5"
          placeholder="Write your message here..."
          className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900 transition duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</section>





    </div>
  )
}
