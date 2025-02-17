import { useEffect, useState, useContext } from "react"

import { BlockContext } from "../../context/blockContext"
import { PlayerContext } from "../../context/playerContext"

import closed from "../../assets/door_closed.png"
import opened from "../../assets/door_open.png"

export default function Door(props: {
  position: {
    x: number;
    y: number;
  }
  width: number;
}) {
  const players = useContext(PlayerContext)
  const blocks = useContext(BlockContext)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    blocks.setBlocks(prev => {
      if (!prev[props.position.x]) prev[props.position.x] = {}
      prev[props.position.x][props.position.y] = {
        passable: isOpen,
        setIsOpen
      }
      return prev
    })
  }, [isOpen, blocks, props.position])

  useEffect(() => {
    if (players) {
      for (const player of Object.values(players)) {
        if (player.position.x === props.position.x && player.position.y === props.position.y && !isOpen) {
          player.kill();
        }
      }
    }
  }, [players, isOpen])

  return (
    <img src={!isOpen ? closed : opened} style={{ display: "block" }} width={props.width} height={props.width}></img>)
}
