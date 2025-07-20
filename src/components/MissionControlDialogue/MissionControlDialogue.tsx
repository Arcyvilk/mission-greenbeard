import { useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { dialogue } from "../../data/dialogue"
import { useAppContext } from "../../context"
import { MissionControlAvatar } from "../MissionControlAvatar"

import "./MissionControlDialogue.css"

export const MissionControlDialogue = () => {
  const { currentStepIndex, goToNextStep } = useAppContext()
  const [isTyping, setIsTyping] = useState(true)

  const currentDialogue = dialogue[currentStepIndex].text

  useEffect(() => {
    setIsTyping(true)
  }, [currentStepIndex])

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
          <TypeAnimation sequence={[currentDialogue]} speed={66} />
        ) : (
          currentDialogue
        )}
      </div>
    </div>
  )
}
