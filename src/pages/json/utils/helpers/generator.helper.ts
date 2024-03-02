export const setValuesToLS = (key: string, value: string): void => {
  localStorage.setItem(key, value)
}

export const getValuesFromLS = (key: string): string | null => {
  return localStorage.getItem(key)
}

export const removeValuesFromLS = (key: string): void => {
  localStorage.removeItem(key)
}
