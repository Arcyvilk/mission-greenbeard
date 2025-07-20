import { useCallback, useState } from "react"

export const useLocalStorage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      if (!item) window.localStorage.setItem(key, initialValue)

      return item ?? initialValue
    } catch (error: unknown) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: string) => {
      try {
        setStoredValue(value)
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, value)
        }
      } catch (error: unknown) {
        console.error(error)
      }
    },
    [key]
  )

  return [storedValue, setValue] as const
}
