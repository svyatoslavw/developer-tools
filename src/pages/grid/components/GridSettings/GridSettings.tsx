import { SettingItem } from "@/pages/scrollbar/components/Settings/SettingItem"

const GridSettings = () => {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="mb-2 text-2xl">Settings</h1>
      <SettingItem text="Columns" type="size" />
      <SettingItem text="Rows" type="size" />
      <SettingItem text="Column Gap" type="size" px />
      <SettingItem text="Row Gap" type="size" px />
    </div>
  )
}

export { GridSettings }
