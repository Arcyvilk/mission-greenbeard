import { useState, type ChangeEvent, type MouseEvent } from "react"
import { dwarves, type DwarfId } from "../../data/dwarves"
import { useAppContext } from "../../context"
import "./DwarfInfo.css"

type DwarfInfoProps = {
  dwarfId: DwarfId
  isOpen: boolean
  onClose: (e: MouseEvent<HTMLDivElement>) => void
}
export const DwarfInfo = ({ dwarfId, isOpen, onClose }: DwarfInfoProps) => {
  const { findDwarf } = useAppContext()
  const [submittedCoordinates, setSubmittedCoordinates] = useState("")
  const {
    codename = "N/A",
    coordinates = "N/A",
    imgSrc = "",
    lastSeen = "N/A",
    likes = "N/A",
  } = dwarves.find((d) => d.id === dwarfId) ?? {}

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCoordinates = e.target.value
    setSubmittedCoordinates(newCoordinates)
  }

  const onSubmit = () => {
    if (submittedCoordinates !== coordinates) alert("WRONG :C")
    else {
      findDwarf(dwarfId)
      alert("YAY!")
    }
  }

  if (!isOpen) return null

  return (
    <div className="dimmer" onClick={onClose}>
      <dialog
        className="dialog"
        open={isOpen}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="row">
          <img className="dwarf__avatar" src={imgSrc} />
          <div className="column">
            <h2>Dwarf name:</h2>
            <p>{codename}</p>
            <h2>LAST SEEN:</h2>
            <p>{lastSeen}</p>
            <h2>LIKES:</h2>
            <p>{likes}</p>
            <hr />
            <h2>Coordinates:</h2>
            <div className="row">
              <input value={submittedCoordinates} onChange={onChange} />
              <button onClick={onSubmit}>Submit coordinates</button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  )
}
