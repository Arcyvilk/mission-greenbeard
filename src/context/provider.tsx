import { type PropsWithChildren } from "react"
import { AppContext } from "./context"
import { dialogue, type Dialogue } from "../data/dialogue"
import { useLocalStorage } from "../utils/useLocalStorage"

export type ContextType = {
  currentStepId: string
  lastUnlockedStepId: string
  goToNextStep: () => void
  getStep: (stepId: string) => Dialogue | undefined
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
    return dialogue.find((step) => step.id === stepId)
  }

  const goToNextStep = () => {
    const nextStepIndex =
      dialogue.findIndex((step) => step.id === currentStepId) + 1

    if (nextStepIndex >= dialogue.length) return // No more steps

    const nextStepId = dialogue[nextStepIndex].id
    setCurrentStepId(nextStepId)
    updateLastUnlockedStep(nextStepId)
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
    goToNextStep,
    getStep,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
