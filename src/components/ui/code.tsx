import { cn } from "@/lib/utils"
import React from "react"
import { toast } from "sonner"
import useCopy from "use-copy"
import { Button } from "./button"

export interface DivProps extends React.ButtonHTMLAttributes<HTMLPreElement> {
  code: string
  styled?: boolean
}
const Code = React.forwardRef<HTMLPreElement, DivProps>(
  ({ className, code, styled, ...props }, ref) => {
    const [copied, copy, setCopied] = useCopy(code)

    const onCopy = () => {
      copy()
      toast.success("Successfully copied")

      setTimeout(() => {
        setCopied(false)
      }, 3000)
    }
    return (
      <div className="space-y-3">
        <pre
          ref={ref}
          {...props}
          className={cn(
            "max-h-[540px] min-w-[600px] overflow-y-auto rounded-s-xl bg-gradient-to-t from-neutral-800/50 to-transparent p-4 shadow-2xl",
            className
          )}
        >
          <code>{code}</code>
          {styled && <style dangerouslySetInnerHTML={{ __html: code }} />}
        </pre>
        <Button onClick={onCopy} className="w-36 bg-custom shadow hover:bg-custom/70">
          {copied ? "✓ Copied" : "Copy"}
        </Button>
      </div>
    )
  }
)
Code.displayName = "Code"

export { Code }
