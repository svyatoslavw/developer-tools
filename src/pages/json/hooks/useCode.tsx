import React from "react"
import { CodeContext } from "../contexts/CodeProvider"

export const useCode = () => {
  const context = React.useContext(CodeContext)
  if (!context) {
    throw new Error("@CodeProvider error")
  }
  return context
}
