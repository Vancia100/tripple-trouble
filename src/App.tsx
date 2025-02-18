import { useState, ReactNode, Dispatch } from 'react'
import './App.css'
import controlls from "./assets/controlls.png"
import BaseDiv from './base_div'

type PageCompontnt = (props: {
  setPage: Dispatch<React.SetStateAction<keyof typeof pages>>
}) => ReactNode

const Menu:PageCompontnt = props => { return(
<div style={{
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
}}>
  <h1>Tripple Trouble</h1> 
  <button onClick={() => props.setPage("Game")} style={{
    width: "max-content",
    fontSize: "1.5rem",
  }}>{"Click to play"}</button> 
  <img src={controlls} alt="How 2 gaming" style={{
    maxWidth: "100%",
    paddingTop: "3rem"
  }}/></div>
  )}

const pages:Record<string, PageCompontnt> = {
  Menu,
  "Win": props => { return <div><h1>Tripple Trouble</h1> <h2>You have won the game!</h2> <button onClick={() => props.setPage("Menu")}>{"Return to menu"}</button></div>},
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
