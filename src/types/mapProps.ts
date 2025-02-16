import type { BlockProperties } from "./blockExports";

export type oneMapType = 
  number | {
    block: number;
    kwargs?: Record<string, any>;
    BlockProperties?: BlockProperties;
  }

export type MapProps = {
  mapElements: oneMapType[][],
  startingPositions: {
    "1": { x: number, y: number },
    "2": { x: number, y: number },
    "3": { x: number, y: number }
  }
} 