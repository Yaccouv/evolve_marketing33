"use client"

import { useEffect, useState } from "react"
import { useLoading } from "@/hooks/use-loading"
import Image from "next/image"

const TOTAL_DOTS = 12

export default function FullscreenLoader() {
  const { setLoading } = useLoading()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10))
    }, 70)
    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setLoading(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [progress, setLoading])

  const filledDots = Math.round((progress / 100) * TOTAL_DOTS)

  // Smaller size
  const radius = 15
  const center = 40
  const dotSize = 5

  return (
    <div className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center">
      <div className="relative h-8 w-16 mb-6">
        <Image
          src="/images/logo2.png"
          alt="DMT Acres Logo"
          fill
          className="object-contain"
        />
      </div>

      <svg width={center * 2} height={center * 2} className="mx-auto">
        {[...Array(TOTAL_DOTS)].map((_, i) => {
          const angle = (i / TOTAL_DOTS) * 2 * Math.PI - Math.PI / 2
          const x = center + radius * Math.cos(angle)
          const y = center + radius * Math.sin(angle)
          const isFilled = i < filledDots
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={dotSize / 2}
              fill={isFilled ? "var(--site-primary-color)" : "#d1d5db"}
              style={{ transition: "fill 0.3s ease" }}
            />
          )
        })}
      </svg>

      <p className="mt-4 text-gray-700 font-semibold text-sm">{progress}%</p>
    </div>
  )
}
