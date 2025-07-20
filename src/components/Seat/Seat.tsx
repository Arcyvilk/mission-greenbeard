import type { CSSProperties } from "react"
import { useAppContext } from "../../context"
import type { DwarfId } from "../../data/dwarves"
import "./Seat.css"

type SeatProps = {
  dwarfId: DwarfId
  style: CSSProperties
  onClick: (dwarfId: DwarfId) => void
}
export const Seat = ({ dwarfId, style, onClick }: SeatProps) => {
  const { currentStepId, getDwarfStatus } = useAppContext()

  const getIsHightlighted = () => {
    if (dwarfId === currentStepId) return true
  }

  const isFound = getDwarfStatus(dwarfId)
  const isHighlighted = getIsHightlighted()

  return (
    <button
      onClick={() => onClick(dwarfId)}
      disabled={isFound}
      className={`seat ${isHighlighted ? "seat--highlight" : ""} ${
        isFound ? "seat--found" : ""
      }`}
      style={style}
    />
  )
}
