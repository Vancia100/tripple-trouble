import { MapProps, oneMapType } from '../types/mapProps'
//const width = 20
//const height = 20
//
// 0 - Grass
// 1 - Wall
// 2 - Spikes
// 3 - Goal
// 4 - Door
// 5 - Button
// 6 - Treadmill args: direction vector

const t = {block: 6, kwargs:{direction: {y: 0, x: -1}}}
const s = {block: 2, kwargs:{delay: 1000, spikeFrequenzy: 4000, offset: 1000}}
const r = {block: 2, kwargs:{delay: 1000, spikeFrequenzy: 4000, offset: 3000}}

const buttonArray = [{activates: {y: 1, x: 4}}, {activates: {y: 1, x: 7}}, {activates: {y: 1, x: 10}}, {activates: {y: 1, x: 13}}, {activates: {y: 1, x: 0}}, {activates: {y: 1, x: 0}}].sort(() => Math.random() - 0.5) // We do a bit of trolling
const mapElements: oneMapType[][] =
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, s, r, 4, r, s, 4, s, r, 4, r, s, 4, r, s, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 2, {block: 5, kwargs:buttonArray[0]}, r, {block: 5, kwargs:buttonArray[1]}, 2, {block: 5, kwargs:buttonArray[2]}, r, {block: 5, kwargs:buttonArray[3]}, 2, {block: 5, kwargs:buttonArray[4]}, r, {block: 5, kwargs:buttonArray[5]}, 2, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, {block: 5, kwargs:{activates: {y: 5, x: 14}}}, 1],
    [1, 7, t, t, t, t, t, t, t, t, t, t, t, t, 4, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

const startingPositions = {
  "1": { x: 1, y: 1 },
  "2": { x: 1, y: 3 },
  "3": { x: 7, y: 5 }
}

export default function ThirdMap() {

  return (
    { mapElements, startingPositions } satisfies MapProps
  )
}