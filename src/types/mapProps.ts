import type { BlockProperties } from "./blockExports";

export type MapProps = {
  mapElements : (number | {
    block: number;
    kwargs?: Record<string, any>;
    BlockProperties?: BlockProperties;
  })[][],
  startingPositions: {
    "1": { x: number, y: number },
    "2": { x: number, y: number },
    "3": { x: number, y: number }
  }
} 