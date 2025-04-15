// app/layout.tsx
import type { ReactNode } from "react"
import "@/app/globals.css"

export const metadata = {
  title: "DMT Acres - Sustainable Farming in Malawi",
  description:
    "DMT Acres is a registered and dynamic farming enterprise based in Ntcheu District, Malawi, specializing in poultry farming, crop production, and organic manure manufacturing.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Move client logic inside a client component */}
        <LayoutWithLoader>{children}</LayoutWithLoader>
      </body>
    </html>
  )
}

// ⛔ DYNAMIC IMPORT REMOVED – move to a separate client wrapper
import LayoutWithLoader from "@/components/layout-with-loader"
