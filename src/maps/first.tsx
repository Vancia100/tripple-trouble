import BlocksBuilder from "../components/blockBuilder"
import Wall from "../components/blocks/wall"
import GrassBlock from "../components/blocks/basic"
import { useEffect, useContext } from "react"
import type { MapProps } from "../types/mapProps"
import { PlayerContext } from "../context/playerContext"

//const width = 20
//const height = 20
const mapElements: number[][] =
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 2, 0, 2, 0, 0, 1],
    [1, 0, 0, 0, 2, 0, 2, 0, 3, 1],
    [1, 0, 0, 0, 2, 0, 2, 0, 0, 1],
    [1, 0, 0, 0, 2, 0, 2, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

const width = mapElements[0].length;
const height = mapElements.length

const startingPositions = {
  "1": { x: 1, y: 1 },
  "2": { x: 1, y: 2 },
  "3": { x: 1, y: 3 }
}


export default function FirstMap(props: MapProps) {
  const player = useContext(PlayerContext)
  const { dimentionSeter } = props
  useEffect(() => {
    dimentionSeter({ width, height })
    if (player) {
      for (const [key, value] of Object.entries(startingPositions)) {
        player[key].setPosition(value.x, value.y) // eslint-disable-line
      }
    }
  }, [dimentionSeter])
  return (
    mapElements
  )
}
