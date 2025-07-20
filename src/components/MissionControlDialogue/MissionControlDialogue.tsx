import { dialogue } from "../../data/dialogue"
import { MissionControlAvatar } from "../MissionControlAvatar"
import { TypeAnimation } from "react-type-animation"

import "./MissionControlDialogue.css"

export const MissionControlDialogue = () => {
  const currentDialogue = dialogue[0].text

  return (
    <div className="container">
      <div className="mcAvatar">
        <MissionControlAvatar />
      </div>

      <div className="title">Mission Control</div>
      <div className="description">
        <TypeAnimation sequence={[currentDialogue]} speed={66} />
      </div>
    </div>
  )
}
