import { useState, useEffect } from "react"

import BlocksBuilder from "./components/blockBuilder"

import FirstMap from "./maps/first"
import SecondMap from "./maps/second"
import ThirdMap from "./maps/third"

import { PlayerProvider } from "./context/playerContext"
import { BlockProvider } from "./context/blockContext"
import PlayerHandler from "./components/playerHandler"

const maps = [
  FirstMap, SecondMap, ThirdMap
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

  const [map, setMap] = useState<number>(0) // Initial map
  const [deadstate, setDeadState] = useState(false)
  const [reseter, setReseter] = useState(false)
  const reset = () => {
    setReseter(prev => !prev)
    setTimeout(() => setDeadState(false), 100)
  }

  // Window dimentions setup
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowDimensions(getWindowDimensions())
      return () => window.removeEventListener("resize", () => { })
    })
  }, [])

  //Window dimention listener
  useEffect(() => {
    const optiomalWidth = Math.floor(windowDimensions.width / dimentions.width)
    const optimalHeight = Math.floor(windowDimensions.height / dimentions.height)
    setGridDiemntion(Math.min(optiomalWidth, optimalHeight))
  }, [windowDimensions, dimentions])

  return (
    <PlayerProvider killFunction={() => setDeadState(true)} winFunction={() => {
      if (map === maps.length - 1) {
        props.setPage("Win")
      } else {
        setMap(prev => prev + 1)
      }}}>
      <BlockProvider>
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${dimentions.width}, 1fr)`,
          gridTemplateRows: `repeat(${dimentions.height}, 1fr)`,
          position: "relative"
        }}>

          <BlocksBuilder 
            numberMap={maps[map]()} 
            gridDimention={gridDimention} 
            dimentionSeter={setDimentions} 
            mapIndex={map} 
            reseter={reseter}/>
          <PlayerHandler 
            gridDimention={gridDimention} 
            deadState={deadstate}/>
        </div>
      </BlockProvider>
      {deadstate && (<div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.56)"
      }}>
        <h1>You died</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button onClick={() => props.setPage("Menu")} style={{
            marginRight: "10px"
          }}>
            Main menu
          </button>
          <button onClick={() => {
            reset()
          }
          }>Restart Level</button>
        </div>
      </div>)}
    </PlayerProvider>
  )
}
