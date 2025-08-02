import { MissionControlDialogue } from "../../components/MissionControlDialogue"
import { useAppContext } from "../../context"
import { useMemo, useState } from "react"
import { Seat } from "../../components/Seat"
import { DwarfInfo } from "../../components/DwarfInfo"
import type { DwarfId } from "../../data/dwarves"
import { TreasureModal } from "../../components/TreasureModal"
import { Quiz } from "../../components/Quiz"
import "./Game.css"

export const Game = () => {
  const { currentStepId, getIsStepPassed, getStep } = useAppContext()
  const [selectedDwarf, setSelectedDwarf] = useState<DwarfId | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(Boolean(selectedDwarf))

  const { text } = useMemo(() => {
    return getStep(currentStepId)!
  }, [currentStepId, getStep])

  const onClick = (dwarfId: DwarfId) => {
    setSelectedDwarf(dwarfId)
    setIsModalOpen(true)
  }

  const onModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div
      className="game"
      style={{ backgroundImage: `url("./assets/bg01.png")` }}
    >
      <DwarfInfo
        key={selectedDwarf}
        isOpen={isModalOpen}
        onClose={onModalClose}
        dwarfId={selectedDwarf!}
      />

      <MissionControlDialogue key={currentStepId} dialogue={text} />

      {currentStepId === "mission-02" && <TreasureModal />}

      {currentStepId === "treasure-04" && <Quiz />}

      <div className="seats">
        {getIsStepPassed("chef") && (
          <Seat
            dwarfId="chef"
            dwarfStyle={{ width: "90%", top: "17%" }}
            seatStyle={{ marginLeft: "16.5%" }}
            onClick={onClick}
          />
        )}
        {getIsStepPassed("driller") && (
          <Seat
            dwarfId="driller"
            dwarfStyle={{ width: "100%", top: "15%", left: "-5%" }}
            seatStyle={{ marginLeft: "0.6%", marginRight: "0.2%" }}
            onClick={onClick}
          />
        )}
        {getIsStepPassed("baron") && (
          <Seat
            dwarfId="baron"
            dwarfStyle={{ width: "50%", top: "25%", left: "25%" }}
            seatStyle={{ marginRight: "1%" }}
            onClick={onClick}
          />
        )}
        {getIsStepPassed("slayer") && (
          <Seat
            dwarfId="slayer"
            dwarfStyle={{ width: "90%", top: "20%", left: "5%" }}
            seatStyle={{ marginRight: "1%" }}
            onClick={onClick}
          />
        )}
      </div>
    </div>
  )
}
