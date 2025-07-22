import type { CSSProperties } from "react"
import { useAppContext } from "../../context"
import type { DwarfId } from "../../data/dwarves"
import "./Seat.css"

type SeatProps = {
  dwarfId: DwarfId
  seatStyle: CSSProperties
  dwarfStyle: CSSProperties
  onClick: (dwarfId: DwarfId) => void
}
export const Seat = ({
  dwarfId,
  seatStyle,
  dwarfStyle,
  onClick,
}: SeatProps) => {
  const { currentStepId, getDwarfStatus } = useAppContext()

  const getIsHightlighted = () => {
    if (dwarfId === currentStepId) return true
  }

  const isFound = getDwarfStatus(dwarfId)
  const isHighlighted = getIsHightlighted()

  return (
    <div className="seatContainer" style={seatStyle}>
      <img
        className={`dwarf ${isFound ? "" : "dwarf--hidden"}`}
        src="/assets/chef.png"
        style={dwarfStyle}
      />

      <button
        className={`seat ${isHighlighted ? "seat--highlight" : ""} ${
          isFound ? "seat--found" : ""
        }`}
        disabled={isFound}
        onClick={() => onClick(dwarfId)}
      />
    </div>
  )
}
