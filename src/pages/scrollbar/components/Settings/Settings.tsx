import { SettingItem } from "./SettingItem"

const Settings = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-3 py-4">
      <div className="flex flex-col space-y-3">
        <h1 className="mb-2 text-2xl">Settings</h1>
        <SettingItem text="Thumb Color" type="color" />
        <SettingItem text="Track Color" type="color" />
        <SettingItem text="Scrollbar Width" type="size" />
        <SettingItem text="Scrollbar Border Radius" type="size" />
        <SettingItem text="Thumb Border Width" type="size" />
        <SettingItem text="Thumb Border Color" type="color" />
      </div>
    </div>
  )
}

export { Settings }
