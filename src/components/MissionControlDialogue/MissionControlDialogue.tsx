import { useState } from "react"
import { dialogue } from "../../data/dialogue"
import { MissionControlAvatar } from "../MissionControlAvatar"
import { TypeAnimation } from "react-type-animation"

import "./MissionControlDialogue.css"

export const MissionControlDialogue = () => {
  const [isTyping, setIsTyping] = useState(true)

  const currentDialogue = dialogue[0].text

  const onClick = () => {
    setIsTyping(false)
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
