import { createContext, useState } from 'react';

type Blocktype =  Record<number, Record<number, Record<string, any>>>

export const BlockContext = createContext<{
  blocks: Blocktype,
  setBlocks: React.Dispatch<React.SetStateAction<Blocktype>>
}>({} as any)


export const BlockProvider = ({children}: {children: React.ReactNode}) => {
  const [blocks, setBlocks] = useState<Blocktype>({})
  return (
    <BlockContext.Provider value={{blocks, setBlocks}}>
      {children}
    </BlockContext.Provider>
  )
}