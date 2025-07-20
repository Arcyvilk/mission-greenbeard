import type { CSSProperties } from "react"
import "./Seat.css"
import { useAppContext } from "../../context"

type SeatProps = {
  owner: "chef" | "driller" | "baron" | "slayer"
  style: CSSProperties
}
export const Seat = ({ owner, style }: SeatProps) => {
  const { currentStepId } = useAppContext()

  const getIsHightlighted = () => {
    if (owner === currentStepId) return true
  }

  const isHighlighted = getIsHightlighted()

  return (
    <div
      className={`seat ${isHighlighted ? "seat--highlight" : ""}`}
      style={style}
    />
  )
}
