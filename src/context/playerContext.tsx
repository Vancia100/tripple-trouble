import { createContext, ReactNode, useState, Dispatch, SetStateAction} from 'react';

export type PlayerType = {
  kill (): void,
  setPosition: Dispatch<SetStateAction<{ x: number; y: number; }>>,
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
        setPosition: setPlayer1Position
      },
      "2": {
        position: player2Position,
        kill: killFunction,
        setPosition: setPlayer2Position
      },
      "3": {
        position: player3Position,
        kill: killFunction,
        setPosition: setPlayer3Position
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