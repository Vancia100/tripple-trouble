import { useState, useEffect, ReactElement } from "react"

import FirstMap from "./maps/first"
import type { MapProps } from "./types/mapprops"

import { PlayerContext } from "./context/playercontext"

const definedMaps = {
  "first": FirstMap
  } as const

const maps = new Proxy<Record<string | symbol, (props:MapProps) => ReactElement>>(
  definedMaps,
  {
    get: (target, symbol) => {
      if (symbol in target) {
        return target[symbol]
      } else {
        return () => <div>something went wrong</div>
      }
    }
  }
) 

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

export default function BaseDiv() {
  const [dimentions, setDimentions] = useState({width: 20, height: 20})
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())
  const [gridDimention, setGridDiemntion] = useState(10)

const [map, setMap] = useState<keyof typeof definedMaps>("first")

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowDimensions(getWindowDimensions())
    return () => window.removeEventListener("resize", () => {})
    })
  }, [])
  useEffect(() => {
    const optiomalWidth = Math.floor(windowDimensions.width / dimentions.width)
    const optimalHeight = Math.floor(windowDimensions.height / dimentions.height)
    setGridDiemntion(Math.min(optiomalWidth, optimalHeight))
  }, [windowDimensions , dimentions])

  return (
    <PlayerContext.Provider value={null}>
      <div style={{display: "grid", gridTemplateColumns: `repeat(${dimentions.width}, 1fr)`, gridTemplateRows: `repeat(${dimentions.height}, 1fr)`}}>
        {maps[map]({dimentionSeter: setDimentions, gridDimention})}
      </div>
    </PlayerContext.Provider>
  )
}