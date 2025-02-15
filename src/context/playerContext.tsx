import { createContext, ReactNode, useState, } from 'react';

export type PlayerType = {
  kill (): void,
  setPosition (x: number, y: number): void,
  position: Readonly<{ x: number, y: number }>,
}

export const PlayerProvider = ({children, killFunction}: {children:ReactNode, killFunction: () => void}) => {
  const [player1Position, setPlayer1Position] = useState({x: 0, y: 0})
  const [player2Position, setPlayer2Position] = useState({x: 0, y: 0})
  const [player3Position, setPlayer3Position] = useState({x: 0, y: 0})

  return (
    <PlayerContext.Provider value={{
      "1": {
        position: player1Position,
        kill: killFunction,
        setPosition: (x, y) => {
          setPlayer1Position({x, y})
        }
      },
      "2": {
        position: player2Position,
        kill: killFunction,
        setPosition: (x, y) => {
          setPlayer2Position({x, y})
        }
      },
      "3": {
        position: player3Position,
        kill: killFunction,
        setPosition: (x, y) => {
          setPlayer3Position({x, y})
        }
      }
    }}>
      {children}
    </PlayerContext.Provider>
  )
}
export const PlayerContext = createContext<{
  "1": PlayerType,
  "2": PlayerType,
  "3": PlayerType,
} | null>(null);