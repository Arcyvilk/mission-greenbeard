import { type PropsWithChildren } from "react"
import { AppContext } from "./context"
import { dialogue, type Dialogue } from "../data/dialogue"
import { useLocalStorage } from "../utils/useLocalStorage"
import type { DwarfId } from "../data/dwarves"

export type ContextType = {
  currentStepId: string
  lastUnlockedStepId: string

  getIsConditionsFulfilled: (stepId: string) => boolean
  getIsStepPassed: (stepId: string) => boolean
  getStep: (stepId: string) => Dialogue | undefined
  goToNextStep: () => void

  findDwarf: (dwarfId: DwarfId) => void
  getDwarfStatus: (dwarfId: DwarfId) => boolean
}

export const AppContextProvider = ({ children }: PropsWithChildren) => {
  const LS_LAST_UNLOCKED_STEP_ID = "last_unlocked_step_id"
  const LS_CURRENT_STEP_ID = "current_step_id"

  const [lastUnlockedStepId, setLastUnlockedStepId] = useLocalStorage(
    LS_LAST_UNLOCKED_STEP_ID,
    "start"
  )
  const [currentStepId, setCurrentStepId] = useLocalStorage(
    LS_CURRENT_STEP_ID,
    lastUnlockedStepId
  )
  const getStep = (stepId: string): Dialogue | undefined => {
    return dialogue.find((s) => s.id === stepId)
  }

  const goToNextStep = () => {
    const isConditionsFulfilled = getIsConditionsFulfilled(currentStepId)

    if (!isConditionsFulfilled) return

    const nextStepIndex =
      dialogue.findIndex((step) => step.id === currentStepId) + 1

    if (nextStepIndex >= dialogue.length) return // No more steps

    const nextStepId = dialogue[nextStepIndex].id
    setCurrentStepId(nextStepId)
    updateLastUnlockedStep(nextStepId)
  }

  const getIsStepPassed = (stepId: string) => {
    const currentStepIndex = dialogue.findIndex((s) => s.id === currentStepId)
    const stepIndex = dialogue.findIndex((s) => s.id === stepId)

    return currentStepIndex >= stepIndex
  }

  const getIsConditionsFulfilled = (stepId: string) => {
    const conditions =
      dialogue.find((step) => step.id === stepId)?.conditions ?? []

    for (const condition of conditions) {
      if (localStorage.getItem(condition) !== "true") {
        return false
      }
    }
    return true
  }

  const updateLastUnlockedStep = (stepId: string) => {
    const stepIndex = dialogue.findIndex((step) => step.id === stepId)
    const lastUnlockedIndex = dialogue.findIndex(
      (step) => step.id === lastUnlockedStepId
    )
    if (stepIndex > lastUnlockedIndex) {
      setLastUnlockedStepId(stepId)
    }
  }

  const value: ContextType = {
    currentStepId,
    lastUnlockedStepId,

    getIsConditionsFulfilled,
    getIsStepPassed,
    getStep,
    goToNextStep,

    getDwarfStatus: (dwarfId: DwarfId) => {
      const value = window.localStorage.getItem(`found-${dwarfId}`)
      return value === "true"
    },
    findDwarf: (dwarfId: DwarfId) => {
      window.localStorage.setItem(`found-${dwarfId}`, "true")
    },
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
