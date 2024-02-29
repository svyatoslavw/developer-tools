import { Option } from "@/types/json-gen.types"
import React from "react"

type TCodeContext = {
  code: Option[]
  setCode: React.Dispatch<React.SetStateAction<Option[]>>
}

export const CodeContext = React.createContext<TCodeContext | undefined>(undefined)

export const CodeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [code, setCode] = React.useState<Option[]>([])

  const value = React.useMemo(() => ({ code, setCode }), [code])

  return <CodeContext.Provider value={value}>{children}</CodeContext.Provider>
}
