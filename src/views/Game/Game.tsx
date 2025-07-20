import { MissionControlDialogue } from "../../components/MissionControlDialogue"
import { useAppContext } from "../../context"
import { useMemo } from "react"
import { Seat } from "../../components/Seat"
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

      <div className="seats">
        <Seat owner="chef" style={{ marginLeft: "0.0%" }} />
        <Seat
          owner="driller"
          style={{ marginLeft: "0.6%", marginRight: "0.2%" }}
        />
        <Seat owner="baron" style={{ marginRight: "1%" }} />
        <Seat owner="slayer" style={{ marginRight: "1%" }} />
      </div>
    </div>
  )
}
