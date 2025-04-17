'use client'

import { useEffect, useState } from 'react'

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setLoading(false)  // ✅ Safely defer state update
          }, 0)
          return 100
        }
        return prev + 10
      })
    }, 200)
  
    return () => clearInterval(progressInterval)
  }, [])  

  if (!mounted) return null

  return <>{children}</>
}
