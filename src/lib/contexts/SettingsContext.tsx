import { SettingsContextType, SettingsType } from "@/types/scrollbar.types"
import React from "react"

export const SettingsContext = React.createContext<SettingsContextType | undefined>(undefined)

export const SettingsProvider: React.FC<{ children: React.ReactNode; type: "grid" | "scroll" }> = ({
  children,
  type
}) => {
  const [settings, setSettings] = React.useState<SettingsType>(
    type === "scroll"
      ? {
          "Thumb Color": "#5bb98a",
          "Track Color": "#232E33",
          "Scrollbar Width": 8,
          "Scrollbar Border Radius": 8,
          "Thumb Border Width": 0,
          "Thumb Border Color": "#232E33"
        }
      : {
          Columns: 3,
          Rows: 3,
          "Column Gap": 2,
          "Row Gap": 2
        }
  )

  const updateSetting = (text: string, value: string | number) => {
    setSettings((prev) => ({ ...prev, [text]: value }))
  }

  const value = React.useMemo(() => ({ settings, updateSetting }), [settings])
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>
}
