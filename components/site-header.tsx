import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src="/logo.jpg?height=40&width=40" alt="DMT Acres Logo" fill className="object-cover" />
          </div>
          <span className="text-xl font-bold text-green-800">DMT Acres</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-green-700">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-green-700">
            About Us
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-green-700">
            Products & Services
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-green-700">
            Gallery
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-green-700">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex bg-green-700 hover:bg-green-800">
            <Link href="/contact">Get In Touch</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-green-700">
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium hover:text-green-700">
                  About Us
                </Link>
                <Link href="/products" className="text-lg font-medium hover:text-green-700">
                  Products & Services
                </Link>
                <Link href="/gallery" className="text-lg font-medium hover:text-green-700">
                  Gallery
                </Link>
                <Link href="/contact" className="text-lg font-medium hover:text-green-700">
                  Contact
                </Link>
                <Button asChild className="mt-4 bg-green-700 hover:bg-green-800">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}