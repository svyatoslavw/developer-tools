import React from "react"
import { CodeContext } from "../context/CodeContext"

export const useCode = () => {
  const context = React.useContext(CodeContext)
  if (!context) {
    throw new Error("@CodeProvider error")
  }
  return context
}
