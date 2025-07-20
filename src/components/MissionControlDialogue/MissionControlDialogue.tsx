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
    <div className="container" onClick={onClick}>
      <div className="mcAvatar">
        <MissionControlAvatar />
      </div>

      <div className="title">Mission Control</div>
      <div className="description">
        {isTyping ? (
          <TypeAnimation sequence={[dialogue]} speed={66} />
        ) : (
          dialogue
        )}
      </div>
    </div>
  )
}
