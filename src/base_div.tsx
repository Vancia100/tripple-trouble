import { useState, useEffect } from "react"

import BlocksBuilder from "./components/blockBuilder"

import FirstMap from "./maps/first"

import { PlayerContext } from "./context/playercontext"
import PlayerHandler from "./components/playerHandler"

const maps = {
  "first": FirstMap
} as const

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

export default function BaseDiv() {
  const [dimentions, setDimentions] = useState({ width: 20, height: 20 })
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const [gridDimention, setGridDiemntion] = useState(10)

  const [map, setMap] = useState<keyof typeof maps>("first")

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
    <PlayerContext.Provider value={null}>
      <div style={{
        display: "grid", 
        gridTemplateColumns: `repeat(${dimentions.width}, 1fr)`,
        gridTemplateRows: `repeat(${dimentions.height}, 1fr)`,
        position : "relative"}}>
        <BlocksBuilder numberMap={maps[map]({ dimentionSeter: setDimentions, gridDimention })} gridDimention={gridDimention}>
        </BlocksBuilder>
        <PlayerHandler gridDimention={gridDimention}/>
      </div>
    </PlayerContext.Provider >
  )
}
