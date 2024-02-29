import "@/assets/globals.css"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import useCopy from "use-copy"
import { useJSONCode } from "../../hooks/useCode"

const GeneratedCode = () => {
  const { code } = useJSONCode()
  const [copied, copy, setCopied] = useCopy(JSON.stringify(code, null, 2))

  const onCopy = () => {
    copy()
    toast.success("Successfully copied")

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div className="grid w-[800px] place-items-start space-y-3 p-1">
      <pre className="h-[540px] w-[800px] overflow-y-auto rounded-lg bg-neutral-800/50 p-4">
        <code>{code.length ? JSON.stringify(code, null, 2) : ""}</code>
      </pre>
      <Button onClick={onCopy} className="w-36 bg-custom hover:bg-custom/70">
        {copied ? "✓ Copied" : "Copy"}
      </Button>
    </div>

    // <div className="grid w-[800px] place-items-start space-y-3 p-1">
    //   <div className="flex h-[540px]">
    //     <SyntaxHighlighter
    //       language="json"
    //       style={tomorrowNight}
    //       customStyle={{
    //         width: 800,
    //         borderRadius: "16px",
    //         padding: 20
    //       }}
    //     >
    //       {code.length ? JSON.stringify(code, null, 2) : ""}
    //     </SyntaxHighlighter>
    //   </div>
    //   <Button onClick={onCopy} className="w-36 bg-custom hover:bg-custom/70">
    //     {copied ? "✓ Copied" : "Copy"}
    //   </Button>
    // </div>
  )
}

export { GeneratedCode }
