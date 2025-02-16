import { MapProps } from '../types/mapProps'
//const width = 20
//const height = 20
//
// 0 - Grass
// 1 - Wall
// 2 - Spikes
// 3 - Goal
// 4 - Door
// 5 - Button
const mapElements: (number | {
  block: number;
  kwargs: Record<string, any>;
})[][] =
  [
    [{block: 1, kwargs: {id: 1}}, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 2, 0, 2, 0, 5, 1],
    [1, 0, 0, 0, 2, 0, 2, 0, 0, 1],
    [1, 0, 0, 0, 2, 0, 2, 0, 0, 1],
    [1, 0, 0, 0, 2, 0, 2, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
    [1, 3, 0, 0, 2, 0, 2, 0, 0, 1],
    [1, 0, 0, 0, 2, 0, 2, 0, 5, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

const startingPositions = {
  "1": { x: 1, y: 1 },
  "2": { x: 1, y: 2 },
  "3": { x: 1, y: 3 }
}

export default function FirstMap() {

  return (
    { mapElements, startingPositions } satisfies MapProps
  )
}
