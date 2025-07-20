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
    <div
      className="game"
      style={{ backgroundImage: `url("./assets/bg01.png")` }}
    >
      <MissionControlDialogue key={currentStepId} dialogue={dialogue} />
    </div>
  )
}
