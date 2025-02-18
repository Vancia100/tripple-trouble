import { createContext, ReactNode, useState, Dispatch, SetStateAction} from 'react';

export type PlayerType = {
  kill (): void,
  win ?(): void,
  setPosition: Dispatch<SetStateAction<{ x: number; y: number; }>>,
  position: Readonly<{ x: number, y: number }>,
  outlineColor: string
  setOutlineColor:  Dispatch<SetStateAction<string>>
}

export const PlayerProvider = ({children, killFunction, winFunction}: {children:ReactNode, killFunction: () => void, winFunction: () => void}) => {
  const [player1Position, setPlayer1Position] = useState({x: 0, y: 0})
  const [player2Position, setPlayer2Position] = useState({x: 0, y: 0})
  const [player3Position, setPlayer3Position] = useState({x: 0, y: 0})

  const [player1OutlineColor, setPlayer1OutlineColor] = useState("#e31edc")
  const [player2OutlineColor, setPlayer2OutlineColor] = useState("#dce31e")
  const [player3OutlineColor, setPlayer3OutlineColor] = useState("#494a4f")
  return (
    <PlayerContext.Provider value={{
      "1": {
        position: player1Position,
        outlineColor: player1OutlineColor,
        setOutlineColor: setPlayer1OutlineColor,
        kill: killFunction,
        setPosition: setPlayer1Position,
        win: winFunction
      },
      "2": {
        position: player2Position,
        outlineColor: player2OutlineColor,
        setOutlineColor: setPlayer2OutlineColor,
        kill: killFunction,
        setPosition: setPlayer2Position
      },
      "3": {
        position: player3Position,
        outlineColor: player3OutlineColor,
        setOutlineColor: setPlayer3OutlineColor,
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