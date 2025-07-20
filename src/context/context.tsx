import { createContext, useContext } from "react"
import { type ContextType } from "./provider"

export const AppContext = createContext({} as ContextType)
export const useAppContext = (): ContextType => useContext(AppContext)
