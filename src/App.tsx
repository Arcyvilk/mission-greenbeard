import { MissionControlDialogue } from "./components/MissionControlDialogue"
import { useScreenWidth } from "./utils/useScreenWidth"

import "./App.css"

export const App = () => {
  const { width } = useScreenWidth()
  const isMobile = width <= 800

  if (isMobile)
    return (
      <div className="warning">
        This game requires a larger screen to play. Please use a desktop or
        tablet device.
      </div>
    )

  return (
    <div className="app">
      <MissionControlDialogue />
    </div>
  )
}
