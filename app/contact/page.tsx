import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tighter">Contact Us</h1>
                <p className="text-gray-600 mt-4">
                  We welcome partnerships, investment opportunities, and collaborations to further our vision of
                  agricultural growth and food security.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">0999498162</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">dmtacresmw@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
    <MapPin className="h-6 w-6 text-green-700" />
  </div>
  <div>
    <h3 className="font-semibold">Location</h3>
    <p className="text-gray-600">
      Ntcheu District | Kasungu District, Malawi
    </p>
  </div>
</div>

              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-green-700" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-green-700" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter the subject" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>

                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-8 pb-16">
        <div className="container">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600 text-lg">Map of DMT Acres location in Ntcheu District, Malawi</p>
            {/* In a real implementation, this would be replaced with an actual map component */}
          </div>
        </div>
      </section>
    </div>
  )
}