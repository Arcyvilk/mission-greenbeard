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

  const dialogue = useMemo(() => {
    return getStep(currentStepId)?.text ?? ""
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
        dwarfId={selectedDwarf}
      />

      <MissionControlDialogue dialogue={dialogue} />

      <div className="seats">
        <Seat owner="chef" style={{ marginLeft: "0.0%" }} onClick={onClick} />
        <Seat
          owner="driller"
          style={{ marginLeft: "0.6%", marginRight: "0.2%" }}
          onClick={onClick}
        />
        <Seat owner="baron" style={{ marginRight: "1%" }} onClick={onClick} />
        <Seat owner="slayer" style={{ marginRight: "1%" }} onClick={onClick} />
      </div>
    </div>
  )
}
