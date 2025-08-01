import { useState, type ChangeEvent } from "react"
import { useAppContext } from "../../context"
import { TREASURE_PASSCODE } from "../../data/constants"
import { Dialog } from "../Dialog"
import { Button } from "../Button"
import "./TreasureModal.css"

export const TreasureModal = () => {
    const { findTreasure, goToNextStep } = useAppContext()
    const [submittedPasscode, setSubmittedPasscode] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newCoordinates = e.target.value
        setSubmittedPasscode(newCoordinates)
    }

    const onSubmit = () => {
        if (submittedPasscode !== TREASURE_PASSCODE) alert("WRONG :C")
        else {
            alert("YAY!")
            findTreasure()
            goToNextStep()
        }
    }

    return (
        <Dialog isOpen={true} onClose={() => {}}>
            <div className="column">
                <h2>Treasure passcode:</h2>
                <div className="treasure__row">
                    <input value={submittedPasscode} onChange={onChange} />
                    <Button label="Submit passcode" onClick={onSubmit} />
                </div>
            </div>
        </Dialog>)
}