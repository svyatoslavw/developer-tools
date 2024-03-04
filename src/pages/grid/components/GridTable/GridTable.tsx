import { useSettings } from "@/lib/contexts/useSettings"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { useCode } from "../../hooks/useCode"

const GridTable = () => {
  const { settings } = useSettings()

  const [pos, setPos] = useState<{ start: number | null; end: number | null }>({
    start: null,
    end: null
  })
  const { code, setCode } = useCode()

  const posMouseDown = (index: number) => {
    setPos(() => ({ start: index, end: index }))
  }

  const posMouseEnter = (index: number) => {
    setPos((prev) => {
      if (prev.start !== null) return { ...prev, end: index }

      return prev
    })
  }

  const posMouseUp = () => {
    setPos({ start: null, end: null })
    setCode(
      code.split(".div")[0] +
        `.div { grid-area: ${calculateGridArea().gridArea ? calculateGridArea().gridArea : "error"}; }`
    )
  }

  const calculateGridArea = () => {
    const { start, end } = pos
    if (start === null || end === null) return {}

    const colSize = +settings["Columns"]
    const row1 = Math.min(Math.floor(start / colSize) + 1, Math.floor(end / colSize) + 1)
    const col1 = Math.min((start % colSize) + 1, (end % colSize) + 1)
    const row2 = Math.max(Math.floor(start / colSize) + 1, Math.floor(end / colSize) + 1) + 1
    const col2 = Math.max((start % colSize) + 1, (end % colSize) + 1) + 1
    const gridAreaValue = `${row1} / ${col1} / ${row2} / ${col2}`
    return { gridArea: gridAreaValue }
  }

  return (
    <div className="flex flex-col space-y-5">
      <div
        className="parent grid h-[300px] min-w-[533px] border border-custom/80 p-1"
        onMouseUp={posMouseUp}
      >
        <style dangerouslySetInnerHTML={{ __html: code }} />
        {Array.from({ length: +settings["Columns"] * +settings["Rows"] }).map((_, index) => (
          <div
            key={index}
            className={cn("h-full w-full bg-neutral-800 hover:bg-neutral-800/80", {
              ["border border-custom/30 bg-neutral-800/50 hover:bg-neutral-800/30"]:
                index === pos.start
            })}
            onMouseDown={() => posMouseDown(index)}
            onMouseEnter={() => posMouseEnter(index)}
          ></div>
        ))}
      </div>
      <div className="parent grid h-[300px] min-w-[533px] border border-neutral-700 p-1">
        <style dangerouslySetInnerHTML={{ __html: code }} />
        <div className="h-full w-full bg-black" style={calculateGridArea()}></div>
        {Array.from({ length: +settings["Columns"] * +settings["Rows"] }).map((_, index) => (
          <div key={index} className="h-full w-full bg-black"></div>
        ))}
      </div>
    </div>
  )
}

export { GridTable }
