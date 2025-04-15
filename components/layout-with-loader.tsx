// components/layout-with-loader.tsx
"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Loader } from "@/components/Loader"

export default function LayoutWithLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // ⏳ 2 seconds

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {loading ? (
        <Loader />
      ) : (
        <div className="relative flex min-h-screen flex-col bg-white font-sans antialiased">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      )}
    </ThemeProvider>
  )
}
