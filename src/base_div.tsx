import { useState, useEffect } from "react"

import BlocksBuilder from "./components/blockBuilder"

import FirstMap from "./maps/first"
import SecondMap from "./maps/second"

import { PlayerProvider } from "./context/playerContext"
import { BlockProvider } from "./context/blockContext"
import PlayerHandler from "./components/playerHandler"

const maps = [
  FirstMap, SecondMap
] as const

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}



export default function BaseDiv(props: { setPage: (page: string) => void }) {
  const [dimentions, setDimentions] = useState({ width: 20, height: 20 })
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const [gridDimention, setGridDiemntion] = useState(10)

  const [map, setMap] = useState<number>(1)
  const [deadstate, setDeadState] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowDimensions(getWindowDimensions())
      return () => window.removeEventListener("resize", () => { })
    })
  }, [])
  useEffect(() => {
    const optiomalWidth = Math.floor(windowDimensions.width / dimentions.width)
    const optimalHeight = Math.floor(windowDimensions.height / dimentions.height)
    setGridDiemntion(Math.min(optiomalWidth, optimalHeight))
  }, [windowDimensions, dimentions])

  return (
    <PlayerProvider killFunction={() => setDeadState(true)} winFunction={() => {
      if (map === maps.length - 1) {
        props.setPage("Menu")
      } else {
        setMap(map + 1)
      }}}>
      <BlockProvider>
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${dimentions.width}, 1fr)`,
          gridTemplateRows: `repeat(${dimentions.height}, 1fr)`,
          position: "relative"
        }}>

          <BlocksBuilder numberMap={maps[map]()} gridDimention={gridDimention} dimentionSeter={setDimentions} />
          <PlayerHandler gridDimention={gridDimention} />
        </div>
      </BlockProvider>
      {deadstate && (<div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.56)"
      }}>
        <h1>You died</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={() => location.reload()}>
            Main menue
          </button>
          <button onClick={() => {
            setMap(0)
            setDeadState(false)
          }
          }>Restart</button>
        </div>
      </div>)}
    </PlayerProvider>
  )
}
