import { MissionControlDialogue } from "../../components/MissionControlDialogue"
import { useAppContext } from "../../context"
import { useMemo, useState } from "react"
import { Seat } from "../../components/Seat"
import { DwarfInfo } from "../../components/DwarfInfo"
import type { DwarfId } from "../../data/dwarves"
import "./Game.css"

export const Game = () => {
  const { currentStepId, getStep } = useAppContext()
  const [selectedDwarf, setSelectedDwarf] = useState<DwarfId | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(Boolean(selectedDwarf))

  const { text, index } = useMemo(() => {
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

      <MissionControlDialogue dialogue={text} />

      <div className="seats">
        {index >= 1 && (
          <Seat
            dwarfId="chef"
            style={{ marginLeft: "16.5%" }}
            onClick={onClick}
          />
        )}
        {index >= 2 && (
          <Seat
            dwarfId="driller"
            style={{ marginLeft: "0.6%", marginRight: "0.2%" }}
            onClick={onClick}
          />
        )}
        {index >= 3 && (
          <Seat
            dwarfId="baron"
            style={{ marginRight: "1%" }}
            onClick={onClick}
          />
        )}
        {index >= 4 && (
          <Seat
            dwarfId="slayer"
            style={{ marginRight: "1%" }}
            onClick={onClick}
          />
        )}
      </div>
    </div>
  )
}
