import React from "react"

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-[91vh] w-full items-center justify-center px-4 pb-4 font-[poppins]">
      {children}
    </div>
  )
}

export { PageContainer }
