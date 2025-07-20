import { createContext, useContext } from "react"

export type ContextType = {
  currentStepIndex: number
  goToNextStep: () => void
}

export const AppContext = createContext({} as ContextType)
export const useAppContext = (): ContextType => useContext(AppContext)
