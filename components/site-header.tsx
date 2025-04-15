"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter } from "next/navigation"
import { useLoading } from "@/hooks/use-loading"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { setLoading } = useLoading()

  const closeMenu = () => setOpen(false)

  const handleNavigation = (href: string) => {
    setLoading(true)
    setOpen(false)
    router.push(href)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [open])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => handleNavigation("/")}
          className="flex items-center gap-2"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image src="/logo.jpg" alt="DMT Acres Logo" fill className="object-cover" />
          </div>
          <span className="text-xl font-bold text-green-800">DMT Acres</span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {["/", "/about", "/products", "/gallery", "/contact"].map((path, i) => (
            <button
              key={path}
              onClick={() => handleNavigation(path)}
              className="text-sm font-medium hover:text-green-700"
            >
              {["Home", "About Us", "Products & Services", "Gallery", "Contact"][i]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => handleNavigation("/contact")}
            className="hidden md:flex bg-green-700 hover:bg-green-800"
          >
            Get In Touch
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {["/", "/about", "/products", "/gallery", "/contact"].map((path, i) => (
                  <button
                    key={path}
                    onClick={() => handleNavigation(path)}
                    className="text-lg font-medium hover:text-green-700 text-left"
                  >
                    {["Home", "About Us", "Products & Services", "Gallery", "Contact"][i]}
                  </button>
                ))}
                <Button
                  onClick={() => handleNavigation("/contact")}
                  className="mt-4 bg-green-700 hover:bg-green-800"
                >
                  Get In Touch
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
