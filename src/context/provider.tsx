import React, { useState } from "react"
import { type ContextType, AppContext } from "./context"
import { dialogue } from "../data/dialogue"

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)

  const goToNextStep = () => {
    const nextStepIndex = currentStepIndex + 1

    if (nextStepIndex < dialogue.length) {
      setCurrentStepIndex(nextStepIndex)
    }
  }

  const value: ContextType = {
    currentStepIndex,
    goToNextStep,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
