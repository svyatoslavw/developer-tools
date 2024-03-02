import { Code } from "@/components/ui/code"
import { useSettings } from "../../../../lib/contexts/useSettings"
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

  return <Code code={code} styled />
}

export { GeneratedCode }
