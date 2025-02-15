export type PlayerType = {
  kill (): void,
  postion: { x: number, y: number },

}

import {createContext} from 'react';

export const PlayerContext = createContext<{
  "1": PlayerType,
  "2": PlayerType,
  "3": PlayerType,
} | null>(null);