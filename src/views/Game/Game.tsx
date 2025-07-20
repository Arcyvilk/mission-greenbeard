import { MissionControlDialogue } from "../../components/MissionControlDialogue"
import { useAppContext } from "../../context"
import { useMemo } from "react"
import "./Game.css"

export const Game = () => {
  const { currentStepId, getStep } = useAppContext()

  const dialogue = useMemo(() => {
    return getStep(currentStepId)?.text ?? ""
  }, [currentStepId, getStep])

  return (
    <div className="game">
      <MissionControlDialogue key={currentStepId} dialogue={dialogue} />
    </div>
  )
}
