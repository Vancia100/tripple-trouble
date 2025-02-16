import { BlockContext } from "../../context/blockContext";
import { PlayerContext } from "../../context/playerContext";
import { useContext, useEffect, useState } from "react";

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

  useEffect(() => {
    if (!props.activates) return
    const targetBlock = blocks.blocks[props.activates.x]?.[props.activates.y]
    if (targetBlock && targetBlock.setIsOpen) {
      targetBlock.setIsOpen(pressed)
    }
  }, [pressed,blocks.blocks])

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
  }, [players, x, y])
  return (
    <>
    <img src={pressed ? "/button_unpressed.png" : "/button_pressed.png"} style={{ display: "block" }} width={props.width} height={props.width}></img>
    </>)
}
