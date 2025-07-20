import { type PropsWithChildren } from "react"
import { AppContext } from "./context"
import { dialogue, type Dialogue } from "../data/dialogue"
import { useLocalStorage } from "../utils/useLocalStorage"

export type ContextType = {
  currentStepId: string
  lastUnlockedStepId: string
  goToNextStep: () => void
  getStep: (stepId: string) => Dialogue | undefined

  hasChef?: boolean
  hasDriller?: boolean
  hasBaron?: boolean
  hasSlayer?: boolean
  setHasChef?: (value: boolean) => void
  setHasDriller?: (value: boolean) => void
  setHasBaron?: (value: boolean) => void
  setHasSlayer?: (value: boolean) => void
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
  const [hasChef, setHasChef] = useLocalStorage("found-chef", "false")
  const [hasDriller, setHasDriller] = useLocalStorage("found-driller", "false")
  const [hasBaron, setHasBaron] = useLocalStorage("found-baron", "false")
  const [hasSlayer, setHasSlayer] = useLocalStorage("found-slayer", "false")

  const getStep = (stepId: string): Dialogue | undefined => {
    return dialogue.find((step) => step.id === stepId)
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
    goToNextStep,
    getStep,
    hasChef: hasChef === "true",
    hasDriller: hasDriller === "true",
    hasBaron: hasBaron === "true",
    hasSlayer: hasSlayer === "true",
    setHasChef: (value: boolean) => setHasChef(value.toString()),
    setHasDriller: (value: boolean) => setHasDriller(value.toString()),
    setHasBaron: (value: boolean) => setHasBaron(value.toString()),
    setHasSlayer: (value: boolean) => setHasSlayer(value.toString()),
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
