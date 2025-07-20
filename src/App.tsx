import { useScreenWidth } from "./utils/useScreenWidth"
import { AppContextProvider } from "./context"
import { Game } from "./views/Game"
import "./App.css"

export const App = () => {
  const { isMobile } = useScreenWidth()

  return (
    <AppContextProvider>
      {isMobile ? <ScreenWarning /> : <Game />}
    </AppContextProvider>
  )
}

const ScreenWarning = () => (
  <div className="warning">
    This game requires a larger screen to play. Please use a desktop or tablet
    device.
  </div>
)
