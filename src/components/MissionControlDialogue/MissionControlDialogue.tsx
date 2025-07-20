import { useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { useAppContext } from "../../context"
import { MissionControlAvatar } from "../MissionControlAvatar"
import "./MissionControlDialogue.css"

export const MissionControlDialogue = ({ dialogue }: { dialogue: string }) => {
  const { goToNextStep } = useAppContext()
  const [isTyping, setIsTyping] = useState(true)

  const onClick = () => {
    if (isTyping) {
      setIsTyping(false)
    } else {
      goToNextStep()
    }
  }

  return (
    <div className="container">
      <div className="mcAvatar">
        <MissionControlAvatar />
      </div>

      <div className="container__title">
        <h2>Mission Control</h2>
        <button className="skipButton" onClick={onClick}>
          Next →
        </button>
      </div>

      <p>
        {isTyping ? (
          <TypeAnimation
            sequence={[dialogue, () => setIsTyping(false)]}
            speed={66}
          />
        ) : (
          dialogue
        )}
      </p>
    </div>
  )
}
