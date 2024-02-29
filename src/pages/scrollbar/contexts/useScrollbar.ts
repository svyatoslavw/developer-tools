import { SettingsContextType } from "@/types/scrollbar.types"
import { useContext } from "react"
import { SettingsContext } from "./ScrollbarContext"

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error("@SettingsProvider error")
  }
  return context
}
