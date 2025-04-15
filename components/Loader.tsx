// components/Loader.tsx
"use client"

export const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-green-600 text-sm font-medium">Loading...</p>
    </div>
  )
}
