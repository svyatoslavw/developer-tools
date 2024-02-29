import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import React from "react"
import { HexColorPicker } from "react-colorful"
import { useSettings } from "../../contexts/useScrollbar"
import { useOutside } from "../../hooks/useOutside"

type ISettingsItem = {
  text: string
  type: "color" | "size"
}

const SettingItem = ({ text, type }: ISettingsItem) => {
  const { settings, updateSetting } = useSettings()
  const [value, setValue] = React.useState<number>(settings[text] as number)
  const [color, setColor] = React.useState<string>(settings[text] as string)
  const { isShow, ref, setIsShow } = useOutside(false)

  const handleChange = (newValue: string | number) => {
    type === "color" ? setColor(newValue as string) : setValue(newValue as number)
    updateSetting(text, newValue)
  }

  return (
    <div className="relative flex w-80 justify-between">
      <p>{text}</p>
      {type === "color" ? (
        <>
          <div
            className={cn("h-5 w-5 rounded-lg", `bg-[${color}]`)}
            onClick={() => setIsShow(!isShow)}
          ></div>
          {isShow && (
            <div ref={ref} className="absolute bottom-0 left-[340px]">
              <HexColorPicker color={color} onChange={(newColor) => handleChange(newColor)} />
            </div>
          )}
        </>
      ) : (
        <div className="flex items-center gap-3">
          <Button
            disabled={value === 0}
            className="h-5 w-5 p-0"
            variant={"ghost"}
            onClick={() => handleChange(value - 1)}
          >
            -
          </Button>
          <span className="w-6 text-center text-sm">{value}px</span>
          <Button
            disabled={value === 50}
            className="h-5 w-5 p-0"
            variant={"ghost"}
            onClick={() => handleChange(value + 1)}
          >
            +
          </Button>
        </div>
      )}
    </div>
  )
}

export { SettingItem }
