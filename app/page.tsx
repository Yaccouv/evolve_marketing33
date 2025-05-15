"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, MapPin, Phone, Mail } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
<div className="flex flex-col">
  <section className="relative h-[600px] w-full">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0">
      <Image
        src="/images/banner.jpeg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>

    {/* Centered Content Box */}
    <div className="relative z-10 h-full flex items-center justify-center">
      <div className="bg-black/70 rounded-xl px-8 py-10 text-center text-white max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Evolve Marketing</h1>
        <p className="text-lg text-gray-200 mb-6">
          We craft modern marketing communications that drive results and build lasting brand value.
        </p>
        <Link
          href="/about"
          className="inline-block rounded-md bg-white px-6 py-3 text-gray-900 font-semibold hover:bg-gray-200 transition"
        >
          Learn More About Us
        </Link>
      </div>
    </div>
  </section>






  <section className="bg-white py-24 px-6 md:px-12 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-90 pointer-events-none" />

  <div className="relative max-w-7xl mx-auto space-y-20">
    
    {/* Header */}
    <div className="text-center space-y-5">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide uppercase">
        About Us
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Since 2019, we've delivered purpose-driven growth, forward-thinking innovation, and human-focused solutions.
      </p>
    </div>

    {/* Highlights - Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Our Mission",
          emoji: "🎯",
          description: "Delivering impact beyond expectations, rooted in ethical values and human insight."
        },
        {
          title: "Our Vision",
          emoji: "🌱",
          description: "To lead the future of sustainable innovation through collaboration and care."
        },
        {
          title: "Our Values",
          emoji: "🤝",
          description: "We believe in trust, creativity, and a strong sense of community-driven growth."
        }
      ].map(({ title, emoji, description }) => (
        <div
          key={title}
          className="bg-gray-50 border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-3xl">{emoji}</div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          </div>
          <p className="text-gray-600 text-base leading-relaxed">{description}</p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center">
      <a
        href="#"
        className="inline-block px-10 py-3 bg-gray-900 text-white font-semibold rounded-full shadow hover:bg-gray-700 transition"
      >
        Discover More
      </a>
    </div>
  </div>
</section>


{/* Focus Areas Section */}
<section className="bg-black text-white py-24 px-6 md:px-12">
  <div className="max-w-7xl mx-auto space-y-16">
    
    {/* Section Header */}
    <div className="text-left md:text-center space-y-4">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        Areas We’re Focused On
      </h2>
      <p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
        Elevating cultural experiences through passion, precision, and creativity.
      </p>
    </div>

    {/* Focus Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Story & Motion",
          img: "/images/anime.jpeg",
          desc: "Telling impactful stories through animation and motion design with depth and purpose."
        },
        {
          title: "Sound Identity",
          img: "/images/music.jpeg",
          desc: "Capturing emotions and narratives through minimalist yet powerful audio experiences."
        },
        {
          title: "Interactive Spaces",
          img: "/images/game.jpeg",
          desc: "Crafting engaging virtual spaces where users are part of the story — not just the audience."
        }
      ].map(({ title, img, desc }) => (
        <div
          key={title}
          className="bg-neutral-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-neutral-300 text-sm">{desc}</p>
            <a
              href="#"
              className="inline-block mt-4 text-white underline hover:text-neutral-400 transition"
            >
              Read More →
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* Footer CTA */}
    <div className="text-center pt-12">
      <a
        href="#"
        className="inline-block border border-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
      >
        View All Topics
      </a>
    </div>
  </div>
</section>



{/* Executive Summary Section */}
<section className="py-20 bg-gray-50 text-gray-900">
  <div className="container mx-auto px-6 space-y-12">
    <header className="text-center max-w-xl mx-auto space-y-3">
      <h2 className="text-4xl font-extrabold tracking-wide uppercase">
        Executive Summary
      </h2>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "The Services",
          content:
            "We provide cutting-edge integrated marketing communications, including advertising, public relations, and creative branding solutions."
        },
        {
          title: "Leadership Philosophy",
          content:
            "Our leadership fosters resilience and adaptability, empowering teams to excel in dynamic business environments."
        },
        {
          title: "Industry Landscape",
          content:
            "The marketing industry continues to evolve, offering innovative opportunities from medium to large-scale operations."
        },
        {
          title: "Competitive Edge",
          content:
            "Customer satisfaction and strong brand identity are key to outsmarting competition and securing market leadership."
        },
        {
          title: "Financial Outlook",
          content:
            "Our goal is to grow sustainably, with plans to register as a public listed company to support expansion."
        },
        {
          title: "Future Vision",
          content:
            "By 2027, we aim to diversify our interests and achieve exponential growth across multiple sectors."
        }
      ].map(({ title, content }) => (
        <article
          key={title}
          className="bg-white border border-gray-300 rounded-2xl p-8 shadow-lg flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-5 border-b border-gray-200 pb-3 text-gray-800">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed flex-grow">{content}</p>
        </article>
      ))}
    </div>
  </div>
</section>





      {/* Contact Preview
      <section className="py-16">
        <div className="container">
          <div className="rounded-lg bg-green-50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
                <p className="text-gray-600">
                  We welcome partnerships, investment opportunities, and collaborations to further our vision of
                  agricultural growth and food security.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-green-700" />
                    <span>0999498162</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-green-700" />
                    <span>dmtacresmw@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-700" />
                    <span >
                      Ntcheu and Kasungu, Malawi
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button asChild size="lg" className="gap-2 bg-green-700 hover:bg-green-800">
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
