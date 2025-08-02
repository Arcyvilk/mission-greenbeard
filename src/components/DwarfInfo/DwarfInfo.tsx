import { useState, type ChangeEvent } from "react"
import { dwarves, type DwarfId } from "../../data/dwarves"
import { useAppContext } from "../../context"
import "./DwarfInfo.css"
import { Button } from "../Button"
import { Dialog } from "../Dialog"

type DwarfInfoProps = {
  dwarfId: DwarfId
  isOpen: boolean
  onClose: () => void
}
export const DwarfInfo = ({ dwarfId, isOpen, onClose }: DwarfInfoProps) => {
  const { findDwarf } = useAppContext()
  const [submittedCoordinates, setSubmittedCoordinates] = useState("")
  const {
    codename = "N/A",
    coordinates = "N/A",
    imgSrc = "",
    lastSeen = "N/A",
  } = dwarves.find((d) => d.id === dwarfId) ?? {}

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCoordinates = e.target.value
    setSubmittedCoordinates(newCoordinates)
  }

  const onSubmit = () => {
    if (submittedCoordinates !== coordinates) alert("WRONG :C")
    else {
      alert("YAY!")
      findDwarf(dwarfId)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className="row">
        <div className="dwarf__avatar">
          <img src={imgSrc} />
        </div>
        <div className="column">
          <h2>Dwarf name:</h2>
          <p>{codename}</p>
          <h2>LAST SEEN:</h2>
          <p>{lastSeen}</p>
          <h2>Coordinates:</h2>
          <div className="row">
            <input value={submittedCoordinates} onChange={onChange} />
            <Button label="Submit coordinates" onClick={onSubmit} />
          </div>
        </div>
      </div>
    </Dialog>
  )
}
