import type { CSSProperties } from "react"
import { useAppContext } from "../../context"
import type { DwarfId } from "../../data/dwarves"
import "./Seat.css"

type SeatProps = {
  owner: DwarfId
  style: CSSProperties
  onClick: (dwarfId: DwarfId) => void
}
export const Seat = ({ owner, style, onClick }: SeatProps) => {
  const { currentStepId } = useAppContext()

  const getIsHightlighted = () => {
    if (owner === currentStepId) return true
  }

  const isHighlighted = getIsHightlighted()

  return (
    <button
      onClick={() => onClick(owner)}
      className={`seat ${isHighlighted ? "seat--highlight" : ""}`}
      style={style}
    />
  )
}
