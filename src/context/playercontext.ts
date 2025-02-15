export type Player = {
  kill (): void,
  postion: { x: number, y: number },

}

import {createContext} from 'react';

export const PlayerContext = createContext<{
  "1": Player,
  "2": Player,
  "3": Player,
} | null>(null);