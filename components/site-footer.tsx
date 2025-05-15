import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-black bg-opacity-90 text-gray-200 py-16">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row md:justify-between md:items-start gap-12">

        {/* Branding */}
        <div className="md:flex-1">
          <h2 className="text-3xl font-extrabold tracking-wide mb-4 border-b-4 border-gray-600 pb-2">
            Evolve Marketing
          </h2>
          <p className="max-w-sm leading-relaxed text-gray-400">
            Innovating your brand with advanced integrated marketing communications tailored for modern businesses.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="md:flex-1 space-y-6">
          <h3 className="uppercase text-gray-400 tracking-widest text-sm font-semibold mb-3">
            Explore
          </h3>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="hover:text-white transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors duration-300">
              About Us
            </Link>
            <Link href="/services" className="hover:text-white transition-colors duration-300">
              Services
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-300">
              Contact
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="md:flex-1">
          <h3 className="uppercase text-gray-400 tracking-widest text-sm font-semibold mb-3">
            Contact
          </h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <a href="tel:+265996744149" className="hover:text-white transition-colors duration-300">
                +265 996744149
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <a href="mailto:NyirendaKhumbo905@gmail.com" className="hover:text-white transition-colors duration-300">
                NyirendaKhumbo905@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <span>Blantyre, Malawi</span>
            </li>
          </ul>

          <div className="flex gap-6 mt-6">
            <Link href="#" aria-label="Facebook" className="hover:text-white transition-colors duration-300">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors duration-300">
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-700 pt-6">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Evolve Marketing. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
