import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ClientOnly } from "@/components/client-only"

import "@/app/globals.css"

export const metadata = {
  title: "DMT Acres - Sustainable Farming in Malawi",
  description:
    "DMT Acres is a registered and dynamic farming enterprise based in Ntcheu District, Malawi, specializing in poultry farming, crop production, and organic manure manufacturing.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light">
          <ClientOnly>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  )
}
