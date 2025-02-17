import {useEffect, useRef, useContext } from "react"
import { PlayerContext } from "../context/playerContext"
import { BlockContext } from "../context/blockContext"

import Player from "./player"

export default function PlayerHandler(props: {
  gridDimention: number
  deadState:boolean
}) {
  const players = useContext(PlayerContext)
  const blocks = useContext(BlockContext)
  const deadStateRef = useRef(props.deadState);

  useEffect(() => {
    deadStateRef.current = props.deadState;
  }, [props.deadState]);

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
    },
    move(id: string, direction: {x: number, y: number}) {
      if (deadStateRef.current) return
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
          players!["1"].setPosition((prev) => {
            if (blocks.blocks?.[prev.x + direction.x]?.[prev.y + direction.y]?.passable !== false) {
              return {x: prev.x + direction.x, y: prev.y + direction.y}
            } else {
              return prev
            }
           })
          break
        case 1:
          players!["2"].setPosition((prev) => { 
            if (blocks.blocks?.[prev.x + direction.x]?.[prev.y + direction.y]?.passable !== false) {
              return {x: prev.x + direction.x, y: prev.y + direction.y}
            } else {
              return prev
            }
          })
          break
        case 2:
          players!["3"].setPosition((prev) => { 
            if (blocks.blocks?.[prev.x + direction.x]?.[prev.y + direction.y]?.passable !== false) {
              return {x: prev.x + direction.x, y: prev.y + direction.y}
            } else {
              return prev
            }
          })
          break
      }
    }
  })

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [])

  return (
    <>
      <Player id={1} gridDimention={props.gridDimention} position={players!["1"].position} color="#e2330f"></Player>
      <Player id={2} gridDimention={props.gridDimention} position={players!["2"].position} color="#0d1a93"></Player>
      <Player id={3} gridDimention={props.gridDimention} position={players!["3"].position} color="#0ba80e"></Player>
    </>
  )
}