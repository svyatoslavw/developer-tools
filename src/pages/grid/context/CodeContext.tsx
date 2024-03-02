import { useSettings } from "@/lib/contexts/useSettings"
import React from "react"
import { GRID_CODE } from "../utils/grid.constant"

type TCodeContext = {
  code: string
  setCode: React.Dispatch<React.SetStateAction<string>>
}

export const CodeContext = React.createContext<TCodeContext | undefined>(undefined)

export const CodeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { settings } = useSettings()
  const [code, setCode] = React.useState<string>(
    GRID_CODE.replace(/__ROW__/g, settings["Rows"] as string)
      .replace(/__COL__/g, settings["Columns"] as string)
      .replace(/__ROW_GAP__/g, settings["Row Gap"] as string)
      .replace(/__COL_GAP__/g, settings["Column Gap"] as string)
  )

  const value = { code, setCode }

  return <CodeContext.Provider value={value}>{children}</CodeContext.Provider>
}
