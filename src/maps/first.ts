import { MapProps } from '../types/mapProps'
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

const startingPositions = {
  "1": { x: 1, y: 1 },
  "2": { x: 1, y: 2 },
  "3": { x: 1, y: 3 }
}

export default function FirstMap() {

  return (
    {mapElements, startingPositions} satisfies MapProps
  )
}
