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
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 2, 4, { block: 5, kwargs: { activates: { x: 5, y: 3 } } }, 2, { block: 5, kwargs: { activates: { x: 5, y: 5 } } }, { block: 5, kwargs: { activates: { x: 13, y: 3 } } }, 2, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, { block: 5, kwargs: { activates: { x: 3, y: 1 } } }, 2, { block: 5, kwargs: { activates: { x: 3, y: 5 } } }, 4, 2, 0, 0, 4, 0, 4, 0, 4, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 2, 4, { block: 5, kwargs: { activates: { x: 9, y: 3 } } }, 4, 2, { block: 5, kwargs: { activtes: { x: 11, y: 3 } } }, 2, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

const startingPositions = {
  "1": { x: 1, y: 1 },
  "2": { x: 1, y: 3 },
  "3": { x: 1, y: 5 }
}

export default function SecondMap() {

  return (
    { mapElements, startingPositions } satisfies MapProps
  )
}
