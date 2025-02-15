import BlocksBuilder from "../components/blockBuilder"
import Wall from "../components/blocks/wall"
import GrassBlock from "../components/blocks/basic"
import { useEffect } from "react"
import type { MapProps } from "../types/mapProps"

//const width = 20
//const height = 20
const mapElements: number[][] =
  [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

const width = mapElements[0].length;
const height = mapElements.length


export default function FirstMap(props: MapProps) {
  const { dimentionSeter } = props
  useEffect(() => {
    dimentionSeter({ width, height })
  }, [dimentionSeter])
  return (
    mapElements
  )
}
