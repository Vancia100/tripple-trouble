import { BlockContext } from "../../context/blockContext";
import { PlayerContext } from "../../context/playerContext";
import { useContext, useEffect, useState } from "react";


import opend from "../../assets/button_unpressed.png"
import closed from "../../assets/button_pressed.png"

export default function Button(props: {
  position: {
    x: number;
    y: number;
  },
  width: number,
  activates: { x: number, y: number }
}) {
  const players = useContext(PlayerContext);
  const blocks = useContext(BlockContext);
  const {x, y} = props.position
  const [pressed, setIsPressed] = useState(false)

  //Setup block
  useEffect(() => {
    blocks.setBlocks(prev => {
      if (!prev[x]) prev[x] = {}
      prev[x][y] = {
        passable: true,
      }
      return prev
    })
  }, [])

  //Activate
  useEffect(() => {
    const targetBlock = blocks.blocks[props.activates.x]?.[props.activates.y]
    if (targetBlock && targetBlock.setIsOpen) {
      targetBlock.setIsOpen(pressed)
    }
  }, [pressed, blocks.blocks])

  //Check if player is on button
  useEffect(() => {
    if (players) {
      for (const player of Object.values(players)) {
        const stepedOn = player.position.x === x && player.position.y === y
        if (stepedOn) {
          setIsPressed(true)
          break
        }
        setIsPressed(false)
      }
    }
  }, [players])

  return (
    <>
    <img src={pressed ? closed : opend} style={{ display: "block" }} width={props.width} height={props.width}></img>
    </>)
}
