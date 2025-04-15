// components/Loader.tsx
export const Loader = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="animate-spin border-4 border-t-4 border-white border-solid rounded-full w-16 h-16"></div>
      </div>
    )
  }
  