import { cn } from "@/lib/utils"
import React from "react"

const PageContainer = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "flex min-h-[91vh] w-full items-center justify-center px-4 pb-4 font-[poppins]",
        className
      )}
    >
      {children}
    </div>
  )
}

export { PageContainer }
