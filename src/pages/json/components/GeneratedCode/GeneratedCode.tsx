import "@/assets/globals.css"
import { Code } from "@/components/ui/code"
import { useCode } from "../../hooks/useCode"

const GeneratedCode = () => {
  const { code } = useCode()

  return (
    <Code code={code.length ? JSON.stringify(code, null, 2) : ""} className="h-[540px] w-[650px]" />
  )
}

export { GeneratedCode }
