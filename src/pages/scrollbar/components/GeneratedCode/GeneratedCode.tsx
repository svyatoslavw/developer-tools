import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import useCopy from "use-copy"
import { useSettings } from "../../contexts/useScrollbar"
import { SCROLLBAR_CODE } from "../../utils/constants/scrollbar.constant"

const GeneratedCode = () => {
  const { settings } = useSettings()

  const code = SCROLLBAR_CODE.replace(/__TRACK_COLOR__/g, settings["Track Color"] as string)
    .replace(/__THUMB_COLOR__/g, settings["Thumb Color"] as string)
    .replace(/__SIZE__/g, settings["Scrollbar Width"] as string)
    .replace(
      /__THUMB_BORDER__/g,
      settings["Thumb Border Width"] && +settings["Thumb Border Width"] > 0
        ? `border: ${settings["Thumb Border Width"]}px solid ${settings["Thumb Border Color"]};`
        : ""
    )
    .replace(/__RADIUS__/g, String(settings["Scrollbar Border Radius"]))

  const [copied, copy, setCopied] = useCopy(code)

  const onCopy = () => {
    copy()
    toast.success("Successfully copied")

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }
  return (
    <div className="grid w-[800px] place-items-start space-y-3 p-1">
      <pre className="max-h-[540px] w-[800px] overflow-y-auto rounded-s-xl bg-neutral-800/50 p-4">
        <code>{code}</code>
        <style dangerouslySetInnerHTML={{ __html: code }} />
      </pre>
      <Button onClick={onCopy} className="w-36 bg-custom hover:bg-custom/70">
        {copied ? "✓ Copied" : "Copy"}
      </Button>
    </div>
  )
}

export { GeneratedCode }
