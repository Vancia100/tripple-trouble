import { useState, ReactNode, Dispatch } from 'react'
import './App.css'

import BaseDiv from './base_div'

const pages:Record<string, (props: {
  setPage: Dispatch<React.SetStateAction<keyof typeof pages>>
}) => ReactNode> = {
  "Menu": (props) => { return <div><h1>Tripple Trouble</h1> <button onClick={() => props.setPage("Game")}>{"Click to play"}</button></div>},
  "Game": (props) => <BaseDiv {...props} />,
} as const

function App() {
  const [page, setPage] = useState<keyof typeof pages>("Menu")
  return (
    <>
    {pages[page]({setPage})}
    </>
  )
}

export default App
