import { Code } from "@/components/ui/code"
import { useSettings } from "@/lib/contexts/useSettings"
import { useEffect } from "react"
import { useCode } from "../../hooks/useCode"
import { GRID_CODE } from "../../utils/grid.constant"

const GeneratedCode = () => {
  const { code, setCode } = useCode()
  const { settings } = useSettings()

  useEffect(() => {
    setCode(
      GRID_CODE.replace(/__ROW__/g, settings["Rows"] as string)
        .replace(/__COL__/g, settings["Columns"] as string)
        .replace(/__ROW_GAP__/g, settings["Row Gap"] as string)
        .replace(/__COL_GAP__/g, settings["Column Gap"] as string)
    )
  }, [settings, setCode])

  return <Code code={code} className="h-[340px] w-[600px]" />
}

export { GeneratedCode }
