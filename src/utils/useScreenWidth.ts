import { useEffect, useState } from "react"

export const useScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const isMobile = width <= 800

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { width, isMobile }
}
