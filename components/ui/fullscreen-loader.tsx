"use client"

import { useEffect, useState } from "react"
import { useLoading } from "@/hooks/use-loading"

export default function FullscreenLoader() {
  const { setLoading } = useLoading()
  const [progress, setProgress] = useState(0)

  // Update the progress every 50ms for faster progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setLoading(false)
          return 100
        }
        return prev + 10 // Increment progress by 10% every interval (faster)
      })
    }, 50) // Interval reduced for faster progress

    return () => clearInterval(progressInterval)
  }, [setLoading])

  return (
    <div className="fixed top-0 left-0 z-[1000] h-screen w-screen bg-white flex flex-col items-center justify-center">
      <div className="w-32 h-1 bg-gray-300 rounded-full overflow-hidden"> {/* Smaller height */}
        <div
          className="h-full bg-green-700"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-lg font-semibold text-green-800">
        DMT Acres
      </p>
    </div>
  )
}
