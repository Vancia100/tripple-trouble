import { useState, useEffect, useRef } from "react"

import Player from "./player"

export default function PlayerHandler(props: {
  gridDimention: number
}) {

  const [player1Position, setPlayer1Position] = useState({x: 0, y: 0})
  const [player2Position, setPlayer2Position] = useState({x: 0, y: 0})
  const [player3Position, setPlayer3Position] = useState({x: 0, y: 0})

  const playersRef = useRef({
    player1: 0,
    player2: 1,
    changePlayer(id: string) {
      switch (id) {
        case "1":
          this.player1 = 3 - this.player1 - this.player2
          break
          case "2":
            this.player2 = 3 - this.player1 - this.player2
            break
          }
      console.log("changing player", id, this.player1, this.player2)
    },
    move(id: string, direction: {x: number, y: number}) {
      switch (id) {
        case "1":
          this.movePlayerRaw(this.player1, direction)
          break
        case "2":
          this.movePlayerRaw(this.player2, direction)
          break
      }
    },
    movePlayerRaw(gubbe: number, direction: {x: number, y: number}) {
      switch (gubbe) {
        case 0:
          setPlayer1Position((prev) => { return {x: prev.x + direction.x, y: prev.y + direction.y}})
          break
        case 1:
          setPlayer2Position((prev) => { return {x: prev.x + direction.x, y: prev.y + direction.y}})
          break
        case 2:
          setPlayer3Position((prev) => { return {x: prev.x + direction.x, y: prev.y + direction.y}})
          break
      }
    }
  })

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.repeat) return
      e.preventDefault()
      switch (e.key) {
        case "w":
          playersRef.current.move("1", {x: 0, y: -1})
          break
        case "a":
          playersRef.current.move("1", {x: -1, y: 0})
          break
        case "s":
          playersRef.current.move("1", {x: 0, y: 1})
          break
        case "d":
          playersRef.current.move("1", {x: 1, y: 0})
          break
        case "e":
          playersRef.current.changePlayer("1")
          break
        case "i":
          playersRef.current.move("2", {x: 0, y: -1})
          break
        case "j":
          playersRef.current.move("2", {x: -1, y: 0})
          break
        case "k":
          playersRef.current.move("2", {x: 0, y: 1})
          break
        case "l":
          playersRef.current.move("2", {x: 1, y: 0})
          break
        case "u":
          playersRef.current.changePlayer("2")
          break
      }
    })
    return () => document.removeEventListener("keydown", () => {})
  }, [])

  return (
    <>
    <Player id={1} gridDimention={props.gridDimention} position={player1Position} color="#ffffff"></Player>
    <Player id={2} gridDimention={props.gridDimention} position={player2Position} color="#ffffff"></Player>
    <Player id={3} gridDimention={props.gridDimention} position={player3Position} color="#ffffff"></Player>
    </>
  )
}