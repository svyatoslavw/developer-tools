export type SettingsType = {
  [key: string]: string | number
}

export type SettingsContextType = {
  settings: SettingsType
  updateSetting: (text: string, value: string | number) => void
}
